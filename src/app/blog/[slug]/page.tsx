import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/api/blog";
import { PostHeader } from "@/components/blog/post-header";
import { SocialShare } from "@/components/blog/social-share";
import { RelatedPosts } from "@/components/blog/related-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogPostingSchema } from "@/components/schema/blog-posting-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

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
    alternates: {
      canonical: getCanonicalUrl(`/blog/${post.slug}`),
    },
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
        slug={post.slug}
        image={post.image}
        tags={post.tags}
        category={post.category}
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
            <article className="max-w-[75ch]">
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
                className="prose prose-slate prose-lg max-w-none mb-8
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h2:scroll-mt-20
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:leading-snug prose-h3:scroll-mt-20
                  prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:scroll-mt-20
                  prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-700 prose-p:mb-6
                  prose-li:text-lg prose-li:leading-relaxed prose-li:text-slate-700 prose-li:mb-2 prose-li:marker:text-[#0F5B78]
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-a:text-[#0F5B78] prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#0D4A5F]
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                  prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-base
                  prose-pre:bg-slate-900 prose-pre:text-slate-100
                  prose-ul:my-6 prose-ol:my-6
                  prose-table:text-base
                  [&_.callout]:not-prose [&_blockquote]:not-prose"
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
