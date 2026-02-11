import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Heizung Notdienst - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Heizung Notdienst 24/7",
    subtitle: "Schnelle Hilfe bei Heizungsausfall. Notdienst in der Region Augsburg, Ulm & Memmingen.",
    badge: "24/7 Erreichbar",
  });
}
