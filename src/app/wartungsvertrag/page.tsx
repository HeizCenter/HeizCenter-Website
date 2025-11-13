import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Wartungsvertrag Augsburg, Ulm & Memmingen - Heizung & Wärmepumpe | HeizCenter",
  description: "Sorglos-Wartungsverträge für Ihre Heizung in Augsburg, Ulm und Memmingen. Regelmäßige Wartung, Priorität im Notfall und verlängerte Garantie.",
  keywords: ["Wartungsvertrag", "Heizungswartung", "Wärmepumpe Wartung", "Service", "Augsburg", "Ulm", "Memmingen"],
};

export default function WartungsvertragPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Wartungsvertr äge</h1>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Sorglos-Pakete für Ihre Heizung - damit Sie sich um nichts kümmern müssen
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { name: "Basis", price: "149", features: ["1x jährliche Wartung", "Priorität im Notfall", "10% Rabatt auf Reparaturen"] },
            { name: "Komfort", price: "249", features: ["2x jährliche Wartung", "Bevorzugter Notdienst", "15% Rabatt auf Reparaturen", "Kostenlose Anfahrt"], highlight: true },
            { name: "Premium", price: "399", features: ["3x jährliche Wartung", "24/7 Notdienst Priorität", "20% Rabatt auf Reparaturen", "Kostenlose Anfahrt", "Ersatzteilgarantie"] },
          ].map((plan, i) => (
            <Card key={i} className={plan.highlight ? "border-2 border-[#0F5B78]" : ""}>
              <CardContent className="p-8">
                {plan.highlight && <div className="text-center mb-4"><span className="bg-[#0F5B78] text-white px-4 py-1 rounded-full text-sm font-bold">Beliebtester</span></div>}
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-slate-600">/Jahr</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.highlight ? "default" : "outline"}>
                  Jetzt anfragen
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
