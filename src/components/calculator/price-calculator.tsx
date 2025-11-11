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
import Link from "next/link";

interface PriceBreakdown {
  equipmentCost: number;
  installationCost: number;
  totalCost: number;
  subsidyAmount: number;
  netCost: number;
}

export function PriceCalculator() {
  const [houseSize, setHouseSize] = useState<number>(150);
  const [heatingType, setHeatingType] = useState<string>("gas");
  const [insulation, setInsulation] = useState<string>("average");
  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null);

  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseSize, heatingType, insulation]);

  const calculatePrice = () => {
    // Base equipment cost per square meter
    let equipmentCostPerSqm = 180;

    // Adjust based on current heating type
    const heatingTypeMultiplier: Record<string, number> = {
      gas: 1.0,
      oil: 1.1,
      electric: 0.9,
      coal: 1.2,
    };
    equipmentCostPerSqm *= heatingTypeMultiplier[heatingType] || 1.0;

    // Adjust based on insulation
    const insulationMultiplier: Record<string, number> = {
      poor: 1.15,
      average: 1.0,
      good: 0.9,
    };
    equipmentCostPerSqm *= insulationMultiplier[insulation] || 1.0;

    // Calculate costs
    const equipmentCost = Math.round(equipmentCostPerSqm * houseSize);
    const installationCost = Math.round(equipmentCost * 0.3); // 30% of equipment cost
    const totalCost = equipmentCost + installationCost;

    // Calculate subsidy (BEG: up to 40%)
    let subsidyRate = 0.35; // Base 35%
    if (heatingType === "coal" || heatingType === "oil") {
      subsidyRate = 0.4; // 40% for replacing coal/oil
    }
    const subsidyAmount = Math.round(totalCost * subsidyRate);

    const netCost = totalCost - subsidyAmount;

    setBreakdown({
      equipmentCost,
      installationCost,
      totalCost,
      subsidyAmount,
      netCost,
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

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-slate-700">
              <strong>Hinweis:</strong> Dies ist eine Schätzung. Die tatsächlichen
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
                  <strong>Jährliche Einsparung:</strong> Bis zu{" "}
                  {formatCurrency(Math.round(breakdown.netCost * 0.15))} pro Jahr
                </p>
                <p className="text-xs text-slate-600">
                  Im Vergleich zu Ihrer alten Heizung
                </p>
              </div>

              <Link href="/kontakt?tab=quote&service=waermepumpe">
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
