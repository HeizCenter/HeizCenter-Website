// HEC-186 — /rechner darf auf dem Handy nicht breiter als der Viewport sein (WebKit iPhone 15 Pro Max 430 px + 375 px).
// Aufruf: BASE=https://www.heizcenter.de node docs/qa/rechner-overflow.mjs
import { webkit, devices } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3124'; let fail = 0;
const b = await webkit.launch();
for (const [label, opts] of [['430', { ...devices['iPhone 15 Pro Max'] }], ['375', { viewport: { width: 375, height: 812 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: devices['iPhone 15 Pro Max'].userAgent }]]) {
  const p = await (await b.newContext(opts)).newPage();
  await p.goto(base + '/rechner', { waitUntil: 'load' }); await p.waitForTimeout(500);
  const rej = p.getByRole('button', { name: 'Ablehnen' }); if (await rej.isVisible().catch(() => false)) { await rej.click(); await p.waitForTimeout(300); }
  const r = await p.evaluate(() => { const iw = innerWidth; const over = [];
    for (const el of document.querySelectorAll('main *')) { const rc = el.getBoundingClientRect(); if (rc.width && (rc.right > iw + 1 || rc.left < -1)) over.push(`${el.tagName}.${(el.className || '').toString().slice(0, 50)} l=${Math.round(rc.left)} r=${Math.round(rc.right)}`); }
    const card = document.querySelector('main form, main [class*="rounded-xl"]'); const rc = card.getBoundingClientRect();
    return { iw, sw: document.documentElement.scrollWidth, n: over.length, over: over.slice(0, 5), card: { l: Math.round(rc.left), r: Math.round(rc.right) } }; });
  const ok = r.sw === r.iw && r.n === 0; if (!ok) fail++;
  console.log(`${ok ? '✅' : '❌'} WebKit ${label}: scrollWidth=${r.sw}/${r.iw} Elemente außerhalb=${r.n} Rechner-Karte ${r.card.l}–${r.card.r}`); if (r.n) console.log('   ' + r.over.join('\n   '));
  if (process.env.S) { await p.evaluate(() => window.scrollTo(0, 700)); await p.waitForTimeout(300); await p.screenshot({ path: process.env.S + `/rechner-${label}-after.png` }); }
  await p.context().close();
}
await b.close(); console.log(fail ? 'RESULT: FAIL' : 'RESULT: PASS'); process.exit(fail ? 1 : 0);
