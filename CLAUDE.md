# HEIZcenter Website

Next.js 14+, TypeScript, Tailwind CSS, deployed on Vercel.

## Domain Context

HeizCenter ist ein deutsches HVAC-Unternehmen mit:
- 3 Standorten: Bobingen und Klosterlechfeld (Bayern), Gutenzell-Huerbel (Baden-Wuerttemberg)
- Services: Waermepumpe, Heizung, Sanitaer, Klimaanlage, Solar
- 24 Service-Staedte in Bayern und Baden-Wuerttemberg
- BEG/KfW Foerderberatung

## Projekt-Patterns

- Blog-Content ist in `src/lib/api/blog.ts` (inline HTML Strings, kein CMS)
- Kontaktdaten zentralisiert in `src/lib/config/contact.ts` (Single Source of Truth)
- Redirects in `next.config.mjs` verwenden `statusCode: 301` (NICHT `permanent: true`)

## Contact Source of Truth

```
Telefon:  +49 8234 9665900
E-Mail:   service@heizcenter.de
Config:   src/lib/config/contact.ts
```

IMPORTANT: Quality Gates fuer Content-Aenderungen laden automatisch via `.claude/rules/heizcenter-quality-gates.md`.
