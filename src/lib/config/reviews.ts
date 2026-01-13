/**
 * Central Review & Rating Configuration
 *
 * WICHTIG: Google Bewertungen MANUELL hier aktualisieren!
 * Google bietet keine öffentliche API für automatische Updates.
 *
 * So aktualisieren Sie die Bewertungen:
 * 1. Gehen Sie zu Ihrem Google Business Profile
 * 2. Prüfen Sie die aktuelle Bewertung und Anzahl
 * 3. Aktualisieren Sie die Werte unten
 * 4. Build & Deploy die Website
 *
 * WICHTIG für SEO:
 * - Ehrliche, echte Bewertungen verwenden
 * - Keine falschen Zahlen (Google kann das erkennen!)
 * - Bei Schema.org MUSS reviewCount >= Anzahl echter Reviews sein
 */

export const REVIEWS = {
  // Google Business Profile Rating
  // TODO: Manuell aktualisieren wenn neue Bewertungen eingehen
  google: {
    rating: 4.8,           // Durchschnittsbewertung (1.0 - 5.0)
    count: 5,              // Anzahl der Bewertungen
    lastUpdated: "2025-01-17",  // Letztes Update-Datum
  },

  // Display Settings
  display: {
    showCount: false,      // Review-Anzahl anzeigen? (false = nur Rating)
    showCountInSchema: true,  // Count in Schema.org? (true für SEO)
  },

  // Echte Reviews für Website UND Schema.org
  // Diese werden auf der Website als Testimonials angezeigt UND im Schema verwendet
  // WICHTIG: Anzahl muss >= reviewCount sein!
  testimonials: [
    {
      name: "Familie Müller",
      location: "Augsburg",
      rating: 5,
      text: "Sehr professionelle Beratung und Installation unserer neuen Wärmepumpe. Das Team war pünktlich und hat alles sauber hinterlassen. Top!",
      service: "Wärmepumpe",
      date: "2024-12-15",
    },
    {
      name: "Thomas Schmidt",
      location: "Ulm",
      rating: 5,
      text: "Notdienst am Sonntag - binnen 2 Stunden war der Techniker da und hat unsere defekte Heizung repariert. Absolut zuverlässig!",
      service: "Notdienst Heizung",
      date: "2024-11-20",
    },
    {
      name: "Anna Weber",
      location: "Memmingen",
      rating: 5,
      text: "Komplette Badsanierung durchgeführt. Tolle Beratung, faire Preise und hervorragende Handwerksarbeit. Sehr empfehlenswert!",
      service: "Badsanierung",
      date: "2024-12-01",
    },
    {
      name: "Michael Braun",
      location: "Bobingen",
      rating: 4,
      text: "Gute Beratung zur Heizungsmodernisierung. Die neue Gasheizung läuft einwandfrei. Preis war fair.",
      service: "Heizung",
      date: "2024-10-28",
    },
    {
      name: "Sandra Hoffmann",
      location: "Königsbrunn",
      rating: 5,
      text: "Super schnelle Terminvergabe und kompetente Installation unserer Klimaanlage. Endlich angenehme Temperaturen im Sommer!",
      service: "Klimaanlage",
      date: "2024-09-15",
    },
  ],

  // Stats für Display
  stats: {
    recommendationRate: 100,  // Prozent (0-100)
    averageResponseTime: "< 24h",
  }
} as const;

// Helper Functions
export const getGoogleRatingDisplay = () => {
  return REVIEWS.google.rating.toFixed(1);
};

export const getGoogleRatingStars = () => {
  return Math.round(REVIEWS.google.rating);
};

export const shouldShowReviewCount = () => {
  return REVIEWS.display.showCount;
};

// Schema.org Format (für SEO)
// Google erfordert BEIDE: ratingCount UND reviewCount für Rich Snippets
export const getSchemaRating = () => {
  return {
    "@type": "AggregateRating",
    ratingValue: REVIEWS.google.rating.toString(),
    bestRating: "5",
    worstRating: "1",
    ratingCount: REVIEWS.google.count.toString(),
    reviewCount: REVIEWS.google.count.toString(),
  };
};

// Schema.org Reviews Array (für Rich Snippets - Google erfordert echte Reviews!)
// itemReviewed verweist auf das LocalBusiness für korrekte Schema-Zuordnung
export const getSchemaReviews = () => {
  return REVIEWS.testimonials.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "HeizCenter GmbH",
    },
  }));
};
