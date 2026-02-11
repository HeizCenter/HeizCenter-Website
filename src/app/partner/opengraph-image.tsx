import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Partner & Hersteller - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Unsere Partner & Hersteller",
    subtitle: "Vaillant, Viessmann, Bosch, Daikin und mehr. Zertifizierter Fachpartner.",
    badge: "Premium Partner",
  });
}
