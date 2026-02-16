import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind, Sun } from "lucide-react";
import { ServiceAreaSchema } from "@/components/schema/service-area-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { getCanonicalUrl } from "@/lib/seo";
import { CONTACT } from '@/lib/config/contact';

export const metadata: Metadata = {
  title: "Wärmepumpe & Heizung in Schwabmünchen - Service vom HeizCenter",
  description: "HeizCenter Service Schwabmünchen. Wärmepumpen, Heizung. Service aus Augsburg - 20 km.",
  keywords: ["Wärmepumpe Schwabmünchen", "Heizung Schwabmünchen", "Solarthermie Schwabmünchen"],
  alternates: {
    canonical: getCanonicalUrl("/standorte/schwabmuenchen"),
  },
};

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizungsservice", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Sanitär & Bad", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Klimaanlagen", icon: Wind, href: "/klimaanlage" },
  { title: "Solarthermie", description: "Solarthermie-Anlagen", icon: Sun, href: "/solar" },
];

const faqs: FAQItem[] = [
  { question: "Anfahrt Schwabmünchen?", answer: "Von Augsburg 15-20 Minuten erreichbar." },
  { question: "Verfügbare Leistungen?", answer: "Alle Heizungs- und Sanitärleistungen." },
  { question: "Kosten Anfahrt?", answer: "15€, bei Projekten kostenlos." },
];

export default function SchwabmuenchenPage() {
  const data = locationData["schwabmuenchen"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "Schwabmünchen", url: "/standorte/schwabmuenchen" },
        ]}
      />
      {/* Schema.org LocalBusiness Structured Data */}
      <ServiceAreaSchema
        cityName={data.cityName}
        region={data.region}
        mainOffice={{
          name: "Bobingen",
          streetAddress: "Lechallee 28",
          addressLocality: "Bobingen",
          postalCode: "86399",
          latitude: 48.2744,
          longitude: 10.8369,
        }}
        serviceCities={data.serviceCities}
      />
      <LocationHero name="Schwabmünchen" address="Lechallee 28, 86399 Bobingen" phone={CONTACT.PHONE_DISPLAY} email={CONTACT.EMAIL} description="HeizCenter Service Schwabmünchen. Wärmepumpen, Heizung, Sanitär."
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
