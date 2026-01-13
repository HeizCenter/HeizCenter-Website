import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/blog/post-card";
import { getAllBlogPosts } from "@/lib/api/blog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ratgeber - HeizCenter Bayern | Wärmepumpe, Heizung & mehr",
  description:
    "Expertenwissen zu Wärmepumpen, Heizung, Sanitär und Klimaanlagen. Aktuelle Förderungen, Kosten, Tipps und Ratgeber für Hausbesitzer in Bayern.",
  keywords: [
    "Wärmepumpe Ratgeber",
    "Heizung Kosten",
    "BEG Förderung",
    "Heizungsgesetz",
    "Badsanierung Tipps",
  ],
  alternates: {
    canonical: getCanonicalUrl("/blog"),
  },
};


const categories = [
  { name: "Alle", slug: null },
  { name: "Wärmepumpe", slug: "waermepumpe" },
  { name: "Heizung", slug: "heizung" },
  { name: "Sanitär", slug: "sanitaer" },
  { name: "Klimaanlage", slug: "klimaanlage" },
  { name: "Solar", slug: "solar" },
  { name: "Förderung", slug: "foerderung" },
];

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F5B78]/5 to-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ratgeber & Wissen
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Expertenwissen zu Wärmepumpen, Heizung, Sanitär und Klimaanlagen.
              Bleiben Sie informiert über Förderungen, Kosten und Best Practices.
            </p>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/faq">
                <HelpCircle className="h-5 w-5" />
                Häufig gestellte Fragen (FAQ)
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            category.slug ? (
              <Link key={category.slug} href={`/blog/kategorie/${category.slug}`}>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-[#0F5B78] hover:text-white transition-colors px-4 py-2 text-sm"
                >
                  {category.name}
                </Badge>
              </Link>
            ) : (
              <Link key="alle" href="/blog">
                <Badge
                  variant="default"
                  className="cursor-pointer bg-[#0F5B78] hover:bg-[#0D4A5E] px-4 py-2 text-sm"
                >
                  {category.name}
                </Badge>
              </Link>
            )
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container py-8">
        <h2 className="text-3xl font-bold mb-8">Aktuelle Artikel</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <PostCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readingTime={post.readingTime}
              featured={true}
            />
          ))}
        </div>

        {/* All Posts */}
        <h2 className="text-2xl font-bold mb-6">Alle Artikel</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <PostCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readingTime={post.readingTime}
              featured={false}
            />
          ))}
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="container py-12">
        <div className="bg-gradient-to-br from-[#0F5B78] to-[#0D4A5E] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              In unseren FAQ finden Sie Antworten auf die häufigsten Fragen zu Wärmepumpen,
              Heizung, Förderungen und mehr.
            </p>
            <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
              <Link href="/faq">
                Zu den häufig gestellten Fragen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#0F5B78]/5 py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bleiben Sie auf dem Laufenden
            </h2>
            <p className="text-slate-600 mb-8">
              Erhalten Sie neue Ratgeber-Artikel, Förderungs-Updates und Tipps
              direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-3 bg-[#0F5B78] text-white rounded-lg font-medium hover:bg-[#0F5B78] transition-colors">
                Anmelden
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Kostenlos und jederzeit abbestellbar. Ihre Daten sind sicher.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
