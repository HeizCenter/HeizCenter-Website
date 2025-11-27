import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import {
  LocationServices,
  LocationService,
} from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title:
    "HeizCenter Kaufbeuren - Wärmepumpe, Heizung & Sanitär | Service vor Ort",
  description:
    "HeizCenter Service in Kaufbeuren. Wärmepumpen, Heizung, Sanitär und Klimaanlagen. Schneller Service aus Memmingen - nur 25 km entfernt. Jetzt anfragen!",
  keywords: [
    "Wärmepumpe Kaufbeuren",
    "Heizung Kaufbeuren",
    "Sanitär Kaufbeuren",
    "Klimaanlage Kaufbeuren",
    "HeizCenter Kaufbeuren",
  ],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Kaufbeuren. BEG-Förderung bis 40%. Professionelle Installation.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Heizungsinstallation und Wartung in Kaufbeuren. 24/7 Notdienst verfügbar.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen. Festpreisgarantie und schnelle Umsetzung.",
    icon: Droplet,
    href: "/sanitaer",
  },
  {
    title: "Klimaanlage",
    description:
      "Split-Klimaanlagen für perfektes Raumklima. Kühlen und Heizen in einem System.",
    icon: Wind,
    href: "/klimaanlage",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Wie schnell können Sie in Kaufbeuren vor Ort sein?",
    answer:
      "Von unserem Standort in Memmingen erreichen wir Kaufbeuren in etwa 20-30 Minuten. Bei Notfällen sind wir in der Regel innerhalb von 2-3 Stunden vor Ort. Für geplante Termine stimmen wir einen passenden Zeitpunkt mit Ihnen ab.",
  },
  {
    question: "Welche Leistungen bieten Sie in Kaufbeuren an?",
    answer:
      "Wir bieten in Kaufbeuren das komplette Leistungsspektrum: Wärmepumpen-Installation mit BEG-Förderung, Heizungsinstallation und -wartung, komplette Badsanierungen mit 3D-Planung sowie Installation von Split-Klimaanlagen. Auch Notdienst und Reparaturen gehören zu unserem Service.",
  },
  {
    question: "Fallen für die Anfahrt nach Kaufbeuren zusätzliche Kosten an?",
    answer:
      "Für Kaufbeuren berechnen wir eine moderate Anfahrtspauschale von 25€. Bei größeren Aufträgen (Wärmepumpe, Heizungstausch, Badsanierung) entfällt die Anfahrt komplett. Die Beratung vor Ort ist grundsätzlich kostenlos und unverbindlich.",
  },
  {
    question: "Kennen Sie sich mit den örtlichen Gegebenheiten in Kaufbeuren aus?",
    answer:
      "Ja, unsere Techniker haben langjährige Erfahrung in Kaufbeuren und dem gesamten Ostallgäu. Wir kennen die regionalen Besonderheiten, arbeiten mit lokalen Behörden zusammen und sind mit den Gegebenheiten vor Ort bestens vertraut.",
  },
];

export default function KaufbeurenPage() {
  const data = locationData["kaufbeuren"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "kaufueuren", url: "/standorte/kaufbeuren" },
        ]}
      />
      {/* Schema.org LocalBusiness Structured Data */}
      <LocationPageSchema
        cityName={data.cityName}
        postalCode={data.postalCode}
        region={data.region}
        latitude={data.latitude}
        longitude={data.longitude}
        serviceCities={data.serviceCities}
      />

      <LocationHero
        name="Kaufbeuren"
        address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel"
        phone="+49 8234 9665900"
        email="service@heizcenter.de"
        description="HeizCenter Service für Kaufbeuren und das Ostallgäu. Schneller Service aus Memmingen für Wärmepumpen, Heizung, Sanitär und Klimaanlagen. Professionelle Beratung und Installation."
        mainLocation="Gutenzell-Hürbel"
      />

      <LocationServices
        services={services}
        title="Unsere Leistungen in Kaufbeuren"
      />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">HeizCenter Service in Kaufbeuren</h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Als etablierter Fachbetrieb aus Memmingen betreuen wir auch Kunden in
              Kaufbeuren und im gesamten Ostallgäu. Die historische Reichsstadt liegt
              nur 25 Kilometer von unserem Standort entfernt - kurze Wege bedeuten
              schnellen Service und flexible Terminvereinbarungen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Wärmepumpen für Kaufbeuren
            </h3>
            <p className="text-slate-700 mb-4">
              Kaufbeuren setzt auf nachhaltige Energieversorgung. Wärmepumpen sind die
              Heizung der Zukunft - effizient, umweltfreundlich und staatlich
              gefördert. Wir installieren moderne Wärmepumpen-Systeme, die perfekt auf
              die klimatischen Bedingungen im Allgäu abgestimmt sind.
            </p>
            <p className="text-slate-700 mb-6">
              <strong>Ihre Vorteile:</strong> Bis zu 70% niedrigere Heizkosten im
              Vergleich zur Gasheizung, BEG-Förderung bis 40%, CO2-neutrales Heizen.
              Kostenlose Vor-Ort-Beratung in Kaufbeuren mit individueller
              Wirtschaftlichkeitsberechnung.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Heizung & Notdienst in Kaufbeuren
            </h3>
            <p className="text-slate-700 mb-4">
              Von moderner Gasbrennwertheizung über Pelletheizung bis zur
              Hybridheizung - wir installieren und warten alle Heizungssysteme in
              Kaufbeuren. Unser 24/7 Heizungsnotdienst ist auch für das Ostallgäu
              verfügbar.
            </p>
            <p className="text-slate-700 mb-6">
              Die regelmäßige Wartung Ihrer Heizung verlängert die Lebensdauer, spart
              Energie und ist Voraussetzung für die Herstellergarantie. Wir bieten
              Wartungsverträge auch für Kunden in Kaufbeuren und Umgebung.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Badsanierung in Kaufbeuren</h3>
            <p className="text-slate-700 mb-4">
              Verwandeln Sie Ihr Badezimmer in eine Wohlfühloase! Mit unserer
              3D-Badplanung können Sie Ihr neues Bad bereits vor Baubeginn
              visualisieren. Von modern bis barrierefrei - wir setzen Ihre Wünsche um.
            </p>
            <p className="text-slate-700 mb-6">
              <strong>Festpreisgarantie:</strong> Sie erhalten ein transparentes
              Angebot ohne versteckte Kosten. Koordination aller Gewerke und
              Fertigstellung in 2-3 Wochen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Klimaanlagen für Kaufbeuren
            </h3>
            <p className="text-slate-700 mb-6">
              Auch im Allgäu gibt es heiße Sommertage. Eine moderne Split-Klimaanlage
              sorgt für angenehme Temperaturen - und kann im Winter auch heizen!
              Flüsterleise, energieeffizient (A+++) und per App steuerbar. Installation
              in 4-6 Stunden durch zertifizierte Kältetechniker.
            </p>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Service-Radius Kaufbeuren</h3>
              <p className="text-slate-700 mb-3">
                Von Kaufbeuren aus betreuen wir auch:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Neugablonz</li>
                <li>Oberbeuren</li>
                <li>Hirschzell</li>
                <li>Pforzen</li>
                <li>Irsee</li>
                <li>Baisweil</li>
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
