import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Banknote,
  Briefcase,
  CalendarDays,
  Car,
  CheckCircle2,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PiggyBank,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";
import { CONTACT, getEmailLink, getPhoneLink, getWhatsAppLink } from "@/lib/config/contact";

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
const INITIATIV_WHATSAPP = "Hallo HeizCenter, ich komme aus der SHK-Branche und möchte mich bei euch vorstellen.";
const STANDORTE = `${CONTACT.BOBINGEN.city} · ${CONTACT.GUTENZELL.city}`;

type Liste = { titel: string; punkte: string[]; hervorgehoben?: boolean };
type Stelle = {
  id: string;
  kurz: string;
  title: string;
  location: string;
  type: string;
  intro: string;
  listen: Liste[];
  subject: string;
  whatsapp: string;
};

const STELLEN: Stelle[] = [
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
        hervorgehoben: true,
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
    whatsapp: "Hallo HeizCenter, ich interessiere mich für die Stelle als SHK-Meister (m/w/d).",
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
    whatsapp: "Hallo HeizCenter, ich interessiere mich für die Stelle als Anlagenmechaniker SHK (m/w/d).",
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
    whatsapp: INITIATIV_WHATSAPP,
  },
];

const WERTE = [
  { icon: Heart, title: "Wertschätzung", desc: "Familiäres Betriebsklima und faire Bezahlung" },
  { icon: TrendingUp, title: "Entwicklung", desc: "Kontinuierliche Weiterbildung und Aufstiegschancen" },
  { icon: Users, title: "Teamwork", desc: "Starker Zusammenhalt und kollegiales Miteinander" },
];

const LEISTUNGEN = [
  { icon: Banknote, text: "Übertarifliche Bezahlung" },
  { icon: CalendarDays, text: "30 Tage Urlaub" },
  { icon: Car, text: "Firmenfahrzeug auch zur privaten Nutzung" },
  { icon: PiggyBank, text: "Betriebliche Altersvorsorge" },
  { icon: GraduationCap, text: "Regelmäßige Schulungen & Weiterbildungen" },
  { icon: Wrench, text: "Moderne Werkzeuge und Ausstattung" },
];

const SCHRITTE = [
  {
    title: "Melden",
    desc: "Schreib uns per E-Mail oder WhatsApp oder ruf an. Unterlagen kannst du gleich mitschicken oder später nachreichen.",
  },
  { title: "Gespräch", desc: "Lerne uns in einem persönlichen Gespräch kennen" },
  { title: "Start", desc: "Herzlich willkommen im Team!" },
];

/** E-Mail mit Betreff der Anzeige und kurzer Vorlage – Anhänge fügt der Bewerber im eigenen Mailprogramm an. */
function mailLink(subject: string) {
  const body = [
    "Hallo HeizCenter-Team,",
    "",
    "ich möchte mich bei euch melden:",
    "",
    "Name:",
    "Telefon:",
    "Kurz zu mir:",
    "",
    "Unterlagen hänge ich an oder reiche sie nach.",
  ].join("\r\n");
  return `${getEmailLink()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function whatsappLink(text: string) {
  return getWhatsAppLink(CONTACT.WHATSAPP_MOBILE, text);
}

export default function KarrierePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F5B78] via-[#0D4A61] to-[#0A3A4D] text-white">
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#14789A] opacity-40 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-[#FFCA28] opacity-10 blur-3xl" aria-hidden="true" />

        <div className="container relative py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Briefcase className="h-4 w-4 text-[#FFCA28]" aria-hidden="true" />
                Offene Stellen
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">Karriere bei HeizCenter</h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-blue-50">
                Werde Teil unseres Teams und gestalte mit uns die Zukunft des Heizens!
              </p>
              <nav aria-label="Offene Stellen" className="mt-8">
                <ul className="flex flex-wrap gap-3">
                  {STELLEN.map((job) => (
                    <li key={job.id}>
                      <a
                        href={`#${job.id}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-medium backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <ArrowDown className="h-4 w-4 text-[#FFCA28]" aria-hidden="true" />
                        {job.kurz}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="min-w-0 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl md:p-8">
              <h2 className="text-2xl font-bold">So erreichst du uns</h2>
              <p className="mt-2 text-slate-600">
                Eine kurze Nachricht genügt. Unterlagen kannst du gleich mitschicken oder später nachreichen.
              </p>
              <div className="mt-6 space-y-3">
                <Button asChild size="lg" className="h-auto min-h-12 w-full justify-start gap-3 whitespace-normal bg-[#FFCA28] px-5 py-3 text-left text-base font-bold text-slate-900 hover:bg-[#F5B800]">
                  <a href={mailLink(INITIATIV_BETREFF)}>
                    <Mail aria-hidden="true" />
                    <span className="min-w-0 [overflow-wrap:anywhere]">{CONTACT.EMAIL}</span>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto min-h-12 w-full justify-start gap-3 whitespace-normal border-slate-300 px-5 py-3 text-left text-base font-semibold">
                  <a href={whatsappLink(INITIATIV_WHATSAPP)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle aria-hidden="true" />
                    <span className="min-w-0">
                      WhatsApp: <span className="whitespace-nowrap">{CONTACT.WHATSAPP_MOBILE_DISPLAY}</span>
                    </span>
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto min-h-12 w-full justify-start gap-3 whitespace-normal border-slate-300 px-5 py-3 text-left text-base font-semibold">
                  <a href={getPhoneLink()}>
                    <Phone aria-hidden="true" />
                    <span className="whitespace-nowrap">{CONTACT.PHONE_DISPLAY}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
        <div className="container">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0F5B78]">Aktuell bei uns</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Offene Stellen</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-8">
            {STELLEN.map((job) => (
              <Card key={job.id} id={job.id} className="scroll-mt-24 overflow-hidden border-slate-200 shadow-md transition-shadow hover:shadow-xl">
                <div className="h-1.5 bg-gradient-to-r from-[#0F5B78] via-[#14789A] to-[#FFCA28]" aria-hidden="true" />
                <CardContent className="p-6 md:p-8">
                  <h3 className="break-words text-2xl font-bold leading-tight tracking-tight md:text-3xl">{job.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F5B78]/10 px-3 py-1 text-sm font-medium text-[#0F5B78]">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-slate-700">{job.intro}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {job.listen.map((liste) => (
                      <div
                        key={liste.titel}
                        className={liste.hervorgehoben ? "rounded-xl border border-[#0F5B78]/15 bg-[#E8F4F7] p-5" : undefined}
                      >
                        <h4 className="mb-3 text-lg font-bold">{liste.titel}</h4>
                        <ul className="space-y-2.5">
                          {liste.punkte.map((punkt) => (
                            <li key={punkt} className="flex items-start gap-3 text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F5B78]" aria-hidden="true" />
                              <span className="min-w-0">{punkt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center md:px-8">
                  <Button asChild size="lg" className="h-11 bg-[#0F5B78] font-semibold hover:bg-[#0A4459]">
                    <a href={mailLink(job.subject)} aria-label={`Per E-Mail bewerben: ${job.title}`}>
                      <Mail aria-hidden="true" />
                      Per E-Mail bewerben
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-11 border-slate-300 font-semibold">
                    <a
                      href={whatsappLink(job.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Per WhatsApp schreiben: ${job.title}`}
                    >
                      <MessageCircle aria-hidden="true" />
                      Per WhatsApp schreiben
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us + Benefits */}
      <section className="container py-16 md:py-20">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#0F5B78]">Was uns ausmacht</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Warum HeizCenter?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {WERTE.map((item) => (
            <Card key={item.title} className="group border-2 border-transparent transition-all hover:border-[#0F5B78] hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F5B78] to-[#0D4A61] transition-transform motion-safe:group-hover:scale-110">
                  <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Das bieten wir dir in der Festanstellung</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEISTUNGEN.map((item) => (
              <li key={item.text} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E8F4F7]">
                  <item.icon className="h-5 w-5 text-[#0F5B78]" aria-hidden="true" />
                </span>
                <span className="min-w-0 font-medium text-slate-800">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative overflow-hidden bg-[#0F5B78] py-16 text-white md:py-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#14789A] opacity-40 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#2D9B5D] opacity-20 blur-3xl" aria-hidden="true" />

        <div className="container relative text-center">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Bewerbungsprozess</h2>
          <ol className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {SCHRITTE.map((schritt, i) => (
              <li key={schritt.title}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl font-bold" aria-hidden="true">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold">{schritt.title}</h3>
                <p className="text-white/90">{schritt.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 bg-[#FFCA28] px-8 text-base font-bold text-slate-900 shadow-xl hover:bg-[#F5B800] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F5B78]">
              <a href={mailLink(INITIATIV_BETREFF)}>
                <Mail aria-hidden="true" />
                Initiativbewerbung per E-Mail
              </a>
            </Button>
            <Button asChild size="lg" className="h-12 bg-white px-8 text-base font-bold text-[#0F5B78] shadow-xl hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F5B78]">
              <a href={whatsappLink(INITIATIV_WHATSAPP)} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Per WhatsApp schreiben
              </a>
            </Button>
          </div>
          <p className="mt-6 text-white/90">
            E-Mail:{" "}
            <a href={getEmailLink()} className="font-semibold underline underline-offset-4">
              {CONTACT.EMAIL}
            </a>{" "}
            · Telefon:{" "}
            <a href={getPhoneLink()} className="whitespace-nowrap font-semibold underline underline-offset-4">
              {CONTACT.PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
