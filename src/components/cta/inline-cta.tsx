import Link from "next/link";
import { ArrowRight, Phone, FileText } from "lucide-react";

interface InlineCtaProps {
  variant?: "contact" | "quote" | "phone";
  title?: string;
  description?: string;
  className?: string;
}

export function InlineCta({
  variant = "contact",
  title,
  description,
  className,
}: InlineCtaProps) {
  const variants = {
    contact: {
      icon: <ArrowRight className="h-6 w-6" />,
      defaultTitle: "Haben Sie Fragen?",
      defaultDescription:
        "Kontaktieren Sie uns für eine persönliche Beratung.",
      cta: "Jetzt Kontakt aufnehmen",
      href: "/kontakt",
      bg: "bg-[#0F5B78]",
      hoverBg: "hover:bg-[#0F5B78]",
    },
    quote: {
      icon: <FileText className="h-6 w-6" />,
      defaultTitle: "Kostenloses Angebot anfordern",
      defaultDescription:
        "Beschreiben Sie Ihr Projekt und erhalten Sie ein unverbindliches Angebot.",
      cta: "Angebot anfordern",
      href: "/kontakt?tab=quote",
      bg: "bg-green-600",
      hoverBg: "hover:bg-green-700",
    },
    phone: {
      icon: <Phone className="h-6 w-6" />,
      defaultTitle: "Rufen Sie uns an",
      defaultDescription: "Wir beraten Sie gerne telefonisch.",
      cta: "+49 821 123456",
      href: "tel:+49821123456",
      bg: "bg-orange-600",
      hoverBg: "hover:bg-orange-700",
    },
  };

  const config = variants[variant];

  return (
    <div className={`my-8 ${className}`}>
      <Link
        href={config.href}
        className={`block ${config.bg} ${config.hoverBg} text-white rounded-xl p-6 transition-all duration-200 hover:shadow-xl`}
      >
        <div className="flex items-center gap-4">
          <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
            {config.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">
              {title || config.defaultTitle}
            </h3>
            <p className="text-white/90 text-sm">
              {description || config.defaultDescription}
            </p>
          </div>
          <ArrowRight className="h-6 w-6 flex-shrink-0 hidden md:block" />
        </div>
      </Link>
    </div>
  );
}
