import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  Wind,
  Snowflake,
  Sun,
  Zap,
  Volume2,
  Shield,
} from "lucide-react";
import { ServiceSchema } from "@/components/schema/service-schema";
import { FAQSchema } from "@/components/schema/faq-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Klimaanlage Augsburg, Ulm & Memmingen - Installation & Wartung | HeizCenter",
  description:
    "Professionelle Klimaanlagen für Wohnungen, Häuser und Gewerbe in Augsburg, Ulm und Memmingen. Split-Klimaanlagen, Multi-Split-Systeme. Kühlen und Heizen mit einem Gerät.",
  keywords: [
    "Klimaanlage",
    "Klimaanlage Augsburg",
    "Split-Klimaanlage",
    "Klimagerät",
    "Kühlung",
    "Klimatechnik",
    "Augsburg",
    "Ulm",
  ],
  alternates: {
    canonical: getCanonicalUrl("/klimaanlage"),
  },
};

export const dynamic = 'force-dynamic';

const benefits = [
  "Angenehme Raumtemperatur auch an heißen Sommertagen",
  "Moderne Split-Klimaanlagen mit höchster Energieeffizienzklasse",
  "Heizen und Kühlen mit einem Gerät",
  "Flüsterleiser Betrieb ab 19 dB(A)",
  "Professionelle Installation durch Kältetechniker",
  "Wartung und Service aus einer Hand",
];

const features = [
  {
    title: "Kühlen & Heizen",
    description:
      "Moderne Klimaanlagen sind Wärmepumpen und können kühlen UND heizen. Im Sommer angenehm kühl, im Winter mollig warm.",
    icon: Snowflake,
  },
  {
    title: "Energieeffizient",
    description:
      "Geräte der höchsten Effizienzklasse A mit SEER-Werten bis 8,5. Deutlich effizienter als mobile Klimageräte. Niedrige Betriebskosten.",
    icon: Zap,
  },
  {
    title: "Flüsterleise",
    description:
      "Premium-Geräte ab 19 dB(A) - leiser als ein Blätterrascheln. Ungestörter Schlaf selbst bei Betrieb im Schlafzimmer.",
    icon: Volume2,
  },
  {
    title: "Luftreinigung",
    description:
      "Integrierte Filter entfernen Pollen, Staub und Allergene. Besonders vorteilhaft für Allergiker und Asthmatiker.",
    icon: Shield,
  },
  {
    title: "Smart Control",
    description:
      "Steuerung per App von überall. Zeitprogramme, Temperaturregelung und Energiemonitoring per Smartphone.",
    icon: Sun,
  },
  {
    title: "Profi-Installation",
    description:
      "Installation durch zertifizierte Kältetechniker. Fachgerechte Montage, Kältemittel-Handling und Inbetriebnahme.",
    icon: Wind,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Was kostet eine Klimaanlage?",
    answer:
      "Eine Single-Split-Klimaanlage (1 Innengerät) kostet inkl. Installation 2.500-4.000€. Multi-Split-Systeme (mehrere Innengeräte) kosten 4.000-8.000€ je nach Anzahl der Räume. Premium-Geräte mit besonders leisem Betrieb und erweiterten Funktionen sind etwas teurer. Wir erstellen Ihnen ein individuelles Angebot.",
  },
  {
    question: "Split oder mobile Klimaanlage - was ist besser?",
    answer:
      "Split-Klimaanlagen sind deutlich effizienter, leiser und leistungsstärker als mobile Geräte. Mobile Klimageräte haben einen Wirkungsgrad von nur 2,5, Split-Anlagen erreichen Werte von 4-5. Split-Anlagen sind eine dauerhafte Lösung mit niedrigen Betriebskosten. Mobile Geräte sind laut und stromintensiv.",
  },
  {
    question: "Kann eine Klimaanlage auch heizen?",
    answer:
      "Ja! Moderne Split-Klimaanlagen sind Luft-Luft-Wärmepumpen und können sehr effizient heizen. Sie sind ideal als Übergangsheizung im Frühling/Herbst oder zur Unterstützung der Hauptheizung. Der Wirkungsgrad ist höher als bei Elektroheizungen.",
  },
  {
    question: "Wie laut ist eine Klimaanlage?",
    answer:
      "Premium-Innengeräte erreichen im Flüstermodus 19-22 dB(A) - das ist leiser als ein Blätterrascheln. Außengeräte sind mit 45-55 dB(A) vergleichbar mit einem Kühlschrank. Bei fachgerechter Installation und richtiger Dimensionierung sind moderne Klimaanlagen kaum hörbar.",
  },
  {
    question: "Wie hoch sind die Stromkosten?",
    answer:
      "Eine effiziente Split-Klimaanlage (Energieeffizienzklasse A) verbraucht pro Stunde etwa 0,3-0,9 kWh je nach Leistung. Bei 8 Stunden Betrieb am Tag und 90 Sommertagen entstehen Kosten von ca. 70-200€ pro Sommer. Deutlich günstiger als mobile Klimageräte!",
  },
  {
    question: "Wie lange dauert die Installation?",
    answer:
      "Die Installation einer Single-Split-Anlage dauert in der Regel 4-6 Stunden. Multi-Split-Systeme benötigen 1-2 Tage. Wir bohren die Kernbohrung für die Kältemittelleitungen, montieren Innen- und Außengerät, befüllen das System und nehmen es in Betrieb. Sie können die Anlage sofort nutzen.",
  },
  {
    question: "Brauche ich eine Genehmigung?",
    answer:
      "Für Einfamilienhäuser in der Regel nicht. Bei Mehrfamilienhäusern sollten Sie die Zustimmung des Vermieters/der Eigentümergemeinschaft einholen. In denkmalgeschützten Gebäuden kann eine Genehmigung erforderlich sein. Wir beraten Sie gerne zu den Voraussetzungen.",
  },
  {
    question: "Wie oft muss eine Klimaanlage gewartet werden?",
    answer:
      "Eine jährliche Wartung ist empfehlenswert. Dabei werden Filter gereinigt, Kältemittelfüllstand geprüft, und das System auf Funktion kontrolliert. Viele Hersteller verlangen regelmäßige Wartung als Garantievoraussetzung. Wir bieten Wartungsverträge für sorgenfreien Betrieb.",
  },
];

export default function KlimaanlagePage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Klimaanlage", url: "/klimaanlage" },
        ]}
      />
      {/* Schema.org Service Structured Data */}
      <ServiceSchema serviceType="klimaanlage" />
      <FAQSchema faqs={faqs} />

      <ServiceHero
        title="Klimaanlage in Augsburg, Ulm & Memmingen"
        description="Angenehme Raumtemperatur das ganze Jahr. Moderne Split-Klimaanlagen kühlen im Sommer und heizen im Winter. Energieeffizient und flüsterleise."
        benefits={benefits}
        icon={Wind}
        badge="Kühlen & Heizen"
        imageSrc="/images/klima.jpeg"
      />

      <FeaturesSection
        title="Ihre Vorteile mit einer Klimaanlage von HeizCenter"
        features={features}
      />

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Unsere Klimaanlagen-Systeme
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Single-Split-Klimaanlage</h3>
                <p className="text-slate-700 mb-4">
                  Ideal für einzelne Räume. Ein Außengerät versorgt ein Innengerät.
                  Perfekt für Schlafzimmer, Wohnzimmer oder Homeoffice. Die
                  beliebteste Lösung für Einfamilienhäuser und Wohnungen.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Für einen Raum (bis ca. 50 m²)</li>
                  <li>Einfache Installation</li>
                  <li>Geringe Anschaffungskosten</li>
                  <li>Ideal für Nachrüstung</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Multi-Split-Klimaanlage</h3>
                <p className="text-slate-700 mb-4">
                  Ein Außengerät versorgt mehrere Innengeräte (2-5 Räume). Jeder
                  Raum kann individuell geregelt werden. Platzsparend, da nur ein
                  Außengerät benötigt wird.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Für mehrere Räume</li>
                  <li>Nur ein Außengerät erforderlich</li>
                  <li>Individuelle Raumregelung</li>
                  <li>Kosteneffizienter bei mehreren Räumen</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Truhen- und Kassetten-Klimageräte
                </h3>
                <p className="text-slate-700 mb-4">
                  Für Gewerbe und große Räume. Truhengeräte stehen am Boden,
                  Kassettengeräte werden in abgehängte Decken eingebaut. Hohe
                  Kühl- und Heizleistung für Büros, Läden und Praxen.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Für große Räume und Gewerbe</li>
                  <li>Hohe Leistung</li>
                  <li>Dezente Integration möglich</li>
                  <li>Professionelle Lösungen</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-[#0F5B78]/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                So finden Sie die richtige Klimaanlage
              </h3>
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong>1. Raumgröße:</strong> Als Faustregel benötigen Sie pro
                  m² etwa 60-100 Watt Kühlleistung. Ein 25 m² Raum benötigt also
                  eine Anlage mit 2,5 kW. Bei Dachgeschoss oder Südausrichtung mehr.
                </p>
                <p>
                  <strong>2. Anzahl Räume:</strong> Für einen Raum ist eine
                  Single-Split ideal. Bei 2+ Räumen lohnt sich ein Multi-Split-System.
                </p>
                <p>
                  <strong>3. Lautstärke:</strong> Für Schlafzimmer empfehlen wir
                  Premium-Geräte ab 19 dB(A). Für Wohnräume reichen Standard-Geräte
                  mit 24-28 dB(A).
                </p>
                <p>
                  <strong>4. Zusatzfunktionen:</strong> WiFi-Steuerung, Luftreinigung,
                  Entfeuchtung - moderne Klimaanlagen können mehr als nur kühlen.
                </p>
                <p className="mt-6 font-semibold">
                  Wir beraten Sie kostenlos und finden die perfekte Klimaanlage für
                  Ihre Bedürfnisse!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        variant="gradient"
        service="klimaanlage"
        message="Ich interessiere mich für eine Klimaanlage. Bitte kontaktieren Sie mich für eine kostenlose Beratung."
      />
    </>
  );
}
