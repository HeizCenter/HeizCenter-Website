/**
 * CRM Service Layer
 *
 * Handles form submissions and communication with Odoo CRM
 */

import { odooClient } from './odoo';

/**
 * Submit contact form to Odoo CRM
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    console.log('📬 Processing contact form submission for:', data.email);

    const result = await odooClient.createLead({
      name: data.subject,
      contact_name: data.name,
      email_from: data.email,
      phone: data.phone || false,
      description: data.message,
      type: 'lead',
      x_source: 'contact_form',
      priority: '1', // Normal
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to create lead');
    }

    console.log('✅ Contact form processed successfully. Lead ID:', result.leadId);

    // Optional: Send confirmation email (implement in future)
    // await sendConfirmationEmail(data.email, data.name, 'contact');

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
 * Submit quote request to Odoo CRM
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
}): Promise<{ success: boolean; leadId?: number; error?: string }> {
  try {
    console.log('💼 Processing quote request for:', data.email);

    // Build comprehensive description from form data
    const descriptionParts = [
      `Angebotsanfrage für ${data.serviceType}`,
      '',
      '📋 OBJEKTDETAILS:',
      `- Objektart: ${data.propertyType}`,
    ];

    if (data.heatingArea) {
      descriptionParts.push(`- Heizfläche: ${data.heatingArea} m²`);
    }

    if (data.constructionYear) {
      descriptionParts.push(`- Baujahr: ${data.constructionYear}`);
    }

    // Heat pump specific details
    if (data.pumpType) {
      descriptionParts.push('', '♨️ WÄRMEPUMPEN-DETAILS:');
      descriptionParts.push(`- Typ: ${data.pumpType}`);

      if (data.heatingSurface) {
        descriptionParts.push(`- Heizflächen: ${data.heatingSurface}`);
      }
      if (data.currentHeating) {
        descriptionParts.push(`- Aktuelle Heizung: ${data.currentHeating}`);
      }
      if (data.insulation) {
        descriptionParts.push(`- Dämmung: ${data.insulation}`);
      }
      if (data.buildingYear) {
        descriptionParts.push(`- Gebäude-Baujahr: ${data.buildingYear}`);
      }
      if (data.residents) {
        descriptionParts.push(`- Personen im Haushalt: ${data.residents}`);
      }
    }

    if (data.estimatedCost) {
      descriptionParts.push('', `💰 Geschätzte Kosten: ${parseInt(data.estimatedCost).toLocaleString('de-DE')} €`);
    }

    if (data.preferredContactTime) {
      descriptionParts.push('', `📞 Bevorzugte Kontaktzeit: ${data.preferredContactTime}`);
    }

    if (data.message) {
      descriptionParts.push('', '📝 ZUSÄTZLICHE INFORMATIONEN:', data.message);
    }

    const description = descriptionParts.join('\n');

    const result = await odooClient.createLead({
      name: `Angebotsanfrage ${data.serviceType} - ${data.name}`,
      contact_name: data.name,
      email_from: data.email,
      phone: data.phone,
      street: data.address,
      zip: data.postalCode,
      city: data.city,
      description: description,
      type: 'opportunity', // Higher value than lead
      x_source: 'quote_request',
      x_service_type: data.serviceType,
      x_property_type: data.propertyType,
      x_heating_area: data.heatingArea ? parseInt(data.heatingArea) : undefined,
      x_estimated_cost: data.estimatedCost ? parseFloat(data.estimatedCost) : undefined,
      priority: '2', // High
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to create opportunity');
    }

    console.log('✅ Quote request processed successfully. Opportunity ID:', result.leadId);

    // Optional: Send confirmation email
    // await sendConfirmationEmail(data.email, data.name, 'quote');

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
 * Submit emergency service request to Odoo CRM (HIGH PRIORITY)
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
    console.log('🚨 Processing EMERGENCY request for:', data.phone);

    const emergencyDescription = [
      '🚨 NOTFALL - SOFORT BEARBEITEN',
      '',
      `Art: ${data.emergencyType}`,
      '',
      'BESCHREIBUNG:',
      data.description,
      '',
      '⚠️ Bitte umgehend zurückrufen!',
    ].join('\n');

    const result = await odooClient.createLead({
      name: `🚨 NOTFALL: ${data.emergencyType}`,
      contact_name: data.name,
      phone: data.phone,
      street: data.address,
      zip: data.postalCode,
      description: emergencyDescription,
      type: 'lead',
      x_source: 'emergency_service',
      x_emergency_type: data.emergencyType,
      priority: '3', // Very High (will trigger alerts in Odoo)
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to create emergency request');
    }

    console.log('✅ Emergency request created successfully. Lead ID:', result.leadId);

    // TODO: Implement SMS/WhatsApp notification to on-call team
    // await sendEmergencySMS(data.phone, result.leadId);

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
 * Subscribe email to newsletter via Odoo mailing list
 */
export async function subscribeNewsletter(data: {
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('📧 Processing newsletter subscription for:', data.email);

    const result = await odooClient.createMailingContact(data.email);

    if (!result.success && result.error !== 'already_subscribed') {
      throw new Error(result.error || 'Failed to subscribe');
    }

    if (result.error === 'already_subscribed') {
      console.log('ℹ️ Email already subscribed');
      return {
        success: true,
        error: 'Sie sind bereits für unseren Newsletter angemeldet.',
      };
    }

    console.log('✅ Newsletter subscription successful. Contact ID:', result.contactId);

    // Optional: Send welcome email
    // await sendConfirmationEmail(data.email, '', 'newsletter');

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

/**
 * Send confirmation email (stub - to be implemented)
 *
 * This can be implemented using:
 * 1. Odoo mail.template (recommended - keeps everything in Odoo)
 * 2. External email service (SendGrid, Mailgun, etc.)
 * 3. Automated actions in Odoo (simplest - no code needed)
 */
async function sendConfirmationEmail(
  email: string,
  name: string,
  type: 'contact' | 'quote' | 'emergency' | 'newsletter'
): Promise<void> {
  // TODO: Implement email sending
  // Option 1: Use Odoo automated actions (recommended for now)
  // Option 2: Call Odoo mail.template.send_mail
  // Option 3: Use external service like SendGrid

  console.log(`📧 Confirmation email queued for ${email} (type: ${type})`);

  // Example using Odoo mail.template (to be implemented):
  // const templateIds = {
  //   contact: 1,
  //   quote: 2,
  //   emergency: 3,
  //   newsletter: 4,
  // };
  //
  // await odooClient.executeKw('mail.template', 'send_mail', [
  //   templateIds[type],
  //   leadId,
  //   { email_values: { email_to: email } }
  // ]);
}
