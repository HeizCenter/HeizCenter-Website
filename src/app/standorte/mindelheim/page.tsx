import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind, Sun } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Mindelheim - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Mindelheim. Schneller Service vom HeizCenter Memmingen. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Mindelheim",
    "Heizung Mindelheim",
    "Sanitär Mindelheim",
    "Klimaanlage Mindelheim",
    "Solarthermie Mindelheim",
    "HeizCenter Mindelheim",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/mindelheim"),
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Mindelheim. BEG-Förderung bis 70%.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description: "Installation und Wartung aller Heizungssysteme. 24/7 Notdienst.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description: "Badsanierung und Sanitärinstallationen mit Festpreisgarantie.",
    icon: Droplet,
    href: "/sanitaer",
  },
  {
    title: "Klimaanlage",
    description: "Split-Klimaanlagen für angenehme Temperaturen das ganze Jahr.",
    icon: Wind,
    href: "/klimaanlage",
  },
  {
    title: "Solarthermie",
    description: "Solarthermie-Anlagen für Mindelheim. Bis 70% KfW-Förderung.",
    icon: Sun,
    href: "/solar",
  },
];

export default function MindelheimPage() {
  const data = locationData["mindelheim"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "mindelheim", url: "/standorte/mindelheim" },
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

      <SubLocationHero
        subLocation="Mindelheim"
        mainLocation="Gutenzell-Hürbel"
        mainLocationHref="/standorte/gutenzell-huerbel"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Mindelheim. Schneller Service vom HeizCenter Gutenzell-Hürbel für die historische Stadt im Unterallgäu."
      />

      <LocationServices services={services} title="Unsere Leistungen in Mindelheim" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Partner in Mindelheim
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Mindelheim, die historische Stadt im Herzen des Unterallgäus, vereint
            Tradition und Moderne. Wir sind Ihr lokaler Fachbetrieb für Heizung,
            Sanitär und Klimatechnik - vom historischen Stadthaus bis zum modernen
            Einfamilienhaus am Stadtrand.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Mindelheim - Auch im Altbau möglich
          </h3>
          <p className="text-slate-700 mb-4">
            Mindelheim hat eine wunderschöne Altstadt mit vielen historischen
            Gebäuden. Aber auch hier sind Wärmepumpen möglich - mit der richtigen
            Planung und fachgerechter Umsetzung. In den Neubaugebieten am
            Stadtrand sind Wärmepumpen bereits Standard.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Installation in Mindelheim:</strong> Für Neubauten
            empfehlen wir Luft-Wasser-Wärmepumpen mit hoher Effizienz. Bei größeren
            Grundstücken bieten sich Erdwärmepumpen an. In der Altstadt planen wir
            Wärmepumpen mit Innenaufstellung, um die historischen Fassaden zu
            erhalten. BEG-Förderung bis 70% macht den Umstieg attraktiv. Wir
            beraten Sie kostenlos zur optimalen Lösung für Ihr Gebäude.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung in Mindelheim
          </h3>
          <p className="text-slate-700 mb-4">
            In Mindelheim gibt es viele ältere Gebäude, die eine Heizungssanierung
            benötigen. Der Austausch alter Heizungen spart Energie und erhöht den
            Wohnkomfort erheblich. Wir haben Erfahrung mit der Sanierung in
            historischen Gebäuden und denkmalgeschützten Objekten.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Mindelheim:</strong> Wir installieren moderne
            Gasbrennwertheizungen, Pelletheizungen und Wärmepumpen. Auch
            Hybrid-Systeme sind besonders bei Altbausanierungen eine gute Option.
            Unser 24/7-Notdienst ist bei Heizungsausfällen schnell vor Ort - von
            Memmingen aus in etwa 25 Minuten erreichbar.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Mindelheim
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie ein historisches Stadthaus sanieren oder einen modernen Neubau
            ausstatten - wir haben die Erfahrung für beide Fälle. Mit unserer
            3D-Planung können Sie Ihr neues Bad vorab visualisieren. Besonders
            gefragt in Mindelheim: Barrierefreie Bäder für ein selbstbestimmtes
            Leben im Alter. Förderung bis 8.000€ möglich. Wir koordinieren alle
            Gewerke - Fliesen, Elektro, Sanitär - und garantieren feste Preise.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Mindelheim
          </h3>
          <p className="text-slate-700 mb-6">
            Gerade in den oberen Stockwerken der Mindelheimer Altstadthäuser wird
            es im Sommer heiß. Eine moderne Split-Klimaanlage sorgt für angenehme
            Temperaturen. Bei historischen Gebäuden beraten wir zu diskreten
            Installationsmöglichkeiten. Im Winter kann die Klimaanlage auch als
            effiziente Zusatzheizung genutzt werden - besonders in der
            Übergangszeit eine Energiesparende Lösung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Service in Mindelheim und Umgebung
          </h3>
          <p className="text-slate-700 mb-6">
            Wir betreuen Sie in ganz Mindelheim - von der Altstadt über die
            Neubaugebiete bis zu den umliegenden Ortsteilen. Von unserem Standort
            in Memmingen erreichen wir Sie in etwa 25 Minuten. Unsere Techniker
            kennen die Besonderheiten historischer Gebäude und haben Erfahrung mit
            den Anforderungen des Denkmalschutzes.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Mindelheim
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">25</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Memmingen</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">20+</div>
                <p className="text-slate-700">Projekte in historischen Gebäuden</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">70%</div>
                <p className="text-slate-700">BEG-Förderung für neue Heizungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
