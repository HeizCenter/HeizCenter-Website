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
  Snowflake,
  CheckCircle2,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vaillant Wärmepumpen & Heizungen | HeizCenter Partner",
  description:
    "Premium Vaillant Wärmepumpen aroTHERM Serie. Effiziente Heizungssysteme ecoTEC. Marktführer mit über 150 Jahren Erfahrung. Installation in Augsburg & Ulm.",
  alternates: {
    canonical: getCanonicalUrl("/partner/vaillant"),
  },
  keywords: [
    "Vaillant",
    "aroTHERM",
    "ecoTEC",
    "Wärmepumpe",
    "Heizung",
    "Augsburg",
    "Ulm",
  ],
};

export const dynamic = "force-dynamic";

const benefits = [
  "Marktführer mit über 150 Jahren Erfahrung",
  "aroTHERM plus mit höchster Effizienz (SCOP bis 5,4)",
  "Bis zu 75°C Vorlauftemperatur",
  "Extrem leise ab 19 dB(A) Innengerät",
  "Green iQ Label - Nachhaltig & Effizient",
  "5 Jahre Garantie auf Wärmepumpen",
];

const features = [
  {
    title: "Marktführer-Qualität",
    description:
      "Vaillant ist seit 1874 Synonym für höchste Qualität in der Heiztechnik. Made in Germany mit weltweitem Service-Netzwerk.",
    icon: Award,
  },
  {
    title: "Bis 75°C Vorlauftemperatur",
    description:
      "aroTHERM plus erreicht bis 75°C für perfekte Altbau-Eignung. Auch bei -20°C Außentemperatur noch 65°C möglich.",
    icon: Thermometer,
  },
  {
    title: "Höchste Energieeffizienz",
    description:
      "SCOP-Werte bis 5,4 bei aroTHERM pro. Bis zu 75% Energieeinsparung und niedrigste Betriebskosten.",
    icon: Zap,
  },
  {
    title: "Green iQ Technology",
    description:
      "Umweltfreundliche Kältemittel R32 und R290. Intelligent, effizient und zukunftssicher.",
    icon: Shield,
  },
  {
    title: "Active Cooling",
    description:
      "Integrierte Kühlfunktion für angenehme Raumtemperaturen im Sommer. Heizen und Kühlen mit einem System.",
    icon: Snowflake,
  },
  {
    title: "5 Jahre Garantie",
    description:
      "Vaillant bietet 5 Jahre Garantie auf Wärmepumpen. Optional erweiterbar auf bis zu 10 Jahre.",
    icon: CheckCircle2,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Vaillant Wärmepumpen bietet HeizCenter an?",
    answer:
      "Wir installieren die gesamte aroTHERM Serie: aroTHERM plus (Monoblock, Außenaufstellung), aroTHERM Split plus (geteiltes System), und aroTHERM pro (Premium-Modell). Für Erdwärme bieten wir die flexoTHERM exclusive an. Je nach Anforderung finden wir das passende Modell.",
  },
  {
    question: "Was kostet eine Vaillant aroTHERM Wärmepumpe?",
    answer:
      "Eine aroTHERM plus Luft-Wasser-Wärmepumpe kostet ab 8.000€ (nur Gerät). Mit Installation, Pufferspeicher, Warmwasserbereitung und Inbetriebnahme rechnen Sie mit 19.000-30.000€ für ein Einfamilienhaus. Die aroTHERM Split plus ist etwas teurer, bietet aber mehr Flexibilität bei der Installation.",
  },
  {
    question: "Was ist der Unterschied zwischen aroTHERM plus und Split plus?",
    answer:
      "aroTHERM plus ist ein Monoblock-System mit Außenaufstellung - alle Komponenten sind im Außengerät. aroTHERM Split plus ist ein geteiltes System: Außeneinheit + separate Inneneinheit. Split-Systeme sind flexibler in der Installation und oft etwas leiser im Innenbereich.",
  },
  {
    question: "Eignet sich Vaillant für Altbau und hohe Heizkörper?",
    answer:
      "Ja! Die aroTHERM plus erreicht bis 75°C Vorlauftemperatur und ist speziell für Altbauten mit klassischen Heizkörpern konzipiert. Selbst bei -20°C Außentemperatur sind noch 65°C möglich - perfekt für unsanierte Gebäude.",
  },
  {
    question: "Wie laut ist eine Vaillant aroTHERM Wärmepumpe?",
    answer:
      "Die Außeneinheit erreicht 46-55 dB(A) je nach Modell und Leistung. Das Innengerät der aroTHERM Split plus ist extrem leise mit nur 19 dB(A) im Flüstermodus - kaum hörbar. Damit gehört Vaillant zu den leisesten Wärmepumpen am Markt.",
  },
  {
    question: "Was ist Green iQ Technology?",
    answer:
      "Green iQ ist Vaillants Nachhaltigkeits-Label. Produkte mit diesem Label nutzen umweltfreundliche Kältemittel (R32, R290), erreichen höchste Energieeffizienz (A+++) und sind für die Integration mit erneuerbaren Energien (PV, Solar) optimiert.",
  },
  {
    question: "Kann ich aroTHERM mit Photovoltaik kombinieren?",
    answer:
      "Ja! Alle aroTHERM Modelle sind Smart Grid Ready und können optimal mit PV-Anlagen kombiniert werden. Die sensoNET App ermöglicht intelligente Steuerung, um bevorzugt selbst erzeugten Solarstrom zu nutzen.",
  },
];

export default function VaillantPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "vaillant", url: "/partner/vaillant" },
        ]}
      />
      <ServiceHero
        title="Vaillant Wärmepumpen & Heizungen"
        description="Marktführer mit über 150 Jahren Erfahrung. Die aroTHERM Serie kombiniert höchste Effizienz mit leisem Betrieb und Langlebigkeit. Green iQ für nachhaltiges Heizen."
        benefits={benefits}
        icon={Award}
        badge="Marktführer"
        imageSrc="/images/Waermepumpe.jpeg"
        logoSrc="/images/partners/vaillant.svg"
      />

      <FeaturesSection
        title="Warum Vaillant? Qualität seit 1874"
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Vaillant Produktlinien bei HeizCenter
          </h2>

          <div className="space-y-8">
            {/* aroTHERM Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                aroTHERM Wärmepumpen Serie
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  aroTHERM plus - Monoblock Außenaufstellung
                </h4>
                <p className="text-slate-700 mb-3">
                  Die beliebteste Luft-Wasser-Wärmepumpe von Vaillant. Kompakte
                  Monoblock-Bauweise mit allen Komponenten im Außengerät. Ideal
                  für Einfamilienhäuser.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Modelle: VWL 65/6 bis VWL 125/6 (6-12 kW)</li>
                  <li>SCOP: bis 5,3 (A+++)</li>
                  <li>Vorlauftemperatur: bis 75°C</li>
                  <li>Kältemittel: R290 (natürliches Propan)</li>
                  <li>Schallleistung: 52 dB(A) typisch</li>
                  <li>Active Cooling serienmäßig</li>
                  <li>Green iQ Label</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 8.000€ (Gerät) | Komplett ab 19.000€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  aroTHERM Split plus - Geteiltes System
                </h4>
                <p className="text-slate-700 mb-3">
                  Premium Split-System mit separater Innen- und Außeneinheit.
                  Noch flexibler in der Installation, besonders leise im
                  Innenbereich.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Modelle: VWL 35/8.2 AS bis VWL 75/8.2 AS (3-7 kW)</li>
                  <li>Innengerät nur 19 dB(A) (Flüstermodus)</li>
                  <li>Vorlauftemperatur: bis 62°C</li>
                  <li>Kältemittel: R32</li>
                  <li>Kompakte Inneneinheit</li>
                  <li>Erhältlich ab November 2024</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 9.500€ (Gerät) | Komplett ab 21.000€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  aroTHERM pro - Premium-Serie
                </h4>
                <p className="text-slate-700 mb-3">
                  Höchste Effizienz und Leistung für anspruchsvolle
                  Einfamilienhäuser und kleinere Gewerbeobjekte.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 5-11 kW</li>
                  <li>SCOP: bis 5,4 (höchste Effizienz)</li>
                  <li>Vorlauftemperatur: bis 75°C</li>
                  <li>Optimiert für Niedertemperatur-Anwendungen</li>
                  <li>Höchste Energieeffizienz</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 10.000€ (Gerät) | Komplett ab 23.000€
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  flexoTHERM exclusive - Erdwärmepumpe
                </h4>
                <p className="text-slate-700 mb-3">
                  Sole-Wasser-Wärmepumpe für höchste Effizienz durch Nutzung der
                  Erdwärme. Für Neubau mit ausreichend Grundstücksfläche.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>SCOP: bis 5,5 (höchste Effizienz)</li>
                  <li>Sehr leise (nur Innengerät)</li>
                  <li>Erdsonden oder Flächenkollektoren</li>
                  <li>Modulierender Betrieb für höchsten Komfort</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 12.000€ (Gerät) | Komplett ab 30.000-38.000€
                </p>
              </div>
            </div>

            {/* ecoTEC Brennwertkessel */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                ecoTEC Brennwertkessel für Gas
              </h3>
              <p className="text-slate-700 mb-4">
                Wenn eine Wärmepumpe nicht umsetzbar ist, sind ecoTEC
                Brennwertkessel die effizienteste Gas-Heizlösung.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  ecoTEC plus - Kompakt-Wandgerät
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Leistung: 12-30 kW</li>
                  <li>Normnutzungsgrad: bis 98%</li>
                  <li>Kompakte Abmessungen</li>
                  <li>Ideal für Einfamilienhäuser</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  ecoTEC exclusive - Premium mit Green iQ
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Höchste Effizienz und Komfort</li>
                  <li>Green iQ Technology</li>
                  <li>Modulierende Leistungsanpassung</li>
                  <li>Integrierte Warmwasserbereitung möglich</li>
                </ul>
              </div>

              <p className="font-semibold text-[#0F5B78] mt-4">
                ecoTEC Preise: ab 3.200€ (Gerät) | Komplett ab 7.500€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HeizCenter for Vaillant */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Vaillant mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Als autorisierter <strong>Vaillant Fachpartner</strong> verbinden
                wir die Premium-Qualität des Marktführers mit unserem lokalen
                Service. Von der Planung bis zur langfristigen Betreuung Ihrer
                Vaillant-Heizung sind wir Ihr Ansprechpartner in der Region
                Augsburg, Ulm und Memmingen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Fachpartner-Vorteile
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Zertifizierte Vaillant-Installation</li>
                    <li>✓ 5 Jahre Garantie standard, erweiterbar</li>
                    <li>✓ Original-Ersatzteile ab Lager</li>
                    <li>✓ Schulung an neuesten Modellen</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Unsere Leistungen
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Kostenlose Erstberatung vor Ort</li>
                    <li>✓ Heizlastberechnung DIN EN 12831</li>
                    <li>✓ Förderantrag KfW BEG Unterstützung</li>
                    <li>✓ Installation in 2-3 Tagen</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-slate-700">
                Vertrauen Sie auf <strong>20+ Jahre Erfahrung</strong> mit
                Vaillant-Produkten. Über 60 zufriedene Kunden haben bereits ihre
                Heizung mit uns modernisiert. Profitieren Sie von unserem
                Know-how.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Installation References */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Vaillant-Installationen in der Region
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Einfamilienhaus Augsburg (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                aroTHERM plus VWL 95/6, 9 kW | Baujahr 1992
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Austausch Gasheizung gegen Wärmepumpe</li>
                <li>• 300L Warmwasserspeicher uniSTOR</li>
                <li>• Förderung: bis 70% KfW BEG möglich</li>
                <li>• JAZ: 4,2 | Einsparung: ~2.100€/Jahr</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Neubau Ulm (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                aroTHERM pro, 7 kW | KfW40-Standard
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fußbodenheizung 35°C Vorlauf</li>
                <li>• SCOP 5,4 (höchste Effizienz)</li>
                <li>• PV-Anlage 10 kWp gekoppelt</li>
                <li>• Heizkosten: ~350€/Jahr</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Doppelhaushälfte Bobingen (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                aroTHERM Split plus VWL 55/8.2 AS
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Leise Inneneinheit nur 19 dB(A)</li>
                <li>• Altbau mit Heizkörpern</li>
                <li>• 62°C Vorlauftemperatur</li>
                <li>• Nachbarn berichten: "kaum hörbar"</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Reihenmittelhaus Memmingen (2023)
              </h3>
              <p className="text-slate-700 mb-3">
                aroTHERM plus VWL 75/6, 7 kW
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Wenig Platz im Garten</li>
                <li>• Kompakte Aufstellung</li>
                <li>• Active Cooling genutzt im Sommer</li>
                <li>• JAZ: 4,0 trotz Altbau</li>
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
            name: "Vaillant aroTHERM Wärmepumpe",
            brand: {
              "@type": "Brand",
              name: "Vaillant",
            },
            description:
              "Premium Wärmepumpen und Heizungssysteme von Vaillant. aroTHERM Serie mit Green iQ Technology. Installation durch HeizCenter.",
            category: "Wärmepumpe",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "19000",
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
              ratingValue: "4.8",
              reviewCount: "60",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Vaillant GmbH",
              url: "https://www.vaillant.de",
            },
          }),
        }}
      />
    </>
  );
}
