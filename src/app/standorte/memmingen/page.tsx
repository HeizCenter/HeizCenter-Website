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
    "HeizCenter Memmingen - Wärmepumpe, Heizung, Sanitär & Klimaanlage | Ihr Experte vor Ort",
  description:
    "Ihr Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen in Memmingen. Kostenlose Beratung, schneller Service, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Memmingen",
    "Heizung Memmingen",
    "Sanitär Memmingen",
    "Klimaanlage Memmingen",
    "Badsanierung Memmingen",
    "Heizungsnotdienst Memmingen",
    "HeizCenter Memmingen",
  ],
  openGraph: {
    title: "HeizCenter Memmingen - Ihr Experte für Wärmepumpen & Heizung",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Memmingen.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Memmingen und Unterallgäu. BEG-Förderung bis 70%. Effizient heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für Memmingen.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Memmingen. 3D-Planung und Festpreisgarantie.",
    icon: Droplet,
    href: "/sanitaer",
  },
  {
    title: "Klimaanlage",
    description:
      "Split-Klimaanlagen für Wohnungen und Gewerbe. Heizen und Kühlen mit einem Gerät.",
    icon: Wind,
    href: "/klimaanlage",
  },
];

const coverageAreas = [
  "Memmingen Innenstadt",
  "Memmingen Steinheim",
  "Memmingen Amendingen",
  "Memmingen Dickenreishausen",
  "Bad Grönenbach",
  "Bad Wörishofen",
  "Ottobeuren",
  "Leutkirch",
  "Mindelheim",
  "Türkheim",
  "Babenhausen",
  "Kirchheim",
  "Erkheim",
  "Legau",
  "Buxheim",
];

export default function MemmingenPage() {
  const data = locationData["memmingen"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "memmingen", url: "/standorte/memmingen" },
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
        name="Memmingen"
        address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel"
        phone="+49 8234 9665900"
        email="service@heizcenter.de"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Memmingen und Unterallgäu. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
        mainLocation="Gutenzell-Hürbel"
      />

      <LocationServices
        services={services}
        title="Unsere Leistungen in Memmingen"
      />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            Warum HeizCenter in Memmingen?
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Als etablierter Fachbetrieb in Memmingen und im Unterallgäu sind
            wir Ihr kompetenter Ansprechpartner für alle Fragen rund um Heizung,
            Sanitär und Klimatechnik. Unsere Techniker kennen die regionalen
            Besonderheiten und sind mit den Gegebenheiten in Memmingen und der
            ländlichen Umgebung bestens vertraut.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen im Allgäu - Perfekt für die Region
          </h3>
          <p className="text-slate-700 mb-4">
            Das Unterallgäu ist ideal für Wärmepumpen: Viele Einfamilienhäuser,
            große Grundstücke und das Bewusstsein für nachhaltige
            Energielösungen. Als Wärmepumpen-Spezialist in Memmingen haben wir
            bereits zahlreiche Projekte im Allgäu erfolgreich umgesetzt.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Wärmepumpen in Memmingen - Unsere Leistungen:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>Luft-Wasser-Wärmepumpen: Ideal für Memminger Klimabedingungen</li>
            <li>Erdwärmepumpen: Perfekt bei großen Grundstücken im Allgäu</li>
            <li>Grundwasser-Wärmepumpen: Höchste Effizienz (mit Genehmigung)</li>
            <li>BEG-Förderung bis 70%: Wir helfen bei der Antragstellung</li>
            <li>Kombination mit bestehenden Heizsystemen (Hybrid)</li>
          </ul>
          <p className="text-slate-700 mb-6">
            Im ländlichen Raum um Memmingen bieten sich besonders
            Erdwärmepumpen an. Die großen Grundstücke ermöglichen eine optimale
            Installation von Erdkollektoren oder Erdsonden. Wir beraten Sie
            kostenlos, welches System für Ihr Grundstück am besten geeignet ist.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsservice in Memmingen und Umgebung
          </h3>
          <p className="text-slate-700 mb-4">
            Ob Gasheizung, Ölheizung oder Pelletheizung - im Allgäu sind alle
            Heizungsarten vertreten. Wir sind Ihr Ansprechpartner für
            Installation, Wartung und Reparatur. Unser 24/7 Notdienst ist
            besonders im kalten Allgäu-Winter wichtig.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Besonderheiten im Unterallgäu:</strong> Viele Gebäude sind
            nicht ans Gasnetz angeschlossen. Hier bieten sich Wärmepumpen,
            Pelletheizungen oder moderne Ölbrennwertheizungen als Alternative
            an. Wir beraten Sie zu allen Optionen und finden die wirtschaftlich
            sinnvollste Lösung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Memmingen - Regional und zuverlässig
          </h3>
          <p className="text-slate-700 mb-4">
            Ob historisches Stadthaus in der Memminger Altstadt oder modernes
            Einfamilienhaus in Amendingen - wir sanieren Badezimmer in allen
            Gebäudetypen. Mit unserer 3D-Planung können Sie Ihr neues Bad vorab
            visualisieren.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Badsanierung im Allgäu - Das bieten wir:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Badplanung für perfekte Visualisierung</li>
            <li>Barrierefreie Bäder mit bis zu 8.000€ Förderung</li>
            <li>Sanierung in denkmalgeschützten Gebäuden</li>
            <li>Modernisierung von Bauernhäusern und Landhäusern</li>
            <li>Festpreisgarantie und koordinierte Gewerke</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Memmingen - Kühlung für heiße Sommertage
          </h3>
          <p className="text-slate-700 mb-4">
            Auch im Allgäu wird es im Sommer immer heißer. Eine moderne
            Klimaanlage sorgt für angenehme Temperaturen in Wohn- und
            Schlafräumen. Besonders in Dachgeschossen ist eine Klimaanlage eine
            lohnende Investition.
          </p>
          <p className="text-slate-700 mb-6">
            Unsere Split-Klimaanlagen sind flüsterleise, energieeffizient und
            können im Winter auch als effiziente Zusatzheizung genutzt werden.
            Die Installation erfolgt durch zertifizierte Kältetechniker und
            dauert nur wenige Stunden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Ihr regionaler Partner im Unterallgäu
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Standort in Memmingen erreichen wir Sie schnell - ob in
            der Memminger Innenstadt, Steinheim, Amendingen oder in den
            umliegenden Gemeinden wie Bad Wörishofen, Ottobeuren, Mindelheim
            oder Bad Grönenbach.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das zeichnet uns im Allgäu aus:</strong> Kurze Anfahrtswege,
            Verständnis für ländliche Besonderheiten (große Grundstücke, fehlende
            Gasanschlüsse, denkmalgeschützte Gebäude), persönliche Beratung und
            faire Preise. Wir sprechen Ihre Sprache und kennen die regionalen
            Gegebenheiten.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Pelletheizungen - Beliebt im Allgäu
          </h3>
          <p className="text-slate-700 mb-6">
            Im ländlichen Raum um Memmingen sind Pelletheizungen besonders
            beliebt. Sie kombinieren CO2-neutrales Heizen mit Unabhängigkeit von
            Öl und Gas. Wir installieren moderne Pelletheizungen mit
            automatischer Beschickung und beraten Sie zu Fördermöglichkeiten.
            Die BEG-Förderung macht Pelletheizungen besonders attraktiv.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Memmingen" coverageAreas={coverageAreas} />

      <CTASection variant="gradient" />
    </>
  );
}
