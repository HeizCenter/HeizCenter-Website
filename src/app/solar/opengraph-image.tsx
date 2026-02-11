import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Solaranlage Installation - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Solarthermie & Photovoltaik",
    subtitle: "Solaranlagen für Warmwasser und Heizungsunterstützung. Professionelle Installation.",
    badge: "Sonnenenergie nutzen",
  });
}
