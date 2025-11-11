"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Anrufen",
      href: "tel:+49821123456",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/49821123456",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "E-Mail",
      href: "mailto:info@heizcenter.de",
      color: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Action buttons */}
      <div
        className={cn(
          "flex flex-col gap-3 mb-3 transition-all duration-300",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        )}
      >
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className={cn(
              "flex items-center gap-3 text-white font-bold px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105",
              action.color
            )}
            onClick={() => setIsOpen(false)}
          >
            {action.icon}
            <span className="hidden sm:inline text-sm">{action.label}</span>
          </a>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-slate-700 hover:bg-slate-600 rotate-45"
            : "bg-blue-600 hover:bg-blue-700"
        )}
        aria-label={isOpen ? "Schließen" : "Kontaktoptionen öffnen"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Plus className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}
