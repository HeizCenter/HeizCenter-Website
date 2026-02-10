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
- [x] **Interne Verlinkung massiv ausgebaut** (12 Blog-Artikel + 6 Service-Seiten + 3 Location-Seiten)

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

### Blog-Content
- [x] **Solarthermie-Artikel** komplett überarbeitet (KI-Stil → professionelles Copywriting)
- [x] **Solarthermie-Duplikat bereinigt** — 2 Artikel zu 1 zusammengeführt, 301-Redirects

---

## Letzte Git-Commits

```
8381d16 fix(seo): shorten title tags to max 60 characters
cbba8ce refactor(blog): rewrite Solarthermie article for readability
23b192e feat(seo): activate FAQSchema on all service pages
75f72cf fix(layout): adjust services grid for 5 columns
00f2592 feat(standorte): add Solarthermie service to all 26 location pages
2e1b985 feat(partner): replace placeholder logos with official brand logos
69d175f fix(forms): prevent data loss and improve GDPR consent UX
8dd8415 feat: Add HeizCenter favicon and apple-icon
```

---

## Offene Punkte

- [x] SEO-Audit durchgeführt (2026-02-04)
- [x] FAQSchema auf Service-Seiten aktiviert
- [ ] ~~Aktuelle SEO-Rankings dokumentieren~~ → SEO_AUDIT_REPORT.md
- [ ] Google Search Console Analyse
- [ ] Performance-Audit (Core Web Vitals)
- [ ] Odoo-Integration Status prüfen
- [ ] Blog-Content-Plan für 2026
- [x] Title-Tags auf 60 Zeichen kürzen (SEO Quick Win) ✅ 2026-02-04
- [x] Solarthermie-Duplikat bereinigen (Content Cannibalization) ✅ 2026-02-10
- [x] FAQPage Schema für Blog-Artikel implementieren (blog/[slug]/page.tsx) ✅ 2026-02-10
- [x] Interne Verlinkung stärken (6 Aufgaben, alle erledigt) ✅ 2026-02-10
- [ ] OG-Images für Service-Seiten erstellen (SEO Quick Win)
- [ ] Alt-Texte optimieren (SEO Quick Win)
- [ ] Nach Deployment: Interne Links mit Screaming Frog / Sitebulb validieren

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
| [SEO_AUDIT_REPORT.md](SEO_AUDIT_REPORT.md) | SEO-Audit Februar 2026 |

---

## Session-Archiv

### Session 2026-02-10 (Interne Verlinkung stärken)

#### Ziel
Robuste interne Link-Architektur aufbauen: Jede wichtige Seite erhält 3-5 kontextuelle interne Links, thematische Cluster für Google signalisieren.

#### Completed

**Aufgabe 1+2+6: Blog-Artikel (12 Stück)**
- [x] Alle 12 Blog-Artikel mit Service-Links (min 2), Standort-Links (min 1) und Cross-Links (2-3) versehen
- [x] Link-Stil: `class="text-[#0F5B78] font-medium hover:underline"` (Brand-Teal)
- [x] Artikel: waermepumpe-kosten, gasheizung-kosten, badsanierung-kosten, foerderung-heizung, barrierefreies-bad-planen, gasheizung-verbot, heizung-vergleich, fussbodenheizung-kosten, heizung-entlueften, barrierefreies-bad-kosten, bafa-foerderung-solarthermie, waermepumpe-altbau

**Aufgabe 3+4: Service-Seiten (6 Stück)**
- [x] "Ratgeber & Tipps" Section mit 3 Blog-Cards (BookOpen Icon)
- [x] "[Service] in Ihrer Nähe" Section mit 3 Standort-Cards (MapPin Icon)
- [x] Seiten: waermepumpe, heizung, sanitaer, klimaanlage, solar, foerderung

**Aufgabe 5: Standort-Seiten (3 Hauptseiten)**
- [x] "Ratgeber für Hausbesitzer" Section mit 3 Blog-Cards
- [x] Inline-Links zu /waermepumpe, /heizung, /sanitaer, /klimaanlage im Prosa-Content
- [x] Breadcrumb-Fix: "memmingen" → "Memmingen", "ulm" → "Ulm"
- [x] Seiten: augsburg, ulm, memmingen

**Build-Verifizierung**
- [x] `npm run build` erfolgreich (ein Fix: fehlender Link-Import in sanitaer/page.tsx)

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/lib/api/blog.ts` | +~60 interne Links in 12 Blog-Artikeln (Service, Standort, Cross-Links) |
| `src/app/waermepumpe/page.tsx` | +BookOpen, MapPin Imports; +Ratgeber & Standort Sections |
| `src/app/heizung/page.tsx` | +BookOpen, MapPin Imports; +Ratgeber & Standort Sections |
| `src/app/sanitaer/page.tsx` | +Link, BookOpen, MapPin Imports; +Ratgeber & Standort Sections |
| `src/app/klimaanlage/page.tsx` | +BookOpen, MapPin Imports; +Ratgeber & Standort Sections |
| `src/app/solar/page.tsx` | +BookOpen, MapPin Imports; +Ratgeber & Standort Sections |
| `src/app/foerderung/page.tsx` | +BookOpen, MapPin Imports; +Ratgeber & Standort Sections |
| `src/app/standorte/augsburg/page.tsx` | +Link, BookOpen Imports; +Ratgeber Section; +4 Inline-Links |
| `src/app/standorte/ulm/page.tsx` | +Link, BookOpen Imports; +Ratgeber Section; +4 Inline-Links; Breadcrumb-Fix |
| `src/app/standorte/memmingen/page.tsx` | +Link, BookOpen Imports; +Ratgeber Section; +4 Inline-Links; Breadcrumb-Fix |

#### Nächste Schritte
- [ ] Änderungen committen und deployen
- [ ] Nach Deployment: Interne Links mit Screaming Frog validieren
- [ ] Restliche 23 Standort-Seiten optional mit Ratgeber-Section versehen

---

### Session 2026-02-10 (FAQPage Schema für alle Blog-Artikel)

#### Completed
- [x] **FAQPage Schema auf allen 24 Blog-Artikeln implementiert**
  - `BlogPost` Interface um optionales `faqs`-Feld erweitert
  - `blog/[slug]/page.tsx` rendert `<FAQSchema>` konditionell
  - Build erfolgreich verifiziert
  - Agents: `frontend-dev` (3 Batches)

- [x] **Phase 1: Schema für 7 Posts mit existierenden FAQ-Sektionen** (IDs 13-19)
  - FAQ-Daten aus HTML-Content extrahiert (plain text, HTML-Tags entfernt)
  - 52 FAQ-Einträge

- [x] **Phase 2: FAQ-Sektionen + Schema für alle 17 verbleibenden Posts** (IDs 1-5, 7-12, 20-25)
  - Neue FAQ HTML-Sektionen geschrieben (deutsch, fachlich korrekt)
  - FAQ-Daten als `faqs` Array hinzugefügt
  - ~115 zusätzliche FAQ-Einträge

#### Blog-Artikel mit FAQ-Schema (~167 FAQs total)
| Batch | Post IDs | FAQs |
|-------|----------|------|
| Existierend | 13, 14, 15, 16, 17, 18, 19 | ~52 |
| Batch 1 | 1, 2, 3, 4, 5, 7 | ~48 (8 pro Post) |
| Batch 2 | 8, 9, 10, 11, 12 | ~34 (6-8 pro Post) |
| Batch 3 | 20, 21, 22, 23, 24, 25 | ~36 (6 pro Post) |

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/lib/api/blog.ts` | +`faqs` Feld in Interface, +~167 FAQ-Einträge auf 24 Posts, +17 HTML FAQ-Sektionen |
| `src/app/blog/[slug]/page.tsx` | +FAQSchema Import, konditionelles Rendering |

#### Nächste Schritte
- [ ] Nach Deployment: Google Rich Results Test validieren
- [ ] In 2-4 Wochen: FAQ Rich Snippets in Google Search Console prüfen

---

### Session 2026-02-10 (Solarthermie-Duplikat bereinigt)

#### Problem
- Zwei Blog-Artikel zum Thema Solarthermie-Kosten kannibalisierten sich gegenseitig
- `/blog/solarthermie-kosten-2025` (ID 6, Nov 2025) — praxisnah, aber BAFA-veraltet
- `/blog/solarthermie-kosten-wirtschaftlichkeit-2025` (ID 23, Feb 2026) — analytisch, KfW-korrekt
- Keiner der beiden war bei Google indexiert ("Gefunden – zurzeit nicht indexiert")

#### Completed
- [x] **Beide Artikel zu einem zusammengeführt** → `/blog/solarthermie-kosten-2026`
  - Einzigartige Inhalte aus Artikel 6 in Artikel 23 integriert:
    - Praxisbeispiel "Familie Kraus aus Königsbrunn" (lokaler E-E-A-T Bezug)
    - Flachkollektor vs. Röhrenkollektor Vergleich mit Preistabelle
    - "Mein Tipp" Empfehlung (First-Person-Stimme)
    - Voraussetzungen fürs Dach (Geeignet/Schwierig Check)
    - Solarthermie vs. Photovoltaik Entscheidungshilfe
    - Heizungskombinationen (+Gas, +Pellet, +Wärmepumpe, +Öl)
  - Lesezeit: 14 Min. (11 + 10 → 14 durch Zusammenführung)
  - Agents: `frontend-dev`, `seo-specialist`

- [x] **Alle BAFA-Referenzen auf KfW aktualisiert** (seit Jan 2024 über KfW)
- [x] **Jahreszahl durchgehend auf 2026** aktualisiert
- [x] **Artikel 6 komplett entfernt** aus blog.ts
- [x] **301-Redirects** für beide alte URLs eingerichtet
- [x] **Meta-Title auf 57 Zeichen** optimiert (inkl. "- HeizCenter Ratgeber" Suffix)
- [x] **Build erfolgreich** verifiziert

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/lib/api/blog.ts` | Artikel 23 → zusammengeführter Artikel, Artikel 6 entfernt |
| `next.config.mjs` | +2 Redirect-Einträge (301) |

#### Neue URL-Struktur
| Alt | Neu | Status |
|-----|-----|--------|
| `/blog/solarthermie-kosten-2025` | `/blog/solarthermie-kosten-2026` | 301 Redirect |
| `/blog/solarthermie-kosten-wirtschaftlichkeit-2025` | `/blog/solarthermie-kosten-2026` | 301 Redirect |

#### Offene Punkte aus dieser Session
- [ ] FAQPage Schema für Blog-Seiten implementieren (`blog/[slug]/page.tsx` unterstützt es nicht)
- [ ] Nach Deployment: Google Rich Results Test validieren
- [ ] Nach 2-4 Wochen: Indexierungsstatus in Google Search Console prüfen

---

### Session 2026-02-04 (Blog Artikel Rewrite)

**Commit:** `cbba8ce refactor(blog): rewrite Solarthermie article for readability`

#### Problem
- Blog-Artikel "Solarthermie Kosten und Wirtschaftlichkeit 2025" war unlesbar
- KI-Stil mit 90% Bullet-Listen
- 6 Emojis im Text (✅❌📍💡⚠️)
- 19 Minuten Lesezeit (zu lang)
- Veraltete Fakten zur Förderung

#### Completed
- [x] **Komplette Neuschreibung** des Artikels
  - Professioneller Fließtext statt Listen-Overload
  - Alle Emojis entfernt
  - Lesezeit von 19 auf 11 Minuten reduziert (-42%)
  - Fakten aktualisiert (KfW statt BAFA seit Jan 2024)
  - Strategische Tabellen für Kosten/Amortisation beibehalten

#### Änderungen
| Aspekt | Vorher | Nachher |
|--------|--------|---------|
| Lesezeit | 19 Min | 11 Min |
| Emojis | 6 Stück | 0 |
| Stil | Bullet-Listen | Fließtext |
| Zeilen | 353 | 138 (-215) |
| Datum | 2025-01-12 | 2026-02-04 |

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/lib/api/blog.ts` | Artikel ID 23 komplett neu geschrieben |

#### Verifizierte Fakten
- KfW-Förderung: 30% Basis, bis 70% max
- Mindestflächen: 9m² Flachkollektoren, 7m² Röhrenkollektoren
- Antrag vor Vertragsabschluss erforderlich
- Steuerbonus §35c als Alternative (20% über 3 Jahre)

---

### Session 2026-02-04 (SEO-Audit & FAQSchema)

#### Completed
- [x] **Umfassendes SEO-Audit** durchgeführt (Bewertung: 7.5/10)
  - Schema.org Markup: 9/10 (exzellent)
  - Local SEO: 9/10 (24 Stadt-Landingpages)
  - Technisches SEO: 8/10 (robots.txt, sitemap, canonical)
  - Agents: `seo-specialist`

- [x] **FAQSchema auf Service-Seiten aktiviert**
  - 5 Seiten aktualisiert: waermepumpe, heizung, sanitaer, klimaanlage, solar
  - 39 FAQ-Einträge mit Schema.org Markup
  - Build erfolgreich verifiziert
  - Agents: `frontend-dev`

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/app/waermepumpe/page.tsx` | +FAQSchema Import, includeSchema=false |
| `src/app/heizung/page.tsx` | +FAQSchema Import, includeSchema=false |
| `src/app/sanitaer/page.tsx` | +FAQSchema Import, includeSchema=false |
| `src/app/klimaanlage/page.tsx` | +FAQSchema Import, includeSchema=false |
| `src/app/solar/page.tsx` | +FAQSchema Import, includeSchema=false |

#### SEO Quick Wins identifiziert
| Issue | Impact | Status |
|-------|--------|--------|
| FAQSchema aktivieren | FAQ Rich Results | ✅ Erledigt |
| Title-Tags kürzen | Nicht abgeschnitten | ⏳ Offen |
| OG-Images erstellen | Social Sharing | ⏳ Offen |
| Alt-Texte optimieren | Bilder-SEO | ⏳ Offen |

#### Nächste Schritte
1. ~~Änderungen committen und deployen~~ ✅
2. Nach 1-2 Wochen: Google Rich Results Test validieren
3. ~~Weitere Quick Wins umsetzen~~ ✅ Title-Tags

---

### Session 2026-02-04 (Title-Tags optimiert)

**Commit:** `8381d16 fix(seo): shorten title tags to max 60 characters`

#### Completed
- [x] **10 Title-Tags optimiert** (alle unter 60 Zeichen)
  - Service-Seiten: waermepumpe, heizung, sanitaer, klimaanlage, solar
  - Info-Seiten: ueber-uns, foerderung, standorte
  - Location-Seiten: augsburg, bobingen
  - Agents: `seo-specialist`, `frontend-dev`

#### Änderungen
| Seite | Vorher | Nachher |
|-------|--------|---------|
| Wärmepumpe | 73 → 60 | "& Memmingen" entfernt |
| Heizung | 74 → 60 | "& Memmingen" entfernt |
| Sanitär | 67 → 60 | "Badsanierung" → "Bad" |
| Klimaanlage | 81 → 57 | "& Wartung" entfernt |
| Solar | 82 → 60 | "Bis" entfernt |
| Über uns | 75 → 60 | "Ihr regionaler" entfernt |
| Förderung | 70 → 55 | Jahr → 2026 |
| Standorte | 63 → 56 | Umstrukturiert |
| Augsburg | 89 → 53 | "Klimaanlage + Experte" entfernt |
| Bobingen | 83 → 52 | "Hauptstandort + Klimaanlage" entfernt |

---

### Session 2026-02-04 (Solarthermie Standort-Seiten)

**Commit:** `00f2592 feat(standorte): add Solarthermie service to all 26 location pages`

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
