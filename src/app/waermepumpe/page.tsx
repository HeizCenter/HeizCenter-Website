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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Wärmepumpe Installation in Augsburg, Ulm & Memmingen | HeizCenter",
  description:
    "Moderne Wärmepumpen vom Experten. Bis zu 70% Energiekosten sparen. BEG-Förderung bis 40%. Kostenlose Beratung in Augsburg, Ulm und Memmingen.",
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
      "Moderne Wärmepumpen mit bis zu 40% Förderung. Professionelle Installation und Wartung.",
  },
};

export const dynamic = 'force-dynamic';

const benefits = [
  "Bis zu 70% niedrigere Energiekosten im Vergleich zur Gasheizung",
  "BEG-Förderung bis zu 40% der Investitionskosten",
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
      "Profitieren Sie von der BEG-Förderung: bis zu 40% Zuschuss für den Heizungstausch. Wir unterstützen Sie bei der Antragstellung.",
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
      "Die Kosten für eine Wärmepumpe liegen je nach System zwischen 20.000€ und 35.000€ inklusive Installation. Luft-Wasser-Wärmepumpen sind günstiger (ca. 20.000-25.000€), Erdwärmepumpen etwas teurer (ca. 25.000-35.000€). Dank BEG-Förderung von bis zu 40% reduzieren sich Ihre Nettokosten erheblich. Wir erstellen Ihnen ein individuelles Angebot.",
  },
  {
    question: "Welche Förderung gibt es für Wärmepumpen?",
    answer:
      "Die Bundesförderung für effiziente Gebäude (BEG) fördert Wärmepumpen mit bis zu 40% der Investitionskosten. Die Basisförderung beträgt 30%, weitere 5% gibt es beim Austausch einer alten Öl-, Gas- oder Nachtspeicherheizung, und zusätzliche 5% wenn Ihr Haushaltseinkommen unter 40.000€ liegt. Wir unterstützen Sie gerne bei der Antragstellung.",
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
      "Wärmepumpen sind im Betrieb sehr günstig. Bei einem durchschnittlichen Einfamilienhaus liegen die Stromkosten bei etwa 800-1.200€ pro Jahr - deutlich weniger als bei Gas oder Öl. Dank Wärmepumpentarif und hoher Jahresarbeitszahl (JAZ 4-5) heizen Sie äußerst kostengünstig. Die Investition amortisiert sich nach 10-15 Jahren.",
  },
];

export default function WaermepumpePage() {
  return (
    <>
      <ServiceHero
        title="Wärmepumpe Installation"
        description="Zukunftssicher heizen mit erneuerbarer Energie. Profitieren Sie von bis zu 40% staatlicher Förderung und sparen Sie bis zu 70% Ihrer Heizkosten."
        benefits={benefits}
        icon={Zap}
        badge="Bis zu 40% Förderung"
      />

      <FeaturesSection
        title="Warum eine Wärmepumpe von HeizCenter?"
        features={features}
      />

      {/* Kostenrechner CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Was kostet eine Wärmepumpe für Ihr Zuhause?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Berechnen Sie in wenigen Minuten die Kosten Ihrer neuen Wärmepumpe inklusive staatlicher Förderung. Unser Rechner berücksichtigt Ihre individuelle Situation und gibt Ihnen eine realistische Kostenschätzung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/rechner">
                  <Calculator className="h-5 w-5 mr-2" />
                  Jetzt Kosten berechnen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/kontakt">
                  Kostenloses Angebot anfragen
                </Link>
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              ✓ Kostenlos & unverbindlich  ✓ Mit BEG-Förderungsberechnung  ✓ Individuelle Beratung
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              So funktioniert eine Wärmepumpe
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Eine Wärmepumpe entzieht der Umgebung (Luft, Erde oder Grundwasser)
                Wärme und hebt diese auf ein höheres Temperaturniveau an. Dieses
                Prinzip funktioniert ähnlich wie ein Kühlschrank - nur umgekehrt.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">1. Wärme aufnehmen</h3>
                  <p className="text-slate-600">
                    Die Wärmepumpe entzieht der Außenluft, dem Erdreich oder dem
                    Grundwasser Wärmeenergie.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">2. Temperatur erhöhen</h3>
                  <p className="text-slate-600">
                    Mittels Kompressor wird die aufgenommene Wärme auf ein höheres
                    Niveau gebracht.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">3. Wärme abgeben</h3>
                  <p className="text-slate-600">
                    Die erzeugte Wärme wird an Ihr Heizsystem abgegeben und erwärmt
                    Ihr Zuhause.
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-12 mb-4">
                Unsere Wärmepumpen-Systeme
              </h3>
              <ul className="space-y-4">
                <li>
                  <strong>Luft-Wasser-Wärmepumpe:</strong> Am weitesten verbreitet
                  und einfach zu installieren. Nutzt die Außenluft als Wärmequelle.
                  Ideal für Neubauten und sanierte Bestandsgebäude.
                </li>
                <li>
                  <strong>Sole-Wasser-Wärmepumpe (Erdwärme):</strong> Sehr
                  effizient durch konstante Erdtemperatur. Benötigt Erdbohrung oder
                  Erdkollektor. Höchste Effizienz, besonders im Winter.
                </li>
                <li>
                  <strong>Wasser-Wasser-Wärmepumpe:</strong> Nutzt Grundwasser als
                  Wärmequelle. Höchste Effizienz, aber nicht überall möglich.
                  Erfordert Brunnenbohrung und Genehmigung.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection variant="gradient" />
    </>
  );
}
