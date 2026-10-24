import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import { Award, Zap, Leaf, Thermometer, Volume2, Settings } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 6 (Stand 24.10.2026).

export const metadata: Metadata = {
  title: "Bosch Wärmepumpen: Compress 3800i bis 8800i AW | HeizCenter",
  description:
    "Bosch Compress Luft-Wasser-Wärmepumpen mit natürlichem Kältemittel R290 – vom Einstiegsmodell 3800i AW bis zur 8800i AW mit bis zu 75 °C Vorlauf. Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter in der Region Augsburg, Ulm und Memmingen.",
  keywords: ["Bosch", "Compress", "Compress 5800i AW", "Compress 8800i AW", "Wärmepumpe", "R290", "Augsburg", "Ulm"],
  alternates: {
    canonical: getCanonicalUrl("/partner/bosch"),
  },
};

const benefits = [
  "Bosch Home Comfort – Teil der Bosch-Gruppe",
  "Compress 3800i, 5800i, 6800i und 8800i AW mit natürlichem Kältemittel R290",
  "Bis 75 °C Vorlauf mit der Compress 6800i und 8800i AW",
  "Compress 5800i AW: laut Bosch die leiseste Wärmepumpe von Bosch",
  "Bosch-Systemgarantie 5 Jahre, mit HomeCom Pro bis 7 Jahre (Bedingungen laut Bosch)",
  "Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter",
];

const features = [
  {
    title: "Teil der Bosch-Gruppe",
    description:
      "Die Compress-Wärmepumpen kommen von Bosch Home Comfort, einem Teil der Bosch-Gruppe. Bosch wurde 1886 gegründet.",
    icon: Award,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Das aktuelle Compress-Programm – 3800i, 5800i, 6800i und 8800i AW – arbeitet mit Propan (R290). Sein Treibhauspotenzial liegt nahe null.",
    icon: Leaf,
  },
  {
    title: "Effizienzklasse A+++",
    description:
      "Die Compress 3800i AW erreicht laut Bosch die Effizienzklasse A+++ und einen SCOP von bis zu 5,14 bei 35 °C Vorlauf.",
    icon: Zap,
  },
  {
    title: "Bis 75 °C Vorlauf",
    description:
      "Compress 6800i AW und 8800i AW liefern bis 75 °C Vorlauf (bei −10 °C außen 65 bzw. 70 °C) – für Altbauten mit Heizkörpern. Ob Ihre Heizkörper reichen, zeigt die Heizlastberechnung.",
    icon: Thermometer,
  },
  {
    title: "Leiser Betrieb",
    description:
      "Die Compress 5800i AW ist laut Bosch die leiseste Wärmepumpe von Bosch: 28,5 dB(A) Schalldruck in 3 m Abstand im Nachtbetrieb.",
    icon: Volume2,
  },
  {
    title: "Bedienung am Display oder per App",
    description:
      "Bedient wird die Anlage am Farbdisplay UI 800 der Inneneinheit oder per HomeCom-Easy-App.",
    icon: Settings,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Bosch-Wärmepumpen gibt es aktuell?",
    answer:
      "Das aktuelle Compress-Programm umfasst die Luft-Wasser-Wärmepumpen 3800i AW (Einstieg), 5800i AW (laut Bosch die leiseste Bosch-Wärmepumpe), 6800i AW (für die Sanierung, bis 75 °C) und 8800i AW (für Altbau und größere Häuser, bis 75 °C) – alle mit R290. Welches Gerät und welche Größe zu Ihrem Haus passen, ermitteln wir mit der Heizlastberechnung.",
  },
  {
    question: "Was kostet eine Bosch Compress Wärmepumpe?",
    answer:
      "Das hängt vor allem von Ihrem Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung, Warmwasser und Elektroanschluss. Typische Kostenpositionen erklärt unser Ratgeber „Wärmepumpe Kosten 2026“ im Blog. Ihren Preis nennen wir im Angebot, auf Grundlage der Heizlastberechnung. Welcher Zuschuss möglich ist, steht auf unserer Förderseite.",
  },
  {
    question: "Eignet sich Bosch für einen Altbau mit Heizkörpern?",
    answer:
      "Für Altbauten mit Heizkörpern kommen vor allem die Compress 6800i AW und 8800i AW in Frage: Sie liefern laut Bosch bis 75 °C Vorlauf, bei −10 °C außen noch 65 bzw. 70 °C. Ob Ihre vorhandenen Heizkörper reichen, zeigt die Heizlastberechnung.",
  },
  {
    question: "Wie effizient sind Bosch-Wärmepumpen?",
    answer:
      "Die Compress 3800i AW erreicht laut Bosch einen SCOP von bis zu 5,14 bei 35 °C Vorlauf und die Effizienzklasse A+++. Wie effizient Ihre Anlage im Alltag arbeitet, hängt vor allem von der Vorlauftemperatur Ihres Hauses ab – je niedriger, desto besser.",
  },
  {
    question: "Wie wird eine Bosch Compress bedient?",
    answer:
      "Am Farbdisplay UI 800 der Inneneinheit oder per HomeCom-Easy-App auf dem Smartphone.",
  },
  {
    question: "Kann ich Bosch mit Photovoltaik kombinieren?",
    answer:
      "Ja, eine Kopplung mit Photovoltaik ist möglich. Ob Ihr Modell das SG-Ready-Label trägt, steht in der SG-Ready-Datenbank des Bundesverbands Wärmepumpe – das klären wir in der Beratung.",
  },
  {
    question: "Welche Garantie gibt Bosch?",
    answer:
      "Bosch bietet für Bosch-Systeme eine 5-Jahres-Systemgarantie, mit HomeCom Pro bis zu 7 Jahre (5+2). Die Bedingungen nennt Bosch auf bosch-homecomfort.com. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
  },
];

export default function BoschPage() {
  return (
    <>
      <ServiceHero
        title="Bosch Wärmepumpen"
        description="Bosch Compress Luft-Wasser-Wärmepumpen mit natürlichem Kältemittel R290 – vom Einstiegsmodell 3800i AW über die leise 5800i AW bis zur 8800i AW für Altbauten mit hohen Vorlauftemperaturen. Wir beraten Sie, planen die Anlage mit Heizlastberechnung und bauen sie ein."
        benefits={benefits}
        icon={Award}
        badge="Bosch-Gruppe"
        imageSrc="/images/partners/bosch/hero.webp"
        imageAlt="Bosch Compress 5800i AW Wärmepumpe im Garten"
        imageCredit="Bosch Thermotechnik GmbH"
        logoSrc="/images/partners/bosch.svg"
      />
      <FeaturesSection title="Warum Bosch? Innovation seit 1886." features={features} />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Aktuelle Bosch-Wärmepumpen</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">Compress Luft-Wasser-Wärmepumpen</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Compress 3800i AW – der Einstieg</h4>
                <p className="text-slate-700 mb-3">Laut Bosch der Einstieg in das Bosch-Wärmepumpenprogramm.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 4 bis 13 kW</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>SCOP bis 5,14 bei 35 °C, Effizienzklasse A+++</li>
                  <li>Kühlung serienmäßig</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Compress 5800i AW – die Leise für den Neubau</h4>
                <p className="text-slate-700 mb-3">Laut Bosch die leiseste Wärmepumpe von Bosch.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 3,9 bis 11,6 kW</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Schalldruck 28,5 dB(A) in 3 m Abstand im Nachtbetrieb</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Compress 6800i AW – für die Sanierung</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 3,9 bis 11,6 kW</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Vorlauftemperatur: bis 75 °C, bei −10 °C außen 65 °C</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Compress 8800i AW – für Altbau und größere Häuser</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 11 bis 15 kW, in Kaskade bis 45 kW</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Vorlauftemperatur: bis 75 °C, bei −10 °C außen 70 °C</li>
                </ul>
              </div>
            </div>

            {/* Kosten und Förderung */}
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Kosten und Förderung</h3>
              <p className="text-slate-700 mb-3">
                Was eine Wärmepumpe bei Ihnen kostet, hängt vor allem vom Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung und Warmwasser. Einen Überblick über typische Kostenpositionen gibt unser{" "}
                <Link href="/blog/waermepumpe-kosten-2026" className="text-[#0F5B78] font-medium hover:underline">
                  Ratgeber „Wärmepumpe Kosten 2026“
                </Link>
                . Ihren Preis nennen wir im Angebot – auf Grundlage der Heizlastberechnung.
              </p>
              <p className="text-slate-700">
                Für den Einbau in ein bestehendes Wohngebäude gibt es bis zu {FOERDER_TEXT.maxStandard} der förderfähigen Kosten als Zuschuss; {FOERDER_TEXT.maxBedingung}. Wie sich das zusammensetzt, steht auf unserer{" "}
                <Link href="/foerderung" className="text-[#0F5B78] font-medium hover:underline">
                  Förderseite
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HeizCenter for Bosch */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Warum Bosch mit HeizCenter?</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Wir beraten Sie zu Bosch-Wärmepumpen, planen die Anlage mit Heizlastberechnung und bauen sie ein. Weil wir Wärmepumpen mehrerer Hersteller einbauen, richtet sich unsere Empfehlung nach Ihrem Haus – nicht nach einem Katalog.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Vor dem Einbau</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Beratung vor Ort</li>
                    <li>✓ Heizlastberechnung für Modell und Größe</li>
                    <li>✓ Planung des Aufstellorts</li>
                    <li>✓ Förderberatung (KfW-Heizungsförderung)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Nach dem Einbau</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Wartung, auf Wunsch mit Wartungsvertrag</li>
                    <li>✓ 24/7-Notdienst für Wartungskunden</li>
                    <li>✓ Ansprechpartner in der Region</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-slate-700">
                Den Zuschuss der KfW beantragen Sie als Eigentümer selbst im Portal „Meine KfW“ – wir sagen Ihnen, welche Unterlagen Sie dafür brauchen. Ihr nächster Schritt: ein Beratungstermin.
              </p>
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
            <Link href="/waermepumpe" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Wärmepumpen</h4>
              <p className="text-sm text-slate-600">Technologie-Übersicht</p>
            </Link>
            <Link href="/partner/buderus" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Buderus</h4>
              <p className="text-sm text-slate-600">Auch Bosch-Gruppe</p>
            </Link>
            <Link href="/partner" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Alle Hersteller</h4>
              <p className="text-sm text-slate-600">Hersteller-Übersicht</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
