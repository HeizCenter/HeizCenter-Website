import { Metadata } from "next";
import Image from "next/image";
import { PriceCalculator } from "@/components/calculator/price-calculator";
import { Calculator, CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Wärmepumpen-Kostenrechner | HeizCenter",
  description: "Berechnen Sie die Kosten Ihrer neuen Wärmepumpe inkl. Förderung. Kostenloser Online-Rechner mit detaillierter Aufschlüsselung.",
  keywords: ["Wärmepumpe Kosten", "Kostenrechner", "BEG Förderung", "Heizung Rechner"],
};

export default function RechnerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white py-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Heizung_Modernisierung.webp"
            alt="Heizung Modernisierung"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0F5B78]/60"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wärmepumpen-Kostenrechner
            </h1>
            <p className="text-xl text-white/90">
              Berechnen Sie in wenigen Schritten die Kosten Ihrer neuen Wärmepumpe inkl. staatlicher Förderung
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <PriceCalculator />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Was beinhaltet die Berechnung?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <CheckCircle className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Enthalten im Preis</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1"></span>
                    <span>Wärmepumpen-Gerät (inkl. Außen- und Inneneinheit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1"></span>
                    <span>Installation durch zertifizierte Fachbetriebe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1"></span>
                    <span>Hydraulischer Abgleich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1"></span>
                    <span>Demontage und Entsorgung alter Heizung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1"></span>
                    <span>Inbetriebnahme und Einweisung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <Info className="h-10 w-10 text-[#0F5B78] mb-4" />
                <h3 className="text-xl font-bold mb-3">Zusätzliche Kosten möglich</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F5B78] mt-1">"</span>
                    <span>Erdarbeiten (bei Erdwärmepumpen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F5B78] mt-1">"</span>
                    <span>Zusätzliche Heizkörper oder Fußbodenheizung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F5B78] mt-1">"</span>
                    <span>Warmwasserspeicher (falls nicht vorhanden)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F5B78] mt-1">"</span>
                    <span>Elektroinstallation (Starkstromanschluss)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0F5B78] mt-1">"</span>
                    <span>Dämmungsmaßnahmen bei Altbauten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Förderung Info */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-900">
              BEG-Förderung: Bis zu 70% Zuschuss möglich
            </h2>
            <p className="text-green-800 mb-6">
              Die Bundesförderung für effiziente Gebäude (BEG) unterstützt Sie beim Umstieg auf eine Wärmepumpe mit attraktiven Zuschüssen:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-sm text-slate-600">Grundförderung für alle Wärmepumpen</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">+20%</div>
                <div className="text-sm text-slate-600">Geschwindigkeitsbonus (bis Ende 2028)</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">+30%</div>
                <div className="text-sm text-slate-600">Einkommensbonus (bis 40.000¬/Jahr)</div>
              </div>
            </div>
            <p className="text-sm text-green-700">
              <strong>Hinweis:</strong> Der Rechner berücksichtigt die Standard-BEG-Förderung von 50% (30% Grundförderung + 20% Geschwindigkeitsbonus).
              Mit Einkommensbonus sind bis zu 70% möglich. Wir beraten Sie gerne zu allen Fördermöglichkeiten.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F5B78] text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Persönliche Beratung gewünscht?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Unsere Experten erstellen Ihnen ein individuelles Angebot basierend auf Ihrer Immobilie und beraten Sie zu allen Fördermöglichkeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt?tab=quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFCA28] text-slate-900 font-semibold rounded-lg hover:bg-[#F5B800] transition-colors"
              >
                Genaues Angebot anfragen
              </a>
              <a
                href="tel:+4982349665900"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FFCA28] text-[#FFCA28] font-semibold rounded-lg hover:bg-[#FFCA28] hover:text-slate-900 transition-colors"
              >
                +49 8234 9665900
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-slate-500 text-center">
            <strong>Hinweis:</strong> Die berechneten Kosten sind Richtwerte und können je nach individuellen Gegebenheiten variieren.
            Für ein verbindliches Angebot kontaktieren Sie uns bitte direkt. Förderinformationen ohne Gewähr,
            bitte prüfen Sie die aktuellen Förderbedingungen bei der KfW.
          </p>
        </div>
      </section>
    </>
  );
}
