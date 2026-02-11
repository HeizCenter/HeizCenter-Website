import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "HeizCenter - Wärmepumpen, Heizung & Sanitär in Bayern";

export default function Image() {
  return generateOGImage({
    title: "Wärmepumpen, Heizung & Sanitär in Bayern",
    subtitle: "Professionelle Installation und Wartung. Bis zu 70% KfW-Förderung.",
    badge: "HeizCenter GmbH",
  });
}
