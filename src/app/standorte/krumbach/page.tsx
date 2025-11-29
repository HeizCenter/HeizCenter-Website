import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";
import { LocationPageSchema } from "@/components/schema/local-business-schema";
import { locationData } from "@/lib/location-data";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";

export const metadata: Metadata = {
  title: "HeizCenter Krumbach - Wärmepumpe, Heizung & Sanitär",
  description: "HeizCenter Service in Krumbach. Wärmepumpen, Heizung, Sanitär. Service aus Ulm - 35 km entfernt.",
  keywords: ["Wärmepumpe Krumbach", "Heizung Krumbach", "Sanitär Krumbach"],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen mit BEG-Förderung", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Installation und 24/7 Notdienst", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Badsanierung und Festpreisgarantie", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Split-Klimaanlagen Installation", icon: Wind, href: "/klimaanlage" },
];

const faqs: FAQItem[] = [
  { question: "Anfahrtszeit nach Krumbach?", answer: "Von Ulm ca. 30-35 Minuten. Notdienst innerhalb 2-3 Stunden verfügbar." },
  { question: "Leistungen in Krumbach?", answer: "Wärmepumpen, Heizung, Badsanierung, Klimaanlagen mit vollständigem Service." },
  { question: "Anfahrtskosten?", answer: "25€ Pauschale. Bei größeren Projekten entfällt die Anfahrt." },
];

export default function KrumbachPage() {
  const data = locationData["krumbach"];

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "" },
          { name: "Standorte", url: "/standorte" },
          { name: "krumuach", url: "/standorte/krumbach" },
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
      <LocationHero name="Krumbach (Schwaben)" address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel" phone="+49 8234 9665900" email="service@heizcenter.de" description="HeizCenter Service für Krumbach. Wärmepumpen, Heizung und Sanitär mit professionellem Service."
        mainLocation="Gutenzell-Hürbel" />
      <LocationServices services={services} title="Unsere Leistungen in Krumbach" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <h2 className="text-3xl font-bold mb-6">HeizCenter in Krumbach</h2>
          <p className="text-lg mb-6">Service für Krumbach und die Umgebung mit allen Leistungen rund um Heizung und Sanitär.</p>
          <h3 className="text-2xl font-bold mb-4">Wärmepumpen Krumbach</h3>
          <p>Installation moderner Wärmepumpen mit bis zu 70% Förderung. Energieeffizient und umweltfreundlich.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-8">
            <p className="font-bold">Service-Radius: Krumbach, Breitenthal, Waltenhausen, Neuburg a.d. Kammel</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
