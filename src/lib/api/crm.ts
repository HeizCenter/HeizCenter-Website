/**
 * CRM Service Layer
 *
 * Forwards form submissions to the n8n W-01 v2 webhook layer.
 * Pass-through wrapper around `n8n-webhooks.ts`.
 */

import {
  submitContactToN8n,
  submitQuoteToN8n,
  submitEmergencyToN8n,
} from "./n8n-webhooks";

type CrmResult = {
  success: boolean;
  leadId?: string | number;
  message?: string;
  error?: string;
};

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<CrmResult> {
  const result = await submitContactToN8n(data);
  return {
    success: result.success,
    leadId: result.leadId,
    message: result.message,
    error: result.error,
  };
}

export async function submitQuoteRequest(data: {
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
}): Promise<CrmResult> {
  const result = await submitQuoteToN8n({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    postalCode: data.postalCode,
    city: data.city,
    serviceType: data.serviceType,
    propertyType: data.propertyType,
    constructionYear: data.constructionYear || data.buildingYear,
    heatingArea: data.heatingArea,
    currentHeating: data.currentHeating,
    message: data.message,
    preferredContactTime: data.preferredContactTime,
    pumpType: data.pumpType,
    heatingSurface: data.heatingSurface,
    insulation: data.insulation,
    buildingYear: data.buildingYear,
    residents: data.residents,
    estimatedCost: data.estimatedCost,
  });
  return {
    success: result.success,
    leadId: result.leadId,
    message: result.message,
    error: result.error,
  };
}

export async function submitEmergencyRequest(data: {
  name: string;
  email?: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  emergencyType: string;
  description: string;
}): Promise<CrmResult> {
  const result = await submitEmergencyToN8n({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    postalCode: data.postalCode,
    city: data.city,
    emergencyType: data.emergencyType,
    description: data.description,
  });
  return {
    success: result.success,
    leadId: result.leadId,
    message: result.message,
    error: result.error,
  };
}

export async function subscribeNewsletter(_: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  // Newsletter subscriptions are not part of the W-01 v2 lead workflow.
  // No-op success until a dedicated newsletter webhook is added.
  return { success: true };
}
