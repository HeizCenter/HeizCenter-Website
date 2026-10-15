"use client";

import { isConsentEnabled, openConsentSettings } from "@/lib/consent";

export function CookieSettingsLink({ className }: { className?: string }) {
  if (!isConsentEnabled()) return null;

  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie-Einstellungen
    </button>
  );
}
