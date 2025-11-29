import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Stadtbergen - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Stadtbergen. Schneller Service vom HeizCenter Augsburg. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Stadtbergen",
    "Heizung Stadtbergen",
    "Sanitär Stadtbergen",
    "Klimaanlage Stadtbergen",
    "HeizCenter Stadtbergen",
  ],
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Stadtbergen. BEG-Förderung bis 70%.",
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

export default function StadtbergenPage() {
  const data = locationData["stadtbergen"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "stadtuergen", url: "/standorte/stadtbergen" },
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
        subLocation="Stadtbergen"
        mainLocation="Bobingen"
        mainLocationHref="/standorte/bobingen"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Stadtbergen. Schneller Service vom HeizCenter Bobingen - direkt nebenan."
      />

      <LocationServices services={services} title="Unsere Leistungen in Stadtbergen" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Partner in Stadtbergen
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Stadtbergen grenzt direkt an Augsburg und ist mit über 18.000
            Einwohnern eine der größeren Gemeinden im Landkreis. Wir sind Ihr
            lokaler Fachbetrieb für Heizung, Sanitär und Klimatechnik - von
            unserem Standort in Augsburg nur wenige Minuten entfernt.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Stadtbergen - Perfekt für Reihenhäuser
          </h3>
          <p className="text-slate-700 mb-4">
            In Stadtbergen gibt es viele Reihenhaussiedlungen aus den 70er bis
            90er Jahren. Moderne Wärmepumpen sind hier eine ideale Lösung zur
            Heizungsmodernisierung. Auch in den neueren Einfamilienhausgebieten
            sind Wärmepumpen bereits Standard.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Installation in Stadtbergen:</strong> Wir
            installieren platzsparende Luft-Wasser-Wärmepumpen, die auch bei
            kleineren Grundstücken funktionieren. Besonders bei Reihenhäusern
            achten wir auf niedrige Lärmemissionen, damit die Nachbarn nicht
            gestört werden. BEG-Förderung von bis zu 70% reduziert die Kosten
            erheblich. Viele Kunden in Stadtbergen kombinieren die Wärmepumpe mit
            Photovoltaik auf dem Dach.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung in Stadtbergen
          </h3>
          <p className="text-slate-700 mb-4">
            Viele Heizungsanlagen in Stadtbergen sind 20-30 Jahre alt und
            arbeiten ineffizient. Der Heizungstausch lohnt sich: Moderne Systeme
            sparen bis zu 30% Energie und erhöhen den Wohnkomfort.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Stadtbergen:</strong> Wir tauschen alte
            Gasheizungen gegen moderne Brennwerttechnik oder direkt gegen
            Wärmepumpen. Auch Hybrid-Systeme, bei denen die alte Gasheizung als
            Backup erhalten bleibt, sind eine Option. Unser 24/7-Notdienst ist
            bei Heizungsausfällen schnell vor Ort - dank der direkten Nachbarschaft
            zu Augsburg in unter 15 Minuten.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Stadtbergen
          </h3>
          <p className="text-slate-700 mb-6">
            Viele Badezimmer in Stadtbergen stammen noch aus den 70er und 80er
            Jahren. Eine Badsanierung schafft modernes Wohngefühl und erhöht den
            Immobilienwert. Mit unserer 3D-Planung können Sie Ihr neues Bad vorab
            visualisieren. Besonders nachgefragt: Barrierefreie Bäder für ein
            selbstbestimmtes Leben im Alter. Förderung bis 8.000€ möglich. Wir
            koordinieren alle Gewerke und garantieren feste Preise.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Stadtbergen
          </h3>
          <p className="text-slate-700 mb-6">
            Gerade in Reihenhäusern und Dachgeschosswohnungen wird es im Sommer
            schnell heiß. Eine Split-Klimaanlage sorgt für angenehme Temperaturen
            und kann im Winter auch als effiziente Zusatzheizung genutzt werden.
            Wir installieren flüsterleise Geräte mit A+++-Effizienz. Besonders
            beliebt in Stadtbergen: Systeme mit Smart-Home-Integration für
            komfortable Steuerung per App.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Direkte Nachbarschaft zu Augsburg
          </h3>
          <p className="text-slate-700 mb-6">
            Die direkte Nachbarschaft zu Augsburg ist ein großer Vorteil: Kurze
            Anfahrtswege bedeuten schnelle Reaktionszeiten bei Notfällen. Unsere
            Techniker kennen Stadtbergen gut - viele wohnen selbst in der Nähe.
            Das bedeutet lokale Expertise und persönlichen Service.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Ihre Vorteile in Stadtbergen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">15</div>
                <p className="text-slate-700">Minuten Anfahrtszeit maximal</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">80+</div>
                <p className="text-slate-700">Wärmepumpen in Stadtbergen installiert</p>
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
