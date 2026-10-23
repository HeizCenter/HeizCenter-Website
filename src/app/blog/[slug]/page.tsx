import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/api/blog";
import { PostHeader } from "@/components/blog/post-header";
import { SocialShare } from "@/components/blog/social-share";
import { RelatedPosts } from "@/components/blog/related-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogPostingSchema } from "@/components/schema/blog-posting-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { FAQSchema } from "@/components/schema/faq-schema";
import { getCanonicalUrl } from "@/lib/seo";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Alle Artikel zur Build-Zeit rendern — sonst liefert Vercel jeden Abruf als
// Server-Render ohne Cache (x-vercel-cache: MISS, cache-control: no-store).
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Unbekannte Slugs sofort 404 statt einmal rendern und ein Jahr als 404 cachen
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden - HeizCenter",
    };
  }

  const url = getCanonicalUrl(`/blog/${post.slug}`);
  const image = post.image ? `https://www.heizcenter.de${post.image}` : undefined;

  return {
    title: `${post.title} | HeizCenter`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      ...(image && { images: [{ url: image, alt: post.title }] }),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: post.title,
      description: post.excerpt,
      ...(image && { images: [image] }),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id, 3);

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      {/* Schema.org BlogPosting Structured Data */}
      <BlogPostingSchema
        title={post.title}
        excerpt={post.excerpt}
        content={post.content}
        date={post.date}
        updated={post.updated}
        slug={post.slug}
        image={post.image}
        tags={post.tags}
        category={post.category}
      />
      {/* Schema.org FAQPage Structured Data */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSchema faqs={post.faqs} />
      )}

      {/* Back Button */}
      <div className="bg-slate-50 py-4">
        <div className="container">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück zum Ratgeber
            </Button>
          </Link>
        </div>
      </div>

      {/* Article */}
      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content — min-w-0: als Grid-Item darf die Spalte nicht auf die Breite der
                breitesten Tabelle wachsen (WebKit/iOS Safari tut das sonst, HEC-185) */}
            <article className="max-w-[75ch] min-w-0 break-words">
              <PostHeader
                title={post.title}
                category={post.category}
                date={post.date}
                updated={post.updated}
                readingTime={post.readingTime}
                author={post.author}
                tags={post.tags}
              />

              {/* Article Content */}
              {/* Typografie über das Plugin (Klassenname "article", Farben in globals.css).
                  Keine Farb- oder Größen-Modifier: die würden als Varianten hinter den
                  Utilities landen und text-white/text-sm im Artikel-HTML überstimmen.
                  Tabellen, dunkle Boxen und Callouts sind per not-article ausgenommen
                  (enhanceBlogContent setzt die Klasse). */}
              <div
                className="article article-slate article-lg max-w-none mb-8
                  article-headings:tracking-tight article-headings:scroll-mt-20
                  article-h2:mt-12 article-h2:mb-6
                  article-h3:mt-10 article-h3:mb-4
                  article-a:no-underline hover:article-a:underline
                  article-img:rounded-xl article-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Social Share */}
              <SocialShare
                url={`https://www.heizcenter.de/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
              />


              {/* CTA */}
              <Card className="bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white mt-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Persönliche Beratung gewünscht?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Unsere Experten beraten Sie kostenlos und unverbindlich zu Ihrem
                    Projekt.
                  </p>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/kontakt">Jetzt Beratung anfragen</Link>
                  </Button>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar with Table of Contents */}
            <aside className="hidden lg:block">
              <TableOfContents />
            </aside>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts
          posts={relatedPosts.map((p) => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            category: p.category,
            date: p.date,
            readingTime: p.readingTime,
          }))}
        />
      )}
    </>
  );
}
