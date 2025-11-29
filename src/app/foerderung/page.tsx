import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, FileText, CheckCircle, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Förderung & Zuschüsse für Wärmepumpen & Heizung 2025 | HeizCenter",
  description:
    "Informationen zu BEG-Förderung, KfW-Zuschüssen und anderen Förderprogrammen für Wärmepumpen, Heizungsmodernisierung und Badsanierung. Bis zu 70% Förderung möglich.",
  keywords: ["BEG Förderung", "KfW", "Zuschuss", "Wärmepumpe", "Heizungsförderung", "BAFA"],
};

export default function FoerderungPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0F5B78]/5 to-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Euro className="h-20 w-20 mx-auto mb-6 text-[#0F5B78]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Förderung & Zuschüsse 2025
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Bis zu 70% Zuschuss für Ihre neue Heizung. Wir helfen bei der Antragstellung.
            </p>
          </div>
        </div>
      </section>

      {/* BEG Förderung */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">BEG - Bundesförderung für effiziente Gebäude</h2>
          <p className="text-lg text-slate-700 mb-8">
            Die BEG ist das wichtigste Förderprogramm für den Heizungstausch und energetische
            Sanierungen. Sie erhalten einen direkten Zuschuss auf die Investitionskosten.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Wärmepumpe</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">bis 70%</div>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Grundförderung: 30%</li>
                  <li>✓ Geschwindigkeitsbonus: +20%</li>
                  <li>✓ Einkommensbonus: +30%</li>
                  <li>✓ Max. 70% Gesamtförderung</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  Förderfähige Kosten bis 30.000€
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heizungsoptimierung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">bis 20%</div>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Hydraulischer Abgleich</li>
                  <li>✓ Heizungspumpe</li>
                  <li>✓ Dämmung Rohrleitungen</li>
                  <li>✓ Thermostatventile</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  Max. 60.000€ förderfähige Kosten
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Info className="h-6 w-6 text-[#0F5B78]" />
              Wichtig zu wissen
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Antrag muss <strong>vor</strong> Maßnahmenbeginn gestellt werden</li>
              <li>• Nur zertifizierte Fachbetriebe (wie HeizCenter) berechtigt</li>
              <li>• Auszahlung nach Fertigstellung und Verwendungsnachweis</li>
              <li>• Kombination mit KfW-Kredit möglich</li>
            </ul>
          </div>
        </div>
      </section>

      {/* KfW Programs */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">KfW-Förderprogramme</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>KfW 261 - Wohngebäude Kredit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Zinsgünstiger Kredit für Sanierung zum Effizienzhaus oder Neubau
                  </p>
                  <ul className="space-y-2">
                    <li>• Bis 150.000€ Kreditbetrag</li>
                    <li>• Tilgungszuschuss bis 45%</li>
                    <li>• Kombinierbar mit BEG</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>KfW 455-B - Barrierefreies Bad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Zuschuss für altersgerechten Umbau von Bädern
                  </p>
                  <ul className="space-y-2">
                    <li>• Bis 6.250€ Zuschuss pro Wohnung</li>
                    <li>• Bodengleiche Dusche, unterfahrbarer Waschtisch, etc.</li>
                    <li>• Zusätzlich Pflegekassenzuschuss möglich (bis 4.000€)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">So beantragen Sie Ihre Förderung</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Beratung", desc: "Wir beraten Sie kostenlos zu Fördermöglichkeiten" },
              { step: "2", title: "Antrag", desc: "Antragstellung vor Maßnahmenbeginn (wir helfen Ihnen)" },
              { step: "3", title: "Umsetzung", desc: "Installation durch zertifizierten Fachbetrieb" },
              { step: "4", title: "Auszahlung", desc: "Nach Verwendungsnachweis erfolgt die Auszahlung" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#0F5B78] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service */}
      <section className="bg-[#0F5B78] text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Wir übernehmen die Antragstellung</h2>
            <p className="text-xl mb-8">
              Als zertifizierter Fachbetrieb unterstützen wir Sie bei allen Schritten der
              Förderantragstellung - von der Beratung bis zur Auszahlung.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                "Kostenlose Förderberatung",
                "Hilfe bei Antragstellung",
                "Alle Unterlagen für Nachweis",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
              <Link href={`/kontakt?tab=contact&subject=${encodeURIComponent("Förderberatung BEG/KfW")}&message=${encodeURIComponent("Ich interessiere mich für eine Förderberatung zu BEG, KfW und anderen Förderprogrammen. Bitte kontaktieren Sie mich für ein unverbindliches Beratungsgespräch.")}`}>
                <FileText className="mr-2 h-5 w-5" />
                Jetzt Förderberatung anfragen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Hinweis zur Aktualität</h3>
            <p className="text-slate-700">
              Förderprogramme und -höhen können sich ändern. Die Angaben auf dieser Seite sind ohne
              Gewähr. Aktuelle Informationen erhalten Sie bei:{" "}
              <a href="https://www.bafa.de" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                BAFA
              </a>{" "}
              und{" "}
              <a href="https://www.kfw.de" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                KfW
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
