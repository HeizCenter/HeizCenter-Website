import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Unsere Premium-Partner | Viessmann, Vaillant, Buderus & mehr",
  description: "HeizCenter arbeitet mit den führenden Herstellern zusammen: Viessmann, Vaillant, Buderus, Wolf, Stiebel Eltron, Junkers, Bosch, Daikin. Testsieger-Qualität.",
  keywords: ["Hersteller", "Partner", "Viessmann", "Vaillant", "Buderus", "Wolf", "Stiebel Eltron", "Daikin"],
};

export const dynamic = "force-dynamic";

const partners = [
  {
    name: "Viessmann",
    slug: "viessmann",
    description: "Testsieger Stiftung Warentest 2024 & 2025. Vitocal Wärmepumpen mit höchster Effizienz und bis zu 75°C Vorlauftemperatur.",
    badge: "Testsieger 2024",
    highlights: ["Made in Germany", "10 Jahre Garantie", "SCOP bis 5,1"],
  },
  {
    name: "Vaillant",
    slug: "vaillant",
    description: "Marktführer mit 150+ Jahren Erfahrung. aroTHERM Serie mit Green iQ Technology und bis zu 75°C Vorlauftemperatur.",
    badge: "Marktführer",
    highlights: ["Green iQ", "Bis 75°C", "SCOP bis 5,4"],
  },
  {
    name: "Buderus",
    slug: "buderus",
    description: "Testsieger 2024. Unerhört leise Logatherm Serie. Bosch-Qualität seit 1731 mit natürlichem R290 Kältemittel.",
    badge: "Testsieger",
    highlights: ["Unerhört leise", "Bosch Gruppe", "SCOP bis 5,2"],
  },
  {
    name: "Wolf",
    slug: "wolf",
    description: "Kompakte CHA-Monoblock Serie Made in Bavaria. Modulierende Inverter-Technologie mit integriertem 9 kW Heizstab.",
    badge: "Made in Bavaria",
    highlights: ["Kompakt", "Heizstab inkl.", "SCOP bis 4,7"],
  },
  {
    name: "Stiebel Eltron",
    slug: "stiebel-eltron",
    description: "Testsieger WPL-A 10.2 Plus. Cold Climate Technologie bis -25°C. Made in Germany seit 1924.",
    badge: "Cold Climate",
    highlights: ["Testsieger", "Bis -25°C", "SCOP bis 4,9"],
  },
  {
    name: "Junkers Bosch",
    slug: "junkers",
    description: "Teil der Bosch Thermotechnik. Bewährte Compress Serie mit ausgezeichnetem Preis-Leistungs-Verhältnis.",
    badge: "Bosch Gruppe",
    highlights: ["Preis-Leistung", "Bewährt", "SCOP bis 4,6"],
  },
  {
    name: "Bosch",
    slug: "bosch",
    description: "Weltkonzern-Qualität. Compress 7000 Serie mit A+++-Effizienz und Smart Home Ready Funktionen.",
    badge: "Weltkonzern",
    highlights: ["Innovation", "Smart Home", "SCOP bis 5,1"],
  },
  {
    name: "Daikin",
    slug: "daikin",
    description: "Weltmarktführer Klimatechnik. Altherma Wärmepumpen für Heizen & Kühlen. Japanische Qualität seit 1924.",
    badge: "Weltmarktführer",
    highlights: ["Heizen + Kühlen", "Bis 70°C", "SCOP bis 5,15"],
  },
];

export default function PartnerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unsere Premium-Partner
            </h1>
            <p className="text-xl text-white/90 mb-6">
              HeizCenter arbeitet ausschließlich mit führenden Herstellern zusammen.
              Testsieger-Qualität, langjährige Erfahrung und modernste Technologie für Ihr Zuhause.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Mehrere Testsieger</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Zertifizierte Fachpartner</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>5 Jahre Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <section className="container py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-700">
            Unsere Hersteller-Partner
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partner/${partner.slug}`}
                className="flex items-center justify-center p-4 hover:opacity-70 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/partners/${partner.slug}.svg`}
                  alt={`${partner.name} Logo`}
                  className="w-auto h-auto max-h-12"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Link key={partner.slug} href={`/partner/${partner.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-[#0F5B78] cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{partner.name}</CardTitle>
                      <Badge variant="secondary" className="whitespace-nowrap">
                        {partner.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {partner.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-[#0F5B78] flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Premium Partners */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Warum wir nur mit Premium-Herstellern arbeiten
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#0F5B78]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="font-bold mb-2">Testsieger-Qualität</h3>
                <p className="text-sm text-slate-600">
                  Mehrere unserer Partner sind Testsieger bei Stiftung Warentest.
                  Höchste Qualität und Zuverlässigkeit garantiert.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Lange Garantie</h3>
                <p className="text-sm text-slate-600">
                  5-10 Jahre Garantie auf Wärmepumpen. Langfristige Sicherheit
                  und Ersatzteilversorgung durch Markenhersteller.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">Fachpartner-Service</h3>
                <p className="text-sm text-slate-600">
                  Als zertifizierte Fachpartner bieten wir Ihnen Original-Ersatzteile,
                  Werksschulungen und erstklassigen Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technologie-Übersicht
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Wärmepumpen-Systeme
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Luft-Wasser-Wärmepumpen (Monoblock & Split)</li>
                <li>✓ Erdwärmepumpen (Sole-Wasser)</li>
                <li>✓ Hochtemperatur-Wärmepumpen (bis 75°C)</li>
                <li>✓ Cold Climate bis -25°C</li>
                <li>✓ A+++-Energieeffizienz</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Kältemittel & Umwelt
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ R290 (natürliches Propan, GWP 3)</li>
                <li>✓ R32 (niedriges GWP)</li>
                <li>✓ F-Gase-frei verfügbar</li>
                <li>✓ Green iQ / Smart Grid Ready</li>
                <li>✓ PV-Integration möglich</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Anwendungsbereiche
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Neubau (KfW40/55)</li>
                <li>✓ Altbau & Modernisierung</li>
                <li>✓ Einfamilienhäuser</li>
                <li>✓ Mehrfamilienhäuser</li>
                <li>✓ Gewerbe & Industrie</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Service & Garantie
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ 5-10 Jahre Herstellergarantie</li>
                <li>✓ Original-Ersatzteile</li>
                <li>✓ Regelmäßige Wartung</li>
                <li>✓ 24/7 Notdienst</li>
                <li>✓ Fachpartner-Zertifizierung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 text-slate-900 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcher Hersteller passt zu Ihnen?
          </h2>
          <p className="text-xl mb-8 text-slate-700 max-w-2xl mx-auto">
            Lassen Sie sich kostenlos beraten! Wir finden gemeinsam die perfekte
            Wärmepumpe von einem unserer Premium-Partner für Ihr Projekt.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Jetzt kostenlose Beratung anfragen
          </Link>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "HeizCenter Premium-Partner",
            description: "Führende Hersteller von Wärmepumpen und Heizungssystemen",
            itemListElement: partners.map((partner, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Brand",
                name: partner.name,
                description: partner.description,
                url: `https://www.heizcenter.de/partner/${partner.slug}`,
              },
            })),
          }),
        }}
      />
    </>
  );
}
