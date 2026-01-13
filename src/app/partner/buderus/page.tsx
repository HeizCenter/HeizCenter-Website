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
  Volume2,
  CheckCircle2,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Buderus Wärmepumpen & Heizungen | HeizCenter Partner",
  description:
    "Buderus Logatherm Wärmepumpen Testsieger 2024. Unerhört leise, höchste Effizienz. Premium Heizungssysteme Made in Germany. Installation in Augsburg & Ulm.",
  alternates: {
    canonical: getCanonicalUrl("/partner/buderus"),
  },
  keywords: [
    "Buderus",
    "Logatherm",
    "Logamax",
    "Wärmepumpe",
    "Heizung",
    "Testsieger",
    "Augsburg",
    "Ulm",
  ],
};

export const dynamic = "force-dynamic";

const benefits = [
  "Testsieger Stiftung Warentest 2024",
  "Unerhört leise - ab 32 dB(A) in 3m",
  "Logatherm WLW186i mit höchster Energieeffizienz",
  "Bis zu 75°C Vorlauftemperatur",
  "Bosch-Qualität seit über 290 Jahren",
  "5 Jahre Garantie auf Wärmepumpen",
];

const features = [
  {
    title: "Testsieger 2024",
    description:
      "Logatherm WLW186i-10 AR E ist Testsieger 2024 bei Stiftung Warentest in der Kategorie Luft-Wasser-Wärmepumpe.",
    icon: Award,
  },
  {
    title: "Unerhört leise",
    description:
      "Innovative Schalldämmung macht Buderus zu einer der leisesten Wärmepumpen. Ab 32 dB(A) in 3m Abstand - flüsterleise.",
    icon: Volume2,
  },
  {
    title: "Bis 75°C Vorlauftemperatur",
    description:
      "Logatherm WLW186i erreicht bis 75°C für perfekte Altbau-Eignung. Auch bei -10°C Außentemperatur noch 65°C.",
    icon: Thermometer,
  },
  {
    title: "Höchste Energieeffizienz",
    description:
      "SCOP-Werte bis 5,2. Bis zu 75% Energieeinsparung gegenüber Öl- und Gasheizungen.",
    icon: Zap,
  },
  {
    title: "Natürliches Kältemittel",
    description:
      "R290 (Propan) mit GWP von nur 3. Umweltfreundlich und zukunftssicher ohne F-Gase.",
    icon: Shield,
  },
  {
    title: "Bosch-Qualität",
    description:
      "Seit 1731 steht Buderus für deutsche Ingenieurskunst. Teil der Bosch Thermotechnik Gruppe.",
    icon: CheckCircle2,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Buderus Wärmepumpen installiert HeizCenter?",
    answer:
      "Wir installieren die gesamte Logatherm Serie: WLW176i AR (Einstieg), WLW186i AR (Testsieger Premium), WLW196i (Split und Monoblock) sowie WSW196i (Erdwärme). Je nach Gebäudegröße, Budget und Anforderungen finden wir das optimale Modell.",
  },
  {
    question: "Was kostet eine Buderus Logatherm Wärmepumpe?",
    answer:
      "Eine Logatherm WLW176i kostet ab 8.500€ (nur Gerät), die Testsieger WLW186i ab 9.500€. Mit Installation, Zubehör, Pufferspeicher und Inbetriebnahme rechnen Sie mit 20.000-32.000€ für ein Einfamilienhaus. Erdwärmepumpen (WSW196i) starten bei ca. 30.000€ komplett.",
  },
  {
    question: "Warum ist die Logatherm WLW186i Testsieger?",
    answer:
      "Die Stiftung Warentest hat die WLW186i-10 AR E 2024 zum Testsieger gekürt. Sie überzeugt durch hohe Effizienz (SCOP 5,2), extrem leisen Betrieb (32 dB(A)), robuste Verarbeitung und das natürliche Kältemittel R290. Das Preis-Leistungs-Verhältnis ist hervorragend.",
  },
  {
    question: "Wie leise ist eine Buderus Logatherm wirklich?",
    answer:
      "Die WLW186i AR erreicht nur 32 dB(A) in 3m Abstand - das ist extrem leise, vergleichbar mit einem Flüstern. Buderus hat besonders in die Schalldämmung investiert. Die Wärmepumpen sind damit nachbarschaftstauglich und können auch in dicht besiedelten Gebieten installiert werden.",
  },
  {
    question: "Eignet sich Buderus für Altbau?",
    answer:
      "Ja! Die Logatherm WLW186i und 196i erreichen bis 75°C Vorlauftemperatur und eignen sich daher auch für unsanierte Altbauten mit klassischen Heizkörpern. Selbst bei -10°C Außentemperatur sind noch 65°C möglich.",
  },
  {
    question: "Was ist der Unterschied zwischen WLW176i und WLW186i?",
    answer:
      "Die WLW176i ist das Einstiegsmodell mit sehr gutem Preis-Leistungs-Verhältnis (SCOP bis 4,8, bis 60°C). Die WLW186i ist das Premium-Modell und Testsieger mit höherer Effizienz (SCOP 5,2), höherer Vorlauftemperatur (75°C) und noch leiserem Betrieb. Für Neubau reicht oft die 176i, für Altbau empfehlen wir die 186i.",
  },
  {
    question: "Kann ich Buderus mit Smart Home verbinden?",
    answer:
      "Ja! Alle Logatherm Modelle sind Smart Grid Ready und können über die Buderus MyDevice App gesteuert werden. Integration mit PV-Anlagen, Smart Home Systemen und dynamischen Stromtarifen ist möglich für optimale Effizienz.",
  },
];

export default function BuderusPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "uuderus", url: "/partner/buderus" },
        ]}
      />
      <ServiceHero
        title="Buderus Wärmepumpen & Heizungen"
        description="Testsieger 2024. Unerhört leise. Die Logatherm Serie vereint Bosch-Qualität mit innovativer Schalldämmung und höchster Effizienz. Deutsche Ingenieurskunst seit 1731."
        benefits={benefits}
        icon={Award}
        badge="Testsieger 2024"
        imageSrc="/images/Waermepumpe.jpeg"
        logoSrc="/images/partners/buderus.svg"
      />

      <FeaturesSection
        title="Warum Buderus? Unerhört gut. Unerhört leise."
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Buderus Produktlinien bei HeizCenter
          </h2>

          <div className="space-y-8">
            {/* Logatherm Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                Logatherm Wärmepumpen Serie
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WLW186i AR - Testsieger 2024
                </h4>
                <p className="text-slate-700 mb-3">
                  Stiftung Warentest Testsieger 2024 in der Kategorie
                  Luft-Wasser-Wärmepumpe. Das Premium-Modell von Buderus für
                  höchste Ansprüche.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 7-16 kW (verschiedene Modellgrößen)</li>
                  <li>SCOP: bis 5,2 (A+++)</li>
                  <li>Vorlauftemperatur: bis 75°C</li>
                  <li>Kältemittel: R290 (natürliches Propan)</li>
                  <li>Schallleistung: 32 dB(A) in 3m Abstand</li>
                  <li>Monoblock-Bauweise Außenaufstellung</li>
                  <li>Aktive Kühlfunktion integriert</li>
                  <li>MyDevice App-Steuerung</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 9.500€ (Gerät) | Komplett ab 22.000€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WLW176i AR - Preis-Leistungs-Sieger
                </h4>
                <p className="text-slate-700 mb-3">
                  Bewährte Qualität zum attraktiven Preis. Ideal für Neubau und
                  gut gedämmte Bestandsgebäude.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 7-10 kW</li>
                  <li>SCOP: bis 4,8 (A++)</li>
                  <li>Vorlauftemperatur: bis 60°C</li>
                  <li>Kältemittel: R290</li>
                  <li>Kompakte Bauweise</li>
                  <li>Leise (35 dB(A) in 3m)</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 8.500€ (Gerät) | Komplett ab 20.000€
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WLW196i - Split & Monoblock
                </h4>
                <p className="text-slate-700 mb-3">
                  Verfügbar als Split-System oder Monoblock. Höhere Leistungen
                  für größere Einfamilienhäuser und Gewerbe.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 10-20 kW</li>
                  <li>Split-Variante besonders flexibel</li>
                  <li>Vorlauftemperatur: bis 70°C</li>
                  <li>Ideal für größere Objekte</li>
                  <li>Modulierende Leistungsanpassung</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 10.500€ (Gerät) | Komplett ab 24.000€
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WSW196i - Erdwärmepumpe
                </h4>
                <p className="text-slate-700 mb-3">
                  Sole-Wasser-Wärmepumpe für höchste Effizienz durch Nutzung der
                  konstanten Erdwärme. Für Neubau mit ausreichend Grundstücksfläche.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>SCOP: bis 5,5 (höchste Effizienz)</li>
                  <li>Sehr leise (nur Innengerät)</li>
                  <li>Erdsonden oder Erdkollektoren</li>
                  <li>Vorlauftemperatur: bis 65°C</li>
                  <li>Langlebig und wartungsarm</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">
                  Preis ab: 11.500€ (Gerät) | Komplett ab 30.000-40.000€
                </p>
              </div>
            </div>

            {/* Logamax Brennwertkessel */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                Logamax Brennwertkessel für Gas
              </h3>
              <p className="text-slate-700 mb-4">
                Falls eine Wärmepumpe nicht umsetzbar ist, bieten Logamax
                Brennwertkessel höchste Effizienz bei Gasheizungen.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  Logamax plus GB172 - Wandhängend
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Leistung: 14-20 kW</li>
                  <li>Normnutzungsgrad: bis 98%</li>
                  <li>Kompakte Abmessungen</li>
                  <li>Ideal für Einfamilienhäuser</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  Logamax plus GB192i - Premium mit Touchscreen
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Leistung: 15-28 kW</li>
                  <li>Intuitive Bedienung via Display</li>
                  <li>Modulierende Brennertechnologie</li>
                  <li>App-Steuerung möglich</li>
                </ul>
              </div>

              <p className="font-semibold text-[#0F5B78] mt-4">
                Logamax Preise: ab 3.400€ (Gerät) | Komplett ab 7.800€
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HeizCenter for Buderus */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Buderus mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Als autorisierter <strong>Buderus Fachpartner</strong> verbinden
                wir die Traditionsmarke mit über 290 Jahren Erfahrung mit unserem
                modernen Service. Von der Planung über die Installation bis zur
                langfristigen Wartung Ihrer Buderus-Heizung sind wir Ihr Partner
                in Augsburg, Ulm und Umgebung.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Fachpartner-Vorteile
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Zertifizierte Buderus-Installation</li>
                    <li>✓ 5 Jahre Garantie, erweiterbar</li>
                    <li>✓ Original-Ersatzteile vom Hersteller</li>
                    <li>✓ Regelmäßige Produktschulungen</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Unsere Leistungen
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Kostenlose Vor-Ort-Beratung</li>
                    <li>✓ Heizlastberechnung DIN EN 12831</li>
                    <li>✓ Unterstützung bei Förderanträgen</li>
                    <li>✓ Installation in 2-3 Werktagen</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-slate-700">
                Profitieren Sie von <strong>über 20 Jahren Erfahrung</strong> mit
                Buderus-Systemen. Mehr als 60 zufriedene Kunden in der Region
                vertrauen auf unsere Expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Installation References */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Buderus-Installationen in der Region
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Einfamilienhaus Bobingen (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Logatherm WLW186i-10 AR E, 10 kW | Baujahr 1988
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Austausch Ölheizung gegen Wärmepumpe</li>
                <li>• Testsieger-Modell extrem leise</li>
                <li>• Förderung: bis 70% KfW BEG möglich</li>
                <li>• Jährliche Einsparung: ~2.200€</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Neubau Ulm (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Logatherm WSW196i, 9 kW Erdwärme | KfW40
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 4 Erdsonden à 100m</li>
                <li>• SCOP 5,5 (höchste Effizienz)</li>
                <li>• Fußbodenheizung 32°C</li>
                <li>• Heizkosten: ~380€/Jahr</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Doppelhaushälfte Augsburg (2024)
              </h3>
              <p className="text-slate-700 mb-3">
                Logatherm WLW176i-7 AR, 7 kW | Neubau
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• KfW55-Effizienzhaus</li>
                <li>• Fußbodenheizung</li>
                <li>• SCOP 4,8 (A++)</li>
                <li>• Sehr leise - Nachbarn zufrieden</li>
              </ul>
            </div>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Altbau-Sanierung Memmingen (2023)
              </h3>
              <p className="text-slate-700 mb-3">
                Logatherm WLW186i-12 AR E, 12 kW | Baujahr 1965
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 75°C für alte Heizkörper</li>
                <li>• Keine Heizkörper-Anpassung</li>
                <li>• Kombination mit Solarthermie</li>
                <li>• JAZ: 3,7 trotz Altbau</li>
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
            name: "Buderus Logatherm Wärmepumpe",
            brand: {
              "@type": "Brand",
              name: "Buderus",
            },
            description:
              "Premium Wärmepumpen und Heizungssysteme von Buderus. Testsieger Stiftung Warentest 2024. Installation durch HeizCenter.",
            category: "Wärmepumpe",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "20000",
              highPrice: "40000",
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
              name: "Buderus (Bosch Thermotechnik)",
              url: "https://www.buderus.de",
            },
          }),
        }}
      />
    </>
  );
}
