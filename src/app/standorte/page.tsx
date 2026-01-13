import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Building2 } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Standorte - HeizCenter Bayern | Wärmepumpe, Heizung, Sanitär",
  description:
    "HeizCenter Standorte in Bayern: Bobingen, Klosterlechfeld und Gutenzell-Hürbel. Wir betreuen Städte und Gemeinden in Schwaben und Allgäu. Kostenlose Beratung vor Ort.",
  keywords: [
    "HeizCenter Standorte",
    "Wärmepumpe Bayern",
    "Heizung Schwaben",
    "Sanitär Allgäu",
    "Bobingen",
    "Klosterlechfeld",
    "Gutenzell-Hürbel",
  ],
  alternates: {
    canonical: getCanonicalUrl("/standorte"),
  },
};

interface Location {
  name: string;
  href: string;
  region: string;
  phone: string;
  isMain: boolean;
  isVisitorOffice?: boolean;
  subLocations?: string[];
}

const locations: Location[] = [
  {
    name: "Bobingen",
    href: "/standorte/bobingen",
    region: "Raum Augsburg",
    phone: "+49 8234 9665900",
    isMain: true,
    subLocations: [
      "Augsburg",
      "Königsbrunn",
      "Neusäß",
      "Friedberg",
      "Stadtbergen",
      "Gersthofen",
      "Aichach",
    ],
  },
  {
    name: "Klosterlechfeld",
    href: "/standorte/klosterlechfeld",
    region: "Raum Landsberg am Lech",
    phone: "+49 8234 9665900",
    isMain: true,
    isVisitorOffice: true,
    subLocations: [
      "Landsberg am Lech",
      "Schwabmünchen",
      "Kaufering",
      "Buchloe",
      "Untermeitingen",
    ],
  },
  {
    name: "Gutenzell-Hürbel",
    href: "/standorte/gutenzell-huerbel",
    region: "Raum Ulm / Memmingen",
    phone: "+49 8234 9665900",
    isMain: true,
    subLocations: [
      "Ulm",
      "Neu-Ulm",
      "Memmingen",
      "Blaustein",
      "Laupheim",
      "Günzburg",
      "Krumbach",
      "Bad Wörishofen",
      "Mindelheim",
      "Kaufbeuren",
    ],
  },
];

const allSubLocations = [
  // Bobingen Region (Raum Augsburg)
  { name: "Augsburg", href: "/standorte/augsburg", mainLocation: "Bobingen" },
  { name: "Königsbrunn", href: "/standorte/koenigsbrunn", mainLocation: "Bobingen" },
  { name: "Neusäß", href: "/standorte/neusaess", mainLocation: "Bobingen" },
  { name: "Friedberg", href: "/standorte/friedberg", mainLocation: "Bobingen" },
  { name: "Stadtbergen", href: "/standorte/stadtbergen", mainLocation: "Bobingen" },
  { name: "Gersthofen", href: "/standorte/gersthofen", mainLocation: "Bobingen" },
  { name: "Aichach", href: "/standorte/aichach", mainLocation: "Bobingen" },
  // Klosterlechfeld Region (Raum Landsberg)
  { name: "Landsberg am Lech", href: "/standorte/landsberg", mainLocation: "Klosterlechfeld" },
  { name: "Schwabmünchen", href: "/standorte/schwabmuenchen", mainLocation: "Klosterlechfeld" },
  // Gutenzell-Hürbel Region (Raum Ulm/Memmingen)
  { name: "Ulm", href: "/standorte/ulm", mainLocation: "Gutenzell-Hürbel" },
  { name: "Neu-Ulm", href: "/standorte/neu-ulm", mainLocation: "Gutenzell-Hürbel" },
  { name: "Memmingen", href: "/standorte/memmingen", mainLocation: "Gutenzell-Hürbel" },
  { name: "Blaustein", href: "/standorte/blaustein", mainLocation: "Gutenzell-Hürbel" },
  { name: "Laupheim", href: "/standorte/laupheim", mainLocation: "Gutenzell-Hürbel" },
  { name: "Günzburg", href: "/standorte/guenzburg", mainLocation: "Gutenzell-Hürbel" },
  { name: "Krumbach", href: "/standorte/krumbach", mainLocation: "Gutenzell-Hürbel" },
  { name: "Erbach (Donau)", href: "/standorte/erbach", mainLocation: "Gutenzell-Hürbel" },
  { name: "Bad Wörishofen", href: "/standorte/bad-woerishofen", mainLocation: "Gutenzell-Hürbel" },
  { name: "Mindelheim", href: "/standorte/mindelheim", mainLocation: "Gutenzell-Hürbel" },
  { name: "Ottobeuren", href: "/standorte/ottobeuren", mainLocation: "Gutenzell-Hürbel" },
  { name: "Kaufbeuren", href: "/standorte/kaufbeuren", mainLocation: "Gutenzell-Hürbel" },
  { name: "Bad Wurzach", href: "/standorte/bad-wurzach", mainLocation: "Gutenzell-Hürbel" },
  { name: "Leutkirch", href: "/standorte/leutkirch", mainLocation: "Gutenzell-Hürbel" },
];

export default function StandortePage() {
  return (
    <>
      {/* Hero Section with Map */}
      <section className="relative min-h-[400px] flex items-center">
        {/* Background Map Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/HeizCenter_Karte.webp"
            alt="Karte der HeizCenter Servicegebiete in Bayern"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-[#0F5B78]/95"></div>

        {/* Content */}
        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Standorte in Bayern und Baden-Württemberg
            </h1>
            <p className="text-lg text-white/95 mb-6">
              HeizCenter betreut Sie an drei Hauptstandorten in Bobingen, Klosterlechfeld und Gutenzell-Hürbel
              sowie in über 20 weiteren Städten und Gemeinden in Schwaben und Allgäu. Schneller Service,
              kurze Anfahrtswege, lokale Expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>3 Hauptstandorte</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Notdienst</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Kostenlose Beratung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Locations */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Unsere Hauptstandorte
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">
                      {location.name}
                    </h3>
                    <p className="text-slate-600">{location.region}</p>
                    {location.isVisitorOffice && (
                      <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-[#FFCA28]/20 text-[#0F5B78] text-xs font-semibold rounded-full border border-[#FFCA28]/40">
                        <Building2 className="h-3.5 w-3.5" />
                        <span>Kundenempfang & Besucherbüro</span>
                      </div>
                    )}
                  </div>
                  <MapPin className="h-8 w-8 text-[#0F5B78]" />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                </div>

                {location.subLocations && location.subLocations.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 flex-grow">
                    <p className="text-sm text-slate-600 mb-2 font-medium">
                      Weitere Serviceorte:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.subLocations.map((sub) => (
                        <span
                          key={sub}
                          className="text-xs bg-[#0F5B78]/5 text-[#0F5B78] px-2 py-1 rounded"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <span className="text-[#0F5B78] font-medium group-hover:underline">
                    Mehr erfahren →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Unser Servicegebiet
          </h2>
          <p className="text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            Von unseren drei Hauptstandorten in Bobingen, Klosterlechfeld und Gutenzell-Hürbel erreichen wir Sie schnell in der gesamten Region Schwaben und Allgäu.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/HeizCenter_Karte.webp"
              alt="Karte der HeizCenter Servicegebiete in Bayern"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* All Sub-Locations */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Alle Serviceorte im Überblick
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allSubLocations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:border-[#0F5B78] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-[#0F5B78] transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Service von {location.mainLocation}
                      </p>
                    </div>
                    <MapPin className="h-5 w-5 text-slate-400 group-hover:text-[#0F5B78] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Info */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">
            Flächendeckende Betreuung in Schwaben und Allgäu
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Mit unseren drei Hauptstandorten in Bobingen, Klosterlechfeld und Gutenzell-Hürbel
            decken wir ein großes Gebiet in Schwaben und Allgäu ab. Kurze
            Anfahrtswege bedeuten für Sie schnelle Reaktionszeiten - besonders
            wichtig bei Heizungsausfällen im Winter oder dringenden
            Reparaturen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Ihre Vorteile bei HeizCenter
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-[#0F5B78] font-bold">✓</span>
              <span>
                <strong>Schneller Service:</strong> Durchschnittliche
                Anfahrtszeit von 15-30 Minuten in allen Servicegebieten
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0F5B78] font-bold">✓</span>
              <span>
                <strong>Lokale Expertise:</strong> Unsere Techniker kennen die
                Region und ihre Besonderheiten
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0F5B78] font-bold">✓</span>
              <span>
                <strong>24/7 Notdienst:</strong> Bei Heizungsausfällen sind wir
                rund um die Uhr für Sie da
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0F5B78] font-bold">✓</span>
              <span>
                <strong>Kostenlose Beratung:</strong> Wir beraten Sie vor Ort
                zu Wärmepumpen, Heizungsmodernisierung und Badsanierung
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0F5B78] font-bold">✓</span>
              <span>
                <strong>Festpreisgarantie:</strong> Sie wissen von Anfang an,
                was Ihr Projekt kostet
              </span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">
            Ihr Service in der Region
          </h3>
          <p className="text-slate-700 mb-4">
            Jeder unserer drei Hauptstandorte betreut mehrere Städte und
            Gemeinden in der Umgebung. So garantieren wir kurze Anfahrtswege
            und schnelle Reaktionszeiten. Unsere Techniker wohnen in der Region
            und kennen die lokalen Besonderheiten - von historischen
            Altstadtgebäuden über moderne Neubausiedlungen bis zu ländlichen
            Bauernhöfen.
          </p>
          <p className="text-slate-700 mb-6">
            Auch wenn Ihr Ort nicht explizit aufgeführt ist: Kontaktieren Sie
            uns! Wir betreuen auch viele weitere Gemeinden in Schwaben und
            Allgäu. Rufen Sie einfach bei dem Standort an, der Ihnen am
            nächsten liegt, und wir beraten Sie gerne.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Finden Sie Ihren HeizCenter Standort
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Wählen Sie den Standort in Ihrer Nähe und kontaktieren Sie uns
              für eine kostenlose Beratung vor Ort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="bg-white text-[#0F5B78] px-8 py-3 rounded-lg font-bold hover:bg-[#FFCA28] hover:text-slate-900 transition-colors"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
