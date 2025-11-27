import { Metadata } from "next";
import { SubLocationHero } from "@/components/sections/sub-location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung Ottobeuren - HeizCenter | Ihr Fachbetrieb vor Ort",
  description:
    "Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Ottobeuren. Schneller Service vom HeizCenter Memmingen. Kostenlose Beratung, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Ottobeuren",
    "Heizung Ottobeuren",
    "Sanitär Ottobeuren",
    "Klimaanlage Ottobeuren",
    "HeizCenter Ottobeuren",
  ],
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen für Ottobeuren. BEG-Förderung bis 40%.",
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

export default function OttobeurenPage() {
  const data = locationData["ottobeuren"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "ottoueuren", url: "/standorte/ottobeuren" },
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
        subLocation="Ottobeuren"
        mainLocation="Gutenzell-Hürbel"
        mainLocationHref="/standorte/gutenzell-huerbel"
        phone="+49 8234 9665900"
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Ottobeuren. Schneller Service vom HeizCenter Gutenzell-Hürbel für den Markt Ottobeuren und das Kloster."
      />

      <LocationServices services={services} title="Unsere Leistungen in Ottobeuren" />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            HeizCenter - Ihr Partner in Ottobeuren
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Ottobeuren, der Markt im Unterallgäu, ist vor allem durch die
            barocke Benediktinerabtei bekannt - eine der schönsten Kirchen
            Deutschlands. Wir sind Ihr lokaler Fachbetrieb für Heizung, Sanitär
            und Klimatechnik in Ottobeuren - für Privathaushalte, Gewerbe und
            öffentliche Einrichtungen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen für Ottobeuren - Ideal fürs Allgäu
          </h3>
          <p className="text-slate-700 mb-4">
            Das milde Allgäu-Klima macht Ottobeuren zum idealen Standort für
            Wärmepumpen. Die vielen Einfamilienhäuser und Bauernhöfe in der
            Umgebung haben oft große Grundstücke - perfekt für effiziente
            Erdwärmepumpen. Aber auch in kleineren Anwesen funktionieren moderne
            Luft-Wasser-Wärmepumpen hervorragend.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Wärmepumpen-Installation in Ottobeuren:</strong> Wir beraten
            Sie kostenlos, welches System für Ihr Grundstück optimal ist. Bei
            größeren Grundstücken empfehlen wir Erdwärmepumpen mit
            Erdkollektoren oder Erdsonden - die hohe Effizienz amortisiert die
            Investition schnell. Für kleinere Grundstücke sind moderne
            Luft-Wasser-Wärmepumpen die beste Wahl. BEG-Förderung bis 40% macht
            den Umstieg besonders attraktiv. Auch in historischen Gebäuden im
            Ortskern können Wärmepumpen mit der richtigen Planung installiert
            werden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsmodernisierung im Allgäu
          </h3>
          <p className="text-slate-700 mb-4">
            Viele Gebäude in Ottobeuren - ob Einfamilienhaus, Bauernhof oder
            Gewerbeobjekt - haben ältere Heizungsanlagen. Ein Austausch gegen
            moderne Systeme spart bis zu 30% Energie und erhöht den Wohnkomfort
            erheblich. Besonders im Winter ist eine zuverlässige Heizung im
            Allgäu wichtig.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Heizungsservice Ottobeuren:</strong> Wir installieren
            moderne Gasbrennwertheizungen, Pelletheizungen und Wärmepumpen. Auch
            Hybrid-Systeme sind eine gute Option - besonders bei der Sanierung
            älterer Gebäude. Pelletheizungen sind im ländlichen Ottobeuren sehr
            beliebt, da Holzpellets regional verfügbar sind. Unser
            24/7-Notdienst ist bei Heizungsausfällen schnell vor Ort - von
            Memmingen aus in etwa 30 Minuten erreichbar.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Ottobeuren
          </h3>
          <p className="text-slate-700 mb-6">
            Ob Sie ein Einfamilienhaus im Ortskern, einen Bauernhof in der
            Umgebung oder eine Ferienwohnung für Touristen haben - wir sanieren
            Badezimmer professionell und zuverlässig. Mit unserer 3D-Planung
            können Sie Ihr neues Bad vorab visualisieren. Besonders gefragt:
            Barrierefreie Bäder für ein selbstbestimmtes Leben im Alter.
            Förderung bis 8.000€ möglich über die KfW. Wir koordinieren alle
            Gewerke - Fliesen, Elektro, Sanitär - und garantieren feste Preise
            ohne versteckte Kosten.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Ottobeuren
          </h3>
          <p className="text-slate-700 mb-6">
            Auch im Allgäu wird es im Sommer heiß - besonders in
            Dachgeschosswohnungen und Räumen mit großen Fensterflächen. Eine
            moderne Split-Klimaanlage sorgt für angenehme Temperaturen in Wohn-
            und Schlafräumen. Für Ferienwohnungen ist eine Klimaanlage ein
            wichtiges Ausstattungsmerkmal für Gäste. Im Winter kann die
            Klimaanlage auch als effiziente Zusatzheizung genutzt werden -
            besonders in der Übergangszeit eine energiesparende Lösung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Service für Kloster und Tourismus
          </h3>
          <p className="text-slate-700 mb-4">
            Ottobeuren ist ein wichtiger Tourismusstandort mit vielen
            Ferienwohnungen, Pensionen und Hotels. Wir haben Erfahrung mit der
            Haustechnik in touristischen Objekten: Zuverlässige Heizung und
            Warmwasser sind für Gäste unverzichtbar. Auch bei historischen
            Gebäuden - wie dem berühmten Kloster - beraten wir zu modernen
            Heizsystemen, die den Anforderungen des Denkmalschutzes gerecht
            werden.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Tourismusobjekte in Ottobeuren:</strong> Wir installieren
            Wärmepumpen für Ferienwohnungen, die im Sommer kühlen und im Winter
            heizen. Moderne Systeme mit App-Steuerung ermöglichen die
            Fernsteuerung der Heizung zwischen Gästewechseln. Bei
            Gewerbeobjekten bieten wir Wartungsverträge an, damit Heizung und
            Warmwasser immer funktionieren.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Service in Ottobeuren und Umgebung
          </h3>
          <p className="text-slate-700 mb-6">
            Von unserem Standort in Memmingen erreichen wir Ottobeuren in etwa
            30 Minuten. Bei Notfällen sind wir schnell vor Ort. Wir betreuen Sie
            auch in den umliegenden Gemeinden und Ortsteilen. Unsere Techniker
            kennen die ländliche Umgebung des Allgäus und haben Erfahrung mit
            den Besonderheiten von Bauernhöfen, Ferienwohnungen und historischen
            Gebäuden.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Expertise in Ottobeuren
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">30</div>
                <p className="text-slate-700">Minuten Anfahrtszeit von Memmingen</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">15+</div>
                <p className="text-slate-700">Projekte in touristischen Objekten</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-[#0F5B78] mb-2">40%</div>
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
