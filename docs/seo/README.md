# SEO und KI-Sichtbarkeit — Werkzeuge (HEC-178)

Stand: 23.10.2026

## Was die Site liefert
- `https://www.heizcenter.de/llms.txt` — Markdown-Index für KI-Assistenten, erzeugt zur Build-Zeit aus den Site-Daten (`src/app/llms.txt/route.ts`), Kontakt nur aus `src/lib/config/contact.ts`. Ehrliche Erwartung: kein großer Anbieter bestätigt, llms.txt zu lesen; Kosten null, Risiko null.
- `https://www.heizcenter.de/<key>.txt` — IndexNow-Key (Datei in `public/`). Bing und andere nehmen damit Pings über geänderte URLs an.
- AI-Crawler (GPTBot, ClaudeBot, PerplexityBot, ChatGPT-User) bekommen die Seiten vollständig (geprüft 23.10.2026); `robots.txt` sperrt nur `/api/`.

## Skripte (aus dem Repo-Root)
- `docs/seo/indexnow_ping.sh <URL …>` oder `--sitemap` — nach jedem Deploy mit geänderten URLs aufrufen. 200/202 = angenommen.
- `docs/seo/ai_referrals.sh 2026-10` — Besucher aus KI-Assistenten je Monat (Vercel Web Analytics, nur Besuche mit Einwilligung seit 20.10.2026). Ergebnis als Kommentar in HEC-178.

## Zuarbeit Jev (nicht per Agent möglich)
- Google Search Console: OAuth über Composio mit einem berechtigten Google-Konto; danach Export nach `docs/seo/gsc_<YYYY-MM>.md`.
- Bing Webmaster Tools: Site aus der Search Console importieren, Sitemap einreichen, IndexNow-Key wird automatisch erkannt.
- Entitätsdaten: Google Business Profile, Bing Places, 11880 — Name/Adresse/Telefon wie im Impressum.
