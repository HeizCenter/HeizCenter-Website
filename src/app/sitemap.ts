import { MetadataRoute } from "next";
import {
  getAllBlogPosts,
  getAllCategories,
  getCategorySlug,
  type BlogPost,
} from "@/lib/api/blog";

const baseUrl = "https://www.heizcenter.de";

type Entry = MetadataRoute.Sitemap[number];
type Frequency = Entry["changeFrequency"];

// Statische Seiten bekommen kein lastModified: Next kennt kein Änderungsdatum
// je Route, und ein Build-Zeitstempel auf allen Seiten ist für Google ein
// unbrauchbares Signal. Nur Blog-Einträge tragen ein echtes Datum.
const staticPage = (
  path: string,
  changeFrequency: Frequency,
  priority: number
): Entry => ({
  url: `${baseUrl}${path}`,
  changeFrequency,
  priority,
});

const postLastModified = (post: BlogPost) => new Date(post.updated ?? post.date);

const latest = (dates: Date[]) =>
  dates.length > 0 ? new Date(Math.max(...dates.map((d) => d.getTime()))) : undefined;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainPages: Entry[] = [
    staticPage("", "weekly", 1.0),
    staticPage("/waermepumpe", "weekly", 0.9),
    staticPage("/heizung", "weekly", 0.9),
    staticPage("/sanitaer", "weekly", 0.9),
    staticPage("/klimaanlage", "weekly", 0.9),
    staticPage("/solar", "weekly", 0.9),
    staticPage("/kontakt", "monthly", 0.8),
    staticPage("/rechner", "monthly", 0.8),
    staticPage("/standorte", "monthly", 0.7),
  ];

  const additionalPages: Entry[] = [
    staticPage("/ueber-uns", "monthly", 0.7),
    staticPage("/karriere", "weekly", 0.6),
    staticPage("/notdienst", "monthly", 0.8),
    staticPage("/faq", "monthly", 0.7),
    staticPage("/foerderung", "monthly", 0.7),
    staticPage("/checklisten", "monthly", 0.6),
    staticPage("/wartungsvertrag", "monthly", 0.6),
  ];

  const partnerPages: Entry[] = [
    staticPage("/partner", "monthly", 0.6),
    ...["bosch", "buderus", "daikin", "vaillant", "viessmann", "wolf", "zewotherm"].map(
      (slug) => staticPage(`/partner/${slug}`, "monthly", 0.5)
    ),
  ];

  // Rechtliches ist indexierbar, aber nachrangig
  const legalPages: Entry[] = [
    staticPage("/impressum", "yearly", 0.3),
    staticPage("/datenschutz", "yearly", 0.3),
    staticPage("/agb", "yearly", 0.3),
    staticPage("/cookie-hinweis", "yearly", 0.3),
  ];

  // Büros
  const mainLocationPages: Entry[] = [
    staticPage("/standorte/bobingen", "monthly", 0.8),
    staticPage("/standorte/gutenzell-huerbel", "monthly", 0.8),
    staticPage("/standorte/klosterlechfeld", "monthly", 0.8),
  ];

  // Servicegebiete ohne Büro
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
  const locationPages: Entry[] = locations.map((location) =>
    staticPage(`/standorte/${location}`, "monthly", 0.6)
  );

  const posts = await getAllBlogPosts();

  const blogIndex: Entry = {
    url: `${baseUrl}/blog`,
    lastModified: latest(posts.map(postLastModified)),
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const categories = await getAllCategories();
  const categoryPages: Entry[] = categories.map((category) => ({
    url: `${baseUrl}/blog/kategorie/${category.slug}`,
    lastModified: latest(
      posts
        .filter((post) => getCategorySlug(post.category) === category.slug)
        .map(postLastModified)
    ),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const blogPosts: Entry[] = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: postLastModified(post),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...mainPages,
    blogIndex,
    ...additionalPages,
    ...partnerPages,
    ...legalPages,
    ...mainLocationPages,
    ...locationPages,
    ...categoryPages,
    ...blogPosts,
  ];
}
