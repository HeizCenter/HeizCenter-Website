import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Friedberg - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Friedberg. Schneller Service vom HeizCenter Augsburg. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Friedberg",
    "Heizung Friedberg",
    "Sanitär Friedberg",
    "Klimaanlage Friedberg",
    "HeizCenter Friedberg",
  ],
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Friedberg. BEG-Förderung bis 40%.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Heizung, Sanitär und Klimatechnik",
  "provider": {
    "@type": "LocalBusiness",
    "name": "HeizCenter Augsburg",
    "telephone": "+49 821 123456",
  },
  "areaServed": {
    "@type": "City",
    "name": "Friedberg",
  },
};

export default function FriedbergPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SubLocationHero
        subLocation="Friedberg"
        mainLocation="Augsburg"
        mainLocationHref="/standorte/augsburg"
        phone="+49 8234 966590"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Friedberg. Schneller Service vom HeizCenter Augsburg für die historische Herzogsstadt."
        mainLocation="Bobingen"
      />

      <LocationServices services={services} title="Unsere Leistungen in Friedberg" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Fachbetrieb in Friedberg
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Friedberg, die historische Herzogsstadt östlich von Augsburg, vereint
            Geschichte und Moderne. Wir sind Ihr kompetenter Partner für
            Heizung, Sanitär und Klimatechnik - vom denkmalgeschützten Altbau
            bis zum modernen Niedrigenergiehaus.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Friedberg - Auch im Altbau
          </h3>
          <p className="text-slate-700 mb-4">
            Friedberg hat eine wunderschöne Altstadt mit vielen historischen
            Gebäuden. Auch hier sind Wärmepumpen möglich - mit der richtigen
            Planung und ggf. Anpassungen am Heizsystem. Wir haben Erfahrung mit
            der Installation von Wärmepumpen in Bestandsgebäuden und kennen die
            Anforderungen des Denkmalschutzes.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen in Friedberg:</strong> Für Neubauten am
            Stadtrand empfehlen wir Luft-Wasser-Wärmepumpen oder bei größeren
            Grundstücken Erdwärmepumpen. In der Altstadt kommen oft
            Luft-Wasser-Wärmepumpen mit Innena...ufstellung zum Einsatz, um die
            historische Fassade zu erhalten. BEG-Förderung bis 40% macht den
            Umstieg attraktiv.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung in historischen Gebäuden
          </h3>
          <p className="text-slate-700 mb-4">
            Die Friedberger Altstadt mit ihren historischen Gebäuden stellt
            besondere Anforderungen an die Heizungstechnik. Wir haben Erfahrung
            mit der Sanierung von Heizungsanlagen in denkmalgeschützten Häusern
            und arbeiten eng mit den zuständigen Behörden zusammen.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Friedberg:</strong> Von der klassischen
            Gasheizung über moderne Brennwerttechnik bis zur Wärmepumpe - wir
            installieren alle Systeme. Auch Hybrid-Lösungen sind bei
            Altbausanierungen oft sinnvoll. Unser 24/7-Notdienst ist auch in
            Friedberg schnell zur Stelle.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Friedberg - Historisch und Modern
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie ein Badezimmer in einem historischen Stadthaus sanieren oder
            einen modernen Neubau ausstatten - wir haben die Erfahrung und das
            Know-how. Besonders in Friedberg gefragt: Barrierefreie
            Badsanierungen für ein selbstbestimmtes Leben im Alter. Mit unserer
            3D-Planung visualisieren Sie Ihr neues Bad vorab. Förderung bis
            8.000€ möglich.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Friedberg
          </h3>
          <p className="text-slate-700 mb-6">
            Gerade in den oberen Stockwerken der Friedberger Altstadthäuser wird
            es im Sommer heiß. Eine moderne Split-Klimaanlage sorgt für
            angenehme Temperaturen. Bei denkmalgeschützten Gebäuden beraten wir
            zu diskreten Installationsmöglichkeiten, die die historische Fassade
            nicht beeinträchtigen. Im Winter kann die Klimaanlage auch zum Heizen
            genutzt werden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Service in ganz Friedberg
          </h3>
          <p className="text-slate-700 mb-6">
            Wir betreuen Sie in der gesamten Stadt Friedberg und den Ortsteilen -
            von der Altstadt über Friedberg-West bis zu den Neubaugebieten. Auch
            in den umliegenden Gemeinden Derching, Stätzling und Ried sind wir
            Ihr Ansprechpartner. Die Entfernung von Augsburg ist kurz - bei
            Notfällen sind wir in 25 Minuten vor Ort.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Friedberg
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">25</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Augsburg</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">10+</div>
                <p className="text-slate-700">Projekte in der Friedberger Altstadt</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">24/7</div>
                <p className="text-slate-700">Notdienst auch in Friedberg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
