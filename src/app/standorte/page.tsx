import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Standorte - HeizCenter Bayern | Wärmepumpe, Heizung, Sanitär",
  description:
    "HeizCenter Standorte in Bayern: Augsburg, Ulm und Memmingen. Wir betreuen über 30 Städte und Gemeinden in Schwaben und Allgäu. Kostenlose Beratung vor Ort.",
  keywords: [
    "HeizCenter Standorte",
    "Wärmepumpe Bayern",
    "Heizung Schwaben",
    "Sanitär Allgäu",
  ],
};

interface Location {
  name: string;
  href: string;
  region: string;
  phone: string;
  isMain: boolean;
  subLocations?: string[];
}

const locations: Location[] = [
  {
    name: "Augsburg",
    href: "/standorte/augsburg",
    region: "Schwaben",
    phone: "+49 821 123456",
    isMain: true,
    subLocations: [
      "Königsbrunn",
      "Neusäß",
      "Friedberg",
      "Stadtbergen",
      "Gersthofen",
    ],
  },
  {
    name: "Ulm",
    href: "/standorte/ulm",
    region: "Donau",
    phone: "+49 731 123456",
    isMain: true,
    subLocations: ["Neu-Ulm", "Blaustein", "Laupheim"],
  },
  {
    name: "Memmingen",
    href: "/standorte/memmingen",
    region: "Allgäu",
    phone: "+49 8331 123456",
    isMain: true,
    subLocations: ["Bad Wörishofen", "Mindelheim", "Ottobeuren"],
  },
];

const allSubLocations = [
  { name: "Königsbrunn", href: "/standorte/koenigsbrunn", mainLocation: "Augsburg" },
  { name: "Neusäß", href: "/standorte/neusaess", mainLocation: "Augsburg" },
  { name: "Friedberg", href: "/standorte/friedberg", mainLocation: "Augsburg" },
  { name: "Stadtbergen", href: "/standorte/stadtbergen", mainLocation: "Augsburg" },
  { name: "Gersthofen", href: "/standorte/gersthofen", mainLocation: "Augsburg" },
  { name: "Neu-Ulm", href: "/standorte/neu-ulm", mainLocation: "Ulm" },
  { name: "Blaustein", href: "/standorte/blaustein", mainLocation: "Ulm" },
  { name: "Laupheim", href: "/standorte/laupheim", mainLocation: "Ulm" },
  { name: "Bad Wörishofen", href: "/standorte/bad-woerishofen", mainLocation: "Memmingen" },
  { name: "Mindelheim", href: "/standorte/mindelheim", mainLocation: "Memmingen" },
  { name: "Ottobeuren", href: "/standorte/ottobeuren", mainLocation: "Memmingen" },
];

export default function StandortePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Standorte in Bayern
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              HeizCenter betreut Sie an drei Hauptstandorten in Schwaben und Allgäu
              sowie in über 30 weiteren Städten und Gemeinden. Schneller Service,
              kurze Anfahrtswege, lokale Expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>3 Hauptstandorte</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span>24/7 Notdienst</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
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
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {location.name}
                    </h3>
                    <p className="text-slate-600">{location.region}</p>
                  </div>
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                </div>

                {location.subLocations && location.subLocations.length > 0 && (
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-2 font-medium">
                      Weitere Serviceorte:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.subLocations.map((sub) => (
                        <span
                          key={sub}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Mehr erfahren →
                  </span>
                </div>
              </Link>
            ))}
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
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Service von {location.mainLocation}
                      </p>
                    </div>
                    <MapPin className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
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
            Mit unseren drei Hauptstandorten in Augsburg, Ulm und Memmingen
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
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Schneller Service:</strong> Durchschnittliche
                Anfahrtszeit von 15-30 Minuten in allen Servicegebieten
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Lokale Expertise:</strong> Unsere Techniker kennen die
                Region und ihre Besonderheiten
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>24/7 Notdienst:</strong> Bei Heizungsausfällen sind wir
                rund um die Uhr für Sie da
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Kostenlose Beratung:</strong> Wir beraten Sie vor Ort
                zu Wärmepumpen, Heizungsmodernisierung und Badsanierung
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Finden Sie Ihren HeizCenter Standort
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Wählen Sie den Standort in Ihrer Nähe und kontaktieren Sie uns
              für eine kostenlose Beratung vor Ort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
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
