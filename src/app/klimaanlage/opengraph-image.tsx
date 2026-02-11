import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Klimaanlage Installation - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Klimaanlage Installation & Wartung",
    subtitle: "Split-Klimaanlagen zum Heizen und Kühlen. Flüsterleiser Betrieb ab 19 dB(A).",
    badge: "Kühlen & Heizen",
  });
}
