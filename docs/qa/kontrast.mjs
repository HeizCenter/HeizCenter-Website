// HEC-247 — Kontrast von Links und Buttons im Hauptinhalt einer Seite (WCAG 1.4.3: Text zu Hintergrund ≥ 4,5:1).
// Anlass: Button „Initiativbewerbung senden“ auf /karriere war weiß auf weiß.
// Textfarbe = Farbe des innersten Elements mit eigenem Text. Hintergrund = erste deckende Fläche unter dem Element;
// halbtransparente Flächen werden übereinandergelegt, bei Verläufen zählt die ungünstigste Farbe des Verlaufs.
// „Nicht messbar“ (zählt als Fehler, damit nichts ungeprüft grün wird): Hintergrundbild per CSS, ein Bild oder Video,
// das unter dem Element liegt, Vorfahr mit Deckkraft < 1, Text mit Verlaufsfüllung.
// Grenzen: gemessen wird der Ruhezustand (kein Hover/Fokus); absolut positionierte Geschwisterflächen ohne Bild
// (Deko-Verläufe, Farb-Overlays) sieht das Skript nicht — für solche Seiten zusätzlich am Bildschirmfoto messen.
// Aufruf: BASE=https://www.heizcenter.de SEITE=/karriere node docs/qa/kontrast.mjs  (Playwright global, Browser webkit)
import { webkit } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3123', seite = process.env.SEITE || '/karriere', min = Number(process.env.MIN || 4.5);
const b = await webkit.launch();
const p = await (await b.newContext({ viewport: { width: Number(process.env.WIDTH || 1366), height: 900 } })).newPage();
const res = await p.goto(base + seite, { waitUntil: 'load' });
if (!res || res.status() !== 200) { console.log(`RESULT: FAIL (${seite} HTTP ${res ? res.status() : 'keine Antwort'})`); process.exit(1); }
const k = p.getByRole('button', { name: /ablehnen/i }); if (await k.count()) await k.first().click().catch(() => {});
await p.waitForTimeout(300);
const r = await p.evaluate((min) => {
  const farben = (s) => [...s.matchAll(/rgba?\(([^)]+)\)/g)].map((m) => { const [r, g, bl, a = 1] = m[1].split(/[,\s/]+/).filter(Boolean).map(Number); return { r, g, b: bl, a }; });
  const ueber = (o, u) => ({ r: o.r * o.a + u.r * (1 - o.a), g: o.g * o.a + u.g * (1 - o.a), b: o.b * o.a + u.b * (1 - o.a), a: 1 });
  const lum = (c) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
  const kontrast = (x, y) => { const [h, d] = [lum(x), lum(y)].sort((m, n) => n - m); return (h + 0.05) / (d + 0.05); };
  // Bild oder Video, das die Fläche des Elements überdeckt und nicht in ihm selbst liegt
  const medien = [...document.querySelectorAll('main img, main picture, main video')];
  const unterBild = (el, rc) => medien.some((m) => {
    if (el.contains(m)) return false;
    const mr = m.getBoundingClientRect();
    return mr.width && mr.height && mr.left < rc.right && mr.right > rc.left && mr.top < rc.bottom && mr.bottom > rc.top;
  });
  const gedimmt = (el) => { for (let a = el; a && a !== document.body; a = a.parentElement) if (Number(getComputedStyle(a).opacity) < 1) return true; return false; };
  // Innerstes Element mit eigenem Text – dessen Farbe sieht der Leser
  const textTraeger = (el) => [...el.querySelectorAll('*')].reverse().find((k) => [...k.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim())) || el;
  // Mögliche deckende Hintergründe eines Knotens; null = Bild, nicht messbar
  const grund = (n) => {
    if (!n || n === document.documentElement) return [{ r: 255, g: 255, b: 255, a: 1 }];
    const cs = getComputedStyle(n);
    const img = cs.backgroundImage;
    if (img.includes('url(')) return null;
    const lagen = img.includes('gradient') ? farben(img) : farben(cs.backgroundColor).filter((c) => c.a > 0);
    if (!lagen.length) return grund(n.parentElement);
    if (lagen.every((c) => c.a === 1)) return lagen;
    const unten = grund(n.parentElement);
    return unten && lagen.flatMap((c) => unten.map((u) => ueber(c, u)));
  };
  // Warum der Kontrast nicht messbar ist; '' = messbar
  const nichtMessbar = (el, rc, hg, ts) => {
    if (!hg || unterBild(el, rc)) return 'Bild im Hintergrund';
    if (gedimmt(el)) return 'Deckkraft < 1';
    if (ts.webkitBackgroundClip === 'text' || ts.backgroundClip === 'text') return 'Text mit Verlaufsfüllung';
    return '';
  };
  const out = [];
  let n = 0;
  for (const el of document.querySelectorAll('main a, main button')) {
    const rc = el.getBoundingClientRect();
    const text = (el.innerText || '').trim().replace(/\s+/g, ' ');
    if (!rc.width || !rc.height || !text) continue;
    n++;
    const traeger = textTraeger(el), ts = getComputedStyle(traeger);
    const hg = grund(el);
    const grundlos = nichtMessbar(el, rc, hg, ts);
    if (grundlos) { out.push(`nicht messbar (${grundlos}): «${text.slice(0, 40)}»`); continue; }
    const farbe = farben(ts.color)[0];
    const wert = Math.min(...hg.map((u) => kontrast(ueber(farbe, u), u)));
    if (wert < min) out.push(`${wert.toFixed(2)}:1 «${text.slice(0, 40)}» ${el.tagName}.${(el.className || '').toString().slice(0, 60)}`);
  }
  return { n, out };
}, min);
await b.close();
for (const z of r.out) console.log('❌ ' + z);
console.log(`=== ${seite}: ${r.n} Links/Buttons gemessen, ${r.out.length} unter ${min}:1`);
// Eine Prüfung, die bei leerer Liste grün wird, prüft nichts
const bad = r.out.length || r.n < 5;
if (r.n < 5) console.log(`RESULT: FAIL (nur ${r.n} Elemente gemessen)`);
else console.log(bad ? 'RESULT: FAIL' : 'RESULT: PASS');
process.exit(bad ? 1 : 0);
