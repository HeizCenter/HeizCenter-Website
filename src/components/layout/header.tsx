"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">HeizCenter</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+4982112345" className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-medium">0821 123456</span>
          </a>
          <Button asChild>
            <Link href="/kontakt">Beratung anfragen</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
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
                  className="text-lg font-medium transition-colors hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+4982112345"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  <Phone className="h-5 w-5" />
                  <span>0821 123456</span>
                </a>
                <Button asChild className="w-full mt-4">
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
