// HEC-185 — Artikel dürfen auf dem Handy nicht breiter als der Viewport sein (WebKit 430/375) + Desktop-Gegenprobe (Chromium 1280).
// Aufruf: URLS=<Datei mit /blog/<slug>-Zeilen> BASE=https://www.heizcenter.de DELAY=1500 node docs/qa/article-overflow.mjs
// Playwright-Import zeigt auf die globale Installation (kein devDependency des Projekts); Browser: webkit + chromium.
import { webkit, chromium, devices } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
import { readFileSync } from 'node:fs';
const base = process.env.BASE || 'http://localhost:3124';
const urls = readFileSync(process.env.URLS, 'utf8').trim().split('\n');
const delay = Number(process.env.DELAY || 0);
const probe = () => {
  const iw = innerWidth, sw = document.documentElement.scrollWidth; const over = [];
  const inScroller = el => { for (let a = el.parentElement; a; a = a.parentElement) { const o = getComputedStyle(a).overflowX; if (o === 'auto' || o === 'scroll') return true; } return false; };
  for (const el of document.querySelectorAll('main *, article *')) {
    const rect = el.getBoundingClientRect(); if (rect.width === 0) continue;
    if (rect.right > iw + 1 || rect.left < -1) { if (inScroller(el)) continue;
      const childOver = [...el.children].some(c => { const cr = c.getBoundingClientRect(); return cr.width > 0 && (cr.right > iw + 1 || cr.left < -1); });
      if (!childOver) over.push(`${el.tagName}.${(el.className || '').toString().slice(0, 50)} w=${Math.round(rect.width)} «${(el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)}»`); } }
  const wrappers = document.querySelectorAll('div.table-scroll').length, tables = document.querySelectorAll('table').length;
  const scrolling = [...document.querySelectorAll('div.table-scroll')].filter(w => w.scrollWidth > w.clientWidth + 1).length;
  return { iw, sw, over: over.slice(0, 4), n: over.length, wrappers, tables, scrolling };
};
let fail = 0;
const b = await webkit.launch();
for (const [label, opts] of [['WebKit 430', { ...devices['iPhone 15 Pro Max'] }], ['WebKit 375', { viewport: { width: 375, height: 812 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: devices['iPhone 15 Pro Max'].userAgent }]]) {
  const ctx = await b.newContext(opts); const p = await ctx.newPage(); const bad = []; let scrollingTables = 0, wrappersTotal = 0, tablesTotal = 0;
  for (const u of urls) { await p.goto(base + u, { waitUntil: 'load' }); await p.waitForTimeout(150 + delay);
    const r = await p.evaluate(probe); wrappersTotal += r.wrappers; tablesTotal += r.tables; scrollingTables += r.scrolling;
    if (r.sw > r.iw || r.n) bad.push(`${u} sw=${r.sw}/${r.iw} n=${r.n}\n   ` + r.over.join('\n   ')); }
  console.log(`=== ${label}: ${bad.length}/${urls.length} Seiten mit Überlauf · Tabellen ${tablesTotal}, Wrapper ${wrappersTotal}, davon scrollend ${scrollingTables}`); if (bad.length) { console.log(bad.join('\n')); fail++; }
  await ctx.close();
}
await b.close();
const c = await chromium.launch(); const p = await (await c.newContext({ viewport: { width: 1280, height: 900 } })).newPage(); const badD = []; let scrollingD = 0, mismatch = 0, tablesD = 0;
for (const u of urls) { await p.goto(base + u, { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150 + delay);
  const r = await p.evaluate(() => { const ws = [...document.querySelectorAll('div.table-scroll')]; const full = w => { const t = w.querySelector('table'); return t && (/width:\s*100%/.test(t.getAttribute('style') || '') || /(^|\s)(cost-table|min-w-full)(\s|$)/.test(t.className)); }; const mis = ws.filter(w => full(w) && Math.abs(w.querySelector('table').getBoundingClientRect().width - w.getBoundingClientRect().width) > 1).map(w => (w.querySelector('table').getAttribute('class') || '') + '|' + (w.querySelector('table').getAttribute('style') || '')); return { tables: document.querySelectorAll('table').length, wrappers: ws.length, scrolling: ws.filter(w => w.scrollWidth > w.clientWidth + 1).length, mismatch: mis.length, mis, sw: Math.max(...[...document.querySelectorAll('main *')].map(e => e.getBoundingClientRect().right)), iw: document.documentElement.clientWidth }; });
  tablesD += r.tables; scrollingD += r.scrolling; mismatch += r.mismatch; if (r.mis.length) console.log('   Tabelle schmaler als Rahmen:', u, r.mis.join(' ; ')); if (r.sw > r.iw || r.wrappers !== r.tables) badD.push(`${u} sw=${r.sw}/${r.iw} wrappers=${r.wrappers} tables=${r.tables}`); }
console.log(`=== Chromium 1280 (nur <main>, Kopfzeile ist bei 1280 px ein eigener Altbefund): Tabellen ${tablesD}, scrollende Rahmen ${scrollingD}, Tabelle schmaler als Rahmen: ${mismatch}, Seiten mit Überlauf/Wrapper≠Tabellen: ${badD.length}`); if (badD.length) { console.log(badD.join('\n')); fail++; } if (scrollingD || mismatch) fail++;
await c.close();
console.log(fail ? 'RESULT: FAIL' : 'RESULT: PASS'); process.exit(fail ? 1 : 0);
