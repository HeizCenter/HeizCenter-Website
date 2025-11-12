import Link from "next/link";
import { AlertCircle, ArrowRight, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  variant?: "default" | "emergency" | "limited" | "appointment";
  className?: string;
}

export function CtaBanner({ variant = "default", className }: CtaBannerProps) {
  const variants = {
    default: {
      bg: "bg-gradient-to-r from-[#0F5B78] to-[#0F5B78]",
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Bereit für Ihr Projekt?",
      description: "Holen Sie sich jetzt ein kostenloses Angebot",
      cta: "Angebot anfordern",
      href: "/kontakt?tab=quote",
    },
    emergency: {
      bg: "bg-gradient-to-r from-red-600 to-red-700",
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Notfall? Wir sind 24/7 für Sie da!",
      description: "Heizungsausfall, Rohrbruch oder Gasgeruch",
      cta: "Jetzt anrufen: +49 821 123456",
      href: "tel:+49821123456",
    },
    limited: {
      bg: "bg-gradient-to-r from-orange-600 to-orange-700",
      icon: <Clock className="h-6 w-6" />,
      title: "Nur noch 3 Termine diese Woche frei!",
      description: "Sichern Sie sich jetzt Ihren Wunschtermin",
      cta: "Termin vereinbaren",
      href: "/kontakt",
    },
    appointment: {
      bg: "bg-gradient-to-r from-green-600 to-green-700",
      icon: <Phone className="h-6 w-6" />,
      title: "Kostenlose Beratung vereinbaren",
      description: "Unsere Experten beraten Sie gerne zu allen Leistungen",
      cta: "Beratung anfragen",
      href: "/kontakt",
    },
  };

  const config = variants[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-xl",
        config.bg,
        className
      )}
    >
      <div className="container py-8 md:py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-white">
            <div className="flex-shrink-0 mt-1">{config.icon}</div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {config.title}
              </h3>
              <p className="text-white/90 text-lg">{config.description}</p>
            </div>
          </div>
          <Link
            href={config.href}
            className="whitespace-nowrap bg-white text-[#0F5B78] font-bold px-8 py-4 rounded-lg hover:bg-[#0F5B78]/5 transition-all duration-200 inline-flex items-center gap-2 shadow-lg flex-shrink-0"
          >
            {config.cta}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
    </div>
  );
}
