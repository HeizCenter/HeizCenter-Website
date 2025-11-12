import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPostsByCategory, getAllCategories } from "@/lib/api/blog";
import { PostCard } from "@/components/blog/post-card";


interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categories = await getAllCategories();
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) {
    return {
      title: "Kategorie nicht gefunden - HeizCenter",
    };
  }

  return {
    title: `${category.name} Ratgeber - HeizCenter Bayern`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categories = await getAllCategories();
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) {
    notFound();
  }

  const posts = await getBlogPostsByCategory(params.category);

  return (
    <>
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

      {/* Category Header */}
      <section className="bg-gradient-to-b from-[#0F5B78]/5 to-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">{category.name}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {category.name} Ratgeber
            </h1>
            <p className="text-xl text-slate-600">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-slate-600 mb-6">
                In dieser Kategorie sind noch keine Artikel verfügbar. Schauen
                Sie bald wieder vorbei!
              </p>
              <Button asChild>
                <Link href="/blog">Alle Artikel ansehen</Link>
              </Button>
            </Card>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
