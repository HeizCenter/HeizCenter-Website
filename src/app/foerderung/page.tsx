import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, FileText, CheckCircle, Info, ExternalLink, Scale } from "lucide-react";
import Link from "next/link";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Förderung & Zuschüsse für Wärmepumpen & Heizung 2025 | HeizCenter",
  description:
    "Informationen zu BEG-Förderung, KfW-Zuschüssen und anderen Förderprogrammen für Wärmepumpen, Heizungsmodernisierung und Badsanierung. Bis zu 70% Förderung möglich.",
  keywords: ["BEG Förderung", "KfW", "Zuschuss", "Wärmepumpe", "Heizungsförderung", "BAFA", "§ 35c EStG"],
  alternates: {
    canonical: getCanonicalUrl("/foerderung"),
  },
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

      {/* BEG Förderung - Heizungstausch */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">BEG - Bundesförderung für effiziente Gebäude</h2>
          <p className="text-lg text-slate-700 mb-8">
            Die BEG ist das wichtigste Förderprogramm für den Heizungstausch und energetische
            Sanierungen. Sie erhalten einen direkten Zuschuss auf die Investitionskosten.
          </p>

          {/* KfW Heizungsförderung */}
          <h3 className="text-2xl font-bold mb-6">Heizungsförderung (KfW)</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-[#0F5B78]">
              <CardHeader className="bg-[#0F5B78]/5">
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-[#0F5B78] text-white text-xs px-2 py-1 rounded">KfW 458</span>
                  Privatpersonen
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">bis 70%</div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>✓ Grundförderung: 30%</li>
                  <li>✓ Klimageschwindigkeitsbonus: +20%</li>
                  <li>✓ Einkommensbonus: +30%</li>
                  <li className="font-semibold">✓ Max. 70% Gesamtförderung</li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  Förderfähige Kosten bis 30.000€ (1. Wohneinheit)
                </p>
                <a
                  href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-(458)/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#0F5B78] hover:underline"
                >
                  KfW 458 Details <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-slate-50">
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-slate-600 text-white text-xs px-2 py-1 rounded">KfW 459</span>
                  Unternehmen (Wohngebäude)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">bis 35%</div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>✓ Grundförderung: 30%</li>
                  <li>✓ Effizienzbonus: +5%</li>
                  <li>✓ Für Vermieter & WEG</li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  Förderfähige Kosten bis 30.000€ pro Wohneinheit
                </p>
                <a
                  href="https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-und-Umwelt/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Unternehmen-Wohngeb%C3%A4ude-(459)/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#0F5B78] hover:underline"
                >
                  KfW 459 Details <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-slate-50">
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-slate-600 text-white text-xs px-2 py-1 rounded">KfW 522</span>
                  Nichtwohngebäude
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">bis 35%</div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>✓ Grundförderung: 30%</li>
                  <li>✓ Effizienzbonus: +5%</li>
                  <li>✓ Gewerbe, Industrie, Kommune</li>
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  Für Nichtwohngebäude aller Art
                </p>
                <a
                  href="https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-und-Umwelt/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Unternehmen-Nichtwohngeb%C3%A4ude-(522)/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#0F5B78] hover:underline"
                >
                  KfW 522 Details <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* BAFA Einzelmaßnahmen */}
          <h3 className="text-2xl font-bold mb-6">Einzelmaßnahmen (BAFA)</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Anlagentechnik (außer Heizung)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">15%</div>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Lüftungsanlagen mit Wärmerückgewinnung</li>
                  <li>✓ Solarthermische Anlagen</li>
                  <li>✓ Gebäudeautomation</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  Mindestinvestition: 300€ (brutto)
                </p>
                <a
                  href="https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/Sanierung_Wohngebaeude/Anlagentechnik/anlagentechnik_node.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#0F5B78] hover:underline"
                >
                  BAFA Anlagentechnik <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heizungsoptimierung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#0F5B78] mb-4">15%</div>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Hydraulischer Abgleich</li>
                  <li>✓ Austausch Heizungspumpe</li>
                  <li>✓ Dämmung Rohrleitungen</li>
                  <li>✓ Thermostatventile</li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  Emissionsminderung Biomasse: bis 50%
                </p>
                <a
                  href="https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/Sanierung_Wohngebaeude/Heizungsoptimierung/heizungsoptimierung_node.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[#0F5B78] hover:underline"
                >
                  BAFA Heizungsoptimierung <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Wichtig zu wissen */}
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Info className="h-6 w-6 text-[#0F5B78]" />
              Wichtig zu wissen
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Antrag muss <strong>vor</strong> Maßnahmenbeginn gestellt werden</li>
              <li>• Nur zertifizierte Fachbetriebe (wie HeizCenter) sind berechtigt</li>
              <li>• Auszahlung nach Fertigstellung und Verwendungsnachweis</li>
              <li>• Kombination mit KfW-Kredit möglich</li>
              <li>• Einkommensbonus bei zu versteuerndem Haushaltseinkommen bis 40.000€/Jahr</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Steuerliche Förderung */}
      <section className="bg-green-50 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Scale className="h-12 w-12 text-green-700 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Steuerliche Förderung nach § 35c EStG</h2>
                <p className="text-lg text-slate-700">
                  Alternative zur direkten Förderung: Steuerermäßigung für energetische Maßnahmen
                </p>
              </div>
            </div>

            <Card className="border-2 border-green-300">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-green-700 mb-4">20% Steuerbonus</div>
                    <p className="text-slate-600 mb-4">
                      Verteilt über 3 Jahre direkt von der Steuerschuld abziehbar:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Jahr 1</span>
                        <span>7% der Aufwendungen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Jahr 2</span>
                        <span>7% der Aufwendungen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Jahr 3</span>
                        <span>6% der Aufwendungen</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-6 rounded-lg">
                    <h4 className="font-bold mb-3">Voraussetzungen:</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li>✓ Selbstgenutztes Wohneigentum</li>
                      <li>✓ Gebäude älter als 10 Jahre</li>
                      <li>✓ Durchführung durch Fachunternehmen</li>
                      <li>✓ Max. Steuerermäßigung: 40.000€</li>
                      <li>✓ Nicht kombinierbar mit BEG-Förderung</li>
                    </ul>
                    <a
                      href="https://www.gesetze-im-internet.de/estg/__35c.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-green-800 hover:underline font-medium"
                    >
                      § 35c EStG Gesetzestext <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="mt-4 text-sm text-slate-600">
              <strong>Tipp:</strong> Die steuerliche Förderung ist besonders interessant, wenn Sie keinen Anspruch auf den
              Einkommensbonus haben oder die Förderung flexibel über 3 Jahre verteilen möchten.
            </p>
          </div>
        </div>
      </section>

      {/* KfW Kredite */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">KfW-Kreditprogramme</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-[#0F5B78] text-white text-xs px-2 py-1 rounded">KfW 261</span>
                    Wohngebäude Kredit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Zinsgünstiger Kredit für Sanierung zum Effizienzhaus
                  </p>
                  <ul className="space-y-2">
                    <li>• Bis 150.000€ Kreditbetrag pro Wohneinheit</li>
                    <li>• Tilgungszuschuss: 5% bis 45%</li>
                    <li>• Kombinierbar mit BEG-Zuschuss</li>
                  </ul>
                  <a
                    href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Bundesf%C3%B6rderung-f%C3%BCr-effiziente-Geb%C3%A4ude-Wohngeb%C3%A4ude-Kredit-(261)/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-[#0F5B78] hover:underline"
                  >
                    KfW 261 Details <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-[#0F5B78] text-white text-xs px-2 py-1 rounded">KfW 297/298</span>
                    Klimafreundlicher Neubau
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Kredit für den klimafreundlichen Neubau von Wohngebäuden
                  </p>
                  <ul className="space-y-2">
                    <li>• Bis 150.000€ Kreditbetrag pro Wohneinheit</li>
                    <li>• Zinsvergünstigung für Effizienzhaus 40</li>
                    <li>• Nachhaltigkeitsklasse mit QNG-Siegel</li>
                  </ul>
                  <a
                    href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Neubau/F%C3%B6rderprodukte/Klimafreundlicher-Neubau-Wohngeb%C3%A4ude-(297-298)/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-[#0F5B78] hover:underline"
                  >
                    KfW 297/298 Details <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
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

      {/* Quellen & Disclaimer */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Offizielle Quellen */}
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="font-bold mb-4 text-lg">Offizielle Quellen & weiterführende Informationen</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Förderprogramme:</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="https://www.kfw.de/inlandsfoerderung/Heizungsf%C3%B6rderung/" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline inline-flex items-center gap-1">
                      KfW Heizungsförderung (458, 459, 522) <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/effiziente_gebaeude_node.html" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline inline-flex items-center gap-1">
                      BAFA BEG Einzelmaßnahmen <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Bundesf%C3%B6rderung-f%C3%BCr-effiziente-Geb%C3%A4ude-Wohngeb%C3%A4ude-Kredit-(261)/" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline inline-flex items-center gap-1">
                      KfW 261 Wohngebäude Kredit <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Rechtsgrundlagen:</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="https://www.gesetze-im-internet.de/estg/__35c.html" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline inline-flex items-center gap-1">
                      § 35c EStG - Steuerermäßigung <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bmwk.de/Redaktion/DE/Dossier/energiewende.html" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline inline-flex items-center gap-1">
                      BMWK Energiewende <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rechtlicher Hinweis */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Rechtlicher Hinweis</h3>
            <p className="text-slate-700 text-sm">
              Die Informationen auf dieser Seite dienen der allgemeinen Orientierung und ersetzen keine
              individuelle Beratung. Förderprogramme, Förderhöhen und Fördervoraussetzungen können sich
              jederzeit ändern. Alle Angaben ohne Gewähr. Für verbindliche und aktuelle Informationen
              wenden Sie sich bitte an die zuständigen Stellen:{" "}
              <a href="https://www.kfw.de" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                KfW
              </a>,{" "}
              <a href="https://www.bafa.de" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                BAFA
              </a>{" "}
              oder Ihren Steuerberater.
            </p>
            <p className="text-slate-600 text-xs mt-3">
              Stand der Informationen: Januar 2025. Rechtsgrundlagen: BEG-Förderrichtlinie, § 35c EStG.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
