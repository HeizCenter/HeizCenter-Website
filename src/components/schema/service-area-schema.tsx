import { CONTACT } from '@/lib/config/contact';
import { getSchemaRating, getSchemaReviews } from "@/lib/config/reviews";

interface ServiceAreaSchemaProps {
  cityName: string;
  region: "Bayern" | "Baden-Württemberg";
  mainOffice: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    latitude: number;
    longitude: number;
  };
  serviceCities: string[];
}

/**
 * Service Area Schema für Service-Städte (ohne physisches Büro)
 *
 * Dieses Schema macht Google klar:
 * - Es ist ein Service-Angebot (@type: "Service")
 * - Der Provider ist HeizCenter GmbH mit echter Adresse
 * - Die Stadt ist ein Service-Gebiet (areaServed), nicht ein lokales Büro
 *
 * Verwendung: Für alle Service-Städte ohne physisches Büro
 * (Augsburg, Ulm, Memmingen, etc.)
 */
export function ServiceAreaSchema({
  cityName,
  region,
  mainOffice,
  serviceCities: _serviceCities, // Reserved for future use
}: ServiceAreaSchemaProps) {
  const citySlug = cityName.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.heizcenter.de/standorte/${citySlug}#service`,
    "serviceType": "HVAC Services",
    "name": `Wärmepumpe, Heizung & Sanitär Service in ${cityName}`,
    "description": `Professioneller HVAC-Service in ${cityName} und Umgebung. Installation und Wartung von Wärmepumpen, Heizungen, Klimaanlagen und Sanitäranlagen vom HeizCenter Team.`,
    "provider": {
      "@type": "LocalBusiness",
      "additionalType": "https://schema.org/PlumbingHeatingContractor",
      "@id": `https://www.heizcenter.de/#${mainOffice.addressLocality.toLowerCase()}`,
      "name": "HeizCenter GmbH",
      "image": "https://www.heizcenter.de/images/logo.png",
      "logo": "https://www.heizcenter.de/images/logo.png",
      "url": "https://www.heizcenter.de",
      "telephone": CONTACT.PHONE_SCHEMA,
      "email": CONTACT.EMAIL,
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": mainOffice.streetAddress,
        "addressLocality": mainOffice.addressLocality,
        "postalCode": mainOffice.postalCode,
        "addressCountry": "DE",
        "addressRegion": region,
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": mainOffice.latitude,
        "longitude": mainOffice.longitude,
      },
      "aggregateRating": getSchemaRating(),
      "review": getSchemaReviews(),
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": region,
      },
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.heizcenter.de/standorte/${citySlug}`,
      "servicePhone": CONTACT.PHONE_SCHEMA,
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wärmepumpen-Installation",
            "description": "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%",
            "url": "https://www.heizcenter.de/waermepumpe",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heizungsinstallation",
            "description": "Installation und Wartung moderner Heizsysteme",
            "url": "https://www.heizcenter.de/heizung",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanitär & Badsanierung",
            "description": "Komplette Sanitär- und Badinstallationen mit 3D-Planung",
            "url": "https://www.heizcenter.de/sanitaer",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Klimaanlagen-Installation",
            "description": "Installation von Split-Klimaanlagen und Lüftungssystemen",
            "url": "https://www.heizcenter.de/klimaanlage",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
