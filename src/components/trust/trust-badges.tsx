import { Award, Shield, Clock, Star, Users, CheckCircle2 } from "lucide-react";

interface TrustBadgesProps {
  variant?: "horizontal" | "grid";
  className?: string;
}

export function TrustBadges({ variant = "horizontal", className }: TrustBadgesProps) {
  const badges = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Meisterbetrieb",
      description: "Zertifizierte Qualität",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "BEG Partner",
      description: "Förderfähige Lösungen",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Notdienst",
      description: "Immer erreichbar",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "60+ Bewertungen",
      description: "4.9 ★ Durchschnitt",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${badge.bg} rounded-lg p-4 text-center border border-slate-200`}
          >
            <div className={`${badge.color} inline-flex justify-center mb-2`}>
              {badge.icon}
            </div>
            <h3 className="font-bold text-sm mb-1">{badge.title}</h3>
            <p className="text-xs text-slate-600">{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
    >
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`${badge.color}`}>{badge.icon}</div>
          <div>
            <p className="font-bold text-sm">{badge.title}</p>
            <p className="text-xs text-slate-600">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface CertificationBadgeProps {
  certification:
    | "meister"
    | "beg"
    | "tuv"
    | "innungspartner"
    | "vaillant"
    | "viessmann";
  size?: "sm" | "md" | "lg";
}

export function CertificationBadge({
  certification,
  size = "md",
}: CertificationBadgeProps) {
  const certifications = {
    meister: {
      title: "Meisterbetrieb",
      subtitle: "Handwerkskammer",
      icon: <Award className="h-full w-full" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    beg: {
      title: "BEG Partner",
      subtitle: "Förderfähig",
      icon: <CheckCircle2 className="h-full w-full" />,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    tuv: {
      title: "TÜV Zertifiziert",
      subtitle: "Geprüfte Qualität",
      icon: <Shield className="h-full w-full" />,
      color: "text-slate-700",
      bg: "bg-slate-50",
      border: "border-slate-200",
    },
    innungspartner: {
      title: "Innungspartner",
      subtitle: "Sanitär & Heizung",
      icon: <Users className="h-full w-full" />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
    vaillant: {
      title: "Vaillant Partner",
      subtitle: "Autorisiert",
      icon: <Star className="h-full w-full" />,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
    },
    viessmann: {
      title: "Viessmann Partner",
      subtitle: "Fachbetrieb",
      icon: <Star className="h-full w-full" />,
      color: "text-green-700",
      bg: "bg-green-50",
      border: "border-green-200",
    },
  };

  const config = certifications[certification];

  const sizes = {
    sm: "w-20 h-24 text-xs",
    md: "w-28 h-32 text-sm",
    lg: "w-36 h-40 text-base",
  };

  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={`${config.bg} ${config.border} ${sizes[size]} rounded-lg border-2 p-3 flex flex-col items-center justify-center text-center`}
    >
      <div className={`${config.color} ${iconSizes[size]} mb-2`}>
        {config.icon}
      </div>
      <p className="font-bold leading-tight">{config.title}</p>
      <p className={`text-slate-600 mt-0.5 ${size === "sm" ? "text-[10px]" : ""}`}>
        {config.subtitle}
      </p>
    </div>
  );
}
