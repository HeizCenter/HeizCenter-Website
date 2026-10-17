"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { CONSENT_CHANGE_EVENT, isConsentEnabled, readConsent } from "@/lib/consent";

/**
 * Vercel Web Analytics gehört zur Kategorie „Statistik“ (HEC-144/145):
 * Das Skript liest Geräteinformationen aus (§ 25 TDDDG) und läuft daher nur
 * nach Zustimmung. Ohne Einwilligungsverwaltung (keine GTM-ID) wie bisher.
 */
export function ConsentVercelAnalytics() {
  const [enabled, setEnabled] = useState(!isConsentEnabled());

  useEffect(() => {
    if (!isConsentEnabled()) return;

    const check = () => setEnabled(readConsent()?.analytics === true);
    check();
    window.addEventListener(CONSENT_CHANGE_EVENT, check);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, check);
  }, []);

  return enabled ? <Analytics /> : null;
}
