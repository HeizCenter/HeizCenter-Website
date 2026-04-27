/**
 * n8n Webhook Service — W-01 v2
 *
 * Posts website-form leads to n8n workflow `k8wSNCM2LV89ns34`.
 * Contract:
 *   - Backend always returns HTTP 200, even on validation/server errors.
 *   - Frontend MUST parse the `success` field from the response body.
 *   - Token values (service_type, property_type, urgency, emergency_type)
 *     must match the exact strings the workflow expects (snake_case lowercase).
 */

import { LEAD_WEBHOOKS, WEBHOOK_BASE_URL } from "@/lib/config/webhooks";

// Response shape from W-01 v2 (HTTP-200-always pattern)
interface N8nWebhookResponse {
  success: boolean;
  lead_id?: number | string;
  message?: string;
  error?: string;
}

/**
 * Post a payload to a lead webhook and return the parsed response.
 * Errors at the network layer surface as { success: false, error }.
 */
async function submitToWebhook(
  endpoint: string,
  data: Record<string, unknown>
): Promise<N8nWebhookResponse> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let result: N8nWebhookResponse;
    try {
      result = (await response.json()) as N8nWebhookResponse;
    } catch {
      return {
        success: false,
        error: `n8n returned non-JSON response (HTTP ${response.status})`,
      };
    }

    // Trust the body's `success` flag — backend uses HTTP 200 always.
    return result;
  } catch (error) {
    console.error("n8n webhook request failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}

// =============================================================================
// Contact Form
// =============================================================================

interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  address?: string;
  postal_code?: string;
  city?: string;
  message?: string;
  service_type?: string;
}

export async function submitContactToN8n(data: {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}): Promise<{ success: boolean; leadId?: number | string; error?: string; message?: string }> {
  // Combine subject + message — schema only carries `message`.
  const fullMessage = data.subject ? `${data.subject}\n\n${data.message}` : data.message;

  const payload: ContactFormPayload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: fullMessage,
  };

  const result = await submitToWebhook(LEAD_WEBHOOKS.contact, payload as unknown as Record<string, unknown>);

  return {
    success: result.success,
    leadId: result.lead_id,
    error: result.error,
    message: result.message,
  };
}

// =============================================================================
// Quote Form
// =============================================================================

// Calculator-only enums → human-readable, appended to `message` field
// (W-01 v2 schema does not have dedicated fields for these).
const PUMP_TYPE_LABELS: Record<string, string> = {
  "air-water": "Luft-Wasser-Wärmepumpe",
  "ground-water": "Sole-Wasser-Wärmepumpe (Erdwärme)",
  "water-water": "Wasser-Wasser-Wärmepumpe",
};
const HEATING_SURFACE_LABELS: Record<string, string> = {
  floor: "Fußbodenheizung",
  radiators: "Heizkörper (Radiatoren)",
  mixed: "Gemischt",
};
const INSULATION_LABELS: Record<string, string> = {
  poor: "Schlecht (Altbau unsaniert)",
  average: "Durchschnittlich",
  good: "Gut (Neubau/saniert)",
};
const CURRENT_HEATING_LABELS: Record<string, string> = {
  gas: "Gasheizung",
  oil: "Ölheizung",
  electric: "Elektroheizung",
  coal: "Kohleheizung",
};

// Map preferred contact time (UI) → urgency (n8n token)
const CONTACT_TIME_TO_URGENCY: Record<string, string> = {
  morning: "diese_woche",
  afternoon: "diese_woche",
  evening: "diese_woche",
  anytime: "flexibel",
};

interface QuoteFormPayload {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  address?: string;
  postal_code?: string;
  city?: string;
  property_type?: string;
  heating_area?: string;
  current_heating?: string;
  building_year?: string;
  urgency: string;
  message?: string;
}

export async function submitQuoteToN8n(data: {
  name: string;
  email: string;
  phone: string;
  address?: string;
  postalCode: string;
  city: string;
  serviceType: string;
  propertyType?: string;
  constructionYear?: string;
  heatingArea?: string;
  currentHeating?: string;
  message?: string;
  preferredContactTime?: string;
  pumpType?: string;
  heatingSurface?: string;
  insulation?: string;
  buildingYear?: string;
  residents?: string;
  estimatedCost?: string;
}): Promise<{ success: boolean; leadId?: number | string; error?: string; message?: string }> {
  // Calculator-only fields are not in W-01 v2 schema → fold into message.
  const calcParts: string[] = [];
  if (data.pumpType) calcParts.push(`Wärmepumpentyp: ${PUMP_TYPE_LABELS[data.pumpType] || data.pumpType}`);
  if (data.heatingSurface)
    calcParts.push(`Heizfläche: ${HEATING_SURFACE_LABELS[data.heatingSurface] || data.heatingSurface}`);
  if (data.insulation) calcParts.push(`Dämmung: ${INSULATION_LABELS[data.insulation] || data.insulation}`);
  if (data.residents) calcParts.push(`Personen im Haushalt: ${data.residents}`);
  if (data.estimatedCost)
    calcParts.push(`Geschätzte Kosten: ${parseInt(data.estimatedCost, 10).toLocaleString("de-DE")} €`);
  // Calculator buildingYear is an enum bucket like "before-1980" → not 4-digit, append as text instead.
  if (!data.constructionYear && data.buildingYear) {
    calcParts.push(`Baujahr (geschätzt): ${data.buildingYear}`);
  }

  const combinedMessage = [data.message, calcParts.length > 0 ? calcParts.join(" | ") : undefined]
    .filter((s): s is string => Boolean(s && s.length > 0))
    .join("\n\n");

  // Map current_heating to readable label (n8n stores raw, but this aids the AI-Draft step).
  const mappedCurrentHeating = data.currentHeating
    ? CURRENT_HEATING_LABELS[data.currentHeating] || data.currentHeating
    : undefined;

  // Send building_year only if it looks like a 4-digit year.
  const validYear = (data.constructionYear || "").match(/^\d{4}$/) ? data.constructionYear : undefined;

  // Map preferredContactTime → urgency token. Default 'flexibel' if not set.
  const urgency = data.preferredContactTime
    ? CONTACT_TIME_TO_URGENCY[data.preferredContactTime] || "flexibel"
    : "flexibel";

  const payload: QuoteFormPayload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    service_type: data.serviceType,
    urgency,
    ...(data.address && { address: data.address }),
    ...(data.postalCode && { postal_code: data.postalCode }),
    ...(data.city && { city: data.city }),
    ...(data.propertyType && { property_type: data.propertyType }),
    ...(data.heatingArea && { heating_area: data.heatingArea }),
    ...(mappedCurrentHeating && { current_heating: mappedCurrentHeating }),
    ...(validYear && { building_year: validYear }),
    ...(combinedMessage.length > 0 && { message: combinedMessage }),
  };

  const result = await submitToWebhook(LEAD_WEBHOOKS.quote, payload as unknown as Record<string, unknown>);

  return {
    success: result.success,
    leadId: result.lead_id,
    error: result.error,
    message: result.message,
  };
}

// =============================================================================
// Emergency Form
// =============================================================================

interface EmergencyFormPayload {
  name: string;
  phone: string;
  emergency_type: string;
  email?: string;
  address?: string;
  postal_code?: string;
  city?: string;
  message?: string;
}

export async function submitEmergencyToN8n(data: {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  emergencyType: string;
  description?: string;
}): Promise<{ success: boolean; leadId?: number | string; error?: string; message?: string }> {
  const payload: EmergencyFormPayload = {
    name: data.name,
    phone: data.phone,
    emergency_type: data.emergencyType,
    ...(data.email && { email: data.email }),
    ...(data.address && { address: data.address }),
    ...(data.postalCode && { postal_code: data.postalCode }),
    ...(data.city && { city: data.city }),
    ...(data.description && { message: data.description }),
  };

  const result = await submitToWebhook(LEAD_WEBHOOKS.emergency, payload as unknown as Record<string, unknown>);

  return {
    success: result.success,
    leadId: result.lead_id,
    error: result.error,
    message: result.message,
  };
}

// =============================================================================
// Health Check
// =============================================================================

/**
 * Lightweight reachability test for the n8n host (used by /api/health/webhooks).
 * A 404 from the base URL is acceptable — it means TCP/TLS is up but the path is not routed.
 */
export async function testN8nConnection(): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(WEBHOOK_BASE_URL, { method: "HEAD" });

    if (response.ok || response.status === 404) {
      return { success: true, message: `n8n server reachable at ${WEBHOOK_BASE_URL}` };
    }
    return { success: false, message: `n8n server returned status ${response.status}` };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Connection failed",
    };
  }
}
