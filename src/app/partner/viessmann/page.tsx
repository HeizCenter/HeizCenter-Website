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
  title: "Viessmann Wärmepumpen & Heizungen | HeizCenter Partner",
  description:
    "Premium Viessmann Wärmepumpen und Heizungssysteme. Vitocal Serie, Vitodens Brennwerttechnik. Testsieger 2024. Professionelle Installation in Augsburg & Ulm.",
  keywords: [
    "Viessmann",
    "Vitocal",
    "Vitodens",
    "Wärmepumpe",
    "Heizung",
    "Augsburg",
    "Ulm",
    "Testsieger",
  ],
  alternates: {
    canonical: getCanonicalUrl("/partner/viessmann"),
  },
};

export const dynamic = "force-dynamic";

const benefits = [
  "Testsieger Stiftung Warentest 2024 & 2025",
  "Made in Germany - Höchste Qualitätsstandards",
  "Vitocal Wärmepumpen mit höchster Energieeffizienzklasse",
  "Bis zu 75°C Vorlauftemperatur für Altbau",
  "10 Jahre Garantie auf Wärmepumpen",
  "Professionelle Fachpartner-Installation",
];

const features = [
  {
    title: "Testsieger-Qualität",
    description:
      "Die Vitocal 250-A ist Testsieger bei Stiftung Warentest 2024 und 2025 mit Note GUT (2,0). Höchste Effizienz und Zuverlässigkeit.",
    icon: Award,
  },
  {
    title: "Hohe Vorlauftemperatur",
    description:
      "Vitocal 350-G erreicht bis 72°C, Vitocal 300-A und 350-A bis 65°C. Perfekt für unsanierte Altbauten mit Heizkörpern.",
    icon: Thermometer,
  },
  {
    title: "Höchste Energieeffizienz",
    description:
      "SCOP-Werte bis 5,1 bei der Vitocal 250-A. Bis zu 75% Energieeinsparung gegenüber Öl- und Gasheizungen.",
    icon: Zap,
  },
  {
    title: "Umweltfreundliches R290",
    description:
      "Natürliches Kältemittel Propan (R290) mit GWP von nur 3. Zukunftssicher und umweltfreundlich.",
    icon: Shield,
  },
  {
    title: "Smart Grid Ready",
    description:
      "Integration mit Photovoltaik und Smart Home. Intelligente Steuerung über ViCare App für optimale Effizienz.",
    icon: Settings,
  },
  {
    title: "10 Jahre Garantie",
    description:
      "Viessmann bietet bis zu 10 Jahre Garantie auf Wärmepumpen. Lange Lebensdauer von 20+ Jahren.",
    icon: CheckCircle2,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Viessmann Wärmepumpen installiert HeizCenter?",
    answer:
      "Wir installieren die gesamte Vitocal Serie: Vitocal 150-A (Einsteigermodell), Vitocal 250-A (Testsieger), Vitocal 300-A (Hochtemperatur), und Vitocal 350-G (Erdwärme). Je nach Gebäude, Heizsystem und Budget wählen wir das optimale Modell für Sie aus.",
  },
  {
    question: "Was kostet eine Viessmann Vitocal Wärmepumpe?",
    answer:
      "Eine Vitocal 150-A oder 250-A Luft-Wasser-Wärmepumpe kostet ab 7.000€ (nur Gerät). Mit Installation, Zubehör und Inbetriebnahme rechnen Sie mit 18.000-28.000€ für ein Einfamilienhaus. Erdwärmepumpen wie die Vitocal 222-G starten ab 11.000€ Gerätepreis. Genaue Kosten ermitteln wir nach Vor-Ort-Besichtigung.",
  },
  {
    question: "Warum ist die Vitocal 250-A Testsieger?",
    answer:
      "Die Stiftung Warentest hat die Vitocal 250-A 2024 und 2025 mit GUT (2,0) bewertet. Sie überzeugt durch hohe Effizienz (SCOP 5,1), niedrige Betriebskosten, leisen Betrieb (35 dB(A)) und hervorragende Verarbeitung. Das Preis-Leistungs-Verhältnis ist ausgezeichnet.",
  },
  {
    question: "Eignet sich Viessmann für Altbau?",
    answer:
      "Ja! Die Vitocal 300-A und 350-A Serie erreichen Vorlauftemperaturen bis 65-72°C und eignen sich daher auch für unsanierte Altbauten mit klassischen Heizkörpern. Keine aufwändige Sanierung oder Austausch der Heizkörper nötig.",
  },
  {
    question: "Wie laut sind Viessmann Wärmepumpen?",
    answer:
      "Die Vitocal 250-A erreicht im Normalbetrieb 35 dB(A) in 5m Abstand - das ist sehr leise. Im Flüstermodus sind es sogar nur 30 dB(A). Damit sind Viessmann Wärmepumpen deutlich leiser als viele Konkurrenzprodukte.",
  },
  {
    question: "Welche Garantie gibt Viessmann?",
    answer:
      "Viessmann bietet 2 Jahre Herstellergarantie standardmäßig. Bei Registrierung und jährlicher Wartung durch Fachpartner wie HeizCenter können Sie die Garantie auf bis zu 10 Jahre verlängern. Die Lebensdauer einer Vitocal liegt bei 20+ Jahren.",
  },
  {
    question: "Kann ich meine Vitocal mit Photovoltaik verbinden?",
    answer:
      "Ja! Alle Vitocal Modelle sind Smart Grid Ready und können mit PV-Anlagen gekoppelt werden. Die Wärmepumpe nutzt dann bevorzugt selbst erzeugten Solarstrom. Über die ViCare App können Sie alles überwachen und steuern.",
  },
];

export default function ViessmannPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "viessmann", url: "/partner/viessmann" },
        ]}
      />
      <ServiceHero
        title="Viessmann Wärmepumpen & Heizungen"
        description="Premium Qualität Made in Germany. Testsieger der Stiftung Warentest. Die Vitocal Serie überzeugt durch höchste Effizienz, Zuverlässigkeit und innovative Technologie."
        benefits={benefits}
        icon={Award}
        badge="Testsieger 2024"
        imageSrc="/images/Waermepumpe.jpeg"
        logoSrc="/images/partners/viessmann.svg"
      />

      <FeaturesSection
        title="Warum Viessmann? Premium-Qualität für Ihr Zuhause"
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Viessmann Produktlinien bei HeizCenter
          </h2>

          <div className="space-y-8">
            {/* Vitocal Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                Vitocal Wärmepumpen Serie
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 250-A - Der Testsieger
                </h4>
                <p className="text-slate-700 mb-3">
                  Stiftung Warentest Testsieger 2024 & 2025 mit Note GUT (2,0).
                  Die beliebteste Luft-Wasser-Wärmepumpe von Viessmann für
                  Einfamilienhäuser.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 4-20 kW (verschiedene Modellgrößen)</li>
                  <li>SCOP: bis 5,1 (A+++)</li>
                  <li>Vorlauftemperatur: bis 60°C</li>
                  <li>Kältemittel: R290 (natürliches Propan)</li>
                  <li>Schallleistung: 35 dB(A) in 5m Abstand</li>
                  <li>Monoblock-Bauweise für einfache Installation</li>
                  <li>Integrierte Kühlfunktion im Sommer</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 7.000€ (Gerät) | Komplett ab 18.000€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 150-A - Einsteigermodell
                </h4>
                <p className="text-slate-700 mb-3">
                  Preiswerte Alternative mit bewährter Viessmann-Qualität.
                  Perfekt für kleinere Einfamilienhäuser.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 4-8 kW</li>
                  <li>SCOP: bis 4,5 (A++)</li>
                  <li>Vorlauftemperatur: bis 55°C</li>
                  <li>Kompakt und leise</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 7.000€ (Gerät) | Komplett ab 16.000€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 300-A & 350-A - Hochtemperatur für Altbau
                </h4>
                <p className="text-slate-700 mb-3">
                  Speziell entwickelt für Altbauten und Bestandsgebäude mit
                  hohem Wärmebedarf. Erreicht hohe Vorlauftemperaturen ohne
                  Heizstab.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Vorlauftemperatur: bis 65-72°C</li>
                  <li>Auch bei -20°C Außentemperatur effizient</li>
                  <li>Ideal für unsanierte Altbauten</li>
                  <li>Keine Heizkörper-Anpassung nötig</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 9.000€ (Gerät) | Komplett ab 22.000€
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 222-G & 350-G - Erdwärmepumpen
                </h4>
                <p className="text-slate-700 mb-3">
                  Höchste Effizienz durch Nutzung der konstanten Erdwärme. Für
                  Neubau mit ausreichend Grundstücksfläche.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>SCOP: bis 5,4 (höchste Effizienz)</li>
                  <li>Sehr leise (kein Außengerät)</li>
                  <li>Erdsonden oder Flächenkollektoren</li>
                  <li>Vorlauftemperatur: bis 72°C (Modell 350-G)</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 11.000€ (Gerät) | Komplett ab 28.000-35.000€
                </p>
              </div>
            </div>

            {/* Vitodens Brennwertkessel */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                Vitodens Brennwertkessel für Gas
              </h3>
              <p className="text-slate-700 mb-4">
                Falls eine Wärmepumpe (noch) nicht in Frage kommt, sind
                Vitodens Brennwertkessel die effizienteste Lösung für
                Gasheizungen.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  Vitodens 200-W - Wandhängend
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Leistung: 11-35 kW</li>
                  <li>Normnutzungsgrad: bis 98%</li>
                  <li>Mit integriertem Speicher erhältlich</li>
                  <li>Ideal für Einfamilienhäuser</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Vitodens 300-W - Premium-Wandgerät
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Höchste Effizienz und Komfort</li>
                  <li>Leistungsmodulation 10-100%</li>
                  <li>Besonders leise</li>
                </ul>
              </div>

              <p className="font-semibold text-[#0F5B78] mt-4">
                Vitodens Preise: ab 3.500€ (Gerät) | Komplett ab 8.000€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HeizCenter for Viessmann */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Viessmann mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Als zertifizierter <strong>Viessmann Fachpartner</strong> bieten
                wir Ihnen die komplette Bandbreite der Premium-Heiztechnik aus
                Allendorf. Von der unabhängigen Beratung über die professionelle
                Installation bis hin zum langfristigen Service - bei uns sind
                Sie in den besten Händen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Fachpartner-Vorteile
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Zertifizierte Viessmann-Installation</li>
                    <li>✓ Garantieverlängerung möglich (bis 10 Jahre)</li>
                    <li>✓ Original-Ersatzteile und Werksschulung</li>
                    <li>✓ Schneller Service und Wartung vor Ort</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Unsere Leistungen
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Kostenlose Vor-Ort-Beratung</li>
                    <li>✓ Heizlastberechnung nach DIN EN 12831</li>
                    <li>✓ Fördermittel-Beratung (KfW BEG)</li>
                    <li>✓ Komplette Installation in 2-3 Tagen</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-slate-700">
                Über <strong>60 zufriedene Kunden</strong> in Augsburg, Ulm,
                Memmingen und Umgebung vertrauen auf unsere Viessmann-Expertise.
                Profitieren Sie von über 20 Jahren Erfahrung in der
                Heizungstechnik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Installation References */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Viessmann-Installationen in der Region
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Einfamilienhaus Bobingen (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Vitocal 250-A, 10 kW | Baujahr 1985 | Heizkörper
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Austausch Ölheizung gegen Wärmepumpe</li>
                <li>• Warmwasserspeicher 300L integriert</li>
                <li>• Förderung: bis 70% KfW BEG möglich</li>
                <li>• Jährliche Einsparung: ~1.800€</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Neubau Gutenzell-Hürbel (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Vitocal 222-G, 8 kW Erdwärme | Fußbodenheizung
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 4 Erdsonden à 100m Tiefe</li>
                <li>• SCOP 5,2 (A+++)</li>
                <li>• PV-Anlage gekoppelt</li>
                <li>• Heizkosten: ~400€/Jahr</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Mehrfamilienhaus Augsburg (2023)
              </h3>
              <p className="text-slate-700 mb-3">
                Vitocal 350-A, 20 kW | 6 Wohneinheiten
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Austausch Gasheizung</li>
                <li>• 65°C Vorlauftemperatur</li>
                <li>• Kaskadenschaltung mit Pufferspeicher</li>
                <li>• Kollektive Heizkostenreduktion: 45%</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Altbau-Sanierung Ulm (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Vitocal 300-A, 12 kW | Baujahr 1960
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Hochtemperatur-Wärmepumpe</li>
                <li>• Keine Heizkörper-Anpassung nötig</li>
                <li>• Kombination mit Solarthermie</li>
                <li>• JAZ: 3,8 trotz Altbau</li>
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
            name: "Viessmann Vitocal Wärmepumpe",
            brand: {
              "@type": "Brand",
              name: "Viessmann",
            },
            description:
              "Premium Wärmepumpen und Heizungssysteme von Viessmann. Testsieger Stiftung Warentest. Installation durch HeizCenter.",
            category: "Wärmepumpe",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "16000",
              highPrice: "35000",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "LocalBusiness",
                name: "HeizCenter GmbH",
                telephone: "+49 8234 9665900",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "60",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Viessmann Werke GmbH & Co. KG",
              url: "https://www.viessmann.de",
            },
          }),
        }}
      />
    </>
  );
}
