/**
 * Blog API - Odoo CMS Integration
 *
 * This module handles fetching blog posts from Odoo CMS and transforming them
 * for use in the Next.js application.
 */

// import { odooApi } from './odoo'; // TODO: Uncomment when Odoo API is ready

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorBio?: string;
  date: string;
  readingTime: number;
  image?: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogCategory {
  id: number;
  slug: string;
  name: string;
  description: string;
  count: number;
}

/**
 * Calculate reading time based on content length
 * Average reading speed: 200 words per minute
 * TODO: Use this when implementing actual content calculation
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

/**
 * Clean and transform HTML content from Odoo
 * TODO: Use this when processing actual Odoo content
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function transformOdooContent(htmlContent: string): string {
  // Remove Odoo-specific classes and inline styles
  let cleaned = htmlContent
    .replace(/\sclass="[^"]*"/g, '')
    .replace(/\sstyle="[^"]*"/g, '')
    .replace(/<o_[^>]*>/g, '')
    .replace(/<\/o_[^>]*>/g, '');

  // Ensure proper heading hierarchy
  cleaned = cleaned
    .replace(/<h1/g, '<h2')
    .replace(/<\/h1>/g, '</h2>');

  return cleaned;
}

/**
 * Fetch all blog posts from Odoo
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // TODO: Replace with actual Odoo API call
    // const response = await odooApi.searchRead('blog.post', [
    //   ['website_published', '=', true]
    // ], ['id', 'name', 'subtitle', 'content', 'blog_id', 'author_id', 'create_date', 'cover_properties', 'tag_ids']);

    // For now, return mock data
    return getMockBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts from Odoo:', error);
    // Fallback to mock data on error
    return getMockBlogPosts();
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // TODO: Replace with actual Odoo API call
    // const response = await odooApi.searchRead('blog.post', [
    //   ['website_url', 'ilike', slug],
    //   ['website_published', '=', true]
    // ], ['*']);

    const posts = getMockBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch blog posts by category
 */
export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    // TODO: Replace with actual Odoo API call
    const posts = getMockBlogPosts();
    return posts.filter(post =>
      post.category.toLowerCase().replace(/\s+/g, '-').replace(/ä/g, 'ae').replace(/ü/g, 'ue').replace(/ö/g, 'oe') === categorySlug
    );
  } catch (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error);
    return [];
  }
}

/**
 * Fetch all blog categories
 */
export async function getAllCategories(): Promise<BlogCategory[]> {
  try {
    // TODO: Replace with actual Odoo API call
    return getMockCategories();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return getMockCategories();
  }
}

/**
 * Get related posts based on tags and category
 */
export async function getRelatedPosts(postId: number, limit: number = 3): Promise<BlogPost[]> {
  try {
    const allPosts = await getAllBlogPosts();
    const currentPost = allPosts.find(p => p.id === postId);

    if (!currentPost) return [];

    // Find posts with matching tags or category
    const related = allPosts
      .filter(post => post.id !== postId)
      .map(post => {
        let score = 0;
        if (post.category === currentPost.category) score += 2;
        const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
        score += commonTags.length;
        return { post, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.post);

    return related;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

/**
 * Mock data for development
 * TODO: Remove when Odoo integration is complete
 */
function getMockBlogPosts(): BlogPost[] {
  return [
    {
      id: 1,
      slug: 'waermepumpe-kosten-2025',
      title: 'Wärmepumpe Kosten 2025: Kompletter Überblick',
      excerpt: 'Was kostet eine Wärmepumpe 2025 wirklich? Alle Kosten, Förderungen und versteckte Ausgaben im Detail erklärt.',
      content: '<p>Detailed content here...</p>',
      category: 'Wärmepumpe',
      author: 'Thomas Müller',
      authorBio: 'Heizungsexperte mit über 15 Jahren Erfahrung in der Wärmepumpen-Installation.',
      date: '2025-11-10',
      readingTime: 8,
      tags: ['Wärmepumpe', 'Kosten', 'Förderung', 'BEG'],
      featured: true,
    },
    {
      id: 2,
      slug: 'heizungsgesetz-2024',
      title: 'Heizungsgesetz 2024: Das gilt jetzt für Hausbesitzer',
      excerpt: 'Alle wichtigen Änderungen durch das neue Heizungsgesetz 2024. Was müssen Sie beachten?',
      content: '<p>Detailed content here...</p>',
      category: 'Heizung',
      author: 'Sarah Schmidt',
      authorBio: 'Energieberaterin und Expertin für Gebäudesanierung mit Fokus auf erneuerbare Energien.',
      date: '2025-11-08',
      readingTime: 7,
      tags: ['Heizungsgesetz', 'GEG', 'Erneuerbare Energien'],
      featured: true,
    },
    {
      id: 3,
      slug: 'beg-foerderung-2025',
      title: 'BEG Förderung 2025: Bis zu 40% Zuschuss für Ihre Heizung',
      excerpt: 'So beantragen Sie die BEG Förderung richtig. Alle Fördersätze, Voraussetzungen und Tipps.',
      content: '<p>Detailed content here...</p>',
      category: 'Förderung',
      author: 'Michael Weber',
      authorBio: 'Fördermittelberater mit Spezialisierung auf energetische Gebäudesanierung.',
      date: '2025-11-05',
      readingTime: 10,
      tags: ['BEG', 'Förderung', 'Zuschuss', 'KfW', 'BAFA'],
      featured: false,
    },
  ];
}

function getMockCategories(): BlogCategory[] {
  return [
    {
      id: 1,
      slug: 'waermepumpe',
      name: 'Wärmepumpe',
      description: 'Alles über Wärmepumpen: Kosten, Arten, Installation, Förderung und Betrieb.',
      count: 1,
    },
    {
      id: 2,
      slug: 'heizung',
      name: 'Heizung',
      description: 'Ratgeber zu allen Heizungssystemen, Wartung, Modernisierung und Heizungsgesetz.',
      count: 1,
    },
    {
      id: 3,
      slug: 'sanitaer',
      name: 'Sanitär & Bad',
      description: 'Tipps zur Badsanierung, Sanitärinstallation und barrierefreiem Wohnen.',
      count: 0,
    },
    {
      id: 4,
      slug: 'klimaanlage',
      name: 'Klimaanlage',
      description: 'Alles über Klimaanlagen: Split-Systeme, Installation, Kosten und Energieeffizienz.',
      count: 0,
    },
    {
      id: 5,
      slug: 'foerderung',
      name: 'Förderung',
      description: 'Aktuelle Förderprogramme, BEG, KfW-Kredite und Zuschüsse für Ihre Sanierung.',
      count: 1,
    },
  ];
}
