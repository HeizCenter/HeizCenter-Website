import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "FAQ - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Häufige Fragen",
    subtitle: "Antworten zu Heizung, Wärmepumpe, Förderung, Kosten und Installation.",
    badge: "FAQ",
  });
}
