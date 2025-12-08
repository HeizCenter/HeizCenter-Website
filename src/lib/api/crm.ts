/**
 * CRM Service Layer
 *
 * Handles form submissions via n8n lead management webhooks.
 */

import {
  submitContactToN8n,
  submitQuoteToN8n,
  submitEmergencyToN8n,
} from './n8n-webhooks';

/**
 * Submit contact form to n8n webhook
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  try {
    console.log('📬 Processing contact form submission for:', data.email);

    const result = await submitContactToN8n(data);

    if (!result.success) {
      throw new Error(result.error || 'Failed to submit contact form');
    }

    console.log('✅ Contact form processed successfully. Lead ID:', result.leadId);

    return {
      success: true,
      leadId: result.leadId,
    };
  } catch (error) {
    console.error('❌ Submit contact form error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}

/**
 * Submit quote request to n8n webhook
 */
export async function submitQuoteRequest(data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  serviceType: string;
  propertyType: string;
  constructionYear?: string;
  heatingArea?: string;
  pumpType?: string;
  heatingSurface?: string;
  currentHeating?: string;
  insulation?: string;
  buildingYear?: string;
  residents?: string;
  estimatedCost?: string;
  message?: string;
  preferredContactTime?: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  try {
    console.log('💼 Processing quote request for:', data.email);

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
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to submit quote request');
    }

    console.log('✅ Quote request processed successfully. Lead ID:', result.leadId);

    return {
      success: true,
      leadId: result.leadId,
    };
  } catch (error) {
    console.error('❌ Submit quote request error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}

/**
 * Submit emergency service request to n8n webhook (HIGH PRIORITY)
 */
export async function submitEmergencyRequest(data: {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
  emergencyType: string;
  description: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  try {
    console.log('🚨 Processing EMERGENCY request for:', data.phone);

    const result = await submitEmergencyToN8n({
      name: data.name,
      phone: data.phone,
      address: data.address,
      postalCode: data.postalCode,
      emergencyType: data.emergencyType,
      description: data.description,
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to submit emergency request');
    }

    console.log('✅ Emergency request created successfully. Lead ID:', result.leadId);

    return {
      success: true,
      leadId: result.leadId,
    };
  } catch (error) {
    console.error('❌ Submit emergency request error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte rufen Sie uns direkt an: +49 8234 9665900',
    };
  }
}

/**
 * Subscribe email to newsletter
 * Note: Newsletter subscriptions can be handled via n8n workflow if needed
 * For now, this returns success as the n8n workflow can handle this separately
 */
export async function subscribeNewsletter(data: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('📧 Processing newsletter subscription for:', data.email);

    // Newsletter can be handled by a separate n8n workflow endpoint
    // For now, we log and return success
    // TODO: Add newsletter webhook endpoint if needed

    console.log('✅ Newsletter subscription logged for:', data.email);

    return {
      success: true,
    };
  } catch (error) {
    console.error('❌ Subscribe newsletter error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    };
  }
}
