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
  CheckCircle2,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 4 (Stand 24.10.2026).
// Testsieger-Note (2,3) beruht bisher auf der Buderus-Seite (Audit, Abschnitt H) – Heft 8/2024 vor dem Deploy gegenlesen
// (Note, Modellbezeichnung, Testfeld). Kältemittel der WLW186i MBE+ AR ist nicht belegt – nicht behaupten.
// WIEDERVORLAGE Ende 01/2027: Testsieger-Hinweis (test 8/2024) entfernen – Werbung mit
// Testergebnissen i. d. R. nur 2,5 Jahre nach Veröffentlichung (Audit, Abschnitt H).

export const metadata: Metadata = {
  title: "Buderus Wärmepumpen: Logatherm WLW186i & mehr | HeizCenter",
  description:
    "Buderus Logatherm Wärmepumpen mit natürlichem Kältemittel R290 – unerhört leise und mit bis zu 75 °C Vorlauf. Beratung, Planung und Einbau durch HeizCenter in der Region Augsburg, Ulm und Memmingen.",
  alternates: {
    canonical: getCanonicalUrl("/partner/buderus"),
  },
  keywords: [
    "Buderus",
    "Logatherm",
    "WLW186i",
    "WSW186i",
    "Logamax",
    "Wärmepumpe",
    "R290",
    "Augsburg",
    "Ulm",
  ],
};

const benefits = [
  "Logatherm WLW186i-10 AR E: Testsieger bei Stiftung Warentest, test 8/2024, Qualitätsurteil GUT (2,3) – www.test.de",
  "Unerhört leise: ab 25,5 dB(A) Schalldruck in 3 m im geräuschreduzierten Betrieb (laut Buderus)",
  "Bis 75 °C Vorlauf mit der Logatherm WLW186i AR",
  "Natürliches Kältemittel R290 bei WLW186i AR, WLW176i AR und WSW186i",
  "Buderus: gegründet 1731, seit 2003 Teil der Bosch-Gruppe",
  "Beratung, Einbau und Wartung durch HeizCenter",
];

const features = [
  {
    title: "WLW186i-10 AR E: Testsieger test 8/2024",
    description:
      "Die Logatherm WLW186i-10 AR E war Testsieger im Wärmepumpentest der Stiftung Warentest: test 8/2024, Qualitätsurteil GUT (2,3) – www.test.de. Das Urteil gilt für dieses getestete Modell.",
    icon: Award,
  },
  {
    title: "Unerhört leise",
    description:
      "Buderus setzt auf die SILENT-plus-Technik: Im geräuschreduzierten Betrieb nennt Buderus ab 25,5 dB(A) Schalldruck in 3 m Abstand (4-kW-Gerät), beim 10-kW-Gerät 31,2 dB(A).",
    icon: Volume2,
  },
  {
    title: "Bis 75 °C Vorlauf",
    description:
      "Die Logatherm WLW186i AR liefert bis 75 °C, bei −10 °C außen noch 65 °C – passend für viele Altbauten mit Heizkörpern. Ob Ihre Heizkörper reichen, hängt von deren Größe und vom Wärmebedarf der Räume ab.",
    icon: Thermometer,
  },
  {
    title: "Effizienzklasse A+++",
    description:
      "WLW186i AR: Effizienzklasse A+++ und SCOP bis 4,8 bei 35 °C; die größere WLW186i MBE+ AR erreicht laut Buderus einen SCOP bis 5,4 (35 °C). Laut Buderus kommen bis zu 75 % der Wärme aus der Umwelt, nur 25 % aus Strom.",
    icon: Zap,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Propan (R290) mit einem Treibhauspotenzial nahe null – bei den Luft-Wasser-Wärmepumpen WLW186i AR und WLW176i AR sowie bei der Sole-Wasser-Wärmepumpe WSW186i.",
    icon: Leaf,
  },
  {
    title: "Seit 1731",
    description:
      "Buderus wurde 1731 gegründet und gehört seit 2003 zur Bosch-Gruppe, heute zur Bosch Home Comfort Group.",
    icon: CheckCircle2,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Buderus-Wärmepumpen gibt es aktuell?",
    answer:
      "Zum Programm gehören unter anderem die Luft-Wasser-Wärmepumpen Logatherm WLW186i AR (bis 75 °C), WLW186i MBE+ AR (für größere Häuser) und WLW176i AR (Neubau, bis 60 °C) sowie die Sole-Wasser-Wärmepumpe WSW186i mit R290. Wie groß das Gerät sein muss, bestimmt vor allem die Heizlast Ihres Hauses.",
  },
  {
    question: "Was kostet eine Buderus Logatherm?",
    answer:
      "Das hängt vor allem von Ihrem Haus ab: Heizlast, Aufstellort, Heizkörper oder Fußbodenheizung, Warmwasser und Elektroanschluss. Typische Kostenpositionen erklärt unser Ratgeber „Wärmepumpe Kosten 2026“ im Blog. Ihren Preis nennen wir im Angebot. Welcher Zuschuss möglich ist, steht auf unserer Förderseite.",
  },
  {
    question: "Wie hat die WLW186i bei Stiftung Warentest abgeschnitten?",
    answer:
      "Im Wärmepumpentest 8/2024 der Stiftung Warentest wurde die Logatherm WLW186i-10 AR E mit dem Qualitätsurteil GUT (2,3) Testsieger (www.test.de). Das Urteil gilt für dieses getestete Modell. Technische Werte wie Schall und SCOP auf dieser Seite stammen aus den Herstellerangaben, nicht aus dem Test.",
  },
  {
    question: "Wie leise ist eine Buderus Logatherm?",
    answer:
      "Buderus nennt für die WLW186i AR im geräuschreduzierten Betrieb einen Schalldruck von 25,5 bis 34,9 dB(A) in 3 m Abstand, je nach Größe; das 4-kW-Gerät liegt bei 25,5 dB(A), das 10-kW-Gerät bei 31,2 dB(A). Die WLW176i nutzt dieselben Außeneinheiten. Wie laut es an Ihrer Grundstücksgrenze wird, hängt vor allem vom Aufstellort ab – den legen wir bei der Planung mit Ihnen fest.",
  },
  {
    question: "Eignet sich Buderus für einen Altbau mit Heizkörpern?",
    answer:
      "Die Logatherm WLW186i AR liefert bis 75 °C Vorlauf, bei −10 °C außen noch 65 °C – damit passt sie zu vielen Altbauten mit Heizkörpern. Ob Ihre vorhandenen Heizkörper reichen, hängt davon ab, wie viel Wärme jeder Raum braucht.",
  },
  {
    question: "Was ist der Unterschied zwischen WLW176i und WLW186i?",
    answer:
      "Beide nutzen dieselben Außeneinheiten. Die WLW176i schafft bis 60 °C Vorlauf und passt in den Neubau, die WLW186i bis 75 °C – deshalb empfehlen wir sie für Altbauten mit Heizkörpern.",
  },
  {
    question: "Welche Garantie gibt Buderus?",
    answer:
      "Buderus gibt 5 Jahre Systemgarantie auf abgestimmte Systempakete, wenn die Anlage von einem Fachhandwerker eingebaut, innerhalb von 6 Monaten registriert und jährlich gewartet wird. Die vollständigen Bedingungen stehen auf buderus.de. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
  },
  {
    question: "Kann ich Buderus mit Photovoltaik verbinden?",
    answer:
      "Ja, eine Kopplung mit Photovoltaik und ein Energiemanagement sind über den MyEnergyMaster möglich. Bedient wird die Wärmepumpe per MyBuderus-App. Welche Funktionen Ihr Modell genau bietet, klären wir in der Beratung.",
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
          { name: "Buderus", url: "/partner/buderus" },
        ]}
      />
      <ServiceHero
        title="Buderus Wärmepumpen & Heizungen"
        description="Unerhört leise Logatherm-Wärmepumpen mit natürlichem Kältemittel R290 – mit bis zu 75 °C Vorlauf auch für Altbauten mit Heizkörpern. Wir beraten Sie, planen die Anlage mit Ihnen und bauen sie ein."
        benefits={benefits}
        icon={Award}
        badge="Seit 1731"
        imageSrc="/images/partners/buderus/hero.webp"
        imageAlt="Buderus Logatherm WLW186i AR Wärmepumpe an einem Neubau"
        imageCredit="Bosch Thermotechnik GmbH, Buderus Deutschland"
        logoSrc="/images/partners/buderus.svg"
      />

      <FeaturesSection
        title="Warum Buderus? Unerhört leise Wärmepumpen"
        features={features}
      />

      {/* Product Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Aktuelle Buderus-Wärmepumpen
          </h2>

          <div className="space-y-8">
            {/* Logatherm Wärmepumpen */}
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">
                Logatherm Wärmepumpen
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WLW186i AR – leise, bis 75 °C
                </h4>
                <p className="text-slate-700 mb-3">
                  Luft-Wasser-Wärmepumpe in Monoblock-Bauweise für die
                  Außenaufstellung. Im Wärmepumpentest der Stiftung Warentest
                  (test 8/2024) erhielt die WLW186i-10 AR E das
                  Qualitätsurteil GUT (2,3) und wurde Testsieger – www.test.de.
                  Das Urteil gilt für dieses Modell.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Max. Heizleistung: 3,9 bis 11,6 kW bei −7 °C außen und
                    35 °C Vorlauf (Größen 4 bis 12)
                  </li>
                  <li>Vorlauftemperatur: bis 75 °C, bei −10 °C außen 65 °C</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>SCOP bis 4,8 bei 35 °C, Effizienzklasse A+++</li>
                  <li>
                    Schalldruck in 3 m im geräuschreduzierten Betrieb: 25,5 bis
                    34,9 dB(A) je nach Größe (10-kW-Gerät: 31,2 dB(A))
                  </li>
                  <li>Aktive Kühlung möglich</li>
                  <li>Bedienung per MyBuderus-App</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WLW186i MBE+ AR – für größere Häuser
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Größen 11, 13 und 15</li>
                  <li>Vorlauftemperatur: bis 75 °C</li>
                  <li>SCOP bis 5,4 bei 35 °C</li>
                </ul>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WLW176i AR – für den Neubau
                </h4>
                <p className="text-slate-700 mb-3">
                  Laut Buderus besonders für Ein- und Zweifamilienhäuser im
                  Neubau.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>
                    Gleiche Außeneinheiten wie die WLW186i: max. 3,9 bis 11,6 kW
                  </li>
                  <li>Vorlauftemperatur: bis 60 °C</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>SCOP bis 4,8 bei 35 °C</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">
                  Logatherm WSW186i – Erdwärme mit R290
                </h4>
                <p className="text-slate-700 mb-3">
                  Sole-Wasser-Wärmepumpe: Die Wärme kommt aus Erdsonden oder
                  Erdkollektoren, ein Außengerät gibt es nicht.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Leistungsgrößen: 6, 8, 13 und 17 kW</li>
                  <li>Vorlauftemperatur: bis 75 °C</li>
                  <li>Kältemittel: R290 (Propan)</li>
                </ul>
              </div>
            </div>

            {/* Logamax Brennwertgeräte */}
            <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                Logamax Gas-Brennwertgeräte
              </h3>
              <p className="text-slate-700 mb-4">
                Wenn eine Wärmepumpe in Ihrem Haus (noch) nicht passt, beraten
                wir auch zu Gas-Brennwertgeräten von Buderus.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                <li>
                  Logamax plus GB172i: bis 25 kW, Raumheizungs-Energieeffizienz
                  94 %
                </li>
                <li>
                  Logamax plus GB192i.2: 2,9 bis 49,9 kW je nach Ausführung,
                  Raumheizungs-Energieeffizienz 94 %, Bedienung am BC400 oder
                  per MyBuderus-App
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
                . Ihren Preis nennen wir im Angebot.
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

      {/* Why HeizCenter for Buderus */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Warum Buderus mit HeizCenter?
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Wir beraten Sie zu Buderus-Wärmepumpen und übernehmen den
                Einbau. Weil wir Wärmepumpen mehrerer Hersteller einbauen,
                richtet sich unsere Empfehlung nach Ihrem Haus – nicht nach
                einem Katalog.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                    Vor dem Einbau
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Beratung vor Ort</li>
                    <li>✓ Auswahl von Gerät und Größe</li>
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
