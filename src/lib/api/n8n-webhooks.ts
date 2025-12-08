/**
 * n8n Webhook Service
 *
 * Handles form submissions to n8n lead management workflows.
 * Replaces direct Odoo integration with webhook-based approach.
 */

// Webhook endpoints configuration
const N8N_BASE_URL = process.env.N8N_WEBHOOK_BASE_URL || 'https://heizcenter.app.n8n.cloud';

const WEBHOOK_ENDPOINTS = {
  contact: `${N8N_BASE_URL}/webhook/leads/contact`,
  quote: `${N8N_BASE_URL}/webhook/leads/quote`,
  emergency: `${N8N_BASE_URL}/webhook/leads/emergency`,
} as const;

// Response types from n8n webhooks
interface N8nWebhookResponse {
  success: boolean;
  message?: string;
  lead_id?: string;
  error?: string;
}

/**
 * Generic webhook submission helper
 */
async function submitToWebhook(
  endpoint: string,
  data: Record<string, unknown>
): Promise<N8nWebhookResponse> {
  try {
    console.log(`📤 Sending to n8n webhook: ${endpoint}`);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'website',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('❌ n8n webhook error:', result);
      return {
        success: false,
        error: result.error || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    console.log('✅ n8n webhook response:', result);
    return result as N8nWebhookResponse;
  } catch (error) {
    console.error('❌ n8n webhook request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

// =============================================================================
// Contact Form
// =============================================================================

interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

/**
 * Submit contact form to n8n webhook
 */
export async function submitContactToN8n(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  // Combine subject and message for n8n payload
  const fullMessage = data.subject
    ? `${data.subject}\n\n${data.message}`
    : data.message;

  const payload: ContactFormPayload = {
    name: data.name,
    email: data.email,
    message: fullMessage,
    ...(data.phone && { phone: data.phone }),
  };

  const result = await submitToWebhook(WEBHOOK_ENDPOINTS.contact, payload as unknown as Record<string, unknown>);

  return {
    success: result.success,
    leadId: result.lead_id,
    error: result.error,
  };
}

// =============================================================================
// Quote Form
// =============================================================================

// Mapping from website service types to n8n expected values
const SERVICE_TYPE_MAP: Record<string, string> = {
  waermepumpe: 'waermepumpe',
  heizung: 'heizung_neu',
  sanitaer: 'sanitaer',
  klimaanlage: 'klimaanlage',
  solar: 'solar',
  sonstiges: 'other',
};

// Mapping from website property types to n8n expected values
const PROPERTY_TYPE_MAP: Record<string, string> = {
  einfamilienhaus: 'efh',
  mehrfamilienhaus: 'mfh',
  gewerbe: 'gewerbe',
};

interface QuoteFormPayload {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  street?: string;
  postal_code?: string;
  city?: string;
  property_type?: string;
  heating_area?: string;
  current_heating?: string;
  building_year?: string;
  urgency?: string;
  message?: string;
}

/**
 * Submit quote request to n8n webhook
 */
export async function submitQuoteToN8n(data: {
  name: string;
  email: string;
  phone: string;
  address?: string;
  postalCode?: string;
  city?: string;
  serviceType: string;
  propertyType?: string;
  constructionYear?: string;
  heatingArea?: string;
  currentHeating?: string;
  message?: string;
  preferredContactTime?: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  // Map service type to n8n expected value
  const mappedServiceType = SERVICE_TYPE_MAP[data.serviceType] || 'other';

  // Map property type to n8n expected value
  const mappedPropertyType = data.propertyType
    ? PROPERTY_TYPE_MAP[data.propertyType] || data.propertyType
    : undefined;

  // Map preferred contact time to urgency
  const urgencyMap: Record<string, string> = {
    morning: 'diese_woche',
    afternoon: 'diese_woche',
    evening: 'diese_woche',
    anytime: 'flexibel',
  };
  const urgency = data.preferredContactTime
    ? urgencyMap[data.preferredContactTime] || 'flexibel'
    : undefined;

  const payload: QuoteFormPayload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    service_type: mappedServiceType,
    ...(data.address && { street: data.address }),
    ...(data.postalCode && { postal_code: data.postalCode }),
    ...(data.city && { city: data.city }),
    ...(mappedPropertyType && { property_type: mappedPropertyType }),
    ...(data.heatingArea && { heating_area: `${data.heatingArea} m²` }),
    ...(data.currentHeating && { current_heating: data.currentHeating }),
    ...(data.constructionYear && { building_year: data.constructionYear }),
    ...(urgency && { urgency }),
    ...(data.message && { message: data.message }),
  };

  const result = await submitToWebhook(WEBHOOK_ENDPOINTS.quote, payload as unknown as Record<string, unknown>);

  return {
    success: result.success,
    leadId: result.lead_id,
    error: result.error,
  };
}

// =============================================================================
// Emergency Form
// =============================================================================

// Mapping from website emergency types to n8n expected values
const EMERGENCY_TYPE_MAP: Record<string, string> = {
  'heizung-ausfall': 'heizung_ausfall',
  'rohrbruch': 'wasserrohrbruch',
  'gasgeruch': 'gasgeruch',
  'warmwasser-ausfall': 'heizung_ausfall', // Map to closest type
  'sonstiges': 'other',
};

interface EmergencyFormPayload {
  name: string;
  phone: string;
  emergency_type: string;
  email?: string;
  street?: string;
  postal_code?: string;
  city?: string;
  description?: string;
}

/**
 * Submit emergency request to n8n webhook
 */
export async function submitEmergencyToN8n(data: {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  emergencyType: string;
  description?: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  // Map emergency type to n8n expected value
  const mappedEmergencyType = EMERGENCY_TYPE_MAP[data.emergencyType] || 'other';

  const payload: EmergencyFormPayload = {
    name: data.name,
    phone: data.phone,
    emergency_type: mappedEmergencyType,
    ...(data.email && { email: data.email }),
    ...(data.address && { street: data.address }),
    ...(data.postalCode && { postal_code: data.postalCode }),
    ...(data.city && { city: data.city }),
    ...(data.description && { description: data.description }),
  };

  const result = await submitToWebhook(WEBHOOK_ENDPOINTS.emergency, payload as unknown as Record<string, unknown>);

  return {
    success: result.success,
    leadId: result.lead_id,
    error: result.error,
  };
}

// =============================================================================
// Health Check
// =============================================================================

/**
 * Test n8n webhook connectivity (simple ping)
 */
export async function testN8nConnection(): Promise<{ success: boolean; message: string }> {
  try {
    // Test by making a HEAD request or simple GET to base URL
    const response = await fetch(N8N_BASE_URL, {
      method: 'HEAD',
    });

    if (response.ok || response.status === 404) {
      // 404 is acceptable - means server is reachable but endpoint not found
      return {
        success: true,
        message: `n8n server reachable at ${N8N_BASE_URL}`,
      };
    }

    return {
      success: false,
      message: `n8n server returned status ${response.status}`,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Connection failed',
    };
  }
}
