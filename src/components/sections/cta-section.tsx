import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "default" | "gradient";
}

export function CTASection({
  title = "Interesse geweckt?",
  description = "Lassen Sie sich jetzt kostenlos und unverbindlich beraten!",
  variant = "default",
}: CTASectionProps) {
  if (variant === "gradient") {
    return (
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8 opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/kontakt">Beratungstermin vereinbaren</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="tel:+4982112345">
                <Phone className="mr-2 h-5 w-5" />
                0821 123456
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-16">
      <Card className="border-2 border-blue-600">
        <CardContent className="p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-slate-600 mb-8">{description}</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a
                href="tel:+4982112345"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-8 w-8 text-blue-600" />
                <span className="font-semibold">0821 123456</span>
                <span className="text-sm text-slate-600">Anrufen</span>
              </a>
              <a
                href="mailto:info@heizcenter.de"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Mail className="h-8 w-8 text-blue-600" />
                <span className="font-semibold">E-Mail</span>
                <span className="text-sm text-slate-600">Schreiben</span>
              </a>
              <Link
                href="/standorte"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <MapPin className="h-8 w-8 text-blue-600" />
                <span className="font-semibold">3 Standorte</span>
                <span className="text-sm text-slate-600">Besuchen</span>
              </Link>
            </div>
            <Button asChild size="lg" className="text-lg">
              <Link href="/kontakt">Jetzt Beratungstermin vereinbaren</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
