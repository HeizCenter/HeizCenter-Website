import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Hersteller - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Unsere Hersteller",
    subtitle: "Vaillant, Viessmann, Bosch, Daikin und mehr — Beratung, Planung und Einbau.",
    badge: "Markenhersteller",
  });
}
