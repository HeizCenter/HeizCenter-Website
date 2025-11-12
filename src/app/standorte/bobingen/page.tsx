import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import {
  LocationServices,
  LocationService,
} from "@/components/sections/location-services";
import { LocationCoverage } from "@/components/sections/location-coverage";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title:
    "HeizCenter Bobingen - Hauptstandort | Wärmepumpe, Heizung, Sanitär & Klimaanlage",
  description:
    "Unser Hauptstandort in Bobingen. Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen. Kostenlose Beratung, schneller Service, faire Preise.",
  keywords: [
    "Wärmepumpe Bobingen",
    "Heizung Bobingen",
    "Sanitär Bobingen",
    "Klimaanlage Bobingen",
    "Badsanierung Bobingen",
    "Heizungsnotdienst Bobingen",
    "HeizCenter Bobingen",
    "HeizCenter Hauptstandort",
  ],
  openGraph: {
    title: "HeizCenter Bobingen - Hauptstandort für Wärmepumpen & Heizung",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Bobingen und Umgebung.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Bobingen und Umgebung. BEG-Förderung bis 40%. Energieeffizient und umweltfreundlich heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für Bobingen und Umgebung.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Bobingen. 3D-Planung und Festpreisgarantie.",
    icon: Droplet,
    href: "/sanitaer",
  },
  {
    title: "Klimaanlage",
    description:
      "Split-Klimaanlagen für angenehme Temperaturen. Heizen und Kühlen mit einem Gerät.",
    icon: Wind,
    href: "/klimaanlage",
  },
];

const coverageAreas = [
  "Bobingen",
  "Augsburg",
  "Königsbrunn",
  "Neusäß",
  "Friedberg",
  "Stadtbergen",
  "Gersthofen",
  "Landsberg am Lech",
  "Aichach",
  "Schwabmünchen",
  "Mering",
  "Dasing",
  "Kissing",
  "Wehringen",
  "Schwabmünchen",
];

// Generate LocalBusiness JSON-LD schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://heizcenter.de/standorte/bobingen",
  name: "HeizCenter Bobingen",
  image: "https://heizcenter.de/images/bobingen-location.jpg",
  description:
    "Hauptstandort Bobingen - Fachbetrieb für Wärmepumpen, Heizung, Sanitär und Klimaanlagen",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lechallee 28",
    addressLocality: "Bobingen",
    postalCode: "86399",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.2764,
    longitude: 10.8336,
  },
  telephone: "+49 8234 966590",
  email: "service@heizcenter.de",
  url: "https://heizcenter.de/standorte/bobingen",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "€€",
  areaServed: {
    "@type": "City",
    name: "Bobingen",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Heizung, Sanitär und Klimatechnik Dienstleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wärmepumpen Installation",
          description: "Installation und Wartung von Wärmepumpen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Heizungsinstallation",
          description: "Installation und Wartung von Heizungsanlagen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Badsanierung",
          description: "Komplette Badsanierung und Sanitärinstallationen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Klimaanlagen Installation",
          description: "Installation von Split-Klimaanlagen",
        },
      },
    ],
  },
};

export default function BobingenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <LocationHero
        name="Bobingen"
        address="Lechallee 28, 86399 Bobingen"
        phone="+49 8234 966590"
        email="service@heizcenter.de"
        description="Unser Hauptstandort in Bobingen - Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in der Region Augsburg. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
      />

      <LocationServices services={services} title="Unsere Leistungen in Bobingen" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter Bobingen - Ihr Hauptstandort im Raum Augsburg
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Willkommen bei HeizCenter in Bobingen! Als unser Hauptstandort im Raum
            Augsburg sind wir Ihr kompetenter Ansprechpartner für alle Fragen rund
            um Heizung, Sanitär und Klimatechnik. Von hier aus betreuen wir Augsburg
            und die gesamte Region mit kurzen Anfahrtswegen und schnellem Service.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen in Bobingen - Die Heizung der Zukunft
          </h3>
          <p className="text-slate-700 mb-4">
            Als einer der führenden Wärmepumpen-Experten in der Region installieren
            wir moderne Luft-Wasser-Wärmepumpen und Erdwärmepumpen, die perfekt auf
            die klimatischen Bedingungen in Schwaben abgestimmt sind.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Wärmepumpen-Leistungen in Bobingen:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>Kostenlose Vor-Ort-Beratung und Wirtschaftlichkeitsberechnung</li>
            <li>Fachgerechte Installation durch zertifizierte Techniker</li>
            <li>Unterstützung bei BEG-Förderanträgen (bis 40% Zuschuss)</li>
            <li>Hydraulischer Abgleich für maximale Effizienz</li>
            <li>Wartung und Kundendienst aus einer Hand</li>
          </ul>
          <p className="text-slate-700 mb-6">
            Dank der staatlichen BEG-Förderung von bis zu 40% wird der Umstieg auf
            eine Wärmepumpe besonders attraktiv. Wir helfen Ihnen bei der
            Antragstellung und sorgen dafür, dass Sie alle verfügbaren Förderungen
            optimal nutzen können.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsinstallation und -wartung in Bobingen
          </h3>
          <p className="text-slate-700 mb-4">
            Von der klassischen Gasheizung über Pelletheizungen bis hin zu modernen
            Hybrid-Systemen - wir installieren und warten alle gängigen
            Heizungssysteme. Unser 24/7-Notdienst ist für Sie da, wenn die Heizung
            ausfällt.
          </p>
          <p className="text-slate-700 mb-6">
            Die regelmäßige Wartung Ihrer Heizungsanlage spart nicht nur Energie,
            sondern ist auch Voraussetzung für die Herstellergarantie. Unsere
            Wartungsverträge sorgen für sorgenfreien Betrieb und verlängern die
            Lebensdauer Ihrer Heizung erheblich.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Bobingen - Modern und barrierefrei
          </h3>
          <p className="text-slate-700 mb-4">
            Träumen Sie von einem neuen Badezimmer? Wir setzen Ihre Badezimmer-Träume
            in die Realität um. Mit unserer 3D-Badplanung können Sie Ihr neues Bad
            bereits vor Baubeginn visualisieren.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Badsanierung in Bobingen umfasst:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Planung und Festpreisangebot</li>
            <li>Barrierefreie Bäder nach DIN 18040 (Förderung bis 8.000€)</li>
            <li>Bodengleiche Duschen und moderne Badausstattung</li>
            <li>Koordination aller Gewerke (Fliesen, Elektro, Sanitär)</li>
            <li>Fertigstellung in 2-3 Wochen</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Bobingen - Angenehm kühl im Sommer
          </h3>
          <p className="text-slate-700 mb-4">
            Die Sommer werden immer heißer. Eine moderne Split-Klimaanlage sorgt für
            angenehme Temperaturen in Ihrem Zuhause oder Büro. Und das Beste: Im
            Winter können Sie damit auch heizen!
          </p>
          <p className="text-slate-700 mb-6">
            Unsere Klimaanlagen sind flüsterleise (ab 19 dB(A)), energieeffizient
            (A+++) und können per App gesteuert werden. Die Installation erfolgt
            durch zertifizierte Kältetechniker und dauert in der Regel nur 4-6
            Stunden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Schneller Service im ganzen Raum Augsburg
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Hauptstandort in Bobingen erreichen wir Sie schnell und
            zuverlässig - egal ob Sie in Augsburg, Königsbrunn, Neusäß, Friedberg,
            Stadtbergen oder einer der umliegenden Gemeinden wohnen.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das zeichnet uns aus:</strong> Kurze Anfahrtswege, keine langen
            Wartezeiten, persönliche Beratung und faire Preise ohne versteckte
            Kosten. Als lokaler Fachbetrieb sind wir fest in der Region verwurzelt
            und kennen die Besonderheiten vor Ort.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Bobingen" coverageAreas={coverageAreas} />

      <CTASection variant="gradient" />
    </>
  );
}
