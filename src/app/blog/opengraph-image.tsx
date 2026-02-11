import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Ratgeber Blog - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Ratgeber & Blog",
    subtitle: "Expertenwissen zu Heizung, Wärmepumpe, Förderung und Energiesparen.",
    badge: "Heizungs-Ratgeber",
  });
}
