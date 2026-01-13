import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "HeizCenter Leutkirch - Wärmepumpe & Heizung",
  description: "HeizCenter Service Leutkirch. Wärmepumpen, Heizung. Service aus Memmingen - 35 km.",
  keywords: ["Wärmepumpe Leutkirch", "Heizung Leutkirch"],
  alternates: {
    canonical: getCanonicalUrl("/standorte/leutkirch"),
  },
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen-Installation", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizungsservice", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Badsanierung", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Klimaanlagen", icon: Wind, href: "/klimaanlage" },
];

const faqs: FAQItem[] = [
  { question: "Anfahrt Leutkirch?", answer: "Von Memmingen 30-35 Minuten." },
  { question: "Services?", answer: "Wärmepumpen, Heizung, Sanitär, Klima." },
  { question: "Kosten?", answer: "30€ Anfahrt, bei Projekten kostenlos." },
];

export default function LeutkírchPage() {
  const data = locationData["leutkirch"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "leutkirch", url: "/standorte/leutkirch" },
        ]}
      />
      {/* Schema.org LocalBusiness Structured Data */}
      <LocationPageSchema
        cityName={data.cityName}
        postalCode={data.postalCode}
        region={data.region}
        latitude={data.latitude}
        longitude={data.longitude}
        serviceCities={data.serviceCities}
      />
      <LocationHero name="Leutkirch im Allgäu" address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel" phone="+49 8234 9665900" email="service@heizcenter.de" description="HeizCenter Service für Leutkirch im Allgäu."
        mainLocation="Gutenzell-Hürbel" />
      <LocationServices services={services} title="Unsere Leistungen in Leutkirch" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <h2 className="text-3xl font-bold mb-6">Service Leutkirch</h2>
          <p className="text-lg">HeizCenter Service für Leutkirch. Alle Leistungen verfügbar.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-6">
            <p><strong>Einzugsgebiet:</strong> Leutkirch, Urlau, Wuchzenhofen, Gebrazhofen</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
