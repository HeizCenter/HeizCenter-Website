import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  badge?: string;
}

export function ServiceHero({
  title,
  description,
  benefits,
  icon: Icon,
  badge,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {badge && (
              <Badge variant="secondary" className="mb-4">
                {badge}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-slate-600 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="/kontakt">Jetzt beraten lassen</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+4982112345">0821 123456</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Ihre Vorteile</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
