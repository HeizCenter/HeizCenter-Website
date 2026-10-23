"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
import { FOERDERUNG, FOERDER_TEXT, einkommensbonus, foerderfaehigeKosten, obergrenze } from "@/lib/config/foerderung";

// localStorage key for persisting calculator values
const STORAGE_KEY = "heizcenter-calculator-values";

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
  incomeBonusRate: number;
}

// Förderung KfW 458: Werte zentral in src/lib/config/foerderung.ts (HEC-159)

// Einkommensklassen (zu versteuerndes Haushaltsjahreseinkommen) → Obergrenze in €
const INCOME_BRACKETS: Record<string, { label: string; upTo: number }> = {
  "bis-30": { label: "bis 30.000 €", upTo: 30_000 },
  "bis-40": { label: "30.001 – 40.000 €", upTo: 40_000 },
  "bis-50": { label: "40.001 – 50.000 €", upTo: 50_000 },
  "bis-60": { label: "50.001 – 60.000 €", upTo: 60_000 },
  "ueber-60": { label: "über 60.000 €", upTo: Number.POSITIVE_INFINITY },
};

// Klimageschwindigkeitsbonus: Öl, Kohle, Nachtspeicher, Gas-Etagenheizung oder Gas/Biomasse ab 20 Jahren
const KLIMA_BONUS_HEATING = ["gas", "oil", "coal", "electric"];

export function PriceCalculator() {
  const searchParams = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(false);

  // Default values
  const [houseSize, setHouseSize] = useState<number>(150);
  const [heatingType, setHeatingType] = useState<string>("gas");
  const [insulation, setInsulation] = useState<string>("average");
  const [buildingYear, setBuildingYear] = useState<string>("2000-2010");
  const [heatingSurface, setHeatingSurface] = useState<string>("radiators");
  const [residents, setResidents] = useState<number>(3);
  const [pumpType, setPumpType] = useState<string>("air-water");
  const [propertyType, setPropertyType] = useState<string>("einfamilienhaus");
  const [incomeBracket, setIncomeBracket] = useState<string>("ueber-60");
  const [hasChild, setHasChild] = useState<boolean>(false);
  const [selfUse, setSelfUse] = useState<boolean>(true);
  const [numberOfUnits, setNumberOfUnits] = useState<number>(1);
  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  // Load saved values from URL params or localStorage on mount
  useEffect(() => {
    // Priority: URL params > localStorage > defaults
    const urlHouseSize = searchParams.get("houseSize");
    const urlPumpType = searchParams.get("pumpType");
    const urlHeatingType = searchParams.get("heatingType");
    const urlInsulation = searchParams.get("insulation");
    const urlBuildingYear = searchParams.get("buildingYear");
    const urlHeatingSurface = searchParams.get("heatingSurface");
    const urlResidents = searchParams.get("residents");
    const urlPropertyType = searchParams.get("propertyType");

    // Check if we have URL params (coming from quote form)
    if (urlHouseSize || urlPumpType) {
      if (urlHouseSize) setHouseSize(parseInt(urlHouseSize));
      if (urlPumpType) setPumpType(urlPumpType);
      if (urlHeatingType) setHeatingType(urlHeatingType);
      if (urlInsulation) setInsulation(urlInsulation);
      if (urlBuildingYear) setBuildingYear(urlBuildingYear);
      if (urlHeatingSurface) setHeatingSurface(urlHeatingSurface);
      if (urlResidents) setResidents(parseInt(urlResidents));
      if (urlPropertyType) setPropertyType(urlPropertyType);
    } else {
      // Try to load from localStorage
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const values = JSON.parse(saved);
          if (values.houseSize) setHouseSize(values.houseSize);
          if (values.pumpType) setPumpType(values.pumpType);
          if (values.heatingType) setHeatingType(values.heatingType);
          if (values.insulation) setInsulation(values.insulation);
          if (values.buildingYear) setBuildingYear(values.buildingYear);
          if (values.heatingSurface) setHeatingSurface(values.heatingSurface);
          if (values.residents) setResidents(values.residents);
          if (values.propertyType) setPropertyType(values.propertyType);
          if (values.incomeBracket && INCOME_BRACKETS[values.incomeBracket]) setIncomeBracket(values.incomeBracket);
          else if (values.hasIncomeBonus === true) setIncomeBracket("bis-40"); // alte Speicherung: „unter 40.000 €“
          if (values.hasChild !== undefined) setHasChild(values.hasChild === true);
          if (values.selfUse !== undefined) setSelfUse(values.selfUse === true);
          if (values.numberOfUnits) setNumberOfUnits(values.numberOfUnits);
        }
      } catch (e) {
        console.warn("Could not load calculator values from localStorage:", e);
      }
    }
    setIsInitialized(true);
  }, [searchParams]);

  // Save values to localStorage when they change (after initialization)
  useEffect(() => {
    if (!isInitialized) return;

    try {
      const values = {
        houseSize,
        pumpType,
        heatingType,
        insulation,
        buildingYear,
        heatingSurface,
        residents,
        propertyType,
        incomeBracket,
        hasChild,
        selfUse,
        numberOfUnits,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch (e) {
      console.warn("Could not save calculator values to localStorage:", e);
    }
  }, [isInitialized, houseSize, pumpType, heatingType, insulation, buildingYear, heatingSurface, residents, propertyType, incomeBracket, hasChild, selfUse, numberOfUnits]);

  // Calculate price when values change
  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseSize, heatingType, insulation, buildingYear, heatingSurface, residents, pumpType, propertyType, incomeBracket, hasChild, selfUse, numberOfUnits]);

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
    } else if (buildingYear === "2010-2020") {
      baseCost *= 0.95;
      jaz += 0.15;
    } else if (buildingYear === "2020-2025") {
      baseCost *= 0.9;
      jaz += 0.3;
    } else if (buildingYear === "after-2025") {
      baseCost *= 0.85;
      jaz += 0.4;
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
    // 8. FÖRDERUNGSBERECHNUNG (KfW 458, Merkblatt 09/2026)
    // ============================================

    // Förderfähige Kosten berechnen (Deckel nach Wohneinheiten)
    const units = propertyType === "mehrfamilienhaus" ? numberOfUnits : 1;
    const eligibleCosts = Math.min(totalCost, foerderfaehigeKosten(units));

    // Grundförderung auf die förderfähigen Kosten des ganzen Gebäudes; Boni nur für die
    // selbst genutzte Wohneinheit (deren gleicher Anteil an den Kosten), nicht für Gewerbe
    // und nicht für Vermieter (beide Boni nur für selbstnutzende Eigentümer)
    const isPrivate = propertyType !== "gewerbe" && selfUse;
    const hasKlimabonus = isPrivate && KLIMA_BONUS_HEATING.includes(heatingType);
    const incomeBonusRate = isPrivate
      ? einkommensbonus(INCOME_BRACKETS[incomeBracket]?.upTo ?? Number.POSITIVE_INFINITY, hasChild)
      : 0;
    const bonusRate = Math.min(
      (hasKlimabonus ? FOERDERUNG.klima : 0) + incomeBonusRate,
      obergrenze(incomeBonusRate) - FOERDERUNG.grund,
    );
    const ownUnitShare = eligibleCosts / units;
    const subsidyAmountExact = eligibleCosts * FOERDERUNG.grund + ownUnitShare * bonusRate;
    const subsidyRate = eligibleCosts > 0 ? subsidyAmountExact / eligibleCosts : 0;

    const subsidyAmount = Math.round(subsidyAmountExact);
    const netCost = totalCost - subsidyAmount;

    // ============================================
    // 9. JÄHRLICHE EINSPARUNG
    // ============================================
    // Heizkosten pro m² (aktualisierte Werte 2025)
    const oldHeatingCostPerSqm: Record<string, number> = {
      gas: 13,      // Korrigiert von 18
      "gas-young": 13,
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
      incomeBonusRate,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Förderfähige Kosten: max. {formatCurrency(foerderfaehigeKosten(numberOfUnits))}
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
                <SelectItem value="2010-2020">2010-2020</SelectItem>
                <SelectItem value="2020-2025">2020-2025</SelectItem>
                <SelectItem value="after-2025">Nach 2025</SelectItem>
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
                <SelectItem value="gas">Gasheizung (20 Jahre oder älter) / Gas-Etagenheizung</SelectItem>
                <SelectItem value="gas-young">Gasheizung (jünger als 20 Jahre)</SelectItem>
                <SelectItem value="oil">Ölheizung</SelectItem>
                <SelectItem value="electric">Nachtspeicherheizung</SelectItem>
                <SelectItem value="coal">Kohle- / Holzheizung</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-500 mt-1">
              Klimageschwindigkeitsbonus ({FOERDER_TEXT.klimaHinweis}) beim Austausch von Öl-, Kohle-,
              Nachtspeicher- oder Gas-Etagenheizung bzw. Gas-/Holzheizung ab 20 Jahren – nur bei selbst genutztem Wohneigentum.
            </p>
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

          {/* Einkommensbonus: Stufen nach zu versteuerndem Haushaltseinkommen */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200 space-y-3">
            {propertyType !== "gewerbe" && (
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="selfUse"
                  checked={selfUse}
                  onCheckedChange={(checked) => setSelfUse(checked === true)}
                  className="mt-1"
                />
                <Label htmlFor="selfUse" className="text-sm text-green-900 cursor-pointer font-normal">
                  Ich bewohne das Gebäude bzw. eine Wohnung darin selbst (Hauptwohnsitz) – Voraussetzung für
                  Klimageschwindigkeits- und Einkommensbonus
                </Label>
              </div>
            )}
            <div>
              <Label htmlFor="incomeBracket" className="font-semibold text-green-900 mb-2 block">
                Zu versteuerndes Haushaltseinkommen (Einkommensbonus bis {FOERDER_TEXT.einkommenMax})
              </Label>
              <Select value={incomeBracket} onValueChange={setIncomeBracket}>
                <SelectTrigger id="incomeBracket" className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(INCOME_BRACKETS).map(([value, { label }]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="hasChild"
                checked={hasChild}
                onCheckedChange={(checked) => setHasChild(checked === true)}
                className="mt-1"
              />
              <Label htmlFor="hasChild" className="text-sm text-green-900 cursor-pointer font-normal">
                Mindestens ein minderjähriges Kind im Haushalt (kindergeldberechtigt) – Einkommensgrenzen steigen um
                10.000 €
              </Label>
            </div>
            <p className="text-xs text-green-700">
              Einkommensbonus: 40 % bis 30.000 €, 30 % bis 40.000 €, 10 % bis 50.000 € – nur für selbst genutztes
              Wohneigentum, Nachweis durch Steuerbescheid.
            </p>
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
                    {[breakdown.hasKlimabonus && "Klimabonus", breakdown.incomeBonusRate > 0 && "Einkommensbonus"]
                      .filter(Boolean)
                      .join(" + ")}
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
                  Im Vergleich zu Ihrer aktuellen {heatingType.startsWith("gas") ? "Gas" : heatingType === "oil" ? "Öl" : heatingType === "electric" ? "Elektro" : "Kohle"}-Heizung
                </p>
              </div>

              {/* Info about funding composition */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-blue-800">
                    <strong>Förderung setzt sich zusammen aus:</strong>
                    <ul className="mt-1 space-y-0.5">
                      <li>• {FOERDER_TEXT.grund} Grundförderung</li>
                      {breakdown.hasKlimabonus && <li>• +{FOERDER_TEXT.klima} Klimageschwindigkeitsbonus (Antrag bis {FOERDERUNG.klimaGueltigBis})</li>}
                      {breakdown.incomeBonusRate > 0 && <li>• +{formatPercent(breakdown.incomeBonusRate)} Einkommensbonus</li>}
                      <li>• Höchstens {formatPercent(obergrenze(breakdown.incomeBonusRate))} der förderfähigen Kosten ({FOERDER_TEXT.maxHinweis})</li>
                      {propertyType === "mehrfamilienhaus" && <li>• Boni nur auf den Anteil der selbst genutzten Wohneinheit</li>}
                      {propertyType === "gewerbe" && <li>• Gewerbe: nur Grundförderung, keine Boni</li>}
                      {propertyType !== "gewerbe" && !selfUse && <li>• Nicht selbst bewohnt: nur Grundförderung, keine Boni</li>}
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
            href={FOERDERUNG.quelleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F5B78] hover:underline"
          >
            KfW 458
          </a>{" "}
          (Stand {FOERDERUNG.stand}). Max. {FOERDER_TEXT.max} Förderung ({FOERDER_TEXT.maxHinweis}), förderfähige Kosten bis {FOERDER_TEXT.kostenEfh} (Einfamilienhaus).
        </p>
      </div>
    </div>
  );
}
