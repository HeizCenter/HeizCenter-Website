"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyCtaProps {
  variant?: "phone" | "whatsapp" | "emergency";
  showAfterScroll?: number;
}

export function StickyCta({
  variant = "phone",
  showAfterScroll = 300,
}: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll, isDismissed]);

  const variants = {
    phone: {
      bg: "bg-[#0F5B78] hover:bg-[#0F5B78]",
      icon: <Phone className="h-5 w-5" />,
      text: "Jetzt anrufen",
      href: "tel:+49821123456",
    },
    whatsapp: {
      bg: "bg-green-600 hover:bg-green-700",
      icon: <MessageCircle className="h-5 w-5" />,
      text: "WhatsApp",
      href: "https://wa.me/49821123456",
    },
    emergency: {
      bg: "bg-red-600 hover:bg-red-700",
      icon: <Phone className="h-5 w-5" />,
      text: "Notfall: 24/7",
      href: "tel:+49821123456",
    },
  };

  const config = variants[variant];

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <div className="relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 hover:bg-slate-700 transition-colors"
          aria-label="Schließen"
        >
          <X className="h-4 w-4" />
        </button>

        <Link
          href={config.href}
          className={cn(
            "flex items-center gap-3 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-200 hover:scale-105",
            config.bg
          )}
        >
          {config.icon}
          <span className="hidden sm:inline">{config.text}</span>
        </Link>
      </div>
    </div>
  );
}
