import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Kontakt - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Kontakt & Beratung",
    subtitle: "Kostenlose Erstberatung. Standorte in Bobingen und Gutenzell-Hürbel.",
    badge: "Jetzt beraten lassen",
  });
}
