# Content Validation Report - 2026-10-23 (HEC-177)

## Blog Q4/2026: 3 neue Artikel + Fakten-Update von 9 Bestandsartikeln, /foerderung, /notdienst (Gasgeruch)

### Anlass
Traffic-Analyse 23.10.2026 (Vercel Analytics: Blog = 72–83 % der Besucher, letzter neuer Artikel 15.03., Besucher Juni 2.186 → Oktober ~930) + Themenrecherche (Google-Suggest, Quellen 2026). Entscheid Claude Code (Vorgabe Jev „selbst entscheiden“): Heizungsförderung 2027 (Stichtag 31.01.2027, angekündigter Wertschöpfungsbonus), Ölheizung 2027 (behalten oder umrüsten), Heizung springt nicht an (Saison, Notdienst nur für Wartungskunden). Fakten-Updates: DEPI-Pelletpreis Oktober 2026, Verivox-Gaspreis 12,7 ct, Bundestag 15.10.2026 (CO₂ 55–65 €/t auch 2027, ETS 2 ab 2028), DUH-Verfassungsbeschwerde/BVerfG-Organklage, § 42a-Frist 01.12.2026, KfW-PM 08.07.2026 (Wertschöpfungsbonus angekündigt).

Fachliche Quellen: `src/lib/config/foerderung.ts` (verbindlich für Fördersätze), kfw.de/458 (23.10.2026), KfW-PM 08.07.2026, bundestag.de Textarchiv kw42 (15.10.2026) + hib 646/2026, gesetze-im-internet.de § 42a/§ 72, gmodg.bund.de, UBA-Emissionsfaktoren, heizoel24 (23.10.2026), DEPI (Oktober 2026), Verivox (Oktober 2026), Hersteller-Hilfeseiten (Viessmann, Vaillant, Buderus), DVGW, Deutscher Feuerwehrverband („CO macht K.O.“), DEPI Pelletlager, Deutscher Mieterbund, LfU Bayern. Quellenmemos je Artikel und je Patch im Session-Scratch (`articles/*.sources.md`, `fixes-*.md`).

### Geprüfte Änderungen
- `src/lib/api/blog.ts`: neu `heizungsfoerderung-2027` (id 29), `oelheizung-ersetzen-waermepumpe` (30), `heizung-springt-nicht-an` (31), je mit `faqs` (FAQ-Schema), Slugs ohne Jahr (außer Jahresthema), jede Zahl mit Quelle + Abrufdatum im Text; Updates mit `updated: '2026-10-23'` in pelletheizung-kosten-2026, waermepumpe-vs-gasheizung-vergleich-2026, waermepumpe-vs-pelletheizung-vergleich-2026, gasheizung-kosten-2026, heizung-vergleich-2026-waermepumpe-gas-oel-pellets, heizungsgesetz-2024, beg-foerderung-2026, foerderung-heizung-2026, waermepumpe-kosten-2026 (Preise, CO₂-Doppelzählung im Gaspreis entfernt, Betriebskosten-Tabelle auf 15.000-kWh-Basis der TCO-Tabelle, absolute Zusagen „Festpreis/übernehmen den Antrag/garantiert/Anspruch“ entfernt, unbelegte Kennzahlen neutralisiert).
- `src/app/foerderung/page.tsx`: Hinweis Wertschöpfungsbonus (angekündigt, Details ausstehend), GModG-Kasten statt „GMG in Abstimmung“, Stand Oktober 2026, „nach heutigem Stand … abhängig von Bundesmitteln“.
- `src/app/notdienst/page.tsx` (HEC-181, sicherheitsrelevant vorgezogen): Gasgeruch-Reihenfolge (keine Schalter, lüften, Gashahn zu, Haus verlassen, von außen Netzbetreiber/Feuerwehr, erst danach HeizCenter), Tippfehler „Wasserschäden“.
- `CLAUDE.md`: 3 Standorte.

### Gate 1: Fachliche Prüfung
- **Prüfer:** hvac-content — je neuer Artikel ein Lauf + ein Lauf für die Updates; Korrekturen als Patches (old → new, jeder Anker genau 1×; 207 + 56 Ersetzungen) durch general-purpose-Agenten mit Quellenabruf
- **Lauf 1 (4 Prüfungen):** REJECTED — Notfall 3 Blocker (Gasgeruch-Ablauf vor die Checkliste, Pumpen-Selbsthilfe, „inklusive Notdienst“) + 10; Förderung 5 Blocker (Partner-Herkunft, „Zusage ist sicher“, Gutenzell = BW, Grundförderung/Enddatum, Fahrplan-Zeile) + 16; Ölheizung 4 Blocker (Förderung „sicher“, „inkl. Förderantrag“, Tank-Zusagen, Tank leerfahren) + 16; Updates 2 Blocker (DUH-Satz, CO₂ im Heizölpreis) + 16
- **Lauf 2 (Re-Check aller Patches):** REJECTED — 3 Blocker (alte Zahl neben neuer in vs-Pellet/vs-Gas) + 17 (Altzusagen in Bestandsartikeln, heizung-vergleich-Zahlen)
- **Lauf 3 (Abschluss):** REJECTED — 4 Blocker nur noch in heizung-vergleich (Umfeld der neu basierten Betriebskosten-Tabelle) + 6
- **Lauf 4 (heizung-vergleich, S5, S6):** **APPROVED** — Rechenprobe 1.400/1.550/2.400/2.400 € = TCO-Betrieb ÷ 20, 0 Altwerte, FAQ = faqs[], HTML balanciert
- **Lauf 5 (Sign-off je Einheit, Stand `c09993f`, hvac-content):** **APPROVED — 14 von 14 Einheiten**

| Einheit | Geprüft (Stichworte) | Verdict |
|---|---|---|
| `heizungsfoerderung-2027` | Werte = foerderung.ts (30/16/40-30-10 %, 70/80 %, 28.000/15.000/8.000 €, Kind +10.000 €); ab 01.02.2027 12 % / 27.250 €; alle Tabellenrechnungen nachgerechnet (12.880/11.445, 15.680/14.170, 19.600/19.075, 22.400/21.800, 8.400/8.175, 18.020, 4.087,50); Wertschöpfungsbonus „soll/angekündigt“, KfW-PM wörtlich; BEHG „vom Bundestag am 15.10.2026 beschlossen“; 31.01.2027 = Sonntag, 100 Tage; BzA von HeizCenter, Antrag Eigentümer; 6 FAQ = faqs[]; nur CONTACT-Konstanten | APPROVED |
| `oelheizung-ersetzen-waermepumpe` | §§ 71/72 weggefallen, § 43 = GMODG_HINWEIS; § 42a im Gesetzeswortlaut; CO₂ 2,65 kg/l → 14,6/17,3 bzw. 17,2/20,5 ct, 430/510 €; Öl 4.320/2.620 € vs. WP 1.500–1.800 € → 800–2.800 €, 35–42 %; Kostentabelle 33.000–52.500 €; 46 % = 12.880 €, Eigenanteil 29.120/22.400 €; Tank nur „AwSV-Fachbetrieb“; kein Festpreis, kein „inkl. Antrag“; 6 FAQ = faqs[] | APPROVED |
| `heizung-springt-nicht-an` | Gasgeruch-Box vor der Checkliste, 6 Schritte = DVGW, keine Notrufnummern; Öl (1× entstören, Tank nie leer), Pumpe (Fachbetrieb), Kondensat, CO/Abgas, Pelletlager; Notdienst nur Wartungskunden = /notdienst, keine Reaktionszeit; „ab 179 €“ = /wartungsvertrag; § 60b = heizungsgesetz-2024; Mieter-Teil „nach Auffassung/kann“; 8 FAQ = faqs[] | APPROVED |
| `pelletheizung-kosten-2026` | 464,61 €/t (DEPI) → 4–4,5 t = 1.860–2.090 €; Karte 2.290–2.700 vs. Gas 2.630–2.720 → ~200 € (0–400); 20 J. 50.000/67.000 vs. 26.000/45.000 → 22.000 €; 9,29 ct; 0 Altzahlen; FAQ = faqs[]; `updated` | APPROVED |
| `waermepumpe-vs-gasheizung-vergleich-2026` | 20.000 kWh × 12,7 ct = 2.540 €, Einsparung 1.040–1.540 €; Schnellvergleich 2.900–3.300 / 1.250–1.950 €; +10–20 % → 2.790–3.050 €; 20 J. 50.800/70.800 vs. 39.500 → 31.300 €; Korridor „Bundestag 15.10.2026“; FAQ = faqs[]; `updated` | APPROVED |
| `waermepumpe-vs-pelletheizung-vergleich-2026` | 465 €/t überall, 4 t = 1.860 €; Schnellvergleich 1.150–1.250 / 2.400–2.700 €; 20 J. 62.000 vs. 37.500 = 24.500 €; keine 300-€/t-Reste; FAQ = faqs[]; `updated` | APPROVED |
| `gasheizung-kosten-2026` | Karte 2.630–2.720 € (219–227 €/Monat), Δ WP 1.300–1.450; 15 J. 52.500 vs. 32.000; CO₂ 4 t × 55/65 = 220/260 €; Korridor „beschlossen/soll“, ETS 2 „geplant“; Verivox-Hinweis; FAQ = faqs[]; `updated` | APPROVED |
| `heizung-vergleich-2026-waermepumpe-gas-oel-pellets` | Betrieb/Jahr = TCO ÷ 20 (1.400/1.550/2.400/2.400 €); TCO 45.300/50.300/68.200/65.200, Δ 19.900; Heizöl 172,71 €/100 l → 3.450 bzw. 3.600–3.800 €, CO₂ 370–450 €; CO₂-Zeilen Gas 157–186 €, Öl 210–247 €; FAQ = faqs[]; `updated` | APPROVED |
| `heizungsgesetz-2024` | Callout „Aktuelles (Stand 23.10.2026)“: DUH „anhängig, Gesetz gilt weiter“, Organklage „unzulässig“, § 42a „vorzulegen“ (Wortlaut); Rest konsistent; FAQ = faqs[]; `updated` | APPROVED |
| `beg-foerderung-2026` | Hinweisbox 16 → 12 %, 28.000 → 27.250 €, Wertschöpfungsbonus „soll“, Link; Beispiele 12.880/19.120, 22.400/5.600; FAQ = faqs[]; `updated` | APPROVED |
| `foerderung-heizung-2026` | identische Hinweisbox; Beispiele 15.680/12.320, 19.600/10.400, 16.500 €; Einkommensjahre 2023/24; FAQ = faqs[]; `updated` | APPROVED |
| `waermepumpe-kosten-2026` | identische Hinweisbox; 46 % → 12.880/19.120, 80 % → 22.400/9.600; WP-Wärme 6–9 ct vs. Gas 12,7 / Öl 17 ct; FAQ = faqs[]; `updated` | APPROVED |
| `/foerderung` | FOERDER_TEXT-Werte, −750 €/Halbjahr; Wertschöpfungsbonus „Angekündigt (Stand 23.10.2026) … Details stehen noch aus“ + Link; GModG-Kasten; „Stand der Informationen: Oktober 2026“; BzA von HeizCenter, Antrag Eigentümer | APPROVED |
| `/notdienst` | Gasgeruch-Reihenfolge im Hero und Listenpunkt (keine Schalter → lüften → Gashahn zu → Haus verlassen → von außen Netzbetreiber/Feuerwehr → erst danach HeizCenter); keine Nummern; Wartungskunden-Vorbehalt | APPROVED |

- **Status:** APPROVED (Lauf 5; Läufe 1–3 REJECTED mit umgesetzten Befunden, Lauf 4 heizung-vergleich APPROVED)
- **Nachtrag nach Lauf 5:** Quellenlink für „bis zu 400 Euro“ (Buderus) in `heizung-springt-nicht-an` ergänzt (Befund linear-verifier); keine Zahl geändert.
- **Anmerkungen:** Entscheidungen konservativ: keine Werksstandorte der Partner, keine „sicher/garantiert“-Förderaussagen (KfW: kein Rechtsanspruch), keine Tank-/Festpreis-/„inkl. Antrag“-Zusagen (Site: BzA von HeizCenter, Antrag stellt der Eigentümer), Bundesrat/Verkündung nicht behauptet. Folgetickets: HEC-181 (Service-/Standortseiten; zusätzlich `components/forms/emergency-form.tsx` und Gasgeruch-Hinweise ohne Wartungskunden-Vorbehalt auf standorte/augsburg, bobingen, gutenzell-huerbel, ulm, click-to-call.tsx, cta-banner.tsx); Quartals-Re-Audit: waermepumpe-vorteile-nachteile-2026 (925 €/26.000 €, „übernimmt die Förderabwicklung … Garantiert“, „Über 500 Wärmepumpen“, „Über 800 Heizungsinstallationen“), heizung-vergleich (Wartung 20 J., PV-Block, Amortisation 4–6 J.), vsG „~0,5 t/Jahr“.

### Gate 2: Kontaktdaten-Validierung
- **Prüfer 1:** Claude (Implementierer) — Regex über 1.009 hinzugefügte Diff-Zeilen: 0 Telefon, 0 E-Mail, 0 Straße; 4 fünfstellige Treffer = DIN EN 12831/URL-IDs; `${CONTACT.*}` 12×
- **Prüfer 2:** tester-Agent — unabhängig: nur `${CONTACT.PHONE_LINK|PHONE_DISPLAY|EMAIL}` in 3 CTA-Blöcken (+3 je Konstante gegenüber HEAD), 0 Literale, 0 Notrufnummern, Standorte/Bundesländer konsistent mit `locations.ts`
- **Übereinstimmung mit contact.ts:** JA
- **Status:** APPROVED

### Technische Prüfung
- `tsc --noEmit`: 0 Fehler · `next build`: erfolgreich, 30 Artikel + 6 Kategorien prerendered
- Lokal (`next start`): 3 neue URLs 200, JSON-LD BreadcrumbList/BlogPosting/FAQPage parsebar, 8/10/12 interne Links, FAQ 6/6/8; /foerderung „Stand der Informationen: Oktober 2026“; Screenshots Fördertabelle und Gasgeruch-Box/Checkliste geprüft

### Ergebnis
COMMIT FREIGEGEBEN

---

# Content Validation Report - 2026-10-21 (HEC-159)

## Förder-Update KfW 458 auf Stand Merkblatt 09/2026 (Website, Rechner, Blog)

### Anlass
Wunsch der Ads-Agentur (Kick-off mit Andrej, Mail 21.10.2026): „bis zu 80 %“ auf /waermepumpe, /foerderung und im Title, Rechner aktualisieren. Freigabe Jev 21.10.2026. Bei der Umsetzung zeigte das Merkblatt weitere veraltete Aussagen (Effizienzbonus, Emissionsbonus, Obergrenze, Neubau, Antragsberechtigung, Antragsreihenfolge, Solarthermie mit Klimabonus).

Fachliche Quellen (einzige zulässige): KfW-Merkblatt 458, Stand 09/2026 (kfw.de/458, abgerufen 21.10.2026); BEG-EM-Richtlinie vom 17.08.2026 (BAnz AT 27.08.2026 B1), Nr. 8.3, 8.4.4, 8.6, 9.2.1, 9.4.1, TMA 3.4.4/3.4.5; kfw.de/458 für KfW 459/522.

### Geprüfte Änderungen
- `src/lib/config/foerderung.ts` (neu): Single Source of Truth — Grund 30 %, Klimabonus 16 % (bis 31.01.2027, danach −4 Pkt./Halbjahr, ab 01.08.2028 null), Einkommensbonus 40/30/10 % bis 30/40/50 Tsd. € (+10 Tsd. mit Kind), Obergrenze 70 % bzw. 80 % nur mit 40-%-Einkommensbonus, Kostendeckel 28.000/15.000/8.000 €.
- `src/components/calculator/price-calculator.tsx`: Einkommensstufen + Kind, Gas ≥/< 20 Jahre, Selbstnutzer-Checkbox (ohne → 30 %), Boni nur auf den selbst genutzten WE-Anteil, Gewerbe nur 30 %, Obergrenze 70/80 %, Label „Nachtspeicherheizung“.
- Seiten: /foerderung (+OG), /waermepumpe (+OG), /solar (Solarthermie bis 70 %, 80 % nur mit Heizungstausch; Beispiel neu), /rechner, /faq, /heizung, Startseite (+OG), 6 Partnerseiten, 22 Standortseiten, Schema-Komponenten, CTA-Komponenten, Solar-Vergleich.
- `src/lib/api/blog.ts`: drei Durchgänge in 21+ Beiträgen — Effizienz-/Emissionsbonus entfernt, keine Solar-Pflicht für Biomasse, 70-%-Deckel in Beispielen, Neubau ohne 458-Zuschuss, Gas-Hybrid ohne Klimabonus (8.4.4), Antragsberechtigung, Einkommensnachweis, Vertrag mit aufschiebender Bedingung vor Antrag (9.2.1), Kumulierung (8.6), erfundene Kunden → „Rechenbeispiel“.

### Gate 1: Fachliche Prüfung
- **Prüfer:** hvac-content (Auftrag: nur Merkblatt/Richtlinie als Quelle)
- **Lauf 1:** REJECTED — 13 Blocker (u. a. Solarthermie + Klimabonus, Antragsberechtigung, Einkommenszeitraum, Gas-Hybrid 80 %, „Wir übernehmen die Antragstellung“, Eigenanteil-Rechenfehler, Antrag vor Auftrag, Mindestinvestition, Kombination mit Effizienzhaus, KfW 459 „für Vermieter“, Emissionsminderung, BAFA statt KfW) + 6 Hinweise
- **Lauf 2:** REJECTED — 2 Restblocker (/solar Badge/CTA 80 %, Blog „erst Antrag, dann Auftrag“)
- **Lauf 3:** **APPROVED**
- **Anmerkungen:** Kurzformen „bis 80 %“ in Titeln/Badges (Wärmepumpe, Pellets) bewusst behalten — Kundenwunsch, Wert erreichbar, Bedingung im Fließtext. Hartkodierte Beispielwerte im Blog (12.880 €, 28.000 €, 22.400 €, 16 %) → Wiedervorlage HEC-161 (01.02.2027).

### Gate 2: Kontaktdaten-Validierung
- **Prüfer 1:** Claude (Implementierer) — grep über den Diff auf Tel/Mail/Adresse/Öffnungszeiten: keine (einziger Treffer „Kältemittel: R290“ = Fehlalarm)
- **Prüfer 2:** tester-Agent — unabhängige Gegenprüfung des Diffs gegen `contact.ts`
- **Gefundene Kontaktdaten:** nur `CONTACT.PHONE_SCHEMA` in `partner/bosch/page.tsx` (unverändert, Zeile wegen Textänderung im Diff)
- **Übereinstimmung mit contact.ts:** JA
- **Status:** APPROVED

### Technische Prüfung
- `tsc --noEmit`: 0 Fehler · `eslint` geänderte Dateien: 0 Fehler · `next build`: erfolgreich
- Gebauter Output: „Effizienzbonus“, „Emissionsbonus“, „Emissionsminderungszuschlag“ = 0 Treffer
- Rechner im Browser (Playwright, `next start`): Öl/≤30 Tsd. 80 % · Öl/30–40 Tsd. ohne Kind 70 % · mit Kind 80 % · Öl/40–50 Tsd. 56 % · Gas < 20 J./> 60 Tsd. 30 % · vermietet 30 % · Gewerbe 30 %

### Ergebnis
COMMIT FREIGEGEBEN

---

# Content Validation Report - 2026-09-09

## Website auf GModG-Stand (Heizungsgesetz-Novelle 23.07.2026)

### Anlass
Das GEG wurde am 23.07.2026 novelliert (BGBl. 2026 I Nr. 226) und heißt seit 29.07.2026 Gebäudemodernisierungsgesetz (GModG). Die 65-%-Regel, § 71 und § 72 sind weggefallen. Die Website nannte die 65-%-Pflicht, die Kopplung an die kommunale Wärmeplanung, „5 Jahre Übergangsfrist“, „Konstanttemperaturkessel über 30 Jahre“ und bezifferte Bußgelder als geltendes Recht. Zusage an den Kunden: Korrektur bis 12.09.2026.

Fachliche Quelle (einzige zulässige): `heizcenter-docs/heizcenter-brain-entwurf/Regelwerke/GEG-Pflichten.md` (Primärquellen gesetze-im-internet.de, BGBl., bundesregierung.de; Abrufprotokoll 08.09.2026).

### Geprüfte Änderungen
- `src/lib/api/blog.ts`: neue Konstante `GMODG_HINWEIS` (gemeinsamer Hinweiskasten, 3× eingesetzt); Ratgeber `heizungsgesetz-2024` und `gasheizung-verbot-2026-geg` umgeschrieben (Titel, Excerpt, Inhalt, FAQ-HTML und `faqs`-Array, `date` 2026-09-09); GEG-Abschnitte in `gasheizung-kosten-2026`, `heizung-vergleich-2026-waermepumpe-gas-oel-pellets`, `waermepumpe-vs-gasheizung-vergleich-2026`, `nachtspeicherheizung-ersetzen-2026`, `waermepumpe-vorteile-nachteile-2026`, `hybrid-heizung-waermepumpe-solarthermie`, `waermepumpe-vs-pelletheizung-vergleich-2026`, `solarthermie-vs-photovoltaik-2026-vergleich`, `waermepumpe-kosten-2026` korrigiert. Förderaussagen (BEG/KfW) unverändert.
- `src/app/faq/page.tsx`: zwei FAQ-Antworten (Gasheizung-Kosten, Heizungstausch) korrigiert.

### Gate 1: Fachliche Prüfung
- **Prüfer:** hvac-content (Auftrag: jede Zahl/jedes Datum/jeder Paragraph muss in der Note stehen; kein eigenes Wissen)
- **Lauf 1:** REJECTED — 4 blockierend (§ 71 mit „Betriebsverbot“ verknüpft; „30-Jahre-Regel/Konstanttemperaturkessel“ als Inhalt von § 72 nicht durch die Note gedeckt, 2×; Nachbarzeile in faq/page.tsx mit „2026 Öl-/Gasheizungsverbot“), 3 klein (§ 60a Abs. 3 → Abs. 3 und 4; Bußgeld-Existenzbehauptung; § 60b-Frist verkürzt), 2 Hinweise
- **Lauf 2 (nach Einarbeitung aller 7 Befunde):** **APPROVED**, keine offenen Befunde
- **Anmerkungen:** Hinweise außerhalb des Gates: EnEV-Referenzen in zwei anderen Beiträgen (blog.ts ~8335, ~10002) → Quartals-Re-Audit; Aussage „Hybridheizungen förderfähig ab 65 % EE-Anteil“ ist Förderrecht, bewusst nicht angefasst → Quartals-Re-Audit.

### Gate 2: Kontaktdaten-Validierung
- **Prüfer 1:** Claude (Implementierer) — grep über hinzugefügte Diff-Zeilen auf Tel/Mail/Adresse: 0 Treffer
- **Prüfer 2:** tester-Agent — unabhängige Gegenprüfung des Diffs gegen `contact.ts`
- **Gefundene Kontaktdaten:** keine (weder Literale noch `${CONTACT.…}`-Referenzen in hinzugefügten Zeilen)
- **Übereinstimmung mit contact.ts:** JA
- **Status:** APPROVED

### Technische Prüfung
- `tsc --noEmit`: 0 Fehler · `eslint` beide Dateien: 0 Fehler · `next build`: erfolgreich
- Render (`next start`, 5 Seiten, HTTP 200): beide Ratgeber, Gasheizung-Kosten, Heizungsvergleich, FAQ — keine alte Wärmeplanungs-Kopplung, kein „GEG-konform“ mehr; FAQPage-JSON-LD je Seite gültig (Ratgeber 1: 8 Fragen), Article-JSON-LD mit neuem Titel und Datum 2026-09-09

### Ergebnis
COMMIT FREIGEGEBEN

---

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

---

# Content Validation Report - 2026-05-03

## Neue Partner Landing Page: ZEWOTHERM

### Anlass
Neuer Hersteller-Partner ZEWOTHERM (Wärmepumpe LAMBDA) auf HEIZcenter-Website integriert. Eingangsmaterial vom Hersteller (Textbausteine .docx + 6 Bilder) enthielt veraltete Förder-Informationen (KfW 261/262 statt aktuell BEG EM + KfW 358/359), die korrigiert wurden.

### Geprüfte Änderungen
- **NEU:** `src/app/partner/zewotherm/page.tsx` (~470 Zeilen)
- **EDIT:** `src/app/partner/page.tsx` — ZEWOTHERM-Eintrag im `partners`-Array + `logoExt`-Override für PNG-Logos
- **NEU:** `public/images/partners/zewotherm.png` (Logo, 95 KB)
- **NEU:** `public/images/partners/zewotherm/` mit 4 Produktbildern (lambda-freisteller, lambda-eu35l, lambda-modelle, hydraulikstation)
- **ENTFERNT:** Verwaistes KI-generiertes Familienbild (Trust-Risiko)

### Gate 1: Fachliche Prüfung
- **Prüfer 1:** `hvac-content` Agent — Verdict: APPROVED-WITH-CHANGES
- **Prüfer 2:** Externe Web-Verifikation (zewotherm.com Press, BAFA-Richtlinie 2026)
- **Status nach Korrekturen:** APPROVED

**Korrigierte Findings:**
| Original (Page-Entwurf) | Korrigiert auf |
|---|---|
| KfW 261/262 (aus Hersteller-docx) | KfW 358/359 (BEG-Reform) |
| "30 % weniger Strom als A+++" (UWG-Risiko) | "Deutlich geringerer Stromverbrauch im Vergleich zu herkömmlichen Wärmepumpen" |
| SCOP bis 6,1 (nicht belegt) | SCOP bis 5,96 (gem. EN 14825) — bestätigt durch tga-praxis.de |
| Klimageschwindigkeitsbonus pauschal "≥ 20 Jahre" | Differenziert: Öl/Kohle/Gasetagen/Nachtspeicher ohne Mindestalter, Gas/Biomasse ab 20 Jahren |
| KfW "bis 120.000 €" ohne Kontext | "bis 120.000 € förderfähige Kosten pro Wohneinheit" |
| Manufacturer "ZEWOTHERM Heizsysteme GmbH" | "ZEWOTHERM Heating GmbH" (HRB Koblenz 29119, Sitz Remagen) |
| Domain `www.zewotherm.de` | `zewotherm.com` (.de redirected) |
| KI-generiertes Familienbild | Stats-Strip (SCOP / 70 °C / R290) — UX-Trust-Empfehlung |

**Verifiziert OK ohne Korrektur:**
- "Patentierter 3K-Prozess" — durch Hersteller-Press belegt (zewotherm-lambda.de, technologie-medien.de)
- EHPA-Quality-Label — durch Hersteller bestätigt
- 30 % / +20 % / +30 % / +5 % BEG-Boni und 70-%-Deckelung
- 70 °C Vorlauf ohne Heizstab
- R290 / GWP 3
- EN 12102 (Schalldruck-Norm)

### Gate 2: Kontaktdaten-Validierung
- **Prüfer 1:** Implementing Agent — Page nutzt ausschließlich `CONTACT.PHONE_*` und `CONTACT.EMAIL` Imports + Komponenten (`ServiceHero`, `CTASection`)
- **Prüfer 2:** `security-reviewer` Agent — Gegen-Check (siehe nächster Abschnitt)
- **Gefundene Kontaktdaten in der neuen Datei:**
  - `CONTACT.PHONE_SCHEMA` (Schema.org telephone) — aus contact.ts importiert
  - Keine hardcoded Telefonnummern, Emails oder Adressen
- **Übereinstimmung mit contact.ts:** JA
- **Status:** APPROVED

### UX-Review (ux-researcher)
- **Verdict:** SHIP-WITH-MINOR-CHANGES — alle 3 Blocker (Mid-Page-CTA, KI-Bild, Logo-SVG) adressiert
- Mid-Page-CTA "Jetzt Förderung für Ihre LAMBDA prüfen lassen" nach Förder-Section
- Mobile-Fix EU35L-Karte (max-h-48 auf Mobile)

### Build-Verifizierung
- `npm run lint` — ERFOLGREICH (keine ESLint-Fehler)
- `npm run build` — ERFOLGREICH (84 Seiten generiert, `/partner/zewotherm` als Static Page 1.25 kB)

### Offene TODOs (kein Ship-Blocker)
- [ ] Logo PNG → SVG vektorisieren (Konsistenz mit anderen 8 Partner-Logos). Workaround per `logoExt: "png"` Override greift bis dahin sauber.

### Ergebnis
**COMMIT FREIGEGEBEN**

## Content Validation Report - 2026-10-21

### Gepruefte Aenderungen
- `src/app/partner/page.tsx`: ZEWOTHERM-Karte um „Wärmepumpe LAMBDA EUREKA (Modelle EU10L, EU13L, EU15L, EU20L und EU35L)“ ergänzt, Keywords „LAMBDA Wärmepumpe“, „LAMBDA EUREKA“ (Wunsch Ads-Dienstleister; dessen Vorschlag „EU08L“ nicht übernommen — existiert laut lambda-wp.at und zewotherm.com nicht)
- `src/app/waermepumpe/page.tsx`: FAQ Vorlaufzeit 6-8 → 6-12 Wochen (Betriebsangabe Andrej über Ads-Dienstleister)

### Gate 1: Fachliche Pruefung
- Pruefer: hvac-content
- Status: APPROVED
- Anmerkungen: Modelle konsistent mit /partner/zewotherm, lambda-wp.at, zewotherm.com; keine neuen Werte erfunden. Hinweis: allgemeine FAQ „Installationstermine oft 2-4 Wochen“ (/faq) mit Andrej klären; „EUREKA“ optional auf der Detailseite ergänzen.

### Gate 2: Kontaktdaten-Validierung
- Nicht betroffen (keine Kontaktdaten geändert)

### Ergebnis
COMMIT FREIGEGEBEN

---


## Content Validation Report - 2026-10-24 (HEC-182)

### Gepruefte Aenderungen
- `src/lib/api/blog.ts`, `nachtspeicherheizung-ersetzen-2026`: Titel/Excerpt nach GSC-Abfragen („Nachtspeicherheizung ersetzen: Kosten, Pflicht, neue Modelle“), neuer Abschnitt „Neue Nachtspeicher-Modelle“, Luft-Luft-Wärmepumpe als Alternative, Fakten-Refresh (Verbrauch, Nachtstrom, Wirkungsgrad, JAZ Fraunhofer ISE, Preise Stand Oktober 2026, Förderung inkl. Hinweis 2027, Mieterhöhung § 559e BGB, 20-Jahres-Vergleich), 2 neue FAQ (10 gesamt), Quellenliste mit 21 Quellen
- `src/lib/api/blog.ts`, `pelletheizung-kosten-2026`: Einleitung beginnt mit den Kosten, neuer Excerpt (nur Zahlen aus dem Artikel)

### Gate 1: Fachliche Pruefung
- Pruefer: hvac-content (drei unabhaengige Laeufe) + Web-Stichprobe der Quellen (general-purpose, eigener Kontext)
- Runde 1: 3/10 APPROVED, 7 REJECTED (u. a. erfundene Asbest-Austauschpflicht, unbelegte kommunale Satzungen, Mietminderung, „Genehmigung des Verwalters“ statt WEG-Beschluss, unfaires Label „Beste Alternative“, Luft-Luft-Preisbasis, fehlender Hinweis 2027) → 66 Korrekturen angewendet
- Web-Stichprobe: alle Zahlen gegen die zitierten Quellen bestaetigt (§ 41a Abs. 2 EnWG, co2online, Fraunhofer ISE, VZ NRW/RLP, UBA, BAFA, ADAC, Finanztip); 5 Wortlaut-Korrekturen angewendet
- Runde 2: 5/7 APPROVED, 2 PFLICHT (Preisbasis Schnelluebersicht, „hoechste Investition“) → 19 Korrekturen angewendet; § 42 GModG gegen gesetze-im-internet.de gelesen
- Runde 3: E2, E3 APPROVED → alle 10 Einheiten APPROVED; 4 optionale Praezisierungen angewendet
- Status: APPROVED

### Gate 2: Kontaktdaten-Validierung
- Pruefer 1: Implementierer — `git diff -U0` enthaelt 0 hinzugefuegte und 0 entfernte Zeilen mit `CONTACT`, `tel:`, `mailto:`, `+49` oder `@heizcenter`
- Pruefer 2: hvac-content (Runden 1–3) — CTA nur ueber `${CONTACT.PHONE_LINK|PHONE_DISPLAY|EMAIL}`, keine Literale
- Gefundene Kontaktdaten: keine geaenderten; CTA unveraendert aus `contact.ts`
- Status: NICHT AUSGELOEST (keine Kontaktdaten-Aenderung)

### Ergebnis
COMMIT FREIGEGEBEN
