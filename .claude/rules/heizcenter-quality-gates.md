---
description: Mandatory content quality gates for HEIZcenter website — fachliche Pruefung, Kontaktdaten 4-Augen-Prinzip, Validierungsreport
paths:
  - "**"
---

# Quality Gates (Pre-Commit)

Diese Regeln sind VERBINDLICH fuer alle Content-Aenderungen an HEIZcenter-Dateien.
Hintergrund: Es wurden halluzinierte Telefonnummern in Blog-Artikeln gefunden.

## Gate 1: Fachliche Pruefung (Content Review)

Gilt fuer: Alle Aenderungen an Content-Dateien (blog.ts, Service-Seiten, Standort-Seiten, FAQ-Inhalte)

- VOR jedem Commit muss der `hvac-content` Agent alle inhaltlichen Aenderungen auf fachliche Korrektheit pruefen
- Pruefpunkte: Technische Fakten, Foerderzahlen, Gesetzesreferenzen (GEG, BEG, KfW), Preisangaben, Leistungswerte
- Ergebnis: Explizites APPROVED oder REJECTED mit Begruendung

## Gate 2: Kontaktdaten 4-Augen-Prinzip

Gilt fuer: ALLE Aenderungen die Telefonnummern, E-Mail-Adressen, Adressen oder Oeffnungszeiten enthalten

- Zwei unabhaengige Pruefungen erforderlich:
  1. Der aendernde Agent prueft gegen `src/lib/config/contact.ts` (Single Source of Truth)
  2. Ein zweiter Agent (`security-reviewer` oder `tester`) validiert unabhaengig alle Kontaktdaten im geaenderten Code
- NIEMALS Telefonnummern, E-Mails oder Adressen frei erfinden
- IMMER aus `contact.ts` kopieren oder die dort definierten Konstanten importieren

## Gate 3: Validierungsreport

Nach Abschluss beider Gates VALIDATION_REPORT.md erstellen/aktualisieren:

```markdown
## Content Validation Report - [DATUM]

### Gepruefte Aenderungen
- [Datei]: [Was wurde geaendert]

### Gate 1: Fachliche Pruefung
- Pruefer: hvac-content
- Status: APPROVED / REJECTED
- Anmerkungen: [Details]

### Gate 2: Kontaktdaten-Validierung
- Pruefer 1: [Agent-Name] — Abgleich mit contact.ts
- Pruefer 2: [Agent-Name] — Unabhaengige Gegenpruefung
- Gefundene Kontaktdaten: [Alle Tel/Email/Adressen auflisten]
- Uebereinstimmung mit contact.ts: JA / NEIN
- Status: APPROVED / REJECTED

### Ergebnis
COMMIT FREIGEGEBEN / COMMIT BLOCKIERT
```

## Referenz-Kontaktdaten

```
Telefon:  +49 8234 9665900
E-Mail:   service@heizcenter.de
Config:   src/lib/config/contact.ts
```
