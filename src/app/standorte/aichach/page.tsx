import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "HeizCenter Aichach - Wärmepumpe, Heizung & Sanitär",
  description: "HeizCenter Service in Aichach. Wärmepumpen, Heizung, Sanitär. Service aus Augsburg - 25 km.",
  keywords: ["Wärmepumpe Aichach", "Heizung Aichach", "Sanitär Aichach"],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Wärmepumpen-Installation", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizungsservice & Notdienst", icon: Flame, href: "/heizung" },
  { title: "Sanitär", description: "Badsanierung komplett", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Klimaanlagen-Installation", icon: Wind, href: "/klimaanlage" },
];

const faqs: FAQItem[] = [
  { question: "Service-Zeit für Aichach?", answer: "Von Augsburg in 20-25 Minuten erreichbar." },
  { question: "Verfügbare Services?", answer: "Alle Heizungs-, Sanitär- und Klimaservices verfügbar." },
  { question: "Anfahrt kostenpflichtig?", answer: "20€ Pauschale, bei Großaufträgen kostenlos." },
];

const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "HeizCenter Aichach", address: { addressLocality: "Aichach", addressCountry: "DE" }, geo: { latitude: 48.4595, longitude: 11.1310 }, telephone: "+49 8234 96659 00" };

export default function AichachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationHero name="Aichach" address="Lechallee 28, 86399 Bobingen" phone="+49 8234 966590" email="service@heizcenter.de" description="HeizCenter Service Aichach. Wärmepumpen, Heizung, Sanitär mit schnellem Service."
        mainLocation="Bobingen" />
      <LocationServices services={services} title="Unsere Leistungen in Aichach" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <h2 className="text-3xl font-bold mb-6">Service in Aichach</h2>
          <p className="text-lg mb-4">Von Augsburg betreuen wir Kunden in Aichach mit vollem Service.</p>
          <h3 className="text-2xl font-bold mb-3">Wärmepumpen</h3>
          <p className="mb-4">Moderne Wärmepumpen mit Förderung bis 40%.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-6">
            <p><strong>Abdeckung:</strong> Aichach, Kühbach, Pöttmes, Schiltberg, Inchenhofen</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
