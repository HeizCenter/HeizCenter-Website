import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import {
  LocationServices,
  LocationService,
} from "@/components/sections/location-services";
import { LocationCoverage } from "@/components/sections/location-coverage";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title:
    "HeizCenter Gutenzell-Hürbel - Hauptstandort | Wärmepumpe, Heizung, Sanitär & Klimaanlage",
  description:
    "Unser Hauptstandort in Gutenzell-Hürbel. Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen im Raum Ulm und Memmingen. Kostenlose Beratung, schneller Service, faire Preise.",
  keywords: [
    "Wärmepumpe Gutenzell-Hürbel",
    "Heizung Gutenzell-Hürbel",
    "Sanitär Gutenzell-Hürbel",
    "Klimaanlage Gutenzell-Hürbel",
    "Badsanierung Gutenzell-Hürbel",
    "HeizCenter Gutenzell-Hürbel",
    "HeizCenter Hauptstandort",
    "Heizung Ulm",
    "Heizung Memmingen",
  ],
  openGraph: {
    title: "HeizCenter Gutenzell-Hürbel - Hauptstandort für Wärmepumpen & Heizung",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Gutenzell-Hürbel und Umgebung.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Gutenzell-Hürbel und Umgebung. BEG-Förderung bis 40%. Energieeffizient und umweltfreundlich heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für die Region Ulm und Memmingen.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Gutenzell-Hürbel. 3D-Planung und Festpreisgarantie.",
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
  "Gutenzell-Hürbel",
  "Ulm",
  "Neu-Ulm",
  "Memmingen",
  "Blaustein",
  "Laupheim",
  "Günzburg",
  "Krumbach",
  "Erbach (Donau)",
  "Bad Wörishofen",
  "Mindelheim",
  "Ottobeuren",
  "Kaufbeuren",
  "Bad Wurzach",
  "Leutkirch",
  "Illertissen",
  "Senden",
  "Weißenhorn",
];

export default function GutenzellHuerbelPage() {
  const data = locationData["gutenzell-huerbel"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "gutenzell hueruel", url: "/standorte/gutenzell-huerbel" },
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
        name="Gutenzell-Hürbel"
        address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel"
        phone="+49 8234 9665900"
        email="service@heizcenter.de"
        description="Unser Hauptstandort in Gutenzell-Hürbel - Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in der Region Ulm und Memmingen. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
      />

      <LocationServices services={services} title="Unsere Leistungen in Gutenzell-Hürbel" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter Gutenzell-Hürbel - Ihr Hauptstandort im Raum Ulm und Memmingen
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Willkommen bei HeizCenter in Gutenzell-Hürbel! Als unser zweiter
            Hauptstandort sind wir Ihr kompetenter Ansprechpartner für alle Fragen
            rund um Heizung, Sanitär und Klimatechnik im Raum Ulm, Memmingen und im
            Unterallgäu. Von hier aus betreuen wir die gesamte Region mit kurzen
            Anfahrtswegen und schnellem Service.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen in Gutenzell-Hürbel - Die Heizung der Zukunft
          </h3>
          <p className="text-slate-700 mb-4">
            Als einer der führenden Wärmepumpen-Experten in der Region Ulm und
            Memmingen installieren wir moderne Luft-Wasser-Wärmepumpen und
            Erdwärmepumpen, die perfekt auf die klimatischen Bedingungen in Oberschwaben
            und dem Allgäu abgestimmt sind.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Wärmepumpen-Leistungen in Gutenzell-Hürbel:</strong>
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
            Heizungsinstallation und -wartung in Gutenzell-Hürbel
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
            Badsanierung in Gutenzell-Hürbel - Modern und barrierefrei
          </h3>
          <p className="text-slate-700 mb-4">
            Träumen Sie von einem neuen Badezimmer? Wir setzen Ihre Badezimmer-Träume
            in die Realität um. Mit unserer 3D-Badplanung können Sie Ihr neues Bad
            bereits vor Baubeginn visualisieren.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Badsanierung in Gutenzell-Hürbel umfasst:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Planung und Festpreisangebot</li>
            <li>Barrierefreie Bäder nach DIN 18040 (Förderung bis 8.000€)</li>
            <li>Bodengleiche Duschen und moderne Badausstattung</li>
            <li>Koordination aller Gewerke (Fliesen, Elektro, Sanitär)</li>
            <li>Fertigstellung in 2-3 Wochen</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Gutenzell-Hürbel - Angenehm kühl im Sommer
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
            Schneller Service in der gesamten Region Ulm und Memmingen
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Hauptstandort in Gutenzell-Hürbel erreichen wir Sie schnell
            und zuverlässig - egal ob Sie in Ulm, Neu-Ulm, Memmingen, Laupheim,
            Günzburg oder einer der umliegenden Gemeinden wohnen. Auch im Unterallgäu
            mit Bad Wörishofen, Mindelheim, Ottobeuren und Kaufbeuren sind wir Ihr
            regionaler Partner.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das zeichnet uns aus:</strong> Kurze Anfahrtswege, keine langen
            Wartezeiten, persönliche Beratung und faire Preise ohne versteckte
            Kosten. Als lokaler Fachbetrieb sind wir fest in der Region verwurzelt
            und kennen die Besonderheiten vor Ort - von modernen Neubausiedlungen bis
            zu historischen Gebäuden im Allgäu.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Gutenzell-Hürbel" coverageAreas={coverageAreas} />

      <CTASection variant="gradient" />
    </>
  );
}
