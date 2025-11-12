import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/api/blog";
import { PostHeader } from "@/components/blog/post-header";
import { AuthorBio } from "@/components/blog/author-bio";
import { SocialShare } from "@/components/blog/social-share";
import { RelatedPosts } from "@/components/blog/related-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden - HeizCenter",
    };
  }

  return {
    title: `${post.title} - HeizCenter Ratgeber`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id, 3);

  // Generate Article JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "HeizCenter",
      logo: {
        "@type": "ImageObject",
        url: "https://heizcenter.de/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://heizcenter.de/blog/${params.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
            {/* Main Content */}
            <article className="max-w-4xl">
              <PostHeader
                title={post.title}
                category={post.category}
                date={post.date}
                readingTime={post.readingTime}
                author={post.author}
                tags={post.tags}
              />

              {/* Article Content */}
              <div
                className="prose prose-slate prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Social Share */}
              <SocialShare
                url={`https://heizcenter.de/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
              />

              {/* Author Bio */}
              <div className="mt-8">
                <AuthorBio
                  name={post.author}
                  bio={post.authorBio}
                />
              </div>

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
