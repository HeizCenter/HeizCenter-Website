import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns - HeizCenter | Ihr regionaler Experte für Wärmepumpen & Heizung",
  description:
    "Lernen Sie HeizCenter kennen. Seit über 20 Jahren Ihr Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Bobingen und Gutenzell-Hürbel.",
  keywords: ["HeizCenter", "Über uns", "Team", "Unternehmen", "Augsburg", "Wärmepumpen"],
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0F5B78]/5 to-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Über HeizCenter
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Seit über 20 Jahren Ihr verlässlicher Partner für moderne Heiztechnik,
              Sanitärinstallationen und Klimaanlagen in der Region Bobingen und Gutenzell-Hürbel.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Unsere Geschichte</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">
              HeizCenter wurde mit der Vision gegründet, modernes Heizen und Sanitär für jeden
              zugänglich zu machen. Was als kleiner Handwerksbetrieb in Augsburg begann, ist heute
              ein etabliertes Unternehmen mit über 50 Mitarbeitern und zwei Standorten in
              Süddeutschland.
            </p>
            <p className="text-lg mb-6">
              Unser Erfolg basiert auf drei Säulen: Fachkompetenz, Kundennähe und Innovation. Wir
              bilden unsere Mitarbeiter kontinuierlich weiter, investieren in modernste Technik
              und bleiben gleichzeitig Ihrem persönlichen Ansprechpartner vor Ort.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0F5B78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualität</h3>
                <p className="text-slate-600">
                  Höchste Handwerkskunst und zertifizierte Fachbetriebe für alle Gewerke
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0F5B78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Kundennähe</h3>
                <p className="text-slate-600">
                  Persönliche Beratung und schneller Service in Ihrer Region
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0F5B78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-slate-600">
                  Modernste Technik und zukunftsfähige Lösungen für nachhaltiges Heizen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0F5B78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team</h3>
                <p className="text-slate-600">
                  Über 50 qualifizierte Mitarbeiter mit Leidenschaft für ihr Handwerk
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facts & Figures */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">HeizCenter in Zahlen</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#0F5B78] mb-2">20+</div>
              <div className="text-slate-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#0F5B78] mb-2">50+</div>
              <div className="text-slate-600">Mitarbeiter</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#0F5B78] mb-2">3</div>
              <div className="text-slate-600">Standorte</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#0F5B78] mb-2">5000+</div>
              <div className="text-slate-600">Zufriedene Kunden</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Zertifizierungen & Partnerschaften</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg mb-6">
                Als zertifizierter Fachbetrieb erfüllen wir höchste Qualitätsstandards und sind
                berechtigt, staatliche Förderungen für unsere Kunden zu beantragen.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li>Handwerkskammer für Schwaben</li>
                <li>BEG-zertifizierter Energieberater</li>
                <li>Kältetechniker nach ChemKlimaschutzV</li>
                <li>Sachkundenachweis Trinkwasserhygiene</li>
                <li>Fachbetrieb nach WHG (Wasserhaushaltsgesetz)</li>
                <li>Kundendienst für alle führenden Hersteller</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Unsere Mission</h2>
          <div className="bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white p-12 rounded-2xl">
            <p className="text-2xl font-medium mb-6">
              "Wir machen zukunftsfähige Heiztechnik für jeden zugänglich und sorgen für
              Behaglichkeit in Ihrem Zuhause – zuverlässig, kompetent und mit Leidenschaft für
              unser Handwerk."
            </p>
            <p className="text-white/90">
              - Max Mustermann, Geschäftsführer HeizCenter GmbH
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Leistung. Vereinbaren Sie noch heute einen
            kostenlosen Beratungstermin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="bg-white text-[#0F5B78] hover:bg-slate-100">
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/karriere">Karriere bei HeizCenter</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
