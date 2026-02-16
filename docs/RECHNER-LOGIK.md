# Wärmepumpen-Kostenrechner - Berechnungslogik

> Dokumentation der Berechnungsformeln für den HEIZcenter Wärmepumpen-Kostenrechner
>
> **Quelldatei:** `src/components/calculator/price-calculator.tsx`

---

## Übersicht

Der Rechner berechnet:
1. **Gesamtkosten** einer Wärmepumpeninstallation
2. **KfW 458 Förderung** (BEG 2025)
3. **Nettopreis** nach Förderung
4. **Jährliche Einsparung** gegenüber alter Heizung

---

## 1. Basiskosten nach Wärmepumpen-Typ

| Typ | Basispreis | + pro m² | JAZ | Installationsanteil |
|-----|------------|----------|-----|---------------------|
| **Luft-Wasser** | 18.000€ | + 55€/m² | 3.5 | 25% |
| **Sole-Wasser (Erdwärme)** | 32.000€ | + 85€/m² | 4.5 | 32% |
| **Wasser-Wasser** | 38.000€ | + 95€/m² | 5.0 | 35% |

**Formel:**
```
Basiskosten = Festpreis + (Wohnfläche × Preis_pro_m²)
```

**Beispiel Luft-Wasser, 150m²:**
```
18.000€ + (150 × 55€) = 26.250€
```

---

## 2. Heizflächen-Anpassung

| Heizfläche | JAZ-Änderung | Kosten-Änderung |
|------------|--------------|-----------------|
| Fußbodenheizung | +0.3 | -1.000€ |
| Gemischt | +0.15 | ±0€ |
| Radiatoren | -0.2 | +2.500€ |

**Begründung:**
- Fußbodenheizung = niedrigere Vorlauftemperatur = höhere Effizienz
- Radiatoren = höhere Vorlauftemperatur = evtl. größere Heizkörper nötig

---

## 3. Dämmzustand-Multiplikator

| Dämmung | Multiplikator | Beschreibung |
|---------|---------------|--------------|
| Schlecht | × 1.20 | Altbau unsaniert |
| Durchschnittlich | × 1.00 | Standard |
| Gut | × 0.85 | Neubau/saniert |

**Formel:**
```
Kosten = Kosten × Dämmungs_Multiplikator
```

---

## 4. Baujahr-Anpassung

| Baujahr | Kosten-Multiplikator | JAZ-Änderung |
|---------|---------------------|--------------|
| Vor 1980 | × 1.15 | -0.2 |
| 1980-2000 | × 1.05 | -0.1 |
| 2000-2010 | × 1.00 | ±0 |
| 2010-2020 | × 0.95 | +0.15 |
| 2020-2025 | × 0.90 | +0.3 |
| Nach 2025 | × 0.85 | +0.4 |

**Begründung:**
- Ältere Gebäude = mehr Anpassungsaufwand
- Neuere Gebäude = besser vorbereitet für Wärmepumpen

---

## 5. Warmwasser pro Person

```
Warmwasser_Zuschlag = Anzahl_Personen × 350€
```

**Beispiel 4 Personen:**
```
4 × 350€ = 1.400€
```

---

## 6. Objektart-Multiplikator

| Objektart | Multiplikator |
|-----------|---------------|
| Einfamilienhaus | × 1.00 |
| Mehrfamilienhaus | × 1.25 |
| Gewerbe | × 1.40 |

---

## 7. Gesamtkosten-Berechnung

```
Anlagenkosten = Basiskosten
                × Dämmungs_Multiplikator
                × Baujahr_Multiplikator
                × Objektart_Multiplikator
                + Warmwasser_Zuschlag
                + Heizflächen_Zuschlag

Installationskosten = Anlagenkosten × Installationsrate

Gesamtkosten = Anlagenkosten + Installationskosten
```

---

## 8. Förderungsberechnung (KfW 458 / BEG 2025)

### 8.1 Förderfähige Kosten (Deckel)

| Objektart | Maximale förderfähige Kosten |
|-----------|------------------------------|
| Einfamilienhaus | 30.000€ |
| Mehrfamilienhaus | 30.000€ + 15.000€ pro weitere Einheit (max. 6) |

**Beispiel 4-Familienhaus:**
```
30.000€ + (3 × 15.000€) = 75.000€ max. förderfähig
```

### 8.2 Fördersätze

| Bonus | Satz | Bedingung |
|-------|------|-----------|
| **Grundförderung** | 30% | Immer |
| **Klimageschwindigkeitsbonus** | +20% | Austausch von Gas, Öl, Kohle oder Elektro-Heizung |
| **Effizienzbonus** | +5% | Wenn JAZ ≥ 4.5 |
| **Einkommensbonus** | +30% | Haushaltseinkommen < 40.000€/Jahr |
| **Maximum** | **70%** | Deckel |

### 8.3 Förderungsformel

```
Fördersatz = min(Summe_aller_Boni, 70%)

Förderfähige_Kosten = min(Gesamtkosten, Deckel)

Förderbetrag = Förderfähige_Kosten × Fördersatz

Nettopreis = Gesamtkosten - Förderbetrag
```

### 8.4 Beispiel

```
Gesamtkosten: 45.000€
Deckel (EFH): 30.000€
Förderfähig: 30.000€

Fördersatz: 30% + 20% (Klimabonus) = 50%

Förderung: 30.000€ × 50% = 15.000€
Nettopreis: 45.000€ - 15.000€ = 30.000€
```

---

## 9. Jährliche Einsparung

### 9.1 Alte Heizkosten pro m²

| Heizungsart | Kosten pro m²/Jahr |
|-------------|-------------------|
| Gas | 13€ |
| Öl | 16€ |
| Kohle | 20€ |
| Elektro/Nachtspeicher | 40€ |

### 9.2 Wärmebedarf nach Dämmung

| Dämmung | kWh/m²/Jahr |
|---------|-------------|
| Schlecht | 140 |
| Durchschnittlich | 100 |
| Gut | 60 |

### 9.3 Strompreis Wärmepumpe

```
Strompreis = 0.32€/kWh (Wärmepumpentarif)
```

### 9.4 Einsparungs-Formel

```
Alte_Heizkosten = Wohnfläche × Kosten_pro_m²

Wärmepumpen_Stromkosten = (Wohnfläche × Wärmebedarf_pro_m² / JAZ) × Strompreis

Jährliche_Einsparung = Alte_Heizkosten - Wärmepumpen_Stromkosten
```

### 9.5 Beispiel (150m², Gas, durchschnittliche Dämmung, JAZ 3.3)

```
Alte Heizkosten: 150m² × 13€ = 1.950€/Jahr

WP-Stromverbrauch: 150m² × 100 kWh/m² / 3.3 = 4.545 kWh
WP-Stromkosten: 4.545 kWh × 0.32€ = 1.454€/Jahr

Jährliche Einsparung: 1.950€ - 1.454€ = 496€/Jahr
```

---

## 10. JAZ-Berechnung (Jahresarbeitszahl)

Die JAZ wird dynamisch berechnet:

```
JAZ = Basis_JAZ (nach Pumpentyp)
    + Heizflächen_Bonus
    + Baujahr_Bonus

JAZ = max(2.5, min(5.5, JAZ))  // Begrenzung auf realistischen Bereich
```

**Bedeutung:** Für jede 1 kWh Strom produziert die Wärmepumpe [JAZ] kWh Wärme.

---

## Vollständige Beispielrechnung

**Eingaben:**
- Wohnfläche: 150m²
- Typ: Luft-Wasser
- Heizfläche: Radiatoren
- Dämmung: Durchschnittlich
- Baujahr: 2000-2010
- Personen: 3
- Objektart: Einfamilienhaus
- Aktuelle Heizung: Gas
- Einkommensbonus: Nein

**Berechnung:**

```
1. Basiskosten:
   18.000€ + (150 × 55€) = 26.250€

2. Heizflächen (Radiatoren):
   26.250€ + 2.500€ = 28.750€
   JAZ: 3.5 - 0.2 = 3.3

3. Dämmung (durchschnittlich):
   28.750€ × 1.0 = 28.750€

4. Baujahr (2000-2010):
   28.750€ × 1.0 = 28.750€
   JAZ: 3.3 + 0 = 3.3

5. Warmwasser (3 Personen):
   28.750€ + (3 × 350€) = 29.800€

6. Objektart (EFH):
   29.800€ × 1.0 = 29.800€

7. Installation (25%):
   29.800€ × 0.25 = 7.450€

8. Gesamtkosten:
   29.800€ + 7.450€ = 37.250€

9. Förderung:
   - Förderfähig: min(37.250€, 30.000€) = 30.000€
   - Fördersatz: 30% + 20% (Gas→WP) = 50%
   - Förderung: 30.000€ × 50% = 15.000€

10. Nettopreis:
    37.250€ - 15.000€ = 22.250€

11. Jährliche Einsparung:
    - Alt: 150m² × 13€ = 1.950€/Jahr
    - Neu: (150 × 100 / 3.3) × 0.32€ = 1.454€/Jahr
    - Ersparnis: 496€/Jahr
```

**Ergebnis:**
- Gesamtkosten: 37.250€
- Förderung: 15.000€ (50%)
- **Nettopreis: 22.250€**
- Jährliche Ersparnis: 496€

---

## Konstanten im Code

```typescript
const FUNDING_CONSTANTS = {
  BASE_RATE: 0.30,           // 30% Grundförderung
  KLIMA_BONUS: 0.20,         // 20% Klimageschwindigkeitsbonus
  INCOME_BONUS: 0.30,        // 30% Einkommensbonus
  EFFICIENCY_BONUS: 0.05,    // 5% Effizienzbonus (JAZ ≥ 4.5)
  MAX_FUNDING_RATE: 0.70,    // 70% Maximum
  ELIGIBLE_COST_CAP: 30000,  // Max. förderfähige Kosten
  ADDITIONAL_UNIT_CAP: 15000 // Pro weitere Wohneinheit
};
```

---

## Hinweise

- Alle Berechnungen sind Schätzungen basierend auf Durchschnittswerten
- Tatsächliche Kosten können je nach individuellen Gegebenheiten variieren
- Förderung gemäß KfW 458 (Stand 2025)
- Werte werden im `localStorage` gespeichert (Key: `heizcenter-calculator-values`)
