import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import Link from "next/link";

interface LocationHeroProps {
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  openingHours?: string[];
  mainLocation?: string;
  badge?: string;
}

export function LocationHero({
  name,
  address,
  phone,
  email,
  description,
  openingHours = [
    "Mo-Fr: 08:00 - 17:00 Uhr",
    "Sa: 09:00 - 13:00 Uhr",
    "So: Geschlossen",
  ],
  mainLocation,
  badge,
}: LocationHeroProps) {
  return (
    <section className="bg-gradient-to-b from-[#0F5B78]/5 to-white py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-[#0F5B78]" />
              <h1 className="text-4xl md:text-5xl font-bold">
                HeizCenter {name}
              </h1>
            </div>
            {badge && (
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-[#FFCA28]/20 text-[#0F5B78] text-sm font-semibold rounded-full border border-[#FFCA28]/40">
                <Building2 className="h-4 w-4" />
                <span>{badge}</span>
              </div>
            )}
            {mainLocation && (
              <p className="text-sm text-slate-500 mb-4">
                Service von HeizCenter {mainLocation}
              </p>
            )}
            <p className="text-xl text-slate-600 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">Beratungstermin vereinbaren</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${phone}`}>Jetzt anrufen</a>
              </Button>
            </div>
          </div>

          <Card className="shadow-xl border-2 border-[#0F5B78]/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Adresse</p>
                    <p className="text-slate-600">{address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Telefon</p>
                    <a
                      href={`tel:${phone}`}
                      className="text-[#0F5B78] hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">E-Mail</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-[#0F5B78] hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Öffnungszeiten</p>
                    <div className="text-slate-600 space-y-1">
                      {openingHours.map((hours, index) => (
                        <p key={index}>{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button asChild className="w-full" variant="outline">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Route planen
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
