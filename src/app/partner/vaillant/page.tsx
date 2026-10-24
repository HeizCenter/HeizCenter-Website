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
  Snowflake,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 3 (Stand 24.10.2026).
// WIEDERVORLAGE 01/2027: aroTHERM Split plus (R32, Luft-Wasser-Split bis 12 kW) darf ab 01.01.2027 grundsätzlich nicht mehr neu in Verkehr gebracht werden –
// Block streichen oder anpassen. geoCOMPACT exclusive 8/11 kW laut Vaillant nur bis Ende 2026 lieferbar – Verfügbarkeit prüfen.

export const metadata: Metadata = {
  title: "Vaillant Wärmepumpen: aroTHERM plus, pro & Split plus | HeizCenter",
  description:
    "Vaillant aroTHERM plus mit natürlichem Kältemittel R290 und bis zu 75 °C Vorlauf, dazu aroTHERM pro, Split plus und geoCOMPACT exclusive für Erdwärme. Beratung und Einbau durch HeizCenter in der Region Augsburg, Ulm und Memmingen.",
  alternates: {
    canonical: getCanonicalUrl("/partner/vaillant"),
  },
  keywords: [
    "Vaillant",
    "aroTHERM plus",
    "aroTHERM pro",
    "geoCOMPACT",
    "ecoTEC",
    "Wärmepumpe",
    "R290",
    "Augsburg",
    "Ulm",
  ],
};

const benefits = [
  "Vaillant – seit 1874, laut Vaillant in Deutschland entwickelt und in Europa gefertigt",
  "aroTHERM plus: bis 75 °C Vorlauf für Altbauten mit Heizkörpern",
  "Natürliches Kältemittel R290, Effizienzklasse A+++ (35 °C)",
  "Heizen, Warmwasser und Kühlen mit einem Gerät",
  "5 Jahre Vaillant-Garantie bei Registrierung, verbundenem Internetmodul und jährlicher Wartung",
  "Beratung und Einbau durch HeizCenter",
];

const features = [
  {
    title: "Seit 1874",
    description:
      "Vaillant wurde 1874 gegründet. Die Geräte werden laut Vaillant in Deutschland entwickelt und in Europa gefertigt.",
    icon: Award,
  },
  {
    title: "Bis 75 °C Vorlauf",
    description:
      "Die aroTHERM plus liefert laut Vaillant bis 75 °C Vorlauftemperatur. Damit kommt sie für viele Altbauten mit Heizkörpern in Frage – ob Ihre Heizkörper reichen, hängt davon ab, wie viel Wärme die einzelnen Räume brauchen.",
    icon: Thermometer,
  },
  {
    title: "Effizienzklasse A+++",
    description:
      "aroTHERM plus: Effizienzklasse A+++ bei 35 °C und ein SCOP bis 5,1 (Niedertemperatur). Laut Vaillant stammen bis zu 75 % der Heizenergie aus der Umwelt, nur rund 25 % aus Strom.",
    icon: Zap,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Die aroTHERM plus und die Erdwärmepumpe geoCOMPACT exclusive arbeiten mit Propan (R290) – Treibhauspotenzial nahe null.",
    icon: Leaf,
  },
  {
    title: "Heizen und Kühlen",
    description:
      "Die aroTHERM plus ist laut Vaillant für Heizen, Warmwasserbereitung und Kühlen geeignet – ein Gerät für das ganze Jahr.",
    icon: Snowflake,
  },
  {
    title: "5 Jahre Vaillant-Garantie",
    description:
      "Vaillant gibt 5 Jahre Garantie, wenn die Anlage innerhalb von 180 Tagen registriert wird, das Internetmodul dauerhaft verbunden bleibt und jährlich gewartet wird. Mit GarantiePREMIUM sind bis zu 10 Jahre möglich.",
    icon: ShieldCheck,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Vaillant-Wärmepumpen gibt es aktuell?",
    answer:
      "Zum aktuellen Programm gehören die Luft-Wasser-Wärmepumpen aroTHERM plus (Monoblock, R290, bis 75 °C), aroTHERM pro (Kompaktklasse für freistehende Häuser, bis 70 °C), aroTHERM Split plus (Split-Gerät mit R32) und aroTHERM perform sowie für Erdwärme die geoCOMPACT exclusive mit R290. Die nötige Größe richtet sich vor allem nach der Heizlast Ihres Hauses.",
  },
  {
    question: "Was kostet eine Vaillant aroTHERM?",
    answer:
      "Das hängt vor allem von Ihrem Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung, Warmwasser und Elektroanschluss. Typische Kostenpositionen erklärt unser Ratgeber „Wärmepumpe Kosten 2026“ im Blog. Den Preis für Ihr Haus nennen wir im Angebot. Welcher Zuschuss möglich ist, steht auf unserer Förderseite.",
  },
  {
    question: "Was ist der Unterschied zwischen aroTHERM plus und Split plus?",
    answer:
      "Bei der aroTHERM plus (Monoblock) sitzt der gesamte Kältekreis im Außengerät; ins Haus führen Wasser-, keine Kältemittelleitungen. Bei der aroTHERM Split plus sind Außen- und Inneneinheit getrennt und über Kältemittelleitungen verbunden. Die aroTHERM plus arbeitet mit R290 und bis 75 °C Vorlauf, die Split plus mit R32 und bis 62 °C. Für Split-Geräte mit R32 gilt ab 2027 eine Einschränkung durch die EU-F-Gase-Verordnung – mehr dazu oben bei der Split plus.",
  },
  {
    question: "Eignet sich Vaillant für einen Altbau mit Heizkörpern?",
    answer:
      "Mit bis zu 75 °C Vorlauf eignet sich die aroTHERM plus für viele Altbauten mit Heizkörpern. Ob Ihre vorhandenen Heizkörper reichen oder einzelne getauscht werden sollten, hängt von ihrer Größe und vom Wärmebedarf der Räume ab.",
  },
  {
    question: "Wie laut ist eine Vaillant aroTHERM plus?",
    answer:
      "Laut Vaillant ist die aroTHERM plus die leiseste Luft-Wasser-Wärmepumpe von Vaillant: 27,5 dB(A) Schalldruck in 3 m Abstand beim 3-kW-Gerät im Nachtbetrieb. Die Schallleistung im Flüsterbetrieb liegt je nach Größe bei 45 bis 50 dB(A). Wie laut es an Ihrer Grundstücksgrenze wird, hängt vor allem vom Aufstellort ab – den legen wir bei der Planung mit Ihnen fest.",
  },
  {
    question: "Welche Garantie gibt Vaillant?",
    answer:
      "Vaillant gibt 5 Jahre Garantie auf die aktuellen Wärmepumpen, wenn die Anlage innerhalb von 180 Tagen registriert wird, das Internetmodul dauerhaft mit dem Internet verbunden bleibt und die Anlage jährlich gewartet wird. Mit GarantiePREMIUM sind bis zu 10 Jahre möglich; ob und zu welchen Bedingungen das für Ihre Anlage gilt, klären wir im Angebot. Die vollständigen Bedingungen stehen auf vaillant.de. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
  },
  {
    question: "Kann ich eine aroTHERM mit Photovoltaik kombinieren?",
    answer:
      "Ja, über den Regler und das Energiemanagement ist eine Kopplung mit Photovoltaik möglich. Bedient wird die Anlage per myVAILLANT-App (Internetmodul myVAILLANT connect). Welche Funktionen Ihr Modell genau bietet, klären wir in der Beratung.",
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
          { name: "Vaillant", url: "/partner/vaillant" },
        ]}
      />
      <ServiceHero
        title="Vaillant Wärmepumpen & Heizungen"
        description="Die aroTHERM plus mit natürlichem Kältemittel R290 liefert bis 75 °C Vorlauf – für Neubau und viele Altbauten mit Heizkörpern. Dazu kommen aroTHERM pro, Split plus und die Erdwärmepumpe geoCOMPACT exclusive. Wir beraten Sie und bauen Ihre Wärmepumpe ein."
        benefits={benefits}
        icon={Award}
        badge="Seit 1874"
        imageSrc="/images/Waermepumpe.webp"
        imageAlt="Wärmepumpe am Einfamilienhaus – Symbolbild"
        logoSrc="/images/partners/vaillant.svg"
      />

      <FeaturesSection
        title="Warum Vaillant? aroTHERM-Wärmepumpen im Überblick"
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Aktuelle Vaillant-Wärmepumpen
          </h2>

          <div className="space-y-8">
            {/* aroTHERM Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                aroTHERM Wärmepumpen
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  aroTHERM plus – Monoblock für Neubau und Altbau
                </h4>
                <p className="text-slate-700 mb-3">
                  Luft-Wasser-Wärmepumpe in Monoblock-Bauweise: Der Kältekreis
                  sitzt komplett im Außengerät.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Leistungsgrößen: 3, 5, 7, 10 und 12 kW (VWL 35/8.1 bis VWL
                    125/8.1)
                  </li>
                  <li>Vorlauftemperatur: bis 75 °C</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>
                    SCOP bis 5,1 (Niedertemperatur), Effizienzklasse A+++ bei
                    35 °C
                  </li>
                  <li>
                    Schallleistung im Flüsterbetrieb: 45 bis 50 dB(A) je nach
                    Größe
                  </li>
                  <li>Kühlen möglich</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  aroTHERM pro – Kompaktklasse für freistehende Häuser
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistung: 5 bis 11 kW</li>
                  <li>Vorlauftemperatur: bis 70 °C</li>
                  <li>SCOP bis 5,0 (Niedertemperatur)</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  aroTHERM Split plus – Split-Gerät
                </h4>
                <p className="text-slate-700 mb-3">
                  Außen- und Inneneinheit sind getrennt und über
                  Kältemittelleitungen verbunden.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>
                    Leistung: 3 bis 7 kW (VWL 35/8.2 AS bis VWL 75/8.2 AS)
                  </li>
                  <li>Vorlauftemperatur: bis 62 °C</li>
                  <li>Kältemittel: R32 (GWP 675)</li>
                </ul>
                <p className="text-sm text-slate-600">
                  Hinweis: Nach der EU-F-Gase-Verordnung dürfen
                  Luft-Wasser-Split-Wärmepumpen bis 12 kW mit Kältemitteln ab
                  einem GWP von 150 – also auch mit R32 – ab 01.01.2027 grundsätzlich nicht
                  mehr neu in Verkehr gebracht werden. Was das für Ihr Vorhaben
                  bedeutet, besprechen wir in der Beratung.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  geoCOMPACT exclusive – Erdwärme mit R290
                </h4>
                <p className="text-slate-700 mb-3">
                  Sole-Wasser-Wärmepumpe: Die Wärme kommt aus Erdsonden oder
                  Erdkollektoren, ein Außengerät gibt es nicht.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Vorlauftemperatur: bis 75 °C</li>
                  <li>Warmwasserspeicher (185 Liter) integriert</li>
                </ul>
              </div>
            </div>

            {/* ecoTEC Brennwertgeräte */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                ecoTEC Gas-Brennwertgeräte
              </h3>
              <p className="text-slate-700 mb-4">
                Wenn eine Wärmepumpe in Ihrem Haus (noch) nicht passt, beraten
                wir auch zu Gas-Brennwertgeräten von Vaillant.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                <li>
                  ecoTEC plus: 10 bis 30 kW, Raumheizungs-Energieeffizienz bis
                  94 %
                </li>
                <li>ecoTEC exclusive: 15 bis 30 kW, Internetmodul inklusive</li>
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
                . Den Preis für Ihr Haus nennen wir im Angebot.
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

      {/* Why HeizCenter for Vaillant */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Vaillant mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Wir beraten Sie zu Vaillant-Wärmepumpen und bauen sie ein. Weil
                wir Wärmepumpen mehrerer Hersteller einbauen, richtet sich
                unsere Empfehlung nach Ihrem Haus – nicht nach einem Katalog.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Vor dem Einbau
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Beratung vor Ort</li>
                    <li>✓ Angebot für Ihr Haus</li>
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
