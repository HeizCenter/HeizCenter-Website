// HEC-245/HEC-247 — Karriere: genau drei Anzeigen, Bewerbung je Anzeige per E-Mail (Betreff der Anzeige) und per WhatsApp.
// Rot, wenn: Seite nicht 200, Anzahl der Anzeigen ≠ 3, die Überschrift einer Anzeige nicht mit dem erwarteten Titel beginnt,
// der Ort nicht stimmt, eine der drei Platzhalter-Stellen aus dem Erstbau zurück ist, die Sprungmarke fehlt oder ins Leere zeigt,
// der E-Mail-Link einer Anzeige fehlt, einen anderen Betreff trägt (auch „+“ statt Leerzeichen) oder die Textvorlage fehlt,
// der WhatsApp-Link einer Anzeige fehlt oder die Stelle nicht nennt,
// irgendein E-Mail-, WhatsApp- oder Telefon-Link im Hauptinhalt (auch Kopfkarte und Schlussband) an ein anderes Ziel
// als das des Impressums geht, oder eine Bewerbung wieder ins allgemeine Kontaktformular führt.
// Adresse und Nummer stehen hier bewusst nicht als Literal: Vergleichswert ist das Impressum (kommt aus contact.ts).
// Aufruf: BASE=https://www.heizcenter.de node docs/qa/karriere-bewerben.mjs  (Playwright global, Browser webkit)
import { webkit, devices } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3123', delay = Number(process.env.DELAY || 0);
const ERWARTET = [
  { id: 'shk-meister', titel: 'SHK-Meister (m/w/d)', ort: 'Region Augsburg', betreff: 'Bewerbung SHK-Meister (m/w/d)', nennt: 'SHK-Meister (m/w/d)' },
  { id: 'anlagenmechaniker-shk', titel: 'Anlagenmechaniker SHK / SHK-Geselle (m/w/d)', ort: 'Bobingen · Gutenzell-Hürbel', betreff: 'Bewerbung Anlagenmechaniker SHK (m/w/d)', nennt: 'Anlagenmechaniker SHK (m/w/d)' },
  { id: 'initiativ', titel: 'Fachleute aus der SHK-Branche (m/w/d)', ort: 'Bobingen · Gutenzell-Hürbel', betreff: 'Initiativbewerbung / Zusammenarbeit', nennt: 'SHK-Branche' },
];
// Titel der Platzhalter aus dem Erstbau; die Städte taugen nicht als Merkmal, „Region Augsburg“ ist der Ort der Meisterstelle.
const PLATZHALTER = ['Installateur / Heizungsbauer', 'Servicetechniker Wärmepumpen', 'Auszubildender'];
const b = await webkit.launch();
const ctx = await b.newContext({ ...devices['iPhone 15 Pro Max'] });
const p = await ctx.newPage();
let bad = 0;
const fail = (m) => { bad++; console.log('❌ ' + m); };
const ok = (m) => console.log('✅ ' + m);
const ablehnen = async () => { const k = p.getByRole('button', { name: /ablehnen/i }); if (await k.count()) await k.first().click().catch(() => {}); };
const hrefs = (sel) => p.locator(sel).evaluateAll((els) => els.map((e) => e.getAttribute('href')));
// Kontaktwege im Hauptinhalt: Name, Link-Selektor, Ziel aus dem href – gilt für Impressum und Karriere-Seite gleich
const WEGE = [
  ['E-Mail', 'main a[href^="mailto:"]', (h) => h.slice(7).split('?')[0]],
  ['WhatsApp', 'main a[href^="https://wa.me/"]', (h) => new URL(h).pathname.slice(1)],
  ['Telefon', 'main a[href^="tel:"]', (h) => h.slice(4)],
];

// Vergleichswerte aus dem Impressum
const imp = await p.goto(base + '/impressum', { waitUntil: 'load' });
if (!imp || imp.status() !== 200) { console.log(`RESULT: FAIL (/impressum HTTP ${imp ? imp.status() : 'keine Antwort'})`); process.exit(1); }
await ablehnen();
const soll = {};
for (const [name, sel, ziel] of WEGE) soll[name] = (await hrefs(sel)).map(ziel)[0];
if (WEGE.some(([name]) => !soll[name])) { console.log(`RESULT: FAIL (Impressum ohne Vergleichswert: ${WEGE.map(([name]) => `${name} ${soll[name] ? 'da' : 'fehlt'}`).join(', ')})`); process.exit(1); }
await p.waitForTimeout(delay);

const res = await p.goto(base + '/karriere', { waitUntil: 'load' });
if (!res || res.status() !== 200) { console.log(`RESULT: FAIL (/karriere HTTP ${res ? res.status() : 'keine Antwort'})`); process.exit(1); }
await ablehnen();
// Als Anzeige zählt jede Karte mit Sprungziel und Überschrift – auch eine ohne Bewerben-Link
const karten = await p.locator('main section [id]').evaluateAll((els) => els
  .filter((e) => e.querySelector('h3'))
  .map((e) => ({
    id: e.id,
    titel: e.querySelector('h3')?.textContent.trim() ?? '',
    ort: e.querySelector('svg.lucide-map-pin')?.parentElement.textContent.trim() ?? '',
    mail: [...e.querySelectorAll('a[href^="mailto:"]')].map((a) => a.getAttribute('href')),
    wa: [...e.querySelectorAll('a[href^="https://wa.me/"]')].map((a) => a.getAttribute('href')),
  })));
karten.length === 3 ? ok(`3 Anzeigen: ${karten.map((k) => k.id).join(', ')}`) : fail(`${karten.length} Anzeigen statt 3: ${karten.map((k) => k.id).join(', ')}`);
for (const e of ERWARTET) {
  const k = karten.find((x) => x.id === e.id);
  if (!k) { fail(`Anzeige #${e.id} fehlt`); continue; }
  k.titel.startsWith(e.titel) ? ok(`#${e.id}: Überschrift „${k.titel}“`) : fail(`#${e.id}: Überschrift „${k.titel}“ statt „${e.titel}…“`);
  k.ort === e.ort ? ok(`#${e.id}: Ort „${k.ort}“`) : fail(`#${e.id}: Ort „${k.ort}“ statt „${e.ort}“`);
  const sprung = await p.locator(`nav[aria-label="Offene Stellen"] a[href="#${e.id}"]`).count();
  sprung === 1 ? ok(`#${e.id}: Sprungmarke vorhanden`) : fail(`#${e.id}: ${sprung} Sprungmarken statt 1`);

  if (k.mail.length !== 1) fail(`#${e.id}: ${k.mail.length} E-Mail-Links statt 1`);
  else {
    // mailto kennt kein „+“ für Leerzeichen (RFC 6068) – deshalb roh lesen, nicht über URLSearchParams
    const roh = Object.fromEntries((k.mail[0].split('?')[1] ?? '').split('&').map((t) => t.split('=')));
    const lies = (v) => { try { return decodeURIComponent(v ?? ''); } catch { return '(nicht dekodierbar)'; } };
    const betreff = lies(roh.subject), vorlage = lies(roh.body);
    betreff === e.betreff ? ok(`#${e.id}: Betreff „${betreff}“`) : fail(`#${e.id}: Betreff „${betreff}“ statt „${e.betreff}“`);
    vorlage.includes('\r\n') && vorlage.includes('Name:') ? ok(`#${e.id}: Textvorlage vorhanden`) : fail(`#${e.id}: Textvorlage fehlt oder ist beschädigt`);
  }
  if (k.wa.length !== 1) fail(`#${e.id}: ${k.wa.length} WhatsApp-Links statt 1`);
  else {
    const text = new URL(k.wa[0]).searchParams.get('text') ?? '';
    text.includes(e.nennt) ? ok(`#${e.id}: WhatsApp-Text nennt „${e.nennt}“`) : fail(`#${e.id}: WhatsApp-Text „${text}“ nennt „${e.nennt}“ nicht`);
  }
}
// Jedes Kontaktziel im Hauptinhalt – Anzeigen, Kopfkarte, Schlussband – muss das des Impressums sein
for (const [name, sel, ziel] of WEGE) {
  const ziele = (await hrefs(sel)).map(ziel);
  const fremd = [...new Set(ziele.filter((z) => z !== soll[name]))];
  if (!ziele.length) fail(`${name}: kein Link im Hauptinhalt`);
  else fremd.length ? fail(`${name}: ${fremd.join(', ')} statt „${soll[name]}“ (Impressum)`) : ok(`${name}: ${ziele.length} Link(s), alle an das Ziel des Impressums`);
}
const seite = await p.locator('main').count() ? await p.locator('main').innerText() : await p.locator('body').innerText();
const alt = PLATZHALTER.filter((titel) => seite.includes(titel));
alt.length ? fail(`Platzhalter-Stelle zurück: ${alt.join(', ')}`) : ok('keine Platzhalter-Stellen');
const formular = (await hrefs('main a[href^="/kontakt"]')).length;
formular === 0 ? ok('keine Bewerbung über das allgemeine Kontaktformular') : fail(`${formular} Link(s) von der Karriere-Seite ins Kontaktformular`);
await b.close();
console.log(bad ? `RESULT: FAIL (${bad})` : 'RESULT: PASS');
process.exit(bad ? 1 : 0);
