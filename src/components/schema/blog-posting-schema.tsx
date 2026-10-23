interface BlogPostingSchemaProps {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  updated?: string;
  slug: string;
  image?: string;
  tags: string[];
  category: string;
}

export function BlogPostingSchema({
  title,
  excerpt,
  content,
  date,
  updated,
  slug,
  image,
  tags,
  category,
}: BlogPostingSchemaProps) {
  // Wortzahl aus dem sichtbaren Text, nicht aus dem HTML (Tags und Klassen zählen sonst mit)
  const text = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = text ? text.split(" ").length : 0;
  const readingTimeMinutes = Math.ceil(wordCount / 200);

  // Get first 500 characters of content for articleBody
  const articleBodyPreview = text.slice(0, 500);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image
      ? `https://www.heizcenter.de${image}`
      : "https://www.heizcenter.de/images/logo.png",
    author: {
      "@type": "Organization",
      name: "HeizCenter Redaktion",
      url: "https://www.heizcenter.de",
    },
    publisher: {
      "@type": "Organization",
      name: "HeizCenter GmbH",
      url: "https://www.heizcenter.de",
      logo: {
        "@type": "ImageObject",
        url: "https://www.heizcenter.de/images/logo.png",
      },
    },
    datePublished: date,
    dateModified: updated ?? date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.heizcenter.de/blog/${slug}`,
    },
    description: excerpt,
    articleBody: articleBodyPreview,
    keywords: tags.join(", "),
    wordCount: wordCount,
    timeRequired: `PT${readingTimeMinutes}M`,
    articleSection: category,
    inLanguage: "de-DE",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
