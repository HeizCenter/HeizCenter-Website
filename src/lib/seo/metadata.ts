import { Metadata } from "next";

export const SITE_URL = "https://www.heizcenter.de";
const baseUrl = SITE_URL;
const siteName = "HeizCenter";

/**
 * Generate a canonical URL for a given path
 * @param path - The path to generate the canonical URL for (e.g., "/waermepumpe" or "/standorte/memmingen")
 * @returns The full canonical URL (e.g., "https://www.heizcenter.de/waermepumpe")
 */
export function getCanonicalUrl(path: string): string {
  // Homepage special case - no trailing path
  if (path === "/" || path === "") {
    return baseUrl;
  }
  // Remove trailing slash and ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedPath = cleanPath.replace(/\/$/, "");
  return `${baseUrl}${normalizedPath}`;
}
const defaultTitle = "HeizCenter - Heizung, Sanitär & Wärmepumpen in Augsburg, Ulm & Memmingen";
const defaultDescription =
  "Ihr Experte für Wärmepumpen, Heizung, Sanitär & Klimaanlagen in Augsburg, Ulm und Memmingen. BEG-Förderung, Meisterbetrieb, 24/7 Notdienst. Jetzt beraten lassen!";

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generateMetadata({
  title,
  description = defaultDescription,
  path = "",
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: GenerateMetadataParams = {}): Metadata {
  const fullTitle = title ? `${title} - ${siteName}` : defaultTitle;
  const url = `${baseUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        },
      ],
      locale: "de_DE",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  // Add article-specific metadata
  if (type === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: authors || [],
      tags: tags || [],
    };
  }

  return metadata;
}

// Verification meta tags
export function getVerificationTags() {
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  if (!verification) {
    return {};
  }

  return {
    verification: {
      google: verification,
    },
  };
}

// Local Business Schema
export function generateLocalBusinessSchema(location: {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email?: string;
  latitude?: number;
  longitude?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: `${siteName} ${location.name}`,
    image: `${baseUrl}/logo.png`,
    logo: `${baseUrl}/logo.png`,
    url: baseUrl,
    telephone: location.phone,
    email: location.email || "info@heizcenter.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      postalCode: location.postalCode,
      addressCountry: "DE",
    },
    geo: location.latitude
      ? {
          "@type": "GeoCoordinates",
          latitude: location.latitude,
          longitude: location.longitude,
        }
      : undefined,
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
    priceRange: "€€",
    areaServed: [
      {
        "@type": "City",
        name: "Augsburg",
      },
      {
        "@type": "City",
        name: "Ulm",
      },
      {
        "@type": "City",
        name: "Memmingen",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "60",
      reviewCount: "60",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/heizcenter",
      "https://www.instagram.com/heizcenter",
      "https://www.linkedin.com/company/heizcenter",
    ],
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
