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

### Standort-Seiten
- [x] **Solarthermie** zu allen 26 Standort-Seiten hinzugefügt (fehlte komplett!)

---

## Letzte Git-Commits

```
2e1b985 feat(partner): replace placeholder logos with official brand logos
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

### Session 2026-02-04 (Solarthermie Standort-Seiten)

#### Problem
- **Solarthermie** fehlte als Service auf **allen 26 Standort-Seiten**
- Aktuelle Services: Wärmepumpe, Heizung, Sanitär, Klimaanlage (nur 4 statt 5)
- Solarthermie existierte aber auf `/solar` Seite und anderen Bereichen

#### Completed
- [x] Alle 26 Standort-Seiten mit Solarthermie-Service aktualisiert
- [x] Sun-Icon aus lucide-react importiert
- [x] SEO-Keywords "Solarthermie [Stadt]" hinzugefügt
- [x] Build und Lint erfolgreich verifiziert

#### Geänderte Dateien (26)

**Hauptstandorte:**
| Datei | Änderung |
|-------|----------|
| `src/app/standorte/bobingen/page.tsx` | +Solarthermie Service, +Keyword |
| `src/app/standorte/gutenzell-huerbel/page.tsx` | +Solarthermie Service, +Keyword |

**Service-Städte:**
- augsburg, ulm, memmingen, neu-ulm, kaufbeuren, guenzburg
- friedberg, schwabmuenchen, koenigsbrunn, gersthofen, neusaess, stadtbergen
- aichach, landsberg, mindelheim, bad-woerishofen, ottobeuren, leutkirch
- bad-wurzach, laupheim, blaustein, erbach, krumbach, klosterlechfeld

#### Service-Eintrag (Pattern)
```typescript
{
  title: "Solarthermie",
  description: "Solarthermie-Anlagen für [Stadt]. Bis 70% KfW-Förderung.",
  icon: Sun,
  href: "/solar",
}
```

---

### Session 2026-02-04 (Partner Logos)

**Commit:** `2e1b985 feat(partner): replace placeholder logos with official brand logos`

#### Completed
- [x] Partner-Seite analysiert - Placeholder-Logos (Text auf Rechtecken) identifiziert
- [x] Echte Partner-Logos von Wikimedia Commons heruntergeladen
- [x] Build erfolgreich verifiziert
- [x] Änderungen auf GitHub gepusht

#### Logo-Quellen (Wikimedia Commons)
| Partner | Datei | Quelle |
|---------|-------|--------|
| Viessmann | viessmann.svg | Viessmann-logo.svg |
| Vaillant | vaillant.svg | Vaillant-logo-2021.svg (mit Hasen-Maskottchen) |
| Buderus | buderus.svg | Buderus-logo.svg |
| Wolf | wolf.svg | Wolf_Logo.svg |
| Stiebel Eltron | stiebel-eltron.svg | Stiebel_Eltron_logo.svg |
| Bosch | bosch.svg | Bosch-Logo.svg (rot) |
| Daikin | daikin.svg | DAIKIN_logo.svg |
| Junkers | junkers.svg | Eigenes Text-Logo (Marke 2019 eingestellt) |

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `public/images/partners/viessmann.svg` | Echtes Viessmann-Logo (rot) |
| `public/images/partners/vaillant.svg` | Echtes Vaillant-Logo mit Hase |
| `public/images/partners/buderus.svg` | Echtes Buderus-Logo |
| `public/images/partners/wolf.svg` | Echtes Wolf-Logo |
| `public/images/partners/stiebel-eltron.svg` | Echtes Stiebel Eltron-Logo |
| `public/images/partners/bosch.svg` | Echtes BOSCH-Logo (rot) |
| `public/images/partners/daikin.svg` | Echtes Daikin-Logo |
| `public/images/partners/junkers.svg` | Text-basiertes "Junkers by BOSCH" |

#### Betroffene Seiten
- `/partner` - Logo-Grid zeigt alle 8 Logos
- `/partner/viessmann` - Hero-Section mit Viessmann-Logo
- `/partner/vaillant` - Hero-Section mit Vaillant-Logo
- `/partner/buderus` - Hero-Section mit Buderus-Logo
- `/partner/wolf` - Hero-Section mit Wolf-Logo
- `/partner/stiebel-eltron` - Hero-Section mit Stiebel-Logo
- `/partner/junkers` - Hero-Section mit Junkers-Logo
- `/partner/bosch` - Hero-Section mit Bosch-Logo
- `/partner/daikin` - Hero-Section mit Daikin-Logo

#### Hinweise
- Backup der alten Placeholder-Logos in `public/images/partners/backup/`
- Junkers-Marke wurde 2019 in Bosch Home Comfort integriert

### Session 2026-02-04 (Initial)
- [x] PROGRESS.md erstellt und initial befüllt
- [x] `/heizcenter` Command mit Session-Management erweitert
- [x] `/handoff` Command mit Projekt-Erkennung aktualisiert
