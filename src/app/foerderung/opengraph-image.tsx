import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Heizungsförderung - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Heizungsförderung 2026",
    subtitle: "Bis zu 70% KfW-Förderung für Wärmepumpen. Wir übernehmen die Antragstellung.",
    badge: "KfW & BEG Förderung",
  });
}
