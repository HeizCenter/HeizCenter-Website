import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Königsbrunn - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Königsbrunn. Schneller Service vom HeizCenter Augsburg. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Königsbrunn",
    "Heizung Königsbrunn",
    "Sanitär Königsbrunn",
    "Klimaanlage Königsbrunn",
    "HeizCenter Königsbrunn",
  ],
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Königsbrunn. BEG-Förderung bis 40%.",
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
    "telephone": "+49 8234 96659 00",
  },
  "areaServed": {
    "@type": "City",
    "name": "Königsbrunn",
  },
};

export default function KoenigsbrunnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SubLocationHero
        subLocation="Königsbrunn"
        mainLocation="Bobingen"
        mainLocationHref="/standorte/bobingen"
        phone="+49 8234 966590"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Königsbrunn. Schneller Service vom HeizCenter Bobingen - in 15 Minuten vor Ort."
      />

      <LocationServices services={services} title="Unsere Leistungen in Königsbrunn" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Experte in Königsbrunn
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Königsbrunn ist mit über 28.000 Einwohnern die größte Gemeinde im
            Landkreis Augsburg - und wir sind Ihr lokaler Partner für alle Fragen
            rund um Heizung, Sanitär und Klimatechnik. Von unserem Standort in
            Augsburg erreichen wir Sie in Königsbrunn in nur 15 Minuten.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen in Königsbrunn - Die beste Wahl für Neubauten
          </h3>
          <p className="text-slate-700 mb-4">
            Königsbrunn wächst - viele neue Einfamilienhäuser und
            Reihenhaussiedlungen entstehen. Wärmepumpen sind für diese Neubauten
            die perfekte Heizlösung. Effizient, umweltfreundlich und zukunftssicher.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Installation in Königsbrunn:</strong> Wir
            installieren moderne Luft-Wasser-Wärmepumpen, die perfekt zu den
            Neubaustandards in Königsbrunn passen. Dank BEG-Förderung von bis zu
            40% wird die Investition besonders attraktiv. Bei größeren Grundstücken
            bieten sich auch Erdwärmepumpen an - wir beraten Sie kostenlos.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsservice für Alt und Neu
          </h3>
          <p className="text-slate-700 mb-4">
            Neben den vielen Neubauten gibt es in Königsbrunn auch zahlreiche
            ältere Gebäude, die eine Heizungssanierung benötigen. Wir sind Ihr
            Ansprechpartner für den Austausch alter Gas- und Ölheizungen gegen
            moderne, effiziente Systeme.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>24/7 Heizungsnotdienst:</strong> Auch in Königsbrunn sind wir
            im Notfall schnell zur Stelle. Bei Heizungsausfall erreichen Sie
            unseren Notdienst rund um die Uhr. Dank der kurzen Entfernung sind
            wir in unter 30 Minuten bei Ihnen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Königsbrunn
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Neubau-Erstausstattung oder Sanierung eines älteren Badezimmers -
            wir setzen Ihre Badträume in Königsbrunn um. Mit unserer 3D-Planung
            können Sie Ihr neues Bad vorab visualisieren. Wir koordinieren alle
            Gewerke und garantieren eine Fertigstellung in 2-3 Wochen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Königsbrunn
          </h3>
          <p className="text-slate-700 mb-6">
            Gerade in den modernen, gut gedämmten Neubauten in Königsbrunn wird
            es im Sommer schnell heiß. Eine Split-Klimaanlage sorgt für angenehme
            Temperaturen und kann im Winter auch als effiziente Zusatzheizung
            genutzt werden. Besonders beliebt in Königsbrunn: Multi-Split-Systeme
            für mehrere Räume mit nur einem Außengerät.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Schnell vor Ort in ganz Königsbrunn
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie im Zentrum von Königsbrunn wohnen oder in den Neubaugebieten im
            Süden - wir sind schnell bei Ihnen. Unsere Techniker kennen
            Königsbrunn gut und wissen, wo welche Erschließung vorhanden ist. Das
            spart Zeit bei der Planung und Installation.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Warum Kunden in Königsbrunn uns wählen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">15</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Augsburg</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">20+</div>
                <p className="text-slate-700">Jahre Erfahrung in der Region</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">100+</div>
                <p className="text-slate-700">Wärmepumpen in Königsbrunn installiert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
