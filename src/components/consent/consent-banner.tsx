"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CONSENT_OPEN_EVENT,
  isConsentEnabled,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isConsentEnabled()) return;
    if (readConsent() === null) setOpen(true);

    const reopen = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  // Fokus auf den Dialog; Platz unten freihalten, damit Footer-Links (Impressum) erreichbar bleiben
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    dialog.focus();
    const reserve = () => {
      document.body.style.paddingBottom = `${dialog.offsetHeight}px`;
    };
    reserve();
    const observer = new ResizeObserver(reserve);
    observer.observe(dialog);
    return () => {
      observer.disconnect();
      document.body.style.paddingBottom = "";
    };
  }, [open]);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    setOpen(false);
    returnFocusRef.current?.focus();
    saveConsent(choice);
  };

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-text"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] focus:outline-none"
    >
      <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl text-sm text-slate-700">
          <p id="consent-title" className="mb-1 font-semibold text-slate-900">
            Cookies für Werbung
          </p>
          <p id="consent-text">
            Mit Ihrer Zustimmung nutzen wir den Google Tag Manager und Google Ads, um den Erfolg unserer Anzeigen zu
            messen. Dabei setzt Google Cookies und überträgt Daten an Google, auch in die USA. Ohne Zustimmung wird nichts
            davon geladen. Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ im Fußbereich ändern. Mehr in
            unserer{" "}
            <Link href="/datenschutz" className="text-[#0F5B78] underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            onClick={() => choose("denied")}
            className="min-w-[140px] bg-[#0F5B78] text-white hover:bg-[#0c4a62]"
          >
            Ablehnen
          </Button>
          <Button
            type="button"
            onClick={() => choose("granted")}
            className="min-w-[140px] bg-[#0F5B78] text-white hover:bg-[#0c4a62]"
          >
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
