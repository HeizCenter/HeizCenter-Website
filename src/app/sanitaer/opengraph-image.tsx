import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Sanitär & Badsanierung - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Sanitär & Badsanierung",
    subtitle: "Barrierefreie Bäder, Komplettsanierung und Sanitärinstallation.",
    badge: "Bad & Sanitär",
  });
}
