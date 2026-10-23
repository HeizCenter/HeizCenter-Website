// HEC-187 — Kopfzeile darf bei keiner Breite über den Viewport laufen; < 1280 px Burger, 1280–1365 px Telefon/WhatsApp nur Icon, ab 1366 px voll.
// Aufruf: BASE=https://www.heizcenter.de DELAY=1200 node docs/qa/header-widths.mjs   (Playwright global, Browser chromium + webkit)
import { chromium, webkit } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3124', delay = Number(process.env.DELAY || 0);
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15';
const widths = [375, 768, 820, 1024, 1180, 1279, 1280, 1365, 1366, 1536, 1920];
let fail = 0;
for (const [name, engine] of [['Chromium', chromium], ['WebKit', webkit]]) {
  const b = await engine.launch();
  for (const w of widths) {
    const mobile = w < 768; // unter 768 px wie ein iPhone emulieren (isMobile), sonst Desktop
    const p = await (await b.newContext(mobile ? { viewport: { width: w, height: 812 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1' } : { viewport: { width: w, height: 800 }, userAgent: UA })).newPage();
    await p.goto(base + '/', { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(250 + delay);
    const r = await p.evaluate(() => {
      const h = document.querySelector('header'); const nav = h.querySelector('nav'); const navVisible = !!nav && getComputedStyle(nav).display !== 'none';
      const burger = [...h.querySelectorAll('button')].find(b => b.textContent.includes('Toggle menu')); const burgerVisible = !!burger && burger.getBoundingClientRect().width > 0;
      const phoneText = h.querySelector('a[href^="tel:"] span'), waText = h.querySelector('a[href*="wa.me"] span');
      const vis = el => !!el && el.getBoundingClientRect().width > 0;
      const cta = [...h.querySelectorAll('a[href="/kontakt"]')].find(a => a.textContent.includes('Beratung'));
      return { sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, navVisible, burgerVisible, phoneText: navVisible && vis(phoneText), waText: navVisible && vis(waText), phoneIcon: navVisible && vis(h.querySelector('a[href^="tel:"] svg')), cta: navVisible && vis(cta), headerRight: Math.round(Math.max(...[...h.querySelectorAll('*')].map(e => e.getBoundingClientRect().right))) };
    });
    const expect = w < 1280 ? { navVisible: false, burgerVisible: true } : w < 1366 ? { navVisible: true, burgerVisible: false, phoneText: false, waText: false, phoneIcon: true, cta: true } : { navVisible: true, burgerVisible: false, phoneText: true, waText: true, cta: true };
    const ok = r.sw <= r.cw && r.headerRight <= r.cw && Object.entries(expect).every(([k, v]) => r[k] === v);
    if (!ok) fail++;
    console.log(`${ok ? '✅' : '❌'} ${name} ${String(w).padStart(4)}: sw=${r.sw}/${r.cw} headerRight=${r.headerRight} nav=${r.navVisible} burger=${r.burgerVisible} phoneText=${r.phoneText} waText=${r.waText} phoneIcon=${r.phoneIcon} cta=${r.cta}`);
    await p.context().close();
  }
  await b.close();
}
console.log(fail ? `RESULT: FAIL (${fail})` : 'RESULT: PASS'); process.exit(fail ? 1 : 0);
