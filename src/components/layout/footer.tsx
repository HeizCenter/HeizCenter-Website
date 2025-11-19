import Link from "next/link";
import Image from "next/image";
import { LOCATIONS } from "@/lib/constants/locations";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F5B78] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.svg"
                alt="HeizCenter Logo"
                width={200}
                height={60}
                className="h-auto w-40"
              />
            </div>
            <p className="text-slate-400 mb-4">
              Ihr Experte für Wärmepumpen, Heizung, Sanitär & Klimaanlagen in
              Bobingen und Gutenzell-Hürbel.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="tel:+4982349665900"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                +49 8234 9665900
              </a>
              <a
                href="mailto:service@heizcenter.de"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                service@heizcenter.de
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Dienstleistungen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/waermepumpe"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Wärmepumpe
                </Link>
              </li>
              <li>
                <Link
                  href="/heizung"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Heizung
                </Link>
              </li>
              <li>
                <Link
                  href="/sanitaer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Sanitär & Badsanierung
                </Link>
              </li>
              <li>
                <Link
                  href="/klimaanlage"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Klimaanlage
                </Link>
              </li>
              <li>
                <Link
                  href="/solar"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Solarthermie
                </Link>
              </li>
              <li>
                <Link
                  href="/notdienst"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Notdienst
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4">Standorte</h4>
            <ul className="space-y-3 text-sm">
              {LOCATIONS.map((location) => (
                <li key={location.id}>
                  <div className="text-slate-400 flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">HeizCenter GmbH</div>
                      <div className="text-xs">{location.address}</div>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="text-xs mt-1 block hover:text-white transition-colors"
                      >
                        {location.phone}
                      </a>
                      <div className="text-xs">Mo-Fr 08:00-17:00</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Ratgeber & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/rechner"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Kostenrechner
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/foerderung"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Förderung
                </Link>
              </li>
              <li>
                <Link
                  href="/wartungsvertrag"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Wartungsvertrag
                </Link>
              </li>
              <li>
                <Link
                  href="/karriere"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Karriere
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-hinweis"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Cookie-Hinweis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 HeizCenter GmbH. Alle Rechte vorbehalten.</p>
            <p className="text-xs">
              Entwickelt mit ❤️ von{" "}
              <a
                href="https://jedai.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                jedAI Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
