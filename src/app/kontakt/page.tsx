import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/forms/contact-form";
import { QuoteForm } from "@/components/forms/quote-form";
import { EmergencyForm } from "@/components/forms/emergency-form";

export const metadata: Metadata = {
  title: "Kontakt - HeizCenter | Heizung, Sanitär & Wärmepumpen",
  description:
    "Kontaktieren Sie HeizCenter für Heizung, Sanitär, Wärmepumpen und Klimaanlagen in Augsburg, Ulm und Memmingen. Angebot anfragen oder Notdienst 24/7.",
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wir sind für Sie da
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Ob Beratung, Angebot oder Notfall – kontaktieren Sie uns über das
              passende Formular oder rufen Sie uns direkt an.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+49821123456"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +49 821 123456
              </a>
              <a
                href="mailto:info@heizcenter.de"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors border border-blue-500"
              >
                <Mail className="h-5 w-5" />
                info@heizcenter.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6 -mt-16 relative z-10">
          {/* Augsburg */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
            <MapPin className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-xl mb-2">Augsburg</h3>
            <p className="text-slate-600 mb-4">
              Musterstraße 123
              <br />
              86150 Augsburg
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="tel:+49821123456"
                className="hover:text-blue-600 transition-colors"
              >
                +49 821 123456
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Mo-Fr: 8:00 - 17:00</p>
                <p className="text-red-600 font-semibold">
                  24/7 Notdienst verfügbar
                </p>
              </div>
            </div>
          </div>

          {/* Ulm */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600">
            <MapPin className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-bold text-xl mb-2">Ulm</h3>
            <p className="text-slate-600 mb-4">
              Beispielweg 456
              <br />
              89073 Ulm
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="tel:+49731234567"
                className="hover:text-green-600 transition-colors"
              >
                +49 731 234567
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Mo-Fr: 8:00 - 17:00</p>
                <p className="text-red-600 font-semibold">
                  24/7 Notdienst verfügbar
                </p>
              </div>
            </div>
          </div>

          {/* Memmingen */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-600">
            <MapPin className="h-8 w-8 text-orange-600 mb-3" />
            <h3 className="font-bold text-xl mb-2">Memmingen</h3>
            <p className="text-slate-600 mb-4">
              Teststraße 789
              <br />
              87700 Memmingen
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-600 mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a
                href="tel:+49833145678"
                className="hover:text-orange-600 transition-colors"
              >
                +49 8331 45678
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Mo-Fr: 8:00 - 17:00</p>
                <p className="text-red-600 font-semibold">
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
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Wählen Sie Ihr Kontaktformular
            </h2>
            <p className="text-slate-600">
              Je nach Anliegen wählen Sie bitte das passende Formular aus.
            </p>
          </div>

          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="contact">Kontakt</TabsTrigger>
              <TabsTrigger value="quote">Angebot</TabsTrigger>
              <TabsTrigger value="emergency" className="text-red-600">
                Notfall
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
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
              name: "HeizCenter",
              telephone: "+49 821 123456",
              email: "info@heizcenter.de",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Musterstraße 123",
                  addressLocality: "Augsburg",
                  postalCode: "86150",
                  addressCountry: "DE",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Beispielweg 456",
                  addressLocality: "Ulm",
                  postalCode: "89073",
                  addressCountry: "DE",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Teststraße 789",
                  addressLocality: "Memmingen",
                  postalCode: "87700",
                  addressCountry: "DE",
                },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
            },
          }),
        }}
      />
    </>
  );
}
