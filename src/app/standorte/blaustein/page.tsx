import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Blaustein - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Blaustein. Schneller Service vom HeizCenter Ulm. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Blaustein",
    "Heizung Blaustein",
    "Sanitär Blaustein",
    "Klimaanlage Blaustein",
    "HeizCenter Blaustein",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/blaustein"),
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Blaustein. BEG-Förderung bis 70%.",
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

export default function BlausteinPage() {
  const data = locationData["blaustein"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "ulaustein", url: "/standorte/blaustein" },
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
        subLocation="Blaustein"
        mainLocation="Gutenzell-Hürbel"
        mainLocationHref="/standorte/gutenzell-huerbel"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Blaustein. Schneller Service vom HeizCenter Gutenzell-Hürbel - in 15 Minuten vor Ort."
      />

      <LocationServices services={services} title="Unsere Leistungen in Blaustein" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Fachbetrieb in Blaustein
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Blaustein, westlich von Ulm gelegen, vereint ländlichen Charakter mit
            der Nähe zur Stadt. Wir sind Ihr lokaler Fachbetrieb für Heizung,
            Sanitär und Klimatechnik in allen Ortsteilen - von Ehrenstein über
            Herrlingen bis Markbronn.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Blaustein - Ideal für die Alb
          </h3>
          <p className="text-slate-700 mb-4">
            Blaustein liegt am Rande der Schwäbischen Alb - eine Region mit vielen
            Einfamilienhäusern und großen Grundstücken. Perfekte Voraussetzungen
            für Wärmepumpen! Sowohl Luft-Wasser- als auch Erdwärmepumpen arbeiten
            hier sehr effizient.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Installation in Blaustein:</strong> Wir beraten
            Sie kostenlos, welches System für Ihr Grundstück optimal ist. Bei
            größeren Grundstücken empfehlen wir oft Erdwärmepumpen mit
            Erdkollektoren - die hohe Effizienz amortisiert die etwas höheren
            Investitionskosten schnell. BEG-Förderung bis 70% macht den Umstieg
            attraktiv. Viele Kunden in Blaustein kombinieren ihre Wärmepumpe mit
            Photovoltaik für maximale Unabhängigkeit.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung in Blaustein
          </h3>
          <p className="text-slate-700 mb-4">
            In Blaustein gibt es viele Gebäude aus den 70er bis 90er Jahren, die
            eine Heizungssanierung benötigen. Auch ältere Bauernhäuser und
            Landhäuser profitieren von modernen Heizungssystemen.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Blaustein:</strong> Wir tauschen alte Öl-
            und Gasheizungen gegen moderne, effiziente Systeme. Auch
            Pelletheizungen sind in der ländlichen Umgebung von Blaustein beliebt.
            Unser 24/7-Notdienst ist bei Heizungsausfällen schnell vor Ort - von
            Ulm aus in nur 15 Minuten.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in allen Ortsteilen
          </h3>
          <p className="text-slate-700 mb-6">
            Ob in Ehrenstein, Herrlingen, Markbronn, Klingenstein oder Wippingen -
            wir sanieren Badezimmer in ganz Blaustein. Mit unserer 3D-Planung
            können Sie Ihr neues Bad vorab visualisieren. Besonders gefragt:
            Barrierefreie Bäder für ein selbstbestimmtes Leben im Alter. Förderung
            bis 8.000€ möglich. Wir koordinieren alle Gewerke und garantieren
            feste Preise ohne Überraschungen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Blaustein
          </h3>
          <p className="text-slate-700 mb-6">
            Auch am Rande der Schwäbischen Alb wird es im Sommer heiß. Eine
            moderne Split-Klimaanlage sorgt für angenehme Temperaturen in Wohn-
            und Schlafräumen. Besonders in Neubauten mit großen Fensterflächen ist
            eine Klimaanlage eine lohnende Investition. Im Winter kann sie auch
            als effiziente Zusatzheizung genutzt werden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Alle Ortsteile im Servicegebiet
          </h3>
          <p className="text-slate-700 mb-6">
            Wir betreuen Sie in allen Ortsteilen von Blaustein: Ehrenstein,
            Herrlingen, Markbronn, Klingenstein, Wippingen, Dietingen und
            Bermaringen. Die kurze Entfernung zu Ulm ermöglicht schnelle
            Reaktionszeiten. Unsere Techniker kennen die ländliche Umgebung und
            wissen, worauf bei der Installation zu achten ist.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Blaustein
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">15</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Ulm</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">7</div>
                <p className="text-slate-700">Ortsteile im Servicegebiet</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">4.8★</div>
                <p className="text-slate-700">Google Bewertung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
