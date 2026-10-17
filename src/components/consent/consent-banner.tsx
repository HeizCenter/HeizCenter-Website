"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CONSENT_ALL,
  CONSENT_NONE,
  CONSENT_OPEN_EVENT,
  isConsentEnabled,
  readConsent,
  saveConsent,
  type ConsentState,
} from "@/lib/consent";

// „Ablehnen“ und „Akzeptieren“ müssen gleichwertig aussehen (kein Nudging) — eine Klasse für alle
const BUTTON_CLASS = "w-full bg-[#0F5B78] text-white hover:bg-[#0c4a62]";

const CATEGORIES: { key: keyof ConsentState; title: string; text: string }[] = [
  {
    key: "analytics",
    title: "Statistik",
    text: "Google Analytics (pseudonyme Kennung) und Vercel Web Analytics (ohne Cookies): welche Seiten wie genutzt werden.",
  },
  {
    key: "ads",
    title: "Marketing",
    text: "Google Ads: ob eine Anzeige zu einer Anfrage, einem Anruf oder einer WhatsApp-Nachricht geführt hat. Keine personalisierte Werbung.",
  },
];

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selection, setSelection] = useState<ConsentState>(CONSENT_NONE);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const firstCheckboxRef = useRef<HTMLButtonElement>(null);

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
      document.body.style.paddingBottom = `${dialog.offsetHeight + 16}px`;
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
      className="fixed inset-x-0 bottom-0 z-40 max-h-[85vh] overflow-y-auto rounded-t-2xl border border-slate-200 bg-white p-5 shadow-[0_-8px_30px_rgba(15,91,120,0.18)] focus:outline-none md:inset-x-auto md:bottom-4 md:left-4 md:w-[440px] md:rounded-2xl md:shadow-[0_8px_30px_rgba(15,91,120,0.22)]"
    >
      <p id="consent-title" className="mb-2 text-base font-bold text-slate-900">
        Cookies für Statistik und Werbung
      </p>
      <p id="consent-text" className="text-sm leading-relaxed text-slate-700">
        Mit Ihrer Zustimmung messen wir, wie unsere Website genutzt wird (Google Analytics, Vercel), und ob unsere
        Anzeigen wirken (Google Ads). Dabei gehen Daten an Google, auch in die USA. Ohne Zustimmung wird nichts davon
        geladen. Widerrufen können Sie jederzeit über „Cookie-Einstellungen“ unten auf der Seite.
      </p>

      <p className="mt-2 text-sm">
        <Link href="/datenschutz" className="text-[#0F5B78] underline underline-offset-2">
          Datenschutzerklärung
        </Link>
        {!showDetails && (
          <>
            <span className="mx-2 text-slate-400" aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="text-[#0F5B78] underline underline-offset-2"
            >
              Auswahl anpassen
            </button>
          </>
        )}
      </p>

      {showDetails && (
        <fieldset className="mt-3 space-y-1 border-t border-slate-100 pt-2">
          <legend className="sr-only">Kategorien auswählen</legend>
          {CATEGORIES.map(({ key, title, text }, index) => (
            <label
              key={key}
              htmlFor={`consent-${key}`}
              className="flex cursor-pointer items-start gap-3 rounded-lg px-1 py-2 hover:bg-slate-50"
            >
              <Checkbox
                id={`consent-${key}`}
                ref={index === 0 ? firstCheckboxRef : undefined}
                checked={selection[key]}
                onCheckedChange={(checked) => setSelection({ ...selection, [key]: checked === true })}
                className="mt-0.5 h-5 w-5 border-[#0F5B78] data-[state=checked]:bg-[#0F5B78]"
              />
              <span className="text-sm text-slate-700">
                <strong className="text-slate-900">{title}</strong> – {text}
              </span>
            </label>
          ))}
        </fieldset>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button type="button" onClick={() => choose(CONSENT_NONE)} className={BUTTON_CLASS}>
          Ablehnen
        </Button>
        <Button type="button" onClick={() => choose(CONSENT_ALL)} className={BUTTON_CLASS}>
          Alle akzeptieren
        </Button>
        {showDetails && (
          <Button type="button" onClick={() => choose(selection)} className={`col-span-2 ${BUTTON_CLASS}`}>
            Auswahl speichern
          </Button>
        )}
      </div>
    </div>
  );
}
