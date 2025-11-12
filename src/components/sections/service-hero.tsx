import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

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
    <section className="bg-gradient-to-br from-[#0F5B78]/5 to-slate-50 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#0F5B78] rounded-2xl">
                <Icon className="h-12 w-12 text-white" />
              </div>
              {badge && <Badge variant="secondary" className="text-base">{badge}</Badge>}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">{description}</p>
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">Kostenlose Beratung</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+4982112345">0821 123456</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#0F5B78]/10 to-[#0F5B78]/20 rounded-3xl flex items-center justify-center">
              <Icon className="h-64 w-64 text-[#0F5B78]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
