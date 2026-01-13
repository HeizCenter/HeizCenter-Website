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
  title: "Wärmepumpe & Heizung Bad Wörishofen - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Bad Wörishofen. Schneller Service vom HeizCenter Memmingen. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Bad Wörishofen",
    "Heizung Bad Wörishofen",
    "Sanitär Bad Wörishofen",
    "Klimaanlage Bad Wörishofen",
    "HeizCenter Bad Wörishofen",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/bad-woerishofen"),
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Bad Wörishofen. BEG-Förderung bis 70%.",
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

export default function BadWoerishofenPage() {
  const data = locationData["bad-woerishofen"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "uad woerishofen", url: "/standorte/bad-woerishofen" },
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
        subLocation="Bad Wörishofen"
        mainLocation="Gutenzell-Hürbel"
        mainLocationHref="/standorte/gutenzell-huerbel"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Bad Wörishofen. Schneller Service vom HeizCenter Gutenzell-Hürbel für den bekannten Kneipp-Kurort."
      />

      <LocationServices services={services} title="Unsere Leistungen in Bad Wörishofen" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Fachbetrieb in Bad Wörishofen
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Bad Wörishofen, der bekannte Kneipp-Kurort im Unterallgäu, stellt
            besondere Anforderungen an die Haustechnik. Wir betreuen
            Privathaushalte, Hotels, Pensionen und medizinische Einrichtungen und
            sind Ihr kompetenter Partner für Heizung, Sanitär und Klimatechnik.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Bad Wörishofen - Nachhaltig heizen im Kurort
          </h3>
          <p className="text-slate-700 mb-4">
            Als Kurort setzt Bad Wörishofen auf Nachhaltigkeit und Umweltschutz.
            Wärmepumpen passen perfekt zu diesem Konzept: Umweltfreundlich,
            effizient und zukunftssicher. Besonders Hotels und Pensionen
            profitieren von den niedrigen Betriebskosten.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen in Bad Wörishofen:</strong> Wir installieren
            Wärmepumpen für Privathaushalte, Hotels und Gewerbebetriebe.
            BEG-Förderung bis 70% macht den Umstieg attraktiv. Besonders für
            Hotels interessant: Wärmepumpen können gleichzeitig heizen, kühlen und
            Warmwasser bereiten. Bei größeren Objekten planen wir Kaskadensysteme
            mit mehreren Wärmepumpen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsservice für Hotels und Pensionen
          </h3>
          <p className="text-slate-700 mb-4">
            In Bad Wörishofen ist eine funktionierende Heizung besonders wichtig -
            Gäste erwarten höchsten Komfort. Wir installieren und warten
            Heizungsanlagen in Hotels, Pensionen, Kliniken und Privathäusern.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice im Kurort:</strong> Unser 24/7-Notdienst sorgt
            dafür, dass bei Heizungsausfällen schnell Hilfe da ist - besonders im
            Winter wichtig, wenn die Hotels voll belegt sind. Wir bieten auch
            Wartungsverträge für Hotels und größere Objekte an, um Ausfälle zu
            vermeiden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Bad Wörishofen
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Hotelbad, Zimmer in einer Pension oder privates Badezimmer - wir
            sanieren Bäder in Bad Wörishofen mit höchster Qualität. Besonders
            gefragt: Barrierefreie Bäder für ältere Gäste und Patienten. Mit
            unserer 3D-Planung können Sie das Ergebnis vorab sehen. Förderung bis
            8.000€ möglich. Wir koordinieren alle Gewerke und garantieren feste
            Preise.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Hotels und Privat
          </h3>
          <p className="text-slate-700 mb-6">
            Gerade in Hotels sind Klimaanlagen ein wichtiger Komfortfaktor. Wir
            installieren flüsterleise Split-Klimaanlagen für Hotelzimmer und
            leistungsstarke Systeme für Aufenthaltsräume und Restaurants. Auch in
            Privathaushalten sorgen Klimaanlagen für angenehme Temperaturen im
            Sommer. Im Winter können sie als effiziente Zusatzheizung genutzt
            werden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Schneller Service im Kurort
          </h3>
          <p className="text-slate-700 mb-6">
            Von unserem Standort in Memmingen erreichen wir Bad Wörishofen in etwa
            20 Minuten. Bei Notfällen sind wir schnell vor Ort - besonders wichtig
            für Hotels und medizinische Einrichtungen. Unsere Techniker kennen die
            besonderen Anforderungen im Kurortbetrieb und arbeiten diskret und
            professionell.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Bad Wörishofen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">20</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Memmingen</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">15+</div>
                <p className="text-slate-700">Hotels und Pensionen betreut</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">24/7</div>
                <p className="text-slate-700">Notdienst für Gewerbeobjekte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
