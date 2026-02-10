"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThermometerSun, Zap, Check, ArrowRight } from "lucide-react";

interface ComparisonRow {
  label: string;
  solarthermie: {
    value: string;
    bar?: number; // 0-100 for visual bar
    highlight?: boolean;
  };
  photovoltaik: {
    value: string;
    bar?: number;
    highlight?: boolean;
  };
}

const comparisonData: ComparisonRow[] = [
  {
    label: "Wirkungsgrad",
    solarthermie: { value: "bis 80% (optisch)", bar: 80, highlight: true },
    photovoltaik: { value: "15-22%", bar: 22 },
  },
  {
    label: "Erzeugt",
    solarthermie: { value: "Wärme" },
    photovoltaik: { value: "Strom" },
  },
  {
    label: "Kosten (4 Pers.)",
    solarthermie: { value: "5.000 - 10.000 €" },
    photovoltaik: { value: "8.000 - 15.000 €" },
  },
  {
    label: "KfW-Förderung",
    solarthermie: { value: "Bis zu 70%", highlight: true },
    photovoltaik: { value: "Steuerbefreit" },
  },
  {
    label: "Primärer Nutzen",
    solarthermie: { value: "Heizkosten senken" },
    photovoltaik: { value: "Stromkosten senken" },
  },
  {
    label: "Ideal für",
    solarthermie: { value: "Wärmepumpe, Gas/Öl" },
    photovoltaik: { value: "Hoher Stromverbrauch" },
  },
];

function AnimatedBar({
  percentage,
  color,
  isVisible
}: {
  percentage: number;
  color: "primary" | "solar";
  isVisible: boolean;
}) {
  const colorClasses = {
    primary: "bg-gradient-to-r from-primary to-primary/70",
    solar: "bg-gradient-to-r from-solar to-brand-yellow-dark",
  };

  return (
    <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
      <div
        className={`absolute inset-y-0 left-0 ${colorClasses[color]} rounded-full transition-all duration-1000 ease-out`}
        style={{
          width: isVisible ? `${percentage}%` : "0%",
          transitionDelay: "200ms"
        }}
      />
      {/* Animated shine effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          transform: isVisible ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 1.5s ease-out 0.5s"
        }}
      />
    </div>
  );
}

function ComparisonValue({
  value,
  bar,
  highlight,
  color,
  isVisible
}: {
  value: string;
  bar?: number;
  highlight?: boolean;
  color: "primary" | "solar";
  isVisible: boolean;
}) {
  return (
    <div className="flex-1">
      <div className={`
        text-lg font-bold
        ${highlight
          ? color === "primary"
            ? "text-primary"
            : "text-brand-yellow-dark"
          : "text-slate-800"
        }
      `}>
        {value}
      </div>
      {bar !== undefined && (
        <AnimatedBar percentage={bar} color={color} isVisible={isVisible} />
      )}
    </div>
  );
}

export function SolarComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Technologie-Vergleich
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-slate-900">
            Solarthermie oder Photovoltaik?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Zwei Wege, die Kraft der Sonne zu nutzen – im direkten Vergleich
          </p>
        </div>

        {/* Comparison Headers - Desktop */}
        <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-6 mb-4 max-w-4xl mx-auto">
          <div /> {/* Empty cell for alignment */}

          {/* Solarthermie Header */}
          <div
            className={`
              relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10
              border-2 border-primary/20 transition-all duration-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <ThermometerSun className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Solarthermie</h3>
                <p className="text-sm text-slate-600">Wärme für Ihr Zuhause</p>
              </div>
            </div>
          </div>

          {/* Photovoltaik Header */}
          <div
            className={`
              relative p-6 rounded-2xl bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10
              border-2 border-brand-yellow/20 transition-all duration-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center shadow-lg shadow-brand-yellow/20">
                <Zap className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Photovoltaik</h3>
                <p className="text-sm text-slate-600">Strom für alle Geräte</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Headers */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-6 max-w-lg mx-auto">
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
            <ThermometerSun className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-bold text-slate-900">Solarthermie</h3>
          </div>
          <div className="p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 text-center">
            <Zap className="h-8 w-8 text-brand-yellow-dark mx-auto mb-2" />
            <h3 className="font-bold text-slate-900">Photovoltaik</h3>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="max-w-4xl mx-auto space-y-3">
          {comparisonData.map((row, index) => (
            <div
              key={row.label}
              className={`
                grid md:grid-cols-[200px_1fr_1fr] gap-4 md:gap-6 p-4 md:p-5 rounded-xl
                transition-all duration-300 cursor-default
                ${hoveredRow === index
                  ? "bg-slate-100 shadow-md"
                  : "bg-white hover:bg-slate-50"
                }
                ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
                }
              `}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {/* Label */}
              <div className="flex items-center">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {row.label}
                </span>
              </div>

              {/* Mobile: Side by side values */}
              <div className="md:hidden grid grid-cols-2 gap-4">
                <div className="text-center">
                  <ComparisonValue
                    value={row.solarthermie.value}
                    bar={row.solarthermie.bar}
                    highlight={row.solarthermie.highlight}
                    color="primary"
                    isVisible={isVisible}
                  />
                </div>
                <div className="text-center">
                  <ComparisonValue
                    value={row.photovoltaik.value}
                    bar={row.photovoltaik.bar}
                    highlight={row.photovoltaik.highlight}
                    color="solar"
                    isVisible={isVisible}
                  />
                </div>
              </div>

              {/* Desktop: Full width values */}
              <div className="hidden md:block">
                <ComparisonValue
                  value={row.solarthermie.value}
                  bar={row.solarthermie.bar}
                  highlight={row.solarthermie.highlight}
                  color="primary"
                  isVisible={isVisible}
                />
              </div>
              <div className="hidden md:block">
                <ComparisonValue
                  value={row.photovoltaik.value}
                  bar={row.photovoltaik.bar}
                  highlight={row.photovoltaik.highlight}
                  color="solar"
                  isVisible={isVisible}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Winner Indicator for Wirkungsgrad */}
        <div
          className={`
            max-w-4xl mx-auto mt-8 transition-all duration-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: "800ms" }}
        >
          <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/5 via-transparent to-transparent overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-lg text-slate-900">
                    Solarthermie gewinnt beim Wirkungsgrad
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Mit bis zu 80% optischem Kollektorwirkungsgrad (Jahresnutzungsgrad ca. 50%) wandelt Solarthermie
                    Sonnenlicht effizienter in Wärme um als PV in Strom (15-22%) – ideal wenn Sie Wärme benötigen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combination Recommendation */}
        <div
          className={`
            max-w-4xl mx-auto mt-6 transition-all duration-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: "950ms" }}
        >
          <Card className="border-2 border-brand-yellow/40 bg-gradient-to-br from-brand-yellow/5 via-brand-yellow/10 to-primary/5 overflow-hidden shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Icon Stack */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl shadow-primary/20 rotate-[-6deg]">
                    <ThermometerSun className="h-9 w-9 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-yellow-dark flex items-center justify-center shadow-lg rotate-[6deg]">
                    <Zap className="h-6 w-6 text-slate-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center lg:text-left">
                  <div className="inline-block px-3 py-1 bg-brand-yellow text-slate-900 rounded-full text-xs font-bold mb-3 shadow-sm">
                    UNSERE EMPFEHLUNG
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    Das Beste aus beiden Welten
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    <span className="font-semibold text-primary">Solarthermie für Warmwasser & Heizung</span> +
                    <span className="font-semibold text-primary"> Wärmepumpe als Hauptheizung</span> =
                    maximale Energieunabhängigkeit. Die Solarthermie übernimmt im Sommer komplett das Warmwasser
                    und senkt den Stromverbrauch Ihrer Wärmepumpe um bis zu <strong>20%</strong>.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="group whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/kontakt?tab=quote&service=solar">
                      Jetzt beraten lassen
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
