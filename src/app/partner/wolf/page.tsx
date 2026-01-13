import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import {
  Award,
  Zap,
  Shield,
  Thermometer,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wolf Wärmepumpen & Heizungen | HeizCenter Partner",
  description:
    "Wolf CHA Monoblock Wärmepumpen - Kompakt, effizient, zuverlässig. Modulierende Inverter-Technologie. Premium Heizungssysteme Made in Germany. Augsburg & Ulm.",
  alternates: {
    canonical: getCanonicalUrl("/partner/wolf"),
  },
  keywords: [
    "Wolf",
    "CHA",
    "CHC",
    "Monoblock",
    "Wärmepumpe",
    "Heizung",
    "Augsburg",
    "Ulm",
  ],
};

export const dynamic = "force-dynamic";

const benefits = [
  "Kompakte Monoblock-Bauweise",
  "Modulierende Inverter-Technologie",
  "CHA-Monoblock bis 20 kW Leistung",
  "Integrierter 9 kW Elektro-Heizstab",
  "Made in Germany - Mainburg, Bayern",
  "5 Jahre Garantie auf Wärmepumpen",
];

const features = [
  {
    title: "Kompakt & Platzsparend",
    description:
      "Wolf Wärmepumpen überzeugen durch kompakte Abmessungen. Perfekt für kleine Grundstücke und enge Platzverhältnisse.",
    icon: Settings,
  },
  {
    title: "Modulierende Technologie",
    description:
      "Inverter-geregelte Wärmepumpen passen die Leistung stufenlos an den Bedarf an. Höchste Effizienz und Komfort.",
    icon: Zap,
  },
  {
    title: "Breites Leistungsspektrum",
    description:
      "CHA-Monoblock Serie von 7 bis 20 kW. Für Einfamilienhäuser bis kleine Gewerbeimmobilien.",
    icon: Thermometer,
  },
  {
    title: "Integrierter Heizstab",
    description:
      "9 kW Elektro-Heizstab serienmäßig integriert für Spitzenlasten und Backup. Keine zusätzlichen Kosten.",
    icon: Award,
  },
  {
    title: "Made in Mainburg",
    description:
      "Entwicklung und Produktion in Bayern. Deutsche Qualität und kurze Lieferwege.",
    icon: Shield,
  },
  {
    title: "Smart Grid Ready",
    description:
      "Optimale Integration mit PV-Anlagen und Smart Home Systemen über Schnittstellen.",
    icon: CheckCircle2,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Wolf Wärmepumpen bietet HeizCenter an?",
    answer:
      "Wir installieren die Wolf CHA-Monoblock Serie (7, 10, 16/20 kW) für Luft-Wasser-Anwendungen sowie die CHC-Monoblock Serie für kompakte Lösungen. Für Erdwärme bieten wir die BWS-1 Serie an. Alle Modelle mit modernster Inverter-Technologie.",
  },
  {
    question: "Was kostet eine Wolf CHA Monoblock Wärmepumpe?",
    answer:
      "Eine Wolf CHA-07 Monoblock kostet ab 7.100€ (nur Gerät), die CHA-10 ab 7.900€. Mit Installation, Hydraulikmodul, Warmwasserspeicher und Inbetriebnahme rechnen Sie mit 18.000-28.000€ für ein komplettes System im Einfamilienhaus.",
  },
  {
    question: "Was ist der Unterschied zwischen CHA und CHC?",
    answer:
      "CHA-Monoblock ist die Standard-Serie mit Außenaufstellung (7-20 kW). CHC-Monoblock ist die kompakte Serie für kleinere Leistungen (4-8 kW) mit besonders platzsparenden Abmessungen. Beide nutzen die modulierende Inverter-Technologie.",
  },
  {
    question: "Ist der Elektro-Heizstab wirklich integriert?",
    answer:
      "Ja! Alle Wolf CHA-Monoblock Modelle haben einen 9 kW Elektro-Heizstab serienmäßig integriert (bei 3~400V). Dieser springt nur bei Spitzenlasten oder sehr niedrigen Außentemperaturen an. Das spart Kosten für einen externen Heizstab.",
  },
  {
    question: "Wie effizient sind Wolf Wärmepumpen?",
    answer:
      "Die Wolf CHA-Monoblock Serie erreicht SCOP-Werte bis 4,7 (A++). Die Effizienz ist sehr gut, wenn auch nicht ganz auf dem Niveau der Premiummodelle von Viessmann oder Vaillant. Dafür ist das Preis-Leistungs-Verhältnis ausgezeichnet.",
  },
  {
    question: "Eignet sich Wolf für Altbau?",
    answer:
      "Die Wolf CHA-Monoblock kann Vorlauftemperaturen bis 60°C erreichen, bei Unterstützung durch den Heizstab auch höher. Für gut gedämmte Altbauten und Modernisierungen ist Wolf sehr gut geeignet. Bei sehr hohem Heizbedarf empfehlen wir Hochtemperatur-Modelle anderer Hersteller.",
  },
  {
    question: "Kann ich Wolf mit Photovoltaik kombinieren?",
    answer:
      "Ja! Wolf Wärmepumpen sind Smart Grid Ready und können über Schnittstellen mit PV-Anlagen gekoppelt werden. Die Wolf Smartset Regelung ermöglicht intelligente Steuerung für optimalen Eigenverbrauch.",
  },
];

export default function WolfPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "wolf", url: "/partner/wolf" },
        ]}
      />
      <ServiceHero
        title="Wolf Wärmepumpen & Heizungen"
        description="Kompakte Monoblock-Systeme mit modulierender Inverter-Technologie. Made in Mainburg, Bayern. Die CHA-Serie überzeugt durch Zuverlässigkeit und gutes Preis-Leistungs-Verhältnis."
        benefits={benefits}
        icon={Award}
        badge="Made in Bavaria"
        imageSrc="/images/Waermepumpe.jpeg"
        logoSrc="/images/partners/wolf.svg"
      />

      <FeaturesSection
        title="Warum Wolf? Kompakt. Effizient. Zuverlässig."
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Wolf Produktlinien bei HeizCenter
          </h2>

          <div className="space-y-8">
            {/* CHA Monoblock Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                CHA-Monoblock Wärmepumpen
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  CHA-Monoblock 07 & 10 - Einfamilienhäuser
                </h4>
                <p className="text-slate-700 mb-3">
                  Die beliebtesten Modelle für Einfamilienhäuser. Kompakte
                  Monoblock-Bauweise mit allen Komponenten im Außengerät.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: CHA-07 (5,2 kW) | CHA-10 (7,5 kW) bei A7/W35</li>
                  <li>SCOP: bis 4,7 (A++)</li>
                  <li>Vorlauftemperatur: bis 60°C</li>
                  <li>Kältemittel: R410A oder R32</li>
                  <li>9 kW Elektro-Heizstab integriert (3~400V)</li>
                  <li>Modulierende Inverter-Regelung</li>
                  <li>Überströmventil inklusive</li>
                  <li>Aktiv- oder Passiv-Kühlung möglich</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  CHA-07: ab 7.100€ (Gerät) | Komplett ab 18.000€<br />
                  CHA-10: ab 7.900€ (Gerät) | Komplett ab 19.500€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  CHA-Monoblock 16/20 - Größere Objekte
                </h4>
                <p className="text-slate-700 mb-3">
                  Höhere Leistungen für größere Einfamilienhäuser, Doppelhäuser
                  oder kleinere Gewerbeobjekte.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 10-15 kW bei A7/W35</li>
                  <li>Modulierende Leistung 20-100%</li>
                  <li>Vorlauftemperatur: bis 65°C</li>
                  <li>9 kW Heizstab serienmäßig</li>
                  <li>Ideal für größere Objekte</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 9.500€ (Gerät) | Komplett ab 22.000€
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  CHC-Monoblock - Kompakt-Serie
                </h4>
                <p className="text-slate-700 mb-3">
                  Besonders kompakte Bauweise für kleine Grundstücke und enge
                  Platzverhältnisse.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 4-8 kW</li>
                  <li>Kleinste Abmessungen in der Klasse</li>
                  <li>Ideal für kleinere Häuser</li>
                  <li>Modulierende Inverter-Technologie</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 7.500€ (Gerät) | Komplett ab 18.500€
                </p>
              </div>
            </div>

            {/* BWS Erdwärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                BWS-1 Erdwärmepumpen
              </h3>
              <p className="text-slate-700 mb-4">
                Sole-Wasser-Wärmepumpen für höchste Effizienz durch Nutzung der
                konstanten Erdwärme. Für Neubau mit ausreichend Grundstück.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>Leistung: 5-16 kW</li>
                <li>SCOP: bis 5,2 (höchste Effizienz)</li>
                <li>Sehr leise (nur Innengerät)</li>
                <li>Erdsonden oder Erdkollektoren</li>
                <li>Modulierende Inverter-Technologie</li>
                <li>Langlebig und wartungsarm</li>
              </ul>

              <p className="font-semibold text-[#0F5B78]">
                BWS-1 Preise: ab 11.000€ (Gerät) | Komplett ab 28.000-38.000€
              </p>
            </div>

            {/* CGB-2 Brennwertkessel */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                CGB-2 Brennwertkessel für Gas
              </h3>
              <p className="text-slate-700 mb-4">
                Wenn eine Wärmepumpe nicht umsetzbar ist, bieten Wolf
                Brennwertkessel höchste Effizienz bei Gasheizungen.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  CGB-2-14/20 - Kompakt-Wandgerät
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Leistung: 14-20 kW</li>
                  <li>Normnutzungsgrad: bis 98%</li>
                  <li>Kompakte Bauweise</li>
                  <li>Ideal für Einfamilienhäuser</li>
                </ul>
              </div>

              <p className="font-semibold text-[#0F5B78] mt-4">
                CGB-2 Preise: ab 3.100€ (Gerät) | Komplett ab 7.200€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HeizCenter for Wolf */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Wolf mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Als autorisierter <strong>Wolf Fachpartner</strong> verbinden wir
                die bayerische Qualität aus Mainburg mit unserem lokalen Service.
                Wolf-Wärmepumpen überzeugen durch ein ausgezeichnetes
                Preis-Leistungs-Verhältnis und kompakte Bauweise.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Fachpartner-Vorteile
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Zertifizierte Wolf-Installation</li>
                    <li>✓ 5 Jahre Garantie auf Wärmepumpen</li>
                    <li>✓ Original-Ersatzteile ab Lager</li>
                    <li>✓ Kurze Lieferwege aus Bayern</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Unsere Leistungen
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Kostenlose Beratung vor Ort</li>
                    <li>✓ Heizlastberechnung nach DIN</li>
                    <li>✓ Förderantrag-Unterstützung</li>
                    <li>✓ Installation in 2-3 Tagen</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-slate-700">
                Profitieren Sie von über <strong>20 Jahren Erfahrung</strong> mit
                Wolf-Produkten. Mehr als 60 zufriedene Kunden vertrauen auf
                unsere Expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Installation References */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Wolf-Installationen in der Region
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Einfamilienhaus Augsburg (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Wolf CHA-Monoblock 10, 7,5 kW | Baujahr 1995
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Austausch Gasheizung</li>
                <li>• Kompakte Aufstellung möglich</li>
                <li>• Förderung: bis 70% KfW BEG möglich</li>
                <li>• JAZ: 4,1 | Einsparung: ~1.900€/Jahr</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Neubau Bobingen (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Wolf CHA-Monoblock 07, 5,2 kW | KfW55
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fußbodenheizung</li>
                <li>• SCOP 4,7 (A++)</li>
                <li>• Kleines Grundstück</li>
                <li>• Heizkosten: ~450€/Jahr</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Doppelhaushälfte Ulm (2023)
              </h3>
              <p className="text-slate-700 mb-3">
                Wolf CHC-Monoblock, 6 kW
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Sehr wenig Platz im Garten</li>
                <li>• Kompakteste Lösung gewählt</li>
                <li>• Trotzdem effizient</li>
                <li>• JAZ: 4,0</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Modernisierung Memmingen (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Wolf CHA-Monoblock 16/20
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Größeres Einfamilienhaus</li>
                <li>• Heizkörper behalten</li>
                <li>• 60°C Vorlauftemperatur</li>
                <li>• Heizstab als Backup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection variant="gradient" />

      {/* Related Links */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Weitere Informationen</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/waermepumpe"
              className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h4 className="font-semibold text-[#0F5B78] mb-2">
                Wärmepumpen Übersicht
              </h4>
              <p className="text-sm text-slate-600">
                Alles über Wärmepumpen-Technologie
              </p>
            </Link>
            <Link
              href="/heizung"
              className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h4 className="font-semibold text-[#0F5B78] mb-2">
                Heizungssysteme
              </h4>
              <p className="text-sm text-slate-600">
                Moderne Heizungslösungen im Vergleich
              </p>
            </Link>
            <Link
              href="/partner"
              className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h4 className="font-semibold text-[#0F5B78] mb-2">
                Alle Hersteller
              </h4>
              <p className="text-sm text-slate-600">
                Weitere Premium-Partner entdecken
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Wolf CHA-Monoblock Wärmepumpe",
            brand: {
              "@type": "Brand",
              name: "Wolf",
            },
            description:
              "Kompakte Monoblock Wärmepumpen von Wolf. Made in Mainburg, Bayern. Installation durch HeizCenter.",
            category: "Wärmepumpe",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "18000",
              highPrice: "38000",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "LocalBusiness",
                name: "HeizCenter GmbH",
                telephone: "+49 8234 9665900",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "60",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Wolf GmbH",
              url: "https://www.wolf.eu",
            },
          }),
        }}
      />
    </>
  );
}
