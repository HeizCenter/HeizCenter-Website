import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface LocationCoverageProps {
  mainCity: string;
  coverageAreas: string[];
  title?: string;
}

export function LocationCoverage({
  mainCity,
  coverageAreas,
  title,
}: LocationCoverageProps) {
  const defaultTitle = `Servicegebiet rund um ${mainCity}`;

  return (
    <section className="bg-slate-50 py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {title || defaultTitle}
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 mb-6">
                Wir sind Ihr verlässlicher Partner für Wärmepumpen, Heizung,
                Sanitär und Klimaanlagen in {mainCity} und Umgebung. Unser
                Servicegebiet umfasst:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#0F5B78]/5 rounded-lg">
                <p className="text-slate-700">
                  <strong>Schnelle Anfahrt:</strong> Von unserem Standort in{" "}
                  {mainCity} erreichen wir Sie in der Regel innerhalb von 30-45
                  Minuten. Bei Notfällen sind wir noch schneller vor Ort.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
