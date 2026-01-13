import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, AlertCircle, Check, ShieldCheck, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "24/7 Heizungsnotdienst für Wartungskunden | HeizCenter",
  description:
    "24/7 Heizungsnotdienst exklusiv für Kunden mit Wartungsvertrag. Schnelle Hilfe bei Heizungsausfall, Rohrbruch und Notfällen. ☎ +49 8234 9665900",
  keywords: ["Notdienst", "Heizungsnotdienst", "24/7", "Wartungsvertrag", "Bobingen", "Gutenzell-Hürbel", "Augsburg"],
  alternates: {
    canonical: getCanonicalUrl("/notdienst"),
  },
};

export default function NotdienstPage() {
  return (
    <>
      {/* Hero / Emergency Header */}
      <section className="relative bg-gradient-to-br from-[#0F5B78] to-[#0D4A5E] text-white py-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/notdienst.png"
            alt="Heizungsnotdienst"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0F5B78]/60"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ShieldCheck className="h-16 w-16" />
              <AlertCircle className="h-20 w-20" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              24/7 Notdienst
            </h1>
            <p className="text-xl md:text-2xl mb-2 font-semibold text-[#FFCA28]">
              Ausschließlich für Wartungskunden
            </p>
            <p className="text-lg mb-8 text-white/80">
              Schnelle Hilfe bei Heizungsausfall, Rohrbruch und anderen Notfällen
            </p>
            <div className="bg-white text-[#0F5B78] inline-block px-8 py-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <Phone className="h-10 w-10" />
                <div className="text-left">
                  <div className="text-sm font-semibold">24/7 Notdienst (nur für Wartungskunden)</div>
                  <a href="tel:+4982349665900" className="text-3xl font-bold hover:underline">
                    +49 8234 9665900
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm mt-4 text-white/70">
              Bei lebensbedrohlichen Situationen (z.B. Gasgeruch, Wasserrohrbruch) rufen Sie bitte sofort an.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice - Wartungsvertrag Required */}
      <section className="bg-amber-50 border-y-4 border-amber-400 py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-amber-400 p-4 rounded-full">
                  <FileText className="h-8 w-8 text-amber-900" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900 mb-3">
                  Wichtiger Hinweis zum Notdienst
                </h2>
                <p className="text-lg text-amber-800 mb-4">
                  Unser 24/7-Notdienst steht <strong>nur Kunden mit einem gültigen Wartungsvertrag</strong> zur Verfügung.
                  Ohne bestehenden Wartungsvertrag können wir keinen Notdiensteinsatz übernehmen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#0F5B78] hover:bg-[#0D4A5E] text-white">
                    <Link href="/wartungsvertrag">
                      <ShieldCheck className="mr-2 h-5 w-5" />
                      Wartungsvertrag abschließen
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100">
                    <Link href="/kontakt">
                      Kontakt aufnehmen
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-amber-700 mt-4">
                  Kein Anspruch auf Notdiensteinsatz ohne Wartungsvertrag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wann Sie uns rufen sollten</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Heizungsausfall im Winter",
              "Rohrbruch oder Wassersch aden",
              "Gasgeruch",
              "Heizung macht laute Geräusche",
              "Wasser läuft nicht ab",
              "Keine Warmwasserversorgung",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#0F5B78]/5 p-4 rounded-lg border border-[#0F5B78]/20">
                <AlertCircle className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Times */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#0F5B78]/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-10 w-10 text-[#0F5B78]" />
                    <ShieldCheck className="h-8 w-8 text-[#FFCA28]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Verfügbarkeit</h3>
                  <p className="text-sm text-slate-600 mb-4">Für Kunden mit Wartungsvertrag</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>24 Stunden am Tag</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>7 Tage die Woche</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Auch an Feiertagen</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Schnelle Reaktionszeit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#0F5B78]/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-10 w-10 text-[#0F5B78]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Service-Gebiete</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Unser 24/7-Notdienst ist verfügbar für:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Augsburg und Umgebung</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Ulm und Neu-Ulm</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Memmingen und Allgäu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Landkreis Aichach-Friedberg</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Landkreis Donau-Ries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Kosten & Abrechnung</h2>
          <div className="bg-[#0F5B78]/5 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Transparente Preise</h3>
            <p className="mb-4">
              Notdiensteinsätze werden nach Aufwand berechnet. Die Preise setzen sich zusammen aus:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Anfahrtspauschale (abhängig von Entfernung und Uhrzeit)</li>
              <li>• Arbeitszeit (regulär / erhöht je nach Uhrzeit)</li>
              <li>• Material und Ersatzteile (nach Bedarf)</li>
            </ul>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
              <p className="font-semibold">Zuschläge außerhalb der Geschäftszeiten:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Werktags 17-22 Uhr: +50%</li>
                <li>• Werktags 22-6 Uhr: +100%</li>
                <li>• Samstag: +50%</li>
                <li>• Sonntag & Feiertage: +100%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F5B78] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Notfall? Wir sind für Sie da!</h2>
          <p className="text-lg mb-2 text-[#FFCA28] font-semibold">
            24/7 Notdienst (nur für Wartungskunden)
          </p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Rufen Sie uns jetzt an - unser Notdienst-Team ist rund um die Uhr für Sie erreichbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 text-xl px-10 py-6 font-semibold">
              <a href="tel:+4982349665900">
                <Phone className="mr-3 h-6 w-6" />
                +49 8234 9665900
              </a>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0F5B78] text-lg px-8 py-6">
              <Link href="/wartungsvertrag">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Wartungsvertrag abschließen
              </Link>
            </Button>
          </div>
          <p className="text-xs text-white/60 mt-6">
            Kein Anspruch auf Notdiensteinsatz ohne Wartungsvertrag.
          </p>
        </div>
      </section>
    </>
  );
}
