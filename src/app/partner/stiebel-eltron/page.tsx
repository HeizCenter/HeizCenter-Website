import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import Link from "next/link";
import { Award, Zap, Shield, Thermometer, Snowflake, CheckCircle2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Stiebel Eltron Wärmepumpen | HeizCenter Partner",
  description: "Stiebel Eltron WPL Wärmepumpen - Testsieger, Made in Germany. Premium Cold Climate Heat Pumps. Zuverlässig bis -25°C. Installation Augsburg & Ulm.",
  keywords: ["Stiebel Eltron", "WPL", "Wärmepumpe", "Cold Climate", "Testsieger", "Augsburg", "Ulm"],
  alternates: {
    canonical: getCanonicalUrl("/partner/stiebel-eltron"),
  },
};

export const dynamic = "force-dynamic";

const benefits = [
  "Testsieger Stiftung Warentest",
  "Made in Germany seit 1924",
  "WPL-A 10.2 Plus mit Note GUT (2,2)",
  "Cold Climate bis -25°C Außentemperatur",
  "Natürliches Kältemittel R290",
  "5 Jahre Garantie auf Wärmepumpen",
];

const features = [
  { title: "Testsieger-Qualität", description: "WPL-A 10.2 Plus HK 400 Testsieger bei Stiftung Warentest mit GUT (2,2). Deutsche Qualität seit 1924.", icon: Award },
  { title: "Cold Climate Technologie", description: "Zuverlässig bis -25°C Außentemperatur. Ideal für Kaltregionen und Höhenlagen in Deutschland.", icon: Snowflake },
  { title: "Hohe Vorlauftemperaturen", description: "Bis 70°C möglich für Altbau-Eignung. Auch mit klassischen Heizkörpern effizient heizbar.", icon: Thermometer },
  { title: "Höchste Energieeffizienz", description: "SCOP bis 4,9. Höchste Energieeffizienz und niedrigste Betriebskosten.", icon: Zap },
  { title: "Natürliches R290", description: "Umweltfreundliches Kältemittel Propan mit GWP 3. Zukunftssicher ohne F-Gase.", icon: Shield },
  { title: "Made in Germany", description: "Entwicklung und Produktion in Deutschland. 100 Jahre Erfahrung in Wärmetechnik.", icon: CheckCircle2 },
];

const faqs: FAQItem[] = [
  { question: "Welche Stiebel Eltron Wärmepumpen installiert HeizCenter?", answer: "Wir installieren die WPL-A Serie (Außenaufstellung Monoblock), WPL 24 I (Innenaufstellung) sowie WPL 19/24 A (Monoblock). Für höchste Ansprüche die WPL A2W Premium Cold Climate Heat Pumps. Alle mit modernster Inverter-Technologie." },
  { question: "Was kostet eine Stiebel Eltron WPL Wärmepumpe?", answer: "Eine WPL 10 A kostet ab 9.000€ (Gerät), die Testsieger WPL-A 10.2 Plus ab 10.500€. Mit Installation, Pufferspeicher und Warmwasserbereitung rechnen Sie mit 21.000-32.000€ komplett für ein Einfamilienhaus." },
  { question: "Was bedeutet Cold Climate bei Stiebel Eltron?", answer: "Cold Climate bedeutet, dass die Wärmepumpe auch bei extremen Minustemperaturen (-25°C) noch zuverlässig arbeitet. Das macht sie ideal für kalte Regionen, Höhenlagen und harte Winter in Bayern und Schwaben." },
  { question: "Eignet sich Stiebel Eltron für Altbau?", answer: "Ja! Die WPL Serie erreicht Vorlauftemperaturen bis 70°C und eignet sich daher auch für unsanierte Altbauten mit klassischen Heizkörpern. Die Cold Climate Technologie funktioniert auch bei sehr niedrigen Außentemperaturen effizient." },
  { question: "Wie effizient sind Stiebel Eltron Wärmepumpen?", answer: "Die WPL-A 10.2 Plus erreicht SCOP 4,9 (A+++). Damit gehört Stiebel Eltron zu den effizientesten Wärmepumpen am Markt. Bis zu 75% Energieeinsparung gegenüber Öl- und Gasheizungen sind möglich." },
  { question: "Was ist WPL 24 I compact duo?", answer: "Das ist eine innen aufgestellte Luft-Wasser-Wärmepumpe, die im Haustechnik-Raum installiert wird. Dadurch werden Geräuschemissionen nach außen vermieden. Ideal für dicht besiedelte Gebiete oder bei wenig Platz im Garten." },
  { question: "Kann ich Stiebel Eltron mit PV kombinieren?", answer: "Ja! Alle WPL Modelle sind SG-Ready (Smart Grid Ready) und können optimal mit PV-Anlagen kombiniert werden. Die ISG-Regelung ermöglicht intelligente Steuerung für maximalen Eigenverbrauch." },
];

export default function StiebElEltronPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Partner", url: "/partner" },
          { name: "stieuel eltron", url: "/partner/stiebel-eltron" },
        ]}
      />
      <ServiceHero title="Stiebel Eltron Wärmepumpen" description="Made in Germany seit 1924. Die WPL Serie überzeugt durch Testsieger-Qualität, Cold Climate Technologie und höchste Zuverlässigkeit. Premium-Wärmepumpen für höchste Ansprüche." benefits={benefits} icon={Award} badge="Testsieger" imageSrc="/images/Waermepumpe.jpeg" logoSrc="/images/partners/stiebel-eltron.svg" />
      <FeaturesSection title="Warum Stiebel Eltron? 100 Jahre Erfahrung." features={features} />

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Stiebel Eltron Produktlinien bei HeizCenter</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-2 border-[#0F5B78]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#0F5B78]">WPL Wärmepumpen Serie</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">WPL-A 10.2 Plus - Testsieger 2024</h4>
                <p className="text-slate-700 mb-3">Stiftung Warentest Testsieger mit GUT (2,2). Die Premium Luft-Wasser-Wärmepumpe für höchste Ansprüche.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 10,2 kW bei A7/W35</li>
                  <li>SCOP: 4,9 (A+++)</li>
                  <li>Vorlauftemperatur: bis 70°C</li>
                  <li>Kältemittel: R290 (Propan)</li>
                  <li>Cold Climate bis -25°C</li>
                  <li>Monoblock Außenaufstellung</li>
                  <li>Inverter-geregelt, modulierend</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">Preis ab: 10.500€ (Gerät) | Komplett ab 24.000€</p>
              </div>

              <div className="mb-6 pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">WPL 19/24 A - Monoblock Serie</h4>
                <p className="text-slate-700 mb-3">Außen aufgestellte Monoblock-Wärmepumpen. Besonders für Modernisierungsprojekte geeignet.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Leistung: 7-14 kW (verschiedene Größen)</li>
                  <li>SCOP: bis 4,7 (A++)</li>
                  <li>Vorlauftemperatur: bis 65°C</li>
                  <li>Kompakte Abmessungen</li>
                  <li>Ideal für Modernisierung</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">Preis ab: 9.000€ (Gerät) | Komplett ab 21.000€</p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-xl font-semibold mb-3">WPL 24 I compact duo - Innenaufstellung</h4>
                <p className="text-slate-700 mb-3">Innen aufgestellte Wärmepumpe für geräuschsensible Standorte. Vermeidet Außengeräusche komplett.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                  <li>Aufstellung im Haustechnik-Raum</li>
                  <li>Keine Außengeräusche</li>
                  <li>Ideal für dicht besiedelte Gebiete</li>
                  <li>Platzsparend durch Kompaktbauweise</li>
                </ul>
                <p className="font-semibold text-[#0F5B78]">Preis ab: 11.000€ (Gerät) | Komplett ab 25.000€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Warum Stiebel Eltron mit HeizCenter?</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 mb-6">Als autorisierter <strong>Stiebel Eltron Fachpartner</strong> verbinden wir 100 Jahre deutsche Qualität mit unserem modernen Service. Stiebel Eltron steht für höchste Zuverlässigkeit und innovative Technologie.</p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Fachpartner-Vorteile</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Zertifizierte Stiebel Eltron Installation</li>
                    <li>✓ 5 Jahre Garantie auf Wärmepumpen</li>
                    <li>✓ Original-Ersatzteile vom Hersteller</li>
                    <li>✓ Regelmäßige Produktschulungen</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">Unsere Leistungen</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Kostenlose Vor-Ort-Beratung</li>
                    <li>✓ Heizlastberechnung nach DIN</li>
                    <li>✓ Förderantrag-Unterstützung</li>
                    <li>✓ Installation in 2-3 Tagen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Stiebel Eltron Installationen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Einfamilienhaus Augsburg (2024)</h3>
              <p className="text-slate-700 mb-3">WPL-A 10.2 Plus, 10 kW | Baujahr 1990</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Testsieger-Modell installiert</li>
                <li>• Austausch Ölheizung</li>
                <li>• Förderung: bis 70% KfW BEG möglich</li>
                <li>• JAZ: 4,3 | Einsparung: ~2.300€/Jahr</li>
              </ul>
            </div>
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Neubau Ulm (2024)</h3>
              <p className="text-slate-700 mb-3">WPL 19 A, 7 kW | KfW40</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Fußbodenheizung</li>
                <li>• SCOP 4,7 (A++)</li>
                <li>• PV-Anlage gekoppelt</li>
                <li>• Heizkosten: ~420€/Jahr</li>
              </ul>
            </div>
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Altbau Memmingen (2023)</h3>
              <p className="text-slate-700 mb-3">WPL 24 A, 12 kW | Baujahr 1968</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 70°C für alte Heizkörper</li>
                <li>• Cold Climate Technologie</li>
                <li>• Auch bei -20°C effizient</li>
                <li>• JAZ: 3,6 trotz Altbau</li>
              </ul>
            </div>
            <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Innenstadt Bobingen (2024)</h3>
              <p className="text-slate-700 mb-3">WPL 24 I compact duo</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Innenaufstellung gewählt</li>
                <li>• Keine Außengeräusche</li>
                <li>• Nachbarn sehr zufrieden</li>
                <li>• JAZ: 4,2</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />

      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Weitere Informationen</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/waermepumpe" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Wärmepumpen Übersicht</h4>
              <p className="text-sm text-slate-600">Alles über Wärmepumpen-Technologie</p>
            </Link>
            <Link href="/heizung" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Heizungssysteme</h4>
              <p className="text-sm text-slate-600">Moderne Heizungslösungen</p>
            </Link>
            <Link href="/partner" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <h4 className="font-semibold text-[#0F5B78] mb-2">Alle Hersteller</h4>
              <p className="text-sm text-slate-600">Premium-Partner entdecken</p>
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: "Stiebel Eltron WPL Wärmepumpe", brand: { "@type": "Brand", name: "Stiebel Eltron" }, description: "Premium Wärmepumpen von Stiebel Eltron. Testsieger. Made in Germany. Installation durch HeizCenter.", category: "Wärmepumpe", offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "21000", highPrice: "32000", availability: "https://schema.org/InStock", seller: { "@type": "LocalBusiness", name: "HeizCenter GmbH", telephone: "+49 8234 9665900" } }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "60" }, manufacturer: { "@type": "Organization", name: "Stiebel Eltron GmbH & Co. KG", url: "https://www.stiebel-eltron.de" } }) }} />
    </>
  );
}
