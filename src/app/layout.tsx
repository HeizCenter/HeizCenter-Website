import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HeizCenter - Wärmepumpen, Heizung & Sanitär in Bayern",
  description:
    "Ihr Experte für Wärmepumpen, Heizungsinstallation, Sanitär und Klimaanlagen in Bobingen und Gutenzell-Hürbel. Über 20 Jahre Erfahrung. Jetzt beraten lassen!",
  keywords: [
    "Wärmepumpe",
    "Heizung",
    "Sanitär",
    "Klimaanlage",
    "Bobingen",
    "Gutenzell-Hürbel",
    "Augsburg",
    "Ulm",
    "Memmingen",
    "Heizungsinstallation",
    "Badsanierung",
  ],
  authors: [{ name: "HeizCenter" }],
  openGraph: {
    title: "HeizCenter - Wärmepumpen, Heizung & Sanitär",
    description:
      "Ihr Experte für moderne Heizungslösungen in Bayern. Über 20 Jahre Erfahrung.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
