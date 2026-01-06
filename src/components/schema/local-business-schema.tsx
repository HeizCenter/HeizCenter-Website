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
    image: "https://heizcenter.de/images/logo.png",
    "@id": "https://heizcenter.de/#bobingen",
    url: "https://heizcenter.de",
    telephone: "+4982349665900",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
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
              name: "Wärmepumpe Installation",
              description:
                "Professionelle Wärmepumpen-Installation mit BEG-Förderung",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Heizungsinstallation",
              description: "Installation moderner Heizsysteme",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sanitärinstallation",
              description: "Komplette Sanitär- und Badinstallationen",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Klimaanlagen-Installation",
              description: "Installation von Klimaanlagen und Lüftungssystemen",
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
    image: "https://heizcenter.de/images/logo.png",
    "@id": "https://heizcenter.de/#gutenzell",
    url: "https://heizcenter.de/standorte/gutenzell-huerbel",
    telephone: "+4982349665900",
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
    parentOrganization: {
      "@type": "Organization",
      name: "HeizCenter GmbH",
      url: "https://heizcenter.de",
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
  };

  const klosterlechfeldSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/PlumbingHeatingContractor",
    name: "HeizCenter GmbH - Klosterlechfeld",
    image: "https://heizcenter.de/images/logo.png",
    "@id": "https://heizcenter.de/#klosterlechfeld",
    url: "https://heizcenter.de/standorte/klosterlechfeld",
    telephone: "+4982349665900",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "HeizCenter GmbH",
      url: "https://heizcenter.de",
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
  const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/PlumbingHeatingContractor",
    name: "HeizCenter GmbH - " + cityName,
    image: "https://heizcenter.de/images/logo.png",
    "@id": "https://heizcenter.de/standorte/" + citySlug,
    url: "https://heizcenter.de/standorte/" + citySlug,
    telephone: "+4982349665900",
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
    parentOrganization: {
      "@type": "Organization",
      name: "HeizCenter GmbH",
      url: "https://heizcenter.de",
    },
    aggregateRating: getSchemaRating(),
    review: getSchemaReviews(),
    areaServed: serviceCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
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
              "Professionelle Wärmepumpen-Installation mit BEG-Förderung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungsinstallation",
            description: "Installation moderner Heizsysteme",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitärinstallation",
            description: "Komplette Sanitär- und Badinstallationen",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klimaanlagen-Installation",
            description: "Installation von Klimaanlagen und Lüftungssystemen",
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
