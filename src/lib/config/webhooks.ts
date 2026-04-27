/**
 * n8n Webhook URLs — Single Source of Truth
 *
 * Workflow: W-01 v2 "Website-Leads → Odoo" (id: k8wSNCM2LV89ns34)
 * Backend: HTTP 200 always, parse `success` field from response body.
 *
 * Override via env: N8N_WEBHOOK_BASE_URL=https://other.host
 */

export const WEBHOOK_BASE_URL =
  process.env.N8N_WEBHOOK_BASE_URL || "https://auto.heizcenter.de";

export const LEAD_WEBHOOKS = {
  contact: `${WEBHOOK_BASE_URL}/webhook/leads/contact`,
  quote: `${WEBHOOK_BASE_URL}/webhook/leads/quote`,
  emergency: `${WEBHOOK_BASE_URL}/webhook/leads/emergency`,
} as const;

export type LeadWebhookKey = keyof typeof LEAD_WEBHOOKS;
