interface ServiceSchemaProps {
  serviceType:
    | "waermepumpe"
    | "heizung"
    | "sanitaer"
    | "klimaanlage"
    | "solar";
}

export function ServiceSchema({ serviceType }: ServiceSchemaProps) {
  const serviceCities = [
    { "@type": "City", name: "Augsburg" },
    { "@type": "City", name: "Bobingen" },
    { "@type": "City", name: "Ulm" },
    { "@type": "City", name: "Neu-Ulm" },
    { "@type": "City", name: "Memmingen" },
    { "@type": "City", name: "Landsberg am Lech" },
    { "@type": "City", name: "Königsbrunn" },
    { "@type": "City", name: "Gersthofen" },
    { "@type": "City", name: "Neusäß" },
    { "@type": "City", name: "Stadtbergen" },
    { "@type": "City", name: "Gutenzell-Hürbel" },
    { "@type": "City", name: "Biberach an der Riß" },
    { "@type": "City", name: "Laupheim" },
    { "@type": "City", name: "Günzburg" },
    { "@type": "City", name: "Krumbach" },
  ];

  const waermepumpeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wärmepumpen-Installation",
    name: "Wärmepumpen-Installation & Wartung",
    description:
      "Professionelle Wärmepumpen-Installation mit BEG-Förderung bis zu 70%. Luft-Wasser, Sole-Wasser und Wasser-Wasser Wärmepumpen von führenden Herstellern.",
    provider: {
      "@type": "PlumbingHeatingContractor",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
      telephone: "+4982349665900",
    },
    areaServed: serviceCities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wärmepumpen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Luft-Wasser-Wärmepumpe",
            description:
              "Effiziente Wärmepumpe für Außen- und Innenaufstellung. Ideal für Neubau und Bestandsgebäude.",
            brand: [
              { "@type": "Brand", name: "Viessmann" },
              { "@type": "Brand", name: "Vaillant" },
              { "@type": "Brand", name: "Stiebel Eltron" },
              { "@type": "Brand", name: "Daikin" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "8000",
              highPrice: "25000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Sole-Wasser-Wärmepumpe (Erdwärmepumpe)",
            description:
              "Hocheffiziente Erdwärmepumpe mit Tiefenbohrung oder Flächenkollektor. Höchste Jahresarbeitszahl.",
            brand: [
              { "@type": "Brand", name: "Viessmann" },
              { "@type": "Brand", name: "Vaillant" },
              { "@type": "Brand", name: "Stiebel Eltron" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "12000",
              highPrice: "35000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Wasser-Wasser-Wärmepumpe",
            description:
              "Grundwasser-Wärmepumpe mit höchster Effizienz. Nutzung des Grundwassers als Wärmequelle.",
            brand: [
              { "@type": "Brand", name: "Viessmann" },
              { "@type": "Brand", name: "Stiebel Eltron" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "15000",
              highPrice: "40000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wärmepumpen-Wartung",
            description:
              "Regelmäßige Wartung für optimale Effizienz und Langlebigkeit Ihrer Wärmepumpe.",
          },
        },
      ],
    },
    termsOfService: "https://www.heizcenter.de/agb",
    url: "https://www.heizcenter.de/waermepumpe",
    audience: {
      "@type": "Audience",
      audienceType: "Hausbesitzer, Bauherren, Immobilienbesitzer",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.heizcenter.de/kontakt",
      servicePhone: "+4982349665900",
    },
  };

  const heizungSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Heizungsinstallation",
    name: "Heizungsinstallation & Heizungswartung",
    description:
      "Installation moderner Heizsysteme: Gas-Brennwertkessel, Öl-Brennwertkessel, Hybridheizungen. Professionelle Wartung und 24/7 Notdienst.",
    provider: {
      "@type": "PlumbingHeatingContractor",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
      telephone: "+4982349665900",
    },
    areaServed: serviceCities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Heizungssysteme",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Gas-Brennwertkessel",
            description:
              "Moderne Gas-Brennwertheizung mit höchster Effizienz. Bis zu 30% Energieersparnis.",
            brand: [
              { "@type": "Brand", name: "Viessmann" },
              { "@type": "Brand", name: "Vaillant" },
              { "@type": "Brand", name: "Buderus" },
              { "@type": "Brand", name: "Wolf" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "3500",
              highPrice: "8000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Öl-Brennwertkessel",
            description:
              "Effiziente Öl-Brennwertheizung für zuverlässige Wärmeversorgung.",
            brand: [
              { "@type": "Brand", name: "Viessmann" },
              { "@type": "Brand", name: "Buderus" },
              { "@type": "Brand", name: "Wolf" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "4000",
              highPrice: "9000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Hybridheizung",
            description:
              "Kombination aus Wärmepumpe und Gas-Brennwertkessel für maximale Effizienz.",
            brand: [
              { "@type": "Brand", name: "Viessmann" },
              { "@type": "Brand", name: "Vaillant" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "12000",
              highPrice: "25000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizungswartung",
            description:
              "Jährliche Wartung für optimale Heizungsleistung und Sicherheit.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heizung Notdienst",
            description:
              "24/7 Notdienst bei Heizungsausfall. Schnelle Hilfe innerhalb von 2-4 Stunden.",
          },
        },
      ],
    },
    termsOfService: "https://www.heizcenter.de/agb",
    url: "https://www.heizcenter.de/heizung",
    audience: {
      "@type": "Audience",
      audienceType: "Hausbesitzer, Bauherren, Immobilienbesitzer",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.heizcenter.de/kontakt",
      servicePhone: "+4982349665900",
    },
  };

  const sanitaerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Sanitärinstallation",
    name: "Sanitärinstallation & Badsanierung",
    description:
      "Professionelle Sanitär- und Badinstallationen in Augsburg, Ulm und Umgebung. Von der Planung bis zur Fertigstellung. Badsanierung, Rohrleitungsbau, Wasserleitungen.",
    provider: {
      "@type": "PlumbingHeatingContractor",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
      telephone: "+4982349665900",
    },
    areaServed: serviceCities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sanitär-Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Badsanierung",
            description:
              "Komplette Badsanierung vom Profi. Planung, Design und fachgerechte Ausführung aus einer Hand.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitärinstallation",
            description:
              "Installation von Sanitäranlagen, Armaturen, WC, Waschbecken, Duschen und Badewannen.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rohrleitungsbau",
            description:
              "Professioneller Rohrleitungsbau für Trinkwasser, Abwasser und Heizung.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wasserleitungen",
            description:
              "Installation und Reparatur von Wasserleitungen. Moderne Rohrsysteme mit langer Lebensdauer.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sanitär-Notdienst",
            description:
              "24/7 Notdienst bei Rohrbruch und Wasserschäden. Schnelle Hilfe vor Ort.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Barrierefreies Bad",
            description:
              "Umbau zu barrierefreien Bädern. Bodengleiche Duschen, unterfahrbare Waschtische.",
          },
        },
      ],
    },
    termsOfService: "https://www.heizcenter.de/agb",
    url: "https://www.heizcenter.de/sanitaer",
    audience: {
      "@type": "Audience",
      audienceType: "Hausbesitzer, Bauherren, Immobilienbesitzer",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.heizcenter.de/kontakt",
      servicePhone: "+4982349665900",
    },
  };

  const klimaanlageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Klimaanlagen-Installation",
    name: "Klimaanlagen-Installation & Wartung",
    description:
      "Installation von Klimaanlagen, Lüftungssystemen und kontrollierten Wohnraumlüftungen. Split-Klimageräte, Multi-Split-Anlagen und VRF-Systeme.",
    provider: {
      "@type": "PlumbingHeatingContractor",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
      telephone: "+4982349665900",
    },
    areaServed: serviceCities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Klimaanlagen & Lüftungssysteme",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Split-Klimaanlage",
            description:
              "Effiziente Split-Klimaanlage für einzelne Räume. Kühlen und Heizen mit einer Anlage.",
            brand: [
              { "@type": "Brand", name: "Daikin" },
              { "@type": "Brand", name: "Mitsubishi Electric" },
              { "@type": "Brand", name: "Panasonic" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "1500",
              highPrice: "4000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Multi-Split-Klimaanlage",
            description:
              "Multi-Split-System für mehrere Räume. Ein Außengerät, mehrere Innengeräte.",
            brand: [
              { "@type": "Brand", name: "Daikin" },
              { "@type": "Brand", name: "Mitsubishi Electric" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "4000",
              highPrice: "12000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "VRF-Klimasystem",
            description:
              "Variable Refrigerant Flow System für größere Gebäude und Gewerbe.",
            brand: [
              { "@type": "Brand", name: "Daikin" },
              { "@type": "Brand", name: "Mitsubishi Electric" },
            ],
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "10000",
              highPrice: "50000",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kontrollierte Wohnraumlüftung",
            description:
              "Installation von Lüftungsanlagen mit Wärmerückgewinnung für optimales Raumklima.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Klimaanlagen-Wartung",
            description:
              "Regelmäßige Wartung und Reinigung Ihrer Klimaanlage für optimale Leistung.",
          },
        },
      ],
    },
    termsOfService: "https://www.heizcenter.de/agb",
    url: "https://www.heizcenter.de/klimaanlage",
    audience: {
      "@type": "Audience",
      audienceType: "Hausbesitzer, Bauherren, Gewerbetreibende",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.heizcenter.de/kontakt",
      servicePhone: "+4982349665900",
    },
  };

  const solarSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Solarthermie-Installation",
    name: "Solarthermie-Installation & Beratung",
    description:
      "Professionelle Solarthermie-Anlagen für Warmwasser und Heizungsunterstützung. Bis zu 70% KfW-Förderung. Installation von Flach- und Vakuumröhrenkollektoren in Augsburg, Ulm und Memmingen.",
    provider: {
      "@type": "PlumbingHeatingContractor",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
      telephone: "+4982349665900",
    },
    areaServed: serviceCities,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solarthermie-Systeme",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Warmwasser-System (Solarthermie)",
            description:
              "Solarthermie-Anlage zur Warmwasserbereitung. 4-6 m² Kollektorfläche, 300-400L Speicher. 60% solare Deckung des Warmwasserbedarfs.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "5000",
              highPrice: "10000",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                value: "Nach 30% KfW-Förderung: 3500-7000 EUR",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Kombi-System (Warmwasser + Heizung)",
            description:
              "Solarthermie-Anlage mit Heizungsunterstützung. 12-15 m² Kollektorfläche, 600-1000L Kombispeicher. 60% Warmwasser + 25% Heizungsunterstützung.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "8000",
              highPrice: "18000",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                value: "Nach 70% KfW-Förderung: 2400-5400 EUR",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Flachkollektor",
            description:
              "Bewährte Flachkollektoren mit 60-75% Wirkungsgrad. Ideal für Warmwasser-Systeme und Süddächer.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "300",
              highPrice: "500",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitText: "m²",
                },
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Vakuumröhrenkollektor",
            description:
              "Hocheffiziente Vakuumröhren mit 70-85% Wirkungsgrad. Ideal für Heizungsunterstützung und Ost-West-Dächer.",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "500",
              highPrice: "750",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitText: "m²",
                },
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hybrid-System (Solarthermie + Wärmepumpe)",
            description:
              "Optimale Kombination aus Solarthermie und Wärmepumpe. Maximale Energieeffizienz und separate KfW-Förderung möglich.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "KfW-Förderberatung Solarthermie",
            description:
              "Kostenlose Beratung zur KfW-Förderung. Bis zu 70% Zuschuss: 30% Basis + 20% Geschwindigkeitsbonus + 30% Einkommensbonus.",
          },
        },
      ],
    },
    termsOfService: "https://www.heizcenter.de/agb",
    url: "https://www.heizcenter.de/solar",
    audience: {
      "@type": "Audience",
      audienceType: "Hausbesitzer, Bauherren, Immobilienbesitzer",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.heizcenter.de/kontakt",
      servicePhone: "+4982349665900",
    },
  };

  const schemas = {
    waermepumpe: waermepumpeSchema,
    heizung: heizungSchema,
    sanitaer: sanitaerSchema,
    klimaanlage: klimaanlageSchema,
    solar: solarSchema,
  };

  const schema = schemas[serviceType];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
