"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Wärmepumpe", href: "/waermepumpe" },
  { name: "Heizung", href: "/heizung" },
  { name: "Sanitär", href: "/sanitaer" },
  { name: "Klimaanlage", href: "/klimaanlage" },
  { name: "Rechner", href: "/rechner" },
  { name: "Standorte", href: "/standorte" },
  { name: "Ratgeber", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[#0F5B78]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <a href="tel:+4982349665900" className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-medium">+49 8234 96659 00</span>
          </a>
          <a
            href="https://wa.me/4915111100331"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[#0F5B78] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium">WhatsApp</span>
          </a>
          <Button asChild className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
            <Link href="/kontakt">Beratung anfragen</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-[#0F5B78]">
            HeizCenter
          </Link>
          {isMounted && (
            <Sheet>
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
                    className="text-lg font-medium transition-colors hover:text-[#0F5B78]"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href="tel:+4982349665900"
                    className="flex items-center gap-2 text-lg font-medium mb-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+49 8234 96659 00</span>
                  </a>
                  <a
                    href="https://wa.me/4915111100331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-[#0F5B78]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                  <Button asChild className="w-full mt-4 bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
                    <Link href="/kontakt">Beratung anfragen</Link>
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
