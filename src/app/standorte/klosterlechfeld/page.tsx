import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import {
  LocationServices,
  LocationService,
} from "@/components/sections/location-services";
import { LocationCoverage } from "@/components/sections/location-coverage";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind, Building2 } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "HeizCenter Klosterlechfeld - Kundenempfang & Besucherbüro | Wärmepumpe, Heizung, Sanitär & Klimaanlage",
  description:
    "Unser Standort in Klosterlechfeld - Kundenempfang und Besucherbüro. Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen. Kostenlose Beratung, schneller Service, faire Preise.",
  keywords: [
    "Wärmepumpe Klosterlechfeld",
    "Heizung Klosterlechfeld",
    "Sanitär Klosterlechfeld",
    "Klimaanlage Klosterlechfeld",
    "Badsanierung Klosterlechfeld",
    "Heizungsnotdienst Klosterlechfeld",
    "HeizCenter Klosterlechfeld",
    "Heizung Landsberg am Lech",
    "Wärmepumpe Schwabmünchen",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/klosterlechfeld"),
  },
  openGraph: {
    title: "HeizCenter Klosterlechfeld - Kundenempfang & Besucherbüro",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Klosterlechfeld und Umgebung.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Klosterlechfeld und Umgebung. BEG-Förderung bis 70%. Energieeffizient und umweltfreundlich heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für Klosterlechfeld und Umgebung.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Klosterlechfeld. 3D-Planung und Festpreisgarantie.",
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
  "Klosterlechfeld",
  "Augsburg",
  "Landsberg am Lech",
  "Schwabmünchen",
  "Kaufering",
  "Buchloe",
  "Königsbrunn",
  "Bobingen",
  "Untermeitingen",
  "Graben",
  "Lagerlechfeld",
  "Hurlach",
  "Igling",
  "Obermeitingen",
  "Scheuring",
];

export default function KlosterlechfeldPage() {
  const data = locationData["klosterlechfeld"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "Klosterlechfeld", url: "/standorte/klosterlechfeld" },
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
        name="Klosterlechfeld"
        address="Schulstraße 40, 86836 Klosterlechfeld"
        phone="+49 8234 9665900"
        email="service@heizcenter.de"
        description="Unser Standort in Klosterlechfeld - Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in der Region zwischen Augsburg und Landsberg am Lech. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
        badge="Kundenempfang & Besucherbüro"
      />

      <LocationServices services={services} title="Unsere Leistungen in Klosterlechfeld" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          {/* Special Badge */}
          <div className="not-prose mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCA28]/20 text-[#0F5B78] text-sm font-semibold rounded-full border border-[#FFCA28]/40">
              <Building2 className="h-4 w-4" />
              <span>Kundenempfang und Besucherbüro</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">
            HeizCenter Klosterlechfeld - Ihr Standort zwischen Augsburg und Landsberg
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Willkommen bei HeizCenter in Klosterlechfeld! Unser Standort liegt strategisch
            günstig zwischen Augsburg und Landsberg am Lech und bietet Ihnen einen kompetenten
            Ansprechpartner für alle Fragen rund um Heizung, Sanitär und Klimatechnik. Von hier
            aus betreuen wir die gesamte Region mit kurzen Anfahrtswegen und schnellem Service.
          </p>

          <div className="not-prose bg-[#0F5B78]/5 p-6 rounded-xl mb-8 border border-[#0F5B78]/20">
            <div className="flex items-start gap-3">
              <Building2 className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Kundenempfang und Besucherbüro</h3>
                <p className="text-slate-700">
                  Unser Standort in Klosterlechfeld dient als zentraler Kundenempfang und Besucherbüro.
                  Hier können Sie uns persönlich besuchen, sich beraten lassen und unsere Ausstellung
                  moderner Heiztechnik besichtigen. Vereinbaren Sie gerne einen Termin!
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen in Klosterlechfeld - Die Heizung der Zukunft
          </h3>
          <p className="text-slate-700 mb-4">
            Als einer der führenden Wärmepumpen-Experten in der Region installieren
            wir moderne Luft-Wasser-Wärmepumpen und Erdwärmepumpen, die perfekt auf
            die klimatischen Bedingungen in Schwaben abgestimmt sind.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Wärmepumpen-Leistungen in Klosterlechfeld:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>Kostenlose Vor-Ort-Beratung und Wirtschaftlichkeitsberechnung</li>
            <li>Fachgerechte Installation durch zertifizierte Techniker</li>
            <li>Unterstützung bei BEG-Förderanträgen (bis 70% Zuschuss)</li>
            <li>Hydraulischer Abgleich für maximale Effizienz</li>
            <li>Wartung und Kundendienst aus einer Hand</li>
          </ul>
          <p className="text-slate-700 mb-6">
            Dank der staatlichen BEG-Förderung von bis zu 70% wird der Umstieg auf
            eine Wärmepumpe besonders attraktiv. Wir helfen Ihnen bei der
            Antragstellung und sorgen dafür, dass Sie alle verfügbaren Förderungen
            optimal nutzen können.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsinstallation und -wartung in Klosterlechfeld
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
            Badsanierung in Klosterlechfeld - Modern und barrierefrei
          </h3>
          <p className="text-slate-700 mb-4">
            Träumen Sie von einem neuen Badezimmer? Wir setzen Ihre Badezimmer-Träume
            in die Realität um. Mit unserer 3D-Badplanung können Sie Ihr neues Bad
            bereits vor Baubeginn visualisieren.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Unsere Badsanierung in Klosterlechfeld umfasst:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Planung und Festpreisangebot</li>
            <li>Barrierefreie Bäder nach DIN 18040 (Förderung bis 8.000 Euro)</li>
            <li>Bodengleiche Duschen und moderne Badausstattung</li>
            <li>Koordination aller Gewerke (Fliesen, Elektro, Sanitär)</li>
            <li>Fertigstellung in 2-3 Wochen</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Klosterlechfeld - Angenehm kühl im Sommer
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
            Schneller Service in der Region Augsburg und Landsberg
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Standort in Klosterlechfeld erreichen wir Sie schnell und
            zuverlässig - egal ob Sie in Augsburg, Landsberg am Lech, Schwabmünchen,
            Kaufering, Buchloe oder einer der umliegenden Gemeinden wohnen.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das zeichnet uns aus:</strong> Kurze Anfahrtswege, keine langen
            Wartezeiten, persönliche Beratung und faire Preise ohne versteckte
            Kosten. Als lokaler Fachbetrieb sind wir fest in der Region verwurzelt
            und kennen die Besonderheiten vor Ort.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Klosterlechfeld" coverageAreas={coverageAreas} />

      <CTASection variant="gradient" />
    </>
  );
}
