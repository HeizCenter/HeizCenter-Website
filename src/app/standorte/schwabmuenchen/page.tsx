import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "HeizCenter Schwabmünchen - Wärmepumpe & Heizung",
  description: "HeizCenter Service Schwabmünchen. Wärmepumpen, Heizung. Service aus Augsburg - 20 km.",
  keywords: ["Wärmepumpe Schwabmünchen", "Heizung Schwabmünchen"],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizungsservice", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Sanitär & Bad", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Klimaanlagen", icon: Wind, href: "/klimaanlage" },
];

const faqs: FAQItem[] = [
  { question: "Anfahrt Schwabmünchen?", answer: "Von Augsburg 15-20 Minuten erreichbar." },
  { question: "Verfügbare Leistungen?", answer: "Alle Heizungs- und Sanitärleistungen." },
  { question: "Kosten Anfahrt?", answer: "15€, bei Projekten kostenlos." },
];

const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "HeizCenter Schwabmünchen", address: { addressLocality: "Schwabmünchen", addressCountry: "DE" }, telephone: "+49 8234 96659 00" };

export default function SchwabmuenchenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationHero name="Schwabmünchen" address="Lechallee 28, 86399 Bobingen" phone="+49 8234 966590" email="service@heizcenter.de" description="HeizCenter Service Schwabmünchen. Wärmepumpen, Heizung, Sanitär."
        mainLocation="Bobingen" />
      <LocationServices services={services} title="Unsere Leistungen in Schwabmünchen" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <h2 className="text-3xl font-bold mb-6">Service Schwabmünchen</h2>
          <p className="text-lg">Schneller Service für Schwabmünchen von Augsburg aus.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-6">
            <p><strong>Abdeckung:</strong> Schwabmünchen, Klimmach, Schwabegg, Mittelstetten</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
