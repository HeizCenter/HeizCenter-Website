import { Metadata } from "next";
import Image from "next/image";
import { Phone, Clock, AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "24/7 Heizungsnotdienst | HeizCenter Bobingen & Gutenzell-Hürbel",
  description:
    "Heizungsnotdienst rund um die Uhr. Schnelle Hilfe bei Heizungsausfall, Rohrbruch und anderen Notfällen. ☎ +49 8234 96659 00-999",
  keywords: ["Notdienst", "Heizungsnotdienst", "24/7", "Bobingen", "Gutenzell-Hürbel", "Augsburg", "Ulm", "Memmingen"],
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
            <AlertCircle className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Heizungsnotdienst
            </h1>
            <p className="text-2xl mb-8">
              Schnelle Hilfe bei Heizungsausfall, Rohrbruch und anderen Notfällen
            </p>
            <div className="bg-white text-[#0F5B78] inline-block px-8 py-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <Phone className="h-10 w-10" />
                <div className="text-left">
                  <div className="text-sm font-semibold">Notruf 24/7</div>
                  <a href="tel:+4982349665900999" className="text-3xl font-bold hover:underline">
                    +49 8234 96659 00-999
                  </a>
                </div>
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
              <Card>
                <CardContent className="p-8">
                  <Clock className="h-12 w-12 text-[#0F5B78] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Verfügbarkeit</h3>
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

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Service-Gebiete</h3>
                  <p className="mb-4 text-slate-600">
                    Unser 24/7-Notdienst ist verfügbar für:
                  </p>
                  <ul className="space-y-2">
                    <li>• Augsburg und Umgebung</li>
                    <li>• Ulm und Neu-Ulm</li>
                    <li>• Memmingen und Allgäu</li>
                    <li>• Landkreis Aichach-Friedberg</li>
                    <li>• Landkreis Donau-Ries</li>
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
          <h2 className="text-3xl font-bold mb-6">Notfall? Wir sind für Sie da!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rufen Sie uns jetzt an - unser Notdienst-Team ist rund um die Uhr für Sie erreichbar.
          </p>
          <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 text-2xl px-12 py-8 font-semibold">
            <a href="tel:+4982349665900999">
              <Phone className="mr-3 h-8 w-8" />
              +49 8234 96659 00-999
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
