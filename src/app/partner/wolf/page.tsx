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
  Settings,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 5 (Stand 24.10.2026).
// WIEDERVORLAGE 01/2027: BWS-1 (R407C) darf ab 01.01.2027 als Neugerät nicht mehr in Verkehr gebracht werden –
// Block streichen oder durch ein WOLF-Gerät mit natürlichem Kältemittel ersetzen.
// F-Gase-Verbot ab 01.01.2027 (BWS-1 mit R407C): EU-Kommission, Verordnung (EU) 2024/573,
// https://climate.ec.europa.eu/areas-action/fluorinated-greenhouse-gases/climate-friendly-alternatives-f-gases/air-conditioning_en

export const metadata: Metadata = {
  title: "Wolf Wärmepumpen: CHA-Monoblock aus Mainburg | HeizCenter",
  description:
    "WOLF CHA-Monoblock Wärmepumpen, laut WOLF in Mainburg (Bayern) entwickelt und gefertigt: natürliches Kältemittel R290, bis 70 °C Vorlauf ohne Heizstab, Effizienzklasse A+++. Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter in der Region Augsburg, Ulm und Memmingen.",
  alternates: {
    canonical: getCanonicalUrl("/partner/wolf"),
  },
  keywords: [
    "Wolf",
    "WOLF CHA",
    "CHA-Monoblock",
    "CHC",
    "Wärmepumpe",
    "R290",
    "Mainburg",
    "Augsburg",
    "Ulm",
  ],
};

const benefits = [
  "CHA-Monoblock: laut WOLF in Mainburg (Bayern) entwickelt und gefertigt",
  "Bis 70 °C Vorlauf im reinen Wärmepumpenbetrieb – ohne Heizstab",
  "Natürliches Kältemittel R290, Effizienzklasse A+++ (35 °C)",
  "CHA-07 und CHA-10 mit eingebautem 9-kW-Heizstab für Spitzenlasten",
  "Heizen und aktives Kühlen mit einem Gerät",
  "Beratung, Planung mit Heizlastberechnung und Einbau durch HeizCenter",
];

const features = [
  {
    title: "Made in Germany",
    description:
      "Die CHA-Monoblock wird laut WOLF in Mainburg (Bayern) entwickelt und gefertigt.",
    icon: Award,
  },
  {
    title: "Bis 70 °C ohne Heizstab",
    description:
      "Im reinen Wärmepumpenbetrieb erreicht die CHA bis 70 °C Vorlauf – ein Plus für Altbauten mit Heizkörpern. Ob Ihre Heizkörper reichen, zeigt die Heizlastberechnung.",
    icon: Thermometer,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Die CHA arbeitet mit Propan (R290). WOLF nennt ein Treibhauspotenzial (GWP) von 0,02.",
    icon: Leaf,
  },
  {
    title: "Effizienzklasse A+++",
    description:
      "Bei 35 °C Vorlauf, also etwa mit Fußbodenheizung, erreicht die CHA die Effizienzklasse A+++.",
    icon: Zap,
  },
  {
    title: "Heizstab für Spitzenlasten",
    description:
      "CHA-07 und CHA-10 haben einen 9-kW-Elektroheizstab eingebaut. Er ist für Spitzenlasten gedacht; im Normalbetrieb heizt die Wärmepumpe allein.",
    icon: Settings,
  },
  {
    title: "Heizen und Kühlen",
    description:
      "Die CHA kann im Sommer aktiv kühlen – ein Gerät für das ganze Jahr.",
    icon: Snowflake,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche WOLF-Wärmepumpen gibt es?",
    answer:
      "Für Ein- und Zweifamilienhäuser die CHA-Monoblock 07 und 10, als Paket mit Warmwasserspeicher das Wärmepumpen-Center CHC und für Mehrfamilienhäuser die CHA-16/20 und CHA-20/24. Für Erdwärme gibt es die Sole-Wasser-Wärmepumpe BWS-1 (Kältemittel R407C, siehe Hinweis zur F-Gase-Verordnung oben). Welches Gerät und welche Größe zu Ihrem Haus passen, ermitteln wir mit der Heizlastberechnung.",
  },
  {
    question: "Was kostet eine WOLF CHA?",
    answer:
      "Das hängt vor allem von Ihrem Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung, Warmwasser und Elektroanschluss. Typische Kostenpositionen erklärt unser Ratgeber „Wärmepumpe Kosten 2026“ im Blog. Ihren Preis nennen wir im Angebot, auf Grundlage der Heizlastberechnung. Welcher Zuschuss möglich ist, steht auf unserer Förderseite.",
  },
  {
    question: "Was ist der Unterschied zwischen CHA und CHC?",
    answer:
      "Die CHA ist die Monoblock-Wärmepumpe für die Außenaufstellung. Das Wärmepumpen-Center CHC kombiniert dieses CHA-Außengerät mit einer Inneneinheit samt 180 oder 280 Liter Warmwasserspeicher – ein abgestimmtes Paket für Ein- und Zweifamilienhäuser.",
  },
  {
    question: "Hat die CHA einen eingebauten Heizstab?",
    answer:
      "Ja, CHA-07 und CHA-10 haben einen 9-kW-Elektroheizstab eingebaut. Er ist für Spitzenlasten gedacht; im reinen Wärmepumpenbetrieb erreicht die CHA bereits bis 70 °C Vorlauf.",
  },
  {
    question: "Wie effizient ist die WOLF CHA?",
    answer:
      "Bei 35 °C Vorlauf erreicht die CHA die Effizienzklasse A+++. Wie effizient Ihre Anlage im Alltag arbeitet, hängt vor allem von der Vorlauftemperatur Ihres Hauses ab – je niedriger, desto besser.",
  },
  {
    question: "Eignet sich WOLF für einen Altbau mit Heizkörpern?",
    answer:
      "Mit bis zu 70 °C Vorlauf ohne Heizstab passt die CHA auch in viele Altbauten mit Heizkörpern. Entscheidend ist die Heizlastberechnung: Sie zeigt, ob Ihre vorhandenen Heizkörper reichen.",
  },
  {
    question: "Kann ich WOLF mit Photovoltaik kombinieren?",
    answer:
      "Ja. CHA-07 und CHA-10 haben einen PV-Eingang, die CHA-16/20 ist laut WOLF SG Ready und EEBus-fähig. Bedient wird die Anlage über WOLF Link und die Smartset-App.",
  },
  {
    question: "Welche Garantie gibt WOLF?",
    answer:
      "WOLF gibt 5 Jahre Garantie auf in Deutschland gekaufte, installierte und online registrierte Wärmeerzeuger. Voraussetzungen laut WOLF: Registrierung innerhalb von 12 Monaten nach der Inbetriebnahme, Inbetriebnahme durch einen WOLF-Fachpartner und Nachweis der Wartung. Wer die Inbetriebnahme Ihrer Anlage übernimmt, klären wir im Angebot. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
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
          { name: "Wolf", url: "/partner/wolf" },
        ]}
      />
      <ServiceHero
        title="Wolf Wärmepumpen & Heizungen"
        description="Die CHA-Monoblock wird laut WOLF in Mainburg entwickelt und gefertigt: natürliches Kältemittel R290, bis 70 °C Vorlauf ohne Heizstab und Effizienzklasse A+++. Wir beraten Sie, planen die Anlage mit Heizlastberechnung und bauen sie ein."
        benefits={benefits}
        icon={Award}
        badge="Made in Bavaria"
        imageSrc="/images/partners/wolf/hero.webp"
        imageAlt="WOLF CHA-Monoblock 07/10 Wärmepumpe, Außeneinheit"
        imageCredit="WOLF GmbH"
        logoSrc="/images/partners/wolf.svg"
      />

      <FeaturesSection
        title="Warum Wolf? CHA-Monoblock aus Mainburg"
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Aktuelle WOLF-Wärmepumpen</h2>

          <div className="space-y-8">
            {/* CHA Monoblock Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                CHA-Monoblock Wärmepumpen
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  CHA-Monoblock 07 und 10 – für Ein- und Zweifamilienhäuser
                </h4>
                <p className="text-slate-700 mb-3">
                  Luft-Wasser-Wärmepumpe in Monoblock-Bauweise: Der Kältekreis
                  sitzt im Außengerät.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>
                    Vorlauftemperatur: bis 70 °C im reinen
                    Wärmepumpenbetrieb, ohne Heizstab
                  </li>
                  <li>Kältemittel: R290 (Propan), GWP 0,02 laut WOLF</li>
                  <li>Effizienzklasse: A+++ bei 35 °C</li>
                  <li>9-kW-Elektroheizstab eingebaut, für Spitzenlasten</li>
                  <li>Aktive Kühlung möglich</li>
                  <li>PV-Eingang; Bedienung über WOLF Link und Smartset-App</li>
                </ul>
                <p className="text-slate-700">
                  Welche der beiden Größen passt, ergibt die
                  Heizlastberechnung für Ihr Haus.
                </p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  CHA-Monoblock 16/20 und 20/24 – für Mehrfamilienhäuser
                </h4>
                <p className="text-slate-700 mb-3">
                  Laut WOLF speziell für Mehrfamilienhäuser entwickelt.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Max. Heizleistung: 16,7 bzw. 19,6 kW bei −7 °C außen und
                    35 °C Vorlauf
                  </li>
                  <li>Vorlauftemperatur: bis 70 °C – auch für bestehende Heizkörper</li>
                  <li>Kaskade bis 100 kW</li>
                  <li>CHA-16/20: SG Ready und EEBus</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Wärmepumpen-Center CHC – Paket mit Warmwasserspeicher
                </h4>
                <p className="text-slate-700 mb-3">
                  CHA-Außengerät plus Inneneinheit mit Warmwasserspeicher –
                  laut WOLF für Ein- und Zweifamilienhäuser.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>CHC/200: Inneneinheit mit 180 Liter Warmwasserspeicher</li>
                  <li>CHC/300: Inneneinheit mit 280 Liter Warmwasserspeicher</li>
                </ul>
              </div>
            </div>

            {/* BWS-1 Erdwärme */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Erdwärme: BWS-1</h3>
              <p className="text-slate-700 mb-4">
                Die Sole-Wasser-Wärmepumpe BWS-1 holt die Wärme aus Erdsonden
                oder Erdkollektoren.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>Leistungsgrößen: 6, 8, 10, 12 oder 16 kW</li>
                <li>Vorlauftemperatur: bis 63 °C</li>
                <li>Effizienzklasse: A+++ bei 35 °C</li>
                <li>Kältemittel: R407C (fluoriertes Kältemittel)</li>
              </ul>
              <p className="text-sm text-slate-600">
                Hinweis: Nach der EU-F-Gase-Verordnung dürfen Kompakt- und
                Monoblock-Wärmepumpen bis 50 kW mit Kältemitteln ab einem GWP
                von 150 – dazu gehört R407C – ab 01.01.2027 grundsätzlich nicht mehr neu in
                Verkehr gebracht werden. Für eine Erdwärmeanlage beraten wir Sie
                deshalb auch zu Geräten mit natürlichem Kältemittel.
              </p>
            </div>

            {/* CGB-2 Brennwertgeräte */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                CGB-2 Gas-Brennwertthermen
              </h3>
              <p className="text-slate-700 mb-4">
                Wenn eine Wärmepumpe in Ihrem Haus (noch) nicht passt, beraten
                wir auch zu Gas-Brennwertgeräten von WOLF.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                <li>
                  CGB-2 in mehreren Leistungsgrößen (CGB-2-14, -20 und -24),
                  auch als Kombigerät CGB-2K
                </li>
                <li>
                  Normnutzungsgrad bei 40/30 °C: bis 110 % (Hi) bzw. 99 % (Hs)
                </li>
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

      {/* Why HeizCenter for Wolf */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Wolf mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Wir beraten Sie zu WOLF-Wärmepumpen, planen die Anlage mit
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
