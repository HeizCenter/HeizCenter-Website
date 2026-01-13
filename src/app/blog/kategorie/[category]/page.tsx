import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPostsByCategory, getAllCategories } from "@/lib/api/blog";
import { PostCard } from "@/components/blog/post-card";
import { getCanonicalUrl } from "@/lib/seo";

const allCategories = [
  { name: "Alle", slug: null },
  { name: "Wärmepumpe", slug: "waermepumpe" },
  { name: "Heizung", slug: "heizung" },
  { name: "Sanitär", slug: "sanitaer" },
  { name: "Klimaanlage", slug: "klimaanlage" },
  { name: "Solar", slug: "solar" },
  { name: "Förderung", slug: "foerderung" },
];


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
    alternates: {
      canonical: getCanonicalUrl(`/blog/kategorie/${params.category}`),
    },
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
            <p className="text-xl text-slate-600 mb-8">{category.description}</p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {allCategories.map((cat) => (
                cat.slug ? (
                  <Link key={cat.slug} href={`/blog/kategorie/${cat.slug}`}>
                    <Badge
                      variant={cat.slug === params.category ? "default" : "outline"}
                      className={`cursor-pointer transition-colors px-4 py-2 text-sm ${
                        cat.slug === params.category
                          ? "bg-[#0F5B78] hover:bg-[#0D4A5E]"
                          : "hover:bg-[#0F5B78] hover:text-white"
                      }`}
                    >
                      {cat.name}
                    </Badge>
                  </Link>
                ) : (
                  <Link key="alle" href="/blog">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-[#0F5B78] hover:text-white transition-colors px-4 py-2 text-sm"
                    >
                      {cat.name}
                    </Badge>
                  </Link>
                )
              ))}
            </div>
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
