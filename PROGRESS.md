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
- [x] **Blog-Datum 2025→2026** — 22 Artikel aktualisiert (Slugs, Titel, Daten, Inhalte, Cross-Links, FAQs)
  - 21 Slug-Änderungen inkl. BAFA→KfW Umbenennung
  - 22 neue 301-Redirects in next.config.mjs
  - 9 Service-/Standort-Seiten: Blog-Links aktualisiert
  - Daten verteilt über Jan-Feb 2026 (SEO: frischer Content-Signal)
  - 79 "2025"-Referenzen bewusst beibehalten (CO₂-Zeitreihen, historische Policy-Daten)

---

## Letzte Git-Commits

```
5bb9556 feat(blog): migrate 22 articles from 2025 to 2026
bf53fb7 fix(content): correct misleading claims on landing pages (8 issues)
f97de4f fix(contact): add WhatsApp mobile number to contact.ts
7530726 refactor: centralize all contact data via CONTACT imports
1252033 fix(content): remove 5 more hallucinated phone numbers
59d0f83 fix(content): replace hallucinated phone number in solar CTA
e8cf09a fix(content): replace hallucinated phone numbers with correct contact
4f75e99 feat(seo): add internal linking, FAQ schema, and 301 redirects
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
- [x] Content-Audit: 19 fachliche Korrekturen (KfW, GEG, BAFA→KfW, etc.) ✅ 2026-02-10
- [x] Halluzinierte Telefonnummern entfernt (12 Stück) ✅ 2026-02-10
- [x] Kontaktdaten zentralisiert: 67 Dateien auf CONTACT.* Import umgestellt ✅ 2026-02-10
- [x] Quality Gates in CLAUDE.md verankert (4-Augen-Prinzip, VALIDATION_REPORT) ✅ 2026-02-10
- [x] Content-Audit: Blog-Datum 2025→2026 (22 Artikel, 21 Slug-Changes, 22 Redirects) ✅ 2026-02-10
- [x] Content-Audit: 8 irreführende Claims auf Landing Pages korrigiert (bf53fb7) ✅ 2026-02-10
- [x] Content-Update: WP-Schallgrenzwerte 10 dB(A) ab 2026 auf /waermepumpe (HIGH) ✅ 2026-02-10
- [x] Content-Update: BEG-Budget Kürzung ~12 Mrd. auf /foerderung (MEDIUM) ✅ 2026-02-10
- [x] Content-Update: GEG-Reform → GMG Hinweis auf /heizung (MEDIUM) ✅ 2026-02-10
- [ ] Content-Audit: "20 Jahre Erfahrung" extern verifizieren (HRB 39683)
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
| [VALIDATION_REPORT.md](VALIDATION_REPORT.md) | Content-Validierungsreport (Quality Gates) |

---

## Session-Archiv

### Session 2026-02-10 (Content-Updates: Schallgrenzwerte, BEG-Budget, GMG)

#### Ziel
3 offene Content-Updates umsetzen: WP-Schallgrenzwerte 2026 (HIGH), BEG-Budget Kürzung (MEDIUM), GEG→GMG Hinweis (MEDIUM). Alle Fakten per Web-Recherche verifiziert.

#### Completed

**#1 /waermepumpe — Schallgrenzwerte 2026 (HIGH):**
- [x] FAQ "Wie laut ist eine Wärmepumpe?" aktualisiert mit 2026-Förderanforderungen
- [x] Neuer Info-Block mit Tabelle aller Grenzwerte nach Leistungsklasse (< 6 kW bis 70 kW)
- [x] Hinweis auf 2028-Verschärfung (natürliche Kältemittel R290)
- [x] Rechtsgrundlage: BEG-EM-Richtlinie 21.12.2023

**#2 /foerderung — BEG-Budget 2026 (MEDIUM):**
- [x] Neuer Info-Block: Gesamtbudget sinkt auf ~12 Mrd. (von 15,3 Mrd.)
- [x] BEG-EM (Heizungstausch) sogar erhöht: 7,7 Mrd. (+600 Mio.)
- [x] BEG-WG (Vollsanierung) drastisch gekürzt: 4,9 → 2,0 Mrd.

**#3 /heizung — GEG/GMG Hinweis (MEDIUM):**
- [x] Beimischungspflicht für bestehende Gas-/Ölheizungen ab 2029 (15% → 100% bis 2045)
- [x] GMG-Ausblick (Gesetzentwurf noch in Abstimmung)
- [x] Initial REJECTED durch hvac-content (Vermischung 65%-Regel/Beimischungspflicht), nach Korrektur APPROVED

**Quality Gates:**
- [x] Gate 1: hvac-content — APPROVED (nach Korrektur #3)
- [x] Gate 2: security-reviewer — APPROVED (keine Kontaktdaten)
- [x] Gate 3: VALIDATION_REPORT.md aktualisiert
- [x] Build 2x erfolgreich verifiziert

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/app/waermepumpe/page.tsx` | FAQ + Schallgrenzwerte-Tabelle (Info-Block) |
| `src/app/foerderung/page.tsx` | BEG-Budget 2026 Info-Block |
| `src/app/heizung/page.tsx` | GEG/GMG Hinweis im Gasheizung-Abschnitt |
| `VALIDATION_REPORT.md` | Gate 1-3 Dokumentation |
| `PROGRESS.md` | Session-Update |

#### Quellen
| Thema | Quellen |
|-------|---------|
| Schallgrenzwerte | energie-experten.org, cci-dialog.de, elektro.net, haustec.de |
| BEG-Budget | enter.de/blog/bundeshaushalt, t-online.de, sparkasse.de |
| GEG/GMG | energie-experten.org, energiezukunft.eu, ee-experten.de |

---

### Session 2026-02-10 (Blog-Datum 2025→2026 Migration)

#### Ziel
25 Blog-Artikel von 2025 auf 2026 aktualisieren: URL-Slugs, Titel, Excerpts, Daten, Content-Überschriften, FAQ-Fragen und Cross-Links. BAFA→KfW Slug-Umbenennung. 301-Redirects für SEO. Daten verteilt über Jan-Feb 2026 für frisches Content-Signal an Google.

#### Completed

**Blog.ts — 22 Artikel aktualisiert:**
- [x] 20 Slug-Änderungen (2025→2026)
- [x] 1 Slug-Umbenennung: `bafa-foerderung-solarthermie-2025` → `kfw-foerderung-solarthermie-2026`
- [x] 2 Titel-only Updates (barrierefreies-bad-planen-ratgeber, hybrid-heizung-waermepumpe-solarthermie)
- [x] Alle Titel, Excerpts, Daten aktualisiert
- [x] Content-Überschriften: "Was kostet X 2025?" → "2026" (~25 manuelle Edits)
- [x] FAQ-Fragen: "Lohnt sich X 2025?" → "2026"
- [x] Cross-Links: Alle `href="/blog/xxx-2025"` → `xxx-2026` in HTML-Content
- [x] 79 "2025"-Referenzen bewusst beibehalten (CO₂-Zeitreihen, historische Policy-Daten, "Heizspiegel 2025")

**next.config.mjs — 22 neue 301-Redirects:**
- [x] 20 Standard-Redirects (2025→2026)
- [x] 1 BAFA→KfW Redirect: `/blog/bafa-foerderung-solarthermie-2025` → `/blog/kfw-foerderung-solarthermie-2026`
- [x] 1 Catch-Redirect: `/blog/bafa-foerderung-solarthermie-2026` → `/blog/kfw-foerderung-solarthermie-2026`

**Service- & Standort-Seiten — 9 Dateien:**
- [x] 6 Service-Seiten: waermepumpe, heizung, sanitaer, klimaanlage, solar, foerderung
- [x] 3 Standort-Seiten: augsburg, ulm, memmingen
- [x] BAFA→KfW Text-Updates auf solar + foerderung

**Verifizierung:**
- [x] `npm run build` erfolgreich
- [x] `grep "/blog/.*-2025" src/app/` → 0 Treffer
- [x] `grep "slug.*2025" src/lib/api/blog.ts` → 0 Treffer

#### Git-Commits
```
5bb9556 feat(blog): migrate 22 articles from 2025 to 2026
bf53fb7 fix(content): correct misleading claims on landing pages (8 issues)
```
Note: bf53fb7 enthielt die Redirect- und Page-Link-Änderungen (im vorherigen Context committed).

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/lib/api/blog.ts` | 22 Artikel: Slugs, Titel, Excerpts, Daten, Content, Cross-Links, FAQs |
| `next.config.mjs` | +22 neue 301-Redirects (Blog year migration 2025→2026) |
| `src/app/waermepumpe/page.tsx` | 2 Blog-Links aktualisiert |
| `src/app/heizung/page.tsx` | 3 Blog-Links aktualisiert |
| `src/app/sanitaer/page.tsx` | 2 Blog-Links aktualisiert |
| `src/app/klimaanlage/page.tsx` | 3 Blog-Links aktualisiert |
| `src/app/solar/page.tsx` | 3 Blog-Links + BAFA→KfW Text |
| `src/app/foerderung/page.tsx` | 3 Blog-Links + BAFA→KfW Text |
| `src/app/standorte/augsburg/page.tsx` | 3 Blog-Links + Titel |
| `src/app/standorte/ulm/page.tsx` | 3 Blog-Links + Titel |
| `src/app/standorte/memmingen/page.tsx` | 1 Blog-Link + Titel |
| `PROGRESS.md` | Session-Dokumentation |

#### Slug-Mapping (Referenz)
| Alt | Neu | Datum |
|-----|-----|-------|
| waermepumpe-kosten-2025 | waermepumpe-kosten-2026 | 2026-02-10 |
| gasheizung-verbot-2025-geg | gasheizung-verbot-2026-geg | 2026-02-09 |
| gasheizung-kosten-2025 | gasheizung-kosten-2026 | 2026-02-08 |
| pelletheizung-kosten-2025 | pelletheizung-kosten-2026 | 2026-02-07 |
| beg-foerderung-2025 | beg-foerderung-2026 | 2026-02-06 |
| badsanierung-kosten-2025 | badsanierung-kosten-2026 | 2026-02-05 |
| foerderung-heizung-2025 | foerderung-heizung-2026 | 2026-02-04 |
| heizung-vergleich-2025-... | heizung-vergleich-2026-... | 2026-02-03 |
| solarthermie-vs-photovoltaik-2025-... | solarthermie-vs-photovoltaik-2026-... | 2026-01-28 |
| nachtspeicherheizung-ersetzen-2025 | nachtspeicherheizung-ersetzen-2026 | 2026-01-25 |
| fussbodenheizung-kosten-vorteile-2025 | fussbodenheizung-kosten-vorteile-2026 | 2026-01-22 |
| waermepumpe-vorteile-nachteile-2025 | waermepumpe-vorteile-nachteile-2026 | 2026-01-20 |
| heizung-entlueften-anleitung-2025 | heizung-entlueften-anleitung-2026 | 2026-01-18 |
| bafa-foerderung-solarthermie-2025 | **kfw-foerderung-solarthermie-2026** | 2026-01-16 |
| waermepumpe-vs-gasheizung-vergleich-2025 | waermepumpe-vs-gasheizung-vergleich-2026 | 2026-01-15 |
| pvt-kollektoren-...-2025 | pvt-kollektoren-...-2026 | 2026-01-14 |
| waermepumpe-vs-pelletheizung-vergleich-2025 | waermepumpe-vs-pelletheizung-vergleich-2026 | 2026-01-12 |
| klimaanlage-kosten-2025-... | klimaanlage-kosten-2026-... | 2026-01-10 |
| barrierefreies-bad-kosten-...-2025 | barrierefreies-bad-kosten-...-2026 | 2026-01-08 |
| solarthermie-dimensionierung-planung-2025 | solarthermie-dimensionierung-planung-2026 | 2026-01-05 |

#### Nächste Schritte (Follow-up Content)
- [ ] WP-Schallgrenzwerte 10 dB(A) ab 2026 auf /waermepumpe (HIGH)
- [ ] BEG-Budget Kürzung ~12 Mrd. auf /foerderung (MEDIUM)
- [ ] GEG-Reform → GMG Hinweis auf /heizung (MEDIUM)
- [ ] Nach Deployment: Redirects mit `curl -I` testen
- [ ] Google Search Console: Indexierung der neuen URLs beobachten

---

### Session 2026-02-10 (Landing Page Content Fixes — 8 Issues)

#### Ziel
8 irreführende/falsche Claims auf Landing Pages korrigieren, basierend auf User-Audit mit Quellen (Verivox, Thermondo, Viessmann, ÖKO-TEST, energie-experten.org).

#### Completed

**Fix #1: Wärmepumpe Energiekosten-Ersparnis**
- [x] `/waermepumpe` — "70% niedrigere Energiekosten" → "40-45% niedrigere Heizkosten" (3 Stellen: metadata, benefits, hero)

**Fix #2: Solarthermie+WP Stromersparnis**
- [x] `/waermepumpe` — "30% weniger Stromverbrauch" → "20%" (2 Stellen: Text + Bullet)

**Fix #3: Solarthermie Förder-Claim**
- [x] `/waermepumpe` — "Nach 70% KfW-Förderung: nur €2.400-€5.400" → Differenzierung: 70% nur bei Heizungstausch, Einzelmaßnahme 30% Basis

**Fix #4: Solar Wirkungsgrad**
- [x] `/solar` — "60-80% Wirkungsgrad" → "Optischer Kollektorwirkungsgrad bis 80%, im Jahresmittel ca. 50% Nutzungsgrad" (features + 4 FAQs)

**Fix #5: Solar Einkommensbonus**
- [x] `/solar` — "Einkommensbonus 20%" → "30%, auf 20% gekappt wegen 70%-Deckelung"

**Fix #6: Solar Jahreszahl**
- [x] `/solar` — "KfW-Förderung 2025" → "2026" (Heading + FAQ)

**Fix #7: KfW 455-B auf Standortseiten (15 Seiten!)**
- [x] "Förderung bis 8.000€" → "Pflegekasse bis 4.000€ pro Person, KfW-Programm in Neuauflage" auf **allen 15 betroffenen Standortseiten**
- Betroffen: augsburg, memmingen, bobingen, gutenzell-huerbel, klosterlechfeld, ottobeuren, mindelheim, stadtbergen, neu-ulm, bad-woerishofen, blaustein, friedberg, neusaess, gersthofen, laupheim
- Agent: `frontend-dev` für 13 Batch-Fixes

**Fix #8: Solar Heizkosten-Ersparnis**
- [x] `/solar` — "30% Heizkosten sparen" → "25%" (benefits, hero, FAQ "20-30%" → "15-25%")

**Quality Gates:**
- [x] Gate 1: hvac-content — Initial REJECTED (Fix #7 nur 2/15 Seiten), nach Korrektur APPROVED
- [x] Gate 2: Keine neuen Kontaktdaten eingeführt
- [x] Gate 3: VALIDATION_REPORT.md aktualisiert
- [x] Build erfolgreich verifiziert (2x)
- [x] Grep: 0 verbleibende "8.000.*Förder" in /standorte

#### Git
```
bf53fb7 fix(content): correct misleading claims on landing pages (8 issues)
```
26 Dateien, 354 Insertions, 131 Deletions. Pushed to `origin/main`.

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/app/waermepumpe/page.tsx` | Fix #1 (3x), Fix #2 (2x), Fix #3 |
| `src/app/solar/page.tsx` | Fix #4, Fix #5, Fix #6, Fix #8 |
| `src/app/standorte/**/*.tsx` (15 Seiten) | Fix #7: KfW 455-B → Pflegekasse + Neuauflage |
| + diverse Service/Standort-Seiten | Blog-Link Slugs 2025→2026 (Linter) |
| `PROGRESS.md` | Session-Update |
| `VALIDATION_REPORT.md` | Quality Gate Report |

#### Nächste Schritte
- [ ] Vercel Deployment verifizieren
- [ ] Content-Update: WP-Schallgrenzwerte 10 dB(A) ab 2026 (HIGH)
- [ ] Content-Update: BEG-Budget Kürzung ~12 Mrd. (MEDIUM)
- [ ] Content-Update: GEG-Reform → GMG Hinweis (MEDIUM)

---

### Session 2026-02-10 (Kontaktdaten-Zentralisierung)

#### Problem
12 halluzinierte Telefonnummern in Blog-Artikeln, CTAs und Komponenten entdeckt. Ursache: `contact.ts` existierte als Source of Truth, aber **0 von 66 Dateien** importierten daraus — alle Nummern waren hardcoded.

#### Completed

**Phase 1: Halluzinierte Nummern entfernt (4 Commits)**
- [x] `08234 / 967 975 0` — blog.ts (3x)
- [x] `08234 / 90 89 70` — blog.ts (2x)
- [x] `+4982347799620` — solar-process-section.tsx
- [x] `+49 731 234567` — click-to-call.tsx (Ulm)
- [x] `+49 8331 45678` — click-to-call.tsx (Memmingen)
- [x] `4982349665901` — impressum/page.tsx (WhatsApp off-by-one)
- [x] `+49 8234 966590078` — contact-form.tsx, quote-form.tsx (Extra-Ziffern)

**Phase 2: Zentralisierung (1 großer Commit + 1 Fix)**
- [x] **67 Dateien** refactored: Alle hardcoded Telefon/Email/WhatsApp → `CONTACT.*` Import
- [x] 5 parallele `frontend-dev` Agents für Batch-Refactoring
- [x] **209 Referenzen** via `CONTACT.*` über 64 Dateien
- [x] **0 hardcoded Kontaktdaten** verbleiben außerhalb `contact.ts`
- [x] WhatsApp-Mobilnummer `4915111100331` als `CONTACT.WHATSAPP_MOBILE` zentralisiert
- [x] Build verifiziert (clean)

**Phase 3: Quality Gates in CLAUDE.md**
- [x] Gate 1: Fachliche Prüfung durch `hvac-content` vor jedem Content-Commit
- [x] Gate 2: 4-Augen-Prinzip für Kontaktdaten (2 Agents gegen `contact.ts`)
- [x] Gate 3: VALIDATION_REPORT.md Pflicht

#### Git-Commits
```
f97de4f fix(contact): add WhatsApp mobile number to contact.ts
7530726 refactor: centralize all contact data via CONTACT imports
1252033 fix(content): remove 5 more hallucinated phone numbers
59d0f83 fix(content): replace hallucinated phone number in solar CTA
e8cf09a fix(content): replace hallucinated phone numbers with correct contact
```

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `CLAUDE.md` | +Quality Gates Sektion (Gate 1-3, verbindlich) |
| `src/lib/config/contact.ts` | +WHATSAPP_MOBILE, +WHATSAPP_MOBILE_DISPLAY |
| `src/lib/api/blog.ts` | 33x CONTACT.* Import statt hardcoded |
| `src/components/**/*.tsx` (19 Dateien) | CONTACT.* Import für CTAs, Schema, Forms, Layout |
| `src/app/**/*.tsx` (46 Dateien) | CONTACT.* Import für alle Pages |
| `src/lib/**/*.ts` (3 Dateien) | CONTACT.* Import für API/Constants |
| `VALIDATION_REPORT.md` | Erstellt |

#### Kontaktdaten (Source of Truth: `contact.ts`)
| Konstante | Wert | Verwendung |
|-----------|------|------------|
| `PHONE_DISPLAY` | `+49 8234 9665900` | Sichtbarer Text |
| `PHONE_LINK` | `+4982349665900` | `tel:` href |
| `PHONE_SCHEMA` | `+4982349665900` | Schema.org |
| `PHONE_WHATSAPP` | `4982349665900` | wa.me Festnetz (Home CTA etc.) |
| `WHATSAPP_MOBILE` | `4915111100331` | wa.me Mobil (Header, Kontakt, Impressum) |
| `EMAIL` | `service@heizcenter.de` | Überall |

#### Nächste Schritte
- [ ] Vercel Deployment verifizieren (alle Nummern auf Live-Site prüfen)
- [ ] `organization-schema.tsx`: Platzhalter-Steuer-IDs `DE123456789` durch echte ersetzen

---

### Session 2026-02-10 (Content-Audit: 19 fachliche Korrekturen)

#### Ziel
CSV mit 24 Content-Audit-Findings gegen Codebase validieren und bestätigte Fehler korrigieren. Schwerpunkt: Veraltete KfW/BAFA-Programmnummern, GEG-Fristen, technische Kennwerte.

#### Completed

**HOCH-Priorität (4 Issues):**
- [x] **Issues 4+5:** KfW 455-B auf `/sanitaer` — Programm seit 01.01.2025 eingestellt, Feature Card + FAQ + CTA aktualisiert
- [x] **Issue 6:** Blog Badsanierung — KfW 455-B Budget von "150 Mio. €" auf "Pausiert" korrigiert, Neuauflage Frühjahr 2026
- [x] **Issue 14:** Blog BEG — KfW 261 → KfW 358/359, 150.000€ → 120.000€ pro Wohneinheit
- [x] **Issue 21:** Blog Solarthermie — BAFA→KfW an 6 Stellen aktualisiert (seit Jan 2024 über KfW)

**MITTEL-Priorität (7 Issues):**
- [x] **Issue 2:** `/foerderung` H1 + Stand: 2025→2026
- [x] **Issue 7:** Gasheizung GEG: "nur Übergang bis 2029" → "ab 2029: 15% Bio-Anteil, stufenweise bis 100% in 2045"
- [x] **Issue 8:** CO₂-Preis: "ab 2027 marktbasiert" → "2026/27 Korridor 55-65€/t (Versteigerung)"
- [x] **Issue 10:** GEG-Fristen: "Ab 1. Juli" → "Spätestens 30. Juni"
- [x] **Issues 11+12:** Kollektorflächen: auf 7m²/7m² (BEG EM TMA, Bestand) korrigiert
- [x] **Issue 20:** Ölheizung Wirkungsgrad: 96-98% → 90-95%

**GERING-Priorität (3 Issues):**
- [x] **Issue 15:** Solarthermie-Einsparung: 30% → 25%
- [x] **Issue 16:** "70% KfW-Förderung" → "bei Heizungstausch" präzisiert
- [x] **Issue 18:** Schornsteinfeger: Hybrid-Caveat ergänzt (WP + Gas → Pflicht bleibt)

**Quality Gates:**
- [x] Gate 1: hvac-content APPROVED (nach Kollektorflächen-Nachkorrektur 9m²→7m²)
- [x] Gate 2: security-reviewer APPROVED (keine Kontaktdaten in Content)
- [x] Gate 3: VALIDATION_REPORT.md aktualisiert
- [x] Build erfolgreich verifiziert

#### Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| `src/app/sanitaer/page.tsx` | KfW 455-B: Feature Card, FAQ, CTA aktualisiert |
| `src/lib/api/blog.ts` | 14 Korrekturen in 4 Blog-Artikeln (Badsanierung, BEG, Heizungsvergleich, Solarthermie) |
| `src/app/foerderung/page.tsx` | H1 + Stand 2025→2026 |
| `src/app/heizung/page.tsx` | Solarthermie 30%→25%, Förder-Claim präzisiert |
| `src/components/cta/floating-action-button.tsx` | Lint-Fix: Ungenutzter CONTACT-Import entfernt |
| `VALIDATION_REPORT.md` | Gate 1-3 Report für Content-Audit |

#### Nicht behoben (bewusst zurückgestellt)
| # | Grund |
|---|-------|
| 22+24 | Blog-Datum 2025→2026 — betrifft ~25 Artikel + potentiell Slugs/URLs |
| 13 | Gas-Etagenheizung Klimabonus — Geringfügig |
| 23 | "20 Jahre Erfahrung" — Externe Verifizierung nötig (HRB 39683) |
| 3, 9, 17, 19 | Nicht im Code bestätigt oder bereits korrekt |

#### Nächste Schritte
- [ ] Änderungen committen und deployen
- [ ] Issue 22: Blog-Daten 2025→2026 (eigene Session, URL-Impact prüfen)
- [ ] Issue 23: "20 Jahre Erfahrung" extern verifizieren

---

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
- Mindestflächen: 7m² Flachkollektoren, 7m² Röhrenkollektoren (BEG EM TMA, korrigiert am 2026-02-10)
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
