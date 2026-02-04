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
  title: "Wärmepumpe & Heizung Gersthofen - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Gersthofen. Schneller Service vom HeizCenter Augsburg. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Gersthofen",
    "Heizung Gersthofen",
    "Sanitär Gersthofen",
    "Klimaanlage Gersthofen",
    "Solarthermie Gersthofen",
    "HeizCenter Gersthofen",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/gersthofen"),
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Gersthofen. BEG-Förderung bis 70%.",
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
    description: "Solarthermie-Anlagen für Gersthofen. Bis 70% KfW-Förderung.",
    icon: Sun,
    href: "/solar",
  },
];

export default function GersthofenPage() {
  const data = locationData["gersthofen"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "gersthofen", url: "/standorte/gersthofen" },
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
        subLocation="Gersthofen"
        mainLocation="Bobingen"
        mainLocationHref="/standorte/bobingen"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Gersthofen. Schneller Service vom HeizCenter Bobingen - in 20 Minuten vor Ort."
      />

      <LocationServices services={services} title="Unsere Leistungen in Gersthofen" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Fachbetrieb in Gersthofen
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Gersthofen, die Stadt nördlich von Augsburg, ist ein wichtiger
            Industriestandort und gleichzeitig attraktiver Wohnort. Wir betreuen
            sowohl Privathaushalte als auch Gewerbeobjekte in Gersthofen und sind
            Ihr kompetenter Partner für alle Fragen rund um Heizung, Sanitär und
            Klimatechnik.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Gersthofen - Gewerbe und Privat
          </h3>
          <p className="text-slate-700 mb-4">
            Als Industriestandort hat Gersthofen viele Gewerbeflächen, aber auch
            attraktive Wohngebiete. Wärmepumpen eignen sich für beide Bereiche:
            Große Luft-Wasser-Wärmepumpen für Gewerbehallen und kompakte Systeme
            für Einfamilienhäuser.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Expertise in Gersthofen:</strong> Wir haben
            Erfahrung mit der Installation von Wärmepumpen in gewerblichen
            Objekten (Bürogebäude, Werkstätten, Lagerhallen) und privaten
            Wohnhäusern. BEG-Förderung bis 70% macht den Umstieg attraktiv - auch
            für Unternehmen. Bei größeren Objekten beraten wir zu
            Multi-Split-Systemen und Kaskadenlösungen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsservice für Industrie und Gewerbe
          </h3>
          <p className="text-slate-700 mb-4">
            Gersthofen als Industriestandort stellt besondere Anforderungen an
            die Haustechnik. Wir installieren und warten Heizungsanlagen in
            Gewerbeimmobilien, Produktionshallen und Bürogebäuden. Auch für
            Privathaushalte in Gersthofen sind wir Ihr verlässlicher Partner.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Gewerbliche Heizungslösungen:</strong> Von
            Hallenheizungen über Büroklima bis zu kompletten Gebäudeleitsystemen -
            wir installieren alles. Unser 24/7-Notdienst sorgt dafür, dass
            Produktionsausfälle durch Heizungsprobleme vermieden werden. Auch
            Wartungsverträge für gewerbliche Objekte bieten wir an.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Gersthofen
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie in einem Einfamilienhaus oder einer Wohnung in Gersthofen
            leben - wir sanieren Ihr Badezimmer professionell und zuverlässig.
            Mit unserer 3D-Planung visualisieren Sie Ihr neues Bad vorab.
            Barrierefreie Bäder mit bis zu 8.000€ Förderung sind besonders
            gefragt. Wir koordinieren alle Gewerke und halten die vereinbarten
            Termine ein.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Gersthofen
          </h3>
          <p className="text-slate-700 mb-6">
            In Produktionshallen, Büros und Wohnräumen - eine Klimaanlage sorgt
            für angenehme Temperaturen. Wir installieren Split-Klimaanlagen für
            Privathaushalte und leistungsstarke Kassetten- oder Truhengeräte für
            gewerbliche Objekte. Im Winter können moderne Klimaanlagen auch zum
            Heizen genutzt werden - eine effiziente Ergänzung zur Hauptheizung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Schneller Service in Gersthofen
          </h3>
          <p className="text-slate-700 mb-6">
            Von unserem Standort in Augsburg erreichen wir Gersthofen in etwa 20
            Minuten. Bei Notfällen sind wir schnell vor Ort - wichtig für
            Gewerbebetriebe, bei denen jede Minute zählt. Unsere Techniker kennen
            Gersthofen gut und wissen, wo sich welche Infrastruktur befindet.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Gersthofen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">20</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Augsburg</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">50+</div>
                <p className="text-slate-700">Gewerbeprojekte in Gersthofen</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">24/7</div>
                <p className="text-slate-700">Notdienst für Gewerbe und Privat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
