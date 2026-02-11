import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Standorte - HeizCenter";

export default function Image() {
  return generateOGImage({
    title: "Unsere Standorte",
    subtitle: "HeizCenter in Bayern und Baden-Württemberg. 24 Servicestädte in Ihrer Nähe.",
    badge: "Regional vor Ort",
  });
}
