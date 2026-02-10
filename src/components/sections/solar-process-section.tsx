"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Wrench,
  CheckCircle2,
  Sun,
  ArrowRight,
  Phone,
} from "lucide-react";
import { getPhoneLink } from "@/lib/config/contact";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  duration: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Kostenlose Beratung",
    description: "Wir analysieren Ihr Dach und Ihren Wärmebedarf",
    details: [
      "Dachausrichtung & Neigung prüfen",
      "Warmwasserbedarf ermitteln",
      "Heizungsintegration besprechen",
    ],
    icon: MessageSquare,
    duration: "1-2 Tage",
  },
  {
    number: 2,
    title: "Angebot & Förderung",
    description: "Detaillierte Planung mit Förderberechnung",
    details: [
      "Kollektorfläche berechnen",
      "KfW-Förderung beantragen",
      "Festpreisangebot erstellen",
    ],
    icon: FileText,
    duration: "3-5 Tage",
  },
  {
    number: 3,
    title: "Installation",
    description: "Professionelle Montage durch Meisterbetrieb",
    details: [
      "Kollektoren montieren",
      "Speicher anschließen",
      "System integrieren",
    ],
    icon: Wrench,
    duration: "1-2 Tage",
  },
  {
    number: 4,
    title: "Inbetriebnahme",
    description: "Einweisung und Übergabe der Dokumentation",
    details: [
      "Systemoptimierung",
      "Bedienung erklären",
      "Wartungsplan übergeben",
    ],
    icon: CheckCircle2,
    duration: "Sofort",
  },
];

export function SolarProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance with pause on hover
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
    setIsPaused(true);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsPaused(false), 8000);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Solar grid pattern background */}
      <div className="absolute inset-0 solar-grid-bg" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative sun element */}
      <div className="absolute -top-20 -right-20 w-80 h-80 opacity-10">
        <div className="relative w-full h-full animate-sun-pulse">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-orange-400" />
          {/* Sun rays */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-amber-400 to-transparent origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-solar/10 border border-solar/20 rounded-full">
            <Sun className="w-4 h-4 text-solar" />
            <span className="text-sm font-semibold text-solar tracking-wide uppercase">
              Ihr Weg zur Solarwärme
            </span>
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            In 4 Schritten zu Ihrer
            <span className="block mt-1 bg-gradient-to-r from-primary via-primary to-solar bg-clip-text text-transparent">
              Solarthermie-Anlage
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Vom Erstgespräch bis zur Inbetriebnahme – transparent, professionell
            und mit persönlicher Betreuung durch unser Team.
          </p>
        </div>

        {/* Desktop: Diagonal Sunray Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 500"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Animated energy flow lines between steps */}
            {steps.slice(0, -1).map((_, i) => {
              const x1 = 150 + i * 300;
              const x2 = 150 + (i + 1) * 300;
              const y1 = 200;
              const y2 = 200;
              const isActive = i < activeStep;
              const isCurrent = i === activeStep - 1;

              return (
                <g key={i}>
                  {/* Background line */}
                  <path
                    d={`M ${x1 + 60} ${y1} Q ${(x1 + x2) / 2} ${y1 - 30} ${x2 - 60} ${y2}`}
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    className={`transition-all duration-700 ${
                      isActive ? "text-primary/40" : "text-slate-200"
                    }`}
                  />
                  {/* Energy flow particles */}
                  {(isActive || isCurrent) && (
                    <circle
                      r="6"
                      className="fill-solar animate-energy-flow"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M ${x1 + 60} ${y1} Q ${(x1 + x2) / 2} ${y1 - 30} ${x2 - 60} ${y2}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Step Cards in diagonal arrangement */}
          <div className="relative grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const delay = index * 150;

              return (
                <div
                  key={step.number}
                  className={`
                    relative group cursor-pointer
                    ${isVisible ? "animate-fade-in-up" : "opacity-0"}
                  `}
                  style={{
                    animationDelay: `${delay}ms`,
                    transform: `translateY(${index % 2 === 1 ? "20px" : "0"})`,
                  }}
                  onClick={() => handleStepClick(index)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Step Number - Bold geometric badge */}
                  <div
                    className={`
                      absolute -top-4 -left-2 z-20 w-12 h-12
                      flex items-center justify-center
                      font-bold text-xl
                      transition-all duration-500 ease-out
                      ${isVisible ? "animate-number-pop" : "opacity-0 scale-0"}
                      ${
                        isActive
                          ? "bg-solar text-slate-900 rotate-3 scale-110"
                          : isCompleted
                          ? "bg-primary text-white rotate-0"
                          : "bg-slate-200 text-slate-500 -rotate-3"
                      }
                    `}
                    style={{
                      animationDelay: `${delay + 200}ms`,
                      clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Main Card */}
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl p-6 pt-10
                      transition-all duration-500 ease-out
                      border-2
                      ${
                        isActive
                          ? "bg-white border-primary shadow-xl shadow-primary/10 -translate-y-2 animate-step-glow"
                          : isCompleted
                          ? "bg-white/80 border-primary/30 shadow-md"
                          : "bg-white/60 border-slate-200 hover:border-slate-300 hover:shadow-lg"
                      }
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        w-14 h-14 rounded-xl flex items-center justify-center mb-4
                        transition-all duration-500
                        ${
                          isActive
                            ? "bg-gradient-to-br from-primary to-primary/80 text-white scale-110"
                            : isCompleted
                            ? "bg-primary/10 text-primary"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                        }
                      `}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        font-bold text-lg mb-2 transition-colors duration-300
                        ${isActive ? "text-primary" : "text-slate-800"}
                      `}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details list - only show on active */}
                    <div
                      className={`
                        space-y-2 overflow-hidden transition-all duration-500
                        ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-solar" />
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Duration badge */}
                    <div
                      className={`
                        inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full
                        text-xs font-semibold uppercase tracking-wide
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-solar/15 text-solar"
                            : "bg-slate-100 text-slate-500"
                        }
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {step.duration}
                    </div>

                    {/* Active indicator line */}
                    <div
                      className={`
                        absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-solar
                        transition-transform duration-500 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0"}
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`
                  relative h-2 rounded-full transition-all duration-500 overflow-hidden
                  ${index === activeStep ? "w-12 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"}
                `}
                aria-label={`Schritt ${index + 1}`}
              >
                {index === activeStep && !isPaused && (
                  <div
                    className="absolute inset-0 bg-solar origin-left"
                    style={{
                      animation: "grow-width 4s linear forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200">
            <div
              className="w-full bg-gradient-to-b from-primary to-solar transition-all duration-700 ease-out"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.number}
                  className={`
                    relative pl-20 cursor-pointer
                    ${isVisible ? "animate-fade-in-up" : "opacity-0"}
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Step circle on timeline */}
                  <div
                    className={`
                      absolute left-4 top-6 w-9 h-9 rounded-full
                      flex items-center justify-center font-bold text-sm
                      border-4 border-white shadow-lg
                      transition-all duration-500
                      ${
                        isActive
                          ? "bg-solar text-slate-900 scale-125"
                          : isCompleted
                          ? "bg-primary text-white"
                          : "bg-slate-200 text-slate-500"
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      rounded-2xl p-5 border-2 transition-all duration-500
                      ${
                        isActive
                          ? "bg-white border-primary shadow-lg"
                          : "bg-white/80 border-slate-200"
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                          w-12 h-12 rounded-xl flex-shrink-0
                          flex items-center justify-center
                          transition-all duration-300
                          ${
                            isActive
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-slate-500"
                          }
                        `}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`font-bold ${
                              isActive ? "text-primary" : "text-slate-800"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <span
                            className={`
                              px-2 py-0.5 rounded-full text-xs font-medium
                              ${
                                isActive
                                  ? "bg-solar/15 text-solar"
                                  : "bg-slate-100 text-slate-500"
                              }
                            `}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          {step.description}
                        </p>

                        {/* Expandable details */}
                        <div
                          className={`
                            mt-3 space-y-1.5 overflow-hidden transition-all duration-500
                            ${isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
                          `}
                        >
                          {step.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-solar" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary/5 via-transparent to-solar/5 rounded-2xl border border-slate-200">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-slate-800">
                Bereit für den ersten Schritt?
              </p>
              <p className="text-sm text-slate-600">
                Kostenlose Beratung – unverbindlich und persönlich
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="lg">
                <Link href={getPhoneLink()} className="gap-2">
                  <Phone className="w-4 h-4" />
                  Anrufen
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-2">
                <Link href="/kontakt?tab=quote&service=solar">
                  Beratung starten
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add the progress bar animation keyframe inline */}
      <style jsx>{`
        @keyframes grow-width {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
