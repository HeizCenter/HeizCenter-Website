"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, FileText, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Kostenlose Beratung",
    description: "Wir prüfen die Eignung Ihres Daches und ermitteln Ihren Wärmebedarf",
    icon: MessageSquare,
    duration: "1-2 Tage",
  },
  {
    number: 2,
    title: "Angebot & Förderung",
    description: "Sie erhalten ein detailliertes Angebot inkl. Förderberechnung",
    icon: FileText,
    duration: "3-5 Tage",
  },
  {
    number: 3,
    title: "Installation",
    description: "Professionelle Montage der Kollektoren und Integration in Ihr Heizsystem",
    icon: Wrench,
    duration: "1-2 Tage",
  },
  {
    number: 4,
    title: "Inbetriebnahme",
    description: "Einweisung, Systemoptimierung und Übergabe der Dokumentation",
    icon: CheckCircle2,
    duration: "Sofort",
  },
];

export function AnimatedProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for triggering animation when section is visible
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

  // Auto-advance through steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container">
        <div className="mb-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Unser Prozess
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            In 4 Schritten zu Ihrer Solarthermie-Anlage
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Vom Erstgespräch bis zur Inbetriebnahme – transparent und professionell
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-slate-200 rounded-full mx-16">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div
                    className={`
                      relative z-10 w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-500 ease-out
                      ${isActive
                        ? "bg-primary shadow-lg shadow-primary/30 scale-110"
                        : isCompleted
                          ? "bg-primary/80"
                          : "bg-slate-200 group-hover:bg-slate-300"
                      }
                    `}
                  >
                    {/* Pulse animation for active step */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    )}
                    <Icon
                      className={`h-8 w-8 transition-colors duration-300 ${
                        isActive || isCompleted ? "text-white" : "text-slate-500"
                      }`}
                    />
                  </div>

                  {/* Step Number Badge */}
                  <div
                    className={`
                      absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
                      text-sm font-bold transition-all duration-300
                      ${isActive || isCompleted
                        ? "bg-white text-primary shadow-md"
                        : "bg-slate-100 text-slate-500"
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* Content Card */}
                  <Card
                    className={`
                      mt-8 w-full transition-all duration-500
                      ${isActive
                        ? "border-primary shadow-lg transform -translate-y-1"
                        : "border-transparent hover:border-slate-200"
                      }
                    `}
                  >
                    <CardContent className="p-5 text-center">
                      <h3 className={`font-bold text-lg mb-2 transition-colors ${isActive ? "text-primary" : ""}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                      <span
                        className={`
                          inline-block px-3 py-1 rounded-full text-xs font-medium
                          ${isActive
                            ? "bg-primary/10 text-primary"
                            : "bg-slate-100 text-slate-500"
                          }
                        `}
                      >
                        {step.duration}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === activeStep
                    ? "bg-primary w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                  }
                `}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;

            return (
              <Card
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`
                  cursor-pointer transition-all duration-300 overflow-hidden
                  ${isActive
                    ? "border-primary shadow-lg"
                    : "border-slate-200 hover:border-slate-300"
                  }
                `}
              >
                <CardContent className="p-0">
                  <div className="flex items-stretch">
                    {/* Left Side - Number and Icon */}
                    <div
                      className={`
                        w-24 flex-shrink-0 flex flex-col items-center justify-center py-6
                        transition-colors duration-300
                        ${isActive ? "bg-primary" : "bg-slate-100"}
                      `}
                    >
                      <span
                        className={`
                          text-3xl font-bold mb-2
                          ${isActive ? "text-white" : "text-slate-400"}
                        `}
                      >
                        {step.number}
                      </span>
                      <Icon
                        className={`h-6 w-6 ${isActive ? "text-white/80" : "text-slate-400"}`}
                      />
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-grow p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold text-lg ${isActive ? "text-primary" : ""}`}>
                          {step.title}
                        </h3>
                        <span
                          className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            ${isActive
                              ? "bg-primary/10 text-primary"
                              : "bg-slate-100 text-slate-500"
                            }
                          `}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>

                    {/* Arrow indicator */}
                    <div
                      className={`
                        w-10 flex-shrink-0 flex items-center justify-center
                        transition-opacity duration-300
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Bereit für den ersten Schritt? Wir beraten Sie kostenlos und unverbindlich.
          </p>
        </div>
      </div>
    </section>
  );
}
