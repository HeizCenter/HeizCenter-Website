import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Droplet,
  Sparkles,
  PaintBucket,
  Wrench,
  Clock,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sanitär & Badsanierung in Augsburg, Ulm & Memmingen | HeizCenter",
  description:
    "Professionelle Badsanierung und Sanitärinstallationen. Von der Planung bis zur Umsetzung. Barrierefreie Bäder, moderne Armaturen, Notdienst. Jetzt beraten lassen!",
  keywords: [
    "Badsanierung",
    "Sanitär",
    "Badezimmer",
    "barrierefreies Bad",
    "Sanitärinstallation",
    "Augsburg",
    "Ulm",
    "Memmingen",
  ],
};

const benefits = [
  "Komplette Badsanierung aus einer Hand",
  "3D-Badplanung für perfekte Visualisierung",
  "Barrierefreie und seniorengerechte Bäder",
  "Hochwertige Marken-Armaturen und Fliesen",
  "Koordination aller Gewerke",
  "Festpreisgarantie ohne Überraschungen",
];

const features = [
  {
    title: "Komplettservice",
    description:
      "Von der Planung über die Fliesenarbeiten bis zur Endabnahme - alles aus einer Hand. Wir koordinieren alle Gewerke für Sie.",
    icon: Sparkles,
  },
  {
    title: "3D-Badplanung",
    description:
      "Visualisieren Sie Ihr neues Bad bereits vor Baubeginn. Unsere 3D-Planung zeigt Ihnen jedes Detail und hilft bei der Entscheidung.",
    icon: PaintBucket,
  },
  {
    title: "Schnelle Umsetzung",
    description:
      "Durchschnittlich 2-3 Wochen von Baubeginn bis zur Fertigstellung. Zuverlässige Terminplanung und pünktliche Ausführung.",
    icon: Clock,
  },
  {
    title: "Professionelle Installation",
    description:
      "Zertifizierte Fachbetriebe mit jahrelanger Erfahrung. Hochwertige Verarbeitung und Qualitätskontrolle auf jeder Baustelle.",
    icon: Wrench,
  },
  {
    title: "Barrierefrei",
    description:
      "Barrierefreie Bäder nach DIN 18040. Bodengleiche Duschen, unterfahrbare Waschtische und mehr. Zuschüsse bis 4.000€ möglich.",
    icon: Shield,
  },
  {
    title: "Notdienst",
    description:
      "24/7 Sanitärnotdienst bei Rohrbruch, Verstopfungen oder anderen Notfällen. Schnelle Hilfe wenn Sie uns brauchen.",
    icon: Droplet,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Was kostet eine Badsanierung?",
    answer:
      "Die Kosten für eine Badsanierung variieren stark je nach Größe, Ausstattung und Umfang. Ein kleines Bad (5-6 m²) kostet ca. 15.000-25.000€, ein mittelgroßes Bad (8-10 m²) 25.000-35.000€. Hochwertige Ausstattung und barrierefreier Umbau erhöhen den Preis. Wir erstellen Ihnen ein individuelles Festpreisangebot.",
  },
  {
    question: "Wie lange dauert eine Badsanierung?",
    answer:
      "Eine typische Badsanierung dauert 2-3 Wochen. In der ersten Woche erfolgt der Rückbau und die Rohinstallation, in der zweiten Woche Fliesen- und Malerarbeiten, in der dritten Woche die Montage von Sanitärobjekten und Armaturen. Bei größeren Bädern oder Sonderwünschen kann es auch 4 Wochen dauern.",
  },
  {
    question: "Kann ich während der Sanierung im Haus bleiben?",
    answer:
      "Ja, das ist in den meisten Fällen möglich. Das Badezimmer ist während der Bauzeit natürlich nicht nutzbar. Bei einem zweiten WC/Bad können Sie im Haus bleiben. Ansonsten empfehlen wir einen Kurzurlaub oder wir organisieren eine mobile Sanitärlösung für Sie.",
  },
  {
    question: "Welche Förderung gibt es für barrierefreie Bäder?",
    answer:
      "Die KfW fördert barrierefreie Umbauten mit bis zu 4.000€ Zuschuss (KfW 455-B). Auch die Pflegekasse übernimmt bis zu 4.000€ bei anerkanntem Pflegegrad. In Summe sind also bis zu 8.000€ Zuschuss möglich. Wir beraten Sie gerne zu den Fördermöglichkeiten.",
  },
  {
    question: "Was gehört zu einer Badsanierung?",
    answer:
      "Eine Komplettsanierung umfasst: Rückbau des alten Bads, neue Elektro- und Sanitärinstallation, Fliesen an Wand und Boden, neue Sanitärobjekte (WC, Waschtisch, Dusche/Wanne), Armaturen, Beleuchtung, Malerarbeiten und ggf. Möbel. Wir kümmern uns um alle Gewerke und koordinieren die Handwerker.",
  },
  {
    question: "Bieten Sie auch Teilsanierungen an?",
    answer:
      "Ja, auch Teilsanierungen sind möglich. Zum Beispiel nur die Dusche erneuern, neue Armaturen montieren oder Fliesen austauschen. Auch kleinere Reparaturen führen wir gerne durch. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
  {
    question: "Was ist eine bodengleiche Dusche?",
    answer:
      "Eine bodengleiche Dusche hat keine Duschwanne und keinen Einstieg - der Duschbereich ist auf gleicher Höhe wie der restliche Badezimmerboden. Das sieht modern aus, ist barrierefrei und erleichtert die Reinigung. Das Gefälle im Boden sorgt für den Wasserabflauf. Ideal für jedes Alter!",
  },
];

export default function SanitaerPage() {
  return (
    <>
      <ServiceHero
        title="Sanitär & Badsanierung"
        description="Verwandeln Sie Ihr Badezimmer in eine Wohlfühloase. Professionelle Planung und Umsetzung durch erfahrene Fachbetriebe. Von modern bis barrierefrei."
        benefits={benefits}
        icon={Droplet}
        badge="Festpreisgarantie"
      />

      <FeaturesSection
        title="Ihre Vorteile bei der Badsanierung mit HeizCenter"
        features={features}
      />

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Unsere Sanitär-Leistungen</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Komplett-Badsanierung</h3>
                <p className="text-slate-700 mb-4">
                  Wir sanieren Ihr Badezimmer von Grund auf. Inklusive 3D-Planung,
                  Rückbau, neuer Sanitärinstallation, Fliesen, Elektrik und
                  Montage aller Sanitärobjekte. Alles aus einer Hand.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>3D-Visualisierung Ihres neuen Bades</li>
                  <li>Koordination aller Gewerke</li>
                  <li>Hochwertige Markenarmaturen</li>
                  <li>Festpreisangebot ohne Überraschungen</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Barrierefreies Bad</h3>
                <p className="text-slate-700 mb-4">
                  Planen Sie frühzeitig für das Alter oder schaffen Sie
                  Barrierefreiheit bei akutem Bedarf. Wir setzen barrierefreie
                  Bäder nach DIN 18040 um.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Bodengleiche, schwellenlose Duschen</li>
                  <li>Unterfahrbare Waschtische</li>
                  <li>Haltegriffe und Stützklappgriffe</li>
                  <li>Rutschfeste Fliesen</li>
                  <li>Bis zu 8.000€ Förderung möglich</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Sanitärinstallationen</h3>
                <p className="text-slate-700 mb-4">
                  Neue Armaturen, Waschbecken, Toiletten oder Duschen - wir
                  installieren alles fachgerecht. Auch Reparaturen und Wartungen
                  gehören zu unserem Service.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Austausch von Sanitärobjekten</li>
                  <li>Armaturen und Waschtische</li>
                  <li>Duschen und Badewannen</li>
                  <li>Reparatur und Wartung</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Gäste-WC</h3>
                <p className="text-slate-700 mb-4">
                  Auch kleine Räume können großartig aussehen. Wir gestalten Ihr
                  Gäste-WC modern und funktional - perfekt abgestimmt auf den
                  verfügbaren Platz.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Platzsparende Lösungen</li>
                  <li>Moderne Gestaltung</li>
                  <li>Hochwertige Materialien</li>
                  <li>Schnelle Umsetzung</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Ablauf einer Badsanierung
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <strong>Beratung & Planung:</strong> Kostenlose Beratung vor
                    Ort, Aufmaß und 3D-Planung Ihres neuen Bades
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <strong>Angebot:</strong> Detailliertes Festpreisangebot mit
                    allen Leistungen und Materialien
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <strong>Umsetzung:</strong> Koordinierte Ausführung aller
                    Gewerke in 2-3 Wochen
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <div>
                    <strong>Abnahme:</strong> Gemeinsame Endabnahme und Übergabe
                    Ihres neuen Traumbades
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection variant="gradient" />
    </>
  );
}
