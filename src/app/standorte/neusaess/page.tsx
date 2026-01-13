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
  title: "Wärmepumpe & Heizung Neusäß - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Neusäß. Schneller Service vom HeizCenter Augsburg. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Neusäß",
    "Heizung Neusäß",
    "Sanitär Neusäß",
    "Klimaanlage Neusäß",
    "HeizCenter Neusäß",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/neusaess"),
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Neusäß. BEG-Förderung bis 70%.",
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

export default function NeusaessPage() {
  const data = locationData["neusaess"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "neusaess", url: "/standorte/neusaess" },
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
        subLocation="Neusäß"
        mainLocation="Bobingen"
        mainLocationHref="/standorte/bobingen"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Neusäß. Schneller Service vom HeizCenter Bobingen - direkt vor den Toren der Stadt."
      />

      <LocationServices services={services} title="Unsere Leistungen in Neusäß" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Partner in Neusäß
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Neusäß, direkt vor den Toren Augsburgs gelegen, vereint ländlichen
            Charme mit städtischer Infrastruktur. Wir sind Ihr lokaler
            Fachbetrieb für Heizung, Sanitär und Klimatechnik in allen Ortsteilen
            - von Westheim über Steppach bis Täfertingen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Neusäß - Perfekt für Einfamilienhäuser
          </h3>
          <p className="text-slate-700 mb-4">
            Neusäß ist geprägt von Einfamilienhäusern mit eigenen Grundstücken -
            ideale Voraussetzungen für Wärmepumpen. Ob Luft-Wasser-Wärmepumpe für
            schnelle Installation oder Erdwärmepumpe für maximale Effizienz - wir
            finden die optimale Lösung für Ihr Zuhause.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Unsere Wärmepumpen-Leistungen in Neusäß:</strong> Kostenlose
            Vor-Ort-Beratung, Wirtschaftlichkeitsberechnung speziell für Ihr
            Gebäude, professionelle Installation und Unterstützung bei der
            BEG-Förderung. Viele Hausbesitzer in Neusäß kombinieren ihre
            Wärmepumpe mit Photovoltaik - wir beraten Sie auch hierzu.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung in Neusäß
          </h3>
          <p className="text-slate-700 mb-4">
            Viele Gebäude in Neusäß sind in den 70er bis 90er Jahren entstanden
            und haben noch alte Heizungsanlagen. Der Heizungstausch lohnt sich:
            Moderne Systeme sparen bis zu 30% Energie und erhöhen den Wohnkomfort
            deutlich.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice in Neusäß:</strong> Wir tauschen alte Gas-
            und Ölheizungen gegen moderne Brennwerttechnik oder direkt gegen
            Wärmepumpen. Auch Hybrid-Lösungen, bei denen die alte Heizung als
            Backup erhalten bleibt, sind möglich. Unser 24/7-Notdienst ist auch
            in Neusäß schnell zur Stelle.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in allen Ortsteilen
          </h3>
          <p className="text-slate-700 mb-6">
            Ob in Westheim, Steppach, Täfertingen oder Hainhofen - wir sanieren
            Badezimmer in ganz Neusäß. Besonders beliebt: Barrierefreie Bäder für
            ein selbstbestimmtes Leben im Alter. Mit bis zu 8.000€ Förderung wird
            der barrierefreie Umbau bezahlbar. Wir planen in 3D, koordinieren alle
            Gewerke und garantieren feste Preise.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Neusäß
          </h3>
          <p className="text-slate-700 mb-6">
            Auch in Neusäß werden die Sommer heißer. Eine Split-Klimaanlage sorgt
            für angenehme Temperaturen in Wohn- und Schlafräumen. Besonders in den
            beliebten Bungalows in Neusäß eine gute Investition. Im Winter kann
            die Klimaanlage auch zum Heizen genutzt werden - eine effiziente
            Ergänzung zur Hauptheizung in der Übergangszeit.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Alle Ortsteile von Neusäß im Servicegebiet
          </h3>
          <p className="text-slate-700 mb-6">
            Wir betreuen Sie in allen Ortsteilen von Neusäß: Westheim, Steppach,
            Täfertingen, Hainhofen, Ottmarshausen und Hammel. Die kurze Entfernung
            zu Augsburg ermöglicht schnelle Reaktionszeiten - bei Notfällen sind
            wir in unter 20 Minuten vor Ort.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Ihre Vorteile in Neusäß
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">20</div>
                <p className="text-slate-700">Minuten Anfahrtszeit maximal</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">6</div>
                <p className="text-slate-700">Ortsteile im Servicegebiet</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">70%</div>
                <p className="text-slate-700">BEG-Förderung für Wärmepumpen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
