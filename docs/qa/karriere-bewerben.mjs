// HEC-245 — Karriere: genau drei Anzeigen, jeder Bewerben-Link öffnet das Kontaktformular mit dem Betreff der Anzeige.
// Rot, wenn: Seite nicht 200, Anzahl der Anzeigen ≠ 3, die Überschrift einer Anzeige nicht mit dem erwarteten Titel beginnt,
// der Ort nicht stimmt, eine der drei Platzhalter-Stellen aus dem Erstbau zurück ist, die Sprungmarke fehlt oder ins Leere zeigt,
// ein Klick nicht auf /kontakt landet oder das Feld „Betreff“ nicht den erwarteten Text trägt.
// Aufruf: BASE=https://www.heizcenter.de node docs/qa/karriere-bewerben.mjs  (Playwright global, Browser webkit)
import { webkit, devices } from '/Users/Q285389/.npm-global/lib/node_modules/playwright/index.mjs';
const base = process.env.BASE || 'http://localhost:3123', delay = Number(process.env.DELAY || 0);
const ERWARTET = [
  { id: 'shk-meister', titel: 'SHK-Meister (m/w/d)', ort: 'Region Augsburg', betreff: 'Bewerbung SHK-Meister (m/w/d)' },
  { id: 'anlagenmechaniker-shk', titel: 'Anlagenmechaniker SHK / SHK-Geselle (m/w/d)', ort: 'Bobingen · Gutenzell-Hürbel', betreff: 'Bewerbung Anlagenmechaniker SHK (m/w/d)' },
  { id: 'initiativ', titel: 'Fachleute aus der SHK-Branche (m/w/d)', ort: 'Bobingen · Gutenzell-Hürbel', betreff: 'Initiativbewerbung / Zusammenarbeit' },
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

const res = await p.goto(base + '/karriere', { waitUntil: 'load' });
if (!res || res.status() !== 200) { console.log(`RESULT: FAIL (/karriere HTTP ${res ? res.status() : 'keine Antwort'})`); process.exit(1); }
await ablehnen();
const karten = await p.locator('section [id]').evaluateAll((els) => els
  .filter((e) => e.querySelector('a[href^="/kontakt?subject="]'))
  .map((e) => ({
    id: e.id,
    titel: e.querySelector('h3')?.textContent.trim() ?? '',
    ort: e.querySelector('svg.lucide-map-pin')?.parentElement.textContent.trim() ?? '',
  })));
karten.length === 3 ? ok(`3 Anzeigen: ${karten.map((k) => k.id).join(', ')}`) : fail(`${karten.length} Anzeigen statt 3: ${karten.map((k) => k.id).join(', ')}`);
for (const e of ERWARTET) {
  const k = karten.find((x) => x.id === e.id);
  if (!k) { fail(`Anzeige #${e.id} fehlt`); continue; }
  k.titel.startsWith(e.titel) ? ok(`#${e.id}: Überschrift „${k.titel}“`) : fail(`#${e.id}: Überschrift „${k.titel}“ statt „${e.titel}…“`);
  k.ort === e.ort ? ok(`#${e.id}: Ort „${k.ort}“`) : fail(`#${e.id}: Ort „${k.ort}“ statt „${e.ort}“`);
  const sprung = await p.locator(`nav[aria-label="Offene Stellen"] a[href="#${e.id}"]`).count();
  sprung === 1 ? ok(`#${e.id}: Sprungmarke vorhanden`) : fail(`#${e.id}: ${sprung} Sprungmarken statt 1`);
}
const seite = await p.locator('main').count() ? await p.locator('main').innerText() : await p.locator('body').innerText();
const alt = PLATZHALTER.filter((titel) => seite.includes(titel));
alt.length ? fail(`Platzhalter-Stelle zurück: ${alt.join(', ')}`) : ok('keine Platzhalter-Stellen');
for (const e of ERWARTET) {
  await p.goto(base + '/karriere', { waitUntil: 'load' });
  await ablehnen();
  const link = p.locator(`#${e.id} a[href^="/kontakt?subject="]`);
  const anzahl = await link.count();
  if (anzahl !== 1) { fail(`#${e.id}: ${anzahl} Bewerben-Links statt 1`); continue; }
  await link.click();
  await p.waitForURL(/\/kontakt\?subject=/, { timeout: 15000 }).catch(() => {});
  if (!/\/kontakt\?subject=/.test(p.url())) { fail(`#${e.id}: Klick landet auf ${p.url()}`); continue; }
  const feld = p.locator('#subject');
  await feld.waitFor({ timeout: 15000 }).catch(() => {});
  await p.waitForFunction((soll) => document.querySelector('#subject')?.value === soll, e.betreff, { timeout: 8000 }).catch(() => {});
  const wert = (await feld.count()) ? await feld.inputValue() : '(Feld fehlt)';
  wert === e.betreff ? ok(`#${e.id}: Betreff „${wert}“`) : fail(`#${e.id}: Betreff „${wert}“ statt „${e.betreff}“`);
  await p.waitForTimeout(delay);
}
await b.close();
console.log(bad ? `RESULT: FAIL (${bad})` : 'RESULT: PASS');
process.exit(bad ? 1 : 0);
