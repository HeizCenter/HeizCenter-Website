import { Metadata } from "next";
import Image from "next/image";
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
  Volume2,
  Leaf,
  Snowflake,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDERUNG, FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 8 (Stand 24.10.2026).
// Förderwerte ausschließlich aus src/lib/config/foerderung.ts (KfW 458).

const euro = (wert: number) => `${wert.toLocaleString("de-DE")} €`;
const einkommensStufen = FOERDERUNG.einkommen
  .map((stufe) => `${Math.round(stufe.satz * 100)} % bis ${euro(stufe.bis)}`)
  .join(", ");
const kindZuschlag = euro(FOERDERUNG.kindZuschlag);

export const metadata: Metadata = {
  title: "ZEWOTHERM LAMBDA Wärmepumpe | HeizCenter",
  description:
    "ZEWOTHERM Wärmepumpe LAMBDA: Luft-Wasser mit patentiertem 3K-Prozess, laut Hersteller SCOP bis 6,1 bei 35 °C (EN 14825), Vorlauf bis 70 °C ohne Heizstab, R290. Beratung, Planung und Einbau durch HeizCenter in Bayern & Baden-Württemberg.",
  keywords: [
    "ZEWOTHERM",
    "LAMBDA",
    "Wärmepumpe",
    "Luft-Wasser-Wärmepumpe",
    "3K-Prozess",
    "R290",
    "EU10L",
    "EU13L",
    "EU35L",
    "HeizCenter",
  ],
  alternates: {
    canonical: getCanonicalUrl("/partner/zewotherm"),
  },
};

const benefits = [
  "Entwickelt von LAMBDA (Tirol), in Lizenz gefertigt von ZEWOTHERM in Remagen",
  "Patentierter 3K-Prozess für effiziente Abtauzyklen",
  "Vorlauftemperatur bis 70 °C ohne Heizstab – auch für Altbauten mit Heizkörpern",
  "SCOP bis 6,1 bei 35 °C, 4,5 bei 55 °C (EN 14825, Herstellerangabe)",
  "Schallleistung ab 44 dB(A) nach EN 12102 (EU13L, laut ZEWOTHERM)",
  "Natürliches Kältemittel R290, Treibhauspotenzial nahe null",
];

const features = [
  {
    title: "Patentierter 3K-Prozess",
    description:
      "Das patentierte Verfahren von LAMBDA sorgt laut ZEWOTHERM für besonders effiziente Abtauzyklen, einen optimierten Kältemittelkreislauf und geringe Stillstandsverluste.",
    icon: Award,
  },
  {
    title: "Bis 70 °C ohne Heizstab",
    description:
      "Bis 70 °C Vorlauftemperatur ohne Zusatz-Heizstab – damit kommt die LAMBDA auch für Altbauten mit Heizkörpern in Frage. Ob Ihre Heizkörper reichen, hängt von ihrer Größe und vom Wärmebedarf der einzelnen Räume ab.",
    icon: Thermometer,
  },
  {
    title: "Bis zu 30 % weniger Strom",
    description:
      "Laut ZEWOTHERM verbraucht die LAMBDA bis zu 30 % weniger Strom als andere A+++-Hocheffizienz-Wärmepumpen (Herstellerangabe).",
    icon: Zap,
  },
  {
    title: "Leiser Betrieb",
    description:
      "Schallleistung nach EN 12102 laut ZEWOTHERM: 44 dB(A) bei der EU13L, 45 dB(A) bei der EU10L, 46 dB(A) bei der EU15L und 50 dB(A) bei der EU20L.",
    icon: Volume2,
  },
  {
    title: "Heizen & Kühlen",
    description:
      "Kühlen ist laut Hersteller serienmäßig möglich – im Winter heizt die LAMBDA, im Sommer kann sie kühlen.",
    icon: Snowflake,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Propan (R290) hat ein Treibhauspotenzial nahe null und fällt als natürliches Kältemittel nicht unter die Verbote der EU-F-Gase-Verordnung.",
    icon: Leaf,
  },
  {
    title: "Verschlüsselter Fernzugriff",
    description:
      "Über das Fernwartungsportal des Herstellers lässt sich die Anlage verschlüsselt aus der Ferne überwachen (Herstellerangabe).",
    icon: Settings,
  },
  {
    title: "EHPA-Gütesiegel & förderfähig",
    description:
      "Die LAMBDA-Baureihe trägt das EHPA-Gütesiegel (Nr. AT-HP-01257) und steht laut Hersteller auf der Liste förderfähiger Wärmepumpen (KfW 458, bestehende Wohngebäude).",
    icon: Shield,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche LAMBDA-Modelle gibt es?",
    answer:
      "EU10L, EU13L und EU15L sind laut ZEWOTHERM kompakte Luft/Wasser-Wärmepumpen für Ein- und Zweifamilienhäuser mit 9,2 bis 15,4 kW Heizleistung bei −10 °C. Die EU20L (bis 21 kW) ist für größere Wohngebäude oder anspruchsvollere Sanierungen gedacht, die 2026 eingeführte EU35L (bis 33 kW) für große Anlagen und Kaskaden. Welches Modell passt, hängt von der Heizlast Ihres Gebäudes ab.",
  },
  {
    question: "Was ist der 3K-Prozess?",
    answer:
      "Der 3K-Prozess ist ein patentiertes Verfahren von LAMBDA. Laut ZEWOTHERM sorgt er für besonders effiziente Abtauzyklen, einen optimierten Kältemittelkreislauf und geringe Stillstandsverluste. Der Hersteller nennt einen SCOP bis 6,1 bei 35 °C (Fußbodenheizung) und 4,5 bei 55 °C (Heizkörper), jeweils nach EN 14825.",
  },
  {
    question: "Eignet sich die LAMBDA auch für Altbau?",
    answer:
      "Ja, mit bis zu 70 °C Vorlauf ohne Heizstab kommt sie auch für Altbauten mit Heizkörpern in Frage. Ob Ihre vorhandenen Heizkörper reichen oder einzelne getauscht werden sollten, hängt davon ab, wie viel Wärme jeder Raum braucht.",
  },
  {
    question: "Wie laut ist die ZEWOTHERM LAMBDA?",
    answer:
      "ZEWOTHERM nennt Schallleistungen nach EN 12102 von 44 dB(A) (EU13L), 45 dB(A) (EU10L), 46 dB(A) (EU15L) und 50 dB(A) (EU20L). Wie laut es an Ihrer Grundstücksgrenze wird, hängt vor allem vom Aufstellort ab – den legen wir bei der Planung mit Ihnen fest.",
  },
  {
    question: "Welche Förderung gibt es für die LAMBDA Wärmepumpe?",
    answer: `Die LAMBDA steht laut Hersteller auf der Liste förderfähiger Wärmepumpen. Für den Einbau in ein bestehendes Wohngebäude gibt es über die KfW-Heizungsförderung (Programm 458) ${FOERDER_TEXT.grund} Grundförderung. Selbstnutzende Eigentümer erhalten zusätzlich den Klimageschwindigkeitsbonus beim vorzeitigen Tausch funktionsfähiger Öl-, Kohle-, Gasetagen- und Nachtspeicherheizungen (ohne Mindestalter) sowie von Gas- und Biomasseheizungen ab 20 Jahren Alter: ${FOERDER_TEXT.klimaHinweis}; für Anträge ab ${FOERDERUNG.klimaEntfaelltAb} entfällt er. Dazu kommt für Selbstnutzer ein Einkommensbonus nach zu versteuerndem Haushaltsjahreseinkommen: ${einkommensStufen} (mit minderjährigem, kindergeldberechtigtem Kind steigen die Grenzen um ${kindZuschlag}). Insgesamt gilt eine Obergrenze von ${FOERDER_TEXT.maxStandard}; ${FOERDER_TEXT.maxBedingung}. Ergänzend ist der KfW-Ergänzungskredit 358/359 möglich. Den Zuschuss beantragen Sie als Eigentümer selbst bei der KfW – wir beraten Sie dazu.`,
  },
  {
    question: "Welches Kältemittel nutzt die LAMBDA?",
    answer:
      "Die LAMBDA arbeitet mit R290 (Propan), einem natürlichen Kältemittel mit einem Treibhauspotenzial nahe null. Als natürliches Kältemittel fällt R290 nicht unter die Verbote der EU-F-Gase-Verordnung, die fluorierte Kältemittel schrittweise einschränkt.",
  },
  {
    question: "Kann die LAMBDA auch kühlen?",
    answer:
      "Ja, laut Hersteller ist Kühlen serienmäßig möglich. Welche Kühl-Variante (über Flächenheizung oder Gebläsekonvektor) für Sie sinnvoll ist, klären wir im Beratungsgespräch.",
  },
  {
    question: "Welche Garantie bietet ZEWOTHERM?",
    answer:
      "ZEWOTHERM bietet gegen Aufpreis 5 Jahre Garantie auf die Hauptkomponenten. Voraussetzungen laut ZEWOTHERM sind unter anderem die Anbindung an das Fernwartungsportal, eine jährliche Wartung mit Protokoll und die Inbetriebnahme durch ZEWOTHERM oder einen Fachpartner. Ob die Garantie für Ihre Anlage in Frage kommt, klären wir im Angebot. Für unsere Montagearbeiten gilt die gesetzliche Gewährleistung.",
  },
];

export default function ZewothermPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "ZEWOTHERM", url: "/partner/zewotherm" },
        ]}
      />
      <ServiceHero
        title="ZEWOTHERM Wärmepumpe LAMBDA"
        description="Die Wärmepumpe LAMBDA wird von der LAMBDA Wärmepumpen GmbH in Tirol entwickelt und von ZEWOTHERM in Remagen in Lizenz gefertigt. Mit dem patentierten 3K-Prozess nennt der Hersteller einen SCOP bis 6,1 bei 35 °C; die Vorlauftemperatur reicht bis 70 °C ohne Heizstab – für Neubau und Altbau-Sanierung."
        benefits={benefits}
        icon={Award}
        badge="3K-Prozess"
        imageSrc="/images/partners/zewotherm/lambda-hero.jpg"
        imageAlt="ZEWOTHERM Wärmepumpe LAMBDA EU35L vor einem Mehrfamilienhaus (Herstellerbild)"
        logoSrc="/images/partners/zewotherm.svg"
      />

      <FeaturesSection
        title="Warum ZEWOTHERM LAMBDA? Effizient, leise, bis 70 °C"
        features={features}
      />

      {/* Intro / Story Block */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Nachhaltige Wärme – leise, smart und leistungsstark
          </h2>
          <p className="text-slate-700 mb-10 text-center max-w-3xl mx-auto">
            Die ZEWOTHERM Wärmepumpe LAMBDA ist eine Luft-Wasser-Wärmepumpe in
            Monoblock-Bauweise: mit niedrigem Stromverbrauch, leisem Betrieb und
            Vorlauftemperaturen bis 70 °C – für den Neubau ebenso wie für die
            Altbau-Sanierung.
          </p>

          {/* Stats Strip — Herstellerangaben mit Bedingung */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0F5B78] text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">bis 6,1</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                SCOP bei 35 °C
              </div>
              <p className="text-xs mt-2 opacity-80">
                EN 14825, Herstellerangabe; 4,5 bei 55 °C
              </p>
            </div>
            <div className="bg-[#0F5B78] text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">70 °C</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Vorlauftemperatur
              </div>
              <p className="text-xs mt-2 opacity-80">Ohne Heizstab</p>
            </div>
            <div className="bg-[#0F5B78] text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">R290</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Natürliches Kältemittel
              </div>
              <p className="text-xs mt-2 opacity-80">
                Treibhauspotenzial nahe null
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modellübersicht */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Für jedes Gebäude die passende Leistungsklasse
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Vom Ein- und Zweifamilienhaus bis zu großen Wohngebäuden – für
              große Anlagen lässt sich die EU35L kaskadieren.
            </p>

            <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] mb-12 rounded-lg overflow-hidden bg-white p-4">
              <Image
                src="/images/partners/zewotherm/lambda-modelle.png"
                alt="ZEWOTHERM LAMBDA Modellübersicht: EU10L, EU13L, EU15L, EU20L, EU35L"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">
                  EU10L / EU13L
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Ein- und Zweifamilienhaus
                </p>
                <p className="text-slate-700">
                  Kompakte Luft/Wasser-Wärmepumpen für Ein- und
                  Zweifamilienhäuser. Welche Größe passt, richtet sich nach der
                  Heizleistung, die Ihr Haus braucht.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">EU15L</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Größere Ein- und Zweifamilienhäuser
                </p>
                <p className="text-slate-700">
                  Die stärkste der drei kompakten Größen. EU10L bis EU15L leisten
                  laut ZEWOTHERM 9,2 bis 15,4 kW bei −10 °C.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">EU20L</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Größere Wohngebäude
                </p>
                <p className="text-slate-700">
                  Bis 21 kW – laut ZEWOTHERM für größere Wohngebäude oder
                  anspruchsvollere Sanierungen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200 lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">
                      EU35L – neu seit 2026
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Das größte Modell der LAMBDA-Serie mit bis zu 33 kW,
                      ausgelegt für große Anlagen und Kaskaden.
                    </p>
                    <p className="text-sm text-slate-600">
                      Laut ZEWOTHERM lassen sich mit kaskadierten EU35L bis zu
                      200 Wohneinheiten versorgen.
                    </p>
                  </div>
                  <div className="relative aspect-square max-h-48 md:max-h-72 mx-auto w-full">
                    <Image
                      src="/images/partners/zewotherm/lambda-eu35l.png"
                      alt="ZEWOTHERM LAMBDA EU35L"
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hydraulik & System */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[3/4] max-h-[500px] mx-auto w-full">
              <Image
                src="/images/partners/zewotherm/hydraulikstation.png"
                alt="ZEWOTHERM Hydraulikstation (Zubehör) für die LAMBDA Wärmepumpe"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Monoblock mit passendem Zubehör
              </h2>
              <p className="text-slate-700 mb-4">
                Die LAMBDA ist eine Monoblock-Wärmepumpe: Der Kältekreis sitzt im
                Außengerät, im Haus wird nicht mit Kältemittel gearbeitet.
                Passende Hydraulik – die ZEWO PowerBox LAMBDA oder den ZEWO ECO
                Kombispeicher – gibt es als Zubehör.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Monoblock-Bauweise – keine Kältemittelarbeiten im Haus</li>
                <li>✓ Hydraulik als Zubehör: PowerBox LAMBDA oder ECO Kombispeicher</li>
                <li>✓ Verschlüsselter Fernzugriff über das Fernwartungsportal (Herstellerangabe)</li>
                <li>✓ Heizen und Kühlen im selben System</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Förderung */}
      <section className="bg-[#0F5B78]/5 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Bis zu {FOERDER_TEXT.maxStandard} Förderung – mit niedrigem Einkommen
              bis zu {FOERDER_TEXT.max}
            </h2>
            <p className="text-slate-700 text-center mb-10 max-w-2xl mx-auto">
              Der Einbau einer Wärmepumpe in ein bestehendes Wohngebäude wird
              über die KfW-Heizungsförderung (BEG EM, Programm 458) bezuschusst.
              Maßstab sind die förderfähigen Kosten: {FOERDER_TEXT.maxHinweis}.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">
                  {FOERDER_TEXT.grund}
                </div>
                <h3 className="font-bold mb-1">Grundförderung</h3>
                <p className="text-sm text-slate-600">
                  Für den Einbau einer Wärmepumpe in ein bestehendes
                  Wohngebäude.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">
                  +{FOERDER_TEXT.klima}
                </div>
                <h3 className="font-bold mb-1">Klimageschwindigkeitsbonus</h3>
                <p className="text-sm text-slate-600">
                  Beim vorzeitigen Tausch funktionsfähiger Öl-, Kohle-,
                  Gasetagen- und Nachtspeicherheizungen sowie Gas- und
                  Biomasseheizungen ab 20 Jahren. Für Selbstnutzer, bei Antrag
                  bis {FOERDERUNG.klimaGueltigBis}, danach halbjährlich sinkend.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">
                  bis +{FOERDER_TEXT.einkommenMax}
                </div>
                <h3 className="font-bold mb-1">Einkommensbonus</h3>
                <p className="text-sm text-slate-600">
                  Für selbstnutzende Eigentümer: {einkommensStufen} zu
                  versteuerndem Haushaltsjahreseinkommen; mit minderjährigem
                  Kind steigen die Grenzen um {kindZuschlag}.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold mb-2">Ergänzungskredit KfW 358/359</h3>
              <p className="text-sm text-slate-700">
                Zinsgünstiger Kredit bis 120.000 € je Wohneinheit für die
                Kosten laut Zuschusszusage. Selbstnutzer mit einem
                Haushaltseinkommen bis 90.000 € erhalten als
                „Ergänzungskredit Plus“ (358) einen zusätzlichen Zinsvorteil.
                Beantragt wird der Kredit über Ihre Bank.
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Hinweis: Förderbedingungen können sich ändern. Eine verbindliche
                Auskunft erhalten Sie über die KfW
                oder im Beratungsgespräch mit uns.
              </p>
            </div>

            {/* Mid-Page CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/kontakt"
                className="inline-block bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-md"
              >
                Jetzt Förderung für Ihre LAMBDA prüfen lassen
              </Link>
              <p className="text-sm text-slate-600 mt-3">
                Wir rechnen Ihnen vor, welcher Zuschuss für Ihr Vorhaben in
                Frage kommt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum HeizCenter für ZEWOTHERM */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Warum ZEWOTHERM mit HeizCenter?
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Wir beraten Sie zur LAMBDA und bauen sie ein. Den Zuschuss der KfW
              beantragen Sie als Eigentümer selbst im Portal „Meine KfW“ – wir
              sagen Ihnen, welche Unterlagen Sie dafür brauchen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                  Vor dem Einbau
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Beratung vor Ort in der Region</li>
                  <li>✓ Auswahl des LAMBDA-Modells</li>
                  <li>✓ Planung des Aufstellorts</li>
                  <li>✓ Förderberatung KfW 458 &amp; Ergänzungskredit 358/359</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
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
              Wir bauen Wärmepumpen mehrerer Hersteller ein. Ob die LAMBDA oder
              ein anderes Gerät besser zu Ihrem Haus passt, sagen wir Ihnen
              offen.
            </p>
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
              href="/foerderung"
              className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <h4 className="font-semibold text-[#0F5B78] mb-2">
                Förderung 2026
              </h4>
              <p className="text-sm text-slate-600">
                BEG, KfW &amp; aktuelle Boni im Überblick
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
