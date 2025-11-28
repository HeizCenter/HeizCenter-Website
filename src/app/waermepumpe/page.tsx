import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Zap,
  TrendingDown,
  Shield,
  Leaf,
  Award,
  Wrench,
  Calculator,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceSchema } from "@/components/schema/service-schema";
import { FAQSchema } from "@/components/schema/faq-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Wärmepumpe Augsburg, Ulm & Memmingen - Bis 70% Förderung | HeizCenter",
  description:
    "Moderne Wärmepumpen vom Experten in Augsburg, Ulm und Memmingen. Bis zu 70% Energiekosten sparen. BEG-Förderung bis 70%. Kostenlose Beratung.",
  keywords: [
    "Wärmepumpe",
    "Wärmepumpe Augsburg",
    "Wärmepumpe Ulm",
    "Luft-Wasser-Wärmepumpe",
    "Erdwärmepumpe",
    "BEG Förderung",
    "Heizkosten sparen",
  ],
  openGraph: {
    title: "Wärmepumpe Installation | HeizCenter",
    description:
      "Moderne Wärmepumpen mit bis zu 70% Förderung. Professionelle Installation und Wartung.",
  },
};

export const dynamic = 'force-dynamic';

const benefits = [
  "Bis zu 70% niedrigere Energiekosten im Vergleich zur Gasheizung",
  "BEG-Förderung bis zu 70% der Investitionskosten (bis Ende 2028)",
  "Umweltfreundlich und CO2-neutral heizen",
  "Heizen und Kühlen mit einem System",
  "Unabhängig von Öl und Gas",
  "Wertsteigerung Ihrer Immobilie",
];

const features = [
  {
    title: "Energieeffizient",
    description:
      "Wärmepumpen nutzen bis zu 75% kostenlose Umweltenergie. Für jeden Kilowatt Strom erhalten Sie bis zu 4-5 Kilowatt Wärme.",
    icon: TrendingDown,
  },
  {
    title: "Umweltfreundlich",
    description:
      "Null CO2-Emissionen am Standort. Kombiniert mit Solarstrom heizen Sie komplett klimaneutral und nachhaltig.",
    icon: Leaf,
  },
  {
    title: "Staatliche Förderung",
    description:
      "Profitieren Sie von der BEG-Förderung: bis zu 70% Zuschuss für den Heizungstausch (30% Basis + 20% Klimabonus + 20% Einkommensbonus). Wir unterstützen Sie bei der Antragstellung.",
    icon: Award,
  },
  {
    title: "Heizen & Kühlen",
    description:
      "Im Winter heizen, im Sommer kühlen - mit nur einem System. Ganzjähriger Komfort in Ihrem Zuhause.",
    icon: Zap,
  },
  {
    title: "Wartungsarm",
    description:
      "Wärmepumpen sind äußerst wartungsarm und zuverlässig. Geringer Verschleiß bedeutet lange Lebensdauer von 20-25 Jahren.",
    icon: Shield,
  },
  {
    title: "Professionelle Installation",
    description:
      "Fachgerechte Planung und Installation durch zertifizierte Fachbetriebe. Inklusive hydraulischem Abgleich und Inbetriebnahme.",
    icon: Wrench,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Wie hoch sind die Kosten für eine Wärmepumpe?",
    answer:
      "Die Kosten für eine Wärmepumpe liegen je nach System zwischen 20.000€ und 35.000€ inklusive Installation. Luft-Wasser-Wärmepumpen sind günstiger (ca. 20.000-25.000€), Erdwärmepumpen etwas teurer (ca. 25.000-35.000€). Dank BEG-Förderung von bis zu 70% reduzieren sich Ihre Nettokosten erheblich. Wir erstellen Ihnen ein individuelles Angebot.",
  },
  {
    question: "Welche Förderung gibt es für Wärmepumpen?",
    answer:
      "Die Bundesförderung für effiziente Gebäude (BEG) fördert Wärmepumpen mit bis zu 70% der Investitionskosten. Die Basisförderung beträgt 30%, weitere 20% gibt es beim Austausch einer alten Öl-, Gas- oder Nachtspeicherheizung (Klimageschwindigkeitsbonus - in voller Höhe bis Ende 2028), und zusätzliche 30% wenn Ihr Haushaltseinkommen unter 40.000€ liegt. Wir unterstützen Sie gerne bei der Antragstellung.",
  },
  {
    question: "Eignet sich eine Wärmepumpe für mein Altbau?",
    answer:
      "Ja! Moderne Wärmepumpen funktionieren auch im Altbau sehr gut. Wichtig ist eine fachgerechte Planung und ggf. eine Optimierung der Heizungsanlage (z.B. größere Heizkörper oder Fußbodenheizung). Auch ohne Vollsanierung sind Wärmepumpen heute für viele Altbauten geeignet. Wir prüfen die Eignung kostenlos vor Ort.",
  },
  {
    question: "Wie laut ist eine Wärmepumpe?",
    answer:
      "Moderne Luft-Wasser-Wärmepumpen sind mit 35-45 dB(A) vergleichbar mit einem Kühlschrank. Bei fachgerechter Planung und Installation sind sie kaum hörbar. Wichtig ist der richtige Aufstellungsort und ggf. Schallschutzmaßnahmen. Erdwärmepumpen sind noch leiser, da sie keine Außeneinheit benötigen.",
  },
  {
    question: "Wie lange dauert die Installation?",
    answer:
      "Die Installation einer Luft-Wasser-Wärmepumpe dauert in der Regel 2-3 Tage. Bei Erdwärmepumpen mit Bohrung müssen Sie etwa 1 Woche einplanen. Nach der Installation führen wir die Inbetriebnahme und Einweisung durch. Die Vorlaufzeit bis zur Installation beträgt aktuell etwa 6-8 Wochen.",
  },
  {
    question: "Welche Wärmepumpe ist die richtige für mich?",
    answer:
      "Das hängt von mehreren Faktoren ab: Grundstücksgröße, Gebäudedämmung, Heizsystem und Budget. Luft-Wasser-Wärmepumpen sind am häufigsten und am einfachsten zu installieren. Erdwärmepumpen (Sole-Wasser) sind effizienter, aber teurer. Wir beraten Sie kostenlos und finden die optimale Lösung für Ihr Zuhause.",
  },
  {
    question: "Kann ich mit Wärmepumpe auch kühlen?",
    answer:
      "Ja! Die meisten modernen Wärmepumpen bieten eine passive oder aktive Kühlfunktion. Im Sommer wird der Heizkreislauf umgekehrt und Ihr Zuhause angenehm gekühlt. Besonders effizient funktioniert die Kühlung mit Fußbodenheizung. Ein echter Mehrwert für den Sommer!",
  },
  {
    question: "Wie hoch sind die Betriebskosten?",
    answer:
      "Wärmepumpen sind im Betrieb sehr günstig. Bei einem durchschnittlichen Einfamilienhaus liegen die Stromkosten bei etwa 800-1.200€ pro Jahr - deutlich weniger als bei Gas oder Öl. Dank Wärmepumpentarif und hoher Jahresarbeitszahl (JAZ 3,5-4,5 bei Luft-Wasser, bis 5,0 bei Sole-Wasser) heizen Sie äußerst kostengünstig. Die Investition amortisiert sich nach 10-15 Jahren.",
  },
];

export default function WaermepumpePage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Wärmepumpe", url: "/waermepumpe" },
        ]}
      />
      {/* Schema.org Service Structured Data */}
      <ServiceSchema serviceType="waermepumpe" />
      <FAQSchema faqs={faqs} />

      <ServiceHero
        title="Wärmepumpe in Augsburg, Ulm & Memmingen"
        description="Zukunftssicher heizen mit erneuerbarer Energie. Profitieren Sie von bis zu 70% staatlicher Förderung und sparen Sie bis zu 70% Ihrer Heizkosten."
        benefits={benefits}
        icon={Zap}
        badge="Bis zu 70% Förderung"
        imageSrc="/images/Waermepumpe.jpeg"
      />

      <FeaturesSection
        title="Warum eine Wärmepumpe von HeizCenter?"
        features={features}
      />

      {/* Kostenrechner CTA */}
      <section className="bg-slate-100 text-slate-900 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6 text-[#0F5B78]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Was kostet eine Wärmepumpe für Ihr Zuhause?
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              Berechnen Sie in wenigen Minuten die Kosten Ihrer neuen Wärmepumpe inklusive staatlicher Förderung. Unser Rechner berücksichtigt Ihre individuelle Situation und gibt Ihnen eine realistische Kostenschätzung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
                <Link href="/rechner">
                  <Calculator className="h-5 w-5 mr-2" />
                  Jetzt Kosten berechnen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2 border-[#0F5B78] text-[#0F5B78] hover:bg-[#0F5B78] hover:text-white">
                <Link href="/kontakt?tab=quote&service=waermepumpe&message=Ich interessiere mich für ein kostenloses Angebot für eine Wärmepumpe. Bitte kontaktieren Sie mich für eine unverbindliche Beratung.">
                  Kostenloses Angebot anfragen
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-600 mt-6">
              ✓ Kostenlos & unverbindlich  ✓ Mit BEG-Förderungsberechnung  ✓ Individuelle Beratung
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                So funktioniert eine Wärmepumpe
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Eine Wärmepumpe entzieht der Umgebung (Luft, Erde oder Grundwasser)
                Wärme und hebt diese auf ein höheres Temperaturniveau an. Dieses
                Prinzip funktioniert ähnlich wie ein Kühlschrank - nur umgekehrt.
              </p>
            </div>

            {/* Process Steps with Visual Flow */}
            <div className="relative mb-16">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0F5B78]/20 via-[#0F5B78]/40 to-[#0F5B78]/20 transform -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#0F5B78]/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0F5B78] to-[#14789A] rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-[#FFCA28] rounded-full flex items-center justify-center mb-4 font-bold text-xl text-slate-900">
                      1
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-slate-900">Wärme aufnehmen</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Die Wärmepumpe entzieht der Außenluft, dem Erdreich oder dem
                      Grundwasser kostenlose Umweltwärme - selbst bei -20°C.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#0F5B78]/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0F5B78] to-[#14789A] rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-[#FFCA28] rounded-full flex items-center justify-center mb-4 font-bold text-xl text-slate-900">
                      2
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-slate-900">Temperatur erhöhen</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Der elektrische Kompressor verdichtet das Kältemittel und erhöht
                      die Temperatur auf 50-60°C für Ihr Heizsystem.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#0F5B78]/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0F5B78] to-[#14789A] rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-[#FFCA28] rounded-full flex items-center justify-center mb-4 font-bold text-xl text-slate-900">
                      3
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-slate-900">Wärme abgeben</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Die erzeugte Wärme wird über Heizkörper oder Fußbodenheizung
                      an Ihre Räume abgegeben. Wohlige Wärme garantiert!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficiency Badge */}
            <div className="bg-gradient-to-r from-[#0F5B78] to-[#14789A] rounded-2xl p-8 text-white text-center mb-16">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <div className="text-4xl font-bold mb-1">1 kW Strom = 3,5-5 kW Wärme</div>
                  <p className="text-white/90 text-lg">
                    Durch die Nutzung von Umweltwärme erzeugen Wärmepumpen 3,5-5x mehr Energie als sie verbrauchen (JAZ)
                  </p>
                </div>
              </div>
            </div>

            {/* Heat Pump Systems */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Unsere Wärmepumpen-Systeme
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#0F5B78]">
                  <h4 className="font-bold text-xl mb-3 text-[#0F5B78]">Luft-Wasser-Wärmepumpe</h4>
                  <p className="text-slate-600 mb-3">
                    Am weitesten verbreitet und einfach zu installieren. Nutzt die Außenluft als Wärmequelle.
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    ✓ Ideal für Neubauten und sanierte Bestandsgebäude
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#0F5B78]">
                  <h4 className="font-bold text-xl mb-3 text-[#0F5B78]">Sole-Wasser-Wärmepumpe</h4>
                  <p className="text-slate-600 mb-3">
                    Sehr effizient durch konstante Erdtemperatur. Benötigt Erdbohrung oder Erdkollektor.
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    ✓ Höchste Effizienz, besonders im Winter
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#0F5B78]">
                  <h4 className="font-bold text-xl mb-3 text-[#0F5B78]">Wasser-Wasser-Wärmepumpe</h4>
                  <p className="text-slate-600 mb-3">
                    Nutzt Grundwasser als Wärmequelle. Höchste Effizienz, aber nicht überall möglich.
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    ✓ Erfordert Brunnenbohrung und Genehmigung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Solution: Solar + Heat Pump */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F5B78] to-[#14789A] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#FFCA28] rounded-full flex items-center justify-center">
                <Sun className="h-8 w-8 text-slate-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Noch effizienter: Wärmepumpe + Solarthermie
              </h2>
            </div>
            <p className="text-xl mb-6 text-white/95">
              Maximieren Sie Ihre Energieeffizienz durch die Kombination von Wärmepumpe und Solarthermie.
              Die Solarthermie-Anlage unterstützt Ihre Wärmepumpe direkt bei der Warmwasserbereitung
              und reduziert den Stromverbrauch zusätzlich um bis zu 30%.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Ihre Vorteile:</h3>
                <ul className="space-y-2 text-white/90">
                  <li>✓ Bis zu 30% weniger Stromverbrauch der Wärmepumpe</li>
                  <li>✓ 60% Warmwasser-Deckung durch kostenlose Sonnenenergie</li>
                  <li>✓ Kombinierte KfW-Förderung möglich</li>
                  <li>✓ Maximale Energieunabhängigkeit</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Investition:</h3>
                <p className="text-white/90 mb-3">
                  Solarthermie-System: €8.000 - €18.000
                  <br />
                  <span className="text-[#FFCA28] font-semibold">
                    Nach 70% KfW-Förderung: nur €2.400 - €5.400
                  </span>
                </p>
                <p className="text-sm text-white/80">
                  Die Kombination beider Systeme amortisiert sich durch die eingesparten
                  Energiekosten bereits nach 8-12 Jahren.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
                <Link href="/solar">
                  <Sun className="h-5 w-5 mr-2" />
                  Mehr zur Solarthermie
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-[#0F5B78] hover:bg-white/90 font-semibold border-2">
                <Link href="/kontakt?tab=quote&service=waermepumpe&message=Ich interessiere mich für ein Hybrid-System (Wärmepumpe + Solarthermie). Bitte erstellen Sie mir ein individuelles Angebot.">
                  Hybrid-System anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        variant="gradient"
        service="waermepumpe"
        message="Ich interessiere mich für eine Wärmepumpe. Bitte kontaktieren Sie mich für eine kostenlose Beratung."
      />
    </>
  );
}
