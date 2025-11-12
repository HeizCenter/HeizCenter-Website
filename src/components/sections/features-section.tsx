import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

export function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="mb-4 p-3 bg-[#0F5B78]/5 rounded-lg w-fit">
                  <Icon className="h-8 w-8 text-[#0F5B78]" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
