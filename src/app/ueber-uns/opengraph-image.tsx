import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Über uns - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Über HeizCenter",
    subtitle: "Ihr Fachbetrieb für Heizung, Sanitär und Klimatechnik in Bayern und Baden-Württemberg.",
    badge: "Meisterbetrieb",
  });
}
