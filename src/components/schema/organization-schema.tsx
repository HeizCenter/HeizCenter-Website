import { getSchemaRating, getSchemaReviews } from "@/lib/config/reviews";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HeizCenter GmbH",
    alternateName: "HeizCenter",
    url: "https://heizcenter.de",
    logo: "https://heizcenter.de/images/logo.png",
    foundingDate: "2015",
    description:
      "HeizCenter GmbH ist Ihr kompetenter Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Bayern und Baden-Württemberg. Mit über 8 Jahren Erfahrung bieten wir professionelle Installation, Wartung und Notdienst.",
    slogan: "Ihre Experten für moderne Heizsysteme",

    // Contact Information
    telephone: "+4982349665900",
    email: "info@heizcenter.de",

    // Main Office Address (Bobingen)
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lechallee 28",
      addressLocality: "Bobingen",
      postalCode: "86399",
      addressRegion: "Bayern",
      addressCountry: "DE",
    },

    // Branch Locations
    location: [
      {
        "@type": "Place",
        name: "HeizCenter GmbH Hauptsitz",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lechallee 28",
          addressLocality: "Bobingen",
          postalCode: "86399",
          addressRegion: "Bayern",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.2744,
          longitude: 10.8369,
        },
      },
      {
        "@type": "Place",
        name: "HeizCenter GmbH Standort Gutenzell-Hürbel",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gutenzell-Hürbel",
          postalCode: "88484",
          addressRegion: "Baden-Württemberg",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.0667,
          longitude: 9.95,
        },
      },
      {
        "@type": "Place",
        name: "HeizCenter GmbH Standort Klosterlechfeld",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Schulstraße 40",
          addressLocality: "Klosterlechfeld",
          postalCode: "86836",
          addressRegion: "Bayern",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.1547,
          longitude: 10.8308,
        },
      },
    ],

    // Contact Points
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+4982349665900",
        contactType: "customer service",
        areaServed: ["DE"],
        availableLanguage: ["German"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+4982349665900",
        contactType: "sales",
        areaServed: ["DE"],
        availableLanguage: ["German"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+4982349665900",
        contactType: "emergency",
        areaServed: ["DE"],
        availableLanguage: ["German"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
      },
    ],

    // Social Media Links
    sameAs: [
      "https://www.facebook.com/heizcenter",
      "https://www.instagram.com/heizcentermb/",
      "https://www.linkedin.com/company/heizcenter/",
    ],

    // Service Area
    areaServed: [
      {
        "@type": "State",
        name: "Bayern",
      },
      {
        "@type": "State",
        name: "Baden-Württemberg",
      },
    ],

    // Ratings & Reviews
    aggregateRating: getSchemaRating(),
    review: getSchemaReviews(),

    // Services Offered
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpe Installation",
            description:
              "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%. Luft-Wasser, Sole-Wasser und Wasser-Wasser Wärmepumpen.",
            provider: {
              "@type": "Organization",
              name: "HeizCenter GmbH",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungsinstallation",
            description:
              "Installation moderner Heizsysteme inkl. Gas-Brennwertkessel, Öl-Brennwertkessel und Hybridheizungen.",
            provider: {
              "@type": "Organization",
              name: "HeizCenter GmbH",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitärinstallation",
            description:
              "Komplette Sanitär- und Badinstallationen, Badsanierung, Rohrleitungsbau und Wasserleitungen.",
            provider: {
              "@type": "Organization",
              name: "HeizCenter GmbH",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klimaanlagen-Installation",
            description:
              "Installation von Klimaanlagen, Lüftungssystemen und kontrollierten Wohnraumlüftungen.",
            provider: {
              "@type": "Organization",
              name: "HeizCenter GmbH",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizung Notdienst",
            description:
              "24/7 Notdienst für Heizungsausfälle und Störungen. Schnelle Hilfe innerhalb von 2-4 Stunden.",
            provider: {
              "@type": "Organization",
              name: "HeizCenter GmbH",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungswartung",
            description:
              "Regelmäßige Wartung und Inspektion aller Heizungsanlagen für optimale Effizienz und Langlebigkeit.",
            provider: {
              "@type": "Organization",
              name: "HeizCenter GmbH",
            },
          },
        },
      ],
    },

    // Business Characteristics
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15-20",
    },

    // Legal/Organizational Info
    legalName: "HeizCenter GmbH",
    taxID: "DE123456789", // Note: Replace with actual tax ID
    vatID: "DE123456789", // Note: Replace with actual VAT ID
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
