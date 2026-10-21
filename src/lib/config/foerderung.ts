/**
 * Heizungsförderung KfW 458 (BEG EM) — Single Source of Truth.
 *
 * Quelle ausschließlich kfw.de/458, abgerufen 21.10.2026 (HEC-159).
 * ACHTUNG: Klimageschwindigkeitsbonus und Kostendeckel der 1. Wohneinheit
 * sinken ab 01.02.2027 halbjährlich (01.02./01.08.) — Werte dann hier anpassen
 * und Website neu bauen.
 */

export const FOERDERUNG = {
  stand: "Oktober 2026",
  quelleUrl: "https://www.kfw.de/458",

  /** Grundförderung für alle Antragsteller */
  grund: 0.3,

  /** Klimageschwindigkeitsbonus (nur Selbstnutzer, Austausch alter fossiler Heizung) */
  klima: 0.16,
  /** Letzter Antragstag, an dem `klima` gilt; danach sinkt er um 4 Punkte je Halbjahr */
  klimaGueltigBis: "31.01.2027",
  /** Ab diesem Antragsdatum gibt es keinen Klimageschwindigkeitsbonus mehr */
  klimaEntfaelltAb: "01.08.2028",

  /** Einkommensbonus nach zu versteuerndem Haushaltsjahreseinkommen (ohne Kind) */
  einkommen: [
    { bis: 30_000, satz: 0.4 },
    { bis: 40_000, satz: 0.3 },
    { bis: 50_000, satz: 0.1 },
  ],
  /** Mit minderjährigem Kind (Kindergeldberechtigung) steigen alle Grenzen um diesen Betrag */
  kindZuschlag: 10_000,

  /** Höchstfördersatz */
  max: 0.8,

  /** Förderfähige Kosten */
  kostenErsteWe: 28_000,
  kostenWe2bis6: 15_000,
  kostenAbWe7: 8_000,
} as const;

/** Förderfähige Höchstkosten für ein Gebäude mit `einheiten` Wohneinheiten */
export function foerderfaehigeKosten(einheiten: number): number {
  const n = Math.max(1, Math.floor(einheiten));
  const zweiBisSechs = Math.min(Math.max(n - 1, 0), 5);
  const abSieben = Math.max(n - 6, 0);
  return FOERDERUNG.kostenErsteWe + zweiBisSechs * FOERDERUNG.kostenWe2bis6 + abSieben * FOERDERUNG.kostenAbWe7;
}

/** Einkommensbonus für ein zu versteuerndes Haushaltseinkommen (`null` = über allen Grenzen) */
export function einkommensbonus(einkommen: number, mitKind: boolean): number {
  const zuschlag = mitKind ? FOERDERUNG.kindZuschlag : 0;
  const stufe = FOERDERUNG.einkommen.find((s) => einkommen <= s.bis + zuschlag);
  return stufe ? stufe.satz : 0;
}

const prozent = (wert: number) => `${Math.round(wert * 100)} %`;
const euro = (wert: number) => `${wert.toLocaleString("de-DE")} €`;

/** Fertige Textbausteine für Seiten und Blog */
export const FOERDER_TEXT = {
  max: prozent(FOERDERUNG.max), // "80 %"
  grund: prozent(FOERDERUNG.grund), // "30 %"
  klima: prozent(FOERDERUNG.klima), // "16 %"
  einkommenMax: prozent(FOERDERUNG.einkommen[0].satz), // "40 %"
  kostenEfh: euro(FOERDERUNG.kostenErsteWe), // "28.000 €"
  maxZuschussEfh: euro(Math.round(FOERDERUNG.kostenErsteWe * FOERDERUNG.max)), // "22.400 €"
  klimaHinweis: `${prozent(FOERDERUNG.klima)} bei Antrag bis ${FOERDERUNG.klimaGueltigBis}, danach halbjährlich sinkend`,
} as const;
