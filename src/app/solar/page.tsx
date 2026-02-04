import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Sun,
  TrendingDown,
  Leaf,
  Award,
  Wrench,
  Zap,
  Home,
  ThermometerSun,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceSchema } from "@/components/schema/service-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { FAQSchema } from "@/components/schema/faq-schema";
import { SolarProcessSection } from "@/components/sections/solar-process-section";
import { SolarComparisonSection } from "@/components/sections/solar-comparison";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Solarthermie Augsburg, Ulm - 70% KfW Förderung | HeizCenter",
  description:
    "Solarthermie-Anlagen vom Experten in Augsburg, Ulm und Memmingen. Bis zu 70% staatliche Förderung. Warmwasser & Heizungsunterstützung. Kostenlose Beratung.",
  keywords: [
    "Solarthermie",
    "Solarthermie Augsburg",
    "Solarthermie Ulm",
    "Solarthermie Memmingen",
    "Solarthermie Förderung",
    "Solarthermie Kosten",
    "Warmwasser Solar",
    "Heizungsunterstützung Solar",
    "KfW Förderung",
  ],
  openGraph: {
    title: "Solarthermie Installation | HeizCenter",
    description:
      "Moderne Solarthermie-Anlagen mit bis zu 70% staatlicher Förderung. Professionelle Installation für Warmwasser und Heizung.",
  },
  alternates: {
    canonical: getCanonicalUrl("/solar"),
  },
};

export const dynamic = 'force-dynamic';

const benefits = [
  "Bis zu 70% staatliche Förderung für Ihre Solarthermie-Anlage (bis Ende 2028)",
  "60% Ihres Warmwasserbedarfs durch kostenlose Sonnenenergie",
  "Bis zu 30% Heizkosten sparen mit Heizungsunterstützung",
  "Umweltfreundlich und CO2-neutral Warmwasser bereiten",
  "Kombination mit Wärmepumpe möglich",
  "30-40 Jahre Lebensdauer der Anlage",
];

const features = [
  {
    title: "Kostenlose Sonnenenergie",
    description:
      "Nutzen Sie die Kraft der Sonne zur Warmwasserbereitung und Heizungsunterstützung. 60-80% Wirkungsgrad bei der Umwandlung von Sonnenlicht in Wärme.",
    icon: Sun,
  },
  {
    title: "Bis zu 70% Förderung",
    description:
      "Profitieren Sie von der KfW-Förderung: 30% Basisförderung + 20% Klimageschwindigkeitsbonus + 30% Einkommensbonus. Maximal 70% Zuschuss möglich (bis Ende 2028).",
    icon: Award,
  },
  {
    title: "Niedrige Betriebskosten",
    description:
      "Nur ca. 150€ jährliche Wartungskosten. Keine Brennstoffkosten. Geringe Reparaturkosten dank ausgereifter Technologie.",
    icon: TrendingDown,
  },
  {
    title: "Umweltfreundlich",
    description:
      "Null CO2-Emissionen beim Betrieb. Reduzieren Sie Ihren ökologischen Fußabdruck und leisten Sie einen Beitrag zum Klimaschutz.",
    icon: Leaf,
  },
  {
    title: "Kombination mit Heizung",
    description:
      "Perfekte Ergänzung zu Wärmepumpe, Gas- oder Ölheizung. Entlastet Ihre Hauptheizung besonders in Übergangszeiten (Frühling/Herbst).",
    icon: ThermometerSun,
  },
  {
    title: "Professionelle Installation",
    description:
      "Fachgerechte Planung und Montage durch zertifizierte Heizungsbauer. Inklusive Integration in Ihr bestehendes Heizsystem.",
    icon: Wrench,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Was ist Solarthermie und wie funktioniert sie?",
    answer:
      "Solarthermie wandelt Sonnenlicht direkt in Wärmeenergie um. Solarkollektoren auf Ihrem Dach erwärmen eine Wärmeträgerflüssigkeit, die die Wärme an einen Speicher überträgt. Von dort wird die Wärme zur Warmwasserbereitung und/oder Heizungsunterstützung genutzt. Im Gegensatz zu Photovoltaik (die Strom erzeugt) produziert Solarthermie direkt Wärme mit 60-80% Wirkungsgrad.",
  },
  {
    question: "Wie hoch ist die KfW-Förderung für Solarthermie 2025?",
    answer:
      "Die KfW fördert Solarthermie-Anlagen über die Bundesförderung für effiziente Gebäude (BEG). Basisförderung: 30% der Investitionskosten. Klimageschwindigkeitsbonus: +20% beim Austausch alter Öl- oder Gasheizungen (in voller Höhe bis Ende 2028). Einkommensbonus: +30% bei zu versteuerndem Haushaltseinkommen unter 40.000€. Maximal 70% Förderung möglich. Wir unterstützen Sie bei der Antragstellung.",
  },
  {
    question: "Was kostet eine Solarthermie-Anlage?",
    answer:
      "Warmwasser-System (4-Personen-Haushalt): 5.000-10.000€ inklusive Installation. Nach 30% KfW-Förderung: 3.500-7.000€. Kombi-System mit Heizungsunterstützung: 8.000-18.000€ inklusive Installation. Nach maximaler 70% Förderung: 2.400-5.400€. Die Kosten hängen von Kollektorfläche, Speichergröße und Dachbeschaffenheit ab.",
  },
  {
    question: "Wie viel Warmwasser kann ich mit Solarthermie erzeugen?",
    answer:
      "Eine richtig dimensionierte Solarthermie-Anlage deckt etwa 60% Ihres jährlichen Warmwasserbedarfs. Im Sommer (Mai-September) können Sie 100% Ihres Warmwassers solar erzeugen, im Winter (November-Februar) etwa 20-30%. Bei 4-Personen-Haushalt benötigen Sie ca. 4-6 m² Kollektorfläche und einen 300-400 Liter Speicher.",
  },
  {
    question: "Lohnt sich Solarthermie mit Heizungsunterstützung?",
    answer:
      "Ja, besonders in der Übergangszeit (Frühling/Herbst) entlastet eine Kombi-Anlage Ihre Heizung deutlich. Sie deckt 20-30% Ihres jährlichen Heizbedarfs und 60-70% des Warmwassers. Für ein Einfamilienhaus (150 m²) benötigen Sie 12-15 m² Kollektorfläche. Mit 70% KfW-Förderung amortisiert sich die Anlage in 6-10 Jahren bei einer Lebensdauer von 30-40 Jahren.",
  },
  {
    question: "Solarthermie oder Photovoltaik - was ist besser?",
    answer:
      "Beide Technologien haben unterschiedliche Einsatzzwecke: Solarthermie erzeugt Wärme mit 60-80% Wirkungsgrad - ideal für Warmwasser und Heizung. Photovoltaik erzeugt Strom mit 15-22% Wirkungsgrad - vielseitig einsetzbar. Am besten: Kombination beider Systeme! Solarthermie für Warmwasser/Heizung + PV für Strom + Wärmepumpe = maximale Energieunabhängigkeit.",
  },
  {
    question: "Kann ich Solarthermie mit einer Wärmepumpe kombinieren?",
    answer:
      "Ja, diese Kombination ist sehr effizient! Die Solarthermie übernimmt die Warmwasserbereitung im Sommer komplett und unterstützt im Frühling/Herbst die Heizung. Dadurch reduziert sich der Stromverbrauch Ihrer Wärmepumpe erheblich. Beide Systeme sind separat KfW-förderfähig. Wir planen gerne eine optimale Hybrid-Lösung für Sie.",
  },
  {
    question: "Wie lange hält eine Solarthermie-Anlage?",
    answer:
      "Solarkollektoren haben eine Lebensdauer von 25-30 Jahren, das Gesamtsystem hält 30-40 Jahre. Die Technologie ist ausgereift und wartungsarm. Jährliche Wartungskosten liegen bei ca. 150€. Hersteller gewähren oft 10 Jahre Garantie auf Kollektoren. Nach der Amortisation (12-18 Jahre, mit Förderung 6-10 Jahre) produzieren Sie noch 20-30 Jahre lang kostenloses Warmwasser.",
  },
  {
    question: "Eignet sich mein Dach für Solarthermie?",
    answer:
      "Die meisten Dächer eignen sich gut. Optimal: Süd-Ausrichtung mit 30-45° Neigung. Auch Ost-West-Dächer funktionieren mit Vakuumröhrenkollektoren. Flachdächer sind mit Aufständerung möglich. Wichtig: keine starke Verschattung durch Bäume oder Gebäude. Mindestens 4-6 m² freie Dachfläche für Warmwasser-System. Wir prüfen kostenlos die Eignung Ihres Daches.",
  },
  {
    question: "Was ist der Unterschied zwischen Flach- und Vakuumröhrenkollektoren?",
    answer:
      "Flachkollektoren: 60-75% Wirkungsgrad, günstiger (300-500€/m²), ideal für Warmwasser und Süddächer, bewährte Technologie. Vakuumröhrenkollektoren: 70-85% Wirkungsgrad, teurer (500-750€/m²), besser bei Ost-West-Ausrichtung und im Winter, ideal für Heizungsunterstützung. Wir empfehlen Flachkollektoren für reine Warmwasser-Systeme und Vakuumröhren für Kombi-Anlagen mit Heizungsunterstützung.",
  },
];

export default function SolarPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Solarthermie", url: "/solar" },
        ]}
      />
      {/* Schema.org Service Structured Data */}
      <ServiceSchema serviceType="solar" />

      <ServiceHero
        title="Solarthermie in Augsburg, Ulm & Memmingen"
        description="Nutzen Sie die Kraft der Sonne! Mit einer Solarthermie-Anlage senken Sie Ihre Heizkosten um bis zu 30% und profitieren von bis zu 70% KfW-Förderung. Kostenlose Sonnenenergie für Warmwasser und Heizung."
        benefits={benefits}
        icon={Sun}
        badge="Bis zu 70% KfW-Förderung"
        imageSrc="/images/Solaranlage.webp"
        imageAlt="Solarthermie Flachkollektoren auf Hausdach - 70% KfW-Förderung mit HeizCenter"
      />

      <FeaturesSection
        title="Ihre Vorteile mit Solarthermie"
        features={features}
      />

      {/* System Types Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Solarthermie-Systeme im Vergleich</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Wählen Sie das passende System für Ihren Bedarf
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Warmwasser System */}
            <Card className="border-2 border-slate-200 transition-all hover:border-primary hover:shadow-lg flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Badge Area - Fixed Height */}
                <div className="h-8 mb-4"></div>

                {/* Icon - Fixed Height, Centered */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mx-auto">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold h-14 flex items-center">Warmwasser-System</h3>
                <p className="mb-4 text-slate-600 h-12 flex items-center">
                  Ideal für die solare Warmwasserbereitung
                </p>

                {/* Features List - Flexible Height */}
                <ul className="mb-6 space-y-2 text-sm flex-grow">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>4-6 m² Kollektorfläche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>300-400 Liter Speicher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>60% Warmwasser-Abdeckung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>Für 4-Personen-Haushalt</span>
                  </li>
                </ul>

                {/* Kosten - Fixed Height */}
                <div className="mb-4 rounded-lg bg-slate-100 p-4">
                  <div className="mb-2 text-sm font-medium text-slate-600">Kosten</div>
                  <div className="text-2xl font-bold">5.000 - 10.000 €</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Nach 30% Förderung: <span className="font-semibold text-green-600">3.500 - 7.000 €</span>
                  </div>
                </div>

                {/* CTA Button - Fixed at Bottom */}
                <Button asChild className="w-full mt-auto">
                  <Link href="/kontakt?tab=quote&service=solar&message=Ich interessiere mich für ein Warmwasser-Solarthermie-System. Bitte kontaktieren Sie mich für eine kostenlose Beratung.">
                    Jetzt beraten lassen
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kombi System */}
            <Card className="border-2 border-primary shadow-lg flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Badge Area - Fixed Height */}
                <div className="h-8 mb-4 flex items-center justify-center">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Empfohlen
                  </span>
                </div>

                {/* Icon - Fixed Height, Centered */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <ThermometerSun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold h-14 flex items-center">Kombi-System</h3>
                <p className="mb-4 text-slate-600 h-12 flex items-center">
                  Warmwasser + Heizungsunterstützung
                </p>

                {/* Features List - Flexible Height */}
                <ul className="mb-6 space-y-2 text-sm flex-grow">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>12-15 m² Kollektorfläche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>600-1000 Liter Kombispeicher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>60% Warmwasser + 25% Heizung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>Für Einfamilienhaus (150 m²)</span>
                  </li>
                </ul>

                {/* Kosten - Fixed Height */}
                <div className="mb-4 rounded-lg bg-primary/5 p-4">
                  <div className="mb-2 text-sm font-medium text-slate-600">Kosten</div>
                  <div className="text-2xl font-bold">8.000 - 18.000 €</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Nach 70% Förderung: <span className="font-semibold text-green-600">2.400 - 5.400 €</span>
                  </div>
                </div>

                {/* CTA Button - Fixed at Bottom */}
                <Button asChild className="w-full mt-auto">
                  <Link href="/kontakt?tab=quote&service=solar&message=Ich interessiere mich für ein Kombi-Solarthermie-System (Warmwasser + Heizungsunterstützung). Bitte kontaktieren Sie mich für eine kostenlose Beratung.">
                    Jetzt beraten lassen
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hybrid System */}
            <Card className="border-2 border-slate-200 transition-all hover:border-primary hover:shadow-lg flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Badge Area - Fixed Height */}
                <div className="h-8 mb-4"></div>

                {/* Icon - Fixed Height, Centered */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mx-auto">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold h-14 flex items-center">Hybrid-System</h3>
                <p className="mb-4 text-slate-600 h-12 flex items-center">
                  Solarthermie + Wärmepumpe
                </p>

                {/* Features List - Flexible Height */}
                <ul className="mb-6 space-y-2 text-sm flex-grow">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>Optimale Energieausnutzung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>Solar entlastet Wärmepumpe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>Höchste Effizienz im Sommer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>Kombinierte KfW-Förderung</span>
                  </li>
                </ul>

                {/* Kosten - Fixed Height */}
                <div className="mb-4 rounded-lg bg-slate-100 p-4">
                  <div className="mb-2 text-sm font-medium text-slate-600">Kosten</div>
                  <div className="text-2xl font-bold">Auf Anfrage</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Individuelle Planung erforderlich
                  </div>
                </div>

                {/* CTA Button - Fixed at Bottom */}
                <Button asChild className="w-full mt-auto">
                  <Link href="/kontakt?tab=quote&service=solar&message=Ich interessiere mich für ein Hybrid-System (Solarthermie + Wärmepumpe). Bitte kontaktieren Sie mich für eine kostenlose Beratung.">
                    Jetzt beraten lassen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solarthermie vs Photovoltaik Comparison */}
      <SolarComparisonSection />

      {/* KfW Förderung 2025 Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">KfW-Förderung 2025: Bis zu 70% Zuschuss</h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Nutzen Sie die staatliche Förderung für Ihre Solarthermie-Anlage (Geschwindigkeitsbonus in voller Höhe bis Ende 2028)
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-0">
                <CardContent className="p-6">
                  <div className="mb-3 text-4xl font-bold text-primary">30%</div>
                  <h3 className="mb-2 text-lg font-bold">Basisförderung</h3>
                  <p className="text-sm text-slate-600">
                    Für alle förderfähigen Solarthermie-Anlagen. Mindestinvestition: 2.000 €
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0">
                <CardContent className="p-6">
                  <div className="mb-3 text-4xl font-bold text-primary">+20%</div>
                  <h3 className="mb-2 text-lg font-bold">Klimageschwindigkeitsbonus</h3>
                  <p className="text-sm text-slate-600">
                    Beim Austausch alter Öl-, Gas- oder Nachtspeicherheizungen
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0">
                <CardContent className="p-6">
                  <div className="mb-3 text-4xl font-bold text-primary">+30%</div>
                  <h3 className="mb-2 text-lg font-bold">Einkommensbonus</h3>
                  <p className="text-sm text-slate-600">
                    Bei zu versteuerndem Haushaltseinkommen unter 40.000 € jährlich
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Förderbeispiel</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium">Kombi-System (Warmwasser + Heizung)</span>
                  <span className="font-bold">14.000 €</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Basisförderung (30%)</span>
                  <span>- 4.200 €</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Klimageschwindigkeitsbonus (20%)</span>
                  <span>- 2.800 €</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Einkommensbonus (20%, max. 70% gesamt)</span>
                  <span>- 2.800 €</span>
                </div>
                <div className="flex justify-between border-t-2 border-primary pt-2 text-lg">
                  <span className="font-bold">Ihre Investition</span>
                  <span className="font-bold text-green-600">4.200 €</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                * Maximal 70% Gesamtförderung. Wir unterstützen Sie bei der Antragstellung!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Process Section - Redesigned */}
      <SolarProcessSection />

      <FAQSection
        title="Häufig gestellte Fragen zu Solarthermie"
        faqs={faqs}
        includeSchema={false}
      />
      <FAQSchema faqs={faqs} />

      <CTASection
        title="Bereit für kostenlose Sonnenenergie?"
        description="Lassen Sie sich jetzt kostenlos beraten und profitieren Sie von bis zu 70% KfW-Förderung für Ihre Solarthermie-Anlage."
      />
    </>
  );
}
