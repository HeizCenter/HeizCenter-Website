"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { CONTACT, getPhoneLink } from "@/lib/config/contact";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Wärmepumpe", href: "/waermepumpe" },
  { name: "Heizung", href: "/heizung" },
  { name: "Sanitär", href: "/sanitaer" },
  { name: "Klimaanlage", href: "/klimaanlage" },
  { name: "Solar", href: "/solar" },
  { name: "Rechner", href: "/rechner" },
  { name: "Partner", href: "/partner" },
  { name: "Standorte", href: "/standorte" },
  { name: "Ratgeber", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  // Mobiles Menü als kontrolliertes Sheet: schließt beim Tippen auf einen Link
  // und bei jedem Routenwechsel (Jev 23.10.: blieb nach dem Seitenwechsel offen)
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        {/* Desktop Navigation - Left Side.
            Erst ab xl (1280 px): 11 Links + Telefon/WhatsApp/CTA brauchen 1342 px — zwischen 768 und
            1365 px lief die Leiste über den Rand (iPad, 1280er-Laptops; HEC-187). Darunter das Burger-Menü,
            von 1280 bis 1365 px Telefon/WhatsApp nur als Icon. */}
        <nav className="hidden xl:flex items-center space-x-4 lg:space-x-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[#0F5B78] whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons - Right Side */}
        <div className="hidden xl:flex items-center space-x-3 lg:space-x-4 ml-auto">
          <a
            href={getPhoneLink()}
            aria-label={`Anrufen: ${CONTACT.PHONE_DISPLAY}`}
            title={CONTACT.PHONE_DISPLAY}
            className="flex items-center gap-1.5 text-sm hover:text-[#0F5B78] transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium whitespace-nowrap hidden min-[1366px]:inline">{CONTACT.PHONE_DISPLAY}</span>
          </a>
          <a
            href={`https://wa.me/${CONTACT.WHATSAPP_MOBILE}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="flex items-center gap-1.5 text-sm hover:text-[#0F5B78] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium whitespace-nowrap hidden min-[1366px]:inline">WhatsApp</span>
          </a>
          <Button asChild className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold whitespace-nowrap">
            <Link href="/kontakt">Beratung anfragen</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden flex w-full items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="HeizCenter – Startseite">
            {/* Wortmarke in Markenblau für die weiße Leiste (Original ist weiß/gelb) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-blue.svg"
              alt="HeizCenter"
              width={600}
              height={130}
              className="h-8 w-auto"
            />
          </Link>
          {isMounted && (
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-[#0F5B78]"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href={getPhoneLink()}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium mb-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{CONTACT.PHONE_DISPLAY}</span>
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT.WHATSAPP_MOBILE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-[#0F5B78]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                  <Button asChild className="w-full mt-4 bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
                    <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Beratung anfragen</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
            </Sheet>
          )}
          {!isMounted && (
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
