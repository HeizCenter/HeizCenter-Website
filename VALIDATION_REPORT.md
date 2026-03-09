# Content Validation Report - 2026-02-10

## Refactoring: Zentrale Kontaktdaten (CONTACT Import)

### Anlass
11 halluzinierte Telefonnummern in Blog-Artikeln und Komponenten entdeckt.
Ursache: Kontaktdaten waren in 66+ Dateien hardcoded statt aus `contact.ts` importiert.

### Geprüfte Änderungen
- **67 Dateien** refactored: Alle hardcoded Telefonnummern, Emails und WhatsApp-Links durch `CONTACT.*` Imports ersetzt
- **209 Verwendungen** von `CONTACT.*` über 64 Dateien (vorher: 0)
- **0 hardcoded Kontaktdaten** verbleiben (nur in `contact.ts` als Source of Truth)

### Gate 1: Fachliche Prüfung
- **Prüfer:** Automatisierter Audit (grep)
- **Status:** APPROVED
- **Anmerkungen:** Keine fachlichen Inhalte geändert, nur Refactoring der Datenquelle

### Gate 2: Kontaktdaten-Validierung
- **Prüfer 1:** 5 frontend-dev Agents (parallele Umsetzung)
- **Prüfer 2:** Orchestrator (unabhängiger finaler grep-Audit)
- **Gefundene Kontaktdaten nach Refactoring:**
  - Telefon Display: `CONTACT.PHONE_DISPLAY` ("+49 8234 9665900") - nur in contact.ts
  - Telefon Link: `CONTACT.PHONE_LINK` ("+4982349665900") - nur in contact.ts
  - Telefon Schema: `CONTACT.PHONE_SCHEMA` ("+4982349665900") - nur in contact.ts
  - WhatsApp: `CONTACT.PHONE_WHATSAPP` ("4982349665900") - nur in contact.ts
  - WhatsApp Mobil: `4915111100331` - korrekte separate Mobilnummer (header, kontakt)
  - Email: `CONTACT.EMAIL` ("service@heizcenter.de") - nur in contact.ts
- **Übereinstimmung mit contact.ts:** JA
- **Status:** APPROVED

### Entfernte halluzinierte Nummern (11 total)
| Falsche Nummer | Dateien | Commit |
|---|---|---|
| `08234 / 967 975 0` | blog.ts (3x) | e8cf09a |
| `08234 / 90 89 70` | blog.ts (2x) | e8cf09a |
| `+4982347799620` | solar-process-section.tsx | 59d0f83 |
| `+49 731 234567` | click-to-call.tsx | 1252033 |
| `+49 8331 45678` | click-to-call.tsx | 1252033 |
| `4982349665901` | impressum/page.tsx | 1252033 |
| `+49 8234 966590078` | contact-form.tsx, quote-form.tsx | 1252033 |

### Build-Verifizierung
- `npx next build` - ERFOLGREICH (clean build nach .next cache clear)
- Alle 67 geänderte Dateien kompilieren fehlerfrei

### Ergebnis
**COMMIT FREIGEGEBEN**

### Architektur-Verbesserung
**Vorher:** 176+ hardcoded Kontaktdaten in 66 Dateien, `contact.ts` existierte aber wurde von 0 Dateien importiert
**Nachher:** 1 Single Source of Truth (`contact.ts`), 209 Referenzen via `CONTACT.*` in 64 Dateien

---

# Content Validation Report - 2026-02-10 (Content-Audit Korrekturen)

## Geprüfte Änderungen

| Datei | Was wurde geändert |
|-------|-------------------|
| `src/app/sanitaer/page.tsx` | KfW 455-B Referenzen aktualisiert (Programm eingestellt 01.01.2025) |
| `src/lib/api/blog.ts` | 14 Korrekturen: KfW-Programme, BAFA→KfW, CO2-Preis, GEG-Fristen, Wirkungsgrade, Kollektorflächen, Schornsteinfeger |
| `src/app/foerderung/page.tsx` | Jahreszahlen 2025→2026, Stand aktualisiert |
| `src/app/heizung/page.tsx` | Solarthermie-Einsparung 30%→25%, Förder-Claim präzisiert |

## Gate 1: Fachliche Prüfung

- **Prüfer:** hvac-content
- **Status:** APPROVED (nach Korrektur)
- **Anmerkungen:**
  - 8/9 Korrekturen beim ersten Durchlauf genehmigt
  - 1 Korrektur abgelehnt: Kollektorfläche war auf 9m²/7m² gesetzt, korrekt ist 7m²/7m² (BEG EM TMA, Bestand)
  - Nachkorrektur auf 7m²/7m² durchgeführt → alle 9 Korrekturen genehmigt

## Gate 2: Kontaktdaten-Validierung

- **Prüfer 1:** Hauptagent — grep-Abgleich mit contact.ts
- **Prüfer 2:** security-reviewer — Unabhängige Gegenprüfung
- **Gefundene Kontaktdaten:** Keine direkt eingebetteten Kontaktdaten in geänderten Dateien
- **Halluzinierte Nummern gesucht:** `08234 / 967 975 0`, `08234 / 90 89 70` — NICHT gefunden
- **Übereinstimmung mit contact.ts:** Nicht anwendbar (keine Kontaktdaten in Content-Dateien)
- **Status:** APPROVED

## Ergebnis

**COMMIT FREIGEGEBEN**

## Korrektur-Übersicht (19 Issues behoben)

| # | Prio | Seite | Korrektur | Status |
|---|------|-------|-----------|--------|
| 2 | MITTEL | /foerderung | Jahreszahl 2025→2026 | Erledigt |
| 4 | HOCH | /sanitaer | KfW 455-B Feature Card aktualisiert | Erledigt |
| 5 | HOCH | /sanitaer | KfW 455-B FAQ + CTA aktualisiert | Erledigt |
| 6 | HOCH | Blog Badsanierung | KfW 455-B Budget korrigiert (pausiert) | Erledigt |
| 7 | MITTEL | Blog Heizungsvergleich | GEG Gas-Übergangsregel präzisiert | Erledigt |
| 8 | MITTEL | Blog Heizungsvergleich | CO2-Preis 2026/27 Korridor ergänzt | Erledigt |
| 10 | MITTEL | Blog Heizungsvergleich | GEG-Fristen "ab" → "spätestens" | Erledigt |
| 11 | MITTEL | Blog Solarthermie | Kollektorfläche Flach: 7m² (BEG EM TMA) | Erledigt |
| 12 | MITTEL | Blog Solarthermie | Kollektorfläche Röhren: 7m² (BEG EM TMA) | Erledigt |
| 14 | HOCH | Blog BEG | KfW 261→358/359, 150.000→120.000€ | Erledigt |
| 15 | GERING | /heizung | Solarthermie 30%→25% Einsparung | Erledigt |
| 16 | GERING | /heizung | "70% KfW-Förderung" präzisiert auf Heizungstausch | Erledigt |
| 18 | GERING | Blog Heizungsvergleich | Hybrid-Schornsteinfeger-Hinweis ergänzt | Erledigt |
| 20 | MITTEL | Blog Heizungsvergleich | Ölheizung Wirkungsgrad 96-98%→90-95% | Erledigt |
| 21 | HOCH | Blog Solarthermie | BAFA→KfW (6 Stellen aktualisiert) | Erledigt |

## Nicht behoben (bewusst zurückgestellt)

| # | Grund |
|---|-------|
| 1 | Copyright — bereits erledigt |
| 3 | /foerderung KfW 455-B — nicht bestätigt im Code |
| 9 | Blog Effizienzhaus-Stufen — nicht bestätigt im Code |
| 13 | Gas-Etagenheizung Klimabonus — Geringfügig |
| 17 | Max-Fördersatz korrekt (70%) |
| 19 | Amortisation korrekt im Kontext |
| 22 | Blog-Datum 2025→2026 — Separate Session (25 Artikel + URL-Impact) |
| 23 | "20 Jahre Erfahrung" — Externe Verifizierung nötig (HRB 39683) |
| 24 | Blog-Datum — Teil von Issue 22 |

---

# Content Validation Report - 2026-02-10 (Content-Updates: Schall, BEG, GMG)

## Geprüfte Änderungen

| Datei | Was wurde geändert |
|-------|-------------------|
| `src/app/waermepumpe/page.tsx` | FAQ Lautstärke aktualisiert + neuer Info-Block: Schallgrenzwerte 2026 mit Tabelle |
| `src/app/foerderung/page.tsx` | Neuer Info-Block: BEG-Budget 2026 (Kürzung Gesamt, Erhöhung BEG-EM) |
| `src/app/heizung/page.tsx` | GEG-Hinweis im Gasheizung-Abschnitt: Beimischungspflicht ab 2029 + GMG-Ausblick |

## Gate 1: Fachliche Prüfung

- **Prüfer:** hvac-content
- **Status:** APPROVED (nach Korrektur)
- **Anmerkungen:**
  - Änderung 1 (Schallgrenzwerte): APPROVED — Tabellenwerte korrekt, Rechtsgrundlage verifiziert
  - Änderung 2 (BEG-Budget): APPROVED — Zahlen durch Bundeshaushalt-Quellen gedeckt
  - Änderung 3 (GEG/GMG): Initial REJECTED — Vermischung von 65%-Regel (Neuheizungen) und 15%-Beimischungspflicht (Bestandsheizungen). Korrektur durchgeführt: Jetzt klar auf Beimischungspflicht für bestehende Gas-/Ölheizungen fokussiert (15% ab 2029, 30% ab 2035, 100% ab 2045). Nach Korrektur APPROVED.

## Gate 2: Kontaktdaten-Validierung

- **Prüfer 1:** Orchestrator — Alle Änderungen enthalten keine Kontaktdaten
- **Prüfer 2:** security-reviewer — Unabhängige Gegenprüfung aller 3 Dateien
- **Gefundene Kontaktdaten:** Keine (alle Kontakt-Links gehen über /kontakt mit Query-Parametern)
- **Übereinstimmung mit contact.ts:** N/A (keine Kontaktdaten in geänderten Dateien)
- **Status:** APPROVED

## Quellen der Content-Updates

| Thema | Quellen |
|-------|---------|
| Schallgrenzwerte 2026 | energie-experten.org, cci-dialog.de, elektro.net, haustec.de |
| BEG-Budget 2026 | enter.de/blog/bundeshaushalt, t-online.de, sparkasse.de |
| GEG/GMG | energie-experten.org, energiezukunft.eu, ee-experten.de |

## Build-Verifizierung
- `npm run build` — ERFOLGREICH (2x: nach Implementierung + nach Korrektur)

## Ergebnis

**COMMIT FREIGEGEBEN**

---

# Content Validation Report - 2026-03-09 (Neuer Blog-Artikel: Klimaanlage nachrüsten 2026)

## Geprüfte Änderungen

| Datei | Was wurde geändert |
|-------|-------------------|
| `src/lib/api/blog.ts` | Neuer Artikel id:28 "Klimaanlage nachrüsten: Kosten, Ablauf & Tipps 2026" (~3.000 Wörter) |
| `src/lib/api/blog.ts` | Backlink in Wärmepumpe-Vorteile-Artikel (~Zeile 2970) |
| `src/lib/api/blog.ts` | Backlink in Klimaanlage-Kosten-Artikel (Fazit ~Zeile 7241) |

## Gate 1: Fachliche Prüfung

- **Prüfer:** hvac-content
- **Status:** APPROVED (nach Korrekturen)
- **Anmerkungen:**
  - R32 als "Standard 2026" korrigiert → R290 für <3kW seit 2025 erwähnt
  - ChemKlimaschutzV Kategorie-I-Zertifikat: "seit 2023" → korrekt "seit 2015"
  - Passive Kühlung: "2-3°C" → "3-5°C" Absenkung
  - Betriebskosten: "80-200€" → "50-300€/Jahr" Bandbreite
  - Alle Korrekturen in finalen Artikel eingearbeitet → APPROVED

## Gate 2: Kontaktdaten-Validierung

- **Prüfer 1:** Orchestrator — grep-Abgleich mit contact.ts
- **Prüfer 2:** security-reviewer — Unabhängige Gegenprüfung
- **Gefundene Kontaktdaten:** Alle via Template-Literals (`${CONTACT.PHONE_LINK}`, `${CONTACT.PHONE_DISPLAY}`, `${CONTACT.EMAIL}`)
- **Hardcoded Kontaktdaten:** Keine
- **Halluzinierte Nummern gesucht:** KEINE gefunden
- **Übereinstimmung mit contact.ts:** JA (ausschließlich CONTACT.* Referenzen)
- **Status:** APPROVED

## SEO-Optimierungen (seo-specialist Review)

- Title: 75 Zeichen → 52 Zeichen (unter 60-Zeichen-Limit)
- Tags: "Nachrüstung" → "Klimaanlage Wohnung nachrüsten", "Klimaanlage Altbau" → "Klimaanlage Altbau nachrüsten"
- 8 FAQ-Fragen für PAA/Featured Snippet optimiert
- Excerpt: 124 Zeichen (unter 155-Zeichen-Limit)
- Slug: `klimaanlage-nachruesten-2026-kosten-installation-tipps`

## Build-Verifizierung

- `npm run lint` — ERFOLGREICH (keine Fehler)
- `npm run build` — ERFOLGREICH (83 Seiten generiert, keine Build-Fehler)

## Ergebnis

**COMMIT FREIGEGEBEN**
