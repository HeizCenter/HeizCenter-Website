import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import {
  LocationServices,
  LocationService,
} from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title:
    "HeizCenter Landsberg am Lech - Wärmepumpe, Heizung & Sanitär | Service vor Ort",
  description:
    "HeizCenter Service in Landsberg am Lech. Wärmepumpen, Heizung, Sanitär und Klimaanlagen. Schneller Service aus Augsburg - nur 35 km entfernt. Jetzt anfragen!",
  keywords: [
    "Wärmepumpe Landsberg",
    "Heizung Landsberg",
    "Sanitär Landsberg",
    "Klimaanlage Landsberg",
    "HeizCenter Landsberg am Lech",
  ],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Landsberg. BEG-Förderung bis 40%. Professionelle Installation.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Heizungsinstallation und Wartung in Landsberg. 24/7 Notdienst verfügbar.",
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
    question: "Wie schnell können Sie in Landsberg am Lech vor Ort sein?",
    answer:
      "Von unserem Standort in Augsburg erreichen wir Landsberg am Lech in etwa 30-40 Minuten. Bei Notfällen sind wir in der Regel innerhalb von 2-4 Stunden vor Ort. Für geplante Termine stimmen wir einen passenden Zeitpunkt mit Ihnen ab.",
  },
  {
    question: "Welche Leistungen bieten Sie in Landsberg an?",
    answer:
      "Wir bieten in Landsberg am Lech das komplette Leistungsspektrum: Wärmepumpen-Installation mit BEG-Förderung, Heizungsinstallation und -wartung, komplette Badsanierungen mit 3D-Planung sowie Installation von Split-Klimaanlagen. Auch Notdienst und Reparaturen gehören zu unserem Service.",
  },
  {
    question: "Fallen für die Anfahrt nach Landsberg zusätzliche Kosten an?",
    answer:
      "Für Landsberg am Lech berechnen wir eine moderate Anfahrtspauschale von 30€. Bei größeren Aufträgen (Wärmepumpe, Heizungstausch, Badsanierung) entfällt die Anfahrt komplett. Die Beratung vor Ort ist grundsätzlich kostenlos und unverbindlich.",
  },
  {
    question: "Sind Ihre Techniker auch für Landsberg qualifiziert?",
    answer:
      "Absolut! Unsere Techniker sind zertifizierte Fachkräfte mit langjähriger Erfahrung. Sie kennen die regionalen Gegebenheiten und sind mit den Anforderungen in Landsberg und Umgebung bestens vertraut. Alle Arbeiten entsprechen den aktuellen technischen Standards und Vorschriften.",
  },
];

// LocalBusiness schema referencing Augsburg office
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://heizcenter.de/standorte/landsberg",
  name: "HeizCenter Service Landsberg am Lech",
  image: "https://heizcenter.de/images/landsberg-service.jpg",
  description:
    "HeizCenter Service für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Landsberg am Lech",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Landsberg am Lech",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.0502,
    longitude: 10.8744,
  },
  telephone: "+49 8234 96659 00",
  email: "info@heizcenter.de",
  url: "https://heizcenter.de/standorte/landsberg",
  priceRange: "€€",
  areaServed: {
    "@type": "City",
    name: "Landsberg am Lech",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "HeizCenter Augsburg",
    url: "https://heizcenter.de/standorte/augsburg",
  },
};

export default function LandsbergPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <LocationHero
        name="Landsberg am Lech"
        address="Lechallee 28, 86399 Bobingen"
        phone="+49 8234 966590"
        email="service@heizcenter.de"
        description="HeizCenter Service für Landsberg am Lech und Umgebung. Schneller Service aus Augsburg für Wärmepumpen, Heizung, Sanitär und Klimaanlagen. Professionelle Beratung und Installation."
        mainLocation="Bobingen"
      />

      <LocationServices
        services={services}
        title="Unsere Leistungen in Landsberg am Lech"
      />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter Service in Landsberg am Lech
          </h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 mb-6">
              Als etablierter Fachbetrieb aus Augsburg betreuen wir auch Kunden in
              Landsberg am Lech und Umgebung. Die historische Stadt am Lech liegt nur
              35 Kilometer von unserem Hauptsitz entfernt - kurze Wege bedeuten für
              Sie schnellen Service und flexible Terminvereinbarungen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Wärmepumpen für Landsberg am Lech
            </h3>
            <p className="text-slate-700 mb-4">
              Landsberg setzt auf zukunftsfähige Heizsysteme. Wärmepumpen sind dabei
              die erste Wahl - umweltfreundlich, effizient und staatlich gefördert.
              Wir installieren moderne Luft-Wasser-Wärmepumpen und Erdwärmepumpen,
              die perfekt auf die klimatischen Bedingungen im Landkreis Landsberg
              abgestimmt sind.
            </p>
            <p className="text-slate-700 mb-6">
              <strong>Ihre Vorteile:</strong> Bis zu 70% niedrigere Heizkosten,
              BEG-Förderung bis 40%, unabhängig von Öl und Gas. Kostenlose Beratung
              vor Ort in Landsberg inklusive Wirtschaftlichkeitsberechnung.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Heizung & Notdienst in Landsberg
            </h3>
            <p className="text-slate-700 mb-4">
              Von Gasheizung über Ölheizung bis zur Pelletheizung - wir installieren
              und warten alle gängigen Heizsysteme in Landsberg am Lech. Unser 24/7
              Heizungsnotdienst ist auch für Landsberg verfügbar. Bei einem
              Heizungsausfall im Winter erreichen Sie uns jederzeit.
            </p>
            <p className="text-slate-700 mb-6">
              Regelmäßige Wartung verlängert die Lebensdauer Ihrer Heizung und spart
              Energiekosten. Wir bieten Wartungsverträge auch für Kunden in Landsberg
              und Umgebung an.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Badsanierung in Landsberg am Lech
            </h3>
            <p className="text-slate-700 mb-4">
              Planen Sie eine Badsanierung in Landsberg? Wir setzen Ihr Traumbad um -
              von der 3D-Planung bis zur schlüsselfertigen Übergabe. Barrierefreie
              Bäder, moderne Ausstattung und professionelle Handwerksarbeit zeichnen
              uns aus.
            </p>
            <p className="text-slate-700 mb-6">
              <strong>Festpreisgarantie:</strong> Sie erhalten ein detailliertes
              Angebot ohne versteckte Kosten. Die Umsetzung erfolgt durch koordinierte
              Fachbetriebe in 2-3 Wochen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Klimaanlagen für Landsberg</h3>
            <p className="text-slate-700 mb-6">
              Die Sommer werden heißer - auch in Landsberg am Lech. Eine moderne
              Split-Klimaanlage sorgt für angenehme Temperaturen in Ihrem Zuhause oder
              Büro. Und im Winter können Sie damit auch heizen! Installation durch
              zertifizierte Kältetechniker, flüsterleise Premium-Geräte ab 19 dB(A).
            </p>

            <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-3">Service-Radius Landsberg</h3>
              <p className="text-slate-700 mb-3">
                Von Landsberg am Lech aus betreuen wir auch:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Kaufering</li>
                <li>Penzing</li>
                <li>Scheuring</li>
                <li>Denklingen</li>
                <li>Reichling</li>
                <li>Thaining</li>
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
