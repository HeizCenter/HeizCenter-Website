"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CONSENT_ALL,
  CONSENT_NONE,
  CONSENT_OPEN_EVENT,
  isConsentEnabled,
  readConsent,
  saveConsent,
  type ConsentState,
} from "@/lib/consent";

const BUTTON_CLASS = "min-w-[140px] bg-[#0F5B78] text-white hover:bg-[#0c4a62]";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selection, setSelection] = useState<ConsentState>(CONSENT_NONE);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const firstCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isConsentEnabled()) return;
    if (readConsent() === null) setOpen(true);

    const reopen = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setSelection(readConsent() ?? CONSENT_NONE);
      setShowDetails(true);
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

  // Nach „Auswahl anpassen“ bzw. Öffnen über den Footer: Fokus auf die erste Kategorie
  useEffect(() => {
    if (open && showDetails) firstCheckboxRef.current?.focus();
  }, [open, showDetails]);

  if (!open) return null;

  const choose = (state: ConsentState) => {
    setOpen(false);
    setShowDetails(false);
    returnFocusRef.current?.focus();
    saveConsent(state);
  };

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-text"
      className="fixed inset-x-0 bottom-0 z-40 max-h-[85vh] overflow-y-auto border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] focus:outline-none"
    >
      <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl text-sm text-slate-700">
          <p id="consent-title" className="mb-1 font-semibold text-slate-900">
            Cookies für Statistik und Werbung
          </p>
          <p id="consent-text">
            Mit Ihrer Zustimmung nutzen wir über den Google Tag Manager Google Analytics (Statistik: wie unsere Website
            genutzt wird) und Google Ads (Marketing: ob unsere Anzeigen zu Anfragen führen). Dabei setzt Google Cookies
            und überträgt Daten an Google, auch in die USA. Ohne Zustimmung wird nichts davon geladen. Sie können Ihre
            Auswahl jederzeit über „Cookie-Einstellungen“ im Fußbereich ändern. Mehr in unserer{" "}
            <Link href="/datenschutz" className="text-[#0F5B78] underline">
              Datenschutzerklärung
            </Link>
            .
          </p>

          {showDetails ? (
            <fieldset className="mt-3 space-y-2">
              <legend className="sr-only">Kategorien auswählen</legend>
              <label className="flex items-start gap-2">
                <input
                  ref={firstCheckboxRef}
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#0F5B78]"
                  checked={selection.analytics}
                  onChange={(e) => setSelection({ ...selection, analytics: e.target.checked })}
                />
                <span>
                  <strong>Statistik</strong> – Google Analytics: Auswertung, welche Seiten wie genutzt werden (mit pseudonymer Kennung).
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#0F5B78]"
                  checked={selection.ads}
                  onChange={(e) => setSelection({ ...selection, ads: e.target.checked })}
                />
                <span>
                  <strong>Marketing</strong> – Google Ads: Messung, ob eine Anzeige zu einer Anfrage, einem Anruf oder
                  einer WhatsApp-Nachricht geführt hat. Keine personalisierte Werbung.
                </span>
              </label>
            </fieldset>
          ) : (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="mt-2 text-[#0F5B78] underline"
            >
              Auswahl anpassen
            </button>
          )}
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button type="button" onClick={() => choose(CONSENT_NONE)} className={BUTTON_CLASS}>
            Ablehnen
          </Button>
          {showDetails && (
            <Button type="button" onClick={() => choose(selection)} className={BUTTON_CLASS}>
              Auswahl speichern
            </Button>
          )}
          <Button type="button" onClick={() => choose(CONSENT_ALL)} className={BUTTON_CLASS}>
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
