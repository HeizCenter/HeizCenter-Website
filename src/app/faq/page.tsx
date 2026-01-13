import { Metadata } from "next";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Zap, Flame, Droplet, Wind, Wrench, Phone } from "lucide-react";
import Link from "next/link";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen (FAQ) | HeizCenter",
  description: "Antworten auf die häufigsten Fragen zu Wärmepumpen, Heizung, Sanitär, Klimaanlage und unserem Service.",
  keywords: ["FAQ", "Häufige Fragen", "Wärmepumpe FAQ", "Heizung FAQ", "Sanitär FAQ"],
  alternates: {
    canonical: getCanonicalUrl("/faq"),
  },
};

export const dynamic = 'force-dynamic';

const waermepumpeFAQs: FAQItem[] = [
  { question: "Was kostet eine Wärmepumpe?", answer: "Komplettsystem ab 25.000€ inkl. Installation. Mit BEG-Förderung (bis 70%) reduziert sich der Eigenanteil auf ca. 7.500€." },
  { question: "Wie hoch ist die Förderung?", answer: "Bis zu 70% durch BEG-Förderung: 30% Grundförderung + 20% Klimageschwindigkeitsbonus (bis Ende 2028) + bis zu 30% Einkommensbonus. Max. 70% Gesamtförderung möglich." },
  { question: "Funktioniert eine Wärmepumpe im Altbau?", answer: "Ja, mit richtiger Planung. Wichtig: gute Dämmung und ggf. Flächenheizung (Fußbodenheizung). Wir prüfen kostenlos die Eignung." },
  { question: "Wie laut ist eine Wärmepumpe?", answer: "Moderne Luft-Wärmepumpen haben 35-50 dB im Betrieb. Vergleichbar mit leiser Unterhaltung. Wir achten auf optimale Aufstellung." },
  { question: "Welche Wärmepumpe ist die beste?", answer: "Kommt auf Ihr Gebäude an. Luft-Wasser für Standardfälle, Erdwärme für höchste Effizienz, Grundwasser für beste Jahresarbeitszahl. Wir beraten individuell." },
  { question: "Wie lange dauert die Installation?", answer: "3-5 Werktage für Standardinstallation. Inklusive Demontage alter Heizung, Installation Wärmepumpe, hydraulischer Abgleich und Inbetriebnahme." },
];

const heizungFAQs: FAQItem[] = [
  { question: "Wann sollte ich meine Heizung austauschen?", answer: "Bei über 15 Jahren Alter, steigenden Heizkosten, häufigen Reparaturen oder vor dem 2026 Öl-/Gasheizungsverbot." },
  { question: "Was kostet eine neue Gasheizung?", answer: "Gasbrennwerttherme ab 8.000€ inkl. Installation. Hinweis: Ab 2024 65% Erneuerbare Energie Pflicht bei Neubauten, ab 2026 schrittweise für Bestand." },
  { question: "Wie oft muss die Heizung gewartet werden?", answer: "Mindestens 1x jährlich empfohlen. Verlängert Lebensdauer, senkt Energiekosten um 10-15%, erhält Garantieansprüche." },
  { question: "Was tun bei Heizungsausfall im Winter?", answer: "Rufen Sie unseren 24/7-Notdienst: +49 8234 9665900. Schnelle Reaktionszeit, auch an Wochenenden und Feiertagen." },
  { question: "Welche Heizung ist zukunftssicher?", answer: "Wärmepumpen sind langfristig die beste Wahl. Alternativ: Pelletheizung oder Hybridlösungen (Gas + Wärmepumpe)." },
];

const sanitaerFAQs: FAQItem[] = [
  { question: "Was kostet eine Badsanierung?", answer: "Komplett-Badsanierung ab 15.000€ (Standard-Bad 8m²). Inkl. Fliesen, Sanitärobjekte, Installation. KfW-Förderung bis 6.250€ möglich." },
  { question: "Wie lange dauert eine Badsanierung?", answer: "2-3 Wochen für Standard-Bad. Planung ca. 2-3 Wochen vorher. Wir erstellen detaillierten Zeitplan mit Meilensteinen." },
  { question: "Kann ich mein Bad nutzen während der Sanierung?", answer: "Meist nicht möglich. Bei 2 Bädern können wir nacheinander sanieren. Alternativ: Gäste-WC oder mobile Lösung besprechen wir individuell." },
  { question: "Welche Förderung gibt es für barrierefreie Bäder?", answer: "KfW 455-B: Bis zu 6.250€ Zuschuss (12,5% von max. 50.000€). Für Umbau zu barrierefreiem/altersgerechtem Bad." },
];

const klimaanlageFAQs: FAQItem[] = [
  { question: "Was kostet eine Klimaanlage?", answer: "Split-Klimaanlage ab 2.500€ inkl. Installation (1 Raum). Multi-Split für mehrere Räume ab 5.000€. Abhängig von Raumgröße und Geräteanzahl." },
  { question: "Kann eine Klimaanlage auch heizen?", answer: "Ja, moderne Split-Geräte haben Wärmepumpenfunktion. Effizientes Heizen im Übergangszeit (COP bis 4,0). Spart Heizkosten im Frühjahr/Herbst." },
  { question: "Wie laut ist eine Klimaanlage?", answer: "Innengerät: 19-35 dB (je nach Leistung). Außengerät: 40-55 dB. Vergleichbar mit Kühlschrank bzw. normaler Unterhaltung." },
  { question: "Wie hoch sind die Stromkosten?", answer: "Ca. 0,30-0,50€ pro Stunde bei voller Leistung. Durch Inverter-Technologie oft nur 30-50% Teillast. Typisch: 50-100€/Saison pro Raum." },
];

const serviceFAQs: FAQItem[] = [
  { question: "In welchen Regionen sind Sie tätig?", answer: "Hauptstandorte: Bobingen, Klosterlechfeld und Gutenzell-Hürbel. Service-Gebiet: Raum Augsburg, Landsberg am Lech, Ulm, Memmingen und Umgebung. Radius 50 km inkl. Landkreise Aichach-Friedberg, Donau-Ries, Neu-Ulm, Günzburg, Unterallgäu." },
  { question: "Bieten Sie Notdienst an?", answer: "Ja, 24/7-Heizungsnotdienst unter +49 8234 9665900. Auch an Wochenenden und Feiertagen. Schnelle Reaktionszeit im gesamten Service-Gebiet." },
  { question: "Wie schnell bekommen wir einen Termin?", answer: "Beratungstermin meist innerhalb 1 Woche. Installationstermine nach Verfügbarkeit, oft 2-4 Wochen. Notfälle: sofort bzw. innerhalb 24h." },
  { question: "Übernehmen Sie die Förderanträge?", answer: "Ja, vollständig. Wir erstellen alle erforderlichen Unterlagen für BEG, KfW und andere Programme. Service inklusive bei Beauftragung." },
  { question: "Gibt es Garantie auf die Arbeiten?", answer: "Ja, 2 Jahre gesetzliche Gewährleistung auf Handwerksleistungen. Herstellergarantie auf Geräte (meist 2-5 Jahre, bei Wärmepumpen oft 5-10 Jahre auf Verdichter)." },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Häufig gestellte Fragen (FAQ)
            </h1>
            <p className="text-xl">
              Antworten auf die wichtigsten Fragen zu unseren Leistungen
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-12 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Themen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Wärmepumpe", icon: Zap, href: "#waermepumpe" },
              { name: "Heizung", icon: Flame, href: "#heizung" },
              { name: "Sanitär", icon: Droplet, href: "#sanitaer" },
              { name: "Klimaanlage", icon: Wind, href: "#klimaanlage" },
              { name: "Service", icon: Wrench, href: "#service" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-50 hover:bg-[#0F5B78]/5 transition-colors text-center"
              >
                <item.icon className="h-8 w-8 text-[#0F5B78]" />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Wärmepumpe FAQs */}
      <section id="waermepumpe" className="scroll-mt-20">
        <div className="container py-8">
          <div className="flex items-center gap-3 mb-6 max-w-3xl mx-auto">
            <Zap className="h-10 w-10 text-[#0F5B78]" />
            <h2 className="text-3xl font-bold">Wärmepumpe</h2>
          </div>
        </div>
        <FAQSection title="" faqs={waermepumpeFAQs} />
      </section>

      {/* Heizung FAQs */}
      <section id="heizung" className="bg-slate-50 scroll-mt-20">
        <div className="container py-8">
          <div className="flex items-center gap-3 mb-6 max-w-3xl mx-auto">
            <Flame className="h-10 w-10 text-orange-600" />
            <h2 className="text-3xl font-bold">Heizung</h2>
          </div>
        </div>
        <FAQSection title="" faqs={heizungFAQs} />
      </section>

      {/* Sanitär FAQs */}
      <section id="sanitaer" className="scroll-mt-20">
        <div className="container py-8">
          <div className="flex items-center gap-3 mb-6 max-w-3xl mx-auto">
            <Droplet className="h-10 w-10 text-[#0F5B78]" />
            <h2 className="text-3xl font-bold">Sanitär & Badsanierung</h2>
          </div>
        </div>
        <FAQSection title="" faqs={sanitaerFAQs} />
      </section>

      {/* Klimaanlage FAQs */}
      <section id="klimaanlage" className="bg-slate-50 scroll-mt-20">
        <div className="container py-8">
          <div className="flex items-center gap-3 mb-6 max-w-3xl mx-auto">
            <Wind className="h-10 w-10 text-cyan-600" />
            <h2 className="text-3xl font-bold">Klimaanlage</h2>
          </div>
        </div>
        <FAQSection title="" faqs={klimaanlageFAQs} />
      </section>

      {/* Service FAQs */}
      <section id="service" className="scroll-mt-20">
        <div className="container py-8">
          <div className="flex items-center gap-3 mb-6 max-w-3xl mx-auto">
            <Wrench className="h-10 w-10 text-slate-600" />
            <h2 className="text-3xl font-bold">Service & Allgemeines</h2>
          </div>
        </div>
        <FAQSection title="" faqs={serviceFAQs} />
      </section>

      {/* Notdienst Info */}
      <section className="bg-red-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Phone className="h-10 w-10 text-red-600" />
                  <CardTitle className="text-3xl">24/7 Notdienst</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">
                  Bei Heizungsausfall, Rohrbruch oder anderen Notfällen erreichen Sie uns rund um die Uhr:
                </p>
                <div className="bg-white p-6 rounded-lg border-2 border-red-600 text-center">
                  <div className="text-sm text-slate-600 mb-2">Notruf 24/7</div>
                  <a
                    href="tel:+4982349665900"
                    className="text-4xl font-bold text-red-600 hover:underline"
                  >
                    +49 8234 9665900
                  </a>
                </div>
                <p className="mt-6 text-sm text-slate-600">
                  Mehr Informationen zu unserem Notdienst, Verfügbarkeit und Kosten finden Sie auf unserer{" "}
                  <Link href="/notdienst" className="text-[#0F5B78] hover:underline font-semibold">
                    Notdienst-Seite
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ihre Frage war nicht dabei?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Kontaktieren Sie uns - wir beraten Sie gerne persönlich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0F5B78] text-white font-semibold rounded-lg hover:bg-[#0F5B78] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+4982349665900"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0F5B78] text-[#0F5B78] font-semibold rounded-lg hover:bg-[#0F5B78]/5 transition-colors"
            >
              <Phone className="h-5 w-5" />
              +49 8234 9665900
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
