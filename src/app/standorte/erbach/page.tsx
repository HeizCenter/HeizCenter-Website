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
  title: "HeizCenter Erbach (Donau) - Wärmepumpe & Heizung",
  description: "HeizCenter Service Erbach. Wärmepumpen, Heizung, Sanitär. Service aus Ulm - 20 km.",
  keywords: ["Wärmepumpe Erbach", "Heizung Erbach Donau", "Solarthermie Erbach"],
  alternates: {
    canonical: getCanonicalUrl("/standorte/erbach"),
  },
};

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen-Service", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizung & Notdienst", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Badsanierung", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Klimatechnik", icon: Wind, href: "/klimaanlage" },
  { title: "Solarthermie", description: "Solarthermie-Anlagen", icon: Sun, href: "/solar" },
];

const faqs: FAQItem[] = [
  { question: "Anfahrtszeit?", answer: "Von Ulm ca. 15-20 Minuten." },
  { question: "Services verfügbar?", answer: "Komplettes Leistungsspektrum verfügbar." },
  { question: "Kosten?", answer: "20€ Anfahrt, bei Projekten kostenlos." },
];

export default function ErbachPage() {
  const data = locationData["erbach"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "Erbach", url: "/standorte/erbach" },
        ]}
      />
      {/* Schema.org Service Area Structured Data */}
      <ServiceAreaSchema
        cityName={data.cityName}
        region={data.region}
        mainOffice={{
          name: "Gutenzell-Hürbel",
          streetAddress: "Schlüsselbergstraße 5",
          addressLocality: "Gutenzell-Hürbel",
          postalCode: "88484",
          latitude: 48.0667,
          longitude: 9.95,
        }}
        serviceCities={data.serviceCities}
      />
      <LocationHero name="Erbach (Donau)" address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel" phone={CONTACT.PHONE_DISPLAY} email={CONTACT.EMAIL} description="HeizCenter Service für Erbach an der Donau."
        mainLocation="Gutenzell-Hürbel" />
      <LocationServices services={services} title="Unsere Leistungen in Erbach" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <h2 className="text-3xl font-bold mb-6">Service Erbach (Donau)</h2>
          <p className="text-lg mb-4">Schneller Service für Erbach mit allen Heizungs- und Sanitär-Leistungen.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-6">
            <p><strong>Einzugsgebiet:</strong> Erbach, Donaurieden, Ersingen, Ringingen</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
