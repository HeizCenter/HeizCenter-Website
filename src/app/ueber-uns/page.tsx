import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, TrendingUp, Target, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OrganizationSchema } from "@/components/schema/organization-schema";

export const metadata: Metadata = {
  title: "Über uns - HeizCenter | Ihr regionaler Experte für Wärmepumpen & Heizung",
  description:
    "Lernen Sie HeizCenter kennen. Seit über 20 Jahren Ihr Partner für Wärmepumpen, Heizung, Sanitär und Klimaanlagen in Bobingen und Gutenzell-Hürbel.",
  keywords: ["HeizCenter", "Über uns", "Team", "Unternehmen", "Augsburg", "Wärmepumpen"],
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Schema.org Organization Structured Data */}
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F5B78] via-[#0D4A61] to-[#0A3A4D] text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/team.png"
            alt="HeizCenter Team"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5B78]/90 via-[#0D4A61]/85 to-[#0A3A4D]/90"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Seit über 20 Jahren Ihr Partner</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              Über HeizCenter
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed drop-shadow-md">
              Ihr verlässlicher Experte für moderne Heiztechnik, Wärmepumpen,
              Sanitärinstallationen und Klimaanlagen in der Region Bobingen und Gutenzell-Hürbel.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>50+ Mitarbeiter</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>5000+ Projekte</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>BEG-zertifiziert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0F5B78] font-semibold text-sm uppercase tracking-wider">Unsere Geschichte</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Wie alles begann</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                  HeizCenter wurde mit der Vision gegründet, modernes Heizen und Sanitär für jeden
                  zugänglich zu machen. Was als kleiner Handwerksbetrieb in Augsburg begann, ist heute
                  ein etabliertes Unternehmen mit über 50 Mitarbeitern und zwei Standorten in
                  Süddeutschland.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Unser Erfolg basiert auf drei Säulen: Fachkompetenz, Kundennähe und Innovation. Wir
                  bilden unsere Mitarbeiter kontinuierlich weiter, investieren in modernste Technik
                  und bleiben gleichzeitig Ihrem persönlichen Ansprechpartner vor Ort.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0F5B78] to-[#0D4A61] p-8 rounded-2xl text-white">
                <Target className="h-12 w-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Unsere Vision</h3>
                <p className="text-blue-50 leading-relaxed">
                  Eine klimaneutrale Zukunft durch nachhaltige Heiztechnologie – für jedes Zuhause
                  und jedes Budget erreichbar.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-[#0F5B78] font-semibold text-sm uppercase tracking-wider">Was uns ausmacht</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Unsere Werte</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei allem, was wir tun
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-transparent hover:border-[#0F5B78] transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F5B78] to-[#0D4A61] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualität</h3>
                <p className="text-slate-600 leading-relaxed">
                  Höchste Handwerkskunst und zertifizierte Fachbetriebe für alle Gewerke
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-[#0F5B78] transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Kundennähe</h3>
                <p className="text-slate-600 leading-relaxed">
                  Persönliche Beratung und schneller Service in Ihrer Region
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-[#0F5B78] transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Modernste Technik und zukunftsfähige Lösungen für nachhaltiges Heizen
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-[#0F5B78] transition-all hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team</h3>
                <p className="text-slate-600 leading-relaxed">
                  Über 50 qualifizierte Mitarbeiter mit Leidenschaft für ihr Handwerk
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facts & Figures */}
      <section className="container py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0F5B78] font-semibold text-sm uppercase tracking-wider">Fakten & Zahlen</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">HeizCenter in Zahlen</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#0F5B78] to-[#0D4A61] p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">20+</div>
              <div className="text-blue-100 font-medium">Jahre Erfahrung</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-green-100 font-medium">Mitarbeiter</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">2</div>
              <div className="text-purple-100 font-medium">Standorte</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">5000+</div>
              <div className="text-orange-100 font-medium">Zufriedene Kunden</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#0F5B78] font-semibold text-sm uppercase tracking-wider">Vertrauen & Qualität</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Zertifizierungen & Partnerschaften</h2>
              <p className="text-lg text-slate-600">
                Als zertifizierter Fachbetrieb erfüllen wir höchste Qualitätsstandards und sind
                berechtigt, staatliche Förderungen für unsere Kunden zu beantragen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Handwerkskammer für Schwaben",
                "BEG-zertifizierter Energieberater",
                "Kältetechniker nach ChemKlimaschutzV",
                "Sachkundenachweis Trinkwasserhygiene",
                "Fachbetrieb nach WHG (Wasserhaushaltsgesetz)",
                "Kundendienst für alle führenden Hersteller",
              ].map((cert, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:border-[#0F5B78] transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#0F5B78] font-semibold text-sm uppercase tracking-wider">Unser Antrieb</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Unsere Mission</h2>
          </div>
          <div className="relative mb-12">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0F5B78] via-[#0D4A61] to-[#0A3A4D] rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-[#0F5B78] via-[#0D4A61] to-[#0A3A4D] text-white p-12 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-20 bg-gradient-to-b from-blue-300 to-transparent rounded-full"></div>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                  "Wir machen zukunftsfähige Heiztechnik für jeden zugänglich und sorgen für
                  Behaglichkeit in Ihrem Zuhause – zuverlässig, kompetent und mit Leidenschaft für
                  unser Handwerk."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-200" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Andrej Voisnis
                  </p>
                  <p className="text-blue-200 text-sm">
                    Geschäftsführer HeizCenter GmbH
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-700 text-white p-12 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-20 bg-gradient-to-b from-green-300 to-transparent rounded-full"></div>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                  "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Unser Team arbeitet
                  jeden Tag daran, die besten Lösungen für nachhaltige und effiziente Heizsysteme zu
                  realisieren."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-200" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Alexander Gellert
                  </p>
                  <p className="text-green-200 text-sm">
                    Technischer Leiter HeizCenter GmbH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F5B78] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20"></div>

        <div className="container text-center relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">Starten Sie jetzt</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Überzeugen Sie sich selbst von unserer Leistung. Vereinbaren Sie noch heute einen
              kostenlosen Beratungstermin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-[#0F5B78] hover:bg-slate-100 font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
                <Link href="/kontakt" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Jetzt Kontakt aufnehmen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold transition-all hover:scale-105">
                <Link href="/karriere">Karriere bei HeizCenter</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Kostenlose Beratung</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Vor-Ort-Termin möglich</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Unverbindliches Angebot</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
