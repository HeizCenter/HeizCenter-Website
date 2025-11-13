import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#0F5B78] mb-4">404</h1>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Seite nicht gefunden
            </h2>
            <p className="text-lg text-slate-600">
              Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
            </p>
          </div>

          {/* Helpful Links */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/"
              className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-lg p-6 transition-all duration-200 hover:border-[#0F5B78] group"
            >
              <Home className="h-8 w-8 text-[#0F5B78] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-1">Startseite</h3>
              <p className="text-sm text-slate-600">Zurück zur Homepage</p>
            </Link>

            <Link
              href="/kontakt"
              className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-lg p-6 transition-all duration-200 hover:border-[#0F5B78] group"
            >
              <Phone className="h-8 w-8 text-[#0F5B78] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-1">Kontakt</h3>
              <p className="text-sm text-slate-600">Wir helfen Ihnen gerne</p>
            </Link>

            <Link
              href="/blog"
              className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-lg p-6 transition-all duration-200 hover:border-[#0F5B78] group"
            >
              <Search className="h-8 w-8 text-[#0F5B78] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 mb-1">Blog</h3>
              <p className="text-sm text-slate-600">Ratgeber & Infos</p>
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <h3 className="font-bold text-slate-900 mb-4">Beliebte Seiten:</h3>
            <div className="grid md:grid-cols-2 gap-2 text-left">
              <Link
                href="/waermepumpe"
                className="text-[#0F5B78] hover:text-[#0F5B78] hover:underline"
              >
                → Wärmepumpe
              </Link>
              <Link
                href="/heizung"
                className="text-[#0F5B78] hover:text-[#0F5B78] hover:underline"
              >
                → Heizung
              </Link>
              <Link
                href="/sanitaer"
                className="text-[#0F5B78] hover:text-[#0F5B78] hover:underline"
              >
                → Sanitär & Bad
              </Link>
              <Link
                href="/klimaanlage"
                className="text-[#0F5B78] hover:text-[#0F5B78] hover:underline"
              >
                → Klimaanlage
              </Link>
              <Link
                href="/standorte/augsburg"
                className="text-[#0F5B78] hover:text-[#0F5B78] hover:underline"
              >
                → Augsburg
              </Link>
              <Link
                href="/standorte/ulm"
                className="text-[#0F5B78] hover:text-[#0F5B78] hover:underline"
              >
                → Ulm
              </Link>
            </div>
          </div>

          {/* Site Map */}
          <div className="mt-6">
            <p className="text-sm text-slate-600">
              Oder besuchen Sie unsere <Link href="/" className="text-[#0F5B78] hover:underline">Startseite</Link>
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800 mb-2">
              <strong>Notfall?</strong> Wir sind 24/7 für Sie da:
            </p>
            <a
              href="tel:+4982349665900"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              +49 8234 96659 00
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
