import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heizcenter.de";

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/waermepumpe`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/heizung`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sanitaer`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/klimaanlage`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rechner`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/standorte`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Additional pages (Day 25-26)
  const additionalPages = [
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karriere`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/notdienst`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/foerderung`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/checklisten`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wartungsvertrag`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Legal pages (noindex in metadata, but included in sitemap with low priority)
  const legalPages = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-hinweis`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Main location pages (physical offices)
  const mainLocationPages = [
    {
      url: `${baseUrl}/standorte/bobingen`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/standorte/gutenzell-huerbel`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/standorte/klosterlechfeld`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Service area location pages
  const locations = [
    "augsburg",
    "ulm",
    "memmingen",
    "neu-ulm",
    "friedberg",
    "koenigsbrunn",
    "stadtbergen",
    "gersthofen",
    "neusaess",
    "mindelheim",
    "bad-woerishofen",
    "ottobeuren",
    "laupheim",
    "blaustein",
    // Micro-location pages (Day 18-19)
    "landsberg",
    "kaufbeuren",
    "guenzburg",
    "krumbach",
    "aichach",
    "erbach",
    "bad-wurzach",
    "leutkirch",
    "schwabmuenchen",
  ];

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/standorte/${location}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog categories
  const blogCategories = [
    "waermepumpe",
    "heizung",
    "sanitaer",
    "klimaanlage",
    "foerderung",
  ];

  const categoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/kategorie/${category}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  // TODO: Add dynamic blog posts from Odoo CMS
  // For now, we'll add placeholder URLs
  const blogPosts = [
    "waermepumpe-kosten-2025",
    "heizungsgesetz-2024",
    "beg-foerderung-2025",
    "waermepumpe-altbau",
    "heizung-wartung",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...mainPages,
    ...additionalPages,
    ...legalPages,
    ...mainLocationPages,
    ...locationPages,
    ...categoryPages,
    ...blogPosts,
  ];
}
