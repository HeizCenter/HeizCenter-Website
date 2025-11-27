import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Droplet, Wind, Zap, Sun, Star, Award, Users } from "lucide-react";
import { LocalBusinessSchema } from "@/components/schema/local-business-schema";
import { OrganizationSchema } from "@/components/schema/organization-schema";

const services = [
  {
    title: "Wärmepumpe",
    description: "Moderne & effiziente Wärmepumpen-Systeme für Ihr Zuhause",
    href: "/waermepumpe",
    icon: Zap,
    badge: "Umweltfreundlich",
  },
  {
    title: "Heizung",
    description: "Installation & Wartung modernster Heizungsanlagen",
    href: "/heizung",
    icon: Flame,
    badge: "Energieeffizient",
  },
  {
    title: "Sanitär",
    description: "Professionelle Badsanierung & Sanitärinstallationen",
    href: "/sanitaer",
    icon: Droplet,
    badge: "Komplettservice",
  },
  {
    title: "Klimaanlage",
    description: "Klimaanlagen für perfekte Raumtemperatur das ganze Jahr",
    href: "/klimaanlage",
    icon: Wind,
    badge: "Komfortabel",
  },
  {
    title: "Solarthermie",
    description: "Kostenlose Sonnenenergie für Warmwasser & Heizung",
    href: "/solar",
    icon: Sun,
    badge: "Bis 70% Förderung",
  },
];

const locations = [
  { name: "Bobingen", phone: "+49 8234 9665900" },
  { name: "Gutenzell-Hürbel", phone: "+49 8234 9665900" },
];

const stats = [
  { icon: Star, number: "4.8★", label: "Google Bewertung" },
  { icon: Award, number: "20+", label: "Jahre Erfahrung" },
  { icon: Users, number: "2", label: "Standorte" },
];

export default function Home() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <OrganizationSchema />
      <LocalBusinessSchema location="bobingen" includeServices={true} />
      <LocalBusinessSchema location="gutenzell" includeServices={false} />

      <div>
      {/* Hero Section with Image Grid Background */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="relative overflow-hidden">
            <Image
              src="/images/Solaranlage.webp"
              alt="Solar installation"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/Waermepumpe.jpeg"
              alt="Heat pump"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/HeizCenter_Heizung.webp"
              alt="Heating system"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/HeizCenter_Badgestaltung.webp"
              alt="Bathroom design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-[#0F5B78]/85"></div>

        {/* Content */}
        <div className="relative z-10 container py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Logo above title */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo.svg"
                alt="HeizCenter Logo"
                width={400}
                height={120}
                className="w-80 md:w-96 h-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ihr Experte für moderne Heizungslösungen
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95">
              Wärmepumpen, Heizung, Sanitär & Klimaanlagen in Augsburg, Ulm und Memmingen Region. Über 20 Jahre Erfahrung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 font-semibold">
                <Link href="/kontakt?tab=quote&message=Ich interessiere mich für eine kostenlose Beratung zu modernen Heizungslösungen. Bitte kontaktieren Sie mich.">Kostenlose Beratung</Link>
              </Button>
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#0F5B78] font-semibold">
                <Link href="/waermepumpe">Mehr über Wärmepumpen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Unsere Dienstleistungen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-[#0F5B78]">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="h-8 w-8 text-[#0F5B78]" />
                      <Badge variant="secondary">{service.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0F5B78]/5 py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 text-[#0F5B78] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="container py-16">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">Unsere Standorte</CardTitle>
            <CardDescription>
              HeizCenter GmbH - Ihr Experte in Bobingen und Gutenzell-Hürbel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {locations.map((location) => (
                <div key={location.name} className="text-center p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {location.name}
                  </h3>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-[#0F5B78] hover:underline"
                  >
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 text-slate-900 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihre neue Heizung?
          </h2>
          <p className="text-xl mb-8 text-slate-700">
            Lassen Sie sich kostenlos und unverbindlich beraten!
          </p>
          <Button asChild size="lg" className="bg-[#FFCA28] hover:bg-[#F5B800] text-slate-900 text-lg">
            <Link href="/kontakt?tab=quote&message=Ich möchte einen Beratungstermin für meine neue Heizung vereinbaren.">Jetzt Beratungstermin vereinbaren</Link>
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}
