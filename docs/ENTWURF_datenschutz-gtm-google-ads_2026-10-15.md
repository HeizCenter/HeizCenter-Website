# ENTWURF — Datenschutz & Cookie-Hinweis für GTM / Google Ads

**Stand:** 2026-10-15 · **Status:** Entwurf, Prüfung durch Jev, Freigabe durch Andrej · **Nicht live**

Anlass: Andrej / Ads-Dienstleister möchten den Google Tag Manager `GTM-KBSNLM3Q` auf heizcenter.de einbauen lassen (Google Ads).

## Ausgangslage (geprüft am 15.10.2026)

- Container `GTM-KBSNLM3Q` öffentlich abgerufen: **Version 1, leer** (keine Tags, keine Trigger, keine CMP).
- Website hat **keinen Cookie-Banner**. Aktiv ist nur Vercel Web Analytics (cookielos, `src/app/layout.tsx`).
- `src/app/datenschutz/page.tsx` Abschnitt 5 sagt „Diese Website nutzt keine Analyse-Tools“ — **schon heute falsch** (Vercel Analytics läuft).
- `src/app/cookie-hinweis/page.tsx` listet Odoo-Cookies (`session_id`, `frontend_lang`, `utm_*`, `im_livechat_*`) — die Website läuft nicht auf Odoo, die Liste ist veraltet.
- Formulare zeigen Erfolg inline (keine Danke-Seite) → Conversions brauchen dataLayer-Events.

## Annahme dieses Entwurfs

Variante **„GTM erst nach Einwilligung“** (Consent Mode v2, Standard = abgelehnt, GTM lädt erst nach „Akzeptieren“).
Abschnitte, die sich bei einer anderen Variante ändern, sind mit **[VARIANTE]** markiert. Offene Zulieferungen des Ads-Dienstleisters mit **[OFFEN-ADS]**.

---

## A. Datenschutzerklärung — Abschnitt 4 „Cookies“ (Ergänzung)

Bestehender zweiter Absatz wird ersetzt durch:

> Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO und § 25 Abs. 2 Nr. 2 TDDDG gespeichert. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Technologien abgefragt wurde, erfolgt die Speicherung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Die Einwilligung ist jederzeit für die Zukunft widerrufbar.
>
> Welche Cookies im Einzelnen verwendet werden, entnehmen Sie unserem [Cookie-Hinweis](/cookie-hinweis).

## B. Datenschutzerklärung — Abschnitt 5 „Analyse-Tools und Werbung“ (ersetzt den bisherigen Text vollständig)

### Einwilligungsverwaltung (Cookie-Banner)

> Beim ersten Besuch unserer Website fragen wir über ein Banner ab, ob Sie in den Einsatz von Marketing-Diensten (Google Tag Manager, Google Ads) einwilligen. Ohne Ihre Einwilligung werden diese Dienste nicht geladen.
>
> Ihre Auswahl sowie der Zeitpunkt der Entscheidung werden im lokalen Speicher Ihres Browsers abgelegt, damit das Banner nicht bei jedem Seitenaufruf erneut erscheint. Diese Speicherung ist technisch erforderlich, um Ihre Entscheidung umzusetzen (Art. 6 Abs. 1 lit. c DSGVO i. V. m. Art. 7 Abs. 1 DSGVO, § 25 Abs. 2 Nr. 2 TDDDG). Die Auswahl wird nach 12 Monaten verworfen, danach fragen wir erneut.
>
> Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen“ im Fußbereich jeder Seite ändern oder widerrufen.

### Google Tag Manager

> Wir nutzen den Google Tag Manager. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
>
> Der Google Tag Manager ist ein Werkzeug, mit dem wir Tracking- und Marketing-Dienste auf unserer Website einbinden können. Er selbst erstellt keine Nutzerprofile und speichert keine Cookies. Beim Laden wird jedoch Ihre IP-Adresse an Google übertragen; dabei kann es auch zu einer Übermittlung an die Google LLC in den USA kommen.
>
> **[VARIANTE]** Der Google Tag Manager wird nur geladen, wenn Sie über unser Cookie-Banner eingewilligt haben. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG; die Einwilligung ist jederzeit widerrufbar.

### Google Ads (Conversion-Tracking und Remarketing)

> Wir nutzen Google Ads, um auf unsere Leistungen aufmerksam zu machen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
>
> **Conversion-Tracking:** Wenn Sie über eine Google-Anzeige auf unsere Website gelangen, kann Google ein Cookie setzen. Sendet ein Besucher danach z. B. eine Anfrage über eines unserer Formulare ab, erkennen Google und wir, dass eine Anzeige zu dieser Anfrage geführt hat („Conversion“). Wir erhalten dabei nur statistische Auswertungen (z. B. Anzahl der Conversions je Anzeige), keine Informationen, mit denen wir Sie persönlich identifizieren können.
>
> **Remarketing:** **[OFFEN-NIKO — nur behalten, wenn Remarketing eingesetzt wird]** Mit Remarketing können wir Besuchern unserer Website später auf anderen Websites im Google-Werbenetzwerk Anzeigen einblenden, die sich auf unsere Leistungen beziehen. Dazu wird Ihr Browser mittels Cookie einer Zielgruppe zugeordnet.
>
> Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Die Einwilligung ist jederzeit widerrufbar. Die von Google Ads gesetzten Cookies werden in der Regel nach spätestens 90 Tagen gelöscht **[OFFEN-NIKO — Laufzeiten gem. Container bestätigen]**.
>
> Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission sowie auf den Angemessenheitsbeschluss zum EU-US Data Privacy Framework gestützt, unter dem die Google LLC zertifiziert ist.
>
> Weitere Informationen: [Google-Datenschutzerklärung](https://policies.google.com/privacy) · Personalisierte Werbung abschalten: [Google-Werbeeinstellungen](https://adssettings.google.com/)

### Google Consent Mode

> Wir verwenden den Google Consent Mode (Version 2). Er sorgt dafür, dass Google-Dienste auf unserer Website Ihre Auswahl im Cookie-Banner berücksichtigen: Solange Sie nicht eingewilligt haben, ist die Speicherung von Werbe- und Analyse-Cookies blockiert. **[VARIANTE]** Da der Google Tag Manager bei uns erst nach Ihrer Einwilligung geladen wird, werden ohne Einwilligung keine Daten an Google übertragen.

### Vercel Web Analytics

> Wir nutzen Vercel Web Analytics, um die Nutzung unserer Website statistisch auszuwerten (z. B. Seitenaufrufe, Herkunftsland, Gerätetyp). Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
>
> Vercel Web Analytics setzt keine Cookies und speichert keine Informationen auf Ihrem Endgerät. Besucher werden nicht über mehrere Tage oder Websites hinweg wiedererkannt; die Auswertung erfolgt ausschließlich zusammengefasst. Rechtsgrundlage ist unser berechtigtes Interesse an einer bedarfsgerechten Gestaltung unserer Website (Art. 6 Abs. 1 lit. f DSGVO).

*(Anbieteradresse Vercel 1:1 aus dem bestehenden Hosting-Abschnitt übernommen.)*

---

## C. Cookie-Hinweis (`/cookie-hinweis`) — neue Tabelle (ersetzt die Odoo-Liste)

| Kategorie | Zweck | Name / Anbieter | Speicherdauer |
|---|---|---|---|
| **Notwendig** | Speichert Ihre Auswahl im Cookie-Banner | `hc_consent` (localStorage, HeizCenter) | 12 Monate |
| **Marketing** (optional, nur nach Einwilligung) | Google Tag Manager: Einbindung der Marketing-Dienste | — (setzt selbst keine Cookies) | — |
| **Marketing** (optional, nur nach Einwilligung) | Google Ads Conversion-Tracking | `_gcl_au`, `_gcl_aw` (Google) **[OFFEN-ADS]** | bis 90 Tage |
| **Marketing** (optional, nur nach Einwilligung) | Google Ads Remarketing | `IDE`, `test_cookie` (doubleclick.net, Google) **[OFFEN-ADS]** | bis 13 Monate **[OFFEN-ADS]** |
| **Statistik** (cookielos) | Reichweitenmessung | Vercel Web Analytics — keine Cookies | — |

Einleitungstext der Seite (generisch, „Warenkorb“, „anmelden“) ebenfalls ersetzen — die Website hat weder Login noch Warenkorb. Finale Cookie-Liste erst, wenn der Ads-Dienstleister den Container veröffentlicht hat (per Browser-DevTools nach Einwilligung auslesen).

---

## Was NICHT abgedeckt ist

- **Enhanced Conversions** (gehashte E-Mail/Telefonnummer an Google): bräuchte eigenen Absatz und Prüfung nach `sensitive-flows.md` — nur falls der Ads-Dienstleister das plant.
- **GA4 über den Container:** eigener Abschnitt nötig, falls der Ads-Dienstleister GA4 einbindet.
- Ein Abschnitt zu den **Kontaktformularen** (Weiterleitung an n8n → Odoo) fehlt in der Datenschutzerklärung generell — separater Punkt, nicht Teil dieses Auftrags.
