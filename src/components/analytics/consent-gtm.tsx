"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "./google-tag-manager";
import {
  CONSENT_CHANGE_EVENT,
  GTM_ID,
  isConsentEnabled,
  pushConsentDefault,
  pushConsentUpdate,
  readConsent,
  trackEvent,
} from "@/lib/consent";

/**
 * Lädt GTM ausschließlich nach Zustimmung (Variante A, HEC-145).
 * Vorher werden keine Anfragen an Google gestellt.
 */
export function ConsentGtm() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!isConsentEnabled()) return;

    const activate = () => {
      if (readConsent() !== "granted") return;
      pushConsentDefault();
      pushConsentUpdate("granted");
      setLoad(true);
    };

    activate();
    window.addEventListener(CONSENT_CHANGE_EVENT, activate);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, activate);
  }, []);

  useEffect(() => {
    if (!load) return;

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackEvent("phone_click");
      else if (href.includes("wa.me/")) trackEvent("whatsapp_click");
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [load]);

  return load ? <GoogleTagManager gtmId={GTM_ID} /> : null;
}
