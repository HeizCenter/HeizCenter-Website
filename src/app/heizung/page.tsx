import { Metadata } from "next";
import { ServiceHero } from "@/components/sections/service-hero";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Flame, Clock, Euro, Wrench, Shield, Thermometer, Sun, Check, BookOpen, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceSchema } from "@/components/schema/service-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { FAQSchema } from "@/components/schema/faq-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Heizung Augsburg, Ulm - Installation & Wartung | HeizCenter",
  description:
    "Moderne Heizungsanlagen vom Fachbetrieb in Augsburg, Ulm und Memmingen. Gas, Öl, Pellets oder Hybrid. Wartung, Reparatur und Notdienst. Über 20 Jahre Erfahrung.",
  keywords: [
    "Heizung",
    "Heizungsinstallation",
    "Gasheizung",
    "Ölheizung",
    "Pelletheizung",
    "Heizungswartung",
    "Heizungsnotdienst",
    "Augsburg",
  ],
  alternates: {
    canonical: getCanonicalUrl("/heizung"),
  },
};

export const dynamic = 'force-dynamic';

const benefits = [
  "Professionelle Installation aller Heizungssysteme",
  "Regelmäßige Wartung für maximale Effizienz",
  "24/7 Notdienst bei Heizungsausfall",
  "Energieberatung und Optimierung",
  "Staatliche Förderung für neue Heizungen",
  "Über 20 Jahre Erfahrung",
];

const features = [
  {
    title: "Schneller Service",
    description:
      "Schnelle Terminvergabe und zuverlässige Ausführung. Bei Notfällen sind wir innerhalb von 24 Stunden vor Ort.",
    icon: Clock,
  },
  {
    title: "Faire Preise",
    description:
      "Transparente Kostenvoranschläge ohne versteckte Kosten. Beste Qualität zum fairen Preis.",
    icon: Euro,
  },
  {
    title: "Fachgerechte Installation",
    description:
      "Zertifizierte Fachbetriebe mit langjähriger Erfahrung. Hydraulischer Abgleich und Inbetriebnahme inklusive.",
    icon: Wrench,
  },
  {
    title: "Regelmäßige Wartung",
    description:
      "Wartungsverträge für sorgenfreien Betrieb. Verlängert die Lebensdauer und spart Energiekosten.",
    icon: Shield,
  },
  {
    title: "Energie-Effizienz",
    description:
      "Modernste Brennwerttechnik und intelligente Regelung. Bis zu 30% Energieeinsparung möglich.",
    icon: Thermometer,
  },
  {
    title: "Notdienst",
    description:
      "24/7 Heizungsnotdienst für unsere Kunden. Auch an Wochenenden und Feiertagen erreichbar.",
    icon: Flame,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Welche Heizung ist die richtige für mich?",
    answer:
      "Das hängt von vielen Faktoren ab: Gebäudegröße, Dämmung, Budget und persönliche Präferenzen. Wärmepumpen sind am effizientesten und zukunftssicher, Gasbrennwertkessel eine bewährte Alternative, und Pelletheizungen ideal für ländliche Regionen. Wir beraten Sie kostenlos und finden die optimale Lösung.",
  },
  {
    question: "Wie oft muss eine Heizung gewartet werden?",
    answer:
      "Eine jährliche Wartung ist empfehlenswert und bei den meisten Herstellern Voraussetzung für die Garantie. Bei der Wartung werden Verschleißteile geprüft, die Anlage gereinigt und optimal eingestellt. Das spart Energie, verlängert die Lebensdauer und vermeidet teure Reparaturen.",
  },
  {
    question: "Was kostet eine neue Heizung?",
    answer:
      "Die Kosten variieren je nach System: Eine Gasbrennwertheizung kostet 8.000-12.000€, eine Wärmepumpe 20.000-30.000€, und eine Pelletheizung 15.000-25.000€. Dazu kommen ggf. Kosten für Heizkörper, Rohrleitungen und Installation. Staatliche Förderungen reduzieren die Kosten erheblich.",
  },
  {
    question: "Gibt es Förderung für neue Heizungen?",
    answer:
      "Ja! Die BEG-Förderung unterstützt den Heizungstausch mit bis zu 70% – sowohl für Wärmepumpen als auch für Pelletheizungen (30% Basis + 20% Klimageschwindigkeitsbonus + 30% Einkommensbonus). Hinweis: Bei Biomasse benötigen Sie für den Klimabonus eine Kombination mit Solar/PV. Wir helfen bei der Antragstellung.",
  },
  {
    question: "Wie lange dauert der Heizungstausch?",
    answer:
      "Ein Heizungstausch dauert in der Regel 2-3 Tage. Bei komplexeren Anlagen oder zusätzlichen Arbeiten kann es auch eine Woche werden. Während der Installation haben Sie in der Regel nur wenige Stunden keine Heizung. Wir planen den Tausch optimal und minimieren die Ausfallzeit.",
  },
  {
    question: "Was tun bei Heizungsausfall?",
    answer:
      "Prüfen Sie zuerst den Wasserdruck und ob die Heizung mit Strom versorgt wird. Wenn die Heizung nicht anspringt, kontaktieren Sie uns über unseren 24/7-Notdienst. Wir sind innerhalb von 24 Stunden vor Ort und beheben das Problem schnellstmöglich.",
  },
];

export default function HeizungPage() {
  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Heizung", url: "/heizung" },
        ]}
      />
      {/* Schema.org Service Structured Data */}
      <ServiceSchema serviceType="heizung" />

      <ServiceHero
        title="Heizung in Augsburg, Ulm & Memmingen"
        description="Von der Planung über die Installation bis zur Wartung - Ihr Heizungsexperte mit über 20 Jahren Erfahrung in der Region Augsburg, Ulm und Memmingen."
        benefits={benefits}
        icon={Flame}
        badge="24/7 Notdienst"
        imageSrc="/images/HeizCenter_Heizung.webp"
        imageAlt="Gasbrennwertheizung Installation - HeizCenter für moderne Heizsysteme in Augsburg und Ulm"
      />

      <FeaturesSection
        title="Unsere Heizungs-Dienstleistungen"
        features={features}
      />

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Unsere Heizungssysteme im Überblick
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Gasheizung</h3>
                <p className="text-slate-700 mb-4">
                  Moderne Gasbrennwertkessel nutzen auch die Wärme der Abgase und
                  erreichen Wirkungsgrade von bis zu 98%. In Kombination mit
                  Solarthermie oder einer Wärmepumpe (Hybrid) besonders effizient.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Bewährte und zuverlässige Technologie</li>
                  <li>Geringe Anschaffungskosten</li>
                  <li>Kompakte Bauweise</li>
                  <li>Kombination mit erneuerbaren Energien möglich</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ölheizung</h3>
                <p className="text-slate-700 mb-4">
                  Moderne Öl-Brennwertkessel sind effizienter denn je. Ideal für
                  Gebäude ohne Gasanschluss. Langfristig empfehlen wir jedoch den
                  Umstieg auf erneuerbare Energien.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Unabhängig vom Gasnetz</li>
                  <li>Bewährte Technik</li>
                  <li>Brennwerttechnik für hohe Effizienz</li>
                  <li>Kombination mit Solarthermie empfehlenswert</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Pelletheizung</h3>
                <p className="text-slate-700 mb-4">
                  Heizen Sie mit nachwachsenden Rohstoffen. Pelletheizungen sind
                  CO2-neutral und bieten hohen Komfort durch automatische
                  Beschickung. Ideal für Ein- und Mehrfamilienhäuser.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>CO2-neutrales Heizen mit Holzpellets</li>
                  <li>Hohe Förderung durch BEG</li>
                  <li>Automatischer Betrieb</li>
                  <li>Preisstabile Brennstoffkosten</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Hybrid-Heizung</h3>
                <p className="text-slate-700 mb-4">
                  Kombinieren Sie das Beste aus zwei Welten: Eine Wärmepumpe deckt
                  die Grundlast, ein Gas- oder Ölkessel springt bei Bedarf ein.
                  Maximale Effizienz und Versorgungssicherheit.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li>Intelligente Kombination zweier Systeme</li>
                  <li>Hohe Effizienz und Versorgungssicherheit</li>
                  <li>Staatlich gefördert</li>
                  <li>Schrittweiser Umstieg auf erneuerbare Energien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wartungsvertrag Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F5B78] to-[#0D4A5E] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-[#0F5B78]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Wartungsvertrag für langfristige Sicherheit
              </h2>
            </div>
            <p className="text-xl mb-6 text-white/95">
              Schützen Sie Ihre Investition mit einem Sorglos-Wartungsvertrag. Regelmäßige Wartung verlängert die Lebensdauer Ihrer Heizung, spart Energiekosten und verhindert teure Ausfälle.
            </p>
            <ul className="space-y-3 mb-8 text-lg">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-1" />
                <span>Regelmäßige professionelle Wartung (1-3x jährlich)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-1" />
                <span>Priorität im Notfall - schnelle Hilfe garantiert</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-1" />
                <span>Bis zu 20% Rabatt auf Reparaturen</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 mt-1" />
                <span>Verlängerte Garantie und maximale Betriebssicherheit</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold text-lg">
                <Link href="/wartungsvertrag">
                  Wartungsverträge ansehen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0F5B78] text-lg">
                <Link href="/kontakt?tab=quote&service=heizung&message=Ich interessiere mich für einen Wartungsvertrag für meine Heizung. Bitte kontaktieren Sie mich für weitere Informationen.">
                  Beratung anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Heating Support Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#FFCA28] to-[#F5B800] rounded-2xl p-8 md:p-12 text-slate-900">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Sun className="h-8 w-8 text-[#0F5B78]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Heizung + Solarthermie: Unschlagbare Kombination
              </h2>
            </div>
            <p className="text-xl mb-6">
              Reduzieren Sie Ihre Heizkosten um bis zu 30% durch die Kombination Ihrer bestehenden
              oder neuen Heizung mit Solarthermie. Die kostenlose Sonnenenergie unterstützt Ihre
              Heizung bei der Warmwasserbereitung und Heizungsunterstützung.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Perfekt kombinierbar mit:</h3>
                <ul className="space-y-2">
                  <li>✓ Gasheizung + Solarthermie</li>
                  <li>✓ Ölheizung + Solarthermie</li>
                  <li>✓ Pelletheizung + Solarthermie</li>
                  <li>✓ Hybrid-System + Solarthermie</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3">Einsparungen & Förderung:</h3>
                <p className="mb-2">
                  💰 Bis zu 30% weniger Heizkosten pro Jahr
                </p>
                <p className="mb-2">
                  🌞 60% Warmwasser-Deckung durch Sonne
                </p>
                <p className="font-semibold text-[#0F5B78]">
                  🎁 Bis zu 70% KfW-Förderung
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0F5B78] hover:bg-[#14789A] text-white font-semibold">
                <Link href="/solar">
                  <Sun className="h-5 w-5 mr-2" />
                  Mehr zur Solarthermie
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-[#0F5B78] border-2 border-[#0F5B78] font-semibold">
                <Link href="/kontakt?tab=quote&service=heizung&message=Ich interessiere mich für ein Kombi-System (Heizung + Solarthermie). Bitte erstellen Sie mir ein individuelles Angebot.">
                  Kombi-System anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ratgeber & Tipps Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0F5B78]/10 text-[#0F5B78] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Ratgeber & Tipps
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Ratgeber rund um Heizung & Heizsysteme
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/blog/heizung-vergleich-2025-waermepumpe-gas-oel-pellets" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">Heizungsvergleich 2025</h3>
              <p className="text-slate-600 text-sm">Wärmepumpe vs. Gas vs. Öl vs. Pellets – alle Systeme im Vergleich.</p>
            </Link>
            <Link href="/blog/foerderung-heizung-2025" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">Förderung Heizungstausch 2025</h3>
              <p className="text-slate-600 text-sm">Bis zu 70% BEG-Förderung – alle Boni und Antragsschritte.</p>
            </Link>
            <Link href="/blog/heizung-entlueften-anleitung-2025" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-2">Heizung entlüften: Anleitung</h3>
              <p className="text-slate-600 text-sm">Schritt-für-Schritt Anleitung für optimale Heizleistung.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Heizungsservice in Ihrer Nähe */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0F5B78]/10 text-[#0F5B78] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              Standorte
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Heizungsservice in Ihrer Nähe
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/standorte/augsburg" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 text-center">
              <MapPin className="h-8 w-8 text-[#0F5B78] mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-1">Augsburg</h3>
              <p className="text-slate-600 text-sm">Heizungsinstallation und Notdienst in Augsburg</p>
            </Link>
            <Link href="/standorte/ulm" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 text-center">
              <MapPin className="h-8 w-8 text-[#0F5B78] mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-1">Ulm</h3>
              <p className="text-slate-600 text-sm">Heizungsservice in Ulm und Neu-Ulm</p>
            </Link>
            <Link href="/standorte/memmingen" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100 text-center">
              <MapPin className="h-8 w-8 text-[#0F5B78] mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0F5B78] transition-colors mb-1">Memmingen</h3>
              <p className="text-slate-600 text-sm">Heizungsfachbetrieb in Memmingen und Allgäu</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} includeSchema={false} />
      <FAQSchema faqs={faqs} />

      <CTASection
        variant="gradient"
        service="heizung"
        message="Ich interessiere mich für eine neue Heizung. Bitte kontaktieren Sie mich für eine kostenlose Beratung."
      />
    </>
  );
}
