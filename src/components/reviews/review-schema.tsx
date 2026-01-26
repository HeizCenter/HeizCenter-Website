interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewSchemaProps {
  businessName?: string;
  reviews: Review[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ReviewSchema({
  businessName = "HeizCenter",
  reviews,
  aggregateRating = { ratingValue: 4.9, reviewCount: 60 },
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.heizcenter.de/#organization",
    name: businessName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.reviewCount,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
      datePublished: review.date,
      itemReviewed: {
        "@id": "https://www.heizcenter.de/#organization",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductReviewSchemaProps {
  productName: string;
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
  brand?: string;
  description?: string;
  image?: string;
  price?: number;
}

export function ProductReviewSchema({
  productName,
  reviews,
  aggregateRating,
  brand,
  description,
  image,
  price,
}: ProductReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    brand: brand
      ? {
          "@type": "Brand",
          name: brand,
        }
      : undefined,
    description: description,
    image: image,
    offers: price
      ? {
          "@type": "Offer",
          price: price,
          priceCurrency: "EUR",
        }
      : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.reviewCount,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
      datePublished: review.date,
      itemReviewed: {
        "@type": "Product",
        name: productName,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceReviewSchemaProps {
  serviceName: string;
  serviceType: string;
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
  provider?: string;
  areaServed?: string[];
}

export function ServiceReviewSchema({
  serviceName,
  serviceType,
  reviews,
  aggregateRating,
  provider = "HeizCenter",
  areaServed = ["Augsburg", "Ulm", "Memmingen"],
}: ServiceReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceType,
    provider: {
      "@id": "https://www.heizcenter.de/#organization",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.reviewCount,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
      datePublished: review.date,
      itemReviewed: {
        "@type": "Service",
        name: serviceName,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
