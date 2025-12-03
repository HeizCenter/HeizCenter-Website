"use client";

import { useState, useEffect } from "react";
import { Calculator, TrendingDown, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

interface PriceBreakdown {
  equipmentCost: number;
  installationCost: number;
  totalCost: number;
  eligibleCosts: number;
  subsidyRate: number;
  subsidyAmount: number;
  netCost: number;
  estimatedJAZ: number;
  annualSavings: number;
  hasKlimabonus: boolean;
  hasEfficiencyBonus: boolean;
}

// BEG 2025 Förderung Konstanten (KfW 458)
const FUNDING_CONSTANTS = {
  BASE_RATE: 0.30,           // 30% Grundförderung
  KLIMA_BONUS: 0.20,         // 20% Klimageschwindigkeitsbonus
  INCOME_BONUS: 0.30,        // 30% Einkommensbonus (<40.000€/Jahr)
  EFFICIENCY_BONUS: 0.05,    // 5% Effizienzbonus (JAZ ≥ 4.5)
  MAX_FUNDING_RATE: 0.70,    // 70% Maximum
  ELIGIBLE_COST_CAP: 30000,  // Max. förderfähige Kosten (1. Wohneinheit)
  ADDITIONAL_UNIT_CAP: 15000, // Pro weitere Wohneinheit (max. 6)
};

export function PriceCalculator() {
  const [houseSize, setHouseSize] = useState<number>(150);
  const [heatingType, setHeatingType] = useState<string>("gas");
  const [insulation, setInsulation] = useState<string>("average");
  const [buildingYear, setBuildingYear] = useState<string>("2000-2010");
  const [heatingSurface, setHeatingSurface] = useState<string>("radiators");
  const [residents, setResidents] = useState<number>(3);
  const [pumpType, setPumpType] = useState<string>("air-water");
  const [propertyType, setPropertyType] = useState<string>("einfamilienhaus");
  const [hasIncomeBonus, setHasIncomeBonus] = useState<boolean>(false);
  const [numberOfUnits, setNumberOfUnits] = useState<number>(1);
  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseSize, heatingType, insulation, buildingYear, heatingSurface, residents, pumpType, propertyType, hasIncomeBonus, numberOfUnits]);

  const calculatePrice = () => {
    // ============================================
    // 1. BASISKOSTEN NACH WÄRMEPUMPEN-TYP
    // ============================================
    let baseCost = 0;
    let jaz = 0; // Jahresarbeitszahl (annual performance factor)
    let installationRate = 0.25; // Installationsanteil

    switch (pumpType) {
      case "air-water":
        // Luft-Wasser: Günstigste Option
        baseCost = 18000 + (houseSize * 55);
        jaz = 3.5;
        installationRate = 0.25;
        break;
      case "ground-water":
        // Sole-Wasser: Höhere Kosten wegen Erdbohrung
        baseCost = 32000 + (houseSize * 85);
        jaz = 4.5;
        installationRate = 0.32; // Höher wegen Erdarbeiten
        break;
      case "water-water":
        // Wasser-Wasser: Höchste Kosten wegen Brunnenbohrung
        baseCost = 38000 + (houseSize * 95);
        jaz = 5.0;
        installationRate = 0.35; // Höher wegen Brunnenbohrung
        break;
      default:
        baseCost = 18000 + (houseSize * 55);
        jaz = 3.5;
        installationRate = 0.25;
    }

    // ============================================
    // 2. HEIZFLÄCHEN-ANPASSUNG
    // ============================================
    if (heatingSurface === "floor") {
      jaz += 0.3; // Fußbodenheizung effizienter (korrigiert von +0.5)
      baseCost -= 1000;
    } else if (heatingSurface === "mixed") {
      jaz += 0.15;
    } else {
      // Radiatoren: JAZ-Abzug, ggf. größere Heizkörper nötig
      jaz -= 0.2;
      baseCost += 2500;
    }

    // ============================================
    // 3. DÄMMZUSTAND-MULTIPLIKATOR
    // ============================================
    const insulationMultiplier: Record<string, number> = {
      poor: 1.2,
      average: 1.0,
      good: 0.85,
    };
    baseCost *= insulationMultiplier[insulation] || 1.0;

    // ============================================
    // 4. BAUJAHR-ANPASSUNG
    // ============================================
    if (buildingYear === "before-1980") {
      baseCost *= 1.15;
      jaz -= 0.2; // Korrigiert von -0.3
    } else if (buildingYear === "1980-2000") {
      baseCost *= 1.05;
      jaz -= 0.1;
    } else if (buildingYear === "after-2015") {
      baseCost *= 0.9;
      jaz += 0.3;
    }

    // ============================================
    // 5. WARMWASSER PRO PERSON
    // ============================================
    const hotWaterCost = residents * 350; // €350 pro Person
    baseCost += hotWaterCost;

    // ============================================
    // 6. OBJEKTART-MULTIPLIKATOR
    // ============================================
    const propertyTypeMultiplier: Record<string, number> = {
      einfamilienhaus: 1.0,
      mehrfamilienhaus: 1.25,
      gewerbe: 1.40,
    };
    baseCost *= propertyTypeMultiplier[propertyType] || 1.0;

    // ============================================
    // 7. INSTALLATION
    // ============================================
    const installationCost = Math.round(baseCost * installationRate);
    const equipmentCost = Math.round(baseCost);
    const totalCost = equipmentCost + installationCost;

    // ============================================
    // 8. FÖRDERUNGSBERECHNUNG (BEG 2025 / KfW 458)
    // ============================================

    // Förderfähige Kosten berechnen (mit Deckel)
    let eligibleCostCap = FUNDING_CONSTANTS.ELIGIBLE_COST_CAP;
    if (propertyType === "mehrfamilienhaus" && numberOfUnits > 1) {
      // Zusätzliche Wohneinheiten (max. 6)
      const additionalUnits = Math.min(numberOfUnits - 1, 5);
      eligibleCostCap += additionalUnits * FUNDING_CONSTANTS.ADDITIONAL_UNIT_CAP;
    }
    const eligibleCosts = Math.min(totalCost, eligibleCostCap);

    // Fördersatz berechnen
    let subsidyRate = FUNDING_CONSTANTS.BASE_RATE; // 30% Grundförderung

    // Klimageschwindigkeitsbonus (20%) - für ALLE fossilen Heizungen inkl. Elektro/Nachtspeicher
    const klimaBonusEligible = ["gas", "oil", "coal", "electric"];
    const hasKlimabonus = klimaBonusEligible.includes(heatingType);
    if (hasKlimabonus) {
      subsidyRate += FUNDING_CONSTANTS.KLIMA_BONUS;
    }

    // Effizienzbonus (5%) - bei JAZ ≥ 4.5 für Luft-Wasser oder natürliche Kältemittel
    const hasEfficiencyBonus = jaz >= 4.5;
    if (hasEfficiencyBonus) {
      subsidyRate += FUNDING_CONSTANTS.EFFICIENCY_BONUS;
    }

    // Einkommensbonus (30%) - Haushaltseinkommen < 40.000€/Jahr
    if (hasIncomeBonus) {
      subsidyRate += FUNDING_CONSTANTS.INCOME_BONUS;
    }

    // Maximum 70% Förderung
    subsidyRate = Math.min(subsidyRate, FUNDING_CONSTANTS.MAX_FUNDING_RATE);

    const subsidyAmount = Math.round(eligibleCosts * subsidyRate);
    const netCost = totalCost - subsidyAmount;

    // ============================================
    // 9. JÄHRLICHE EINSPARUNG
    // ============================================
    // Heizkosten pro m² (aktualisierte Werte 2025)
    const oldHeatingCostPerSqm: Record<string, number> = {
      gas: 13,      // Korrigiert von 18
      oil: 16,      // Korrigiert von 22
      coal: 20,     // Korrigiert von 25
      electric: 40, // Korrigiert von 28 (Nachtspeicher sehr teuer!)
    };

    const oldHeatingCost = houseSize * (oldHeatingCostPerSqm[heatingType] || 15);

    // Wärmepumpe Stromkosten (basierend auf Wärmebedarf und JAZ)
    // Formel: (Wärmebedarf / JAZ) × Strompreis
    const heatingDemandPerSqm = insulation === "poor" ? 140 :
                                 insulation === "good" ? 60 : 100; // kWh/m²/Jahr
    const electricityPrice = 0.32; // €/kWh (Wärmepumpentarif)
    const heatPumpElectricityCost = Math.round((houseSize * heatingDemandPerSqm / jaz) * electricityPrice);

    const annualSavings = Math.max(0, Math.round(oldHeatingCost - heatPumpElectricityCost));

    // JAZ begrenzen auf realistischen Bereich
    const finalJAZ = Math.max(2.5, Math.min(5.5, jaz));

    setBreakdown({
      equipmentCost,
      installationCost,
      totalCost,
      eligibleCosts,
      subsidyRate,
      subsidyAmount,
      netCost,
      estimatedJAZ: Math.round(finalJAZ * 10) / 10,
      annualSavings,
      hasKlimabonus,
      hasEfficiencyBonus,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (rate: number) => {
    return `${Math.round(rate * 100)}%`;
  };

  return (
    <div className="bg-gradient-to-br from-[#0F5B78]/5 to-[#0F5B78]/10 rounded-xl p-6 md:p-8 border border-[#0F5B78]/20">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-[#0F5B78] text-white rounded-lg p-3">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            Wärmepumpen-Kostenrechner
          </h3>
          <p className="text-slate-600">
            Berechnen Sie die Kosten für Ihre neue Wärmepumpe inkl. KfW 458 Förderung
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Pump Type Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              Wärmepumpen-Typ
            </Label>
            <RadioGroup value={pumpType} onValueChange={setPumpType}>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-slate-200">
                <RadioGroupItem value="air-water" id="air-water" />
                <Label htmlFor="air-water" className="flex-1 cursor-pointer">
                  <div className="font-medium">Luft-Wasser-Wärmepumpe</div>
                  <div className="text-xs text-slate-500">Einfache Installation, günstigste Option</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-slate-200">
                <RadioGroupItem value="ground-water" id="ground-water" />
                <Label htmlFor="ground-water" className="flex-1 cursor-pointer">
                  <div className="font-medium">Sole-Wasser-Wärmepumpe (Erdwärme)</div>
                  <div className="text-xs text-slate-500">Höhere Effizienz, benötigt Erdbohrung</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-slate-200">
                <RadioGroupItem value="water-water" id="water-water" />
                <Label htmlFor="water-water" className="flex-1 cursor-pointer">
                  <div className="font-medium">Wasser-Wasser-Wärmepumpe</div>
                  <div className="text-xs text-slate-500">Höchste Effizienz, Grundwasser erforderlich</div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Property Type */}
          <div>
            <Label htmlFor="propertyType" className="text-base font-semibold mb-3 block">
              Objektart
            </Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="propertyType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="einfamilienhaus">Einfamilienhaus</SelectItem>
                <SelectItem value="mehrfamilienhaus">Mehrfamilienhaus</SelectItem>
                <SelectItem value="gewerbe">Gewerbe</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Number of Units (only for Mehrfamilienhaus) */}
          {propertyType === "mehrfamilienhaus" && (
            <div>
              <Label htmlFor="numberOfUnits" className="text-base font-semibold mb-3 block">
                Anzahl Wohneinheiten: {numberOfUnits}
              </Label>
              <Slider
                id="numberOfUnits"
                min={2}
                max={6}
                step={1}
                value={[numberOfUnits]}
                onValueChange={(value) => setNumberOfUnits(value[0])}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>2 Einheiten</span>
                <span>6 Einheiten</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Förderfähige Kosten: max. {formatCurrency(30000 + (Math.min(numberOfUnits - 1, 5) * 15000))}
              </p>
            </div>
          )}

          {/* House Size */}
          <div>
            <Label htmlFor="houseSize" className="text-base font-semibold mb-3 block">
              Wohnfläche: {houseSize} m²
            </Label>
            <Slider
              id="houseSize"
              min={50}
              max={400}
              step={10}
              value={[houseSize]}
              onValueChange={(value) => setHouseSize(value[0])}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>50 m²</span>
              <span>400 m²</span>
            </div>
          </div>

          {/* Building Year */}
          <div>
            <Label htmlFor="buildingYear" className="text-base font-semibold mb-3 block">
              Baujahr des Gebäudes
            </Label>
            <Select value={buildingYear} onValueChange={setBuildingYear}>
              <SelectTrigger id="buildingYear">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="before-1980">Vor 1980</SelectItem>
                <SelectItem value="1980-2000">1980-2000</SelectItem>
                <SelectItem value="2000-2010">2000-2010</SelectItem>
                <SelectItem value="2010-2015">2010-2015</SelectItem>
                <SelectItem value="after-2015">Nach 2015</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Insulation */}
          <div>
            <Label htmlFor="insulation" className="text-base font-semibold mb-3 block">
              Dämmzustand
            </Label>
            <Select value={insulation} onValueChange={setInsulation}>
              <SelectTrigger id="insulation">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="poor">Schlecht (Altbau unsaniert)</SelectItem>
                <SelectItem value="average">Durchschnittlich</SelectItem>
                <SelectItem value="good">Gut (Neubau/saniert)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Heating Surface */}
          <div>
            <Label htmlFor="heatingSurface" className="text-base font-semibold mb-3 block">
              Art der Heizflächen
            </Label>
            <Select value={heatingSurface} onValueChange={setHeatingSurface}>
              <SelectTrigger id="heatingSurface">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="floor">Fußbodenheizung</SelectItem>
                <SelectItem value="radiators">Heizkörper (Radiatoren)</SelectItem>
                <SelectItem value="mixed">Gemischt (Fußboden + Heizkörper)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Current Heating Type */}
          <div>
            <Label htmlFor="heatingType" className="text-base font-semibold mb-3 block">
              Aktuelle Heizung
            </Label>
            <Select value={heatingType} onValueChange={setHeatingType}>
              <SelectTrigger id="heatingType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gas">Gasheizung</SelectItem>
                <SelectItem value="oil">Ölheizung</SelectItem>
                <SelectItem value="electric">Elektroheizung / Nachtspeicher</SelectItem>
                <SelectItem value="coal">Kohle- / Holzheizung</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Number of Residents */}
          <div>
            <Label htmlFor="residents" className="text-base font-semibold mb-3 block">
              Anzahl Personen im Haushalt: {residents}
            </Label>
            <Slider
              id="residents"
              min={1}
              max={8}
              step={1}
              value={[residents]}
              onValueChange={(value) => setResidents(value[0])}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>1 Person</span>
              <span>8+ Personen</span>
            </div>
          </div>

          {/* Income Bonus Checkbox */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="incomeBonus"
                checked={hasIncomeBonus}
                onCheckedChange={(checked) => setHasIncomeBonus(checked === true)}
                className="mt-1"
              />
              <div>
                <Label htmlFor="incomeBonus" className="font-semibold text-green-900 cursor-pointer">
                  Einkommensbonus (+30%)
                </Label>
                <p className="text-xs text-green-700 mt-1">
                  Zu versteuerndes Haushaltseinkommen unter 40.000€/Jahr.
                  Nachweis durch Steuerbescheid erforderlich.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0F5B78]/5 rounded-lg p-4 border border-[#0F5B78]/20">
            <p className="text-sm text-slate-700">
              <strong>Hinweis:</strong> Dies ist eine Schätzung basierend auf Durchschnittswerten. Die tatsächlichen
              Kosten können je nach individuellen Gegebenheiten variieren.
            </p>
          </div>
        </div>

        {/* Results Section */}
        {breakdown && (
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <h4 className="font-bold text-lg mb-4 text-slate-900">
              Ihre Kostenübersicht
            </h4>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Anlagenkosten</span>
                <span className="font-semibold">
                  {formatCurrency(breakdown.equipmentCost)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Installation</span>
                <span className="font-semibold">
                  {formatCurrency(breakdown.installationCost)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="font-semibold text-slate-900">Gesamtkosten</span>
                <span className="font-bold text-lg">
                  {formatCurrency(breakdown.totalCost)}
                </span>
              </div>

              {/* Förderung Details */}
              <div className="bg-green-50 p-3 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-800">Förderfähige Kosten (max.)</span>
                  <span className="font-medium text-green-800">
                    {formatCurrency(breakdown.eligibleCosts)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-800">
                    Fördersatz ({formatPercent(breakdown.subsidyRate)})
                  </span>
                  <span className="text-xs text-green-700">
                    {breakdown.hasKlimabonus && "inkl. Klimabonus"}
                    {breakdown.hasEfficiencyBonus && breakdown.hasKlimabonus && " + "}
                    {breakdown.hasEfficiencyBonus && "Effizienzbonus"}
                    {hasIncomeBonus && " + Einkommensbonus"}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-green-200">
                  <span className="text-green-800 font-semibold flex items-center gap-2">
                    <TrendingDown className="h-4 w-4" />
                    KfW 458 Förderung
                  </span>
                  <span className="font-bold text-green-600">
                    - {formatCurrency(breakdown.subsidyAmount)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between py-3 bg-[#0F5B78] text-white px-4 rounded-lg">
                <span className="font-bold text-lg">Ihr Nettopreis</span>
                <span className="font-bold text-2xl">
                  {formatCurrency(breakdown.netCost)}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Jahresarbeitszahl (JAZ):</strong> {breakdown.estimatedJAZ}
                </p>
                <p className="text-xs text-slate-600">
                  Für jede kWh Strom erhalten Sie {breakdown.estimatedJAZ} kWh Wärme
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm text-green-800 mb-2">
                  <strong>Jährliche Einsparung:</strong>{" "}
                  {formatCurrency(breakdown.annualSavings)} pro Jahr
                </p>
                <p className="text-xs text-green-700">
                  Im Vergleich zu Ihrer aktuellen {heatingType === "gas" ? "Gas" : heatingType === "oil" ? "Öl" : heatingType === "electric" ? "Elektro" : "Kohle"}-Heizung
                </p>
              </div>

              {/* Info about funding composition */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-blue-800">
                    <strong>Förderung setzt sich zusammen aus:</strong>
                    <ul className="mt-1 space-y-0.5">
                      <li>• 30% Grundförderung</li>
                      {breakdown.hasKlimabonus && <li>• +20% Klimageschwindigkeitsbonus</li>}
                      {breakdown.hasEfficiencyBonus && <li>• +5% Effizienzbonus (JAZ ≥ 4,5)</li>}
                      {hasIncomeBonus && <li>• +30% Einkommensbonus</li>}
                    </ul>
                  </div>
                </div>
              </div>

              <Link href={`/kontakt?tab=quote&service=waermepumpe&propertyType=${propertyType}&houseSize=${houseSize}&pumpType=${pumpType}&heatingType=${heatingType}&insulation=${insulation}&buildingYear=${buildingYear}&heatingSurface=${heatingSurface}&residents=${residents}&estimatedCost=${breakdown.netCost}&subsidyRate=${Math.round(breakdown.subsidyRate * 100)}`}>
                <Button className="w-full bg-[#0F5B78] hover:bg-[#0F5B78]/90 text-white font-bold">
                  Genaues Angebot anfragen
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-slate-500">
          Berechnung basiert auf Durchschnittswerten. Förderung gemäß{" "}
          <a
            href="https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-(458)/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F5B78] hover:underline"
          >
            KfW 458
          </a>{" "}
          (Stand 2025). Max. 70% Förderung, förderfähige Kosten bis 30.000€.
        </p>
      </div>
    </div>
  );
}
