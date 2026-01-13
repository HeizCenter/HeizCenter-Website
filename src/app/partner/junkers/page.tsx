import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import { Award, Zap, Shield, Thermometer, Settings, CheckCircle2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Junkers Bosch Wärmepumpen & Heizungen | HeizCenter",
  description: "Junkers Bosch Supraeco, Compress Wärmepumpen. Teil der Bosch Thermotechnik Gruppe. Zuverlässig, effizient, bewährt. Installation Augsburg & Ulm.",
  keywords: ["Junkers", "Bosch", "Supraeco", "Compress", "Wärmepumpe", "Heizung", "Augsburg"],
  alternates: {
    canonical: getCanonicalUrl("/partner/junkers"),
  },
};

export const dynamic = "force-dynamic";

const benefits = ["Teil der Bosch Thermotechnik Gruppe", "Bewährte Qualität seit über 130 Jahren", "Compress und Supraeco Serien", "Bis 70°C Vorlauftemperatur", "5 Jahre Garantie", "Ausgezeichnetes Preis-Leistungs-Verhältnis"];
const features = [
  { title: "Bosch Qualität", description: "Junkers ist Teil der Bosch Thermotechnik Gruppe. Bewährte deutsche Ingenieurskunst seit 1895.", icon: Award },
  { title: "Hohe Vorlauftemperaturen", description: "Compress Serie erreicht bis 70°C für Altbau-Eignung. Auch mit klassischen Heizkörpern effizient.", icon: Thermometer },
  { title: "Gutes Preis-Leistungs-Verhältnis", description: "Junkers Bosch bietet solide Qualität zu fairen Preisen. Ideal für preisbewusste Bauherren.", icon: Zap },
  { title: "R290 Kältemittel", description: "Umweltfreundliches natürliches Kältemittel Propan. Zukunftssicher ohne F-Gase.", icon: Shield },
  { title: "Einfache Bedienung", description: "Intuitive Regelung und App-Steuerung. Auch ohne technische Vorkenntnisse einfach bedienbar.", icon: Settings },
  { title: "Lange Lebensdauer", description: "Robuste Technik für 20+ Jahre Betriebsdauer. Wartungsarm und zuverlässig.", icon: CheckCircle2 },
];

const faqs: FAQItem[] = [
  { question: "Was ist der Unterschied zwischen Junkers und Bosch?", answer: "Junkers ist eine Marke der Bosch Thermotechnik. 2018 wurden die Marken zusammengeführt - heute heißen die Produkte \"Junkers Bosch\" oder \"Bosch Thermotechnik\". Die Qualität und Technik sind identisch mit Bosch." },
  { question: "Welche Junkers Wärmepumpen bietet HeizCenter an?", answer: "Wir installieren die Compress 7000i AW (Luft-Wasser Monoblock) und Supraeco Serie. Diese sind baugleich mit den entsprechenden Bosch-Modellen und bieten die gleiche Qualität zu attraktiven Preisen." },
  { question: "Was kostet eine Junkers Bosch Wärmepumpe?", answer: "Eine Compress 7000i AW kostet ab 8.200€ (Gerät). Mit Installation, Zubehör und Inbetriebnahme rechnen Sie mit 19.000-29.000€ komplett für ein Einfamilienhaus. Das Preis-Leistungs-Verhältnis ist sehr gut." },
  { question: "Eignet sich Junkers für Altbau?", answer: "Ja! Die Compress Serie erreicht Vorlauftemperaturen bis 70°C und eignet sich daher auch für Altbauten mit klassischen Heizkörpern. Auch bei niedrigen Außentemperaturen noch effizient." },
  { question: "Wie effizient sind Junkers Bosch Wärmepumpen?", answer: "Die Compress 7000i AW erreicht SCOP-Werte bis 4,6 (A++). Die Effizienz ist sehr gut, wenn auch nicht ganz auf Premiummodell-Niveau. Dafür ist der Anschaffungspreis deutlich günstiger." },
  { question: "Gibt es noch Ersatzteile für ältere Junkers Heizungen?", answer: "Ja! Als Teil der Bosch Gruppe ist die Ersatzteilversorgung auch für ältere Junkers-Modelle gesichert. Bosch garantiert Ersatzteilverfügbarkeit für mindestens 15 Jahre." },
  { question: "Kann ich Junkers mit Photovoltaik kombinieren?", answer: "Ja! Die Compress Serie ist Smart Grid Ready und kann mit PV-Anlagen gekoppelt werden. Die Bosch HomeCom Easy Regelung ermöglicht intelligente Steuerung." },
];

export default function JunkersPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "junkers", url: "/partner/junkers" },
        ]}
      />
      <ServiceHero title="Junkers Bosch Wärmepumpen" description="Teil der Bosch Thermotechnik Gruppe. Bewährte Qualität seit 1895. Die Compress und Supraeco Serien bieten solide Technik zu fairen Preisen." benefits={benefits} icon={Award} badge="Bosch Gruppe" imageSrc="/images/Waermepumpe.jpeg" logoSrc="/images/partners/junkers.svg" />
      <FeaturesSection title="Warum Junkers Bosch? Bewährt. Zuverlässig." features={features} />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Junkers Bosch Produktlinien</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">Compress Wärmepumpen</h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Compress 7000i AW - Luft-Wasser Monoblock</h4>
                <p className="text-slate-700 mb-3">Die beliebteste Serie für Einfamilienhäuser. Monoblock-Bauweise mit Außenaufstellung.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 5-16 kW (verschiedene Größen)</li>
                  <li>SCOP: bis 4,6 (A++)</li>
                  <li>Vorlauftemperatur: bis 70°C</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Monoblock Außenaufstellung</li>
                  <li>Aktive Kühlung möglich</li>
                  <li>HomeCom Easy Regelung</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">Preis ab: 8.200€ (Gerät) | Komplett ab 19.000€</p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Supraeco Serie</h4>
                <p className="text-slate-700 mb-3">Einstiegsmodelle mit bewährter Technik zu attraktiven Preisen.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 4-8 kW</li>
                  <li>SCOP: bis 4,3 (A+)</li>
                  <li>Ideal für kleinere Häuser</li>
                  <li>Günstiger Einstieg in Wärmepumpentechnik</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">Preis ab: 7.500€ (Gerät) | Komplett ab 17.500€</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Cerapur/Cerasmartmodul Brennwertkessel</h3>
              <p className="text-slate-700 mb-4">Wenn eine Wärmepumpe nicht umsetzbar ist, bieten Junkers Brennwertkessel höchste Effizienz.</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>Leistung: 12-30 kW</li>
                <li>Normnutzungsgrad: bis 98%</li>
                <li>Kompakte wandhängende Geräte</li>
                <li>Ideal für Einfamilienhäuser</li>
              </ul>
              <p className="font-semibold text-[#0F5B78]">Preise: ab 2.900€ (Gerät) | Komplett ab 6.800€</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Warum Junkers Bosch mit HeizCenter?</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">Als <strong>Bosch/Junkers Fachpartner</strong> bieten wir Ihnen die volle Bandbreite der Bosch Thermotechnik zu fairen Preisen. Junkers steht für bewährte Qualität und Zuverlässigkeit.</p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Fachpartner-Vorteile</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Zertifizierte Installation</li>
                    <li>✓ 5 Jahre Garantie</li>
                    <li>✓ Original-Ersatzteile</li>
                    <li>✓ Bosch Schulungen</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Unsere Leistungen</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Beratung vor Ort</li>
                    <li>✓ Heizlastberechnung</li>
                    <li>✓ Förderantrag-Hilfe</li>
                    <li>✓ Installation in 2-3 Tagen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Junkers Installationen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Einfamilienhaus Augsburg (2024)</h3>
              <p className="text-slate-700 mb-3">Compress 7000i AW, 8 kW | Baujahr 1993</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Austausch Gasheizung</li>
                <li>• Gutes Preis-Leistungs-Verhältnis</li>
                <li>• Förderung: bis 70% KfW BEG möglich</li>
                <li>• JAZ: 4,0 | Einsparung: ~1.800€/Jahr</li>
              </ul>
            </div>
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Neubau Bobingen (2023)</h3>
              <p className="text-slate-700 mb-3">Compress 7000i AW, 6 kW</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fußbodenheizung</li>
                <li>• SCOP 4,6 (A++)</li>
                <li>• Kompakt und zuverlässig</li>
                <li>• Heizkosten: ~480€/Jahr</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />

      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Weitere Informationen</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/waermepumpe" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"><h4 className="font-semibold text-[#0F5B78] mb-2">Wärmepumpen</h4><p className="text-sm text-slate-600">Technologie-Übersicht</p></Link>
            <Link href="/partner/bosch" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"><h4 className="font-semibold text-[#0F5B78] mb-2">Bosch Thermotechnik</h4><p className="text-sm text-slate-600">Schwestermarke entdecken</p></Link>
            <Link href="/partner" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"><h4 className="font-semibold text-[#0F5B78] mb-2">Alle Hersteller</h4><p className="text-sm text-slate-600">Partner-Übersicht</p></Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: "Junkers Bosch Compress Wärmepumpe", brand: { "@type": "Brand", name: "Junkers Bosch" }, description: "Junkers Bosch Wärmepumpen. Teil der Bosch Thermotechnik. Installation durch HeizCenter.", category: "Wärmepumpe", offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "17500", highPrice: "29000", availability: "https://schema.org/InStock", seller: { "@type": "LocalBusiness", name: "HeizCenter GmbH", telephone: "+49 8234 9665900" } }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "60" }, manufacturer: { "@type": "Organization", name: "Bosch Thermotechnik GmbH", url: "https://www.bosch-thermotechnology.com" } }) }} />
    </>
  );
}
