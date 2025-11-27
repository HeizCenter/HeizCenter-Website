import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Neu-Ulm - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Neu-Ulm. Schneller Service vom HeizCenter Ulm. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Neu-Ulm",
    "Heizung Neu-Ulm",
    "Sanitär Neu-Ulm",
    "Klimaanlage Neu-Ulm",
    "HeizCenter Neu-Ulm",
  ],
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Neu-Ulm. BEG-Förderung bis 40%.",
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
];

export default function NeuUlmPage() {
  const data = locationData["neu-ulm"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "neu ulm", url: "/standorte/neu-ulm" },
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
        subLocation="Neu-Ulm"
        mainLocation="Gutenzell-Hürbel"
        mainLocationHref="/standorte/gutenzell-huerbel"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Neu-Ulm. Schneller Service vom HeizCenter Gutenzell-Hürbel - nur eine Brücke entfernt."
      />

      <LocationServices services={services} title="Unsere Leistungen in Neu-Ulm" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Partner in Neu-Ulm
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Neu-Ulm, die junge Stadt auf der bayerischen Seite der Donau, ist
            unser direktes Nachbargebiet. Von unserem Standort in Ulm erreichen
            wir Sie in Neu-Ulm in wenigen Minuten - einfach über die Donaubrücke.
            Wir betreuen sowohl Privathaushalte als auch Gewerbeobjekte.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Neu-Ulm - Effizient heizen am Donauufer
          </h3>
          <p className="text-slate-700 mb-4">
            Neu-Ulm bietet ideale Bedingungen für Wärmepumpen: Das milde Klima
            an der Donau sorgt für hohe Effizienz, viele Einfamilienhäuser haben
            ausreichend große Grundstücke. Besonders in den Neubaugebieten in
            Offenhausen und Burlafingen sind Wärmepumpen bereits Standard.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Installation in Neu-Ulm:</strong> Wir
            installieren moderne Luft-Wasser-Wärmepumpen mit Flüsterbetrieb für
            dicht bebaute Gebiete und Erdwärmepumpen für größere Grundstücke.
            BEG-Förderung von bis zu 40% macht den Umstieg attraktiv. Viele
            Kunden in Neu-Ulm kombinieren die Wärmepumpe mit Photovoltaik für
            maximale Unabhängigkeit.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung in Neu-Ulm
          </h3>
          <p className="text-slate-700 mb-4">
            In Neu-Ulm gibt es viele Gebäude aus den 60er bis 80er Jahren, die
            eine Heizungssanierung benötigen. Der Austausch alter Heizungen gegen
            moderne Systeme spart Energie und erhöht den Wohnkomfort erheblich.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Neu-Ulm:</strong> Wir installieren alle
            gängigen Heizungssysteme - von Gasbrennwertheizungen über
            Pelletheizungen bis zu Wärmepumpen. Auch für Gewerbeimmobilien in
            Neu-Ulm bieten wir maßgeschneiderte Lösungen. Unser 24/7-Notdienst
            ist dank der Nähe besonders schnell vor Ort.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Neu-Ulm
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie in Neu-Ulm Mitte, Offenhausen, Finningen, Burlafingen oder
            Pfuhl wohnen - wir sanieren Badezimmer in allen Stadtteilen. Mit
            unserer 3D-Planung können Sie Ihr neues Bad vorab visualisieren.
            Besonders nachgefragt: Barrierefreie Bäder mit bodengleichen Duschen.
            Förderung bis 8.000€ möglich. Wir koordinieren alle Gewerke und
            garantieren Festpreise.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Neu-Ulm
          </h3>
          <p className="text-slate-700 mb-6">
            Die Sommer in Neu-Ulm können heiß werden, besonders in Dachgeschossen
            und südorientierten Wohnungen. Eine moderne Split-Klimaanlage sorgt
            für angenehme Temperaturen und kann im Winter auch als effiziente
            Zusatzheizung genutzt werden. Wir installieren flüsterleise Geräte
            mit A+++-Effizienz und App-Steuerung. Besonders beliebt in Neu-Ulm:
            Multi-Split-Systeme für mehrere Räume.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Alle Stadtteile von Neu-Ulm im Service
          </h3>
          <p className="text-slate-700 mb-6">
            Wir betreuen Sie in allen Stadtteilen von Neu-Ulm: Neu-Ulm Mitte,
            Offenhausen, Finningen, Burlafingen, Pfuhl, Ludwigsfeld, Steinheim
            und Reutti. Die Nähe zu unserem Standort in Ulm ermöglicht kurze
            Reaktionszeiten - bei Notfällen sind wir in 10 Minuten vor Ort.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Ihre Vorteile in Neu-Ulm
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">10</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Ulm</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">8</div>
                <p className="text-slate-700">Stadtteile im Servicegebiet</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">150+</div>
                <p className="text-slate-700">Projekte in Neu-Ulm realisiert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
