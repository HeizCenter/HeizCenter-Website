import { getSchemaRating, getSchemaReviews } from "@/lib/config/reviews";
interface LocalBusinessSchemaProps {
  location: "bobingen" | "gutenzell" | "klosterlechfeld";
  includeServices?: boolean;
}

export function LocalBusinessSchema({
  location,
  includeServices = true,
}: LocalBusinessSchemaProps) {
  const bobingenSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/PlumbingHeatingContractor",
    name: "HeizCenter GmbH",
    description: "Ihr Fachbetrieb für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Bobingen und der Region Augsburg. Professionelle Installation, Wartung und 24/7 Notdienst.",
    image: "https://www.heizcenter.de/images/logo.png",
    logo: "https://www.heizcenter.de/images/logo.png",
    "@id": "https://www.heizcenter.de/#bobingen",
    url: "https://www.heizcenter.de",
    telephone: "+4982349665900",
    email: "service@heizcenter.de",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lechallee 28",
      addressLocality: "Bobingen",
      postalCode: "86399",
      addressCountry: "DE",
      addressRegion: "Bayern",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.2744,
      longitude: 10.8369,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/heizcenter",
      "https://www.instagram.com/heizcentermb/",
      "https://www.linkedin.com/company/heizcenter/",
    ],
    aggregateRating: getSchemaRating(),
    review: getSchemaReviews(),
    areaServed: [
      { "@type": "City", name: "Augsburg" },
      { "@type": "City", name: "Bobingen" },
      { "@type": "City", name: "Königsbrunn" },
      { "@type": "City", name: "Landsberg am Lech" },
      { "@type": "City", name: "Kaufbeuren" },
      { "@type": "City", name: "Schwabmünchen" },
      { "@type": "City", name: "Gersthofen" },
      { "@type": "City", name: "Neusäß" },
      { "@type": "City", name: "Stadtbergen" },
    ],
    ...(includeServices && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dienstleistungen",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wärmepumpen-Installation",
              description: "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%",
              url: "https://www.heizcenter.de/waermepumpe",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Heizungsinstallation",
              description: "Installation und Wartung moderner Heizsysteme",
              url: "https://www.heizcenter.de/heizung",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sanitär & Badsanierung",
              description: "Komplette Sanitär- und Badinstallationen mit 3D-Planung",
              url: "https://www.heizcenter.de/sanitaer",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Klimaanlagen-Installation",
              description: "Installation von Split-Klimaanlagen und Lüftungssystemen",
              url: "https://www.heizcenter.de/klimaanlage",
            },
          },
        ],
      },
    }),
  };

  const gutenzellSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/PlumbingHeatingContractor",
    name: "HeizCenter GmbH - Gutenzell-Hürbel",
    description: "Ihr Fachbetrieb für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Gutenzell-Hürbel und der Region Ulm/Memmingen. Professionelle Installation, Wartung und 24/7 Notdienst.",
    image: "https://www.heizcenter.de/images/logo.png",
    logo: "https://www.heizcenter.de/images/logo.png",
    "@id": "https://www.heizcenter.de/#gutenzell",
    url: "https://www.heizcenter.de/standorte/gutenzell-huerbel",
    telephone: "+4982349665900",
    email: "service@heizcenter.de",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gutenzell-Hürbel",
      postalCode: "88484",
      addressCountry: "DE",
      addressRegion: "Baden-Württemberg",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.0667,
      longitude: 9.95,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://www.heizcenter.de/#organization",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
    },
    aggregateRating: getSchemaRating(),
    review: getSchemaReviews(),
    areaServed: [
      { "@type": "City", name: "Ulm" },
      { "@type": "City", name: "Memmingen" },
      { "@type": "City", name: "Neu-Ulm" },
      { "@type": "City", name: "Biberach an der Riß" },
      { "@type": "City", name: "Illertissen" },
      { "@type": "City", name: "Günzburg" },
      { "@type": "City", name: "Krumbach" },
      { "@type": "City", name: "Blaustein" },
      { "@type": "City", name: "Laupheim" },
      { "@type": "City", name: "Erbach" },
      { "@type": "City", name: "Bad Wurzach" },
      { "@type": "City", name: "Leutkirch im Allgäu" },
    ],
    sameAs: [
      "https://www.facebook.com/heizcenter",
      "https://www.instagram.com/heizcentermb/",
      "https://www.linkedin.com/company/heizcenter/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpen-Installation",
            description: "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%",
            url: "https://www.heizcenter.de/waermepumpe",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungsinstallation",
            description: "Installation und Wartung moderner Heizsysteme",
            url: "https://www.heizcenter.de/heizung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitär & Badsanierung",
            description: "Komplette Sanitär- und Badinstallationen mit 3D-Planung",
            url: "https://www.heizcenter.de/sanitaer",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klimaanlagen-Installation",
            description: "Installation von Split-Klimaanlagen und Lüftungssystemen",
            url: "https://www.heizcenter.de/klimaanlage",
          },
        },
      ],
    },
  };

  const klosterlechfeldSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/PlumbingHeatingContractor",
    name: "HeizCenter GmbH - Klosterlechfeld",
    description: "Ihr Fachbetrieb für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Klosterlechfeld und der Region Landsberg/Augsburg. Professionelle Installation, Wartung und 24/7 Notdienst.",
    image: "https://www.heizcenter.de/images/logo.png",
    logo: "https://www.heizcenter.de/images/logo.png",
    "@id": "https://www.heizcenter.de/#klosterlechfeld",
    url: "https://www.heizcenter.de/standorte/klosterlechfeld",
    telephone: "+4982349665900",
    email: "service@heizcenter.de",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schulstraße 40",
      addressLocality: "Klosterlechfeld",
      postalCode: "86836",
      addressCountry: "DE",
      addressRegion: "Bayern",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1547,
      longitude: 10.8308,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://www.heizcenter.de/#organization",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
    },
    aggregateRating: getSchemaRating(),
    review: getSchemaReviews(),
    areaServed: [
      { "@type": "City", name: "Klosterlechfeld" },
      { "@type": "City", name: "Augsburg" },
      { "@type": "City", name: "Landsberg am Lech" },
      { "@type": "City", name: "Schwabmünchen" },
      { "@type": "City", name: "Kaufering" },
      { "@type": "City", name: "Buchloe" },
      { "@type": "City", name: "Königsbrunn" },
      { "@type": "City", name: "Bobingen" },
    ],
    sameAs: [
      "https://www.facebook.com/heizcenter",
      "https://www.instagram.com/heizcentermb/",
      "https://www.linkedin.com/company/heizcenter/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpen-Installation",
            description: "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%",
            url: "https://www.heizcenter.de/waermepumpe",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungsinstallation",
            description: "Installation und Wartung moderner Heizsysteme",
            url: "https://www.heizcenter.de/heizung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitär & Badsanierung",
            description: "Komplette Sanitär- und Badinstallationen mit 3D-Planung",
            url: "https://www.heizcenter.de/sanitaer",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klimaanlagen-Installation",
            description: "Installation von Split-Klimaanlagen und Lüftungssystemen",
            url: "https://www.heizcenter.de/klimaanlage",
          },
        },
      ],
    },
  };

  const schemaMap = {
    bobingen: bobingenSchema,
    gutenzell: gutenzellSchema,
    klosterlechfeld: klosterlechfeldSchema,
  };

  const schema = schemaMap[location];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocationPageSchemaProps {
  cityName: string;
  postalCode: string;
  region: "Bayern" | "Baden-Württemberg";
  latitude: number;
  longitude: number;
  serviceCities: string[];
}

export function LocationPageSchema({
  cityName,
  postalCode,
  region,
  latitude,
  longitude,
  serviceCities,
}: LocationPageSchemaProps) {
  const citySlug = cityName.toLowerCase().replace(/\s+/g, "-").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/PlumbingHeatingContractor",
    name: "HeizCenter GmbH - " + cityName,
    description: `Ihr Fachbetrieb für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in ${cityName}. Professionelle Installation, Wartung und 24/7 Notdienst.`,
    image: "https://www.heizcenter.de/images/logo.png",
    logo: "https://www.heizcenter.de/images/logo.png",
    "@id": "https://www.heizcenter.de/standorte/" + citySlug + "#business",
    url: "https://www.heizcenter.de/standorte/" + citySlug,
    telephone: "+4982349665900",
    email: "service@heizcenter.de",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      postalCode: postalCode,
      addressCountry: "DE",
      addressRegion: region,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://www.heizcenter.de/#organization",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
    },
    aggregateRating: getSchemaRating(),
    review: getSchemaReviews(),
    areaServed: serviceCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [
      "https://www.facebook.com/heizcenter",
      "https://www.instagram.com/heizcentermb/",
      "https://www.linkedin.com/company/heizcenter/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpen-Installation",
            description: "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%",
            url: "https://www.heizcenter.de/waermepumpe",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungsinstallation",
            description: "Installation und Wartung moderner Heizsysteme",
            url: "https://www.heizcenter.de/heizung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitär & Badsanierung",
            description: "Komplette Sanitär- und Badinstallationen mit 3D-Planung",
            url: "https://www.heizcenter.de/sanitaer",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klimaanlagen-Installation",
            description: "Installation von Split-Klimaanlagen und Lüftungssystemen",
            url: "https://www.heizcenter.de/klimaanlage",
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
