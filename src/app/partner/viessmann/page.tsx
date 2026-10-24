import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import {
  Award,
  Zap,
  Leaf,
  Thermometer,
  Volume2,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 2 (Stand 24.10.2026).
// WIEDERVORLAGE ca. 03/2028: Testsieger-Hinweis (test 10/2025) entfernen – Werbefrist i. d. R. 2,5 Jahre ab 23.09.2025.
// Testurteil nur für den getesteten Typ AWO-E-AC 251.A10, immer mit Ausgabe, Note und www.test.de.

export const metadata: Metadata = {
  title: "Viessmann Wärmepumpen: Vitocal 250-A, 150-A, 200-A ie | HeizCenter",
  description:
    "Viessmann Vitocal Wärmepumpen mit natürlichem Kältemittel R290 – vom Einstiegsmodell Vitocal 150-A bis zur neuen Vitocal 200-A ie mit bis zu 75 °C Vorlauf. Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter in der Region Augsburg, Ulm und Memmingen.",
  keywords: [
    "Viessmann",
    "Vitocal",
    "Vitocal 250-A",
    "Vitocal 200-A ie",
    "Vitodens",
    "Wärmepumpe",
    "R290",
    "Augsburg",
    "Ulm",
  ],
  alternates: {
    canonical: getCanonicalUrl("/partner/viessmann"),
  },
};

const benefits = [
  "Vitocal 250-A (Typ A10): Testsieger bei Stiftung Warentest, test 10/2025, Qualitätsurteil GUT (2,0) – www.test.de",
  "Vitocal 250-A, 150-A und 200-A ie mit natürlichem Kältemittel R290",
  "Vorlauf bis 70 °C, mit der neuen Vitocal 200-A ie bis 75 °C",
  "Effizienzklasse bis A+++ (je nach Modell und Typ)",
  "Viessmann-Garantie bis 5 Jahre bei Aufschaltung über ViCare, mit System Plus bis 6 Jahre",
  "Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter",
];

const features = [
  {
    title: "Vitocal 250-A (Typ A10): Testsieger test 10/2025",
    description:
      "Die Vitocal 250-A (Typ AWO-E-AC 251.A10, 10 kW) war Testsieger im Wärmepumpentest der Stiftung Warentest: test 10/2025, Qualitätsurteil GUT (2,0) – www.test.de. Das Urteil gilt für diesen getesteten Typ.",
    icon: Award,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Vitocal 250-A, 150-A und 200-A ie arbeiten mit Propan (R290). Sein Treibhauspotenzial liegt nahe null.",
    icon: Leaf,
  },
  {
    title: "Vorlauf bis 70 °C – oder 75 °C",
    description:
      "Vitocal 250-A und 150-A liefern bis 70 °C Vorlauf (bei bis zu −10 °C außen), die neue Vitocal 200-A ie bis 75 °C. Ob Ihre Heizkörper reichen, zeigt die Heizlastberechnung.",
    icon: Thermometer,
  },
  {
    title: "Effizienzklasse bis A+++",
    description:
      "Je nach Modell und Typ A++ bis A+++. Rund drei Viertel der Heizwärme holt die Wärmepumpe aus der Außenluft; was Sie gegenüber Öl oder Gas sparen, hängt von Strom- und Brennstoffpreisen ab.",
    icon: Zap,
  },
  {
    title: "Leiser Betrieb",
    description:
      "Laut Viessmann 35 dB(A) Schalldruck in 5 m Abstand im geräuschreduzierten Betrieb (Vitocal 250-A, wandnahe Aufstellung). Wie laut es an Ihrer Grundstücksgrenze wird, hängt vor allem vom Aufstellort ab.",
    icon: Volume2,
  },
  {
    title: "Viessmann-Garantie: bis zu 6 Jahre",
    description:
      "Viessmann gewährt bis zu 5 Jahre Garantie, wenn die Anlage über die ViCare-App aufgeschaltet ist, mit System Plus bis zu 6 Jahre. Voraussetzung ist unter anderem die Wartung durch einen Fachbetrieb.",
    icon: ShieldCheck,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Viessmann-Wärmepumpen kommen für mein Haus in Frage?",
    answer:
      "Zum Viessmann-Programm für Ein- und Zweifamilienhäuser gehören unter anderem die Luft-Wasser-Wärmepumpen Vitocal 250-A und 150-A (beide mit R290 und bis 70 °C Vorlauf), die neue Vitocal 200-A ie für Vorlauftemperaturen bis 75 °C sowie die Sole-Wasser-Wärmepumpen Vitocal 222-G und 333-G für Erdwärme. Welches Modell und welche Größe zu Ihrem Haus passen, ermitteln wir mit der Heizlastberechnung.",
  },
  {
    question: "Was kostet eine Viessmann-Wärmepumpe?",
    answer:
      "Das hängt vor allem von Ihrem Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung, Warmwasser und Elektroanschluss. Typische Kostenpositionen erklärt unser Ratgeber „Wärmepumpe Kosten 2026“ im Blog. Ihren Preis nennen wir im Angebot, auf Grundlage der Heizlastberechnung. Welcher Zuschuss möglich ist, steht auf unserer Förderseite.",
  },
  {
    question: "Wie hat die Vitocal 250-A bei Stiftung Warentest abgeschnitten?",
    answer:
      "Im Wärmepumpentest 10/2025 der Stiftung Warentest (fünf Luft-Wasser-Wärmepumpen in Monoblock-Bauweise mit 10 bis 12 kW und R290) wurde die Vitocal 250-A, Typ AWO-E-AC 251.A10, mit dem Qualitätsurteil GUT (2,0) Testsieger (www.test.de). Bewertet wurden vor allem Energieeffizienz und Umwelteigenschaften sowie die Handhabung. Das Urteil gilt für diesen getesteten Typ.",
  },
  {
    question: "Eignet sich Viessmann für einen Altbau mit Heizkörpern?",
    answer:
      "Oft ja. Die Vitocal 250-A und 150-A liefern laut Viessmann bis 70 °C Vorlauf (bei bis zu −10 °C außen), die neue Vitocal 200-A ie bis 75 °C. Ob Ihre vorhandenen Heizkörper ausreichen oder einzelne getauscht werden sollten, zeigt die Heizlastberechnung.",
  },
  {
    question: "Wie laut ist eine Vitocal 250-A?",
    answer:
      "Viessmann nennt 35 dB(A) Schalldruck in 5 m Abstand im geräuschreduzierten Betrieb bei wandnaher Aufstellung. Wie laut es an Ihrer Grundstücksgrenze wird, hängt vor allem vom Aufstellort ab – den legen wir bei der Planung mit Ihnen fest.",
  },
  {
    question: "Welche Garantie gibt Viessmann?",
    answer:
      "Viessmann gewährt bis zu 5 Jahre Garantie, wenn die Anlage über die ViCare-App aufgeschaltet ist, und mit der System-Plus-Garantie bis zu 6 Jahre. Voraussetzung ist unter anderem die Wartung durch einen Fachbetrieb; die vollständigen Bedingungen stehen auf viessmann.de. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
  },
  {
    question: "Kann ich eine Vitocal mit meiner Photovoltaikanlage verbinden?",
    answer:
      "Eine Kopplung mit Photovoltaik ist möglich; die Wärmepumpe kann dann bevorzugt selbst erzeugten Strom nutzen. Bedient wird sie per ViCare-App (bei 222-G und 333-G über Vitoconnect). Welche Funktionen Ihr Modell genau bietet, klären wir in der Beratung.",
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
          { name: "Viessmann", url: "/partner/viessmann" },
        ]}
      />
      <ServiceHero
        title="Viessmann Wärmepumpen & Heizungen"
        description="Vitocal-Wärmepumpen für Neubau und Altbau – vom Einstiegsmodell Vitocal 150-A bis zur neuen Vitocal 200-A ie für hohe Vorlauftemperaturen. Wir beraten Sie, planen die Anlage mit Heizlastberechnung und bauen sie ein."
        benefits={benefits}
        icon={Award}
        badge="Vitocal-Wärmepumpen"
        imageSrc="/images/Waermepumpe.webp"
        imageAlt="Wärmepumpe am Einfamilienhaus – Symbolbild"
        logoSrc="/images/partners/viessmann.svg"
      />

      <FeaturesSection
        title="Warum Viessmann? Vitocal-Wärmepumpen im Überblick"
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Aktuelle Viessmann-Wärmepumpen
          </h2>

          <div className="space-y-8">
            {/* Vitocal Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                Vitocal Wärmepumpen
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 250-A – Luft-Wasser-Monoblock mit R290
                </h4>
                <p className="text-slate-700 mb-3">
                  Im Wärmepumpentest der Stiftung Warentest (test 10/2025, fünf
                  Luft-Wasser-Monoblöcke mit 10 bis 12 kW und R290) erhielt die
                  Vitocal 250-A, Typ A10, das Qualitätsurteil GUT (2,0) und wurde
                  Testsieger – www.test.de. Das Urteil gilt für diesen Typ.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 2,6 bis 18,5 kW (je nach Typ)</li>
                  <li>Vorlauftemperatur: bis 70 °C (bei bis zu −10 °C außen)</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>
                    Effizienzklasse: A+++ (Typ 10 bis 19), A++ (Typ 04 bis 08,
                    230 V)
                  </li>
                  <li>
                    SCOP 5,0 bei 35 °C Vorlauf (Typ A10, Datenblatt,
                    durchschnittliches Klima)
                  </li>
                  <li>
                    Schalldruck 35 dB(A) in 5 m im geräuschreduzierten Betrieb
                    (laut Viessmann, wandnahe Aufstellung)
                  </li>
                  <li>Kühlen möglich – am besten über eine Fußbodenheizung</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 150-A – Einstiegsmodell mit R290
                </h4>
                <p className="text-slate-700 mb-3">
                  Das Einstiegsmodell der Vitocal-Luft-Wasser-Wärmepumpen.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 2,1 bis 14,9 kW</li>
                  <li>Vorlauftemperatur: bis 70 °C (bei bis zu −10 °C außen)</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Effizienzklasse: A++ bis A+++ je nach Typ</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 200-A ie – neu für Altbauten mit Heizkörpern
                </h4>
                <p className="text-slate-700 mb-3">
                  Seit 09/2026 auf dem Markt: die Vitocal für hohe
                  Vorlauftemperaturen.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Vorlauftemperatur: bis 75 °C (70 °C bei −10 °C außen)</li>
                  <li>Leistung: 6 bis 12 kW</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Effizienzklasse: A+++</li>
                </ul>
                <p className="text-slate-700">
                  Ob Ihre vorhandenen Heizkörper für eine Wärmepumpe reichen,
                  zeigt die Heizlastberechnung.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Vitocal 222-G und 333-G – Erdwärme
                </h4>
                <p className="text-slate-700 mb-3">
                  Sole-Wasser-Wärmepumpen holen die Wärme aus Erdsonden oder
                  Flächenkollektoren; ein Außengerät gibt es nicht.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Vitocal 222-G: 5,8 bis 10,4 kW, Warmwasserspeicher
                    integriert, Vorlauf bis 65 °C
                  </li>
                  <li>
                    Vitocal 222-G: SCOP bis 5,4 nach EN 14825
                    (Niedertemperatur, kaltes Klima)
                  </li>
                  <li>Vitocal 333-G: 1,7 bis 11,4 kW</li>
                </ul>
              </div>
            </div>

            {/* Vitodens Brennwertgeräte */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                Vitodens Gas-Brennwertgeräte
              </h3>
              <p className="text-slate-700 mb-4">
                Wenn eine Wärmepumpe in Ihrem Haus (noch) nicht passt, beraten
                wir auch zu Gas-Brennwertgeräten von Viessmann.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                <li>
                  Vitodens 200-W (wandhängend): 2,5 bis 32 kW, Normnutzungsgrad
                  bis 98 % (Hs)
                </li>
                <li>Vitodens 300-W (wandhängend): 1,9 bis 25 kW</li>
              </ul>
              <p className="text-sm text-slate-600">
                Wichtig: Für neu eingebaute Gasheizungen schreibt das
                Gebäudemodernisierungsgesetz ab 2029 einen steigenden Bioanteil
                vor – oder einen anderen Erfüllungsweg, etwa einen
                Wärmepumpen-Hybrid. Über die KfW-Heizungsförderung wird ein
                Gaskessel nicht gefördert. Mehr im{" "}
                <Link
                  href="/blog/heizungsgesetz-2024"
                  className="text-[#0F5B78] font-medium hover:underline"
                >
                  Ratgeber Heizungsgesetz 2026
                </Link>
                .
              </p>
            </div>

            {/* Kosten und Förderung */}
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Kosten und Förderung</h3>
              <p className="text-slate-700 mb-3">
                Was eine Wärmepumpe bei Ihnen kostet, hängt vor allem vom Haus
                ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung und
                Warmwasser. Einen Überblick über typische Kostenpositionen gibt
                unser{" "}
                <Link
                  href="/blog/waermepumpe-kosten-2026"
                  className="text-[#0F5B78] font-medium hover:underline"
                >
                  Ratgeber „Wärmepumpe Kosten 2026“
                </Link>
                . Ihren Preis nennen wir im Angebot – auf Grundlage der
                Heizlastberechnung.
              </p>
              <p className="text-slate-700">
                Für den Einbau in ein bestehendes Wohngebäude gibt es bis zu{" "}
                {FOERDER_TEXT.maxStandard} der förderfähigen Kosten als
                Zuschuss; {FOERDER_TEXT.maxBedingung}. Wie
                sich das zusammensetzt, steht auf unserer{" "}
                <Link
                  href="/foerderung"
                  className="text-[#0F5B78] font-medium hover:underline"
                >
                  Förderseite
                </Link>
                .
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
                Wir beraten Sie zu Viessmann-Wärmepumpen, planen die Anlage mit
                Heizlastberechnung und bauen sie ein. Weil wir Wärmepumpen
                mehrerer Hersteller einbauen, richtet sich unsere Empfehlung
                nach Ihrem Haus – nicht nach einem Katalog.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Vor dem Einbau
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Beratung vor Ort</li>
                    <li>✓ Heizlastberechnung für Modell und Größe</li>
                    <li>✓ Planung des Aufstellorts</li>
                    <li>✓ Förderberatung (KfW-Heizungsförderung)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Nach dem Einbau
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Wartung, auf Wunsch mit Wartungsvertrag</li>
                    <li>✓ 24/7-Notdienst für Wartungskunden</li>
                    <li>✓ Ansprechpartner in der Region</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-slate-700">
                Den Zuschuss der KfW beantragen Sie als Eigentümer selbst im
                Portal „Meine KfW“ – wir sagen Ihnen, welche Unterlagen Sie
                dafür brauchen. Ihr nächster Schritt: ein Beratungstermin.
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
                Weitere Hersteller im Überblick
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
