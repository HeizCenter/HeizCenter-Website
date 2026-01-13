import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp, Users, MapPin } from "lucide-react";
import Link from "next/link";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Karriere bei HeizCenter | Jobs & Ausbildung",
  description:
    "Werde Teil des HeizCenter Teams! Ausbildungsplätze, Jobs für Installateure, Heizungsbauer und Servicetechniker in Bobingen, Klosterlechfeld und Gutenzell-Hürbel.",
  keywords: ["Karriere", "Jobs", "Ausbildung", "Installateur", "Heizungsbauer", "Augsburg"],
  alternates: {
    canonical: getCanonicalUrl("/karriere"),
  },
};

export default function KarrierePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0F5B78]/5 to-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Karriere bei HeizCenter
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Werde Teil unseres Teams und gestalte mit uns die Zukunft des Heizens!
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Warum HeizCenter?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Wertschätzung", desc: "Familiäres Betriebsklima und faire Bezahlung" },
            { icon: TrendingUp, title: "Entwicklung", desc: "Kontinuierliche Weiterbildung und Aufstiegschancen" },
            { icon: Users, title: "Teamwork", desc: "Starker Zusammenhalt und kollegiales Miteinander" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0F5B78]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Offene Stellen</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: "Installateur / Heizungsbauer (m/w/d)", location: "Augsburg", type: "Vollzeit" },
              { title: "Servicetechniker Wärmepumpen (m/w/d)", location: "Ulm", type: "Vollzeit" },
              { title: "Auszubildender Anlagenmechaniker SHK (m/w/d)", location: "Memmingen", type: "Ausbildung" },
            ].map((job, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex gap-4 text-slate-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/kontakt?subject=Bewerbung">Jetzt bewerben</Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Unsere Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#0F5B78]">✓</span>
                <span>Übertarifliche Bezahlung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F5B78]">✓</span>
                <span>30 Tage Urlaub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F5B78]">✓</span>
                <span>Firmenfahrzeug auch zur privaten Nutzung</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#0F5B78]">✓</span>
                <span>Betriebliche Altersvorsorge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F5B78]">✓</span>
                <span>Regelmäßige Schulungen & Weiterbildungen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0F5B78]">✓</span>
                <span>Moderne Werkzeuge und Ausstattung</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-[#0F5B78] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Bewerbungsprozess</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-3">1</div>
              <h3 className="text-xl font-bold mb-2">Bewerbung</h3>
              <p className="text-white/90">Sende uns deine Unterlagen per E-Mail</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">2</div>
              <h3 className="text-xl font-bold mb-2">Gespräch</h3>
              <p className="text-white/90">Lerne uns in einem persönlichen Gespräch kennen</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">3</div>
              <h3 className="text-xl font-bold mb-2">Start</h3>
              <p className="text-white/90">Herzlich willkommen im Team!</p>
            </div>
          </div>
          <div className="mt-12">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/kontakt?subject=Initiativbewerbung">Initiativbewerbung senden</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
