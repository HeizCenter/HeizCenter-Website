import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            HeizCenter
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Ihr Experte für Wärmepumpen, Heizung, Sanitär & Klimaanlagen
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition-colors"
            >
              Unsere Services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Wärmepumpe",
              description: "Moderne & effiziente Wärmepumpen-Systeme",
              href: "/waermepumpe",
            },
            {
              title: "Heizung",
              description: "Installation & Wartung von Heizungsanlagen",
              href: "/heizung",
            },
            {
              title: "Sanitär",
              description: "Badsanierung & Sanitärinstallationen",
              href: "/sanitaer",
            },
            {
              title: "Klimaanlage",
              description: "Klimaanlagen für perfekte Raumtemperatur",
              href: "/klimaanlage",
            },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* Locations */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Unsere Standorte
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Augsburg", phone: "+49 821 123456" },
              { name: "Ulm", phone: "+49 731 123456" },
              { name: "Memmingen", phone: "+49 8331 123456" },
            ].map((location) => (
              <div key={location.name} className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-slate-600">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { number: "60+", label: "Kundenbewertungen" },
            { number: "20+", label: "Jahre Erfahrung" },
            { number: "3", label: "Standorte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für Ihre neue Heizung?
          </h2>
          <p className="text-xl mb-6">
            Lassen Sie sich kostenlos beraten!
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
          >
            Jetzt Beratungstermin vereinbaren
          </Link>
        </div>

        {/* Odoo Connection Test */}
        <div className="mt-16 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            🔧 Development Status
          </h3>
          <p className="text-slate-600 mb-4">
            Next.js app successfully initialized! Odoo API integration pending configuration.
          </p>
          <Link
            href="/api/test-odoo"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Test Odoo Connection →
          </Link>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 HeizCenter. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
