import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText, AlertCircle, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/forms/contact-form";
import { QuoteForm } from "@/components/forms/quote-form";
import { EmergencyForm } from "@/components/forms/emergency-form";

export const metadata: Metadata = {
  title: "Kontakt - HeizCenter | Heizung, Sanitär & Wärmepumpen",
  description:
    "Kontaktieren Sie HeizCenter für Heizung, Sanitär, Wärmepumpen und Klimaanlagen in Bobingen und Gutenzell-Hürbel. Angebot anfragen oder Notdienst 24/7.",
  openGraph: {
    title: "Kontakt - HeizCenter",
    description:
      "Kontaktieren Sie uns für Beratung, Angebote oder Notdienst. Wir sind für Sie da!",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F5B78] to-[#0F5B78] text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wir sind für Sie da
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Ob Beratung, Angebot oder Notfall – kontaktieren Sie uns über das
              passende Formular oder rufen Sie uns direkt an.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+4982349665900"
                className="inline-flex items-center gap-2 bg-white text-[#0F5B78] px-6 py-3 rounded-lg font-bold hover:bg-[#FFCA28] hover:text-slate-900 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +49 8234 96659 00
              </a>
              <a
                href="https://wa.me/4915111100331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors border border-white/40"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="mailto:service@heizcenter.de"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors border border-white/40"
              >
                <Mail className="h-5 w-5" />
                service@heizcenter.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto -mt-16 relative z-10">
          {/* Bobingen */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0F5B78]">
            <MapPin className="h-8 w-8 text-[#0F5B78] mb-3" />
            <h3 className="font-bold text-xl mb-2">HeizCenter Bobingen</h3>
            <p className="text-slate-600 mb-4">
              Lechallee 28
              <br />
              86399 Bobingen
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="tel:+4982349665900"
                className="hover:text-[#0F5B78] transition-colors"
              >
                +49 8234 96659 00
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="mailto:service@heizcenter.de"
                className="hover:text-[#0F5B78] transition-colors"
              >
                service@heizcenter.de
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Mo-Fr: 08:00 - 17:00 Uhr</p>
                <p>Sa: 09:00 - 13:00 Uhr</p>
                <p className="text-red-600 font-semibold mt-1">
                  24/7 Notdienst verfügbar
                </p>
              </div>
            </div>
          </div>

          {/* Gutenzell-Hürbel */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0F5B78]">
            <MapPin className="h-8 w-8 text-[#0F5B78] mb-3" />
            <h3 className="font-bold text-xl mb-2">HeizCenter Gutenzell-Hürbel</h3>
            <p className="text-slate-600 mb-4">
              Schlüsselbergstraße 5
              <br />
              88484 Gutenzell-Hürbel
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="tel:+4982349665900"
                className="hover:text-[#0F5B78] transition-colors"
              >
                +49 8234 96659 00
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="mailto:service@heizcenter.de"
                className="hover:text-[#0F5B78] transition-colors"
              >
                service@heizcenter.de
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Mo-Fr: 08:00 - 17:00 Uhr</p>
                <p>Sa: 09:00 - 13:00 Uhr</p>
                <p className="text-red-600 font-semibold mt-1">
                  24/7 Notdienst verfügbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Wählen Sie Ihr Kontaktformular
            </h2>
            <p className="text-slate-600 text-lg">
              Je nach Anliegen wählen Sie bitte das passende Formular aus.
            </p>
          </div>

          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10 bg-slate-100 p-2 rounded-xl h-auto">
              <TabsTrigger
                value="contact"
                className="flex flex-col items-center gap-2 py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
              >
                <MessageSquare className="h-6 w-6 text-[#0F5B78]" />
                <span className="font-semibold">Kontakt</span>
                <span className="text-xs text-slate-500 hidden sm:block">Allgemeine Anfrage</span>
              </TabsTrigger>
              <TabsTrigger
                value="quote"
                className="flex flex-col items-center gap-2 py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
              >
                <FileText className="h-6 w-6 text-[#0F5B78]" />
                <span className="font-semibold">Angebot</span>
                <span className="text-xs text-slate-500 hidden sm:block">Kostenlos anfragen</span>
              </TabsTrigger>
              <TabsTrigger
                value="emergency"
                className="flex flex-col items-center gap-2 py-4 px-6 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
              >
                <AlertCircle className="h-6 w-6 text-[#0F5B78]" />
                <span className="font-semibold">Notfall</span>
                <span className="text-xs text-slate-500 hidden sm:block">24/7 Notdienst</span>
              </TabsTrigger>
            </TabsList>

            {/* Contact Form Tab */}
            <TabsContent value="contact">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Allgemeine Anfrage
                  </h3>
                  <p className="text-slate-600">
                    Haben Sie eine Frage oder möchten Sie mehr über unsere
                    Dienstleistungen erfahren? Kontaktieren Sie uns gerne.
                  </p>
                </div>
                <ContactForm />
              </div>
            </TabsContent>

            {/* Quote Form Tab */}
            <TabsContent value="quote">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Kostenloses Angebot anfordern
                  </h3>
                  <p className="text-slate-600">
                    Beschreiben Sie Ihr Projekt und erhalten Sie ein
                    unverbindliches Angebot von unseren Experten.
                  </p>
                </div>
                <QuoteForm />
              </div>
            </TabsContent>

            {/* Emergency Form Tab */}
            <TabsContent value="emergency">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-red-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-red-600">
                    Notdienst 24/7
                  </h3>
                  <p className="text-slate-600">
                    Bei einem Heizungs- oder Sanitär-Notfall sind wir rund um
                    die Uhr für Sie da.
                  </p>
                </div>
                <EmergencyForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Warum HeizCenter?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#0F5B78]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <h3 className="font-bold mb-2">Schnelle Reaktion</h3>
                <p className="text-sm text-slate-600">
                  Wir antworten innerhalb von 24 Stunden auf Ihre Anfrage
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">60+</span>
                </div>
                <h3 className="font-bold mb-2">Zufriedene Kunden</h3>
                <p className="text-sm text-slate-600">
                  Über 60 positive Bewertungen sprechen für unsere Qualität
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">
                    24/7
                  </span>
                </div>
                <h3 className="font-bold mb-2">Notdienst</h3>
                <p className="text-sm text-slate-600">
                  Rund um die Uhr für Notfälle erreichbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt - HeizCenter",
            description:
              "Kontaktieren Sie HeizCenter für Heizung, Sanitär, Wärmepumpen und Klimaanlagen",
            provider: {
              "@type": "LocalBusiness",
              name: "HeizCenter GmbH",
              telephone: "+49 8234 96659 00",
              email: "service@heizcenter.de",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Lechallee 28",
                  addressLocality: "Bobingen",
                  postalCode: "86399",
                  addressCountry: "DE",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Schlüsselbergstraße 5",
                  addressLocality: "Gutenzell-Hürbel",
                  postalCode: "88484",
                  addressCountry: "DE",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
