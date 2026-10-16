"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "./google-tag-manager";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_STORAGE_KEY,
  GTM_ID,
  hasAnyConsent,
  isConsentEnabled,
  pushConsentDefault,
  pushConsentUpdate,
  readConsent,
  trackEvent,
} from "@/lib/consent";

/**
 * Lädt GTM ausschließlich nach Zustimmung zu Statistik und/oder Marketing
 * (Variante A, HEC-145). Vorher werden keine Anfragen an Google gestellt.
 */
export function ConsentGtm() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!isConsentEnabled()) return;

    const activate = () => {
      const state = readConsent();
      if (!state || !hasAnyConsent(state)) return;
      pushConsentDefault();
      pushConsentUpdate(state);
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

    // Änderung in einem anderen Tab: mit neuer Auswahl neu laden
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_STORAGE_KEY) window.location.reload();
    };

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("storage", onStorage);
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("storage", onStorage);
    };
  }, [load]);

  return load ? <GoogleTagManager gtmId={GTM_ID} /> : null;
}
