# HEIZcenter Website - Progress

> Dieses Dokument wird via `/handoff` aktualisiert.
> Neue Session starten: `"HEIZcenter Website - weiter mit @PROGRESS.md"`

---

## Projekt-Status

| | |
|---|---|
| **Status** | LIVE |
| **Domain** | heizcenter.de |
| **Stack** | Next.js 14+, TypeScript, Tailwind |
| **Hosting** | Vercel |
| **Commits seit 2025** | 180+ |

---

## Seiten-Struktur

### Service-Seiten
- `/waermepumpe` - Wärmepumpen (SEO Score: 95/100)
- `/heizung` - Heizungssysteme
- `/sanitaer` - Sanitär
- `/klimaanlage` - Klimaanlagen
- `/solar` - Solaranlagen
- `/notdienst` - 24h Notdienst
- `/wartungsvertrag` - Wartungsverträge

### Standorte
- `/standorte/bobingen` - Hauptstandort Bayern
- `/standorte/gutenzell-huerbel` - Standort Baden-Württemberg
- `/standorte/[stadt]` - 24 Service-Städte

### Info-Seiten
- `/ueber-uns` - Über uns
- `/kontakt` - Kontaktformular
- `/faq` - Häufige Fragen
- `/foerderung` - BEG/KfW Förderung
- `/karriere` - Jobs
- `/blog` - Ratgeber-Artikel
- `/checklisten` - Checklisten
- `/rechner` - Kostenrechner
- `/partner` - Partner-Bereich

### Legal
- `/impressum` - Impressum
- `/datenschutz` - Datenschutz
- `/agb` - AGB
- `/cookie-hinweis` - Cookie-Hinweis

---

## Letzte Arbeiten (2025-2026)

### SEO-Optimierungen
- [x] LocalBusiness Schema auf allen Seiten
- [x] FAQPage Schema implementiert
- [x] Öffnungszeiten korrigiert
- [x] streetAddress in Schemas ergänzt
- [x] Internal Links von Blog zu Location Pages
- [x] Legal Pages indexierbar (TMG §5 / DSGVO)

### Forms & UX
- [x] GDPR Consent UX verbessert
- [x] Data Loss Prevention in Formularen
- [x] Validierungsfehler bei optionalen Feldern behoben

### Branding
- [x] Favicon und Apple-Icon hinzugefügt
- [x] Footer Copyright 2026 aktualisiert
- [x] UG Rechtsform-Referenz entfernt
- [x] Partner-Logos: Echte Marken-Logos von Wikimedia Commons integriert

---

## Letzte Git-Commits

```
69d175f fix(forms): prevent data loss and improve GDPR consent UX
8dd8415 feat: Add HeizCenter favicon and apple-icon
d0e05d8 fix: Remove outdated UG legal form reference
38acdf4 fix: Update footer copyright year to 2026
0215721 fix(legal): remove noindex from legal pages
923f0de feat(seo): add internal links blog → location pages
83da32a fix: add streetAddress to LocalBusiness schemas
cb82593 feat(seo): FAQPage Schema zu Hauptstandorten
a417b73 fix(seo): Korrigiere Öffnungszeiten
```

---

## Offene Punkte

- [ ] Aktuelle SEO-Rankings dokumentieren
- [ ] Google Search Console Analyse
- [ ] Performance-Audit (Core Web Vitals)
- [ ] Odoo-Integration Status prüfen
- [ ] Blog-Content-Plan für 2026

---

## Bekannte Issues

_Keine aktuell dokumentiert - bei Bedarf hier ergänzen_

---

## Quick Commands

```bash
# Development
cd /Users/Q285389/Desktop/jedAI/ClaudeCode/HeizCenter-Website
npm run dev

# Build & Test
npm run build
npm run lint

# Deploy (Vercel)
vercel --prod

# Git Status
git status
git log --oneline -10
```

---

## Dokumentation

| Dokument | Inhalt |
|----------|--------|
| [CONTENT_AUDIT.md](CONTENT_AUDIT.md) | Content-Qualitätsanalyse |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deployment-Anleitung |
| [QA_CHECKLIST.md](QA_CHECKLIST.md) | QA-Checkliste |
| [SCHEMA_IMPLEMENTATION_SUMMARY.md](SCHEMA_IMPLEMENTATION_SUMMARY.md) | Schema.org Übersicht |
| [ODOO_INTEGRATION_PLAN.md](ODOO_INTEGRATION_PLAN.md) | Odoo Backend-Plan |

---

## Session-Archiv

### Session 2026-02-04 (Partner Logos)
- [x] Partner-Seite analysiert - Placeholder-Logos identifiziert
- [x] Echte Partner-Logos von Wikimedia Commons heruntergeladen:
  - Viessmann, Vaillant, Buderus, Wolf, Stiebel Eltron, Bosch, Daikin
  - Junkers: Text-Logo erstellt (Marke 2019 in Bosch integriert)
- [x] Build erfolgreich verifiziert
- **Dateien:** `public/images/partners/*.svg` (8 Logos aktualisiert)

### Session 2026-02-04 (Initial)
- [x] PROGRESS.md erstellt und initial befüllt
- [x] `/heizcenter` Command mit Session-Management erweitert
- [x] `/handoff` Command mit Projekt-Erkennung aktualisiert
