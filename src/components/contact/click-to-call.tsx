"use client";

import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClickToCallProps {
  phoneNumber: string;
  displayNumber?: string;
  label?: string;
  variant?: "button" | "link" | "badge";
  size?: "sm" | "md" | "lg";
  className?: string;
  emergency?: boolean;
}

export function ClickToCall({
  phoneNumber,
  displayNumber,
  label = "Jetzt anrufen",
  variant = "button",
  size = "md",
  className,
  emergency = false,
}: ClickToCallProps) {
  // Format phone number for tel: link (remove spaces, dashes, etc.)
  const telLink = `tel:${phoneNumber.replace(/\s|-|\(|\)/g, "")}`;
  const display = displayNumber || phoneNumber;

  const sizeClasses = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-5 py-3",
    lg: "text-lg px-6 py-4",
  };

  if (variant === "link") {
    return (
      <a
        href={telLink}
        className={cn(
          "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium",
          className
        )}
      >
        <Phone className="h-4 w-4" />
        {display}
      </a>
    );
  }

  if (variant === "badge") {
    return (
      <a
        href={telLink}
        className={cn(
          "inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full px-4 py-2 hover:bg-blue-50 transition-colors",
          emergency && "border-red-600 text-red-600 hover:bg-red-50",
          className
        )}
      >
        <Phone className="h-4 w-4" />
        <span className="text-sm">{display}</span>
      </a>
    );
  }

  // Default: button variant
  return (
    <a
      href={telLink}
      className={cn(
        "inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-200 hover:scale-105",
        emergency
          ? "bg-red-600 hover:bg-red-700 text-white"
          : "bg-blue-600 hover:bg-blue-700 text-white",
        sizeClasses[size],
        className
      )}
    >
      <Phone className="h-5 w-5" />
      <div className="text-left">
        {label && <div className="text-xs opacity-90">{label}</div>}
        <div className="font-bold">{display}</div>
      </div>
    </a>
  );
}

interface EmergencyHotlineProps {
  phoneNumber?: string;
  className?: string;
}

export function EmergencyHotline({
  phoneNumber = "+49 821 123456",
  className,
}: EmergencyHotlineProps) {
  return (
    <div
      className={cn(
        "bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="bg-red-600 text-white rounded-full p-3 flex-shrink-0">
          <Phone className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-red-800 font-semibold mb-1">
            24/7 Notdienst
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s|-|\(|\)/g, "")}`}
            className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            {phoneNumber}
          </a>
          <p className="text-xs text-slate-600 mt-1">
            Bei Heizungsausfall, Rohrbruch oder Gasgeruch
          </p>
        </div>
      </div>
    </div>
  );
}

interface LocationPhoneProps {
  location: "Augsburg" | "Ulm" | "Memmingen";
  variant?: "compact" | "detailed";
}

export function LocationPhone({ location, variant = "compact" }: LocationPhoneProps) {
  const phones = {
    Augsburg: "+49 821 123456",
    Ulm: "+49 731 234567",
    Memmingen: "+49 8331 45678",
  };

  const phone = phones[location];
  const telLink = `tel:${phone.replace(/\s/g, "")}`;

  if (variant === "detailed") {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <p className="text-sm text-slate-600 mb-2">{location}</p>
        <a
          href={telLink}
          className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
        >
          <Phone className="h-5 w-5" />
          {phone}
        </a>
        <p className="text-xs text-slate-500 mt-2">Mo-Fr: 8:00 - 17:00 Uhr</p>
      </div>
    );
  }

  return (
    <a
      href={telLink}
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
    >
      <Phone className="h-4 w-4" />
      <span className="font-semibold">
        {location}: {phone}
      </span>
    </a>
  );
}
