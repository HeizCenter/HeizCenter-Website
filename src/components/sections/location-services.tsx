import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

export interface LocationService {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface LocationServicesProps {
  services: LocationService[];
  title?: string;
}

export function LocationServices({
  services,
  title = "Unsere Leistungen",
}: LocationServicesProps) {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="border-2 hover:border-[#0F5B78]/20 transition-colors hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#0F5B78]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#0F5B78]" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={service.href}>Mehr erfahren →</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
