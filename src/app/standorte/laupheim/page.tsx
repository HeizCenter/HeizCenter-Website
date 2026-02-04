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
  title: "Wärmepumpe & Heizung Laupheim - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Laupheim. Schneller Service vom HeizCenter Ulm. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Laupheim",
    "Heizung Laupheim",
    "Sanitär Laupheim",
    "Klimaanlage Laupheim",
    "Solarthermie Laupheim",
    "HeizCenter Laupheim",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/laupheim"),
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Laupheim. BEG-Förderung bis 70%.",
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
    description: "Solarthermie-Anlagen für Laupheim. Bis 70% KfW-Förderung.",
    icon: Sun,
    href: "/solar",
  },
];

export default function LaupheimPage() {
  const data = locationData["laupheim"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "laupheim", url: "/standorte/laupheim" },
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
        subLocation="Laupheim"
        mainLocation="Gutenzell-Hürbel"
        mainLocationHref="/standorte/gutenzell-huerbel"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Laupheim. Schneller Service vom HeizCenter Gutenzell-Hürbel - in 30 Minuten vor Ort."
      />

      <LocationServices services={services} title="Unsere Leistungen in Laupheim" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Partner in Laupheim
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Laupheim, die Stadt südwestlich von Ulm im Landkreis Biberach, ist
            ein wichtiger Wirtschaftsstandort mit über 22.000 Einwohnern. Wir
            betreuen sowohl Privathaushalte als auch Gewerbeobjekte und sind Ihr
            kompetenter Ansprechpartner für Heizung, Sanitär und Klimatechnik.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Laupheim - Effizient und zukunftssicher
          </h3>
          <p className="text-slate-700 mb-4">
            Laupheim hat viele Neubaugebiete, in denen Wärmepumpen bereits
            Standard sind. Aber auch in älteren Gebäuden lohnt sich der Umstieg
            auf diese zukunftssichere Technologie. Das milde Klima in der Region
            sorgt für hohe Effizienz.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Expertise für Laupheim:</strong> Wir installieren
            Luft-Wasser-Wärmepumpen für einfache Installation und
            Erdwärmepumpen für maximale Effizienz bei größeren Grundstücken.
            BEG-Förderung von bis zu 70% reduziert die Investitionskosten
            erheblich. Auch für Gewerbeobjekte in Laupheim bieten wir
            maßgeschneiderte Wärmepumpen-Lösungen an.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung für Privat und Gewerbe
          </h3>
          <p className="text-slate-700 mb-4">
            Als Wirtschaftsstandort hat Laupheim hohe Anforderungen an die
            Haustechnik. Wir installieren und warten Heizungsanlagen in
            Gewerbeimmobilien, Produktionshallen und Bürogebäuden. Auch für
            Privathaushalte sind wir Ihr zuverlässiger Partner.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Laupheim:</strong> Von der klassischen
            Gasheizung über Pelletheizungen bis zur Wärmepumpe - wir installieren
            alle Systeme. Unser 24/7-Notdienst ist auch in Laupheim verfügbar und
            sorgt dafür, dass Produktionsausfälle durch Heizungsprobleme vermieden
            werden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Laupheim
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie in einem Einfamilienhaus, einer Wohnung oder einem
            Mehrfamilienhaus in Laupheim wohnen - wir sanieren Ihr Badezimmer
            professionell und zuverlässig. Mit unserer 3D-Planung visualisieren
            Sie Ihr neues Bad vorab. Barrierefreie Bäder mit bis zu 8.000€
            Förderung sind besonders gefragt. Wir koordinieren alle Gewerke und
            halten vereinbarte Termine ein.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Laupheim
          </h3>
          <p className="text-slate-700 mb-6">
            In Büros, Produktionshallen und Wohnräumen - eine Klimaanlage sorgt
            für angenehme Temperaturen auch an heißen Sommertagen. Wir
            installieren Split-Klimaanlagen für Privathaushalte und
            leistungsstarke Systeme für gewerbliche Objekte. Im Winter können
            moderne Klimaanlagen auch zum Heizen genutzt werden - eine effiziente
            Ergänzung zur Hauptheizung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Servicegebiet Laupheim und Umgebung
          </h3>
          <p className="text-slate-700 mb-6">
            Von unserem Standort in Ulm erreichen wir Laupheim in etwa 30 Minuten.
            Bei Notfällen sind wir schnell vor Ort. Wir betreuen Sie auch in den
            umliegenden Gemeinden wie Schwendi, Burgrieden und Wain. Unsere
            Techniker kennen die Region und können Sie kompetent beraten.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Laupheim
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">30</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Ulm</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">30+</div>
                <p className="text-slate-700">Gewerbeprojekte in Laupheim</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">24/7</div>
                <p className="text-slate-700">Notdienst auch in Laupheim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
