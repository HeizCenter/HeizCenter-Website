/**
 * Central Contact Information Configuration
 *
 * WICHTIG: Alle Kontaktdaten NUR HIER ändern!
 * NAP-Konsistenz (Name, Address, Phone) ist KRITISCH für Local SEO.
 *
 * Format-Regeln:
 * - PHONE_DISPLAY: Mit Leerzeichen für Menschen (+49 8234 9665900)
 * - PHONE_LINK: Ohne Leerzeichen für tel: Links (+4982349665900)
 * - PHONE_SCHEMA: Ohne Leerzeichen für Schema.org (+4982349665900)
 * - PHONE_WHATSAPP: Ohne + für WhatsApp (4982349665900)
 */

export const CONTACT = {
  // Business Name (IMMER gleich schreiben!)
  BUSINESS_NAME: "HeizCenter",

  // Phone Numbers
  PHONE_DISPLAY: "+49 8234 9665900",      // Für Text-Anzeige (mit Leerzeichen)
  PHONE_LINK: "+4982349665900",           // Für tel: Links (ohne Leerzeichen)
  PHONE_SCHEMA: "+4982349665900",         // Für Schema.org (ohne Leerzeichen)
  PHONE_WHATSAPP: "4982349665900",        // Für WhatsApp (ohne +)

  // Email
  EMAIL: "service@heizcenter.de",
  EMAIL_SUPPORT: "support@heizcenter.de",
  EMAIL_INFO: "info@heizcenter.de",

  // Website
  WEBSITE: "https://www.heizcenter.de",

  // Bobingen Location
  BOBINGEN: {
    name: "HeizCenter Bobingen",
    street: "[Straße + Hausnummer]",  // TODO: Echte Adresse einfügen
    city: "Bobingen",
    postalCode: "86399",
    country: "Deutschland",
    // Vollständige Adresse für Display
    get fullAddress() {
      return `${this.street}, ${this.postalCode} ${this.city}`;
    },
    // Schema.org Format
    get addressSchema() {
      return {
        "@type": "PostalAddress",
        streetAddress: this.street,
        addressLocality: this.city,
        postalCode: this.postalCode,
        addressCountry: "DE"
      };
    }
  },

  // Gutenzell-Hürbel Location
  GUTENZELL: {
    name: "HeizCenter Gutenzell-Hürbel",
    street: "[Straße + Hausnummer]",  // TODO: Echte Adresse einfügen
    city: "Gutenzell-Hürbel",
    postalCode: "88317",
    country: "Deutschland",
    // Vollständige Adresse für Display
    get fullAddress() {
      return `${this.street}, ${this.postalCode} ${this.city}`;
    },
    // Schema.org Format
    get addressSchema() {
      return {
        "@type": "PostalAddress",
        streetAddress: this.street,
        addressLocality: this.city,
        postalCode: this.postalCode,
        addressCountry: "DE"
      };
    }
  },

  // Business Hours (matching Google Business Profile)
  HOURS: {
    monday: "08:00 - 17:00",
    tuesday: "08:00 - 17:00",
    wednesday: "08:00 - 17:00",
    thursday: "08:00 - 17:00",
    friday: "08:00 - 14:00",
    saturday: "Geschlossen",
    sunday: "Geschlossen",
    emergency: "24/7 Notdienst verfügbar"
  },

  // Social Media
  SOCIAL: {
    facebook: "https://facebook.com/heizcenter",  // TODO: Echte URLs einfügen
    instagram: "https://instagram.com/heizcenter",
    linkedin: "https://linkedin.com/company/heizcenter",
    youtube: "https://youtube.com/@heizcenter"
  }
} as const;

// Helper Functions
export const getPhoneLink = (phone: string = CONTACT.PHONE_LINK) => `tel:${phone}`;
export const getEmailLink = (email: string = CONTACT.EMAIL) => `mailto:${email}`;
export const getWhatsAppLink = (phone: string = CONTACT.PHONE_WHATSAPP, message?: string) => {
  const baseUrl = `https://wa.me/${phone}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};
