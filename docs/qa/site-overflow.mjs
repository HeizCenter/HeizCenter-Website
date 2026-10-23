// HEC-188 — Mobil-Überlauf über alle Sitemap-URLs (WebKit = iOS Safari), zwei Klassen:
//   1. Seite breiter als der Viewport (documentElement.scrollWidth > innerWidth)
//   2. geclippter Inhalt: Text, Links/Buttons, Bilder oder umrandete Boxen ragen über den Rand,
//      werden aber von einem overflow-hidden-Vorfahren abgeschnitten — scrollWidth sieht das nicht.
// Ausgenommen: Elemente in einem horizontalen Scroll-Rahmen (overflow-x auto/scroll, z. B. div.table-scroll),
// absolut/fest positionierte Deko und alles unter aria-hidden.
// Aufruf: BASE=https://www.heizcenter.de WIDTH=375 DELAY=900 node docs/qa/site-overflow.mjs  (Playwright global, Browser webkit)
import { webkit, devices } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3123';
const width = Number(process.env.WIDTH || 375), delay = Number(process.env.DELAY || 0);
const only = process.env.ONLY ? process.env.ONLY.split(',') : null;
const sitemap = await (await fetch(base + '/sitemap.xml', { headers: { 'user-agent': devices['iPhone 15 Pro Max'].userAgent } })).text();
const urls = only || [...new Set([...sitemap.matchAll(/<loc>https:\/\/www\.heizcenter\.de([^<]*)<\/loc>/g)].map(m => m[1] || '/'))];
const b = await webkit.launch();
const ctx = await b.newContext({ viewport: { width, height: 812 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: devices['iPhone 15 Pro Max'].userAgent });
const p = await ctx.newPage();
let bad = 0;
for (const u of urls) {
  try { await p.goto(base + u, { waitUntil: 'load' }); } catch { await p.waitForTimeout(800); await p.goto(base + u, { waitUntil: 'load' }); }
  await p.waitForTimeout(150 + delay);
  const r = await p.evaluate(() => {
    const iw = innerWidth;
    const scroller = el => { for (let a = el.parentElement; a; a = a.parentElement) { const o = getComputedStyle(a).overflowX; if (o === 'auto' || o === 'scroll') return true; } return false; };
    const decor = el => { for (let a = el; a && a !== document.body; a = a.parentElement) { if (a.getAttribute('aria-hidden') === 'true') return true; const pos = getComputedStyle(a).position; if (pos === 'absolute' || pos === 'fixed') return true; } return false; };
    const content = el => {
      if (/^(A|BUTTON|INPUT|SELECT|TEXTAREA|IMG|VIDEO)$/.test(el.tagName)) return true;
      if ([...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return true;
      const cs = getComputedStyle(el);
      return parseFloat(cs.borderRightWidth) > 0 && cs.borderRightColor !== 'rgba(0, 0, 0, 0)' && cs.borderRightStyle !== 'none';
    };
    const out = [];
    for (const el of document.querySelectorAll('body *')) {
      const rc = el.getBoundingClientRect();
      if (!rc.width || !rc.height || (rc.right <= iw + 1 && rc.left >= -1)) continue;
      if (scroller(el) || decor(el) || !content(el)) continue;
      out.push(`${el.tagName}.${(el.className || '').toString().slice(0, 50)} [${Math.round(rc.left)}–${Math.round(rc.right)}] «${(el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30)}»`);
    }
    return { iw, sw: document.documentElement.scrollWidth, n: out.length, out: out.slice(0, 4) };
  });
  if (r.sw > r.iw || r.n) { bad++; console.log(`❌ ${u}  scrollWidth=${r.sw}/${r.iw}  Inhalt außerhalb=${r.n}\n   ` + r.out.join('\n   ')); }
}
await b.close();
console.log(`=== WebKit ${width}px: ${bad}/${urls.length} Seiten mit Überlauf (Seite oder geclippter Inhalt)`);
console.log(bad ? 'RESULT: FAIL' : 'RESULT: PASS'); process.exit(bad ? 1 : 0);
