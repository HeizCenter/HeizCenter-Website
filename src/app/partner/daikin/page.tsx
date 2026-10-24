import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import { Award, Zap, Wind, Thermometer, Snowflake, Leaf } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 7 (Stand 24.10.2026).
// WIEDERVORLAGE 01/2027: Altherma 3 R (R32, Split bis 12 kW) ab 01.01.2027 nicht mehr neu in Verkehr zu bringen; 3 M (Monoblock) prüfen – Block anpassen.
// OFFEN: Kältemittel der Altherma 3 GEO und 3 H HT (nicht im Bericht, auf daikin.de nicht abrufbar) – bis zur Klärung keine Aussage.
// F-Gase-Verbot ab 01.01.2027 (Altherma 3 R mit R32): EU-Kommission, Verordnung (EU) 2024/573,
// https://climate.ec.europa.eu/areas-action/fluorinated-greenhouse-gases/climate-friendly-alternatives-f-gases/air-conditioning_en

export const metadata: Metadata = {
  title: "Daikin Altherma Wärmepumpen & Klimageräte | HeizCenter",
  description:
    "Daikin Altherma Wärmepumpen für Heizen, Warmwasser und Kühlen – die neue Altherma 4 H mit natürlichem Kältemittel R290 liefert bis 75 °C Vorlauf. Dazu Split-Klimageräte wie die Perfera. Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter.",
  keywords: ["Daikin", "Altherma", "Altherma 4 H", "Wärmepumpe", "Klimaanlage", "Perfera", "Augsburg", "Ulm"],
  alternates: {
    canonical: getCanonicalUrl("/partner/daikin"),
  },
};

const benefits = [
  "Daikin – gegründet 1924 in Osaka",
  "Altherma 4 H: R290, bis 75 °C Vorlauf, Effizienzklasse A+++",
  "Betrieb bis −28 °C Außentemperatur (Altherma 4 H und 3 H HT)",
  "Heizen, Warmwasser und – je nach Variante – Kühlen",
  "Daikin-Garantie 2 Jahre, mit „Stand by Me“ 5 Jahre",
  "Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter",
];

const features = [
  {
    title: "Seit 1924",
    description: "Daikin wurde 1924 in Osaka gegründet und baut Wärmepumpen und Klimageräte.",
    icon: Award,
  },
  {
    title: "Bis 75 °C mit R290",
    description:
      "Die neue Altherma 4 H arbeitet mit Propan (R290), Treibhauspotenzial nahe null, und liefert laut Daikin bis 75 °C Vorlauf – auch bei −15 °C außen (8 bis 14 kW).",
    icon: Leaf,
  },
  {
    title: "Für strengen Frost",
    description: "Altherma 4 H und Altherma 3 H HT arbeiten laut Daikin bis −28 °C Außentemperatur.",
    icon: Thermometer,
  },
  {
    title: "Heizen und Kühlen",
    description:
      "Die meisten Altherma-Varianten können im Sommer kühlen. Wie gut das klappt, hängt von Ihrer Wärmeverteilung ab – am besten eignet sich eine Fußbodenheizung.",
    icon: Snowflake,
  },
  {
    title: "Effizienzklasse bis A+++",
    description:
      "Altherma-Wärmepumpen erreichen laut Daikin bis zur Effizienzklasse A+++ im Heizbetrieb. Bedient werden sie am Regler des Geräts und per Onecta-App.",
    icon: Zap,
  },
  {
    title: "Auch Klimageräte",
    description:
      "Split-Klimageräte wie die Perfera kühlen und heizen einzelne Räume – laut Daikin bis A+++ und mit einem Innengerät ab 19 dB(A).",
    icon: Wind,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Daikin-Wärmepumpen gibt es?",
    answer:
      "Für Altbauten mit Heizkörpern die Altherma 4 H (R290, bis 75 °C) und die Altherma 3 H HT (14 bis 18 kW, bis 70 °C), für Neubau und Niedertemperatur die Altherma 3 R (Split) bzw. Altherma 3 M (Monoblock) und für Erdwärme die Altherma 3 GEO. Welches Gerät und welche Größe zu Ihrem Haus passen, ermitteln wir mit der Heizlastberechnung.",
  },
  {
    question: "Was kostet eine Daikin Altherma Wärmepumpe?",
    answer:
      "Das hängt vor allem von Ihrem Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung, Warmwasser und Elektroanschluss. Typische Kostenpositionen erklärt unser Ratgeber „Wärmepumpe Kosten 2026“ im Blog. Ihren Preis nennen wir im Angebot, auf Grundlage der Heizlastberechnung. Welcher Zuschuss möglich ist, steht auf unserer Förderseite.",
  },
  {
    question: "Kann eine Daikin Altherma heizen und kühlen?",
    answer:
      "Ja, die meisten Altherma-Varianten können kühlen; die ECH2O-Ausführung heizt laut Daikin nur. Wie gut die Kühlung funktioniert, hängt von Ihrer Wärmeverteilung ab – am besten eignet sich eine Fußbodenheizung.",
  },
  {
    question: "Was ist der Unterschied zwischen Altherma und einer Klimaanlage?",
    answer:
      "Altherma ist eine Wärmepumpe, die über Fußbodenheizung oder Heizkörper heizt, Warmwasser bereitet und je nach Variante kühlt. Klimageräte wie Perfera oder Ururu Sarara sind Split-Geräte, die einzelne Räume direkt kühlen und heizen.",
  },
  {
    question: "Eignet sich Daikin für einen Altbau mit Heizkörpern?",
    answer:
      "Dafür gibt es die Altherma 4 H (bis 75 °C Vorlauf, auch bei −15 °C außen) und die Altherma 3 H HT (bis 70 °C, 14 bis 18 kW). Ob Ihre vorhandenen Heizkörper bleiben können, zeigt die Heizlastberechnung.",
  },
  {
    question: "Wie effizient sind Daikin-Wärmepumpen?",
    answer:
      "Laut Daikin erreichen Altherma-Wärmepumpen bis zur Effizienzklasse A+++. Ein Beispiel mit Zahlen: Die Altherma 3 H HT kommt auf einen SCOP von 4,51 bis 4,81 bei 35 °C Vorlauf und 3,57 bis 3,63 bei 55 °C – je niedriger die Vorlauftemperatur, desto effizienter.",
  },
  {
    question: "Welche Garantie gibt Daikin?",
    answer:
      "Auf Altherma-Wärmeerzeuger gibt Daikin 2 Jahre Garantie, optional 5 Jahre. Voraussetzungen für die 5 Jahre laut Daikin: Registrierung innerhalb von 6 Monaten über „Stand by Me“, Inbetriebnahme durch geschultes Fachhandwerk und jährliche Wartung. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
  },
  {
    question: "Was ist VRV?",
    answer:
      "VRV steht für Variable Refrigerant Volume und ist ein geschützter Begriff von Daikin für Systeme, bei denen ein Außengerät viele Innengeräte versorgt – gedacht für Gewerbe wie Büros, Hotels oder Geschäfte. Für Ein- und Zweifamilienhäuser kommen eher eine Altherma-Wärmepumpe oder einzelne Split-Klimageräte in Frage.",
  },
];

export default function DaikinPage() {
  return (
    <>
      <ServiceHero
        title="Daikin Wärmepumpen & Klimaanlagen"
        description="Altherma-Wärmepumpen heizen, bereiten Warmwasser und können je nach Variante kühlen. Die neue Altherma 4 H mit natürlichem Kältemittel R290 liefert bis 75 °C Vorlauf. Wir beraten Sie, planen die Anlage mit Heizlastberechnung und bauen sie ein."
        benefits={benefits}
        icon={Award}
        badge="Seit 1924"
        imageSrc="/images/klima.webp"
        imageAlt="Klimaanlage – Symbolbild"
        logoSrc="/images/partners/daikin.svg"
      />
      <FeaturesSection title="Warum Daikin? Heizen und Kühlen aus einer Hand." features={features} />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Aktuelle Daikin-Wärmepumpen und Klimageräte</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">Daikin Altherma Wärmepumpen</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Altherma 4 H – Hochtemperatur mit R290</h4>
                <p className="text-slate-700 mb-3">Für Altbauten mit Heizkörpern; ob Ihre Heizkörper bleiben können, zeigt die Heizlastberechnung.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Vorlauftemperatur: bis 75 °C, auch bei −15 °C außen (8 bis 14 kW)</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Effizienzklasse: A+++</li>
                  <li>Betrieb bis −28 °C Außentemperatur</li>
                  <li>Regler MMI-4 und Onecta-App</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Altherma 3 R – für Neubau und Niedertemperatur</h4>
                <p className="text-slate-700 mb-3">Split-Gerät mit Außen- und Inneneinheit; als Monoblock heißt die Baureihe Altherma 3 M.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 4 bis 8 kW</li>
                  <li>Vorlauftemperatur: bis 65 °C</li>
                  <li>Kältemittel: R32 (GWP 675)</li>
                  <li>Effizienzklasse: bis A+++</li>
                  <li>Kühlen möglich</li>
                </ul>
                <p className="text-sm text-slate-600">
                  Hinweis: Nach der EU-F-Gase-Verordnung dürfen Luft-Wasser-Split-Wärmepumpen bis 12 kW sowie Monoblock- und Kompaktgeräte bis 50 kW mit Kältemitteln ab einem GWP von 150 – also auch mit R32 – ab 01.01.2027 grundsätzlich nicht mehr neu in Verkehr gebracht werden. Was das für Ihr Vorhaben bedeutet, besprechen wir in der Beratung.
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Altherma 3 H HT – Hochtemperatur in größeren Leistungen</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistungsgrößen: 14, 16 und 18 kW</li>
                  <li>Vorlauftemperatur: bis 70 °C, auch bei −15 °C außen</li>
                  <li>Betrieb bis −28 °C Außentemperatur</li>
                  <li>SCOP 4,51 bis 4,81 bei 35 °C, 3,57 bis 3,63 bei 55 °C</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">Altherma 3 GEO – Erdwärme</h4>
                <p className="text-slate-700 mb-3">Sole-Wasser-Wärmepumpe: Die Wärme kommt aus Erdsonden oder Erdkollektoren, ein Außengerät gibt es nicht.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Vorlauftemperatur: bis 65 °C</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Daikin Klimageräte</h3>
              <p className="text-slate-700 mb-4">
                Für einzelne Räume baut Daikin Split-Klimageräte, die kühlen und heizen. Ob ein Klimagerät für Sie passt, besprechen wir in der Beratung; mehr dazu auf unserer Seite{" "}
                <Link href="/klimaanlage" className="text-[#0F5B78] font-medium hover:underline">
                  Klimaanlagen
                </Link>
                .
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Perfera – Wandgerät</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Saisonale Effizienz bis A+++ im Kühl- und Heizbetrieb</li>
                  <li>Innengerät ab 19 dB(A)</li>
                  <li>Steuerung per Onecta-App</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Ururu Sarara</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Heizt, kühlt, befeuchtet, entfeuchtet, belüftet und reinigt die Luft</li>
                  <li>Selbstreinigender Luftfilter</li>
                </ul>
              </div>
              <p className="text-slate-700">
                Was ein Klimagerät kostet, erklärt unser{" "}
                <Link href="/blog/klimaanlage-kosten-2026-anschaffung-installation-betrieb" className="text-[#0F5B78] font-medium hover:underline">
                  Ratgeber „Klimaanlage Kosten 2026“
                </Link>
                .
              </p>
            </div>

            {/* Kosten und Förderung */}
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Kosten und Förderung der Wärmepumpe</h3>
              <p className="text-slate-700 mb-3">
                Was eine Wärmepumpe bei Ihnen kostet, hängt vor allem vom Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung und Warmwasser. Einen Überblick über typische Kostenpositionen gibt unser{" "}
                <Link href="/blog/waermepumpe-kosten-2026" className="text-[#0F5B78] font-medium hover:underline">
                  Ratgeber „Wärmepumpe Kosten 2026“
                </Link>
                . Ihren Preis nennen wir im Angebot – auf Grundlage der Heizlastberechnung.
              </p>
              <p className="text-slate-700">
                Für den Einbau einer Wärmepumpe in ein bestehendes Wohngebäude gibt es bis zu {FOERDER_TEXT.maxStandard} der förderfähigen Kosten als Zuschuss; {FOERDER_TEXT.maxBedingung}. Wie sich das zusammensetzt, steht auf unserer{" "}
                <Link href="/foerderung" className="text-[#0F5B78] font-medium hover:underline">
                  Förderseite
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HeizCenter for Daikin */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Warum Daikin mit HeizCenter?</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Wir beraten Sie zu Daikin-Wärmepumpen, planen die Anlage mit Heizlastberechnung und bauen sie ein. Weil wir Wärmepumpen mehrerer Hersteller einbauen, richtet sich unsere Empfehlung nach Ihrem Haus – nicht nach einem Katalog.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Vor dem Einbau</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Beratung vor Ort</li>
                    <li>✓ Heizlastberechnung und Dimensionierung</li>
                    <li>✓ Planung des Aufstellorts</li>
                    <li>✓ Förderberatung (KfW-Heizungsförderung)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Kältetechnik und Service</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Kältetechniker nach ChemKlimaschutzV</li>
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
              <p className="text-sm text-slate-600">Heizungslösungen</p>
            </Link>
            <Link href="/klimaanlage" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Klimaanlagen</h4>
              <p className="text-sm text-slate-600">Kühlungslösungen</p>
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
