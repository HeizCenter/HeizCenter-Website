"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: "button" | "floating" | "badge";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  phoneNumber = "4982349665900", // Format: country code + number without +
  message = "Hallo, ich interessiere mich für Ihre Dienstleistungen.",
  variant = "button",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-3",
    lg: "text-lg px-6 py-4",
  };

  if (variant === "floating") {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-200 hover:scale-110",
          className
        )}
        aria-label="WhatsApp kontaktieren"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  if (variant === "badge") {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-4 py-2 transition-colors shadow-md",
          className
        )}
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-sm">WhatsApp</span>
      </a>
    );
  }

  // Default: button variant
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp Chat starten</span>
    </a>
  );
}

interface WhatsAppContactCardProps {
  title?: string;
  description?: string;
  phoneNumber?: string;
  className?: string;
}

export function WhatsAppContactCard({
  title = "Schnelle Antwort per WhatsApp",
  description = "Schreiben Sie uns direkt und erhalten Sie innerhalb weniger Minuten eine Antwort.",
  phoneNumber = "4982349665900",
  className,
}: WhatsAppContactCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="bg-green-600 text-white rounded-full p-3 flex-shrink-0">
          <MessageCircle className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 text-green-900">{title}</h3>
          <p className="text-sm text-green-800 mb-4">{description}</p>
          <WhatsAppButton phoneNumber={phoneNumber} size="md" />
        </div>
      </div>
    </div>
  );
}

interface ServiceWhatsAppProps {
  service: "waermepumpe" | "heizung" | "sanitaer" | "klimaanlage" | "notfall";
  phoneNumber?: string;
}

export function ServiceWhatsApp({
  service,
  phoneNumber = "4982349665900",
}: ServiceWhatsAppProps) {
  const services = {
    waermepumpe: {
      message: "Hallo, ich interessiere mich für eine Wärmepumpe. Können Sie mich beraten?",
      label: "Wärmepumpe anfragen",
    },
    heizung: {
      message: "Hallo, ich benötige Informationen zu Heizungsinstallation/Wartung.",
      label: "Heizung anfragen",
    },
    sanitaer: {
      message: "Hallo, ich interessiere mich für Sanitär- und Badlösungen.",
      label: "Sanitär anfragen",
    },
    klimaanlage: {
      message: "Hallo, ich möchte mehr über Klimaanlagen erfahren.",
      label: "Klimaanlage anfragen",
    },
    notfall: {
      message: "Notfall! Ich benötige dringend einen Techniker.",
      label: "Notfall melden",
    },
  };

  const config = services[service];

  return (
    <WhatsAppButton
      phoneNumber={phoneNumber}
      message={config.message}
      variant="button"
      size="md"
    />
  );
}
