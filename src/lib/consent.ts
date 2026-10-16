/**
 * Einwilligung für Marketing-Dienste (Google Tag Manager / Google Ads).
 *
 * Variante A (HEC-145): GTM wird erst nach Zustimmung geladen.
 * Ohne gültige NEXT_PUBLIC_GTM_ID ist das gesamte Modul inaktiv.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export const CONSENT_STORAGE_KEY = "hc_consent";
export const CONSENT_CHANGE_EVENT = "hc-consent-change";
export const CONSENT_OPEN_EVENT = "hc-consent-open";

const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type ConsentChoice = "granted" | "denied";

interface StoredConsent {
  v: number;
  ads: ConsentChoice;
  ts: number;
}

export function isConsentEnabled(): boolean {
  // Strenges Format: die ID landet in einem Inline-Script; Platzhalter zählt nicht
  return /^GTM-[A-Z0-9]{4,12}$/.test(GTM_ID) && GTM_ID !== "GTM-XXXXXXX";
}

/** Gespeicherte Auswahl, oder null wenn keine gültige (fehlt, alt, andere Version). */
export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.v !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.ts > CONSENT_MAX_AGE_MS) return null;
    return parsed.ads === "granted" ? "granted" : "denied";
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice): void {
  const previous = readConsent();
  try {
    const value: StoredConsent = { v: CONSENT_VERSION, ads: choice, ts: Date.now() };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Speicher blockiert: Auswahl wird nicht gespeichert, GTM lädt dann nicht (fail-closed)
  }

  if (choice === "denied") {
    // Auch nach abgelaufener Einwilligung können alte Google-Cookies liegen
    deleteGoogleStorage();
    if (previous === "granted") {
      // Widerruf: geladenes GTM lässt sich nicht entladen → Seite ohne GTM neu laden
      pushConsentUpdate("denied");
      window.location.reload();
      return;
    }
  }

  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

function gtag(..._args: unknown[]): void {
  window.dataLayer = window.dataLayer || [];
  // Consent Mode erwartet das arguments-Objekt, kein Array
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

let defaultPushed = false;

/** Consent Mode v2: Standard „denied“ setzen — einmal, vor dem Laden von GTM. */
export function pushConsentDefault(): void {
  if (defaultPushed) return;
  defaultPushed = true;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

/**
 * Die Einwilligung deckt nur Conversion-Messung für Google Ads ab.
 * Personalisierte Werbung (Remarketing) und Analyse bleiben abgelehnt —
 * erst mit Banner, DSE und neuer CONSENT_VERSION erweitern.
 */
export function pushConsentUpdate(choice: ConsentChoice): void {
  gtag("consent", "update", {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

/** Ereignis an GTM — nur nach Zustimmung, nie mit personenbezogenen Daten. */
export function trackEvent(event: string, params: Record<string, string> = {}): void {
  if (!isConsentEnabled() || readConsent() !== "granted") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export type LeadFormType = "kontakt" | "angebot" | "notdienst";

export function trackLead(formType: LeadFormType): void {
  trackEvent("generate_lead", { form_type: formType });
}

const GOOGLE_KEY = /^(_gcl|_ga|_gid|_gat)/;

function deleteGoogleStorage(): void {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0].trim();
    if (!GOOGLE_KEY.test(name)) return;
    domains.forEach((domain) => {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`;
    });
  });
  try {
    Object.keys(localStorage)
      .filter((key) => GOOGLE_KEY.test(key))
      .forEach((key) => localStorage.removeItem(key));
  } catch {
    // Speicher blockiert: nichts zu löschen
  }
}
