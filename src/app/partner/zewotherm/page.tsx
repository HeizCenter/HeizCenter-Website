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
import { CONTACT } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "ZEWOTHERM LAMBDA Wärmepumpe | HeizCenter Partner",
  description:
    "ZEWOTHERM Wärmepumpe LAMBDA: Luft-Wasser mit patentiertem 3K-Prozess, SCOP bis 6,1 (EN 14825), Vorlauf bis 70 °C, R290. Installation durch HeizCenter in Bayern & Baden-Württemberg.",
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
  "Hersteller: ZEWOTHERM Heating GmbH, Sitz Remagen (Rheinland-Pfalz)",
  "Patentierter 3K-Prozess für maximale Energieausbeute",
  "Vorlauftemperatur bis 70 °C – ohne Heizstab, auch im Altbau",
  "SCOP bis 6,1 (gem. EN 14825) – Spitzenwert seiner Klasse",
  "Flüsterleiser Betrieb (gemessen nach EN 12102)",
  "Natürliches Kältemittel R290 (GWP 3) – zukunftssicher",
];

const features = [
  {
    title: "Patentierter 3K-Prozess",
    description:
      "Der patentierte 3K-Prozess arbeitet mit besonders kleiner Temperaturspreizung: effiziente Abtauzyklen, optimierter Kältekreis und geringe Stillstandsverluste – Grundlage für Spitzen-Effizienzwerte.",
    icon: Award,
  },
  {
    title: "Hohe Vorlauftemperatur",
    description:
      "Bis 70 °C Vorlauftemperatur – ganz ohne Zusatz-Heizstab. Damit ist die LAMBDA auch für Altbau-Sanierungen mit Heizkörpern geeignet.",
    icon: Thermometer,
  },
  {
    title: "Bis zu 30 % weniger Stromverbrauch",
    description:
      "Im Vergleich zu anderen Hocheffizienz-Wärmepumpen mit A+++ Label verbraucht die LAMBDA bis zu 30 % weniger Strom (Herstellerangabe) – das senkt die Stromkosten über die gesamte Lebensdauer spürbar.",
    icon: Zap,
  },
  {
    title: "Flüsterleiser Betrieb",
    description:
      "Eine der leisesten Luft-Kompakt-Wärmepumpenserien am Markt (gemessen nach EN 12102). Ideal für dicht bebaute Wohngebiete.",
    icon: Volume2,
  },
  {
    title: "Heizen & Kühlen",
    description:
      "Komfort über das ganze Jahr: Im Winter heizt die LAMBDA effizient, im Sommer kann sie aktiv kühlen – ein System für alle Jahreszeiten.",
    icon: Snowflake,
  },
  {
    title: "Natürliches Kältemittel R290",
    description:
      "Propan (R290) hat einen GWP von nur 3 – klimafreundlich und zukunftssicher gegenüber kommenden F-Gase-Verschärfungen.",
    icon: Leaf,
  },
  {
    title: "EMS mit VPN-Fernzugriff",
    description:
      "Integriertes Energiemanagement-System mit verschlüsseltem Fernzugriff per VPN – smartes Monitoring und schnelle Diagnose im Servicefall.",
    icon: Settings,
  },
  {
    title: "Zertifiziert & förderfähig",
    description:
      "Mit EHPA-Gütesiegel zertifiziert und voll BEG-förderfähig. Durch R290 zusätzlich +5 % Effizienzbonus möglich.",
    icon: Shield,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche LAMBDA-Modelle installiert HeizCenter?",
    answer:
      "Wir installieren die komplette LAMBDA-Serie: EU10L (kompakt für kleinere und mittlere Neubauten), EU13L (größere Wohnhäuser, modernisierte Altbauten), EU15L und EU20L (Mehrfamilienhäuser und Gewerbe ohne aufwendige Kaskadierung) sowie EU35L für Großobjekte. Welches Modell zu Ihrem Gebäude passt, ermitteln wir per Heizlastberechnung.",
  },
  {
    question: "Was ist der 3K-Prozess von ZEWOTHERM?",
    answer:
      "Der 3K-Prozess ist eine von ZEWOTHERM patentierte Verfahrenstechnik mit besonders kleiner Temperaturspreizung. Sie sorgt für effiziente Abtauzyklen, einen optimierten Kältekreis und geringe Stillstandsverluste. Das Ergebnis sind Spitzen-SCOP-Werte bis 6,1 (gemessen nach EN 14825) – einer der besten Werte für Luft-Wasser-Wärmepumpen am Markt.",
  },
  {
    question: "Eignet sich die LAMBDA auch für Altbau?",
    answer:
      "Ja. Mit Vorlauftemperaturen bis 70 °C kommt die LAMBDA auch in unsanierten Altbauten ohne zusätzlichen Heizstab aus. Bestehende Heizkörper können in vielen Fällen weiter genutzt werden – ein aufwendiger Tausch ist meist nicht nötig.",
  },
  {
    question: "Wie laut ist die ZEWOTHERM LAMBDA?",
    answer:
      "Die LAMBDA gehört zu den leisesten Luft-Kompakt-Wärmepumpenserien am Markt (Messung nach EN 12102). Damit ist sie auch für eng bebaute Wohngebiete und kleine Grundstücke geeignet, wo Schallschutz besonders wichtig ist.",
  },
  {
    question: "Welche Förderung gibt es für die LAMBDA Wärmepumpe?",
    answer:
      "Die LAMBDA ist voll BEG-förderfähig (BAFA-Zuschuss BEG EM): 30 % Grundförderung beim Heizungstausch; +20 % Klimageschwindigkeitsbonus beim vorzeitigen Tausch funktionsfähiger Öl-, Kohle-, Gasetagen- und Nachtspeicherheizungen (ohne Mindestalter) sowie Gas- und Biomasseheizungen ab 20 Jahren Alter; +30 % Einkommensbonus bei zu versteuerndem Haushaltseinkommen unter 40.000 €; +5 % Effizienzbonus durch das natürliche Kältemittel R290. Maximale Gesamtförderung: 70 %. Ergänzend ist der KfW-Kredit 358/359 (Heizungstausch-Ergänzungskredit) möglich. Wir beraten Sie kostenlos zur optimalen Förderkombination.",
  },
  {
    question: "Welches Kältemittel nutzt die LAMBDA und ist es zukunftssicher?",
    answer:
      "Die LAMBDA arbeitet mit R290 (Propan), einem natürlichen Kältemittel mit GWP von nur 3. Damit ist sie unabhängig von den kommenden Verschärfungen der F-Gase-Verordnung und langfristig zukunftssicher.",
  },
  {
    question: "Kann die LAMBDA auch kühlen?",
    answer:
      "Ja, die LAMBDA bietet laut Hersteller Heizen und Kühlen in einem System – Komfort über das ganze Jahr ohne separate Klimaanlage. Welche Kühl-Variante (über Flächenheizung oder Gebläsekonvektor) für Sie sinnvoll ist, klären wir im Beratungsgespräch.",
  },
  {
    question: "Welche Garantie bietet ZEWOTHERM?",
    answer:
      "Laut Hersteller sind auf Wunsch bis zu 5 Jahre Garantie möglich. Zusätzlich bietet ZEWOTHERM ein smartes System-Monitoring zur transparenten Überwachung Ihrer Anlage. Als Fachpartner kümmern wir uns für Sie um Registrierung, Wartung und ggf. Garantieverlängerung.",
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
        description="Premium-Wärmepumpentechnik der ZEWOTHERM Heating GmbH aus Remagen. Eine der effizientesten Luft-Wasser-Wärmepumpen am Markt – patentierter 3K-Prozess, SCOP bis 6,1 und Vorlauftemperaturen bis 70 °C, für Neubau und Altbau-Sanierung."
        benefits={benefits}
        icon={Award}
        badge="3K-Prozess · SCOP 6,1"
        imageSrc="/images/partners/zewotherm/lambda-hero.jpg"
        imageAlt="ZEWOTHERM Wärmepumpe LAMBDA EU35L vor modernem Gebäude – installiert von HeizCenter"
        logoSrc="/images/partners/zewotherm.png"
      />

      <FeaturesSection
        title="Warum ZEWOTHERM LAMBDA? Neue Maßstäbe für effizientes Heizen"
        features={features}
      />

      {/* Intro / Story Block */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Nachhaltige Wärme – leise, smart und leistungsstark
          </h2>
          <p className="text-slate-700 mb-10 text-center max-w-3xl mx-auto">
            Wer auf Wärmepumpentechnologie setzt, entscheidet sich für eine
            umweltfreundliche Heizlösung mit hohem Komfort. Die ZEWOTHERM
            Wärmepumpe LAMBDA geht dabei einen Schritt weiter: Mit innovativer
            Technik, niedrigem Stromverbrauch und besonders leisem Betrieb
            erfüllt sie höchste Anforderungen an Nachhaltigkeit und
            Wohnkomfort – sowohl im Neubau als auch in der Altbau-Sanierung.
          </p>

          {/* Stats Strip — Trust-Signale statt KI-Bild */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0F5B78] text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">6,1</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                SCOP (EN 14825)
              </div>
              <p className="text-xs mt-2 opacity-80">
                Spitzenwert für Luft-Wasser-Wärmepumpen
              </p>
            </div>
            <div className="bg-[#0F5B78] text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">70 °C</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Vorlauftemperatur
              </div>
              <p className="text-xs mt-2 opacity-80">
                Ohne Heizstab, auch im Altbau
              </p>
            </div>
            <div className="bg-[#0F5B78] text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">R290</div>
              <div className="text-sm uppercase tracking-wide opacity-90">
                Natürliches Kältemittel
              </div>
              <p className="text-xs mt-2 opacity-80">
                GWP 3 – F-Gase-sicher
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
              Vom Einfamilienhaus bis zum Großobjekt – die LAMBDA-Serie deckt
              alle Leistungsklassen ohne aufwendige Kaskadierung ab.
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
                <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">EU10L</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Kompakt & energieeffizient
                </p>
                <p className="text-slate-700">
                  Perfekt für kleinere und mittelgroße Neubauten – energieeffizient
                  und kompakt.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">EU13L</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Größere Wohnhäuser & Altbau
                </p>
                <p className="text-slate-700">
                  Ideal für größere Wohnhäuser oder modernisierte Altbauten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">
                  EU15L / EU20L
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Mehrfamilienhaus & Gewerbe
                </p>
                <p className="text-slate-700">
                  Hohe Heizleistung für Mehrfamilienhäuser und gewerbliche
                  Anwendungen – ohne aufwendige Kaskadierung.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-slate-200 lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0F5B78]">
                      EU35L – für Großobjekte
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Das größte Modell der LAMBDA-Serie. Ideal für gewerbliche
                      Großobjekte, Verwaltungsgebäude und große
                      Mehrfamilienanlagen mit hohem Wärmebedarf.
                    </p>
                    <p className="text-sm text-slate-600">
                      Auch hier ohne Kaskadierung einsetzbar – das spart
                      Installationsaufwand und Wartungskosten.
                    </p>
                  </div>
                  <div className="relative aspect-square max-h-48 md:max-h-72 mx-auto w-full">
                    <Image
                      src="/images/partners/zewotherm/lambda-eu35l.png"
                      alt="ZEWOTHERM LAMBDA EU35L für Großobjekte"
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
                alt="ZEWOTHERM Hydraulikstation für die LAMBDA Wärmepumpe"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Komplettsystem mit Hydraulikstation
              </h2>
              <p className="text-slate-700 mb-4">
                Die LAMBDA wird als komplettes System aus Außeneinheit
                (Monoblock) und passender Hydraulikstation geliefert. Das
                vereinfacht die Installation und reduziert die Schnittstellen –
                für maximale Betriebssicherheit von Tag eins an.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Monoblock-Bauweise – keine Kältemittelarbeiten im Haus</li>
                <li>✓ Passende Hydraulikstation aus dem ZEWOTHERM-System</li>
                <li>✓ Smartes EMS mit Fernzugriff per VPN (Herstellerangabe)</li>
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
              Bis zu 70 % Förderung sichern
            </h2>
            <p className="text-slate-700 text-center mb-10 max-w-2xl mx-auto">
              Die Investition in eine Wärmepumpe wird durch die Bundesförderung
              für effiziente Gebäude (BEG EM) staatlich unterstützt. Je nach
              Ausgangslage und Einkommen sind bis zu 70 % der förderfähigen
              Kosten möglich.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">30 %</div>
                <h3 className="font-bold mb-1">Grundförderung</h3>
                <p className="text-sm text-slate-600">
                  Beim Tausch alter Öl-, Gas- oder Kohleheizungen gegen eine
                  Wärmepumpe.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">+20 %</div>
                <h3 className="font-bold mb-1">Klimageschwindigkeitsbonus</h3>
                <p className="text-sm text-slate-600">
                  Beim vorzeitigen Tausch funktionsfähiger Öl-, Kohle-,
                  Gasetagen- und Nachtspeicherheizungen sowie Gas- und
                  Biomasseheizungen ab 20 Jahren.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">+30 %</div>
                <h3 className="font-bold mb-1">Einkommensbonus</h3>
                <p className="text-sm text-slate-600">
                  Für selbstnutzende Eigentümer mit zu versteuerndem
                  Haushaltseinkommen unter 40.000 € pro Jahr.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#0F5B78]/20">
                <div className="text-3xl font-bold text-[#0F5B78] mb-2">+5 %</div>
                <h3 className="font-bold mb-1">Effizienzbonus</h3>
                <p className="text-sm text-slate-600">
                  Für Wärmepumpen mit natürlichen Kältemitteln wie R290 –
                  greift bei allen LAMBDA-Modellen.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold mb-2">Ergänzungskredit KfW 358/359</h3>
              <p className="text-sm text-slate-700">
                Für die nicht durch Zuschuss gedeckten förderfähigen Kosten
                steht der zinsverbilligte KfW-Ergänzungskredit Heizungstausch
                (358 für Selbstnutzer, 359 für Eigentümer mit Einkommensbonus)
                bis zu 120.000 € förderfähige Kosten pro Wohneinheit zur
                Verfügung. Wir prüfen gerne die optimale Kombination für Ihr
                Vorhaben.
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Hinweis: Förderbedingungen können sich ändern. Eine verbindliche
                Auskunft erhalten Sie über die offiziellen Stellen (BAFA, KfW)
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
                Kostenlos &amp; unverbindlich – wir berechnen Ihren möglichen
                Zuschuss.
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
              Als Fachpartner für Wärmepumpen begleiten wir Ihr LAMBDA-Projekt
              von der ersten Heizlastberechnung über die Förderantragstellung
              bis zur Inbetriebnahme und langfristigen Wartung – alles aus
              einer Hand.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                  Unser Service
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Kostenlose Vor-Ort-Beratung in der Region</li>
                  <li>✓ Heizlastberechnung nach DIN EN 12831</li>
                  <li>✓ Förderberatung BEG EM &amp; KfW 358/359</li>
                  <li>✓ Schallschutz-Planung für enge Bebauung</li>
                  <li>✓ Komplette Installation in 2–3 Tagen</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                  Nach der Inbetriebnahme
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Einweisung &amp; Übergabe-Protokoll</li>
                  <li>✓ Wartungsvertrag mit Festpreis</li>
                  <li>✓ Fern-Diagnose über das EMS</li>
                  <li>✓ 24/7 Notdienst in der Region</li>
                  <li>✓ Garantie-Registrierung beim Hersteller</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-slate-700">
              Wir beraten Sie unabhängig: Wenn die LAMBDA für Ihr Gebäude die
              beste Wahl ist, sagen wir das – wenn ein anderer Hersteller
              besser passt, ebenso.
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
            name: "ZEWOTHERM Wärmepumpe LAMBDA",
            brand: {
              "@type": "Brand",
              name: "ZEWOTHERM",
            },
            description:
              "Luft-Wasser-Wärmepumpe mit patentiertem 3K-Prozess, SCOP bis 6,1 (gem. EN 14825), Vorlauftemperatur bis 70 °C und natürlichem Kältemittel R290. Installation durch HeizCenter.",
            category: "Wärmepumpe",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "LocalBusiness",
                name: "HeizCenter GmbH",
                telephone: CONTACT.PHONE_SCHEMA,
              },
            },
            manufacturer: {
              "@type": "Organization",
              name: "ZEWOTHERM Heating GmbH",
              url: "https://zewotherm.com",
            },
          }),
        }}
      />
    </>
  );
}
