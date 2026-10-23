import { getAllBlogPosts } from "@/lib/api/blog";
import { CONTACT } from "@/lib/config/contact";

// llms.txt (llmstxt.org): kompakter Markdown-Index der Site für KI-Assistenten.
// Wird wie die Sitemap zur Build-Zeit aus den Site-Daten erzeugt, damit neue
// Artikel automatisch erscheinen. Kontaktdaten ausschließlich aus contact.ts.
export const dynamic = "force-static";

const baseUrl = "https://www.heizcenter.de";

const services = [
  ["/waermepumpe", "Wärmepumpe", "Beratung, Installation und Förderung (KfW 458) für Luft-Wasser- und Sole-Wasser-Wärmepumpen, auch im Altbau"],
  ["/heizung", "Heizung", "Heizungsinstallation, Heizungstausch, Wartung und Reparatur von Gas-, Öl-, Pellet- und Hybridheizungen"],
  ["/sanitaer", "Sanitär & Bad", "Badsanierung mit 3D-Planung, barrierefreie Bäder, Sanitärinstallation"],
  ["/klimaanlage", "Klimaanlage", "Split-Klimaanlagen zum Kühlen und Heizen, Installation durch zertifizierte Kältetechniker"],
  ["/solar", "Solarthermie", "Solarthermie für Warmwasser und Heizungsunterstützung, Kombination mit Wärmepumpe oder Kessel"],
  ["/wartungsvertrag", "Wartungsvertrag", "Jährliche Wartung mit Priorität im Notfall; der 24/7-Notdienst gilt nur für Wartungskunden"],
  ["/notdienst", "Notdienst", "Heizungsnotdienst für Kunden mit gültigem Wartungsvertrag; bei Gasgeruch zuerst Netzbetreiber oder Feuerwehr"],
] as const;

const funding = [
  ["/foerderung", "Förderung", "Heizungsförderung nach KfW 458 (BEG EM) mit allen Sätzen, Boni und Fristen, Stand Oktober 2026"],
  ["/rechner", "Kostenrechner", "Wärmepumpen-Kostenrechner mit Förderberechnung nach Einkommen, Altheizung und Nutzung"],
  ["/checklisten", "Checklisten", "Checklisten für Heizungstausch, Wärmepumpe und Badsanierung"],
  ["/faq", "Häufige Fragen", "Antworten zu Terminen, Förderung, Kosten und Ablauf"],
] as const;

const offices = [
  ["/standorte/bobingen", "Bobingen (Hauptsitz, Raum Augsburg)"],
  ["/standorte/klosterlechfeld", "Klosterlechfeld (Raum Landsberg/Augsburg)"],
  ["/standorte/gutenzell-huerbel", "Gutenzell-Hürbel (Raum Ulm/Memmingen, Baden-Württemberg)"],
] as const;

const serviceAreas: Record<string, string> = {
  augsburg: "Augsburg",
  ulm: "Ulm",
  memmingen: "Memmingen",
  "neu-ulm": "Neu-Ulm",
  friedberg: "Friedberg",
  koenigsbrunn: "Königsbrunn",
  stadtbergen: "Stadtbergen",
  gersthofen: "Gersthofen",
  neusaess: "Neusäß",
  mindelheim: "Mindelheim",
  "bad-woerishofen": "Bad Wörishofen",
  ottobeuren: "Ottobeuren",
  laupheim: "Laupheim",
  blaustein: "Blaustein",
  landsberg: "Landsberg am Lech",
  kaufbeuren: "Kaufbeuren",
  guenzburg: "Günzburg",
  krumbach: "Krumbach",
  aichach: "Aichach",
  erbach: "Erbach",
  "bad-wurzach": "Bad Wurzach",
  leutkirch: "Leutkirch im Allgäu",
  schwabmuenchen: "Schwabmünchen",
};

const partners = [
  ["viessmann", "Viessmann"],
  ["vaillant", "Vaillant"],
  ["buderus", "Buderus"],
  ["wolf", "Wolf"],
  ["bosch", "Bosch"],
  ["daikin", "Daikin"],
  ["zewotherm", "ZEWOTHERM (LAMBDA EUREKA)"],
] as const;

const line = (path: string, title: string, description?: string) =>
  `- [${title}](${baseUrl}${path})${description ? `: ${description}` : ""}`;

export async function GET() {
  const posts = await getAllBlogPosts();
  const generatedOn = new Date().toISOString().slice(0, 10);

  const text = [
    "# HeizCenter GmbH – Wärmepumpe, Heizung, Sanitär, Klimaanlage und Solar in Bayern und Baden-Württemberg",
    "",
    "> SHK-Fachbetrieb mit drei Standorten: Bobingen und Klosterlechfeld (Raum Augsburg/Landsberg, Bayern) sowie Gutenzell-Hürbel (Raum Ulm/Memmingen, Baden-Württemberg). Installation, Wartung und Förderberatung für Wärmepumpen (KfW 458), Heizungen, Sanitär und Bad, Klimaanlagen und Solarthermie. Servicegebiet: Augsburg, Ulm, Memmingen, Landsberg und 19 weitere Orte.",
    "",
    "Wichtige Fakten:",
    `- Kontakt: Telefon ${CONTACT.PHONE_DISPLAY}, E-Mail ${CONTACT.EMAIL}, Anfrage unter ${baseUrl}/kontakt`,
    "- Notdienst: nur für Kunden mit gültigem Wartungsvertrag (siehe /notdienst); bei Gasgeruch zuerst den Gasnetzbetreiber oder die Feuerwehr anrufen",
    "- Förderung: Stand Oktober 2026 nach KfW 458 – Sätze, Boni und Stichtag 31.01.2027 unter /foerderung, Rechenbeispiele unter /rechner",
    "- Hersteller-Partner: Viessmann, Vaillant, Buderus, Wolf, Bosch, Daikin, ZEWOTHERM",
    `- Stand dieser Datei: ${generatedOn} (wird bei jedem Deploy neu erzeugt)`,
    "",
    "## Leistungen",
    ...services.map(([path, title, description]) => line(path, title, description)),
    "",
    "## Förderung und Kosten",
    ...funding.map(([path, title, description]) => line(path, title, description)),
    "",
    "## Standorte",
    ...offices.map(([path, title]) => line(path, title)),
    ...Object.entries(serviceAreas).map(([slug, name]) =>
      line(`/standorte/${slug}`, name, "Servicegebiet ohne eigenes Büro")
    ),
    "",
    "## Hersteller",
    ...partners.map(([slug, name]) => line(`/partner/${slug}`, name)),
    "",
    "## Ratgeber (Blog)",
    ...posts.map((post) =>
      line(`/blog/${post.slug}`, post.title, `${post.excerpt} (Stand ${post.updated ?? post.date})`)
    ),
    "",
    "## Unternehmen und Rechtliches",
    line("/ueber-uns", "Über uns"),
    line("/karriere", "Karriere"),
    line("/impressum", "Impressum"),
    line("/datenschutz", "Datenschutzerklärung"),
    line("/agb", "AGB"),
    "",
  ].join("\n");

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
