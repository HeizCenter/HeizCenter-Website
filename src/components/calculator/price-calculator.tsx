"use client";

import { useState, useEffect } from "react";
import { Calculator, TrendingDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
  subsidyAmount: number;
  netCost: number;
  estimatedJAZ: number;
  annualSavings: number;
}

export function PriceCalculator() {
  const [houseSize, setHouseSize] = useState<number>(150);
  const [heatingType, setHeatingType] = useState<string>("gas");
  const [insulation, setInsulation] = useState<string>("average");
  const [buildingYear, setBuildingYear] = useState<string>("2000-2010");
  const [heatingSurface, setHeatingSurface] = useState<string>("radiators");
  const [residents, setResidents] = useState<number>(3);
  const [pumpType, setPumpType] = useState<string>("air-water");
  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseSize, heatingType, insulation, buildingYear, heatingSurface, residents, pumpType]);

  const calculatePrice = () => {
    // Base equipment cost based on pump type
    let baseCost = 0;
    let jaz = 0; // Jahresarbeitszahl (annual performance factor)

    switch (pumpType) {
      case "air-water":
        baseCost = 18000 + (houseSize * 60);
        jaz = 3.5;
        break;
      case "ground-water":
        baseCost = 25000 + (houseSize * 80);
        jaz = 4.5;
        break;
      case "water-water":
        baseCost = 30000 + (houseSize * 85);
        jaz = 5.0;
        break;
      default:
        baseCost = 18000 + (houseSize * 60);
        jaz = 3.5;
    }

    // Adjust based on heating surface type
    if (heatingSurface === "floor") {
      jaz += 0.5; // Floor heating is more efficient
      baseCost -= 1000; // Slightly cheaper as floor heating works with lower temps
    } else if (heatingSurface === "mixed") {
      jaz += 0.2;
    } else {
      // Radiators might need upgrading for optimal efficiency
      baseCost += 2000;
    }

    // Adjust based on insulation and building year
    const insulationMultiplier: Record<string, number> = {
      poor: 1.2,
      average: 1.0,
      good: 0.85,
    };
    baseCost *= insulationMultiplier[insulation] || 1.0;

    // Building year affects insulation assumption
    if (buildingYear === "before-1980") {
      baseCost *= 1.15;
      jaz -= 0.3;
    } else if (buildingYear === "1980-2000") {
      baseCost *= 1.05;
      jaz -= 0.1;
    } else if (buildingYear === "after-2015") {
      baseCost *= 0.9;
      jaz += 0.3;
    }

    // Hot water needs based on residents
    const hotWaterCost = residents * 300; // €300 per person for hot water system
    baseCost += hotWaterCost;

    // Installation cost (20-30% of equipment cost)
    const installationCost = Math.round(baseCost * 0.25);
    const equipmentCost = Math.round(baseCost);
    const totalCost = equipmentCost + installationCost;

    // Calculate subsidy (BEG: up to 40%)
    let subsidyRate = 0.3; // Base 30%

    // Speed bonus (Geschwindigkeitsbonus) for replacing old heating
    if (heatingType === "oil" || heatingType === "coal") {
      subsidyRate = 0.4; // +10% for oil/coal replacement
    } else if (heatingType === "gas") {
      subsidyRate = 0.35; // +5% for gas replacement
    }

    const subsidyAmount = Math.round(totalCost * subsidyRate);
    const netCost = totalCost - subsidyAmount;

    // Calculate estimated annual savings
    let oldHeatingCost = houseSize * 18; // €18/m² average for old systems
    if (heatingType === "oil") oldHeatingCost = houseSize * 22;
    if (heatingType === "coal") oldHeatingCost = houseSize * 25;
    if (heatingType === "electric") oldHeatingCost = houseSize * 28;

    // Electricity cost for heat pump (JAZ factor considered)
    const heatPumpElectricityCost = Math.round((oldHeatingCost * 0.8) / jaz);
    const annualSavings = Math.round(oldHeatingCost - heatPumpElectricityCost);

    setBreakdown({
      equipmentCost,
      installationCost,
      totalCost,
      subsidyAmount,
      netCost,
      estimatedJAZ: Math.round(jaz * 10) / 10,
      annualSavings,
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

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 md:p-8 border border-blue-200">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-blue-600 text-white rounded-lg p-3">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            Wärmepumpen-Kostenrechner
          </h3>
          <p className="text-slate-600">
            Berechnen Sie die Kosten für Ihre neue Wärmepumpe inkl. BEG-Förderung
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
                <SelectItem value="electric">Elektroheizung</SelectItem>
                <SelectItem value="coal">Kohleheizung</SelectItem>
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

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
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
              <div className="flex justify-between py-2 bg-green-50 px-3 rounded-lg">
                <span className="text-green-800 font-semibold flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  BEG-Förderung
                </span>
                <span className="font-bold text-green-600">
                  - {formatCurrency(breakdown.subsidyAmount)}
                </span>
              </div>
              <div className="flex justify-between py-3 bg-blue-600 text-white px-4 rounded-lg">
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
                  Im Vergleich zu Ihrer alten Heizung
                </p>
              </div>

              <Link href={`/kontakt?tab=quote&service=waermepumpe&houseSize=${houseSize}&pumpType=${pumpType}&heatingType=${heatingType}&insulation=${insulation}&buildingYear=${buildingYear}&heatingSurface=${heatingSurface}&residents=${residents}&estimatedCost=${breakdown.netCost}`}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
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
          Berechnung basiert auf Durchschnittswerten. Förderung gemäß BEG-Richtlinien
          (Stand 2025).
        </p>
      </div>
    </div>
  );
}
