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
    "HeizCenter Ulm - Wärmepumpe, Heizung, Sanitär & Klimaanlage | Ihr Experte vor Ort",
  description:
    "Ihr Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen in Ulm. Kostenlose Beratung, schneller Service, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Ulm",
    "Heizung Ulm",
    "Sanitär Ulm",
    "Klimaanlage Ulm",
    "Badsanierung Ulm",
    "Heizungsnotdienst Ulm",
    "HeizCenter Ulm",
  ],
  openGraph: {
    title: "HeizCenter Ulm - Ihr Experte für Wärmepumpen & Heizung",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Ulm.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Ulm und Neu-Ulm. BEG-Förderung bis 40%. Energieeffizient heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für Ulm.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Ulm. 3D-Planung und Festpreisgarantie.",
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
  "Ulm Innenstadt",
  "Ulm Wiblingen",
  "Ulm Böfingen",
  "Ulm Eselsberg",
  "Ulm Söflingen",
  "Neu-Ulm",
  "Blaustein",
  "Erbach",
  "Laupheim",
  "Ehingen",
  "Langenau",
  "Blaubeuren",
  "Illertissen",
  "Weißenhorn",
  "Senden",
];

export default function UlmPage() {
  const data = locationData["ulm"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "ulm", url: "/standorte/ulm" },
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
        name="Ulm"
        address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel"
        phone="+49 8234 9665900"
        email="service@heizcenter.de"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Ulm und Neu-Ulm. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
        mainLocation="Gutenzell-Hürbel"
      />

      <LocationServices services={services} title="Unsere Leistungen in Ulm" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">Warum HeizCenter in Ulm?</h2>
          <p className="text-lg text-slate-700 mb-6">
            Als etablierter Fachbetrieb in der Donaustadt Ulm sind wir Ihr
            kompetenter Ansprechpartner für alle Fragen rund um Heizung, Sanitär
            und Klimatechnik. Unsere Techniker kennen die regionalen
            Besonderheiten und sind mit den Gegebenheiten in Ulm, Neu-Ulm und
            Umgebung bestens vertraut.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen in Ulm - Effizient heizen mit Donau-Nähe
          </h3>
          <p className="text-slate-700 mb-4">
            Ulm zählt zu den modernsten Städten Deutschlands und setzt auf
            nachhaltige Energielösungen. Wärmepumpen sind dabei die perfekte
            Wahl für zukunftssicheres Heizen. Dank der milden Temperaturen an der
            Donau arbeiten Wärmepumpen in Ulm besonders effizient.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Wärmepumpen-Expertise in Ulm:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>Spezialisierung auf Luft-Wasser-Wärmepumpen für Ulmer Stadtklima</li>
            <li>Erdwärmepumpen mit behördlicher Genehmigung</li>
            <li>BEG-Förderberatung: Bis zu 40% staatlicher Zuschuss</li>
            <li>Kombination mit Photovoltaik für maximale Unabhängigkeit</li>
            <li>Wartungsverträge für dauerhaft effizienten Betrieb</li>
          </ul>
          <p className="text-slate-700 mb-6">
            In Ulm und Neu-Ulm haben wir bereits über 200 Wärmepumpen
            erfolgreich installiert. Profitieren Sie von unserer Erfahrung und
            lassen Sie sich kostenlos beraten. Mit der BEG-Förderung wird Ihre
            neue Wärmepumpe besonders attraktiv.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsservice in Ulm und Neu-Ulm
          </h3>
          <p className="text-slate-700 mb-4">
            Ob Gasheizung, Ölheizung, Pelletheizung oder Hybrid-System - wir
            sind Ihr Ansprechpartner für alle Heizungsarten in Ulm. Unser 24/7
            Notdienst ist besonders im Winter für Sie da, wenn die Heizung
            ausfällt.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Besonderheiten in Ulm:</strong> Die Nähe zur Donau und das
            Stadtklima erfordern besondere Anforderungen an die
            Heizungsinstallation. Unsere Techniker kennen sich mit den lokalen
            Gegebenheiten aus und sorgen für eine optimale Installation.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Ulm - Von klassisch bis modern
          </h3>
          <p className="text-slate-700 mb-4">
            Ulm ist bekannt für seine Mischung aus historischer Architektur und
            modernem Design. Das spiegelt sich auch in unseren Badsanierungen
            wider. Ob Altbausanierung in der Ulmer Altstadt oder modernes Bad in
            Wiblingen - wir setzen Ihre Wünsche um.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Badsanierung in Ulm - Das bieten wir:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Badplanung für perfekte Visualisierung</li>
            <li>Barrierefreie Bäder (wichtig bei älteren Gebäuden in Ulm)</li>
            <li>Denkmalschutz-konforme Sanierungen in der Altstadt</li>
            <li>Moderne Bäder mit nachhaltigen Materialien</li>
            <li>Koordination aller Gewerke - alles aus einer Hand</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Ulm - Kühle Räume trotz Sommerhitze
          </h3>
          <p className="text-slate-700 mb-4">
            Die Sommer in Ulm können heiß werden - besonders in den oberen
            Stockwerken und Dachgeschossen. Eine moderne Split-Klimaanlage sorgt
            für angenehme Temperaturen und kann im Winter auch als
            Zusatzheizung genutzt werden.
          </p>
          <p className="text-slate-700 mb-6">
            Unsere Klimaanlagen sind flüsterleise, energieeffizient und können
            per App gesteuert werden. Die Installation erfolgt durch
            zertifizierte Kältetechniker - auch in historischen Gebäuden unter
            Berücksichtigung der Ulmer Bauvorschriften.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Ihr regionaler Partner in Ulm und Umgebung
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Standort in Ulm erreichen wir Sie schnell - ob Sie in
            der Ulmer Innenstadt, Wiblingen, Böfingen, dem Eselsberg oder in
            Neu-Ulm wohnen. Auch in Blaustein, Erbach, Laupheim oder Blaubeuren
            sind wir Ihr kompetenter Partner.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das macht uns in Ulm besonders:</strong> Kurze Wege,
            persönliche Beratung, faire Preise und umfassende Kenntnisse der
            lokalen Besonderheiten. Wir sind nicht nur Ihr Dienstleister,
            sondern Ihr Partner für langfristig zuverlässige Haustechnik.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Ulm" coverageAreas={coverageAreas} />

      <CTASection variant="gradient" />
    </>
  );
}
