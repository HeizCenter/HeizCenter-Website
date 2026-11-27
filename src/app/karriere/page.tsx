import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp, Users, MapPin } from "lucide-react";
import Link from "next/link";
import { getCanonicalUrl } from "@/lib/seo";
import { CONTACT, getEmailLink, getPhoneLink } from "@/lib/config/contact";

const TITLE = "Karriere bei HeizCenter | SHK-Meister & Anlagenmechaniker";
const DESCRIPTION =
  "Jobs bei HeizCenter in Bobingen und Gutenzell-Hürbel: SHK-Meister (m/w/d), Anlagenmechaniker SHK (m/w/d) – oder melde dich initiativ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Karriere", "Jobs", "SHK-Meister", "Anlagenmechaniker SHK", "SHK-Geselle", "Initiativbewerbung", "Bobingen"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: getCanonicalUrl("/karriere"),
  },
  alternates: {
    canonical: getCanonicalUrl("/karriere"),
  },
};

const INITIATIV_BETREFF = "Initiativbewerbung / Zusammenarbeit";
const STANDORTE = `${CONTACT.BOBINGEN.city} · ${CONTACT.GUTENZELL.city}`;

const STELLEN = [
  {
    id: "shk-meister",
    kurz: "SHK-Meister",
    title: "SHK-Meister (m/w/d)",
    location: "Region Augsburg",
    type: "Vollzeit",
    intro:
      "Gestalte Abläufe, Projekte und die Zukunft des Unternehmens aktiv mit – in einer Position, die mit dir wächst. Du arbeitest direkt mit unseren beiden Geschäftsführern zusammen: Einer kommt aus dem SHK-Handwerk, einer aus der Betriebswirtschaft.",
    listen: [
      {
        titel: "Deine Aufgaben",
        punkte: [
          "Planung und Beratung: Bestellungen, Projektplanung und Kundengespräche von der ersten Idee bis zum Angebot – du begleitest Projekte von A bis Z",
          "Kundenkontakt und Verkauf: Du berätst Kunden zu Wärmepumpe und Sanierung und führst die Gespräche bis zum Abschluss",
          "Kunden und Geschäftsentwicklung: Du pflegst bestehende Kundenbeziehungen und baust den regionalen Kundenstamm weiter aus",
          "Mitarbeit vor Ort: Du bist regelmäßig auf den Baustellen unterwegs und hältst den direkten Draht zum Team",
        ],
      },
      {
        titel: "Das bieten wir dir",
        punkte: [
          "Überdurchschnittliches Meister-Gehalt",
          "5 % Erfolgsbeteiligung: Prämie auf den Deckungsbeitrag erfolgreicher Abschlüsse",
          "Geregelte 40-Stunden-Woche: Montag bis Donnerstag 8 bis 17 Uhr, Freitag bis 14 Uhr",
          "Ein fester Homeoffice-Tag pro Woche",
          "Eigener, neuer Firmenwagen, auch privat nutzbar – du startest morgens von zu Hause direkt zum Kunden",
          "Persönliche Einarbeitung durch die Geschäftsführer und kurze Entscheidungswege",
          "Echte Karrieremöglichkeiten: Mit dem Unternehmen wachsen deine Verantwortung, dein Gehalt und deine Möglichkeiten",
        ],
      },
      {
        titel: "Das bringst du mit",
        punkte: [
          "Meisterbrief im Installateur- und Heizungsbauerhandwerk",
          "Erfahrung mit der Modernisierung von Heizungsanlagen, gern mit Wärmepumpen",
          "Freude an Beratung und Verkauf",
          "Führerschein Klasse B",
          "Gute Deutschkenntnisse für die Beratung unserer Kunden",
        ],
      },
    ],
    subject: "Bewerbung SHK-Meister (m/w/d)",
    cta: "Jetzt bewerben",
  },
  {
    id: "anlagenmechaniker-shk",
    kurz: "Anlagenmechaniker SHK",
    title: "Anlagenmechaniker SHK / SHK-Geselle (m/w/d) – Montage",
    location: STANDORTE,
    type: "Vollzeit",
    intro:
      "Du montierst Heizungs- und Sanitäranlagen bei unseren Kunden – im Neubau und in der Sanierung.",
    listen: [
      {
        titel: "Deine Aufgaben",
        punkte: [
          "Installation und Inbetriebnahme von Heizungs-, Sanitär- und Lüftungsanlagen",
          "Montage von Wärmepumpen, Heizkörpern und Armaturen",
          "Sanitärinstallationen im Neubau und im Bestand",
          "Wartung, Reparatur und Störungsbeseitigung an bestehenden Anlagen",
          "Dokumentation der ausgeführten Arbeiten",
        ],
      },
      {
        titel: "Das bringst du mit",
        punkte: [
          "Abgeschlossene Ausbildung als Anlagenmechaniker SHK (m/w/d) oder eine vergleichbare Qualifikation",
          "Berufserfahrung in Heizung, Sanitär und Klimatechnik ist willkommen",
          "Erfahrung mit Rohrleitungsbau, Presssystemen und hydraulischen Anschlüssen",
          "Sicherer Umgang mit technischen Zeichnungen und Installationsplänen",
          "Selbstständige, zuverlässige Arbeitsweise und freundliches Auftreten beim Kunden",
          "Führerschein Klasse B",
          "Gute Deutschkenntnisse für die Verständigung mit Kunden und Kollegen",
          "Bereitschaft zur Weiterbildung, vor allem bei Wärmepumpen",
        ],
      },
    ],
    subject: "Bewerbung Anlagenmechaniker SHK (m/w/d)",
    cta: "Jetzt bewerben",
  },
  {
    id: "initiativ",
    kurz: "Initiativ & Zusammenarbeit",
    title: "Fachleute aus der SHK-Branche (m/w/d) – Initiativbewerbung und Zusammenarbeit",
    location: STANDORTE,
    type: "Anstellung oder Zusammenarbeit",
    intro:
      "Du kommst aus der SHK-Branche und suchst etwas Neues? Dann melde dich bei uns – auch wenn gerade keine passende Stelle ausgeschrieben ist.",
    listen: [
      {
        titel: "Wen wir ansprechen",
        punkte: [
          "Monteure und Kundendiensttechniker (m/w/d) für Heizung, Sanitär, Klima und Solar",
          "Weitere technische Fachkräfte (m/w/d), zum Beispiel aus Planung oder Kältetechnik",
          "Kolleginnen und Kollegen fürs Büro (m/w/d) mit Erfahrung in einem SHK-Betrieb",
        ],
      },
      {
        titel: "Wie wir zusammenkommen",
        punkte: [
          "Festanstellung in unserem Team",
          "Andere Formen der Zusammenarbeit – sag uns einfach, was du dir vorstellst",
          "Schreib uns kurz, was du kannst und was du suchst – wir melden uns bei dir",
        ],
      },
    ],
    subject: INITIATIV_BETREFF,
    cta: "Jetzt melden",
  },
];

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
          <h2 className="text-3xl font-bold text-center mb-6">Offene Stellen</h2>
          <nav aria-label="Offene Stellen" className="max-w-4xl mx-auto mb-10">
            <ul className="flex flex-wrap justify-center gap-3">
              {STELLEN.map((job) => (
                <li key={job.id}>
                  <a
                    href={`#${job.id}`}
                    className="inline-block rounded-full border border-[#0F5B78]/30 bg-white px-4 py-2 text-sm font-medium text-[#0F5B78] hover:bg-[#0F5B78]/5"
                  >
                    {job.kurz}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-4xl mx-auto space-y-6">
            {STELLEN.map((job) => (
              <Card key={job.id} id={job.id} className="scroll-mt-24 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-semibold leading-tight tracking-tight mb-2 break-words">{job.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 shrink-0" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4 shrink-0" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="shrink-0">
                      <Link href={`/kontakt?subject=${encodeURIComponent(job.subject)}`} aria-label={`${job.cta}: ${job.title}`}>
                        {job.cta}
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">{job.intro}</p>
                  <div className="grid gap-8 md:grid-cols-2">
                    {job.listen.map((liste) => (
                      <div key={liste.titel}>
                        <h4 className="text-lg font-bold mb-3">{liste.titel}</h4>
                        <ul className="space-y-2">
                          {liste.punkte.map((punkt) => (
                            <li key={punkt} className="flex items-start gap-3 text-slate-700">
                              <span className="text-[#0F5B78]" aria-hidden="true">✓</span>
                              <span className="min-w-0">{punkt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="max-w-4xl mx-auto mt-8 text-center text-slate-600">
            Du möchtest lieber direkt mit uns sprechen oder deine Unterlagen schicken? Schreib an{" "}
            <a href={getEmailLink()} className="font-medium text-[#0F5B78] underline">
              {CONTACT.EMAIL}
            </a>{" "}
            oder ruf uns an:{" "}
            <a href={getPhoneLink()} className="font-medium text-[#0F5B78] underline whitespace-nowrap">
              {CONTACT.PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Das bieten wir dir in der Festanstellung</h2>
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
              <p className="text-white/90">Schreib uns über das Formular oder schick deine Unterlagen per E-Mail</p>
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
              <Link href={`/kontakt?subject=${encodeURIComponent(INITIATIV_BETREFF)}`}>Initiativbewerbung senden</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
