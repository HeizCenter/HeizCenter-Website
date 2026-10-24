import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, Star } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";
import { FOERDER_TEXT } from "@/lib/config/foerderung";

// Herstellerangaben: docs/partner-texte-audit.md, Abschnitt 1 (Stand 24.10.2026).
// Testsieger nur mit Modell, Ausgabe, Note und www.test.de.
// WIEDERVORLAGE ca. 03/2028: Viessmann-Testsieger (test 10/2025) entfernen – Werbefrist i. d. R. 2,5 Jahre ab 23.09.2025.
// WIEDERVORLAGE Ende 01/2027: Buderus-Testsieger (test 8/2024) entfernen – Werbefrist i. d. R. 2,5 Jahre.
// „Partner“, „zertifiziert“ und Garantiezusagen von HeizCenter erst nach Bestätigung durch Andrej.

export const metadata: Metadata = {
  title: "Wärmepumpen-Hersteller: Viessmann, Vaillant, Buderus & mehr | HeizCenter",
  description:
    "Wärmepumpen von Viessmann, Vaillant, Buderus, Wolf, Bosch, Daikin und ZEWOTHERM – Beratung, Einbau und Wartung durch HeizCenter in der Region Augsburg, Ulm und Memmingen.",
  keywords: ["Hersteller", "Wärmepumpe", "Viessmann", "Vaillant", "Buderus", "Wolf", "Bosch", "Daikin", "ZEWOTHERM", "LAMBDA Wärmepumpe", "LAMBDA EUREKA"],
  alternates: {
    canonical: getCanonicalUrl("/partner"),
  },
};

type Partner = {
  name: string;
  slug: string;
  description: string;
  badge: string;
  highlights: string[];
};

const partners: Partner[] = [
  {
    name: "Viessmann",
    slug: "viessmann",
    description:
      "Vitocal-Wärmepumpen mit R290: 250-A und 150-A bis 70 °C, die neue 200-A ie bis 75 °C Vorlauf. Die Vitocal 250-A (Typ A10) war Testsieger bei Stiftung Warentest – test 10/2025, GUT (2,0), www.test.de.",
    badge: "Vitocal",
    highlights: ["Natürliches Kältemittel R290", "Bis 75 °C (Vitocal 200-A ie)", "Effizienzklasse bis A+++"],
  },
  {
    name: "Vaillant",
    slug: "vaillant",
    description:
      "Seit 1874. Die aroTHERM plus mit R290 liefert bis 75 °C Vorlauf; dazu aroTHERM pro, Split plus und die Erdwärmepumpe geoCOMPACT exclusive.",
    badge: "Seit 1874",
    highlights: ["Natürliches Kältemittel R290", "aroTHERM plus bis 75 °C", "SCOP bis 5,1 (35 °C)"],
  },
  {
    name: "Buderus",
    slug: "buderus",
    description:
      "Gegründet 1731, seit 2003 Teil der Bosch-Gruppe. Unerhört leise Logatherm-Wärmepumpen mit R290. Die Logatherm WLW186i-10 AR E war Testsieger bei Stiftung Warentest – test 8/2024, GUT (2,3), www.test.de.",
    badge: "Seit 1731",
    highlights: ["Unerhört leise (SILENT plus)", "Bis 75 °C (WLW186i AR)", "Bosch-Gruppe"],
  },
  {
    name: "Wolf",
    slug: "wolf",
    description:
      "CHA-Monoblock, laut WOLF entwickelt und gefertigt in Mainburg (Bayern): R290, bis 70 °C Vorlauf ohne Heizstab, Effizienzklasse A+++ bei 35 °C.",
    badge: "Made in Bavaria",
    highlights: ["Natürliches Kältemittel R290", "Bis 70 °C ohne Heizstab", "9-kW-Heizstab für Spitzenlasten (CHA-07/10)"],
  },
  {
    name: "Bosch",
    slug: "bosch",
    description:
      "Teil der Bosch-Gruppe. Compress 3800i bis 8800i AW mit R290 – bis 75 °C Vorlauf mit der 6800i und 8800i AW, Bedienung per HomeCom-Easy-App.",
    badge: "Seit 1886",
    highlights: ["Natürliches Kältemittel R290", "Bis 75 °C (6800i/8800i AW)", "SCOP bis 5,1 (3800i AW, 35 °C)"],
  },
  {
    name: "Daikin",
    slug: "daikin",
    description:
      "Gegründet 1924 in Osaka. Altherma-Wärmepumpen für Heizen und Kühlen – die neue Altherma 4 H mit R290 liefert bis 75 °C Vorlauf. Dazu Split-Klimageräte.",
    badge: "Seit 1924",
    highlights: ["Heizen + Kühlen", "Bis 75 °C (Altherma 4 H)", "Effizienzklasse bis A+++"],
  },
  {
    name: "ZEWOTHERM",
    slug: "zewotherm",
    description:
      "Wärmepumpe LAMBDA EUREKA (Modelle EU10L, EU13L, EU15L, EU20L und EU35L) mit patentiertem 3K-Prozess – entwickelt von LAMBDA (Tirol), in Lizenz gefertigt von ZEWOTHERM in Remagen. Laut Hersteller SCOP bis 6,1 bei 35 °C, Vorlauf bis 70 °C ohne Heizstab.",
    badge: "3K-Prozess",
    highlights: ["SCOP bis 6,1 (35 °C)", "Bis 70 °C ohne Heizstab", "Natürliches Kältemittel R290"],
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
              Unsere Hersteller
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Aktuelle Wärmepumpen bekannter Hersteller – geplant, eingebaut und
              gewartet von HeizCenter. Welche Marke und welches Modell zu Ihrem
              Haus passen, entscheidet die Heizlastberechnung.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Sieben Hersteller zur Auswahl</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Planung mit Heizlastberechnung</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Wartungsvertrag mit 24/7-Notdienst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <section className="container py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-700">
            Hersteller, mit denen wir arbeiten
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

      {/* Testurteile, Garantie, Auswahl */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Testurteile, Garantie und die richtige Auswahl
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#0F5B78]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="font-bold mb-2">Testsieger mit Note</h3>
                <p className="text-sm text-slate-600">
                  Zwei Wärmepumpen dieser Hersteller waren Testsieger bei
                  Stiftung Warentest: Viessmann Vitocal 250-A, Typ A10 (test 10/2025, GUT
                  2,0) und Buderus Logatherm WLW186i-10 AR E (test 8/2024, GUT
                  2,3) – www.test.de. Die Urteile gelten nur für die genannten Modelle.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Herstellergarantie</h3>
                <p className="text-sm text-slate-600">
                  Je nach Marke 2 bis 6 Jahre, mit Zusatzpaketen teils länger –
                  fast immer mit Registrierung und jährlicher Wartung. Die
                  Bedingungen stehen auf der jeweiligen Herstellerseite; was für
                  Ihr Gerät gilt, klären wir im Angebot.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">Auswahl nach Heizlast</h3>
                <p className="text-sm text-slate-600">
                  Wir bauen Wärmepumpen mehrerer Hersteller ein. Welches Gerät
                  und welche Größe passen, entscheidet die Heizlastberechnung
                  für Ihr Haus – nicht der Katalog.
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
                <li>✓ Hochtemperatur-Wärmepumpen (bis 75 °C)</li>
                <li>✓ Betrieb auch bei strengem Frost (je nach Modell bis −22 bis −28 °C)</li>
                <li>✓ Effizienzklasse bis A+++</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Kältemittel & Umwelt
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ R290 (Propan), Treibhauspotenzial nahe null</li>
                <li>✓ F-Gas-frei verfügbar: Wärmepumpen mit R290 gibt es bei allen sieben Herstellern</li>
                <li>Hinweis: R32 (GWP 675) ist in neuen Monoblöcken bis 50 kW und Luft-Wasser-Splits bis 12 kW ab 2027 grundsätzlich nicht mehr zulässig (EU-F-Gase-Verordnung 2024/573, Anhang IV)</li>
                <li>✓ Kopplung mit Photovoltaik möglich, Smart Grid je nach Modell</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Anwendungsbereiche
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Neubau</li>
                <li>✓ Altbau & Modernisierung</li>
                <li>✓ Ein- und Zweifamilienhäuser</li>
                <li>✓ Heizen und Kühlen (je nach Modell)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-[#0F5B78]">
                Service & Garantie
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Herstellergarantie nach den Bedingungen des Herstellers</li>
                <li>✓ Planung mit Heizlastberechnung</li>
                <li>✓ Regelmäßige Wartung, auf Wunsch mit Wartungsvertrag</li>
                <li>✓ 24/7-Notdienst für Wartungskunden</li>
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
          <p className="text-xl mb-4 text-slate-700 max-w-2xl mx-auto">
            Wir beraten Sie gern und finden mit Ihnen die passende Wärmepumpe
            für Ihr Haus – auf Grundlage einer Heizlastberechnung.
          </p>
          <p className="text-base mb-8 text-slate-600 max-w-2xl mx-auto">
            Was eine Wärmepumpe kostet, erklärt unser{" "}
            <Link href="/blog/waermepumpe-kosten-2026" className="text-[#0F5B78] font-medium hover:underline">
              Ratgeber „Wärmepumpe Kosten 2026“
            </Link>
            . Im bestehenden Wohngebäude gibt es bis zu {FOERDER_TEXT.maxStandard} der förderfähigen Kosten als Zuschuss; {FOERDER_TEXT.maxBedingung} – mehr auf unserer{" "}
            <Link href="/foerderung" className="text-[#0F5B78] font-medium hover:underline">
              Förderseite
            </Link>
            .
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Beratung anfragen
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
            name: "Wärmepumpen-Hersteller bei HeizCenter",
            description: "Hersteller, deren Wärmepumpen HeizCenter berät, einbaut und wartet",
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
