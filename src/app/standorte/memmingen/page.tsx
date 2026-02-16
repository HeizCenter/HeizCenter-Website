import { Metadata } from "next";
import Link from "next/link";
import { LocationHero } from "@/components/sections/location-hero";
import {
  LocationServices,
  LocationService,
} from "@/components/sections/location-services";
import { LocationCoverage } from "@/components/sections/location-coverage";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind, Sun, BookOpen } from "lucide-react";
import { ServiceAreaSchema } from "@/components/schema/service-area-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { CONTACT } from '@/lib/config/contact';

export const metadata: Metadata = {
  title:
    "Wärmepumpe & Heizung in Memmingen - Service vom HeizCenter",
  description:
    "Ihr Fachbetrieb für Wärmepumpen, Heizungsinstallation, Badsanierung und Klimaanlagen in Memmingen. Kostenlose Beratung, schneller Service, faire Preise. Jetzt kontaktieren!",
  keywords: [
    "Wärmepumpe Memmingen",
    "Heizung Memmingen",
    "Sanitär Memmingen",
    "Klimaanlage Memmingen",
    "Solarthermie Memmingen",
    "Badsanierung Memmingen",
    "Heizungsnotdienst Memmingen",
    "HeizCenter Memmingen",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte/memmingen"),
  },
  openGraph: {
    title: "HeizCenter Memmingen - Ihr Experte für Wärmepumpen & Heizung",
    description:
      "Professionelle Installation und Wartung von Wärmepumpen, Heizungen und Klimaanlagen in Memmingen.",
  },
};

const services: LocationService[] = [
  {
    title: "Wärmepumpe",
    description:
      "Moderne Wärmepumpen für Memmingen und Unterallgäu. BEG-Förderung bis 70%. Effizient heizen.",
    icon: Zap,
    href: "/waermepumpe",
  },
  {
    title: "Heizung",
    description:
      "Installation, Wartung und Reparatur aller Heizungssysteme. 24/7 Notdienst für Memmingen.",
    icon: Flame,
    href: "/heizung",
  },
  {
    title: "Sanitär & Bad",
    description:
      "Badsanierung und Sanitärinstallationen in Memmingen. 3D-Planung und Festpreisgarantie.",
    icon: Droplet,
    href: "/sanitaer",
  },
  {
    title: "Klimaanlage",
    description:
      "Split-Klimaanlagen für Wohnungen und Gewerbe. Heizen und Kühlen mit einem Gerät.",
    icon: Wind,
    href: "/klimaanlage",
  },
  {
    title: "Solarthermie",
    description:
      "Solarthermie-Anlagen für Memmingen. Bis 70% KfW-Förderung. Warmwasser und Heizungsunterstützung mit Sonnenenergie.",
    icon: Sun,
    href: "/solar",
  },
];

const coverageAreas = [
  "Memmingen Innenstadt",
  "Memmingen Steinheim",
  "Memmingen Amendingen",
  "Memmingen Dickenreishausen",
  "Bad Grönenbach",
  "Bad Wörishofen",
  "Ottobeuren",
  "Leutkirch",
  "Mindelheim",
  "Türkheim",
  "Babenhausen",
  "Kirchheim",
  "Erkheim",
  "Legau",
  "Buxheim",
];

const faqs: FAQItem[] = [
  {
    question: "Was kostet eine Wärmepumpe im Allgäu?",
    answer:
      "Eine Wärmepumpe im Raum Memmingen kostet zwischen 15.000 und 35.000 Euro inkl. Installation. Bei großen Grundstücken im Allgäu ist oft eine Erdwärmepumpe sinnvoll. Mit der BEG-Förderung von bis zu 70% reduzieren sich Ihre Kosten erheblich. Wir beraten Sie kostenlos vor Ort.",
  },
  {
    question: "Lohnt sich eine Pelletheizung in Memmingen?",
    answer:
      "Ja, besonders im ländlichen Raum um Memmingen sind Pelletheizungen beliebt. Sie heizen CO2-neutral und sind unabhängig von Öl- und Gaspreisen. Die BEG-Förderung macht Pelletheizungen besonders attraktiv. Viele unserer Kunden im Allgäu haben bereits erfolgreich umgestellt.",
  },
  {
    question: "Wie schnell ist der Notdienst in Memmingen vor Ort?",
    answer:
      `Unser 24/7 Heizungsnotdienst erreicht Sie in Memmingen und dem Unterallgäu in der Regel innerhalb von 60-90 Minuten. Bei Heizungsausfall im kalten Allgäu-Winter sind wir rund um die Uhr unter ${CONTACT.PHONE_DISPLAY} erreichbar.`,
  },
  {
    question: "Gibt es Förderung für Heizungstausch in Bayern?",
    answer:
      "Ja, in Bayern profitieren Sie von der BEG-Förderung mit bis zu 70% Zuschuss beim Umstieg auf Wärmepumpe oder Pelletheizung. Zusätzlich gibt es das bayerische Programm 10.000-Häuser und kommunale Förderungen. Wir helfen Ihnen bei der Antragstellung.",
  },
  {
    question: "Welche Heizung empfehlen Sie bei fehlendem Gasanschluss?",
    answer:
      "Im ländlichen Allgäu ohne Gasanschluss empfehlen wir Wärmepumpen oder Pelletheizungen. Beide sind förderfähig und zukunftssicher. Bei großen Grundstücken ist eine Erdwärmepumpe ideal, ansonsten eine moderne Luft-Wasser-Wärmepumpe. Wir beraten Sie individuell.",
  },
];

export default function MemmingenPage() {
  const data = locationData["memmingen"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "Memmingen", url: "/standorte/memmingen" },
        ]}
      />
      {/* Schema.org LocalBusiness Structured Data */}
      <ServiceAreaSchema
        cityName={data.cityName}
        region={data.region}
        mainOffice={{
          name: "Bobingen",
          streetAddress: "Lechallee 28",
          addressLocality: "Bobingen",
          postalCode: "86399",
          latitude: 48.2744,
          longitude: 10.8369,
        }}
        serviceCities={data.serviceCities}
      />

      <LocationHero
        name="Memmingen"
        address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel"
        phone={CONTACT.PHONE_DISPLAY}
        email={CONTACT.EMAIL}
        description="Ihr zuverlässiger Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Memmingen und Unterallgäu. Über 20 Jahre Erfahrung, schneller Service und faire Preise."
        mainLocation="Gutenzell-Hürbel"
      />

      <LocationServices
        services={services}
        title="Unsere Leistungen in Memmingen"
      />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            Warum HeizCenter in Memmingen?
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Als etablierter Fachbetrieb in Memmingen und im Unterallgäu sind
            wir Ihr kompetenter Ansprechpartner für alle Fragen rund um Heizung,
            Sanitär und Klimatechnik. Unsere Techniker kennen die regionalen
            Besonderheiten und sind mit den Gegebenheiten in Memmingen und der
            ländlichen Umgebung bestens vertraut.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Wärmepumpen im Allgäu - Perfekt für die Region
          </h3>
          <p className="text-slate-700 mb-4">
            Das Unterallgäu ist ideal für <Link href="/waermepumpe" className="text-[#0F5B78] font-medium hover:underline">Wärmepumpen</Link>: Viele Einfamilienhäuser,
            große Grundstücke und das Bewusstsein für nachhaltige
            Energielösungen. Als Wärmepumpen-Spezialist in Memmingen haben wir
            bereits zahlreiche Projekte im Allgäu erfolgreich umgesetzt.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Wärmepumpen in Memmingen - Unsere Leistungen:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>Luft-Wasser-Wärmepumpen: Ideal für Memminger Klimabedingungen</li>
            <li>Erdwärmepumpen: Perfekt bei großen Grundstücken im Allgäu</li>
            <li>Grundwasser-Wärmepumpen: Höchste Effizienz (mit Genehmigung)</li>
            <li>BEG-Förderung bis 70%: Wir helfen bei der Antragstellung</li>
            <li>Kombination mit bestehenden Heizsystemen (Hybrid)</li>
          </ul>
          <p className="text-slate-700 mb-6">
            Im ländlichen Raum um Memmingen bieten sich besonders
            Erdwärmepumpen an. Die großen Grundstücke ermöglichen eine optimale
            Installation von Erdkollektoren oder Erdsonden. Wir beraten Sie
            kostenlos, welches System für Ihr Grundstück am besten geeignet ist.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Heizungsservice in Memmingen und Umgebung
          </h3>
          <p className="text-slate-700 mb-4">
            Ob Gasheizung, Ölheizung oder <Link href="/heizung" className="text-[#0F5B78] font-medium hover:underline">Pelletheizung</Link> - im Allgäu sind alle
            Heizungsarten vertreten. Wir sind Ihr Ansprechpartner für
            Installation, Wartung und Reparatur. Unser 24/7 Notdienst ist
            besonders im kalten Allgäu-Winter wichtig.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Besonderheiten im Unterallgäu:</strong> Viele Gebäude sind
            nicht ans Gasnetz angeschlossen. Hier bieten sich Wärmepumpen,
            Pelletheizungen oder moderne Ölbrennwertheizungen als Alternative
            an. Wir beraten Sie zu allen Optionen und finden die wirtschaftlich
            sinnvollste Lösung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Badsanierung in Memmingen - Regional und zuverlässig
          </h3>
          <p className="text-slate-700 mb-4">
            Ob historisches Stadthaus in der Memminger Altstadt oder modernes
            Einfamilienhaus in Amendingen - wir sanieren <Link href="/sanitaer" className="text-[#0F5B78] font-medium hover:underline">Badezimmer</Link> in allen
            Gebäudetypen. Mit unserer 3D-Planung können Sie Ihr neues Bad vorab
            visualisieren.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Badsanierung im Allgäu - Das bieten wir:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
            <li>3D-Badplanung für perfekte Visualisierung</li>
            <li>Barrierefreie Bäder (Pflegekasse bis 4.000€ pro Person, KfW-Programm in Neuauflage)</li>
            <li>Sanierung in denkmalgeschützten Gebäuden</li>
            <li>Modernisierung von Bauernhäusern und Landhäusern</li>
            <li>Festpreisgarantie und koordinierte Gewerke</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Klimaanlagen für Memmingen - Kühlung für heiße Sommertage
          </h3>
          <p className="text-slate-700 mb-4">
            Auch im Allgäu wird es im Sommer immer heißer. Eine moderne
            <Link href="/klimaanlage" className="text-[#0F5B78] font-medium hover:underline"> Klimaanlage</Link> sorgt für angenehme Temperaturen in Wohn- und
            Schlafräumen. Besonders in Dachgeschossen ist eine Klimaanlage eine
            lohnende Investition.
          </p>
          <p className="text-slate-700 mb-6">
            Unsere Split-Klimaanlagen sind flüsterleise, energieeffizient und
            können im Winter auch als effiziente Zusatzheizung genutzt werden.
            Die Installation erfolgt durch zertifizierte Kältetechniker und
            dauert nur wenige Stunden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Ihr regionaler Partner im Unterallgäu
          </h3>
          <p className="text-slate-700 mb-4">
            Von unserem Gutenzell-Hürbel Büro erreichen wir Sie schnell in
            Memmingen - ob in der Memminger Innenstadt, Steinheim, Amendingen
            oder in den umliegenden Gemeinden wie Bad Wörishofen, Ottobeuren,
            Mindelheim oder Bad Grönenbach.
          </p>
          <p className="text-slate-700 mb-6">
            <strong>Das zeichnet uns im Allgäu aus:</strong> Kurze Anfahrtswege,
            Verständnis für ländliche Besonderheiten (große Grundstücke, fehlende
            Gasanschlüsse, denkmalgeschützte Gebäude), persönliche Beratung und
            faire Preise. Wir sprechen Ihre Sprache und kennen die regionalen
            Gegebenheiten.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Pelletheizungen - Beliebt im Allgäu
          </h3>
          <p className="text-slate-700 mb-6">
            Im ländlichen Raum um Memmingen sind Pelletheizungen besonders
            beliebt. Sie kombinieren CO2-neutrales Heizen mit Unabhängigkeit von
            Öl und Gas. Wir installieren moderne Pelletheizungen mit
            automatischer Beschickung und beraten Sie zu Fördermöglichkeiten.
            Die BEG-Förderung macht Pelletheizungen besonders attraktiv.
          </p>
        </div>
      </section>

      <LocationCoverage mainCity="Memmingen" coverageAreas={coverageAreas} />

      {/* Ratgeber für Hausbesitzer */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0F5B78]/10 text-[#0F5B78] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Ratgeber
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Ratgeber für Hausbesitzer in Memmingen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/blog/waermepumpe-altbau" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">Wärmepumpe im Altbau</h3>
              <p className="text-slate-600 text-sm">Voraussetzungen und Tipps für Wärmepumpen im Bestandsgebäude.</p>
            </Link>
            <Link href="/blog/foerderung-heizung-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">Förderung Heizungstausch 2026</h3>
              <p className="text-slate-600 text-sm">BEG-Förderung bis 70% – alle Details und Antragsschritte.</p>
            </Link>
            <Link href="/blog/barrierefreies-bad-planen-ratgeber" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">Barrierefreies Bad planen</h3>
              <p className="text-slate-600 text-sm">DIN-Normen, Ausstattung und Planungstipps.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Häufige Fragen zu Heizung & Wärmepumpe in Memmingen" />

      <CTASection variant="gradient" />
    </>
  );
}
