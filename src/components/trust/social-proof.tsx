import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

interface SocialProofBarProps {
  variant?: "default" | "minimal" | "detailed";
}

export function SocialProofBar({ variant = "default" }: SocialProofBarProps) {
  const stats = [
    {
      icon: <Users className="h-5 w-5" />,
      value: "500+",
      label: "Zufriedene Kunden",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      value: "1000+",
      label: "Projekte realisiert",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      value: "15+",
      label: "Jahre Erfahrung",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      value: "24/7",
      label: "Notdienst",
    },
  ];

  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-center gap-6 text-sm">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          500+ Kunden
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1">
          <TrendingUp className="h-4 w-4 text-[#0F5B78]" />
          15+ Jahre
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1">
          <Zap className="h-4 w-4 text-orange-600" />
          24/7 Service
        </span>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 border border-slate-200 text-center hover:border-[#0F5B78]/30 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0F5B78]/5 rounded-full text-[#0F5B78] mb-2">
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-slate-900 mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="text-[#0F5B78]">{stat.icon}</div>
          <div>
            <p className="text-xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-600">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface LiveActivityProps {
  variant?: "appointments" | "quotes" | "projects";
}

export function LiveActivity({ variant = "appointments" }: LiveActivityProps) {
  const activities = {
    appointments: {
      icon: "📅",
      text: "3 Termine diese Woche frei",
      subtext: "Letzte Buchung vor 2 Stunden",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
    quotes: {
      icon: "📝",
      text: "47 Angebote diese Woche versendet",
      subtext: "Durchschnittliche Antwortzeit: 4 Stunden",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    projects: {
      icon: "🔧",
      text: "12 aktive Projekte in Ihrer Region",
      subtext: "Nächster Termin verfügbar: Diese Woche",
      color: "text-[#0F5B78]",
      bg: "bg-[#0F5B78]/5",
      border: "border-[#0F5B78]/20",
    },
  };

  const config = activities[variant];

  return (
    <div
      className={`${config.bg} ${config.border} border rounded-lg p-4 flex items-start gap-3`}
    >
      <div className="text-2xl">{config.icon}</div>
      <div>
        <p className={`font-bold ${config.color}`}>{config.text}</p>
        <p className="text-sm text-slate-600 mt-1">{config.subtext}</p>
      </div>
    </div>
  );
}

interface LocalBusinessProofProps {
  city: "Augsburg" | "Ulm" | "Memmingen";
}

export function LocalBusinessProof({ city }: LocalBusinessProofProps) {
  const cityData = {
    Augsburg: { projects: 150, responseTime: "2-4h", serviceArea: "Augsburg & Umland" },
    Ulm: { projects: 120, responseTime: "3-5h", serviceArea: "Ulm & Neu-Ulm" },
    Memmingen: { projects: 80, responseTime: "4-6h", serviceArea: "Memmingen & Umgebung" },
  };

  const data = cityData[city];

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
      <h3 className="font-bold text-lg mb-4">
        Ihr lokaler Partner in {city}
      </h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-[#0F5B78]">{data.projects}+</p>
          <p className="text-xs text-slate-600 mt-1">Projekte in {city}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600">{data.responseTime}</p>
          <p className="text-xs text-slate-600 mt-1">Anfahrtszeit</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-600">100%</p>
          <p className="text-xs text-slate-600 mt-1">Vor-Ort Service</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-4 text-center">
        Servicebereich: {data.serviceArea}
      </p>
    </div>
  );
}
