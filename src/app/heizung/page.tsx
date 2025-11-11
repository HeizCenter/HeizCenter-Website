import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Flame, Clock, Euro, Wrench, Shield, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Heizung Installation & Wartung in Augsburg, Ulm & Memmingen",
  description:
    "Moderne Heizungsanlagen vom Fachbetrieb. Gas, Öl, Pellets oder Hybrid. Wartung, Reparatur und Notdienst. Über 20 Jahre Erfahrung.",
  keywords: [
    "Heizung",
    "Heizungsinstallation",
    "Gasheizung",
    "Ölheizung",
    "Pelletheizung",
    "Heizungswartung",
    "Heizungsnotdienst",
    "Augsburg",
  ],
};

const benefits = [
  "Professionelle Installation aller Heizungssysteme",
  "Regelmäßige Wartung für maximale Effizienz",
  "24/7 Notdienst bei Heizungsausfall",
  "Energieberatung und Optimierung",
  "Staatliche Förderung für neue Heizungen",
  "Über 20 Jahre Erfahrung",
];

const features = [
  {
    title: "Schneller Service",
    description:
      "Schnelle Terminvergabe und zuverlässige Ausführung. Bei Notfällen sind wir innerhalb von 24 Stunden vor Ort.",
    icon: Clock,
  },
  {
    title: "Faire Preise",
    description:
      "Transparente Kostenvoranschläge ohne versteckte Kosten. Beste Qualität zum fairen Preis.",
    icon: Euro,
  },
  {
    title: "Fachgerechte Installation",
    description:
      "Zertifizierte Fachbetriebe mit langjähriger Erfahrung. Hydraulischer Abgleich und Inbetriebnahme inklusive.",
    icon: Wrench,
  },
  {
    title: "Regelmäßige Wartung",
    description:
      "Wartungsverträge für sorgenfreien Betrieb. Verlängert die Lebensdauer und spart Energiekosten.",
    icon: Shield,
  },
  {
    title: "Energie-Effizienz",
    description:
      "Modernste Brennwerttechnik und intelligente Regelung. Bis zu 30% Energieeinsparung möglich.",
    icon: Thermometer,
  },
  {
    title: "Notdienst",
    description:
      "24/7 Heizungsnotdienst für unsere Kunden. Auch an Wochenenden und Feiertagen erreichbar.",
    icon: Flame,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Heizung ist die richtige für mich?",
    answer:
      "Das hängt von vielen Faktoren ab: Gebäudegröße, Dämmung, Budget und persönliche Präferenzen. Wärmepumpen sind am effizientesten und zukunftssicher, Gasbrennwertkessel eine bewährte Alternative, und Pelletheizungen ideal für ländliche Regionen. Wir beraten Sie kostenlos und finden die optimale Lösung.",
  },
  {
    question: "Wie oft muss eine Heizung gewartet werden?",
    answer:
      "Eine jährliche Wartung ist empfehlenswert und bei den meisten Herstellern Voraussetzung für die Garantie. Bei der Wartung werden Verschleißteile geprüft, die Anlage gereinigt und optimal eingestellt. Das spart Energie, verlängert die Lebensdauer und vermeidet teure Reparaturen.",
  },
  {
    question: "Was kostet eine neue Heizung?",
    answer:
      "Die Kosten variieren je nach System: Eine Gasbrennwertheizung kostet 8.000-12.000€, eine Wärmepumpe 20.000-30.000€, und eine Pelletheizung 15.000-25.000€. Dazu kommen ggf. Kosten für Heizkörper, Rohrleitungen und Installation. Staatliche Förderungen reduzieren die Kosten erheblich.",
  },
  {
    question: "Gibt es Förderung für neue Heizungen?",
    answer:
      "Ja! Die BEG-Förderung unterstützt den Heizungstausch mit bis zu 40%. Besonders gefördert werden Wärmepumpen, Pelletheizungen und Hybrid-Systeme. Auch Gas-Brennwertkessel in Kombination mit erneuerbaren Energien werden gefördert. Wir helfen bei der Antragstellung.",
  },
  {
    question: "Wie lange dauert der Heizungstausch?",
    answer:
      "Ein Heizungstausch dauert in der Regel 2-3 Tage. Bei komplexeren Anlagen oder zusätzlichen Arbeiten kann es auch eine Woche werden. Während der Installation haben Sie in der Regel nur wenige Stunden keine Heizung. Wir planen den Tausch optimal und minimieren die Ausfallzeit.",
  },
  {
    question: "Was tun bei Heizungsausfall?",
    answer:
      "Prüfen Sie zuerst den Wasserdruck und ob die Heizung mit Strom versorgt wird. Wenn die Heizung nicht anspringt, kontaktieren Sie uns über unseren 24/7-Notdienst. Wir sind innerhalb von 24 Stunden vor Ort und beheben das Problem schnellstmöglich.",
  },
];

export default function HeizungPage() {
  return (
    <>
      <ServiceHero
        title="Heizungsinstallation & Wartung"
        description="Von der Planung über die Installation bis zur Wartung - Ihr Heizungsexperte mit über 20 Jahren Erfahrung in Augsburg, Ulm und Memmingen."
        benefits={benefits}
        icon={Flame}
        badge="24/7 Notdienst"
      />

      <FeaturesSection
        title="Unsere Heizungs-Dienstleistungen"
        features={features}
      />

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Unsere Heizungssysteme im Überblick
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Gasheizung</h3>
                <p className="text-slate-700 mb-4">
                  Moderne Gasbrennwertkessel nutzen auch die Wärme der Abgase und
                  erreichen Wirkungsgrade von bis zu 98%. In Kombination mit
                  Solarthermie oder einer Wärmepumpe (Hybrid) besonders effizient.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Bewährte und zuverlässige Technologie</li>
                  <li>Geringe Anschaffungskosten</li>
                  <li>Kompakte Bauweise</li>
                  <li>Kombination mit erneuerbaren Energien möglich</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ölheizung</h3>
                <p className="text-slate-700 mb-4">
                  Moderne Öl-Brennwertkessel sind effizienter denn je. Ideal für
                  Gebäude ohne Gasanschluss. Langfristig empfehlen wir jedoch den
                  Umstieg auf erneuerbare Energien.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Unabhängig vom Gasnetz</li>
                  <li>Bewährte Technik</li>
                  <li>Brennwerttechnik für hohe Effizienz</li>
                  <li>Kombination mit Solarthermie empfehlenswert</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Pelletheizung</h3>
                <p className="text-slate-700 mb-4">
                  Heizen Sie mit nachwachsenden Rohstoffen. Pelletheizungen sind
                  CO2-neutral und bieten hohen Komfort durch automatische
                  Beschickung. Ideal für Ein- und Mehrfamilienhäuser.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>CO2-neutrales Heizen mit Holzpellets</li>
                  <li>Hohe Förderung durch BEG</li>
                  <li>Automatischer Betrieb</li>
                  <li>Preisstabile Brennstoffkosten</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Hybrid-Heizung</h3>
                <p className="text-slate-700 mb-4">
                  Kombinieren Sie das Beste aus zwei Welten: Eine Wärmepumpe deckt
                  die Grundlast, ein Gas- oder Ölkessel springt bei Bedarf ein.
                  Maximale Effizienz und Versorgungssicherheit.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Intelligente Kombination zweier Systeme</li>
                  <li>Hohe Effizienz und Versorgungssicherheit</li>
                  <li>Staatlich gefördert</li>
                  <li>Schrittweiser Umstieg auf erneuerbare Energien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection variant="gradient" />
    </>
  );
}
