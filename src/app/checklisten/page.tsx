import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Checklisten & Downloads | HeizCenter",
  description: "Kostenlose Checklisten für Heizungskauf, Badsanierung und Wartung. Hilfreiche Downloads für Hausbesitzer.",
  keywords: ["Checkliste", "Download", "Heizung", "Wartung", "Badsanierung"],
};

export default function ChecklistenPage() {
  const checklists = [
    { title: "Checkliste Heizungstausch", desc: "Alles was Sie beim Heizungswechsel beachten müssen", items: 12 },
    { title: "Checkliste Badsanierung", desc: "Planung und Durchführung einer Badsanierung", items: 15 },
    { title: "Checkliste Wärmepumpe", desc: "Voraussetzungen und Planung für Wärmepumpen", items: 10 },
    { title: "Wartungscheckliste Heizung", desc: "Regelmäßige Wartungsaufgaben für Ihre Heizung", items: 8 },
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Checklisten & Downloads</h1>
        <p className="text-xl text-slate-600 mb-12 text-center">
          Hilfreiche Checklisten für Ihre Projekte - kostenlos zum Download
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {checklists.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-[#0F5B78] flex-shrink-0 mt-1" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{item.items} Punkte</span>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-[#0F5B78]/5 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Individuelle Beratung gewünscht?</h3>
          <p className="mb-6">Vereinbaren Sie einen kostenlosen Beratungstermin mit unseren Experten.</p>
          <Button size="lg">Beratungstermin anfragen</Button>
        </div>
      </div>
    </div>
  );
}
