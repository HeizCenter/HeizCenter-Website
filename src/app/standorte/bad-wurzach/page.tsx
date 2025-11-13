import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "HeizCenter Bad Wurzach - Wärmepumpe & Heizung",
  description: "HeizCenter Service Bad Wurzach. Wärmepumpen, Heizung. Service aus Memmingen - 40 km.",
  keywords: ["Wärmepumpe Bad Wurzach", "Heizung Bad Wurzach"],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizungsservice", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Sanitär & Bad", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Klimaanlagen", icon: Wind, href: "/klimaanlage" },
];

const faqs: FAQItem[] = [
  { question: "Anfahrt Bad Wurzach?", answer: "Von Memmingen ca. 35-40 Minuten." },
  { question: "Verfügbare Services?", answer: "Alle Heizungs- und Sanitärservices." },
  { question: "Anfahrtskosten?", answer: "30€, bei Projekten entfällt Anfahrt." },
];

const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "HeizCenter Bad Wurzach", address: { addressLocality: "Bad Wurzach", addressCountry: "DE" }, telephone: "+49 8234 96659 00" };

export default function BadWurzachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationHero name="Bad Wurzach" address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel" phone="+49 8234 966590" email="service@heizcenter.de" description="HeizCenter Service Bad Wurzach. Wärmepumpen und Heizung im Allgäu."
        mainLocation="Gutenzell-Hürbel" />
      <LocationServices services={services} title="Unsere Leistungen in Bad Wurzach" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <h2 className="text-3xl font-bold mb-6">Service Bad Wurzach</h2>
          <p className="text-lg">Service für Bad Wurzach und Umgebung. Wärmepumpen, Heizung, Sanitär.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-6">
            <p><strong>Abdeckung:</strong> Bad Wurzach, Hauerz, Haidgau, Seibranz</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
