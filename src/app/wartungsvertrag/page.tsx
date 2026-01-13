import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wartungsvertrag Augsburg, Ulm & Memmingen - Heizung & Wärmepumpe | HeizCenter",
  description: "Sorglos-Wartungsverträge für Ihre Heizung in Augsburg, Ulm und Memmingen. Regelmäßige Wartung, Priorität im Notfall und verlängerte Garantie.",
  keywords: ["Wartungsvertrag", "Heizungswartung", "Wärmepumpe Wartung", "Service", "Augsburg", "Ulm", "Memmingen"],
  alternates: {
    canonical: getCanonicalUrl("/wartungsvertrag"),
  },
};

export default function WartungsvertragPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Wartungsverträge</h1>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Sorglos-Pakete für Ihre Heizung - damit Sie sich um nichts kümmern müssen
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "Basis",
              price: "149",
              features: ["1x jährliche Wartung", "Priorität im Notfall", "10% Rabatt auf Reparaturen"],
              subject: "Wartungsvertrag Basis",
              message: "Ich interessiere mich für den Wartungsvertrag BASIS (149€/Jahr) mit 1x jährlicher Wartung, Priorität im Notfall und 10% Rabatt auf Reparaturen. Bitte kontaktieren Sie mich für ein unverbindliches Angebot."
            },
            {
              name: "Komfort",
              price: "249",
              features: ["2x jährliche Wartung", "Bevorzugter Notdienst", "15% Rabatt auf Reparaturen", "Kostenlose Anfahrt"],
              highlight: true,
              subject: "Wartungsvertrag Komfort",
              message: "Ich interessiere mich für den Wartungsvertrag KOMFORT (249€/Jahr) mit 2x jährlicher Wartung, bevorzugtem Notdienst, 15% Rabatt auf Reparaturen und kostenloser Anfahrt. Bitte kontaktieren Sie mich für ein unverbindliches Angebot."
            },
            {
              name: "Premium",
              price: "399",
              features: ["3x jährliche Wartung", "24/7 Notdienst Priorität", "20% Rabatt auf Reparaturen", "Kostenlose Anfahrt", "Ersatzteilgarantie"],
              subject: "Wartungsvertrag Premium",
              message: "Ich interessiere mich für den Wartungsvertrag PREMIUM (399€/Jahr) mit 3x jährlicher Wartung, 24/7 Notdienst Priorität, 20% Rabatt auf Reparaturen, kostenloser Anfahrt und Ersatzteilgarantie. Bitte kontaktieren Sie mich für ein unverbindliches Angebot."
            },
          ].map((plan, i) => (
            <Card key={i} className={`${plan.highlight ? "border-2 border-[#0F5B78]" : ""} flex flex-col h-full`}>
              <CardContent className="p-8 flex flex-col h-full">
                {/* Badge Area - Fixed Height */}
                <div className="h-8 mb-4 flex items-center justify-center">
                  {plan.highlight && (
                    <span className="bg-[#0F5B78] text-white px-4 py-1 rounded-full text-sm font-bold">
                      Beliebtester
                    </span>
                  )}
                </div>

                {/* Package Name - Fixed Height */}
                <h3 className="text-2xl font-bold text-center mb-2 h-8 flex items-center justify-center">
                  {plan.name}
                </h3>

                {/* Price - Fixed Height */}
                <div className="text-center mb-6 h-16 flex flex-col items-center justify-center">
                  <div>
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    <span className="text-slate-600">/Jahr</span>
                  </div>
                </div>

                {/* Features List - Flexible Height */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Fixed at Bottom */}
                <Button asChild className="w-full mt-auto" variant={plan.highlight ? "default" : "outline"}>
                  <Link href={`/kontakt?tab=contact&subject=${encodeURIComponent(plan.subject)}&message=${encodeURIComponent(plan.message)}`}>
                    Jetzt anfragen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-[#0F5B78]/5 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Shield className="h-8 w-8 text-[#0F5B78]" />
            Warum ein Wartungsvertrag?
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {["Verlängerte Lebensdauer", "Niedrigere Energiekosten", "Weniger Ausfälle", "Garantieerhalt"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
