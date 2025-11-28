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
    "HeizCenter Augsburg - Wärmepumpe, Heizung, Sanitär & Klimaanlage | Ihr Experte vor Ort",
  description:
    "Ihr Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen in Augsburg. Kostenlose Beratung, schneller Service, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Augsburg",
    "Heizung Augsburg",
    "Sanitär Augsburg",
    "Klimaanlage Augsburg",
    "Badsanierung Augsburg",
    "Heizungsnotdienst Augsburg",
    "HeizCenter Augsburg",
  ],
  openGraph: {
    title: "HeizCenter Augsburg - Ihr Experte für Wärmepumpen & Heizung",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Augsburg.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Augsburg. BEG-Förderung bis 70%. Energieeffizient und umweltfreundlich heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für Augsburg.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Augsburg. 3D-Planung und Festpreisgarantie.",
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
  "Augsburg Innenstadt",
  "Augsburg Pfersee",
  "Augsburg Göggingen",
  "Augsburg Haunstetten",
  "Augsburg Lechhausen",
  "Augsburg Oberhausen",
  "Königsbrunn",
  "Neusäß",
  "Gersthofen",
  "Stadtbergen",
  "Friedberg",
  "Bobingen",
  "Schwabmünchen",
  "Meitingen",
  "Aichach",
];

export default function AugsburgPage() {
  const data = locationData["augsburg"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "Augsburg", url: "/standorte/augsburg" },
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
        name="Augsburg"
        address="Lechallee 28, 86399 Bobingen"
        phone="+49 8234 9665900"
        email="service@heizcenter.de"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Augsburg und Umgebung. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
        mainLocation="Bobingen"
      />

      <LocationServices services={services} title="Unsere Leistungen in Augsburg" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            Warum HeizCenter in Augsburg?
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Als etablierter Fachbetrieb in Augsburg sind wir Ihr kompetenter
            Ansprechpartner für alle Fragen rund um Heizung, Sanitär und
            Klimatechnik. Unsere Techniker kennen die regionalen
            Besonderheiten und sind mit den Gegebenheiten in Augsburg und
            Umgebung bestens vertraut.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen in Augsburg - Die Heizung der Zukunft
          </h3>
          <p className="text-slate-700 mb-4">
            Augsburg setzt auf Klimaschutz, und Wärmepumpen sind dabei ein
            wichtiger Baustein. Als einer der führenden Wärmepumpen-Experten in
            Augsburg installieren wir moderne Luft-Wasser-Wärmepumpen und
            Erdwärmepumpen, die perfekt auf die klimatischen Bedingungen in
            Schwaben abgestimmt sind.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Wärmepumpen-Leistungen in Augsburg:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>Kostenlose Vor-Ort-Beratung und Wirtschaftlichkeitsberechnung</li>
            <li>Fachgerechte Installation durch zertifizierte Techniker</li>
            <li>Unterstützung bei BEG-Förderanträgen (bis 70% Zuschuss)</li>
            <li>Hydraulischer Abgleich für maximale Effizienz</li>
            <li>Wartung und Kundendienst aus einer Hand</li>
          </ul>
          <p className="text-slate-700 mb-6">
            Dank der staatlichen BEG-Förderung von bis zu 40% wird der Umstieg
            auf eine Wärmepumpe in Augsburg besonders attraktiv. Wir helfen
            Ihnen bei der Antragstellung und sorgen dafür, dass Sie alle
            verfügbaren Förderungen optimal nutzen können.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsinstallation und -wartung in Augsburg
          </h3>
          <p className="text-slate-700 mb-4">
            Von der klassischen Gasheizung über Pelletheizungen bis hin zu
            modernen Hybrid-Systemen - wir installieren und warten alle gängigen
            Heizungssysteme in Augsburg. Unser 24/7-Notdienst ist für Sie da,
            wenn die Heizung ausfällt.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Besonders in Augsburg wichtig:</strong> Die regelmäßige
            Wartung Ihrer Heizungsanlage spart nicht nur Energie, sondern ist
            auch Voraussetzung für die Herstellergarantie. Unsere
            Wartungsverträge sorgen für sorgenfreien Betrieb und verlängern die
            Lebensdauer Ihrer Heizung erheblich.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Augsburg - Modern und barrierefrei
          </h3>
          <p className="text-slate-700 mb-4">
            Träumen Sie von einem neuen Badezimmer? Wir setzen Ihre
            Badezimmer-Träume in Augsburg in die Realität um. Mit unserer
            3D-Badplanung können Sie Ihr neues Bad bereits vor Baubeginn
            visualisieren.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Badsanierung in Augsburg umfasst:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Planung und Festpreisangebot</li>
            <li>Barrierefreie Bäder nach DIN 18040 (Förderung bis 8.000€)</li>
            <li>Bodengleiche Duschen und moderne Badausstattung</li>
            <li>Koordination aller Gewerke (Fliesen, Elektro, Sanitär)</li>
            <li>Fertigstellung in 2-3 Wochen</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Augsburg - Angenehm kühl im Sommer
          </h3>
          <p className="text-slate-700 mb-4">
            Die Sommer in Augsburg werden immer heißer. Eine moderne
            Split-Klimaanlage sorgt für angenehme Temperaturen in Ihrem Zuhause
            oder Büro. Und das Beste: Im Winter können Sie damit auch heizen!
          </p>
          <p className="text-slate-700 mb-6">
            Unsere Klimaanlagen sind flüsterleise (ab 19 dB(A)),
            energieeffizient (A+++) und können per App gesteuert werden. Die
            Installation erfolgt durch zertifizierte Kältetechniker und dauert
            in der Regel nur 4-6 Stunden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Schneller Service in ganz Augsburg
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Standort in Augsburg erreichen wir Sie schnell und
            zuverlässig - egal ob Sie in der Innenstadt, Pfersee, Göggingen,
            Haunstetten oder Lechhausen wohnen. Auch in den Nachbargemeinden wie
            Königsbrunn, Neusäß, Stadtbergen oder Friedberg sind wir Ihr
            regionaler Partner.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das zeichnet uns aus:</strong> Kurze Anfahrtswege, keine
            langen Wartezeiten, persönliche Beratung auf Augsburger Art und
            faire Preise ohne versteckte Kosten.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Augsburg" coverageAreas={coverageAreas} />

      <CTASection variant="gradient" />
    </>
  );
}
