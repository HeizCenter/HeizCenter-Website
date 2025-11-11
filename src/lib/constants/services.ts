import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "waermepumpe",
    slug: "waermepumpe",
    title: "Wärmepumpe",
    description: "Moderne Wärmepumpen-Systeme für effizientes und umweltfreundliches Heizen",
    icon: "heat",
    featured: true,
  },
  {
    id: "heizung",
    slug: "heizung",
    title: "Heizung",
    description: "Installation und Wartung moderner Heizungsanlagen",
    icon: "flame",
    featured: true,
  },
  {
    id: "sanitaer",
    slug: "sanitaer",
    title: "Sanitär & Badsanierung",
    description: "Komplette Badsanierung und Sanitärinstallationen",
    icon: "droplet",
    featured: true,
  },
  {
    id: "klimaanlage",
    slug: "klimaanlage",
    title: "Klimaanlage",
    description: "Klimaanlagen für angenehme Raumtemperaturen das ganze Jahr",
    icon: "wind",
    featured: true,
  },
];
