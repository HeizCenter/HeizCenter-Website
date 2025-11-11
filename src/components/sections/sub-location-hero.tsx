import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SubLocationHeroProps {
  subLocation: string;
  mainLocation: string;
  mainLocationHref: string;
  phone: string;
  description: string;
}

export function SubLocationHero({
  subLocation,
  mainLocation,
  mainLocationHref,
  phone,
  description,
}: SubLocationHeroProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
            <Link href="/standorte" className="hover:text-blue-600">
              Standorte
            </Link>
            <ArrowRight className="h-4 w-4" />
            <Link href={mainLocationHref} className="hover:text-blue-600">
              {mainLocation}
            </Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-slate-900 font-medium">{subLocation}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wärmepumpe, Heizung & Sanitär in {subLocation}
          </h1>
          <p className="text-xl text-slate-600 mb-8">{description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Ihr Standort</h3>
                    <p className="text-slate-600 mb-3">
                      Wir betreuen Sie von unserem Standort in {mainLocation}{" "}
                      aus. Schnelle Anfahrt nach {subLocation}.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={mainLocationHref}>
                        Standort {mainLocation} →
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Direkter Kontakt</h3>
                    <p className="text-slate-600 mb-3">
                      Rufen Sie uns an für eine kostenlose Beratung in{" "}
                      {subLocation}.
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-blue-600 font-semibold text-lg hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/kontakt">Beratung anfragen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${phone}`}>Jetzt anrufen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
