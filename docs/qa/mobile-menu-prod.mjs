// HEC-184 — Prod-Regressionscheck mobiles Menü + Logo (375×812, Cookie-Hinweis wird zuerst abgelehnt).
// Aufruf: UA="<iPhone-UA>" BASE=https://www.heizcenter.de S=<Ausgabeordner> node docs/qa/mobile-menu-prod.mjs
// Playwright-Import zeigt auf die globale Installation (kein devDependency des Projekts).
import { chromium, devices } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3123';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: process.env.UA });
const p = await ctx.newPage();
const res = {};
await p.goto(base + '/', { waitUntil: 'networkidle' });
// Cookie-Hinweis (seit 20.10.2026) ist selbst ein role=dialog — wie ein Nutzer: erst ablehnen
const reject = p.getByRole('button', { name: 'Ablehnen' });
res.consentBannerShown = await reject.isVisible().catch(() => false);
if (res.consentBannerShown) { await reject.click(); await p.waitForTimeout(400); }
res.dialogsAfterConsent = await p.locator('[role="dialog"]').count();
// Sticky-Probe: Kopfzeile muss beim Scrollen oben bleiben (nur Bericht)
await p.evaluate(() => window.scrollTo(0, 600)); await p.waitForTimeout(200);
res.headerYScrolled = (await p.locator('header').boundingBox()).y;
await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(200);
const logo = p.locator('header img[alt="HeizCenter"]');
res.logoVisible = await logo.isVisible();
res.logoBox = await logo.boundingBox();
res.logoSrc = await logo.getAttribute('src');
res.headerTextFallback = await p.locator('header span:text-is("HeizCenter")').count();
await p.getByRole('button', { name: 'Toggle menu' }).click();
await p.getByRole('dialog').waitFor({ state: 'visible' });
res.dialogOpenAfterClick = await p.getByRole('dialog').isVisible();
await p.getByRole('dialog').getByRole('link', { name: 'Solar', exact: true }).click();
await p.waitForURL('**/solar', { timeout: 15000 });
await p.waitForTimeout(600); // Sheet-Schließanimation
res.pathAfterNav = new URL(p.url()).pathname;
res.dialogCountAfterNav = await p.locator('[role="dialog"]').count();
res.bodyScrollLocked = await p.evaluate(() => document.body.style.pointerEvents === 'none');
// zweite Runde: Menü erneut öffnen und über das Logo nach Hause
await p.getByRole('button', { name: 'Toggle menu' }).click();
await p.getByRole('dialog').waitFor({ state: 'visible' });
await p.getByRole('dialog').getByRole('link', { name: 'Ratgeber', exact: true }).click();
await p.waitForURL('**/blog', { timeout: 15000 });
await p.waitForTimeout(600);
res.secondRound = { path: new URL(p.url()).pathname, dialogs: await p.locator('[role="dialog"]').count() };
// dritte Runde (Verifier-Befund 23.10.): WhatsApp öffnet einen neuen Tab — das Menü auf der Seite muss trotzdem zugehen
await p.getByRole('button', { name: 'Toggle menu' }).click();
await p.getByRole('dialog').waitFor({ state: 'visible' });
const [popup] = await Promise.all([ctx.waitForEvent('page'), p.getByRole('dialog').getByRole('link', { name: 'WhatsApp' }).click()]);
await p.waitForTimeout(600);
res.whatsappRound = { popupHost: new URL(popup.url()).host, dialogs: await p.locator('[role="dialog"]').count() };
await popup.close();
await p.screenshot({ path: process.env.S + '/mobile-after-nav.png' });
// Desktop-Gegenprobe: Textlogo-freie Leiste, Nav sichtbar
const d = await b.newPage({ viewport: { width: 1280, height: 800 } });
await d.goto(base + '/', { waitUntil: 'networkidle' });
res.desktopNavLinks = await d.locator('header nav a').count();
res.desktopLogoVisible = await d.locator('header img[alt="HeizCenter"]').isVisible();
await b.close();
console.log(JSON.stringify(res, null, 1));
const ok = res.dialogsAfterConsent === 0 && res.logoVisible && Math.round(res.logoBox.height) === 32 && res.headerTextFallback === 0
  && res.dialogOpenAfterClick && res.pathAfterNav === '/solar' && res.dialogCountAfterNav === 0 && !res.bodyScrollLocked
  && res.secondRound.path === '/blog' && res.secondRound.dialogs === 0
  && /(^|\.)(wa\.me|whatsapp\.com)$/.test(res.whatsappRound.popupHost) && res.whatsappRound.dialogs === 0; // wa.me leitet auf api.whatsapp.com weiter
console.log(ok ? 'RESULT: PASS' : 'RESULT: FAIL');
process.exit(ok ? 0 : 1);
