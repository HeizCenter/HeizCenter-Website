"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, TrendingUp, Users } from "lucide-react";

interface UrgencyBannerProps {
  variant?: "limited-slots" | "trending" | "seasonal";
}

export function UrgencyBanner({ variant = "limited-slots" }: UrgencyBannerProps) {
  const [slotsLeft, setSlotsLeft] = useState(3);

  useEffect(() => {
    // Simulate dynamic slot counting (in production, fetch from API)
    const randomSlots = Math.floor(Math.random() * 4) + 2; // 2-5 slots
    setSlotsLeft(randomSlots);
  }, []);

  const variants = {
    "limited-slots": {
      icon: <Clock className="h-5 w-5" />,
      text: `Nur noch ${slotsLeft} Termine diese Woche verfügbar`,
      subtext: "Sichern Sie sich jetzt Ihren Wunschtermin",
      bg: "bg-orange-100",
      border: "border-orange-300",
      textColor: "text-orange-900",
      buttonBg: "bg-orange-600 hover:bg-orange-700",
    },
    trending: {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "Aktuell stark nachgefragt: Wärmepumpen-Installation",
      subtext: "Profitieren Sie von bis zu 40% BEG-Förderung",
      bg: "bg-green-100",
      border: "border-green-300",
      textColor: "text-green-900",
      buttonBg: "bg-green-600 hover:bg-green-700",
    },
    seasonal: {
      icon: <Users className="h-5 w-5" />,
      text: "Heizungs-Check vor dem Winter",
      subtext: "Jetzt Wartung buchen und beruhigt in die kalte Jahreszeit starten",
      bg: "bg-[#0F5B78]/10",
      border: "border-[#0F5B78]/30",
      textColor: "text-[#0F5B78]",
      buttonBg: "bg-[#0F5B78] hover:bg-[#0F5B78]",
    },
  };

  const config = variants[variant];

  return (
    <div
      className={`${config.bg} ${config.border} border-l-4 rounded-r-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
    >
      <div className="flex items-start gap-3">
        <div className={`${config.textColor} mt-0.5`}>{config.icon}</div>
        <div>
          <p className={`font-bold ${config.textColor}`}>{config.text}</p>
          <p className="text-sm text-slate-700 mt-1">{config.subtext}</p>
        </div>
      </div>

      <Link
        href="/kontakt"
        className={`${config.buttonBg} text-white font-bold px-6 py-2 rounded-lg transition-colors whitespace-nowrap flex-shrink-0`}
      >
        Jetzt anfragen
      </Link>
    </div>
  );
}
