import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCtaProps {
  service: "waermepumpe" | "heizung" | "sanitaer" | "klimaanlage";
}

const serviceConfig = {
  waermepumpe: {
    title: "Wärmepumpe installieren lassen",
    benefits: [
      "Bis zu 70% Energiekostenersparnis",
      "BEG-Förderung bis zu 70%",
      "Umweltfreundlich & zukunftssicher",
    ],
    cta: "Kostenlose Beratung anfragen",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-800",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  heizung: {
    title: "Moderne Heizung installieren",
    benefits: [
      "Effiziente Gas- oder Ölheizung",
      "Förderung für Hybridlösungen",
      "Zuverlässig & wartungsarm",
    ],
    cta: "Jetzt Angebot einholen",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-800",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
  },
  sanitaer: {
    title: "Badsanierung vom Profi",
    benefits: [
      "Komplettservice aus einer Hand",
      "Barrierefreie Lösungen",
      "Modernste Sanitärtechnik",
    ],
    cta: "Beratungstermin vereinbaren",
    bgColor: "bg-[#0F5B78]/5",
    borderColor: "border-[#0F5B78]/20",
    textColor: "text-[#0F5B78]",
    buttonColor: "bg-[#0F5B78] hover:bg-[#0F5B78]",
  },
  klimaanlage: {
    title: "Klimaanlage installieren lassen",
    benefits: [
      "Angenehmes Raumklima ganzjährig",
      "Energieeffiziente Split-Geräte",
      "Leise & wartungsarm",
    ],
    cta: "Kostenlose Beratung",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-800",
    buttonColor: "bg-cyan-600 hover:bg-cyan-700",
  },
};

export function ServiceCta({ service }: ServiceCtaProps) {
  const config = serviceConfig[service];

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border-2 rounded-xl p-6 md:p-8`}
    >
      <h3 className={`text-2xl font-bold mb-4 ${config.textColor}`}>
        {config.title}
      </h3>

      <ul className="space-y-3 mb-6">
        {config.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className={`h-5 w-5 ${config.textColor} flex-shrink-0 mt-0.5`} />
            <span className="text-slate-700">{benefit}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/kontakt?tab=quote&service=${service}`}
        className={`inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg transition-colors ${config.buttonColor}`}
      >
        {config.cta}
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}
