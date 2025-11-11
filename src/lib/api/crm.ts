/**
 * CRM API - Odoo CRM Integration for Forms
 *
 * This module handles form submissions to Odoo CRM, creating leads
 * and sending confirmation emails.
 */

// import { odooApi } from './odoo'; // TODO: Uncomment when Odoo API is ready

export interface Lead {
  name: string; // Lead name (person's name)
  email: string;
  phone?: string;
  type: "contact" | "quote" | "emergency" | "newsletter";
  description?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Submit a general contact form to Odoo CRM
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    // TODO: Replace with actual Odoo API call
    // const lead = await odooApi.create('crm.lead', {
    //   name: `Kontaktanfrage: ${data.subject}`,
    //   contact_name: data.name,
    //   email_from: data.email,
    //   phone: data.phone,
    //   description: data.message,
    //   type: 'opportunity',
    //   stage_id: 1, // New lead stage
    // });

    // Simulate API call
    console.log("Contact form submission:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      leadId: Math.floor(Math.random() * 10000),
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error:
        "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
    };
  }
}

/**
 * Submit a quote request to Odoo CRM
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
  message?: string;
  preferredContactTime?: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    // TODO: Replace with actual Odoo API call
    console.log("Quote request submission:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      leadId: Math.floor(Math.random() * 10000),
    };
  } catch (error) {
    console.error("Error submitting quote request:", error);
    return {
      success: false,
      error:
        "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
    };
  }
}

/**
 * Submit an emergency service request to Odoo CRM
 */
export async function submitEmergencyRequest(data: {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
  emergencyType: string;
  description: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    // TODO: Replace with actual Odoo API call
    // High priority lead for emergency services
    console.log("Emergency request submission:", data);
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      leadId: Math.floor(Math.random() * 10000),
    };
  } catch (error) {
    console.error("Error submitting emergency request:", error);
    return {
      success: false,
      error:
        "Es gab einen Fehler beim Senden Ihrer Notfallanfrage. Bitte rufen Sie uns direkt an.",
    };
  }
}

/**
 * Subscribe to newsletter in Odoo
 */
export async function subscribeNewsletter(data: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    // TODO: Replace with actual Odoo API call
    // const contact = await odooApi.create('mailing.contact', {
    //   email: data.email,
    //   list_ids: [[6, 0, [1]]], // Newsletter list ID
    // });

    console.log("Newsletter subscription:", data);
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: true };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return {
      success: false,
      error:
        "Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es später erneut.",
    };
  }
}

/**
 * Send confirmation email via Odoo
 */
export async function sendConfirmationEmail(
  email: string,
  type: "contact" | "quote" | "emergency" | "newsletter"
): Promise<boolean> {
  try {
    // TODO: Replace with actual Odoo email template
    console.log(`Sending ${type} confirmation email to ${email}`);
    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
}
