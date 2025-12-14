import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - HeizCenter | Heizung, Sanitär & Wärmepumpen",
  description:
    "Kontaktieren Sie HeizCenter für Heizung, Sanitär, Wärmepumpen und Klimaanlagen in Bobingen, Klosterlechfeld und Gutenzell-Hürbel. Angebot anfragen oder Notdienst 24/7.",
  openGraph: {
    title: "Kontakt - HeizCenter",
    description:
      "Kontaktieren Sie uns für Beratung, Angebote oder Notdienst. Wir sind für Sie da!",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
