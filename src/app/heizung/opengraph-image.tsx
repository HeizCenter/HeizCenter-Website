import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Heizung Installation & Modernisierung - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Heizung Installation & Modernisierung",
    subtitle: "Gas, Wärmepumpe, Pellets, Hybrid. Professionelle Beratung und Installation.",
    badge: "Alle Heizsysteme",
  });
}
