import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Wärmepumpe Installation - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Wärmepumpe Installation & Wartung",
    subtitle: "Bis zu 70% KfW-Förderung. 40-45% niedrigere Heizkosten.",
    badge: "Bis zu 70% Förderung",
  });
}
