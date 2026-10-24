# Audit Partnerseiten heizcenter.de: Texte, Belege, Vorschläge (HEC-191)

> **Hinweis 24.10.2026 (HEC-191):** Vorschläge in diesem Bericht, die eine Heizlastberechnung als HeizCenter-Leistung formulieren (u. a. VA-31, WO-07, WO-27, DA-13, ZE-07), nur verwenden, wenn Andrej Frage 7 („Machen wir immer eine raumweise Heizlastberechnung nach DIN EN 12831?“) mit Ja beantwortet. Bis dahin: Sachaussage („Die Größe hängt von der Heizlast ab“), keine Zusage.

**Stand:** 24.10.2026 · **Geprüft:** `src/app/partner/page.tsx` und `src/app/partner/{viessmann,vaillant,buderus,wolf,bosch,daikin,zewotherm}/page.tsx` (Repo-Stand `1438196`, Partnerseiten ohne lokale Änderungen) · **Methode:** jede inhaltliche Aussage klassifiziert und gegen Herstellerseiten 2026, test.de, kfw.de, Bundesanzeiger und die eigenen Single-Source-Dateien (`src/lib/config/foerderung.ts`, `src/lib/api/blog.ts`) geprüft; nur gelesen, nichts im Repo geändert. Keine Rechtsberatung.

## Kurzfazit

- **323 Aussagen auf 8 Seiten.**
  - 40 korrekt, 35 korrekt mit fehlender Bedingung (korrekt*)
  - 30 veraltet, 91 falsch
  - 104 unbelegt, davon 36 HeizCenter-Zusagen, die nur Andrej bestätigen kann
  - 23 riskant (Referenzprojekte)
- **Die Herstellerangaben stammen überwiegend aus dem Programm 2023/24 und sind teils falsch.** Es gibt ein Modell, das nicht existiert (Bosch Compress 7800i AW). Falsche Kältemittel stehen bei WOLF („R410A oder R32“ statt R290) und Bosch („alle R290“). Falsche Leistungen, SCOP- und Schallwerte finden sich auf fast jeder Seite.
- **Rechtlich am heikelsten:**
  - Partnerstatus „zertifiziert/autorisiert“ ohne Beleg
  - 22 Referenzprojekte mit Merkmalen erfundener Daten
  - die Viessmann-Testsieger-Angabe
  - Komplettpreise unter dem eigenen Ratgeber
  - Garantiejahre ohne Herstellerbedingungen
- **Sofort umsetzbar ohne Andrej:**
  - Preise und Schema-Offers streichen
  - Referenzkarten offline nehmen
  - Herstellerfakten auf das Programm 2026 bringen (Tabellen unten)
  - Testsieger mit Heft und Note, Garantie mit Bedingungen
  - Förderung nur noch über `/foerderung`
  - Partner-Formulierungen bis zur Antwort neutral fassen
- **Vorlage für die Neufassung:** Die ZEWOTHERM-Seite kommt der Zielstruktur am nächsten (17 von 36 Aussagen korrekt oder korrekt*).
- **Weiteres Vorgehen:** Andrej beantwortet 17 Fragen (meist ja/nein), danach werden die Status-Aussagen final formuliert.

## Lesehilfe

**Klassen:** H = Herstellerfakt (Modell, Leistung, SCOP/Effizienzklasse, Kältemittel, Vorlauf, Herstellergarantie, Herkunft) · T = Testergebnis/„Testsieger“ · P = Preis · R = Referenzprojekt · Z = HeizCenter-Zusage/Eigenschaft · F = Förderaussage · M = Marketing-Aussage (Superlativ, Allein-/Spitzenstellung, Wertung).

**Status:** korrekt (belegt und aktuell) · korrekt* (stimmt, aber eine wesentliche Bedingung oder ein Bezug fehlt und muss ergänzt werden) · veraltet (war richtig, Programm/Recht hat sich geändert) · falsch (widerspricht der offiziellen Quelle) · unbelegt (keine offizielle Quelle bzw. nicht webprüfbar, bei Z: bis Andrej bestätigt) · riskant (Referenzprojekt/Kundenzitat ohne Nachweis, sieht aus wie ein Beleg). Bei gemischten Zeilen steht der Status, der die Änderung auslöst, vorn.

**Vorschlag:** behalten · neuer Text (Formulierung in der Zeile) · streichen · Frage n (Abschnitt „Fragen an Andrej“).

**Zählregel:** eine Zeile = eine inhaltliche Aussage. Wiederholt sich dieselbe Aussage auf einer Seite (Hero, Features, Produktblock, FAQ, Meta, Schema), steht sie einmal mit allen Fundstellen. Abrufdatum aller Webquellen: 24.10.2026. Zitate aus Herstellerseiten stammen teils aus automatischer Seitenextraktion; vor einer juristischen Verwendung gegenlesen.

## Seitenübergreifende Befunde

### A. Preise: alle „Preis ab“, „Komplett ab“ und Schema-Spannen streichen

Jede Partnerseite nennt Geräte- und Komplettpreise, keine nennt eine Quelle. Alle Komplettpreise liegen **unter** den eigenen Ratgebern und unter dem günstigsten Angebot der Verbraucherzentrale-Auswertung:

| Vergleichswert | Luft-Wasser | Sole-Wasser | Gas-Brennwert | Split-Klima 1 Raum |
|---|---|---|---|---|
| Eigener Ratgeber (`blog.ts`) | 27.000–40.000 € (`waermepumpe-kosten-2026`) | 40.000–50.000 € | 9.000–15.000 € (`gasheizung-kosten-2026`) | 1.500–3.500 € inkl. Montage (`klimaanlage-kosten-2026-…`) |
| Verbraucherzentrale RLP, 160 Angebote, PM 02.07.2026 | 21.099–54.168 €, Ø rund 36.400 € | – | – | – |
| Partnerseiten „Komplett ab“ | 16.000 € (Viessmann 150-A) bis 23.000 € | 28.000–32.000 € | 7.200–8.000 € | 4.500 € (Daikin) |
| Schema `lowPrice` | 16.000–21.000 € | – | – | – |

Der eigene Ratgeber schreibt: „Wenn ein Angebot deutlich unter 25.000 Euro liegt, fehlt oft etwas Wichtiges.“ Ein „Komplett ab 16.000 €“ auf der Partnerseite widerspricht dem direkt (§ 5 Abs. 1 S. 2 Nr. 2 UWG, PAngV). Gerätepreise („ab 7.000 € Gerät“) suggerieren ein Einzelangebot und schwanken mit Listenpreis und Rabatt.
**Empfehlung für alle Seiten:** Preiszeilen und FAQ „Was kostet …?“ ersetzen durch:
> „Was eine Wärmepumpe komplett kostet, hängt vor allem vom Gebäude ab. Für ein Einfamilienhaus mit Luft-Wasser-Wärmepumpe rechnen wir mit 27.000 bis 40.000 € inklusive Montage ([Ratgeber Wärmepumpe Kosten 2026](/blog/waermepumpe-kosten-2026)); die Verbraucherzentrale Rheinland-Pfalz fand in 160 Angeboten im Schnitt rund 36.400 €. Einen verbindlichen Preis nennen wir nach der Vor-Ort-Besichtigung.“

Im Schema `AggregateOffer` (lowPrice/highPrice/`InStock`) entfernen; ZEWOTHERM hat ein `AggregateOffer` ganz ohne Preis. Vorschlag: `Product` durch `Brand` (wie im `ItemList` der Übersicht) oder `Service` (Installation, `brand`, `provider` = LocalBusiness) ersetzen. Quellen: `src/lib/api/blog.ts` Zeilen 1199 ff., 2085, 7910 ff.; [VZ RLP, PM 02.07.2026](https://www.verbraucherzentrale-rlp.de/pressemitteilungen/waermepumpenangebote-im-check-grosse-preisunterschiede-und-versteckte-kosten-bleiben-123787).

### B. Förderaussagen

- **„Förderung: bis 80% KfW BEG möglich“** steht in fünf Referenzprojekten aus 2024 (Viessmann, Vaillant, Buderus, Wolf, Bosch). Für 2024 galt die BEG EM vom 21.12.2023: Wärmepumpe 30 % + Effizienzbonus 5 % + Klimabonus bis 20 % + Einkommensbonus 30 % (bis 40.000 € zvE), „mit einer Obergrenze von 70 Prozent“ ([BAnz AT 29.12.2023 B1](https://www.bundesanzeiger.de/pub/publication/TevdpcR9NeEp7m7RhbJ/content/TevdpcR9NeEp7m7RhbJ/BAnz0AT029.12.20230B1.pdf?inline)). 80 % gab es 2024 nicht. Auch heute gilt es nur mit 40-%-Einkommensbonus (zvE bis 30.000 €, mit Kind 40.000 €); KfW: „sonst besteht grundsätzlich eine Obergrenze von maximal 70 %“ ([kfw.de/458](https://www.kfw.de/458)). Die Aussage ist **falsch** und gehört gestrichen.
- **ZEWOTHERM-Überschrift „Bis zu 80 % Förderung sichern“**: Blickfang ohne Bedingung → „Bis zu 70 % Förderung – mit niedrigem Einkommen bis 80 %“, darunter `FOERDER_TEXT.maxHinweis`.
- **KfW 358/359 (ZEWOTHERM)**: „358 für Selbstnutzer, 359 für Eigentümer mit Einkommensbonus“ ist **falsch**. Laut KfW gilt:
  - 358 (Ergänzungskredit Plus): Selbstnutzer mit Haushaltsjahreseinkommen bis 90.000 €, mit zusätzlichem Zinsvorteil.
  - 359: alle anderen, also Privatpersonen, WEG, Unternehmen.
  - Höhe: „bis zu 120.000 Euro Kredit je Wohneinheit“ (Kredit, nicht förderfähige Kosten).
  - Voraussetzung: Zuschusszusage 458/459 oder BAFA, höchstens 12 Monate alt.

  ([KfW 358/359](https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Einzelma%C3%9Fnahmen-Erg%C3%A4nzungskredit-Wohngeb%C3%A4ude-(358-359)/))
- **Förderantrag**: Den 458-Antrag stellt der Eigentümer selbst in „Meine KfW“, und „eine Bevollmächtigung von Dritten ist nicht zulässig“ (kfw.de/458). HeizCenter kann unterstützen: Vertrag mit Förderklausel, Bestätigung zum Antrag (BzA), Bestätigung nach Durchführung (BnD). Den Antrag stellen kann HeizCenter nicht. Textbaustein: „Unterstützung beim Förderantrag: Wir liefern Vertrag mit Förderklausel, BzA und BnD; den Antrag stellen Sie selbst in ‚Meine KfW‘.“
- Förderung auf den Herstellerseiten nur noch als Verweis auf `/foerderung` mit den Werten aus `foerderung.ts`: Grund 30 %, Klima 16 % bis 31.01.2027, Einkommensbonus 40/30/10 %, höchstens 70 %, 80 % nur mit 40-%-Bonus, 28.000 € förderfähige Kosten.
- Ab 01.02.2027 sinken Klimabonus und Kostendeckel. Der geplante Wertschöpfungsbonus (Q1 2027) senkt laut eigenem Blog-Hinweis mit KfW-Zitat die Grundförderung auf 15 % und gibt +15 % für in der EU gefertigte Wärmepumpen. Herkunftsangaben werden damit förderrelevant, also „Made in …“ nur produktgenau mit Herstellerbeleg.

### C. Referenzprojekte (22 Karten auf 6 Seiten + 1 Bild-Alt)

Alle 22 Referenzkarten nennen Ort, Jahr, Modell und teils JAZ, SCOP, Einsparung in Euro oder Prozent. Nichts davon ist belegt, und mehrere Muster sprechen gegen echte Projekte:
- **Modelle, die es nicht gibt oder nicht gab:**
  - Bosch „Compress 7800i AW“ gibt es nur als Sole-Wasser-Gerät (7800i LW).
  - Vaillant „aroTHERM plus VWL 95/6“: Die Baureihe /6 hatte 3, 5, 7, 10 und 12 kW.
  - Daikin „Altherma 3 H HT, 12 kW“: Die 3 H HT gibt es mit 14, 16 und 18 kW.
  - Viessmann „Vitocal 300-A, 12 kW“: Die 300-A beginnt bei 13,2 kW.
  - Viessmann „Vitocal 350-A“ ist nicht mehr im Programm.
  - Buderus „WSW196i, 9 kW“: Die WSW196i.2 gibt es mit 6, 8, 12 und 16 kW.
  - Wolf „CHC-Monoblock, 6 kW“: Die CHC ist ein Paket ohne eigene Leistungsgröße.
- **identische Werte über Marken hinweg:** Vaillant Augsburg und Bosch Ulm haben beide „JAZ: 4,2 | Einsparung: ~2.100€/Jahr“, Viessmann und Buderus beide „4 Erdsonden à 100m“.
- **„SCOP“ als Projektergebnis:** Der SCOP ist ein Laborkennwert nach EN 14825, im Feld misst man die JAZ.
- **„Förderung: bis 80 % möglich“ für 2024** (siehe B).
- **Kundenzitat** „Nachbarn berichten: ‚kaum hörbar‘“ (Vaillant): wirkt wie eine Kundenbewertung, dafür gelten die Nrn. 23b und 23c im Anhang zu § 3 Abs. 3 UWG.
- **ZEWOTHERM-Bild-Alt** „LAMBDA EU35L … installiert von HeizCenter“: Die EU35L wurde erst 2026 eingeführt.

**Empfehlung:** alle Karten offline nehmen, bis Andrej je Karte bestätigt (Frage 12). Wiederaufnahme nur mit echtem Projekt, Einwilligung des Kunden, ohne Straße/Name und mit gemessenen Kennzahlen („JAZ 2025 laut Wärmemengenzähler: 3,9“).

### D. Partnerstatus, Zertifizierung, Garantie

Sechs Herstellerseiten nennen HeizCenter „zertifizierter“ bzw. „autorisierter“ Fachpartner oder Partner der jeweiligen Marke und versprechen „Zertifizierte …-Installation“, Werksschulungen, Garantiejahre. Die ZEWOTHERM-Seite schreibt „Fachpartner für Wärmepumpen“ und im Garantie-FAQ „Als Fachpartner kümmern wir uns …“. Intern belegt sind nur Kundenkonten:
- Viessmann: PartnerPortal-Login.
- Buderus: Kundennummer im Business Shop, Niederlassung Augsburg.

Quelle: `_docs/odoo/grosshandel/LIEFERANTEN_STAND_2026-10-23.md`. Ein Kundenkonto ist kein zertifizierter Fachpartnerstatus.
- **Rechtlich:** Unwahre Angaben zu Status, Zulassung oder Auszeichnung sind irreführend (§ 5 Abs. 1 S. 2 Nr. 3 UWG). Gütezeichen oder Bestätigungen ohne Genehmigung stehen auf der „schwarzen Liste“ (Anhang zu § 3 Abs. 3 UWG, Nr. 2 und 4). Markenrechtlich darf ein unabhängiger Installateur sagen, dass er Geräte einer Marke einbaut und wartet, aber nicht den Eindruck einer Vertragspartnerschaft erwecken (EuGH C-63/97 BMW/Deenik).
- **Der Status entscheidet auch über die beworbenen Garantien:**
  - WOLF gibt 5 Jahre nur bei Inbetriebnahme durch einen WOLF-Fachpartner.
  - Die ZEWOTHERM-Garantie ist ein Vertrag zwischen ZEWOTHERM und dem Installateur und verlangt eine Inbetriebnahme durch ZEWOTHERM oder einen Fachpartner.
  - Daikin verlangt „geschultes Fachhandwerk“.
- **Bis zur Antwort entschärfen:** „Partner“ → „Hersteller, mit denen wir arbeiten“; „Als zertifizierter X Fachpartner …“ → „Wir planen, installieren und warten X-Wärmepumpen …“; „Zertifizierte X-Installation“, „Werksschulung“, „Schulung an neuesten Modellen“ streichen.
- **„5 Jahre Garantie“ ohne Absender (Übersicht):** Ist das die gesetzliche Mängelhaftung? Bei Arbeiten an einem Bauwerk beträgt sie ohnehin 5 Jahre (§ 634a Abs. 1 Nr. 2 BGB). Dann wäre es Werbung mit einer Selbstverständlichkeit (UWG Anhang Nr. 10) → Frage 3.

### E. Notdienst

„24/7 Notdienst“ (Übersicht, ZEWOTHERM) ohne Bedingung widerspricht `/notdienst` und `llms.txt` („nur für Kunden mit gültigem Wartungsvertrag“) → „24/7-Notdienst für Wartungskunden“.

### F. Gas-Brennwertkessel (Viessmann, Vaillant, Buderus, Wolf)

Seit 29.07.2026 gilt das Gebäudemodernisierungsgesetz (GModG). Die 65-%-Regel ist gestrichen, aber neue Gas- und Ölheizungen brauchen ab 2029 einen steigenden Bioanteil (10 % bis 60 % im Jahr 2040) oder einen Erfüllungsweg (§ 43 GModG; so im eigenen Blog-Hinweis `GMODG_HINWEIS`, `blog.ts` Zeile 18 ff.). Gaskessel sind außerdem nicht über KfW 458 förderfähig.

Die Kesselabschnitte nennen beides nicht und werben mit „die effizienteste Lösung“. Empfehlung:
- Kesselblock kürzen auf Modellname und Einsatzzweck.
- Dazu den Satz: „Wichtig: Neue Gasheizungen müssen ab 2029 anteilig mit Biogas betrieben werden; eine Förderung gibt es dafür nicht – mehr im [Ratgeber Heizungsgesetz](/blog/heizungsgesetz-2024).“
- Preise streichen (Ratgeber: 9.000–15.000 €).
- Zuerst klären, ob HeizCenter überhaupt noch Gaskessel anbietet (Frage 10).

### G. Kältemittel

- **R32:** Seit der F-Gase-Verordnung (EU) 2024/573 dürfen ab 01.01.2027 Monoblock-Wärmepumpen bis 50 kW und Luft-Wasser-Split-Geräte bis 12 kW mit einem GWP ab 150 nicht mehr neu in Verkehr gebracht werden ([EU-Kommission](https://climate.ec.europa.eu/areas-action/fluorinated-greenhouse-gases/climate-friendly-alternatives-f-gases/air-conditioning_en)). R32 hat GWP 675 (Vaillant-Datenblatt Split plus). „R32 (niedriges GWP)“ und R32-Geräte als „zukunftssicher“ sind deshalb missverständlich; auf den Seiten R290-Modelle in den Vordergrund stellen.
- **R290:** Die Hersteller nennen heute GWP 0,02, nicht 3 (z. B. WOLF CHA-Seite „R290 / 0,02“, Viessmann 250-A, Daikin Altherma 4). „GWP 3“ überall durch „Treibhauspotenzial nahe null“ ersetzen.

### H. Testwerbung (Stiftung Warentest)

| Modell | Test | Urteil | Stand 24.10.2026 | Werbung i. d. R. bis |
|---|---|---|---|---|
| Viessmann Vitocal 250-A, Typ AWO-E-AC 251.A10 | test 10/2023 | GUT (2,1), Testsieger | Frist am 27.03.2026 abgelaufen, durch Nachtest ersetzt | – |
| Viessmann Vitocal 250-A, Typ AWO-E-AC 251.A10 | test 10/2025 (23.09.2025) | GUT (2,0), Testsieger | aktuell | ca. 03/2028 |
| Buderus Logatherm WLW186i-10 AR E | test 8/2024 (Juli 2024) | GUT (2,3), laut Buderus Testsieger | aktuell, kein Nachtest mit Buderus | ca. Ende 01/2027 |
| Vaillant aroTHERM plus | test 10/2023, test 10/2025 | gut (2,5)*, gut (2,3)* | nie Testsieger | – |
| WOLF CHA-10/400V | test 10/2023 | gut (2,3)* | abgelaufen | – |
| Daikin Altherma 3 H MT | test 10/2023 | befriedigend (2,6)* | abgelaufen | – |
| Bosch Compress, ZEWOTHERM LAMBDA | – | nicht getestet | – | – |

\* Noten aus Sekundärquellen (test.de-Tabellen hinter Paywall); vor Verwendung im Heft prüfen.

Regeln ([test.de](https://www.test.de/unternehmen/werbung-5016972-5016975/), RAL-Lizenzbedingungen):
- Angegeben werden müssen Gesamtnote, Ausgabe und www.test.de.
- Das Urteil gilt nur für das getestete Modell.
- Geworben werden darf in der Regel 2,5 Jahre nach Veröffentlichung.
- Das Testlogo gibt es nur mit Lizenz.
- „Preis-Leistungs-Sieger“ ist ohne entsprechendes Testergebnis unzulässig.

Quellen: [test.de PM 23.09.2025](https://www.test.de/presse/pressemitteilungen/Auch-im-Altbau-geeignet-Alle-Waermepumpen-im-Test-heizen-zuverlaessig-sogar-in-aelteren-Haeusern-6249041-0/), [test.de PM 27.09.2023](https://www.test.de/presse/pressemitteilungen/Waermepumpen-Viele-Geraete-ueberzeugen-Unterschiede-in-der-Effizienz-6048068-0/), [Viessmann-PM 25.09.2025](https://www.viessmann-climatesolutions.com/de/newsroom/loesungsangebot/viessmann-erneut-testsieger-bei-stiftung-warentest.html), [Buderus Testsieger](https://www.buderus.de/de/referenzen-auszeichnungen/auszeichnungen/testsieger-65162).

### I. Rechtlicher Rahmen (Kurzfassung, keine Rechtsberatung)

- **§ 5 UWG:** Irreführend sind unwahre oder zur Täuschung geeignete Angaben über wesentliche Merkmale (Herkunft, Testergebnisse), den Preis und die Eigenschaften des Unternehmers (Befähigung, Status, Zulassung, Auszeichnungen).
- **§ 5a UWG (Irreführung durch Unterlassen):** Wesentliche Bedingungen gehören zur Aussage, z. B. „80 % nur bei …“ oder „Garantie nur bei Registrierung und Wartung“.
- **„Schwarze Liste“ (Anhang zu § 3 Abs. 3 UWG), immer unzulässig:**
  - Nr. 2: Gütezeichen ohne Genehmigung
  - Nr. 4: unwahre Bestätigung durch eine Stelle
  - Nr. 10: gesetzliche Rechte als Besonderheit
  - Nr. 23b/23c: Bewertungen
- **§ 6 UWG (vergleichende Werbung):** Vergleiche mit anderen Marken nur objektiv und nachprüfbar. Betroffen ist z. B. die Wolf-FAQ „nicht ganz auf dem Niveau … von Viessmann oder Vaillant“.
- **Allein- und Spitzenstellungswerbung** („Marktführer“, „Weltmarktführer“, „höchste Effizienz“, „leiseste“) gilt als Tatsachenbehauptung und muss beweisbar sein. Sonst „einer der …“ oder streichen.
- **PAngV:** Preise gegenüber Verbrauchern als Gesamtpreise. „ab“-Preise nur, wenn sie realistisch erreichbar sind.

---

## 1. /partner (Übersicht)

Belege: siehe die Herstellerseiten unten sowie [test.de](https://www.test.de/unternehmen/werbung-5016972-5016975/), [kfw.de/458](https://www.kfw.de/458), `/notdienst`.

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| P-01 | „Unsere Premium-Partner“ (Meta-Title, H1), „Unsere Hersteller-Partner“ (H2), Schema `ItemList` „HeizCenter Premium-Partner“, CTA „von einem unserer Premium-Partner“ | Z | unbelegt | Partnerstatus je Hersteller nicht belegt (Abschnitt D) | Frage 1; bis dahin „Unsere Hersteller“ bzw. „Marken, die wir einbauen und warten“ |
| P-02 | Meta-Description „HeizCenter arbeitet mit den führenden Herstellern zusammen … Testsieger-Qualität.“ | T | unbelegt | test.de: „Bezieht sich das Testurteil tatsächlich auf das beworbene Produkt?“ – ein Urteil gilt nur für das getestete Modell | neuer Text: „Wärmepumpen von Viessmann, Vaillant, Buderus, Wolf, Bosch, Daikin und ZEWOTHERM – Beratung, Einbau und Wartung durch HeizCenter in Bayerisch-Schwaben.“ |
| P-03 | „HeizCenter arbeitet ausschließlich mit führenden Herstellern zusammen.“, H2 „Warum wir nur mit Premium-Herstellern arbeiten“ | Z | unbelegt | Über uns: „Kundendienst für alle führenden Hersteller“ | Frage 2; bis dahin „Mit diesen Herstellern arbeiten wir“ |
| P-04 | „Testsieger-Qualität, langjährige Erfahrung und modernste Technologie für Ihr Zuhause.“ | M | unbelegt | – | neuer Text: „Aktuelle Wärmepumpen bekannter Hersteller – geplant, eingebaut und gewartet von HeizCenter.“ |
| P-05 | Badge „Mehrere Testsieger“; „Mehrere unserer Partner sind Testsieger bei Stiftung Warentest.“ | T | korrekt* | Testsieger sind Modelle, keine Marken: Vitocal 250-A Typ A10 (test 10/2025, GUT 2,0) und Logatherm WLW186i-10 AR E (test 8/2024, GUT 2,3, Werbung bis ca. Ende 01/2027); Fundstelle fehlt (Abschnitt H) | neuer Text: „Zwei Wärmepumpen aus unserem Programm waren Testsieger bei Stiftung Warentest: Viessmann Vitocal 250-A (test 10/2025, GUT 2,0) und Buderus Logatherm WLW186i-10 AR E (test 8/2024, GUT 2,3) – www.test.de“; Badge streichen; Buderus-Teil ab 02/2027 entfernen |
| P-06 | „Höchste Qualität und Zuverlässigkeit garantiert.“ | M | unbelegt | Bestes Urteil aller Tests 2023–2025: „gut“; Zuverlässigkeit wurde nie geprüft; „garantiert“ ist ein Leistungsversprechen | streichen |
| P-07 | Badge „Zertifizierte Fachpartner“; „Als zertifizierte Fachpartner bieten wir Ihnen Original-Ersatzteile, Werksschulungen und erstklassigen Service.“; Liste „Fachpartner-Zertifizierung“ | Z | unbelegt | Abschnitt D | Frage 1; bis dahin streichen |
| P-08 | Badge „5 Jahre Garantie“ | Z | unbelegt | Absender unklar; gesetzliche Mängelhaftung bei Bauwerksarbeiten ohnehin 5 Jahre (§ 634a Abs. 1 Nr. 2 BGB) | Frage 3; bis dahin streichen |
| P-09 | „Lange Garantie: 5-10 Jahre Garantie auf Wärmepumpen“, Liste „5-10 Jahre Herstellergarantie“ | H | falsch | Viessmann 5 J. (ViCare) bzw. 6 J. (System Plus); Vaillant 5 J. mit Registrierung, 10 J. nur GarantiePREMIUM; Buderus 5 J. nur für Systempakete; Bosch 5 bzw. 5+2 J. Systemgarantie; Wolf 5 J. (Registrierung, WOLF-Fachpartner); Daikin 2 J. (5 J. mit „Stand by Me“); ZEWOTHERM 5 J. gegen Aufpreis – Belege in den Seitentabellen | neuer Text: „Herstellergarantie je nach Marke 2 bis 6 Jahre, mit Zusatzpaketen teils länger – fast immer mit Registrierung und jährlicher Wartung. Was für Ihr Gerät gilt, steht in unserem Angebot.“ |
| P-10 | Viessmann-Karte „Testsieger Stiftung Warentest 2024 & 2025.“, Badge „Testsieger 2024“ | T | falsch | → VI-01 | „Testsieger test 10/2025 (Vitocal 250-A)“ |
| P-11 | Viessmann-Karte „Vitocal Wärmepumpen mit höchster Effizienz und bis zu 75°C Vorlauftemperatur.“ | H | korrekt* | 75 °C nur Vitocal 200-A ie (seit 09/2026), „höchste Effizienz“ unbelegt → VI-05/06 | „Vitocal 250-A mit R290 (bis 70 °C), neue Vitocal 200-A ie bis 75 °C“ |
| P-12 | Viessmann-Highlight „Made in Germany“ | H | unbelegt | → VI-03 (Wärmepumpenfertigung u. a. in Legnica, PL) | streichen; Ersatz „R290“ |
| P-13 | Viessmann-Highlight „10 Jahre Garantie“ | H | falsch | → VI-08 | Ersatz „Testsieger 10/2025“ |
| P-14 | Viessmann-Highlight „SCOP bis 5,1“ | H | unbelegt | → VI-11 | streichen |
| P-15 | Vaillant-Karte „Marktführer mit 150+ Jahren Erfahrung.“, Badge „Marktführer“ | M | korrekt* | → VA-01 (Weltmarktführer bei zentralen Heizgeräten, nicht bei Wärmepumpen) | Badge „Seit 1874“ |
| P-16 | Vaillant „aroTHERM Serie mit Green iQ Technology“, Highlight „Green iQ“ | H | veraltet | → VA-10 | streichen; Ersatz „R290“ |
| P-17 | Vaillant „bis zu 75°C Vorlauftemperatur“, Highlight „Bis 75°C“ | H | korrekt | → VA-05 (aroTHERM plus) | „aroTHERM plus bis 75 °C“ |
| P-18 | Vaillant-Highlight „SCOP bis 5,4“ | H | falsch | → VA-04 (aroTHERM plus bis 5,13) | „SCOP bis 5,1“ |
| P-19 | Buderus-Karte „Testsieger 2024.“, Badge „Testsieger“ | T | korrekt* | → BU-01 (Note und Fundstelle fehlen) | „Testsieger test 8/2024 (WLW186i-10 AR E, GUT 2,3)“; ab 02/2027 entfernen |
| P-20 | Buderus „Unerhört leise Logatherm Serie … mit natürlichem R290 Kältemittel“, Highlights „Unerhört leise“, „Bosch Gruppe“ | H | korrekt | → BU-07, BU-14 | behalten |
| P-21 | Buderus „Bosch-Qualität seit 1731“ | H | falsch | → BU-04 (Buderus 1731, Bosch-Gruppe seit 2003, Bosch 1886) | „seit 1731, seit 2003 Teil der Bosch-Gruppe“ |
| P-22 | Buderus-Highlight „SCOP bis 5,2“ | H | falsch | → BU-10 (WLW186i: 4,77; MBE+ AR: 5,4) | „SCOP bis 5,4 (WLW186i MBE+ AR, 35 °C)“ |
| P-23 | Wolf-Karte „Kompakte CHA-Monoblock Serie Made in Bavaria“, Badge „Made in Bavaria“ | H | korrekt | → WO-01 | behalten |
| P-24 | Wolf „Modulierende Inverter-Technologie mit integriertem 9 kW Heizstab“, Highlights „Kompakt“, „Heizstab inkl.“ | H | korrekt* | 9 kW nur für CHA-07/10 belegt; „modulierende Inverter-Technologie“ in der Abfrage der WOLF-Produktseite nicht gefunden → WO-03, WO-06 | „CHA-07/10 mit 9-kW-Heizstab für Spitzenlasten“ |
| P-25 | Wolf-Highlight „SCOP bis 4,7“ | H | falsch | → WO-08 (A+++ bei 35 °C) | „Effizienzklasse A+++ (35 °C)“ |
| P-26 | Bosch-Karte „Weltkonzern-Qualität.“, Badge „Weltkonzern“, Highlight „Innovation“ | M | unbelegt | → BO-02 | „Teil der Bosch-Gruppe“, Badge „Seit 1886“ |
| P-27 | Bosch „Compress 7000 Serie mit A+++-Effizienz“ | H | veraltet | → BO-13 (7000er = alte R410A-Baureihe, heute 7001i) | „Compress 3800i bis 8800i AW mit R290“ |
| P-28 | Bosch „Smart Home Ready Funktionen“, Highlight „Smart Home“ | H | unbelegt | → BO-10 | „App-Steuerung (HomeCom Easy)“ |
| P-29 | Bosch-Highlight „SCOP bis 5,1“ | H | korrekt* | Bosch: Compress 3800i AW „SCOP von bis zu 5,14 bei 35 °C“ | „SCOP bis 5,1 (3800i AW, 35 °C)“ |
| P-30 | Daikin-Karte „Weltmarktführer Klimatechnik.“, Badge „Weltmarktführer“ | M | unbelegt | → DA-01 | Badge „Seit 1924“ |
| P-31 | Daikin „Altherma Wärmepumpen für Heizen & Kühlen. Japanische Qualität seit 1924.“, Highlight „Heizen + Kühlen“ | H | korrekt | → DA-02, DA-08 | behalten |
| P-32 | Daikin-Highlight „Bis 70°C“ | H | veraltet | Altherma 4 H bis 75 °C → DA-11 | „bis 75 °C (Altherma 4 H)“ |
| P-33 | Daikin-Highlight „SCOP bis 5,15“ | H | unbelegt | → DA-05 | streichen; Ersatz „bis A+++“ |
| P-34 | ZEWOTHERM „Wärmepumpe LAMBDA EUREKA (Modelle EU10L, EU13L, EU15L, EU20L und EU35L). Patentierter 3K-Prozess.“ | H | korrekt | → ZE-02, ZE-03 | behalten |
| P-35 | ZEWOTHERM „SCOP bis 6,1, Vorlauf bis 70 °C ohne Heizstab“, Highlights „SCOP bis 6,1“, „Bis 70 °C VL“, „R290 Kältemittel“ | H | korrekt* | → ZE-04, ZE-06 (SCOP bei 35 °C) | „SCOP bis 6,1 (35 °C)“ |
| P-36 | ZEWOTHERM „Hersteller mit Sitz in Remagen – ideal für Neubau & Altbau-Sanierung“ | H | korrekt* | → ZE-01 (Lizenzfertigung in Remagen, entwickelt von LAMBDA, Tirol) | „gefertigt in Remagen, entwickelt von LAMBDA (Tirol)“ |
| P-37 | „Luft-Wasser-Wärmepumpen (Monoblock & Split)“, „Erdwärmepumpen (Sole-Wasser)“ | Z | unbelegt | – | behalten, wenn Frage 1c bestätigt |
| P-38 | „Hochtemperatur-Wärmepumpen (bis 75°C)“ | H | korrekt | aroTHERM plus, Vitocal 200-A ie, Logatherm WLW186i, Altherma 4 H: bis 75 °C | behalten |
| P-39 | „Cold Climate bis -25°C“ | H | unbelegt | Betriebsgrenzen je Modell verschieden (Altherma 4 H/3 H HT bis −28 °C, Altherma 3 R und aroTHERM pro bis −25 °C, WOLF CHA bis −22 °C) | „Betrieb auch bei strengem Frost (je nach Modell bis −22 bis −28 °C)“ |
| P-40 | „A+++-Energieeffizienz“ | H | korrekt* | viele Modelle A+++ bei 35 °C, einige A++ | „Effizienzklasse bis A+++“ |
| P-41 | „R290 (natürliches Propan, GWP 3)“ | H | veraltet | Hersteller nennen GWP 0,02 (Abschnitt G) | „R290 (Propan), Treibhauspotenzial nahe null“ |
| P-42 | „R32 (niedriges GWP)“ | H | falsch | R32 GWP 675; ab 01.01.2027 keine neuen Monoblöcke ≤ 50 kW und Luft-Wasser-Splits ≤ 12 kW mit GWP ≥ 150 (Abschnitt G) | streichen oder „R32 – bei kleinen Geräten ab 2027 nicht mehr neu zulässig“ |
| P-43 | „F-Gase-frei verfügbar“, „PV-Integration möglich“ | H | korrekt | R290-Geräte; PV-Kopplung bei allen Herstellern beschrieben | behalten |
| P-44 | „Green iQ / Smart Grid Ready“ | H | veraltet | → VA-10 | „Smart-Grid- und PV-Kopplung je nach Modell“ |
| P-45 | „Neubau (KfW40/55)“ | M | korrekt* | Wärmepumpen-Zuschuss KfW 458 nur für bestehende Wohngebäude (`foerderung.ts`) | „Neubau“ ohne KfW-Kürzel (vermeidet den Eindruck einer Förderung) |
| P-46 | „Altbau & Modernisierung“, „Einfamilienhäuser“, „Mehrfamilienhäuser“, „Gewerbe & Industrie“ | Z | unbelegt | – | Frage 16 |
| P-47 | „Original-Ersatzteile“, „Regelmäßige Wartung“ | Z | unbelegt | `/wartungsvertrag` | behalten (unkritisch) |
| P-48 | „24/7 Notdienst“ | Z | falsch | `/notdienst`: „nur Kunden mit einem gültigen Wartungsvertrag“ | „24/7-Notdienst für Wartungskunden“ |
| P-49 | CTA „Lassen Sie sich kostenlos beraten! Wir finden gemeinsam die perfekte Wärmepumpe …“, Button „Jetzt kostenlose Beratung anfragen“ | Z | unbelegt | – | Frage 6; „perfekte“ → „passende“ |

Das Schema `ItemList` übernimmt die Kartentexte als `Brand`-Beschreibungen. Es wird mit den Karten korrigiert und ist nicht eigens gezählt.

**Empfohlene Struktur des Marketing-Texts:** Die Übersicht soll in 30 Sekunden klären, welche Marken HeizCenter einbaut und wartet und wie der Kunde den passenden Hersteller findet.
- Je Marke eine Karte mit Profil in einem Satz (z. B. „Buderus – leise R290-Wärmepumpen, seit 1731, Bosch-Gruppe“), der aktuellen Modellreihe und einem belegten Merkmal.
- Testsieger nur mit Heft und Note; keine Preise, keine pauschalen Garantien.
- Darunter herstellerübergreifende Beratung und Verweise auf `/foerderung` und den Kostenratgeber.
- „Partner“ und „zertifiziert“ erst nach Andrejs Bestätigung.

---

## 2. /partner/viessmann

Quellen (Abruf 24.10.2026):
- viessmann.de, Produktseiten: [250-A](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-250-a.html), [150-A](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-150-a.html), [200-A ie](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-200-a-ie.html), [300-A](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-300-a.html), [222-G](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-222-g.html), [350-G](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-350-g.html), [Familie](https://www.viessmann.de/de/produkte/waermepumpe/vitocal-familie.html), [Vitodens 200-W](https://www.viessmann.de/de/produkte/gasheizung/vitodens-200-w.html), [Vitodens 300-W](https://www.viessmann.de/de/produkte/gasheizung/vitodens-300-w.html)
- viessmann.de, Service und Recht: [Garantie](https://www.viessmann.de/de/services/garantie.html), [System Plus](https://www.viessmann.de/de/services/garantie/system-plus-garantie.html), [Impressum](https://www.viessmann.de/de/impressum.html), [Fachpartnersuche](https://www.viessmann.de/de/partner-vor-ort-suche.html)
- Viessmann-Pressemitteilungen: [Testsieger 25.09.2025](https://www.viessmann-climatesolutions.com/de/newsroom/loesungsangebot/viessmann-erneut-testsieger-bei-stiftung-warentest.html), [Legnica 14.07.2022](https://www.viessmann-climatesolutions.com/de/newsroom/unternehmen/viessmann-investiert-in-neuen-technologie-standort-in-legnica.html)
- Datenblatt [DB-6195458](https://www.viessmann.de/content/dam/public-brands/master/products/heat-pump/vitocal-250-a-neubau/DB-6195458-vitocal-250-a.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/DB-6195458-vitocal-250-a.pdf)
- Stiftung Warentest, Abschnitt H

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| VI-01 | „Testsieger Stiftung Warentest 2024 & 2025“, „…2024 und 2025 mit Note GUT (2,0)“, Badge und Meta „Testsieger 2024“, H4 „Der Testsieger“, Schema „Testsieger Stiftung Warentest“ · Hero, Features, Produktblock, FAQ, Meta, Schema | T | falsch | Viessmann war nicht im Test 8/2024. Testsieger war die Vitocal 250-A in test 10/2023 (gut 2,1; Werbefrist am 27.03.2026 abgelaufen) und in **test 10/2025, GUT (2,0)**. Getestet nur Typ AWO-E-AC 251.A10 (10 kW). Viessmann-PM 25.09.2025 | neuer Text: „Vitocal 250-A (Typ A10, 10 kW): Testsieger bei Stiftung Warentest, test 10/2025, Qualitätsurteil GUT (2,0) – www.test.de“; Badge „Testsieger test 10/2025“; nur beim getesteten Typ, nicht für „die Vitocal-Serie“; Logo nur mit RAL-Lizenz |
| VI-02 | FAQ „…überzeugt durch hohe Effizienz (SCOP 5,1), niedrige Betriebskosten, leisen Betrieb (35 dB(A)) und hervorragende Verarbeitung. Das Preis-Leistungs-Verhältnis ist ausgezeichnet.“ | T | falsch | SCOP 5,1 und 35 dB(A) sind keine Testwerte (die Stiftung rechnet bei 55 °C; Datenblatt A10: SCOP 5,01 bei W35, 3,87 bei W55). Verarbeitung und Preis-Leistung wurden nicht benotet (Gewichtung 2025: 70 % Effizienz/Umwelt, 25 % Handhabung, 5 % Datenschutz) | neuer Text: „Im Test 10/2025 (fünf Luft-Wasser-Monoblöcke mit 10–12 kW und R290) erhielt die Vitocal 250-A das Qualitätsurteil GUT (2,0). Bewertet wurden vor allem Energieeffizienz und Umwelteigenschaften sowie die Handhabung.“ |
| VI-03 | „Premium Qualität Made in Germany“, „Made in Germany – Höchste Qualitätsstandards“ · Hero, Benefit | H | unbelegt | Kein offizieller Fertigungsort für 250-A/150-A. Viessmann-PM 2022: „…seit über 20 Jahren Systemkomponenten und Produkte in Legnica, vor allem die […] Wärmepumpen.“ | streichen; Herkunft nur mit Herstellerbestätigung je Modell |
| VI-04 | „Premium-Heiztechnik aus Allendorf“ | H | unbelegt | Firmensitz Allendorf (Eder) laut Impressum korrekt, Fertigungsort nicht; seit 02.01.2024 gehört Viessmann Climate Solutions zu Carrier | „Viessmann (Sitz Allendorf/Eder, seit 2024 Teil von Carrier)“ |
| VI-05 | „Vitocal Wärmepumpen mit höchster Energieeffizienzklasse“, „A+++“ · Benefit, Produktblock | H | korrekt* | 250-A Typ 10–19: A+++; 150-A und 250-A Typ 04–08 (230 V): A++; 222-S: A++ | „Effizienzklasse bis A+++ (je nach Modell und Typ)“ |
| VI-06 | „Bis zu 75°C Vorlauftemperatur für Altbau“ · Benefit | H | korrekt* | 75 °C nur Vitocal 200-A ie (Marktstart 09/2026): „…bis zu 75°C Vorlauftemperatur“; 250-A/150-A: 70 °C | „Vorlauf bis 70 °C (Vitocal 250-A, 150-A), mit der neuen Vitocal 200-A ie bis 75 °C“ |
| VI-07 | Feature „Vitocal 350-G erreicht bis 72°C, Vitocal 300-A und 350-A bis 65°C“; FAQ „300-A und 350-A … bis 65-72°C“ | H | falsch | 350-G: „bis 70 °C“ (Großgerät ab 20,5 kW); 300-A: „bis zu 64 °C“, 13,2–55,8 kW, für „Große Wohngebäude, Gewerbe, Kommunen“; 350-A ohne Produktseite | Altbau-Argument über 250-A/150-A (70 °C) und 200-A ie (75 °C) |
| VI-08 | „10 Jahre Garantie auf Wärmepumpen“, „bis zu 10 Jahre Garantie“, „Garantieverlängerung möglich (bis 10 Jahre)“ · Benefit, Feature, Fachpartner-Box | H | falsch | Viessmann: „Fünf Jahre Garantie erhalten Sie, wenn Sie Ihre Anlage über die ViCare App aufschalten.“ System Plus: 6 Jahre (mit Vitoset Protect). 10 Jahre nur auf Edelstahl-Wärmetauscher („Undichtigkeiten, die durch Korrosion entstehen“) | „Viessmann-Garantie bis 5 Jahre bei Aufschaltung über die ViCare-App, mit System Plus bis 6 Jahre; Voraussetzung u. a. Wartung durch den Fachbetrieb ([Bedingungen](https://www.viessmann.de/de/services/garantie.html))“ |
| VI-09 | FAQ „Viessmann bietet 2 Jahre Herstellergarantie standardmäßig. Bei Registrierung und jährlicher Wartung durch Fachpartner wie HeizCenter … bis zu 10 Jahre“ | H | falsch | wie VI-08; „2 Jahre“ ist die gesetzliche Mängelhaftung des Verkäufers, keine Herstellergarantie | „Viessmann gewährt bis zu 5 Jahre Garantie, wenn die Anlage über die ViCare-App aufgeschaltet bleibt und vom Fachbetrieb gewartet wird (mit System Plus 6 Jahre). Für unsere Montage haften wir nach Gesetz.“ + Frage 4 |
| VI-10 | „Als zertifizierter Viessmann Fachpartner …“, „Professionelle Fachpartner-Installation“, „Zertifizierte Viessmann-Installation“, Meta „HeizCenter Partner“ | Z | unbelegt | intern belegt nur ein Viessmann-Kundenkonto (PartnerPortal); Viessmann kennt „Viessmann Fachpartner“ und „System Profi Partner“ | Frage 1; bis dahin „Wir planen, installieren und warten Viessmann-Wärmepumpen.“ Nach Bestätigung Stufe nennen und mit der Fachpartnersuche verlinken |
| VI-11 | „SCOP-Werte bis 5,1 bei der Vitocal 250-A“, „SCOP: bis 5,1 (A+++)“ | H | unbelegt | Produktseite nennt keinen SCOP (ηs W35 190–206 %); Datenblatt Typ A10: „SCOP 5,01“ (W35, durchschnittliches Klima); 5,1 dort nur als COP A7/W35 kleiner Typen | „SCOP 5,0 bei 35 °C (Typ A10, Datenblatt)“ oder streichen |
| VI-12 | „Bis zu 75% Energieeinsparung gegenüber Öl- und Gasheizungen“ | M | unbelegt | Viessmann nennt rund 75 % Umweltwärme-Anteil, keine Einsparung | „Rund drei Viertel der Wärme kommen aus der Außenluft; was Sie gegenüber Öl oder Gas sparen, hängt von Strom- und Brennstoffpreis ab ([Ratgeber Kosten](/blog/waermepumpe-kosten-2026)).“ |
| VI-13 | Feature „Natürliches Kältemittel Propan (R290) mit GWP von nur 3“ | H | veraltet | Viessmann-Produktseite: R290 mit „GWP100 0,02“ | „Treibhauspotenzial nahe null“ |
| VI-14 | „Smart Grid Ready … ViCare App“; FAQ „Alle Vitocal Modelle sind Smart Grid Ready“ | H | unbelegt | SG-Fähigkeit nennt die Familienseite nur bei der 060-A; ViCare korrekt (222-G/333-G nur mit Vitoconnect) | „Bedienung per ViCare-App; PV-Kopplung möglich – was Ihr Modell kann, klären wir in der Beratung“ |
| VI-15 | „Lange Lebensdauer von 20+ Jahren“, FAQ „Lebensdauer … 20+ Jahren“ | M | unbelegt | keine Herstellerzahl | streichen |
| VI-16 | FAQ „Wir installieren die gesamte Vitocal Serie: 150-A, 250-A, 300-A (Hochtemperatur), 350-G (Erdwärme)“ | Z | veraltet | 300-A und 350-G sind Großgeräte; EFH-Programm 2026: 150-A, 250-A, 200-A ie, 222-S (R32), 222-G, 333-G, Hybrid | „Für Ein- und Zweifamilienhäuser bauen wir vor allem die Vitocal 250-A und 150-A (R290), die neue 200-A ie für hohe Vorlauftemperaturen und die Sole-Wasser-Geräte 222-G und 333-G ein.“ + Frage 1c |
| VI-17 | 250-A „Leistung: 4-20 kW“ | H | falsch | „2,6 bis 18,5 kW“ (Neubau-Variante 2,1–8,0 kW) | „2,6–18,5 kW“ |
| VI-18 | 250-A „Vorlauftemperatur: bis 60°C“ | H | falsch | „Maximale Vorlauftemperatur: 70 °C (bei einer Außentemperatur bis –10 °C)“ | „bis 70 °C“ |
| VI-19 | 250-A „Kältemittel: R290“, „Monoblock-Bauweise“, „Integrierte Kühlfunktion im Sommer“ | H | korrekt | Produktseite 250-A („Active Cooling … am besten über eine Fußbodenheizung“) | behalten |
| VI-20 | 250-A „Schallleistung: 35 dB(A) in 5m Abstand“; FAQ „35 dB(A) in 5m … Flüstermodus 30 dB(A) … deutlich leiser als viele Konkurrenzprodukte“ | H | falsch | „Schallleistung“ ist der falsche Begriff: Die Schallleistung hat keinen Abstand (Typ A10: 49 dB(A) ErP, 58 dB(A) max.). Viessmann nennt Schalldruck: „35 dB(A) im geräuschreduzierten Betrieb bei einem Abstand von fünf Metern und wandnaher Aufstellung“ (PM 2025), auf der Produktseite 31 dB(A) in 4 m (16-kW-Gerät). „Flüstermodus 30 dB(A)“ stammt aus 2023 (4 m) und ist nicht mehr belegt. Konkurrenzvergleich unbelegt | „Leise: laut Viessmann 35 dB(A) Schalldruck in 5 m Abstand im geräuschreduzierten Betrieb (Aufstellung an der Hauswand). Den Wert für Ihr Grundstück rechnen wir vorab aus.“ Vergleich streichen |
| VI-21 | „Die beliebteste Luft-Wasser-Wärmepumpe von Viessmann“ | M | unbelegt | – | streichen (durch VI-01 ersetzen) |
| VI-22 | 150-A „Leistung: 4-8 kW“ | H | falsch | „2,1 bis 14,9 kW“ | „2,1–14,9 kW“ |
| VI-23 | 150-A „SCOP: bis 4,5 (A++)“ | H | falsch | kein SCOP genannt; Klasse A++ (Typ 04–08, 230 V), sonst A+++ | „Effizienzklasse A++ bis A+++ je nach Typ“ |
| VI-24 | 150-A „Vorlauftemperatur: bis 55°C“ | H | falsch | „70 °C (bei einer Außentemperatur bis –10 °C)“ | „bis 70 °C“ |
| VI-25 | 150-A „Preiswerte Alternative“, „Perfekt für kleinere Einfamilienhäuser“, „Kompakt und leise“ | M | unbelegt | Leistungsbereich bis 14,9 kW | „Einstiegsmodell mit R290, 2,1–14,9 kW, bis 70 °C“ |
| VI-26 | Block „Vitocal 300-A & 350-A – Hochtemperatur für Altbau“ mit „ohne Heizstab“, „Auch bei -20°C effizient“, „Keine Heizkörper-Anpassung nötig“ | H | veraltet | 300-A: zweistufiges Großgerät, bis 64 °C bei −22 °C; 350-A nicht mehr im Programm; „ohne Heizstab“ und „keine Anpassung nötig“ nirgends belegt | Block ersetzen: „Vitocal 200-A ie – für Altbauten mit Heizkörpern: bis 75 °C Vorlauf (70 °C bei −10 °C außen), 6–12 kW, R290, A+++ (neu seit 09/2026). Ob Ihre Heizkörper reichen, zeigt die Heizlastberechnung.“ |
| VI-27 | Block „Vitocal 222-G & 350-G“: „SCOP: bis 5,4“, „Vorlauftemperatur: bis 72°C (350-G)“, „Für Neubau“ | H | falsch | 222-G: „SCOP … bis 5,4 (kaltes Klima/Niedertemperaturanwendung)“, 5,8–10,4 kW, bis 65 °C; 350-G: bis 70 °C, ab 20,5 kW; für EFH außerdem 333-G (1,7–11,4 kW, SCOP bis 5,5) | „Vitocal 222-G (5,8–10,4 kW, Speicher integriert, SCOP bis 5,4 nach EN 14825, kaltes Klima) und 333-G (1,7–11,4 kW, SCOP bis 5,5)“ |
| VI-28 | „Falls eine Wärmepumpe (noch) nicht in Frage kommt, sind Vitodens Brennwertkessel die effizienteste Lösung für Gasheizungen.“ | M | unbelegt | Superlativ unbelegt; Hinweis GModG § 43 (Bioanteil ab 2029) und „keine BEG-Förderung“ fehlt | Abschnitt F; Frage 10 |
| VI-29 | Vitodens 200-W „Leistung: 11-35 kW“ | H | veraltet | „2,5 bis 32 kW“ | „2,5–32 kW“ |
| VI-30 | Vitodens 200-W „Normnutzungsgrad: bis 98%“ | H | korrekt | „98 % (Hs)“ | „bis 98 % (Hs)“ |
| VI-31 | Vitodens 200-W „Mit integriertem Speicher erhältlich“ | H | falsch | Speichergeräte heißen Vitodens 222-F (130 l) bzw. 222-W (46-l-Ladespeicher) | streichen |
| VI-32 | Vitodens 300-W „Höchste Effizienz und Komfort“, „Leistungsmodulation 10-100%“, „Besonders leise“ | H | unbelegt | „Nenn-Wärmeleistung: 1,9 bis 25 kW“, keine Prozent- oder Schallangabe | „Vitodens 300-W: 1,9–25 kW“ |
| VI-33 | Gerätepreise „ab 7.000€ / 9.000€ / 11.000€ (Gerät)“, FAQ „ab 7.000€ (nur Gerät) … 222-G … ab 11.000€“, Vitodens „ab 3.500€ (Gerät)“ | P | unbelegt | keine Quelle | streichen |
| VI-34 | „Komplett ab 16.000€ / 18.000€ / 22.000€ / 28.000-35.000€“, FAQ „18.000-28.000€ für ein Einfamilienhaus“ | P | falsch | widerspricht eigenem Ratgeber (27.000–40.000 € bzw. 40.000–50.000 €) und VZ RLP (Abschnitt A) | streichen; FAQ-Text aus Abschnitt A |
| VI-35 | Vitodens „Komplett ab 8.000€“ | P | falsch | `gasheizung-kosten-2026`: 9.000–15.000 € | streichen |
| VI-36 | Schema `AggregateOffer` 16.000–35.000 €, `InStock` | P | falsch | wie VI-34 | entfernen |
| VI-37 | „Von der unabhängigen Beratung … bei uns sind Sie in den besten Händen“ | M | unbelegt | „unabhängig“ und „zertifizierter Fachpartner“ im selben Absatz widersprechen sich | „herstellerübergreifende Beratung“ (wenn Frage 2 = ja) |
| VI-38 | „Original-Ersatzteile und Werksschulung“, „Schneller Service und Wartung vor Ort“ | Z | unbelegt | – | „Werksschulung“ streichen bis Frage 1b; „Wartung vor Ort“ behalten |
| VI-39 | „Kostenlose Vor-Ort-Beratung“, „Heizlastberechnung nach DIN EN 12831“, „Fördermittel-Beratung (KfW BEG)“, „Komplette Installation in 2-3 Tagen“ | Z | unbelegt | `/waermepumpe` nennt ebenfalls 2–3 Tage, ein Blogbeitrag 3–5 Tage | Fragen 5, 6, 7; Förderberatung behalten |
| VI-40 | „Über 60 zufriedene Kunden in Augsburg, Ulm, Memmingen … vertrauen auf unsere Viessmann-Expertise“ | Z | unbelegt | widerspricht „800+ Zufriedene Kunden“ (Über uns) und „Über 500 Wärmepumpen in Bayern installiert“ (Blog) | streichen bis Frage 14 |
| VI-41 | „über 20 Jahren Erfahrung in der Heizungstechnik“ | Z | unbelegt | Über uns: „Seit über 20 Jahren“ | behalten, wenn Frage 1d bestätigt |
| VI-42 | Referenz „Einfamilienhaus Bobingen (2024)“: Vitocal 250-A 10 kW, Bj. 1985, Ölheizung, 300 l, „Einsparung ~1.800€“ | R | riskant | kein Nachweis | Frage 12; bis dahin streichen |
| VI-43 | Referenz „Neubau Gutenzell-Hürbel (2024)“: 222-G 8 kW, „4 Erdsonden à 100m“, „SCOP 5,2 (A+++)“, „Heizkosten ~400€/Jahr“ | R | riskant | „SCOP“ ist kein Projektmesswert; Sondenangabe identisch mit Buderus-Referenz | Frage 12 |
| VI-44 | Referenz „Mehrfamilienhaus Augsburg (2023)“: Vitocal 350-A 20 kW, 6 WE, „Heizkostenreduktion: 45%“ | R | riskant | 350-A nicht mehr im Programm | Frage 12 |
| VI-45 | Referenz „Altbau-Sanierung Ulm (2024)“: Vitocal 300-A 12 kW, Bj. 1960, „Keine Heizkörper-Anpassung nötig“, „JAZ: 3,8“ | R | riskant | 300-A beginnt bei 13,2 kW (Großgerät) | Frage 12 |
| VI-46 | „Förderung: bis 80% KfW BEG möglich“ (Referenz 2024) | F | falsch | BEG EM 2024: „Obergrenze von 70 Prozent“ | streichen |
| VI-47 | Schema `manufacturer` „Viessmann Werke GmbH & Co. KG“ | H | veraltet | Impressum: „Viessmann Holding International GmbH“; Newsroom: „Viessmann Climate Solutions SE“ | `manufacturer: { name: "Viessmann", url: "https://www.viessmann.de" }` |

**Empfohlene Struktur des Marketing-Texts:**
- **Zweck:** Altbau-Besitzern zeigen, welche Viessmann-Wärmepumpe heute passt. Modelle mit Leistungsbereich und „laut Hersteller“, ohne Preise:
  - 250-A und 150-A (R290, bis 70 °C)
  - die neue 200-A ie (bis 75 °C)
  - Sole-Wasser 222-G und 333-G
- **Vertrauensanker:**
  - „Testsieger test 10/2025, GUT (2,0)“ für den Typ A10
  - die echte Viessmann-Garantie: 5 Jahre mit ViCare, 6 mit System Plus
- **„Warum mit HeizCenter“:** nennt nur Bestätigtes (Status, Wartung, Heizlastberechnung).
- **Förderung und Kosten:** nur als Verweis auf `/foerderung` und den Kostenratgeber.

---

## 3. /partner/vaillant

Quellen (Abruf 24.10.2026):
- vaillant.de, Wärmepumpen: [aroTHERM plus](https://www.vaillant.de/produkte/arothermplus/), [aroTHERM Split plus](https://www.vaillant.de/produkte/arotherm-split-plus/), [aroTHERM pro](https://www.vaillant.de/produkte/arothermpro/), [aroTHERM perform](https://www.vaillant.de/produkte/arothermperform/), [flexoTHERM exclusive](https://www.vaillant.de/produkte/flexotherm-exclusive-brine/), [geoCOMPACT exclusive](https://www.vaillant.de/produkte/geocompactexclusive/)
- vaillant.de, Gasgeräte: [ecoTEC plus](https://www.vaillant.de/produkte/ecotec-plus/), [ecoTEC exclusive](https://www.vaillant.de/produkte/ecotec-exclusive-vc/)
- vaillant.de, Service und Ratgeber: [Garantie](https://www.vaillant.de/service/garantie/digitale-garantie/), [myVAILLANT connect](https://www.vaillant.de/produkte/myvaillant-connect/), [Ratgeber Stromverbrauch](https://www.vaillant.de/ratgeber/technologie-verstehen/waermepumpe/stromverbrauch/), [Broschüre Regelungstechnik (Green iQ)](https://www.vaillant.de/api/download/product/de/broschuere_technologieinfo-regelungstechnik_1380641.pdf)
- vaillant-group.com: [Auf einen Blick](https://www.vaillant-group.com/unser-unternehmen/auf-einen-blick/), [Wärmepumpenwerk Senica](https://www.vaillant-group.com/news-storys/vaillant-group-nimmt-megafabrik-fuer-waermepumpen-in-betrieb.html)

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| VA-01 | „Marktführer mit über 150 Jahren Erfahrung“ (Meta, Hero, Benefit, Badge „Marktführer“), Feature „Marktführer-Qualität … seit 1874 Synonym für höchste Qualität“, „Premium-Qualität des Marktführers“ | M | korrekt* | Vaillant Group: „Im Bereich zentraler Heizgeräte ist die Vaillant Group Weltmarktführer.“; bei Wärmepumpen „ein weltweit führender Anbieter“; 1874 belegt | „Vaillant – seit 1874, nach eigenen Angaben Weltmarktführer bei zentralen Heizgeräten“; Badge „Seit 1874“; „Synonym für höchste Qualität“ streichen |
| VA-02 | Feature „Made in Germany mit weltweitem Service-Netzwerk“ | H | falsch | Vaillant: „Unsere Produkte entstehen aus deutscher Entwicklungsarbeit … Die Geräte werden in Europa gefertigt.“; Wärmepumpenwerk Senica (SK) seit 05/2023 | „In Deutschland entwickelt, in Europa gefertigt (laut Vaillant)“ |
| VA-03 | aroTHERM plus „Modelle: VWL 65/6 bis VWL 125/6 (6-12 kW)“ | H | veraltet | „…in den Leistungsgrößen 3, 5, 7, 10 und 12 kW erhältlich“; aktuell VWL 35/8.1 bis 125/8.1 | „VWL 35/8.1 bis 125/8.1 (3–12 kW)“ |
| VA-04 | aroTHERM plus „SCOP: bis 5,3 (A+++)“, Benefit „aroTHERM plus mit höchster Effizienz (SCOP bis 5,4)“ | H | falsch | „SCOP (niedrige Temperatur) 4,97 / 4,83 / 4,98 / 5,13 / 5,12“; A+++ bei 35 °C korrekt; 5,41 nur aroTHERM perform 15 kW | „SCOP bis 5,1 (35 °C), Effizienzklasse A+++“ |
| VA-05 | „Bis zu 75°C Vorlauftemperatur“ · Benefit, Feature, Produktblock, FAQ | H | korrekt | aroTHERM plus: „…Vorlauftemperaturen von bis zu 75° C möglich“ | behalten, Modell nennen |
| VA-06 | „Auch bei -20°C Außentemperatur noch 65°C möglich“ · Feature, FAQ | H | unbelegt | weder Produktseite noch Systeminfo | streichen |
| VA-07 | aroTHERM plus „Kältemittel: R290“ | H | korrekt | „Ausgestattet mit dem natürlichen Kältemittel R290“ | behalten |
| VA-08 | aroTHERM plus „Schallleistung: 52 dB(A) typisch“ | H | falsch | „Schallleistungspegel (außen) (max) 52,7 … 59,9 dB(A)“; Flüsterbetrieb 45,0–49,6 dB(A) | „Schallleistung im Flüsterbetrieb 45–50 dB(A) je nach Größe (laut Vaillant)“ |
| VA-09 | „Active Cooling serienmäßig“, Feature „Active Cooling … Heizen und Kühlen mit einem System“ | H | korrekt | „Geeignet für: Heizen, Warmwasserbereitung, Kühlen“ | „Kühlen möglich“ |
| VA-10 | „Green iQ“: Benefit „Green iQ Label – Nachhaltig & Effizient“, Feature „Green iQ Technology: Umweltfreundliche Kältemittel R32 und R290“, FAQ „Was ist Green iQ Technology?“, Produktblock, ecoTEC exclusive „Premium mit Green iQ“, Hero, Schema | H | veraltet | Vaillant: „Green iQ Label für besonders nachhaltige und intelligent vernetzte Produkte“ – nicht Kältemittel; auf keiner aktuellen Wärmepumpen-Produktseite | streichen (inkl. FAQ) |
| VA-11 | Split plus „VWL 35/8.2 AS bis VWL 75/8.2 AS (3-7 kW)“, „Vorlauftemperatur: bis 62°C“, „Kältemittel: R32“ | H | korrekt | „…Leistungsgrößen von 3 bis 7 kW“; „Temperatur Heizung … 5 - 62 °C“; „Kältemittel R32 … GWP 675“ | behalten + Hinweis R32/F-Gase 2027 (Abschnitt G) |
| VA-12 | „Extrem leise ab 19 dB(A) Innengerät“, „Innengerät nur 19 dB(A) (Flüstermodus)“, FAQ „… nur 19 dB(A) im Flüstermodus – kaum hörbar“ | H | unbelegt | Vaillant nennt nur Außengerät-Werte (ErP 47,5–48,3 dB(A)); Vaillant: „Die leiseste Split-Wärmepumpe* am Markt“ (*7 kW) | streichen; ggf. „laut Vaillant die leiseste Split-Wärmepumpe am Markt (7-kW-Klasse)“ |
| VA-13 | Split plus „Erhältlich ab November 2024“ | H | veraltet | lieferbar (Vaillant-Garantie-FAQ nennt Käufe vor 10.03.2025) | streichen |
| VA-14 | Split plus „Premium Split-System … besonders leise im Innenbereich“, FAQ „Split-Systeme sind flexibler … oft etwas leiser im Innenbereich“ | M | unbelegt | – | „Split-Gerät: Außen- und Inneneinheit getrennt, verbunden über Kältemittelleitungen“ |
| VA-15 | „aroTHERM pro – Premium-Serie“, „Höchste Effizienz und Leistung für anspruchsvolle Einfamilienhäuser und kleinere Gewerbeobjekte“, FAQ „aroTHERM pro (Premium-Modell)“ | H | falsch | Vaillant: „Die neue Kompaktklasse für freistehende Häuser“; als effizienteste nennt Vaillant die aroTHERM plus | „aroTHERM pro – Kompaktklasse für freistehende Häuser“ |
| VA-16 | aroTHERM pro „Leistung: 5-11 kW“ | H | korrekt | „…von 5 bis 11 kW“ | behalten |
| VA-17 | aroTHERM pro „SCOP: bis 5,4“, „Höchste Energieeffizienz“; Feature „SCOP-Werte bis 5,4 bei aroTHERM pro“ | H | falsch | „SCOP (niedrige Temperatur) 5,01 / 4,87 / 4,93“ | „SCOP bis 5,0 (35 °C)“ |
| VA-18 | aroTHERM pro „Vorlauftemperatur: bis 75°C“ | H | falsch | „Vorlauftemperatur (Heizbetrieb) (min - max) 10 - 70 °C“ | „bis 70 °C“ |
| VA-19 | aroTHERM pro „Optimiert für Niedertemperatur-Anwendungen“ | H | unbelegt | – | streichen |
| VA-20 | flexoTHERM exclusive „SCOP: bis 5,5 (höchste Effizienz)“, „Modulierender Betrieb“, „Sehr leise (nur Innengerät)“ | H | unbelegt | kein SCOP genannt (ηs 35 °C bis 202 %), Kältemittel R410A, Vorlauf 25–65 °C; neue Sole-WP mit R290: geoCOMPACT exclusive (SCOP 5,59, bis 75 °C, 185-l-Speicher) | Block ersetzen durch geoCOMPACT exclusive (8/11 kW laut Vaillant bis Ende 2026 lieferbar) |
| VA-21 | „Wenn eine Wärmepumpe nicht umsetzbar ist, sind ecoTEC Brennwertkessel die effizienteste Gas-Heizlösung.“ | M | unbelegt | Superlativ; GModG-/Förderhinweis fehlt | Abschnitt F; Frage 10 |
| VA-22 | ecoTEC plus „Leistung: 12-30 kW“ | H | falsch | „Mit 10 bis 30 kW Leistung …“ | „10–30 kW“ |
| VA-23 | ecoTEC plus „Normnutzungsgrad: bis 98%“ | H | veraltet | „Heizenergieeffizienz von bis zu 94 %“; 98 % nur Warmwasser-Wirkungsgrad | „Raumheizungs-Energieeffizienz bis 94 %“ |
| VA-24 | ecoTEC exclusive „Höchste Effizienz und Komfort“, „Modulierende Leistungsanpassung“, „Integrierte Warmwasserbereitung möglich“ | H | unbelegt | Vaillant: „Spitzenklasse in jeder Hinsicht“, 15–30 kW, Internetmodul inklusive | „ecoTEC exclusive: 15–30 kW, Internetmodul inklusive“ |
| VA-25 | Garantie: Benefit „5 Jahre Garantie auf Wärmepumpen“, Feature „…Optional erweiterbar auf bis zu 10 Jahre“, Box „5 Jahre Garantie standard, erweiterbar“ | H | korrekt* | „Die 5-Jahresgarantie besteht aus … der Herstellergarantie und der Garantieverlängerung um weitere 3 Jahre.“ Gilt für plus /8.1, Split plus /8.2, pro /7.1, perform /8.1, geoCOMPACT; Registrierung ≤ 180 Tage, Internetmodul dauerhaft online, jährliche Wartung; 10 Jahre als „GarantiePREMIUM“ über den Fachbetrieb | „5 Jahre Vaillant-Garantie bei Registrierung innerhalb von 180 Tagen, dauerhaft verbundenem Internetmodul und jährlicher Wartung; mit GarantiePREMIUM bis 10 Jahre“; „standard“ streichen |
| VA-26 | FAQ „Alle aroTHERM Modelle sind Smart Grid Ready“ | H | unbelegt | Regler „unterstützt zudem intelligentes Energiemanagement“; keine SG-Ready-Aussage für alle | „PV-Kopplung über Regler und Energiemanagement möglich“ |
| VA-27 | FAQ „Die sensoNET App ermöglicht intelligente Steuerung“ | H | veraltet | App heißt myVAILLANT (Internetmodul myVAILLANT connect) | „myVAILLANT-App“ |
| VA-28 | FAQ „Die Außeneinheit erreicht 46-55 dB(A) … Damit gehört Vaillant zu den leisesten Wärmepumpen am Markt.“ | H | falsch | aroTHERM plus max. 52,7–59,9 dB(A) Schallleistung; Vaillant sagt „Unsere leiseste Luft-Wasser-Wärmepumpe“ (aroTHERM plus, 27,5 dB(A) in 3 m, 3 kW, Nachtmodus) | „Laut Vaillant ist die aroTHERM plus die leiseste Luft-Wasser-Wärmepumpe von Vaillant: 27,5 dB(A) Schalldruck in 3 m (3 kW, Nachtbetrieb).“ |
| VA-29 | Feature „Bis zu 75% Energieeinsparung und niedrigste Betriebskosten“ | M | falsch | Vaillant: „Bis zu 75 % der benötigten Energie stammen dabei aus der Umwelt, nur rund 25 % werden als Strom bereitgestellt.“ | wie VI-12 |
| VA-30 | FAQ „Wir installieren die gesamte aroTHERM Serie … Für Erdwärme … flexoTHERM exclusive“ | Z | veraltet | aktuelles Programm: aroTHERM plus /8.1, pro /7.1, Split plus /8.2, perform /8.1, geoCOMPACT exclusive | neuer Text + Frage 1c |
| VA-31 | FAQ Altbau „…speziell für Altbauten mit klassischen Heizkörpern konzipiert … perfekt für unsanierte Gebäude“ | M | unbelegt | – | „Mit bis zu 75 °C Vorlauf eignet sich die aroTHERM plus für viele Altbauten mit Heizkörpern; ob Ihre Heizkörper reichen, zeigt die Heizlastberechnung.“ |
| VA-32 | „Als autorisierter Vaillant Fachpartner …“, „Zertifizierte Vaillant-Installation“, Meta „HeizCenter Partner“ | Z | unbelegt | keine interne Spur einer Vaillant-Lieferbeziehung | Frage 1 |
| VA-33 | „Original-Ersatzteile ab Lager“, „Schulung an neuesten Modellen“ | Z | unbelegt | – | Fragen 1b, 11 |
| VA-34 | „Kostenlose Erstberatung vor Ort“, „Heizlastberechnung DIN EN 12831“, „Förderantrag KfW BEG Unterstützung“, „Installation in 2-3 Tagen“ | Z | unbelegt | – | Fragen 5–7 |
| VA-35 | „20+ Jahre Erfahrung mit Vaillant-Produkten“, „Über 60 zufriedene Kunden …“ | Z | unbelegt | Kundenzahlen widersprüchlich (VI-40) | Fragen 1d, 14 |
| VA-36 | Gerätepreise „ab 8.000€ / 9.500€ / 10.000€ / 12.000€ (Gerät)“, FAQ „ab 8.000€ (nur Gerät)“, ecoTEC „ab 3.200€ (Gerät)“ | P | unbelegt | – | streichen |
| VA-37 | „Komplett ab 19.000€ / 21.000€ / 23.000€ / 30.000-38.000€“, FAQ „19.000-30.000€“ | P | falsch | Abschnitt A | streichen |
| VA-38 | ecoTEC „Komplett ab 7.500€“ | P | falsch | Ratgeber 9.000–15.000 € | streichen |
| VA-39 | Schema `AggregateOffer` 19.000–38.000 € | P | falsch | Abschnitt A | entfernen |
| VA-40 | Referenz „Einfamilienhaus Augsburg (2024)“: aroTHERM plus „VWL 95/6“, 9 kW, Bj. 1992, Gas, 300 l uniSTOR, „JAZ: 4,2 \| Einsparung: ~2.100€/Jahr“ | R | riskant | „VWL 95/6“ gab es nie (Baureihe /6: 3/5/7/10/12 kW); Werte identisch mit Bosch-Referenz Ulm | Frage 12; bis dahin streichen |
| VA-41 | Referenz „Neubau Ulm (2024)“: aroTHERM pro 7 kW, KfW40, „SCOP 5,4 (höchste Effizienz)“, PV 10 kWp, „Heizkosten ~350€/Jahr“ | R | riskant | aroTHERM pro hat SCOP bis 5,01 | Frage 12 |
| VA-42 | Referenz „Doppelhaushälfte Bobingen (2024)“: Split plus VWL 55/8.2 AS, „Leise Inneneinheit nur 19 dB(A)“, 62 °C, „Nachbarn berichten: "kaum hörbar"“ | R | riskant | Kundenzitat ohne Nachweis (UWG Anhang Nr. 23b/23c); 19 dB(A) unbelegt | Frage 12; Zitat sofort streichen |
| VA-43 | Referenz „Reihenmittelhaus Memmingen (2023)“: aroTHERM plus VWL 75/6, 7 kW, Active Cooling, „JAZ: 4,0 trotz Altbau“ | R | riskant | kein Nachweis | Frage 12 |
| VA-44 | „Förderung: bis 80% KfW BEG möglich“ (Referenz 2024) | F | falsch | BEG EM 2024: Obergrenze 70 % | streichen |

**Empfohlene Struktur des Marketing-Texts:**
- **Kern:** die aroTHERM plus als Altbau-Gerät (R290, bis 75 °C, SCOP bis 5,1).
- **Ergänzende Modelle**, mit „laut Vaillant“ und ohne Preise:
  - aroTHERM pro (Kompaktklasse, bis 70 °C)
  - Split plus (R32, mit F-Gase-Hinweis)
  - geoCOMPACT exclusive (Erdwärme)
- **Vertrauensanker:** seit 1874 und die echte Garantie (5 Jahre mit Registrierung, GarantiePREMIUM bis 10 Jahre).
- **Optional:** „test 10/2025: GUT (2,3)“ für die aroTHERM plus, nachdem die Note im Heft geprüft ist (kein Testsieger).
- **Förderung und Kosten:** nur als Verweis.

---

## 4. /partner/buderus

Quellen (Abruf 24.10.2026):
- Unternehmen: [Über Buderus](https://www.buderus.de/de/unternehmen/ueber-uns-34932)
- Wärmepumpen: [WLW186i AR](https://www.buderus.de/de/produkte/logatherm-wlw186i-ar--73994), [WLW186i MBE+ AR](https://www.buderus.de/de/logathermwlw186imbe+ar), [WLW176i](https://www.buderus.de/de/wlw176i), [WLW196i.2 AR S+](https://www.buderus.de/de/produkte/logatherm-wlw196i-ar-s--73348), [WSW196i](https://www.buderus.de/de/produkte/logatherm-wsw196i-t--73572), [WSW186i](https://www.buderus.de/de/produkte/buderus-logatherm-wsw186i-2-109490), [Ratgeber neueste Generation](https://www.buderus.de/de/heiztechnik-verstehen/ratgeber-waermepumpe/neueste-generation), [Broschüre WLW186i](https://www.buderus.de/resource/blob/79358/620febfca11099289342bc5fecd321e0/broschuere-logatherm-wlw186i-ar-data.pdf)
- Gasgeräte: [GB172i](https://www.buderus.de/de/produkte/logamax-plus-gb172i--73786), [GB192i](https://www.buderus.de/de/produkte/logamax-plus-gb192i--73880)
- Garantie und Test: [Systemgarantie 10/2025](https://www.buderus.de/resource/blob/12292/5aa0c5d33f784a6d6d16c94106d6c016/2025_10_System_Garantiebedingungen_102025_druck.pdf), [Testsieger](https://www.buderus.de/de/referenzen-auszeichnungen/auszeichnungen/testsieger-65162)
- Bosch-Fertigung: [Aveiro](https://www.bosch.com/de/stories/waermepumpen-produktion/), [Eibelshausen](https://www.bosch-homecomfortgroup.com/de/news-und-stories/stories/waermepumpenfertigung-eibelshausen/)

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| BU-01 | „Testsieger Stiftung Warentest 2024“, „Logatherm WLW186i-10 AR E ist Testsieger 2024 … Kategorie Luft-Wasser-Wärmepumpe“, H4 und Badge „Testsieger 2024“, Meta, Schema | T | korrekt* | Buderus: „…in der Ausgabe 8/2024 als beste Wärmepumpe mit GUT (2,3)“; Pflicht: Gesamtnote, Ausgabe, www.test.de; Werbung i. d. R. 2,5 Jahre (bis ca. Ende 01/2027); gilt nur für WLW186i-10 AR E | „Logatherm WLW186i-10 AR E: Testsieger bei Stiftung Warentest, test 8/2024, Qualitätsurteil GUT (2,3) – www.test.de“; Wiedervorlage Ende 01/2027 |
| BU-02 | FAQ „…überzeugt durch hohe Effizienz (SCOP 5,2), extrem leisen Betrieb (32 dB(A)), robuste Verarbeitung … Das Preis-Leistungs-Verhältnis ist hervorragend.“ | T | falsch | Typ 10 AR E: SCOP 4,77 (35 °C), Schalldruck 3 m 46,8 dB(A) bzw. 31,2 dB(A) geräuschreduziert; Verarbeitung und Preis-Leistung sind keine Testergebnisse | „Im Test 8/2024 erhielt die WLW186i-10 AR E das Qualitätsurteil GUT (2,3).“ – technische Werte separat aus dem Datenblatt |
| BU-03 | WLW176i AR „Preis-Leistungs-Sieger“ (H4) | T | unbelegt | keine Testquelle; WLW176i in keinem Stiftung-Test 2023–2025 | streichen |
| BU-04 | „Bosch-Qualität seit über 290 Jahren“, „Bosch-Qualität seit 1731“, Hero „…vereint Bosch-Qualität … Deutsche Ingenieurskunst seit 1731“, „Traditionsmarke mit über 290 Jahren Erfahrung“ | H | falsch | Buderus: „Unternehmensgründung 1731“; „Seit 2003 … Teil der heutigen Bosch Home Comfort Group“; Bosch gegründet 1886 | „Buderus – seit 1731, seit 2003 Teil der Bosch-Gruppe“ |
| BU-05 | „Teil der Bosch Thermotechnik Gruppe“; Schema `manufacturer` „Buderus (Bosch Thermotechnik)“ | H | veraltet | „…Teil der heutigen Bosch Home Comfort Group“; Rechtsträger bleibt Bosch Thermotechnik GmbH | „Teil der Bosch Home Comfort Group“ |
| BU-06 | Meta „Premium Heizungssysteme Made in Germany“ | H | unbelegt | Buderus nennt keinen Fertigungsort; Bosch fertigt die Außeneinheiten der datengleichen Compress 5800i/6800i AW in Aveiro (PT) (Abgleich, keine Herstelleraussage zur WLW186i) | streichen |
| BU-07 | „Unerhört leise“ · Benefit, Feature-Titel, Hero, H2 | M | korrekt | Buderus: „Unerhört leiser Betrieb dank optimierter SILENT plus Technologie.“ | behalten, mit Wert belegen (BU-08) |
| BU-08 | „ab 32 dB(A) in 3m“, „Ab 32 dB(A) in 3m Abstand – flüsterleise“, FAQ „nur 32 dB(A) in 3m … vergleichbar mit einem Flüstern“, Produktblock „Schallleistung: 32 dB(A) in 3m“ | H | falsch | „Schalldruckpegel in 3m Abstand 39,7 … 48,5 dB(A)“; geräuschreduziert „25,5 … 34,9 dB(A)“; 32 dB(A) kommt nicht vor; Schallleistung ≠ Schalldruck | „ab 25,5 dB(A) Schalldruck in 3 m im geräuschreduzierten Betrieb (4-kW-Gerät; 10-kW-Gerät 31,2 dB(A)) laut Buderus“ |
| BU-09 | Feature „Innovative Schalldämmung macht Buderus zu einer der leisesten Wärmepumpen“, FAQ „nachbarschaftstauglich … auch in dicht besiedelten Gebieten“ | M | korrekt* | Buderus: Außeneinheit WLW186i/176i MB AR „…zu den leisesten ihrer Klasse“ | „laut Buderus eine der leisesten ihrer Klasse (SILENT plus)“; „nachbarschaftstauglich“ → „Den Schallnachweis für Ihr Grundstück machen wir vorab.“ |
| BU-10 | Benefit „Logatherm WLW186i mit höchster Energieeffizienz“, Feature „SCOP-Werte bis 5,2“, Produktblock „SCOP: bis 5,2 (A+++)“, FAQ „SCOP 5,2“ | H | falsch | WLW186i AR: „SCOP für 35°C … 4,77“ (Bestwert); 5,4 nur WLW186i MBE+ AR; A+++ korrekt | „SCOP bis 4,8 bei 35 °C (WLW186i), bis 5,4 bei der WLW186i MBE+ AR“ |
| BU-11 | „Bis zu 75% Energieeinsparung gegenüber Öl- und Gasheizungen“ | M | falsch | Buderus: „bis zu 75 % Umweltwärme und lediglich 25 % Strom“ | wie VI-12 |
| BU-12 | WLW186i „Leistung: 7-16 kW“ | H | falsch | „Max. Leistungsabgabe … bei A -7/W35 3,9 kW … 11,6 kW“ (Größen 4/5/7/10/12); 11–15 nur MBE+ AR | „3,9–11,6 kW (Größen 4–12); für größere Häuser WLW186i MBE+ AR“ |
| BU-13 | WLW186i „Vorlauftemperatur: bis 75°C“, „Auch bei -10°C … noch 65°C“, Benefit „Bis zu 75°C“ | H | korrekt | „Max. Vorlauftemperatur der Wärmepumpe 75 °C“; „…(65 °C bei Außentemperatur von -10 °C)“ | behalten |
| BU-14 | WLW186i „Kältemittel: R290“, „Monoblock-Bauweise Außenaufstellung“, „Aktive Kühlfunktion integriert“ | H | korrekt | „Kältemitteltyp R290“; reversible Kühlung | behalten |
| BU-15 | Feature „R290 (Propan) mit GWP von nur 3“ | H | veraltet | Hersteller nennen GWP 0,02 (Abschnitt G) | „Treibhauspotenzial nahe null“ |
| BU-16 | „MyDevice App-Steuerung“, FAQ „Buderus MyDevice App“ | H | veraltet | „…die App MyBuderus“ | „MyBuderus-App“ |
| BU-17 | FAQ „Alle Logatherm Modelle sind Smart Grid Ready … dynamische Stromtarife“ | H | unbelegt | SG Ready belegt für Geräte mit EMS plus, WLW166i, WLW286 A; bei WLW186i/176i nur „MyEnergyMaster“ | „PV-Kopplung und Energiemanagement (MyEnergyMaster) möglich“ |
| BU-18 | WLW176i „Leistung: 7-10 kW“ | H | falsch | gleiche Außeneinheiten wie WLW186i: 3,9–11,6 kW | „3,9–11,6 kW“ |
| BU-19 | WLW176i „SCOP: bis 4,8 (A++)“ | H | falsch | SCOP 4,77 (35 °C) stimmt, die Klasse nicht (A++ passt nur zu 55 °C) | „SCOP bis 4,8 (35 °C)“ ohne Klasse |
| BU-20 | WLW176i „Vorlauftemperatur: bis 60°C“, „Kältemittel: R290“ | H | korrekt | „Max. Vorlauftemperatur … 60 °C“; „R290 (Propan)“ | behalten |
| BU-21 | WLW176i „Leise (35 dB(A) in 3m)“ | H | falsch | 39,7–48,5 dB(A), geräuschreduziert 25,5–34,9 dB(A) | Werte wie BU-08 |
| BU-22 | WLW176i „Bewährte Qualität zum attraktiven Preis. Ideal für Neubau und gut gedämmte Bestandsgebäude.“ | M | korrekt* | Buderus: „…besonders für Ein- und Zweifamilienhäuser im Neubau“ | „für den Neubau“ |
| BU-23 | Block „WLW196i – Split & Monoblock“: „10-20 kW“, „bis 70°C“, „Split-Variante besonders flexibel“, „Modulierende Leistungsanpassung“; FAQ Altbau „…WLW186i und 196i erreichen bis 75°C“ | H | falsch | nur noch WLW196i.2 AR S+: Monoblock, 4,99/6,79 kW, 62 °C, R410A, für Neubau-EFH; keine Split-Variante | Block streichen (R410A-Monoblöcke ≤ 50 kW ab 2027 nicht mehr neu, Abschnitt G); stattdessen WLW186i MBE+ AR (11/13/15, bis 75 °C, SCOP 5,4) |
| BU-24 | Block „WSW196i – Erdwärmepumpe“: „SCOP: bis 5,5“, „Vorlauftemperatur: bis 65°C“, „Langlebig und wartungsarm“ | H | veraltet | WSW196i.2: SCOP 3,87–4,17, R410A; Nachfolger WSW186i mit R290, 6/8/13/17 kW, bis 75 °C | „Logatherm WSW186i – Sole-Wasser mit R290, 6–17 kW, bis 75 °C“ |
| BU-25 | Logamax plus GB172 „14-20 kW“, „Normnutzungsgrad bis 98%“ | H | veraltet | aktuell GB172i: bis 25,3 kW (50/30 °C), „Raumheizungs-Energieeffizienz 94 %“ | „Logamax plus GB172i: bis 25 kW, Raumheizungs-Energieeffizienz 94 %“ |
| BU-26 | GB192i „15-28 kW“, „Intuitive Bedienung via Display“, „App-Steuerung möglich“ | H | veraltet | aktuell GB(H)192i.2: 2,9–49,9 kW, ηs 94 %, Bedienung BC400, App MyBuderus | aktualisieren |
| BU-27 | „Falls eine Wärmepumpe nicht umsetzbar ist, bieten Logamax Brennwertkessel höchste Effizienz bei Gasheizungen.“ | M | unbelegt | Superlativ; GModG-/Förderhinweis fehlt | Abschnitt F; Frage 10 |
| BU-28 | Garantie: Benefit „5 Jahre Garantie auf Wärmepumpen“, Box „5 Jahre Garantie, erweiterbar“ | H | falsch | 5 Jahre nur als Systemgarantie für Logaplus-Pakete/Logasys, Registrierung ≤ 6 Monate, Einbau durch Fachhandwerker, jährliche Wartung; „Die Dauer der Garantie wird … weder verlängert noch erneuert.“ | „Buderus-Systemgarantie 5 Jahre für abgestimmte Systempakete bei Registrierung innerhalb von 6 Monaten und jährlicher Wartung“ |
| BU-29 | FAQ „Wir installieren die gesamte Logatherm Serie: WLW176i AR, WLW186i AR, WLW196i (Split und Monoblock) sowie WSW196i“ | Z | veraltet | Programm 2026: WLW186i MBE+ AR, 186i MB AR, 176i MB AR, 166i MBB AR, 196i.2 AR S+; Sole: WSW186i, WSW196i.2 | neuer Text + Frage 1c |
| BU-30 | FAQ „176i vs. 186i: … 186i … höhere Effizienz (SCOP 5,2) … und noch leiserem Betrieb. Für Neubau reicht oft die 176i, für Altbau empfehlen wir die 186i.“ | H | falsch | gleiche Außeneinheiten, gleiche SCOP- und Schallwerte; Unterschied ist der Vorlauf (60 vs. 75 °C) | „Beide nutzen dieselben Außeneinheiten. Die WLW176i schafft 60 °C und passt in den Neubau, die WLW186i 75 °C – deshalb empfehlen wir sie für Altbauten mit Heizkörpern.“ |
| BU-31 | „Als autorisierter Buderus Fachpartner …“, „Zertifizierte Buderus-Installation“ | Z | unbelegt | intern belegt: Kundennummer Buderus Business Shop | Frage 1 |
| BU-32 | „Original-Ersatzteile vom Hersteller“, „Regelmäßige Produktschulungen“ | Z | unbelegt | – | Frage 1b |
| BU-33 | „Kostenlose Vor-Ort-Beratung“, „Heizlastberechnung DIN EN 12831“, „Unterstützung bei Förderanträgen“, „Installation in 2-3 Werktagen“ | Z | unbelegt | – | Fragen 5–7 |
| BU-34 | „über 20 Jahren Erfahrung mit Buderus-Systemen. Mehr als 60 zufriedene Kunden“ | Z | unbelegt | – | Fragen 1d, 14 |
| BU-35 | Gerätepreise „ab 8.500€ / 9.500€ / 10.500€ / 11.500€ (Gerät)“, FAQ, Logamax „ab 3.400€“ | P | unbelegt | – | streichen |
| BU-36 | „Komplett ab 20.000€ / 22.000€ / 24.000€ / 30.000-40.000€“, FAQ „20.000-32.000€“, „ca. 30.000€ komplett“ | P | falsch | Abschnitt A | streichen |
| BU-37 | Logamax „Komplett ab 7.800€“ | P | falsch | Ratgeber 9.000–15.000 € | streichen |
| BU-38 | Schema `AggregateOffer` 20.000–40.000 € | P | falsch | Abschnitt A | entfernen |
| BU-39 | Referenz „Einfamilienhaus Bobingen (2024)“: WLW186i-10 AR E, Bj. 1988, Ölheizung, „Testsieger-Modell extrem leise“, „Einsparung: ~2.200€“ | R | riskant | kein Nachweis | Frage 12 |
| BU-40 | Referenz „Neubau Ulm (2024)“: WSW196i „9 kW“, KfW40, „4 Erdsonden à 100m“, „SCOP 5,5“, „Heizkosten ~380€/Jahr“ | R | riskant | WSW196i.2 gibt es mit 6/8/12/16 kW; SCOP höchstens 4,17 | Frage 12 |
| BU-41 | Referenz „Doppelhaushälfte Augsburg (2024)“: WLW176i-7 AR, KfW55, „SCOP 4,8 (A++)“, „Nachbarn zufrieden“ | R | riskant | „Nachbarn zufrieden“ wirkt wie Bewertung | Frage 12 |
| BU-42 | Referenz „Altbau-Sanierung Memmingen (2023)“: WLW186i-12 AR E, Bj. 1965, 75 °C, „JAZ: 3,7“ | R | riskant | kein Nachweis | Frage 12 |
| BU-43 | „Förderung: bis 80% KfW BEG möglich“ (Referenz 2024) | F | falsch | BEG EM 2024: Obergrenze 70 % | streichen |

**Empfohlene Struktur des Marketing-Texts:**
- **Zugpferde, beide belegbar:** „unerhört leise“ und das Testsieger-Urteil test 8/2024. Das Testsieger-Urteil nur bis Januar 2027, die Lautstärke immer mit echten Schallwerten (ab 25,5 dB(A) in 3 m, geräuschreduziert).
- **Modelle:**
  - WLW186i AR (bis 75 °C, Altbau)
  - WLW186i MBE+ AR (größere Häuser, SCOP bis 5,4)
  - WLW176i (Neubau, 60 °C)
  - Sole-Wasser WSW186i
- **Herkunft:** „seit 1731, seit 2003 Bosch-Gruppe“.
- **Gaskessel:** nur noch kurz, mit GModG-Hinweis.

---

## 5. /partner/wolf

Quellen (Abruf 24.10.2026):
- Wärmepumpen: [CHA-Monoblock 07/10](https://www.wolf.eu/de-de/professional/produkte-shk/waermepumpen/waermepumpe-cha-monoblock-07-10) (eigene Gegenprüfung), [CHA Mehrfamilienhaus (16/20, 20/24)](https://www.wolf.eu/de-de/produkte/waermepumpe-cha-monoblock-mehrfamilienhaus), [Wärmepumpen-Center CHC](https://www.wolf.eu/de-de/professional/produkte-shk/waermepumpen/waermepumpen-center-chc), [BWS-1](https://www.wolf.eu/de-de/professional/produkte-shk/waermepumpen/sole-wasser-waermepumpe-bws-1)
- Gasgeräte: [CGB-2](https://www.wolf.eu/de-de/professional/produkte-shk/gas-thermen/gas-brennwerttherme-cgb-2-k)
- Garantie und Ratgeber: [5 Jahre Garantie](https://www.wolf.eu/de-de/experte-finden/5-jahre-garantie), [Kühlen](https://www.wolf.eu/de-de/ratgeber/waermepumpe-kuehlen)
- Neuheiten und Unternehmen: [Messen 2026](https://www.wolf.eu/de-de/news/messen-2026), [Ariston/WOLF-Campus](https://www.aristongroup.com/en/news/the-new-wolf-campus-opens-in-mainburg)

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| WO-01 | „Made in Germany - Mainburg, Bayern“, Feature „Made in Mainburg – Entwicklung und Produktion in Bayern“, Badge „Made in Bavaria“, „bayerische Qualität aus Mainburg“ | H | korrekt | WOLF: „…höchste Qualität von unserer bayerischen Entwicklung und Produktion“; CHA-Seite: „Premium Wärmepumpe – ‚Made in Germany‘“; Werk Mainburg | behalten, auf die CHA beziehen; optional „WOLF gehört seit 2023 zur Ariston Group“ |
| WO-02 | „Kurze Lieferwege aus Bayern“ | M | unbelegt | – | streichen |
| WO-03 | „Modulierende Inverter-Technologie“, Feature „…passen die Leistung stufenlos an“, FAQ „Alle Modelle mit modernster Inverter-Technologie“ | H | unbelegt | auf der WOLF-Seite CHA 07/10 nicht gefunden (eigene Abfrage 24.10.2026) | nur mit Datenblatt-Beleg, sonst streichen |
| WO-04 | „Kompakte Monoblock-Bauweise“, Feature „Kompakt & Platzsparend … Perfekt für kleine Grundstücke“ | M | unbelegt | Monoblock korrekt; „kompakt“ ohne Maßangabe | „Monoblock-Außengerät“, Maße aus Datenblatt |
| WO-05 | Benefit „CHA-Monoblock bis 20 kW Leistung“, Feature „von 7 bis 20 kW. Für Einfamilienhäuser bis kleine Gewerbeimmobilien.“ | H | korrekt* | CHA-16/20 bzw. 20/24: „max. Leistungsbereich bei A-7/W35 16,7 bzw. 19,6 kW“; „speziell für Mehrfamilienhäuser entwickelt“ | „CHA-07/10 für Ein- und Zweifamilienhäuser, CHA-16/20 und 20/24 für Mehrfamilienhäuser (Kaskade bis 100 kW)“ |
| WO-06 | „Integrierter 9 kW Elektro-Heizstab … serienmäßig … Keine zusätzlichen Kosten“, FAQ „Alle Wolf CHA-Monoblock Modelle haben einen 9 kW Elektro-Heizstab“ | H | korrekt* | CHA-07/10: „max. Leistung E-Heizstab 9“ kW; für CHA-16/20 nicht belegt | „CHA-07/10: 9-kW-Heizstab integriert, nur für Spitzenlast“; „Keine zusätzlichen Kosten“ streichen |
| WO-07 | CHA „Leistung: CHA-07 (5,2 kW) \| CHA-10 (7,5 kW) bei A7/W35“ | H | falsch | WOLF CHA-07: „A7/W35 Nennleistung / COP 4,5 / 5,5“, 5,2 kW gilt bei A2/W35; 7,5 kW kommt nicht vor | kein Einzelwert; „Die passende Größe ergibt die Heizlastberechnung.“ |
| WO-08 | CHA „SCOP: bis 4,7 (A++)“, FAQ „SCOP-Werte bis 4,7 (A++)“ | H | falsch | „Energieeffizienzklasse Raumheizung, Niedertemperatur … A+++“ (A++ bei 55 °C) | „Effizienzklasse A+++ bei 35 °C“ |
| WO-09 | CHA „Vorlauftemperatur: bis 60°C“, FAQ „…bis 60°C, bei Unterstützung durch den Heizstab auch höher“ | H | falsch | „max. Vorlauf im reinen Wärmepumpenbetrieb … 70“ °C | „bis 70 °C ohne Heizstab“ |
| WO-10 | CHA „Kältemittel: R410A oder R32“ | H | falsch | „Kältemitteltyp / GWP R290 / 0,02“ | „R290 (Propan)“ |
| WO-11 | „Überströmventil inklusive“ | H | unbelegt | nur CHC mit optionalem 35-l-Reihenpuffer „inkl. Überstromventil“ | streichen |
| WO-12 | „Aktiv- oder Passiv-Kühlung möglich“ | H | falsch | aktive Kühlung ab Werk; passive Kühlung nur bei BWS-1/BWW-1 mit Kühlmodul | „Aktive Kühlung möglich“ |
| WO-13 | CHA-16/20 „Leistung: 10-15 kW bei A7/W35“ | H | falsch | A7/W35-Nennleistung 7,3 bzw. 8,7 kW; max. bei A−7/W35 16,7 bzw. 19,6 kW | „max. 16,7 bzw. 19,6 kW bei −7 °C“ |
| WO-14 | CHA-16/20 „Modulierende Leistung 20-100%“ | H | unbelegt | kein Modulationsbereich genannt | streichen |
| WO-15 | CHA-16/20 „Vorlauftemperatur: bis 65°C“ | H | falsch | „70°C Vorlauftemperatur für bestehende Heizkörper“ | „bis 70 °C“ |
| WO-16 | CHA-16/20 „9 kW Heizstab serienmäßig“ | H | unbelegt | nur für 07/10 belegt | streichen |
| WO-17 | CHA-16/20 „Für größere Einfamilienhäuser, Doppelhäuser oder kleinere Gewerbeobjekte“ | H | unbelegt | WOLF: „speziell für Mehrfamilienhäuser entwickelt“ | WOLF-Formulierung übernehmen |
| WO-18 | „CHC-Monoblock – Kompakt-Serie“: „4-8 kW“, „Kleinste Abmessungen in der Klasse“, FAQ „…kompakte Serie für kleinere Leistungen (4-8 kW)“ | H | falsch | WOLF: „Das WOLF Wärmepumpencenter ist in verschiedenen Ausführungen für Ein- und Zweifamilienhäuser verfügbar.“ CHC/200 bzw. /300 = CHA-Außenmodul + Innenmodul mit 180/280 l Speicher | „Wärmepumpen-Center CHC: CHA-Außengerät plus Inneneinheit mit 180 oder 280 l Warmwasserspeicher“ |
| WO-19 | BWS-1 „Leistung: 5-16 kW“ | H | korrekt | „Heizleistung von 6, 8, 10, 12, oder 16 kW … bis 63°C“ | „6–16 kW, bis 63 °C“ |
| WO-20 | BWS-1 „SCOP: bis 5,2 (höchste Effizienz)“, „Modulierende Inverter-Technologie“, „Sehr leise“, „Langlebig und wartungsarm“ | H | unbelegt | nur Klassen A+++/A++; Kältemittel R407C; COP B0/W35 4,6–4,7 | „BWS-1: 6–16 kW, A+++ (35 °C), Kältemittel R407C“ |
| WO-21 | „Wenn eine Wärmepumpe nicht umsetzbar ist, bieten Wolf Brennwertkessel höchste Effizienz bei Gasheizungen.“ | M | unbelegt | Superlativ; GModG-/Förderhinweis fehlt | Abschnitt F; Frage 10 |
| WO-22 | CGB-2-14/20 „Leistung: 14-20 kW“ | H | korrekt* | Nennleistung bis 19,6/23,0 kW (CGB-2-20); es gibt auch CGB-2-24 und die Kombigeräte CGB-2K | ergänzen |
| WO-23 | CGB-2 „Normnutzungsgrad: bis 98%“ | H | falsch | „Normnutzungsgrad bei 40/30°C (Hi/Hs) (%) 110/99“ | „bis 110 % (Hi) bzw. 99 % (Hs)“ |
| WO-24 | Garantie: Benefit „5 Jahre Garantie auf Wärmepumpen“, Box | H | korrekt* | „5 Jahre Garantie für alle in Deutschland gekauften und installierten sowie online registrierten WOLF Wärmeerzeuger…“; Registrierung ≤ 12 Monate nach Inbetriebnahme, **Inbetriebnahme durch WOLF-Fachpartner**, Wartungsnachweis | Bedingungen ergänzen; Frage 1 (ohne WOLF-Fachpartner keine 5 Jahre) |
| WO-25 | „Smart Grid Ready … über Schnittstellen“, FAQ „…Smart Grid Ready … Die Wolf Smartset Regelung“ | H | korrekt* | CHA-16/20: „SG- und EEBus-Ready“; CHA-07/10: PV-Eingang; Smartset ist App/Portal, Regelung ist BM-2; WOLF Link serienmäßig | „PV-Eingang, SG Ready/EEBus je nach Modell; Bedienung per WOLF Link und Smartset-App“ |
| WO-26 | FAQ „Die Effizienz ist sehr gut, wenn auch nicht ganz auf dem Niveau der Premiummodelle von Viessmann oder Vaillant. Dafür ist das Preis-Leistungs-Verhältnis ausgezeichnet.“ | M | unbelegt | Vergleich ohne Beleg (§ 6 UWG); in test 10/2023 lag die WOLF CHA-10 mit gut (2,3)* vor der Vaillant aroTHERM plus (2,5)* | streichen |
| WO-27 | FAQ Altbau „…bis 60°C … Bei sehr hohem Heizbedarf empfehlen wir Hochtemperatur-Modelle anderer Hersteller.“ | H | veraltet | beruht auf dem falschen 60-°C-Wert; CHA bis 70 °C | „Mit bis zu 70 °C ohne Heizstab passt die CHA auch in viele Altbauten mit Heizkörpern; entscheidend ist die Heizlastberechnung.“ |
| WO-28 | FAQ „Wir installieren die Wolf CHA-Monoblock Serie (7, 10, 16/20 kW) … CHC-Monoblock Serie für kompakte Lösungen … BWS-1“ | Z | veraltet | CHC falsch beschrieben; neu: CHA SE-07/SE-10 („Technisch identisch mit der bewährten CHA“) | neuer Text + Frage 1c |
| WO-29 | Hero „…überzeugt durch Zuverlässigkeit und gutes Preis-Leistungs-Verhältnis“, Box „ausgezeichnetes Preis-Leistungs-Verhältnis und kompakte Bauweise“ | M | unbelegt | – | streichen |
| WO-30 | „Als autorisierter Wolf Fachpartner …“, „Zertifizierte Wolf-Installation“ | Z | unbelegt | WOLF-Garantie setzt Inbetriebnahme durch einen WOLF-Fachpartner voraus | Frage 1 |
| WO-31 | „Original-Ersatzteile ab Lager“ | Z | unbelegt | – | Frage 11 |
| WO-32 | „Kostenlose Beratung vor Ort“, „Heizlastberechnung nach DIN“, „Förderantrag-Unterstützung“, „Installation in 2-3 Tagen“ | Z | unbelegt | – | Fragen 5–7 |
| WO-33 | „über 20 Jahren Erfahrung mit Wolf-Produkten. Mehr als 60 zufriedene Kunden“ | Z | unbelegt | – | Fragen 1d, 14 |
| WO-34 | Gerätepreise „CHA-07 ab 7.100€, CHA-10 ab 7.900€, ab 9.500€, ab 7.500€, BWS-1 ab 11.000€, CGB-2 ab 3.100€“, FAQ | P | unbelegt | – | streichen |
| WO-35 | „Komplett ab 18.000€ / 19.500€ / 22.000€ / 18.500€ / 28.000-38.000€“, FAQ „18.000-28.000€“ | P | falsch | Abschnitt A | streichen |
| WO-36 | CGB-2 „Komplett ab 7.200€“ | P | falsch | Ratgeber 9.000–15.000 € | streichen |
| WO-37 | Schema `AggregateOffer` 18.000–38.000 € | P | falsch | Abschnitt A | entfernen |
| WO-38 | Referenz „Einfamilienhaus Augsburg (2024)“: CHA-10 „7,5 kW“, Bj. 1995, Gas, „JAZ: 4,1 \| Einsparung: ~1.900€/Jahr“ | R | riskant | „7,5 kW“ ist kein WOLF-Wert | Frage 12 |
| WO-39 | Referenz „Neubau Bobingen (2024)“: CHA-07 „5,2 kW“, KfW55, „SCOP 4,7 (A++)“, „Heizkosten ~450€/Jahr“ | R | riskant | Klasse falsch (A+++) | Frage 12 |
| WO-40 | Referenz „Doppelhaushälfte Ulm (2023)“: „CHC-Monoblock, 6 kW“, „JAZ: 4,0“ | R | riskant | CHC hat keine eigene Leistungsgröße | Frage 12 |
| WO-41 | Referenz „Modernisierung Memmingen (2024)“: CHA-16/20, „60°C Vorlauftemperatur“, „Heizstab als Backup“ | R | riskant | 16/20 laut WOLF für Mehrfamilienhäuser | Frage 12 |
| WO-42 | „Förderung: bis 80% KfW BEG möglich“ (Referenz 2024) | F | falsch | BEG EM 2024: Obergrenze 70 % | streichen |

**Empfohlene Struktur des Marketing-Texts:**
- **Stärkster belegbarer Punkt:** „Made in Germany – entwickelt und gefertigt in Mainburg“ für die CHA mit R290, 70 °C ohne Heizstab und A+++.
- **Weitere Modelle:** die CHC als Komplettpaket mit Speicher und die CHA-16/20 für größere Gebäude.
- **Garantie:** nur mit den WOLF-Bedingungen; die Inbetriebnahme durch einen WOLF-Fachpartner ist Voraussetzung, deshalb Frage 1 zuerst klären.
- **Entfällt:** Vergleiche mit anderen Marken und Preis-Leistungs-Floskeln.

---

## 6. /partner/bosch

Quellen (Abruf 24.10.2026):
- Programm: [Luft-Wasser-Übersicht](https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/luft-wasser-waermepumpen-854511-c/), [Neues Wärmepumpen-Programm](https://www.bosch-homecomfort.com/de/de/wohngebaeude/unternehmen/presse/das-neue-bosch-waermepumpen-programm/)
- Produktseiten: [Compress 3800i AW](https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/compress-3800i-aw-21901212-p/), [5800i AW](https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/compress-5800i-aw-19312694-p/), [8800i AW](https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/compress-8800i-aw-21901211-p/), [7001i AW](https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/compress-7001i-aw-854515-p/), [7800i LW](https://www.bosch-homecomfort.com/de/de/ocs/wohngebaeude/compress-7800i-lw-17878961-p/)
- Service und Unternehmen: [Garantie](https://www.bosch-homecomfort.com/de/de/wohngebaeude/service-und-support/garantie/), [Impressum Bosch Home Comfort Group](https://www.bosch-homecomfortgroup.com/en/impressum/)

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| BO-01 | Benefit „Teil des Bosch Weltkonzerns“, Badge „Bosch Gruppe“ | H | korrekt | Impressum: Bosch Thermotechnik GmbH, Wetzlar; Bosch Home Comfort Group | „Bosch Home Comfort – Teil der Bosch-Gruppe“ |
| BO-02 | „Weltkonzern-Qualität“ (Meta, Hero, Feature, Box „Von der Weltkonzern-Innovation profitieren“, Referenz, Schema) | M | unbelegt | – | streichen |
| BO-03 | Feature „Innovation und Qualität aus über 130 Jahren Erfahrung“, H2 „Innovation seit 1886“ | H | korrekt* | Bosch gegründet 1886 (140 Jahre) | „seit 1886“ |
| BO-04 | Benefit „Compress Serie mit höchster Energieeffizienz“, Hero „…höchste Effizienz, Zuverlässigkeit und zukunftssichere Technologie“, FAQ „…gehört Bosch zu den effizientesten Wärmepumpen am Markt“ | M | unbelegt | Bosch: 3800i AW „SCOP von bis zu 5,14 bei 35 °C“ | „Effizienzklasse A+++, SCOP bis 5,14 (Compress 3800i AW, 35 °C)“ |
| BO-05 | „Bis 70°C Vorlauftemperatur“ · Benefit, Feature, FAQ Altbau | H | korrekt* | 6800i: „…maximale Vorlauftemperatur liegt bei 75 °C, bei -10 °C … 65 °C“; 8800i: 75 °C (70 °C bei −10 °C) | „bis 75 °C (Compress 6800i und 8800i AW)“ |
| BO-06 | „Natürliches Kältemittel R290“ · Benefit, Feature, FAQ „Alle mit … R290 Kältemittel“ | H | falsch | 3800i/5800i/6800i/8800i: R290; 7001i (früher 7000i) AW: „Kältemitteltyp R410A“ | „R290 bei Compress 3800i, 5800i, 6800i und 8800i AW“ |
| BO-07 | Feature „Natürliches Kältemittel Propan mit GWP 3. Zukunftssicher ohne F-Gase.“ | H | veraltet | Hersteller nennen GWP 0,02 (Abschnitt G) | „Treibhauspotenzial nahe null“ |
| BO-08 | „5 Jahre Garantie“ · Benefit, Box | H | korrekt* | Bosch: „…5 Jahre- oder 5+2-Jahre-Systemgarantie“ für Bosch-Systeme (7 J. mit HomeCom Pro); Detailbedingungen nicht abgerufen | „Bosch-Systemgarantie 5 Jahre, mit HomeCom Pro bis 7 Jahre – Bedingungen laut Bosch“ |
| BO-09 | „Weltweiter Service“, Feature „Ersatzteilverfügbarkeit durch globales Bosch-Netzwerk gesichert“, Box „Original-Ersatzteile weltweit“ | M | unbelegt | keine Bosch-Aussage gefunden | streichen |
| BO-10 | Feature „Smart Home Ready – Integration mit Bosch Smart Home und Fremdsystemen“, FAQ „Alle Compress Modelle sind Smart Grid Ready“ | H | unbelegt | Bosch erklärt SG Ready allgemein und verweist auf die SG-Ready-Datenbank des BWP | „PV-Kopplung möglich; ob Ihr Modell SG Ready ist, prüfen wir“ |
| BO-11 | FAQ „HomeCom Easy ist die Bosch Regelung … via Touchscreen oder App“, Produktblock „HomeCom Easy Regelung“ | H | falsch | Bosch: „…über das intuitive UI 800 Farbdisplay an der Inneneinheit … oder einfach über die HomeCom Easy App“ | „Bedienung am Farbdisplay UI 800 oder per HomeCom-Easy-App“ |
| BO-12 | FAQ „Wir installieren die Compress 7000i AW, Compress 6000 AW sowie Compress 7800i AW (Premium). Alle mit … R290“ | Z | falsch | 7800i nur als LW (Sole-Wasser); 6000 AW nicht im Programm; 7000i heißt heute 7001i und läuft mit R410A | neuer Text + Frage 1c |
| BO-13 | Block „Compress 7000i AW – Premium Monoblock“, „Leistung: 5-17 kW“ | H | veraltet | DE-Übersicht: „Compress 7001i AW … von 4 kW bis 13 kW“; nicht Teil des neuen Programms | Block ersetzen (6800i AW: R290, 3,9–11,6 kW, 75 °C, SCOP bis 4,8) |
| BO-14 | 7000i AW „Kältemittel: R290“ | H | falsch | „Kältemitteltyp R410A … 3,3 kg … 6,89 tCO2eq“ | entfällt mit Block |
| BO-15 | 7000i AW „SCOP: bis 4,8 (A+++)“, „Vorlauftemperatur: bis 70°C“, „Smart Grid Ready“ | H | unbelegt | auf der 7001i-Seite nicht angegeben | entfällt mit Block |
| BO-16 | 7000i AW „Monoblock Außenaufstellung“, „Aktive Kühlung integriert“ | H | korrekt | „…kann z. B. an heißen Sommertagen Ihre Wohnung auch mühelos kühlen.“ | entfällt mit Block |
| BO-17 | Block „Compress 7800i AW – Top-Premium“: „Das Spitzenmodell von Bosch“, „SCOP: bis 5,1“, „Besonders leise“; FAQ „Die Compress 7800i sogar bis 5,1“ | H | falsch | Eine Compress 7800i AW gibt es nicht: „Compress 7800i LW \| Sole-Wasser-Wärmepumpe“; leiseste Bosch-Wärmepumpe ist laut Bosch die 5800i AW | Block ersetzen: 5800i AW („laut Bosch die leiseste Wärmepumpe von Bosch“, 28,5 dB(A) in 3 m nachts, R290, 3,9–11,6 kW) und 8800i AW (Altbau, bis 75 °C, 11–15 kW, Kaskade bis 45 kW) |
| BO-18 | Block „Compress 6000 AW – Einstieg“: „4-8 kW“, „SCOP: bis 4,3 (A+)“ | H | veraltet | nicht im Programm; „Die Compress 3800i AW ist der Einstieg in das Bosch Wärmepumpen-Programm.“ | Block ersetzen: 3800i AW (4–13 kW, R290, SCOP bis 5,14, Kühlung serienmäßig) |
| BO-19 | Schema `manufacturer` URL `bosch-thermotechnology.com` | H | veraltet | leitet per 301 auf bosch-homecomfort.com | URL `https://www.bosch-homecomfort.com/de/` |
| BO-20 | Hero-Bild-Alt „Bosch Compress 5800i AW Wärmepumpe im Garten“ | H | korrekt | 5800i AW aktuell gelistet | behalten; Seitentext an das Bild anpassen |
| BO-21 | „Als Bosch Fachpartner …“, „Zertifizierte Bosch-Installation“, „volle Bandbreite der Bosch Thermotechnik“ | Z | unbelegt | – | Frage 1 |
| BO-22 | „Regelmäßige Schulungen“ | Z | unbelegt | – | Frage 1b |
| BO-23 | „Kostenlose Beratung“, „Heizlastberechnung“, „Förderantrag-Unterstützung“, „Installation in 2-3 Tagen“ | Z | unbelegt | – | Fragen 5–7 |
| BO-24 | Gerätepreise „ab 8.500€ / 11.000€ / 7.800€ (Gerät)“, FAQ | P | unbelegt | – | streichen |
| BO-25 | „Komplett ab 19.500€ / 25.000€ / 18.000€“, FAQ „19.500-32.000€“ | P | falsch | Abschnitt A | streichen |
| BO-26 | Schema `AggregateOffer` 18.000–32.000 € | P | falsch | Abschnitt A | entfernen |
| BO-27 | Referenz „Einfamilienhaus Ulm (2024)“: Compress 7000i AW 9 kW, Bj. 1994, Öl, „JAZ: 4,2 \| Einsparung: ~2.100€/Jahr“ | R | riskant | Werte identisch mit Vaillant-Referenz Augsburg | Frage 12 |
| BO-28 | Referenz „Neubau Augsburg (2024)“: „Compress 7800i AW, 7 kW“, KfW40, „SCOP 5,1“, „Heizkosten ~400€/Jahr“ | R | riskant | Modell existiert nicht als Luft-Wasser-Wärmepumpe | Frage 12 |
| BO-29 | „Förderung: bis 80% KfW BEG möglich“ (Referenz 2024) | F | falsch | BEG EM 2024: Obergrenze 70 % | streichen |

**Empfohlene Struktur des Marketing-Texts:**
- **Aktuelles Programm statt der alten 7000er/6000er**, alle mit R290:
  - 3800i AW: Einstieg, SCOP bis 5,14
  - 5800i AW: laut Bosch die leiseste Bosch-Wärmepumpe, für den Neubau
  - 6800i AW: Sanierung, 75 °C
  - 8800i AW: Altbau und Mehrfamilienhaus, 75 °C
- **Bedienung:** UI 800 und HomeCom-Easy-App.
- **Garantie:** Systemgarantie 5 bzw. 5+2 Jahre mit Bedingungen.
- Das Hero-Bild zeigt schon die 5800i AW.
- **Entfällt:** Referenzen und Preise.

---

## 7. /partner/daikin

Quellen (Abruf 24.10.2026):
- Unternehmen: [Über Daikin](https://www.daikin.de/de_de/privatkunden/ueber-uns.html), [100 Jahre Daikin](https://www.daikin.eu/en_us/about/100-years-daikin.html)
- Wärmepumpen: [Luft-Wasser-Übersicht](https://www.daikin.de/de_de/privatkunden/produkte-und-beratung/produktkategorien/waermepumpen/luft-wasser-waermepumpe.html), [Altherma 3 R F](https://www.daikin.de/de_de/privatkunden/produkte-und-beratung/produktkategorien/waermepumpen/luft-wasser-waermepumpe/daikin-altherma-3-r-f.html), [Altherma 3 H HT F](https://www.daikin.de/de_de/privatkunden/produkte-und-beratung/produktkategorien/waermepumpen/luft-wasser-waermepumpe/daikin-altherma-3-h-ht-f.html), [Altherma 4](https://www.daikin.de/de_de/privatkunden/kampagnen/daikin-altherma-4.html), [Altherma 3 GEO](https://www.daikin.de/de_de/privatkunden/produkte-und-beratung/produktkategorien/waermepumpen/erdwaermepumpen/daikin-altherma-3-geo.html)
- Klimageräte und VRV: [Perfera](https://www.daikin.de/de_de/privatkunden/produkte-und-beratung/produktkategorien/klimaanlagen/perfera-wandgeraet.html), [Ururu Sarara](https://www.daikin.de/de_de/privatkunden/produkte-und-beratung/produktkategorien/klimaanlagen/ururu-sarara.html), [VRV](https://www.daikin.de/de_de/ueber-daikin/fuehrende-technologien/variables-kaeltemittelvolumen.html)
- Garantie: [Garantiebedingungen](https://www.daikin.de/de_de/ueber-daikin/garantiebedingungen.html)

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| DA-01 | „Weltmarktführer in Klimatechnik“ (Meta, Hero, Benefit, Feature, Badge, „volle Bandbreite des Weltmarktführers“, Schema) | M | unbelegt | Daikin: „…gehört zu den führenden Anbietern in den Bereichen Heizung, Klimatisierung, Lüftung …“; daikin.eu: „number one manufacturer of hydronic heat pumps in Europe“ | „einer der weltweit führenden Hersteller für Heiz- und Klimatechnik“; Badge „Seit 1924“ |
| DA-02 | „Japanische Qualität und Innovation seit 1924“ | H | korrekt | „…seit 1924“; gegründet 1924 in Osaka | behalten |
| DA-03 | Produktblock „Altherma 3 H – Standard-Temperaturen“, FAQ „Daikin Altherma 3 H kostet …“ | H | falsch | Niedertemperatur heißt Altherma 3 R (Split) bzw. 3 M (Monoblock); „3 H“ gibt es nur als 3 H MT und 3 H HT | „Daikin Altherma 3 R“ |
| DA-04 | „Leistung: 4-16 kW“ | H | unbelegt | Altherma 3 R: „4 – 8 kW“ | „4–8 kW“ |
| DA-05 | „SCOP: bis 5,15 (A+++)“, Feature „SCOP-Werte bis 5,15 bei Altherma 3. Höchste Energieeffizienz und niedrigste Betriebskosten.“, FAQ „…gehört damit zu den effizientesten Wärmepumpen weltweit“ | H | unbelegt | „Energieeffizienzklasse Heizen bis zu A+++“; kein SCOP 5,15 auf daikin.de; Stiftung Warentest 10/2023: Altherma 3 H MT „befriedigend“* | „Effizienzklasse bis A+++“; Superlative streichen |
| DA-06 | Altherma 3 H „Vorlauftemperatur: bis 55°C“ | H | falsch | Altherma 3 R: „…bis zu 65 °C“ | „bis 65 °C“ |
| DA-07 | „Kältemittel: R32“ | H | korrekt | „R-32-Verdichter“ | behalten + Hinweis F-Gase 2027 (Abschnitt G) |
| DA-08 | „Aktive Kühlung integriert“, Benefit „Aktive Kühlung serienmäßig“, Feature „Heizen & Kühlen“, FAQ „Kann Daikin wirklich heizen UND kühlen? Ja! …“ | H | korrekt* | „Heizung, Kühlung und Warmwasserbereitung“; Ausnahme: ECH2O-Ausführung „nur Heizen“; Kühlung hängt vom Wärmeverteiler ab | „Kühlen bei den meisten Varianten möglich (abhängig von Fußbodenheizung bzw. Heizkörpern)“ |
| DA-09 | „Madoka-Regelung“, Feature „Smart Control: Madoka-Regelung und App-Steuerung“ | H | unbelegt | Altherma: „Smarte Regelung über die Onecta App …“; Altherma 4: „MMI-4 Regler“; Madoka ist ein Kabel-Raumthermostat | „Regler am Gerät und Onecta-App“ |
| DA-10 | Altherma 3 H „Besonders leise“ | M | unbelegt | Daikin nennt für das Außengerät der 3 R F 44–50 dB(A), ohne Messart im Auszug | Wert mit Messart nennen oder streichen |
| DA-11 | „Bis 70°C Vorlauftemperatur“ · Benefit, Feature „Altherma 3 H HT erreicht bis 70°C“, Produktblock, FAQ Altbau | H | korrekt* | 3 H HT: „…bis zu 70 °C bei –15 °C“; Altherma 4 H: „bis zu 75 °C bei –15 °C (8–14 kW)“ | „bis 70 °C (3 H HT) bzw. 75 °C (Altherma 4 H, R290)“ |
| DA-12 | 3 H HT „Auch bei -20°C effizient“ | H | unbelegt | Daikin: „Betrieb bis zu –28 °C“; SCOP 3 H HT 4,51–4,81 (35 °C) bzw. 3,57–3,63 (55 °C) | „Betrieb bis −28 °C, 70 °C bis −15 °C außen“ |
| DA-13 | „Ideal für unsanierte Altbauten“, „Keine Heizkörper-Anpassung nötig“ · Produktblock, FAQ | H | korrekt* | Daikin-FAQ: „…ohne dass die Heizkörper ausgetauscht oder weitere Arbeiten durchgeführt werden müssen“; 3-H-HT-Seite: Tausch „könnte“ nötig sein | „in der Regel ohne Heizkörpertausch – das zeigt die Heizlastberechnung“ |
| DA-14 | Altherma 3 GEO „SCOP: bis 5,5 (höchste Effizienz)“, „Sehr leise“, „Langlebig und wartungsarm“ | H | unbelegt | GEO im Programm, „Wassertemperatur von bis zu 65 °C“; kein SCOP | „Altherma 3 GEO – Sole-Wasser, bis 65 °C“ |
| DA-15 | „5 Jahre Garantie“ · Benefit, Partner-Vorteile | H | falsch | „Wärmeerzeuger (Altherma)“: „2 Jahre (optional: 5 Jahre)“; 5 J. nur mit Registrierung ≤ 6 Monate über „Stand by Me“, Inbetriebnahme durch geschultes Fachhandwerk, jährliche Wartung (Stand 01.04.2026) | „2 Jahre Daikin-Garantie, auf 5 Jahre erweiterbar (Registrierung über ‚Stand by Me‘, jährliche Wartung)“ |
| DA-16 | Perfera „Premium Wand-Split“, „A+++-Effizienz beim Kühlen“ | H | korrekt* | „Saisonale Effizienz bis zu A+++ im Kühl- und Heizbetrieb“ | „bis A+++“ |
| DA-17 | Perfera „Heizen bis -25°C Außentemperatur“ | H | unbelegt | Seite nennt keinen Einsatzbereich | streichen oder Datenblatt |
| DA-18 | Perfera „Flüsterleise ab 19 dB(A)“, „WiFi-Steuerung“ | H | korrekt | „19 dB(A) (flüsterleise)“; „Onecta App …“ | „Steuerung per Onecta-App“ |
| DA-19 | Ururu Sarara „Flaggschiff“, „Luftbefeuchtung und Entfeuchtung“, „Selbstreinigungsfunktion“, „Premium Design“, „Höchster Komfort“ | H | korrekt* | „Ururu Sarara heizt, kühlt, befeuchtet, entfeuchtet, belüftet und reinigt die Luft.“; „Selbstreinigender Luftfilter“; „Flaggschiff“ und „Höchster Komfort“ sind nicht Daikins Worte | „selbstreinigender Filter“; Superlative streichen |
| DA-20 | FAQ „VRV (Variable Refrigerant Volume) ist Daikins Multisplit-Technologie für Gewerbe …“ | H | korrekt | „VRV ist die Abkürzung für Variable Refrigerant Volume … ein geschützter Begriff von Daikin“ | behalten |
| DA-21 | FAQ „Unterschied Altherma und Klimaanlage … Beide von Daikin können heizen und kühlen.“ | H | korrekt | Perfera und Ururu Sarara heizen und kühlen | behalten |
| DA-22 | FAQ „Welche Daikin Systeme installiert HeizCenter? … Altherma 3 … Perfera & Ururu Sarara … VRV-Systeme für Gewerbe“ | Z | unbelegt | die R290-Generation Altherma 4 H fehlt | Frage 15 |
| DA-23 | „Als Daikin Partner …“, „Zertifizierte Daikin-Installation“ | Z | unbelegt | – | Frage 1 |
| DA-24 | „Kältetechniker-Expertise“, „Original-Ersatzteile“ | Z | unbelegt | Über uns: „Kältetechniker nach ChemKlimaschutzV“ | behalten (deckt sich mit Über uns) |
| DA-25 | „Beratung vor Ort“, „Dimensionierung“, „Förderantrag-Hilfe“, „Installation & Service“ | Z | unbelegt | – | behalten (unkritisch); Frage 6 |
| DA-26 | Gerätepreise „ab 9.500€ / 11.500€ / 13.000€ (Gerät)“, „Klimaanlagen: ab 2.800€ (Gerät)“, FAQ | P | unbelegt | Ratgeber nennt für Split-Geräte 600–1.500 € | streichen |
| DA-27 | „Komplett ab 21.000€ / 26.000€ / 32.000€“, FAQ „21.000-34.000€“ | P | falsch | Abschnitt A | streichen |
| DA-28 | Klimaanlagen „Komplett ab 4.500€“ | P | falsch | Ratgeber: Split für 1 Raum 1.500–3.500 € inkl. Montage | streichen; Verweis auf den Klima-Kostenratgeber |
| DA-29 | Schema `AggregateOffer` 21.000–34.000 € | P | falsch | Abschnitt A | entfernen |
| DA-30 | Referenz „Einfamilienhaus Augsburg (2024)“: „Altherma 3 H, 8 kW“, Neubau, „SCOP 5,15 (höchste Effizienz)“ | R | riskant | Modellbezeichnung gibt es so nicht | Frage 12 |
| DA-31 | Referenz „Altbau Ulm (2023)“: „Altherma 3 H HT, 12 kW“, Bj. 1972, „Keine Sanierung nötig“, „JAZ: 3,5“ | R | riskant | 3 H HT gibt es nur mit 14/16/18 kW | Frage 12 |
| DA-32 | Referenz „Geschäftshaus Memmingen (2024)“: VRV, 12 Innen-/2 Außengeräte, „Energieeinsparung: 40%“ | R | riskant | kein Nachweis | Frage 12 |
| DA-33 | Referenz „Wohnung Bobingen (2024)“: Perfera 3,5 kW, Schlafzimmer, „Nur 19 dB(A) im Flüstermodus“ | R | riskant | kein Nachweis | Frage 12 |

**Empfohlene Struktur des Marketing-Texts:**
- **Hauptprodukt:** die Altherma 4 H (R290, bis 75 °C, A+++) für den Altbau.
- **Daneben:** Altherma 3 R (Neubau; R32, mit F-Gase-Hinweis 2027) und Altherma 3 GEO.
- **Zweites Standbein:** Split-Klimageräte (Perfera, Ururu Sarara) mit belegten Werten (19 dB(A)).
- **Vertrauensanker:** Daikin seit 1924, „einer der führenden Hersteller“, Garantie 2 Jahre (5 mit „Stand by Me“).
- **Entfällt:** „Weltmarktführer“, SCOP-Werte ohne Quelle und Preise.

---

## 8. /partner/zewotherm

Quellen (Abruf 24.10.2026):
- ZEWOTHERM: [Produktseite LAMBDA](https://zewotherm.com/de/produkte/waermepumpen/waermepumpe-lambda.html), [Manufaktur Remagen](https://zewotherm.com/de/unternehmen/produktion/manufaktur-waermepumpe-lambda.html), [EU35L](https://zewotherm.com/de/unternehmen/aktuelles/news/die-neue-zewo-lambda-eu35l.html), [Impressum](https://zewotherm.com/de/impressum.html)
- LAMBDA: [EUREKA](https://www.lambda-wp.com/en/eureka-eu10l-eu13l-eu15l-eu20l)
- Gütesiegel: [EHPA AT-HP-01257](https://ql.ehpa.org/database/label/at-hp-01257)
- Förderung: [kfw.de/458](https://www.kfw.de/458), [KfW 358/359](https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Einzelma%C3%9Fnahmen-Erg%C3%A4nzungskredit-Wohngeb%C3%A4ude-(358-359)/), `src/lib/config/foerderung.ts`

| # | Aussage (Kurzzitat · Fundstelle) | Klasse | Status | Quelle / Beleg | Vorschlag |
|---|---|---|---|---|---|
| ZE-01 | Benefit „Hersteller: ZEWOTHERM Heating GmbH, Sitz Remagen (Rheinland-Pfalz)“, Hero „…der ZEWOTHERM Heating GmbH aus Remagen“, Schema `manufacturer` | H | korrekt* | „Am ZEWOTHERM Standort Remagen werden unter der Marke „ZW L“ die Wärmepumpen LAMBDA … hergestellt“, „in deutscher Lizenz“; Entwicklung: LAMBDA Wärmepumpen GmbH, Kirchbichl (Tirol) | „ZEWO Wärmepumpe LAMBDA – entwickelt von der LAMBDA Wärmepumpen GmbH (Tirol), in Lizenz gefertigt von ZEWOTHERM in Remagen“ |
| ZE-02 | Modelle „EU10L, EU13L, EU15L, EU20L und EU35L“ · FAQ, Modellübersicht, Bild-Alt, Meta | H | korrekt | ZEWOTHERM: „Die Modelle EU10L, EU13L und EU15L … 9,2 bis 15,4 kW bei –10 °C“; EU20L bis 21 kW; EU35L bis 33 kW, „2026 neu eingeführt“ | Leistungen ergänzen |
| ZE-03 | „Patentierter 3K-Prozess“ mit Beschreibung „…effiziente Abtauzyklen, optimierter Kältekreis und geringe Stillstandsverluste“ · Benefit, Feature, FAQ, Badge, Meta, Schema | H | korrekt | LAMBDA: „…patented 3K process“; ZEWOTHERM: „…für besonders effiziente Abtauzyklen, einen optimierten Kältemittelkreislauf und geringe Stillstandsverluste“ | behalten |
| ZE-04 | „SCOP bis 6,1 (gem. EN 14825)“ · Benefit, Kennzahl, FAQ, Meta, Schema, Badge | H | korrekt* | „SCOP-Werten von bis zu 6,1 bei Flächenheizung / Niedertemperatur und 4,5 bei Heizkörper / Hochtemperatur“ | „SCOP bis 6,1 bei 35 °C (Fußbodenheizung), 4,5 bei 55 °C (Heizkörper) – Herstellerangabe nach EN 14825“ |
| ZE-05 | „Spitzenwert seiner Klasse“, „Spitzenwert für Luft-Wasser-Wärmepumpen“, Hero „Eine der effizientesten Luft-Wasser-Wärmepumpen am Markt“, FAQ „einer der besten Werte … am Markt“, H2 „Neue Maßstäbe für effizientes Heizen“ | M | unbelegt | LAMBDA: EU13L SCOP 6,10 „Top score at the … test center in Buchs (as of Jan. 2026)“; Herstellerangaben uneinheitlich (EU13L 5,7 / 5,96 / 6,10) | „Laut LAMBDA Bestwert im Wärmepumpen-Testzentrum Buchs (EU13L, Stand 01/2026)“ oder streichen |
| ZE-06 | „Vorlauftemperatur bis 70 °C – ohne Heizstab“ · Benefit, Feature, Kennzahl, FAQ, Meta, Schema | H | korrekt | „Vorlauftemperaturen von bis zu 70 °C ohne Heizstab“ | behalten |
| ZE-07 | FAQ „…kommt die LAMBDA auch in unsanierten Altbauten ohne zusätzlichen Heizstab aus … ein aufwendiger Tausch ist meist nicht nötig.“ | M | unbelegt | – | „…ob Ihre Heizkörper reichen, zeigt die raumweise Heizlastberechnung“ |
| ZE-08 | „Flüsterleiser Betrieb (gemessen nach EN 12102)“, „Eine der leisesten Luft-Kompakt-Wärmepumpenserien am Markt“ | H | korrekt | ZEWOTHERM wortgleich; Schallleistung EU13L 44, EU10L 45, EU15L 46, EU20L 50 dB(A) | Werte + „laut Hersteller“ |
| ZE-09 | „R290 (GWP 3)“, „GWP 3 – F-Gase-sicher“, FAQ „GWP von nur 3“ | H | veraltet | R290 korrekt; ZEWOTHERM/LAMBDA nennen keinen GWP, andere Hersteller GWP 0,02 | „Treibhauspotenzial nahe null“ |
| ZE-10 | „Bis zu 30 % weniger Stromverbrauch … (Herstellerangabe)“ | H | korrekt | ZEWOTHERM: „…um bis zu 30 % gegenüber anderen A+++-Hocheffizienz-Wärmepumpen“ (FAQ/Manufaktur-Seite: 26 %) | behalten |
| ZE-11 | „Heizen & Kühlen“ · Feature, Hydraulik-Liste, FAQ | H | korrekt | LAMBDA: „Cooling is available as standard.“ | behalten |
| ZE-12 | „EMS mit VPN-Fernzugriff“, „Smartes EMS mit Fernzugriff per VPN“ | H | unbelegt | LAMBDA: „End-to-end encrypted remote access“; ZEWOTHERM: „Fernwartungsportal“ | „verschlüsselter Fernzugriff über das Fernwartungsportal“ |
| ZE-13 | „Komplettsystem aus Außeneinheit (Monoblock) und passender Hydraulikstation geliefert“, „Passende Hydraulikstation aus dem ZEWOTHERM-System“ | H | falsch | Hydraulik ist optionales Zubehör: „ZEWO ECO Kombispeicher“, „ZEWO PowerBox LAMBDA“ | „Passende Hydraulik (PowerBox oder ECO-Kombispeicher) gibt es als Zubehör“ |
| ZE-14 | „Monoblock-Bauweise – keine Kältemittelarbeiten im Haus“ | H | korrekt | LAMBDA: „Air/water monoblock“ | behalten |
| ZE-15 | „Mit EHPA-Gütesiegel zertifiziert“ | H | korrekt | EHPA AT-HP-01257, Inhaber LAMBDA Wärmepumpen GmbH, EU08L–EU35L, gültig bis 04.06.2029 | „EHPA-Gütesiegel (Nr. AT-HP-01257)“ |
| ZE-16 | „voll BEG-förderfähig“, FAQ „Die LAMBDA ist BEG-förderfähig (KfW-Zuschuss 458 für bestehende Wohngebäude)“ | F | korrekt* | ZEWOTHERM: „Die LAMBDA ist BAFA-förderfähig und steht auf der offiziellen Liste förderbarer Wärmepumpen.“ (BAFA-Liste nicht selbst geprüft) | „förderfähig nach KfW 458 im bestehenden Wohngebäude (laut Hersteller auf der Liste förderfähiger Wärmepumpen)“; „voll“ streichen |
| ZE-17 | EU10L „Perfekt für kleinere und mittelgroße Neubauten“, EU13L „Ideal für größere Wohnhäuser oder modernisierte Altbauten“ | H | korrekt* | ZEWOTHERM: EU10L, EU13L, EU15L „für Ein- und Zweifamilienhäuser“ | weniger absolut formulieren |
| ZE-18 | „EU15L / EU20L – Mehrfamilienhaus & Gewerbe … ohne aufwendige Kaskadierung“, FAQ „EU15L und EU20L (Mehrfamilienhäuser und Gewerbe …)“ | H | falsch | „Die Modelle EU10L, EU13L und EU15L sind kompakte Luft/Wasser-Wärmepumpen für Ein- und Zweifamilienhäuser.“; EU20L „für größere Wohngebäude oder anspruchsvollere Sanierungen“ | „EU15L für größere Ein- und Zweifamilienhäuser, EU20L für größere Wohngebäude“ |
| ZE-19 | „EU35L – für Großobjekte … Auch hier ohne Kaskadierung einsetzbar“, „…deckt alle Leistungsklassen ohne aufwendige Kaskadierung ab“ | H | falsch | „…besonders für große Anlagen oder Kaskadenlösungen ausgelegt“; „Dank flexibler Kaskadierung … bis zu 200 Wohneinheiten“ | „EU35L (bis 33 kW, neu 2026): für Mehrfamilienhäuser und Gewerbe, kaskadierbar“ |
| ZE-20 | FAQ „Laut Hersteller sind auf Wunsch bis zu 5 Jahre Garantie möglich … Als Fachpartner kümmern wir uns … um Registrierung, Wartung und ggf. Garantieverlängerung“ | H | korrekt* | „Die Garantie ist kostenpflichtig; Preis: EU10–EU20 590€ netto & EU35 1115€ netto (Stand Januar 2026).“; Anbindung Fernwartungsportal, jährliche Wartung mit Protokoll, Inbetriebnahme durch ZEWOTHERM oder Fachpartner; Vertrag ZEWOTHERM ↔ Installateur | „5 Jahre Garantie auf die Hauptkomponenten gegen Aufpreis (laut ZEWOTHERM 590 € netto für EU10–EU20, Stand 01/2026); Voraussetzung: Anbindung ans Fernwartungsportal und jährliche Wartung“ + Frage 1 |
| ZE-21 | Intro „…erfüllt sie höchste Anforderungen an Nachhaltigkeit und Wohnkomfort“, Hero „Premium-Wärmepumpentechnik“ | M | unbelegt | – | ohne Superlativ |
| ZE-22 | Bild-Alt „ZEWOTHERM Wärmepumpe LAMBDA EU35L vor modernem Gebäude – installiert von HeizCenter“ | R | riskant | kein Nachweis; EU35L erst 2026 eingeführt | Frage 13; bis dahin „ZEWOTHERM LAMBDA EU35L (Herstellerfoto)“ und Nutzungsrecht prüfen (HEC-190) |
| ZE-23 | H2 „Bis zu 80 % Förderung sichern“, „Je nach Ausgangslage und Einkommen sind bis zu 80 % … möglich“ | F | falsch | KfW 458: 80 % nur bis 30.000 € zvE (mit Kind 40.000 €), sonst max. 70 % | „Bis zu 70 % Förderung – mit niedrigem Einkommen bis 80 %“ + `FOERDER_TEXT.maxHinweis` |
| ZE-24 | Karte „30 % Grundförderung – Beim Tausch alter Öl-, Gas- oder Kohleheizungen gegen eine Wärmepumpe“ | F | falsch | Grundförderung 30 % für alle Antragsteller beim Einbau im Bestand (`foerderung.ts`, kfw.de/458), nicht an Tausch fossiler Heizung gebunden | „30 % Grundförderung für den Einbau einer Wärmepumpe in ein bestehendes Wohngebäude“ |
| ZE-25 | Karte „+16 % Klimageschwindigkeitsbonus … Für Selbstnutzer, bei Antrag bis 31.01.2027“ | F | korrekt | `foerderung.ts` | + „danach halbjährlich sinkend“ (`FOERDER_TEXT.klimaHinweis`) |
| ZE-26 | Karte „bis +40 % Einkommensbonus: 40 % bis 30.000 €, 30 % bis 40.000 €, 10 % bis 50.000 €“ | F | korrekt | `foerderung.ts` | + „mit Kind +10.000 €“ |
| ZE-27 | FAQ Förderung (30 % / +16 % / Einkommensbonus / „Insgesamt höchstens 70 %, 80 % nur bei …“ / Kredit 358/359) | F | korrekt | `foerderung.ts`, kfw.de/458 | behalten; zum 01.02.2027 nachziehen |
| ZE-28 | Box „Ergänzungskredit KfW 358/359 … zinsverbilligte … (358 für Selbstnutzer, 359 für Eigentümer mit Einkommensbonus) bis zu 120.000 € förderfähige Kosten pro Wohneinheit“ | F | falsch | KfW: 358 = Selbstnutzer mit Haushaltsjahreseinkommen bis 90.000 € (Zinsvorteil), 359 = alle anderen; „bis zu 120.000 Euro Kredit je Wohneinheit“ | „Ergänzungskredit KfW 358/359: zinsgünstiger Kredit bis 120.000 € je Wohneinheit für die Kosten laut Zuschusszusage; Selbstnutzer mit Haushaltseinkommen bis 90.000 € erhalten als ‚Ergänzungskredit Plus‘ (358) einen zusätzlichen Zinsvorteil. Beantragung über Ihre Bank.“ |
| ZE-29 | Hinweis „Förderbedingungen können sich ändern … BAFA, KfW“ | F | korrekt | – | behalten |
| ZE-30 | „Als Fachpartner für Wärmepumpen begleiten wir Ihr LAMBDA-Projekt … über die Förderantragstellung …“ | Z | falsch | kfw.de/458: Antrag durch den Eigentümer, „Bevollmächtigung von Dritten ist nicht zulässig“; „Fachpartner“ unbelegt | Text aus Abschnitt B; Frage 1 |
| ZE-31 | „Kostenlose Vor-Ort-Beratung in der Region“, „Heizlastberechnung nach DIN EN 12831“, „Förderberatung BEG EM & KfW 358/359“, „Schallschutz-Planung für enge Bebauung“, „Komplette Installation in 2–3 Tagen“ | Z | unbelegt | – | Fragen 5–7, 17 |
| ZE-32 | „Einweisung & Übergabe-Protokoll“, „Wartungsvertrag mit Festpreis“, „Fern-Diagnose über das EMS“, „Garantie-Registrierung beim Hersteller“ | Z | unbelegt | – | Fragen 4, 17 |
| ZE-33 | „24/7 Notdienst in der Region“ | Z | falsch | `/notdienst`: nur Wartungskunden | „24/7-Notdienst für Wartungskunden“ |
| ZE-34 | „Wir beraten Sie unabhängig: Wenn die LAMBDA … die beste Wahl ist, sagen wir das – wenn ein anderer Hersteller besser passt, ebenso.“ | Z | unbelegt | – | behalten (bestes Argument der Seite), wenn gelebte Praxis |
| ZE-35 | CTA „Jetzt Förderung für Ihre LAMBDA prüfen lassen … wir berechnen Ihren möglichen Zuschuss“ | Z | unbelegt | – | behalten |
| ZE-36 | Schema `AggregateOffer` ohne Preis, `InStock` | P | falsch | Angebot ohne Preisangabe | entfernen |

**Empfohlene Struktur des Marketing-Texts:** Inhaltlich ist das die stärkste der acht Seiten. Sie arbeitet mit echten Herstellerwerten: SCOP 6,1 bei 35 °C, 70 °C ohne Heizstab, R290, EHPA-Siegel.
- **Zu korrigieren:**
  - Herkunft: Lizenzfertigung in Remagen, Entwicklung bei LAMBDA in Tirol.
  - Modellzuordnung: Die EU15L ist ein Gerät für Ein- und Zweifamilienhäuser, die EU35L ist kaskadierbar.
  - Hydraulik als Zubehör, Garantie gegen Aufpreis.
  - Förderblock: Bedingung für 70/80 % und KfW 358/359 richtig darstellen.
- **Übernehmen:** Der Satz „Wir beraten unabhängig … wenn ein anderer Hersteller besser passt, ebenso“ ist das beste Verkaufsargument und gehört auf alle Partnerseiten.

---

## Fragen an Andrej

Bitte je Frage ja/nein. Bis zur Antwort stehen auf den Seiten die entschärften Formulierungen aus den Tabellen.

**1. Hersteller-Status** (je Zeile ja/nein; bei „ja“ die genaue Bezeichnung laut Urkunde/Vertrag)

| Hersteller | a) Offizieller Partnerstatus (Urkunde/Vertrag)? | b) Werks-/Produktschulung in den letzten 24 Monaten? | c) In den letzten 2 Jahren Geräte eingebaut? | d) Seit über 20 Jahren mit der Marke? |
|---|---|---|---|---|
| Viessmann | | | | |
| Vaillant | | | | |
| Buderus | | | | |
| Wolf | | | | |
| Bosch | | | | |
| Daikin | | | | |
| ZEWOTHERM (LAMBDA) | | | | – |

Wichtig: Davon hängen auch Garantien ab. WOLF gibt 5 Jahre nur bei Inbetriebnahme durch einen WOLF-Fachpartner, die LAMBDA-Garantie schließt ZEWOTHERM mit dem Installateur ab, und Daikin verlangt geschultes Fachhandwerk.

2. Bauen wir außer diesen 7 Marken auch andere Wärmepumpen oder Kessel ein? (Die Übersicht sagt „ausschließlich“.)
3. Gibt HeizCenter selbst eine Garantie über die gesetzliche Mängelhaftung hinaus (Badge „5 Jahre Garantie“)? Wenn ja: worauf und unter welchen Bedingungen?
4. Registrieren wir neue Anlagen beim Hersteller, damit die Herstellergarantie verlängert wird (z. B. Viessmann ViCare, Vaillant, Buderus, WOLF)?
5. Dauert die Montage einer Luft-Wasser-Wärmepumpe im Einfamilienhaus vor Ort in der Regel 2–3 Arbeitstage?
6. Ist die Erstberatung vor Ort kostenlos und unverbindlich?
7. Machen wir bei jedem Wärmepumpenangebot eine raumweise Heizlastberechnung nach DIN EN 12831?
8. Ist HeizCenter bei der KfW als Fachunternehmen registriert und stellt die „Bestätigung zum Antrag“ (BzA) und die „Bestätigung nach Durchführung“ (BnD) selbst aus?
9. Bleibt der 24/7-Notdienst ausschließlich Kunden mit Wartungsvertrag vorbehalten?
10. Bieten wir 2026 noch neue Gas-Brennwertkessel an (Vitodens, ecoTEC, Logamax, WOLF CGB-2)?
11. Haben wir Original-Ersatzteile im eigenen Lager („ab Lager“, Vaillant- und Wolf-Seite)?
12. Gibt es die Referenzanlagen in der Tabelle unten wirklich, und haben die Kunden der Veröffentlichung (Ort, Jahr, Modell, Kennzahlen) zugestimmt? (je Zeile ja/nein)
13. Haben wir schon eine ZEWOTHERM LAMBDA eingebaut? (Das Bild-Alt der ZEWOTHERM-Seite sagt „installiert von HeizCenter“.)
14. Kundenzahlen: Stimmt „über 800 zufriedene Kunden“ (Über uns)? Stimmt „über 500 Wärmepumpen in Bayern installiert“ (Blog)? (Die Partnerseiten sagen „über 60 zufriedene Kunden“.)
15. Bauen wir Daikin-VRV-Anlagen für Gewerbe und Daikin-Split-Klimageräte (Perfera, Ururu Sarara) ein?
16. Führen wir Wärmepumpenprojekte in Mehrfamilienhäusern und in „Gewerbe & Industrie“ aus?
17. ZEWOTHERM-Seite: Bieten wir (a) einen Wartungsvertrag mit Festpreis, (b) Fern-Diagnose über das LAMBDA-Portal, (c) Schallschutzplanung für enge Bebauung an?

**Referenzanlagen zu Frage 12**

| # | Seite | Karte | Auffällig | Anlage existiert? | Kunde hat zugestimmt? |
|---|---|---|---|---|---|
| 1 | Viessmann | EFH Bobingen 2024, Vitocal 250-A 10 kW, Bj. 1985 | – | | |
| 2 | Viessmann | Neubau Gutenzell-Hürbel 2024, Vitocal 222-G 8 kW | „SCOP 5,2“ als Projektwert | | |
| 3 | Viessmann | MFH Augsburg 2023, Vitocal 350-A 20 kW, 6 WE | Modell nicht mehr im Programm | | |
| 4 | Viessmann | Altbau Ulm 2024, Vitocal 300-A 12 kW, Bj. 1960 | 300-A beginnt bei 13,2 kW | | |
| 5 | Vaillant | EFH Augsburg 2024, aroTHERM plus VWL 95/6 | Typ gab es nie; Werte = Bosch Ulm | | |
| 6 | Vaillant | Neubau Ulm 2024, aroTHERM pro 7 kW | „SCOP 5,4“ (Gerät max. 5,01) | | |
| 7 | Vaillant | DHH Bobingen 2024, Split plus VWL 55/8.2 AS | Kundenzitat „kaum hörbar“ | | |
| 8 | Vaillant | RMH Memmingen 2023, aroTHERM plus VWL 75/6 | – | | |
| 9 | Buderus | EFH Bobingen 2024, WLW186i-10 AR E, Bj. 1988 | – | | |
| 10 | Buderus | Neubau Ulm 2024, WSW196i 9 kW | 9 kW gibt es nicht; „SCOP 5,5“ | | |
| 11 | Buderus | DHH Augsburg 2024, WLW176i-7 AR | „Nachbarn zufrieden“ | | |
| 12 | Buderus | Altbau Memmingen 2023, WLW186i-12 AR E, Bj. 1965 | – | | |
| 13 | Wolf | EFH Augsburg 2024, CHA-10 „7,5 kW“, Bj. 1995 | 7,5 kW kein WOLF-Wert | | |
| 14 | Wolf | Neubau Bobingen 2024, CHA-07 „5,2 kW“ | „SCOP 4,7 (A++)“ | | |
| 15 | Wolf | DHH Ulm 2023, CHC-Monoblock 6 kW | CHC hat keine Leistungsgröße | | |
| 16 | Wolf | Modernisierung Memmingen 2024, CHA-16/20 | – | | |
| 17 | Bosch | EFH Ulm 2024, Compress 7000i AW 9 kW, Bj. 1994 | Werte = Vaillant Augsburg | | |
| 18 | Bosch | Neubau Augsburg 2024, Compress 7800i AW 7 kW | Modell gibt es nicht (nur 7800i LW) | | |
| 19 | Daikin | EFH Augsburg 2024, Altherma 3 H 8 kW, Neubau | Modellname gibt es nicht | | |
| 20 | Daikin | Altbau Ulm 2023, Altherma 3 H HT 12 kW, Bj. 1972 | 3 H HT nur 14/16/18 kW | | |
| 21 | Daikin | Geschäftshaus Memmingen 2024, VRV, 12/2 Geräte | „40 % Einsparung“ | | |
| 22 | Daikin | Wohnung Bobingen 2024, Perfera 3,5 kW | – | | |
| 23 | ZEWOTHERM | Bild „LAMBDA EU35L … installiert von HeizCenter“ | EU35L erst 2026 | | |

22 Referenzkarten (Viessmann, Vaillant, Buderus, Wolf und Daikin je 4, Bosch 2) und das ZEWOTHERM-Bild.

## Zählung je Status

| Seite | Aussagen | korrekt | korrekt* | veraltet | falsch | unbelegt | riskant |
|---|---|---|---|---|---|---|---|
| /partner | 49 | 7 | 10 | 5 | 9 | 18 | 0 |
| /partner/viessmann | 47 | 2 | 2 | 5 | 17 | 17 | 4 |
| /partner/vaillant | 44 | 5 | 2 | 6 | 13 | 14 | 4 |
| /partner/buderus | 43 | 4 | 3 | 7 | 16 | 9 | 4 |
| /partner/wolf | 42 | 2 | 5 | 2 | 13 | 16 | 4 |
| /partner/bosch | 29 | 3 | 3 | 4 | 8 | 9 | 2 |
| /partner/daikin | 33 | 5 | 5 | 0 | 6 | 13 | 4 |
| /partner/zewotherm | 36 | 12 | 5 | 1 | 9 | 8 | 1 |
| **Summe** | **323** | **40** | **35** | **30** | **91** | **104** | **23** |

Nach Klasse:

| Klasse | Zeilen | Statusverteilung |
|---|---|---|
| H Herstellerfakt | 175 | 35 korrekt, 26 korrekt*, 26 veraltet, 55 falsch, 33 unbelegt |
| T Test/Testsieger | 9 | 3 korrekt*, 4 falsch, 2 unbelegt |
| P Preis | 24 | 18 falsch, 6 unbelegt |
| R Referenzprojekt | 23 | 23 riskant |
| Z HeizCenter-Zusage | 44 | 4 veraltet, 4 falsch, 36 unbelegt |
| F Förderung | 13 | 4 korrekt, 1 korrekt*, 8 falsch |
| M Marketing | 35 | 1 korrekt, 5 korrekt*, 2 falsch, 27 unbelegt |

Handlungsbedarf (alles außer „korrekt“): 283 von 323 Zeilen. Davon lösen sich die 36 unbelegten HeizCenter-Zusagen und die 23 Referenzen mit Andrejs Antworten (Fragen 1–17).

## Die 5 riskantesten Stellen

1. **Partnerstatus „zertifizierter/autorisierter Fachpartner“ auf der Übersicht und allen sechs Markenseiten**, auf der ZEWOTHERM-Seite als „Fachpartner für Wärmepumpen“ (P-01, P-07, VI-10, VA-32, BU-31, WO-30, BO-21, DA-23, ZE-30), dazu Logos unter „Unsere Premium-Partner“. Belegt sind nur Kundenkonten bei Viessmann und Buderus. Unwahre Statusangaben stehen auf der „schwarzen Liste“ des UWG und können markenrechtlich abgemahnt werden. Bei WOLF, ZEWOTHERM und Daikin hängt zudem die beworbene Garantie am Status. → Sofort entschärfen, Frage 1.
2. **Referenzprojekte auf sechs Seiten** (22 Karten plus ZEWOTHERM-Bild „installiert von HeizCenter“). Sie nennen Modelle, die es nicht gibt (Compress 7800i AW, VWL 95/6, Altherma 3 H HT 12 kW), identische Kennzahlen über Marken hinweg, ein Kundenzitat „Nachbarn berichten: ‚kaum hörbar‘“ und für 2024 „bis 80 % Förderung“. Für Leser sieht das wie ein Beleg aus. → Offline nehmen, Frage 12.
3. **Testwerbung Viessmann** (VI-01, VI-02, P-10) mit „Testsieger 2024 & 2025, GUT (2,0)“. Einen Viessmann-Test 2024 gab es nicht, die Note gehört nur zu test 10/2025 und nur zum Typ A10. Als Testgründe stehen dort „SCOP 5,1“ und „35 dB(A)“. Dazu auf der Übersicht „Höchste Qualität und Zuverlässigkeit garantiert“ (P-06) und bei Buderus „Preis-Leistungs-Sieger“ ohne Test (BU-03). → Korrigieren nach Abschnitt H.
4. **Komplettpreise und Schema-Preisspannen auf sieben Seiten** (z. B. VI-34, VA-37, BU-36, WO-35, BO-25, DA-27/28 und die Schema-Zeilen). Ein „Komplett ab 16.000–23.000 €“ für Luft-Wasser liegt unter dem eigenen Ratgeber (27.000–40.000 €) und unter dem günstigsten der 160 VZ-Angebote (21.099 €). Das wirkt als Lockpreis. → Streichen, Ratgeber-Satz einsetzen.
5. **Garantieangaben ohne Bedingungen oder falsch**:
   - Viessmann „10 Jahre Garantie“ (VI-08/09, P-13); tatsächlich höchstens 5 bzw. 6 Jahre.
   - Übersicht „5 Jahre Garantie“ ohne Absender (P-08) und „5-10 Jahre“ (P-09).
   - Daikin „5 Jahre“; Standard sind 2 Jahre (DA-15).
   - Buderus „5 Jahre, erweiterbar“; die 5 Jahre gibt es nur für Systempakete und ohne Verlängerung (BU-28).

   → Herstellerbedingungen nennen, Frage 3.

**Knapp dahinter:**
- „Bis zu 80 % Förderung sichern“ ohne Bedingung und falscher Text zu KfW 358/359 (ZE-23, ZE-28).
- Falsches Kältemittel „R410A oder R32“ bei WOLF (WO-10) und „Alle mit R290“ bei Bosch (BO-06).
- „24/7 Notdienst“ ohne Wartungsvertrags-Bedingung (P-48, ZE-33).
- „Made in Germany“ bei Viessmann und Vaillant (VI-03, VA-02).

## Nebenbefunde (außerhalb des Prüfumfangs)

- `/foerderung`: Der Link „KfW 358/359 Details“ (`…/Erg%C3%A4nzungskredit-%E2%80%93-Wohngeb%C3%A4ude-(358-359)/`) liefert 404. Aktuelle URL: https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Einzelma%C3%9Fnahmen-Erg%C3%A4nzungskredit-Wohngeb%C3%A4ude-(358-359)/
- `/ueber-uns`: „…berechtigt, staatliche Förderungen für unsere Kunden zu beantragen“ widerspricht KfW 458 (Antrag nur durch den Eigentümer, keine Bevollmächtigung Dritter).
- Kundenzahlen widersprechen sich: Über uns „800+“, Blog `waermepumpe-kosten-2026` „Über 500 Wärmepumpen in Bayern installiert“, Partnerseiten „über 60“.
- `src/app/llms.txt/route.ts`: „Hersteller-Partner: Viessmann, …“ an Andrejs Antwort zu Frage 1 anpassen. Dasselbe gilt für `service-schema.tsx`, sofern dort Partnerschaft behauptet wird; die Markennennung als `Brand` ist unkritisch.
- Buderus-Breadcrumb-Schema: Tippfehler „uuderus“. Breadcrumb-Namen auf anderen Seiten kleingeschrieben („viessmann“, „vaillant“, „wolf“).
- `/standorte/augsburg` FAQ: „Alle Marken bieten höchste Effizienz und sind perfekt für …“ ist ein Superlativ ohne Beleg.
- Blog `waermepumpe-kosten-2026`: nennt den VZ-RLP-Durchschnitt 36.300 €. Die zweite Auswertung (PM 02.07.2026) nennt rund 36.400 € bei einer Spanne von 21.099–54.168 €.
- Montagedauer widersprüchlich: `/waermepumpe` „2-3 Tage“, ein Blogbeitrag „3-5 Tagen“.

## Grenzen der Prüfung

- **Stiftung Warentest:** Die Notentabellen liegen hinter der Paywall. Mit * markierte Noten stammen aus Sekundärquellen. Für die Endfassung die Hefte 10/2023, 8/2024 und 10/2025 freischalten (je 5,90 €).
- **Herstellerangaben:** Herstellerseiten wurden am 24.10.2026 gelesen. Einige Zitate stammen aus automatischer Extraktion oder Suchauszügen (Bosch-Garantie-Unterseiten, Buderus-Stromverbrauch). Die Hersteller widersprechen sich teils selbst (Viessmann-Schallwerte, LAMBDA-SCOP je Modell, Bosch 7001i-Leistung).
- **SCOP- und SG-Ready-Werte:** Für einige Modelle nicht belegt, weil die Hersteller sie nicht auf Endkundenseiten nennen (Daikin, Viessmann 150-A). Eigene Umrechnungen aus ηs sind als solche markiert und nicht als Beleg verwendet.
- **Selbst gegengeprüft:** Viessmann-Garantie, Buderus WLW186i AR (Leistung, SCOP, Schall, Vorlauf), WOLF CHA 07/10 (Kältemittel, Vorlauf, Heizstab), KfW 358/359, KfW 458, BEG EM 2024 (70 %), F-Gase 2027, VZ RLP. Alle übrigen Herstellerwerte stammen aus der Recherche der Teilagenten mit URL.
- **Nicht geprüft:** BAFA-Liste förderfähiger Wärmepumpen und Fertigungsorte jenseits der Herstellerangaben.
- **Keine Rechtsberatung.** Die rechtlichen Hinweise ordnen nur das Risiko ein.
