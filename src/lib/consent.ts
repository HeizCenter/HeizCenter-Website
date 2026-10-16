/**
 * Einwilligung für Statistik (Google Analytics 4) und Marketing (Google Ads),
 * beide über den Google Tag Manager.
 *
 * Variante A (HEC-145): GTM wird erst nach Zustimmung zu mindestens einer
 * Kategorie geladen. Ohne gültige NEXT_PUBLIC_GTM_ID ist das Modul inaktiv.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export const CONSENT_STORAGE_KEY = "hc_consent";
export const CONSENT_CHANGE_EVENT = "hc-consent-change";
export const CONSENT_OPEN_EVENT = "hc-consent-open";

// v2: Kategorien Statistik + Marketing (v1 kannte nur Marketing → neu fragen)
const CONSENT_VERSION = 2;
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export interface ConsentState {
  analytics: boolean;
  ads: boolean;
}

export const CONSENT_NONE: ConsentState = { analytics: false, ads: false };
export const CONSENT_ALL: ConsentState = { analytics: true, ads: true };

interface StoredConsent extends ConsentState {
  v: number;
  ts: number;
}

export function isConsentEnabled(): boolean {
  // Strenges Format: die ID landet in einem Inline-Script; Platzhalter zählt nicht
  return /^GTM-[A-Z0-9]{4,12}$/.test(GTM_ID) && GTM_ID !== "GTM-XXXXXXX";
}

export function hasAnyConsent(state: ConsentState | null): boolean {
  return !!state && (state.analytics || state.ads);
}

/** Gespeicherte Auswahl, oder null wenn keine gültige (fehlt, alt, andere Version). */
export function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.v !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.ts > CONSENT_MAX_AGE_MS) return null;
    return { analytics: parsed.analytics === true, ads: parsed.ads === true };
  } catch {
    return null;
  }
}

export function saveConsent(state: ConsentState): void {
  const previous = readConsent();
  try {
    const value: StoredConsent = { v: CONSENT_VERSION, ...state, ts: Date.now() };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Speicher blockiert: Auswahl wird nicht gespeichert, GTM lädt dann nicht (fail-closed)
  }

  // Auch nach abgelaufener Einwilligung können alte Google-Cookies liegen
  if (!state.analytics) deleteGoogleStorage(ANALYTICS_KEY);
  if (!state.ads) deleteGoogleStorage(ADS_KEY);

  const revoked = (previous?.analytics && !state.analytics) || (previous?.ads && !state.ads);
  if (revoked) {
    // Geladenes GTM lässt sich nicht entladen → Seite mit neuer Auswahl neu laden
    pushConsentUpdate(state);
    window.location.reload();
    return;
  }

  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: state }));
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
 * Statistik → analytics_storage, Marketing → ad_storage + ad_user_data.
 * Personalisierte Werbung (Remarketing) ist nicht Teil der Einwilligung und
 * bleibt abgelehnt — erst mit Banner, DSE und neuer CONSENT_VERSION erweitern.
 */
export function pushConsentUpdate(state: ConsentState): void {
  const ads = state.ads ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: "denied",
    analytics_storage: state.analytics ? "granted" : "denied",
  });
}

/** Ereignis an GTM — nur nach Zustimmung, nie mit personenbezogenen Daten. */
export function trackEvent(event: string, params: Record<string, string> = {}): void {
  if (!isConsentEnabled() || !hasAnyConsent(readConsent())) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export type LeadFormType = "kontakt" | "angebot" | "notdienst";

export function trackLead(formType: LeadFormType): void {
  trackEvent("generate_lead", { form_type: formType });
}

const ANALYTICS_KEY = /^(_ga|_gid|_gat)/;
const ADS_KEY = /^_gcl/;

function deleteGoogleStorage(pattern: RegExp): void {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0].trim();
    if (!pattern.test(name)) return;
    domains.forEach((domain) => {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`;
    });
  });
  try {
    Object.keys(localStorage)
      .filter((key) => pattern.test(key))
      .forEach((key) => localStorage.removeItem(key));
  } catch {
    // Speicher blockiert: nichts zu löschen
  }
}
