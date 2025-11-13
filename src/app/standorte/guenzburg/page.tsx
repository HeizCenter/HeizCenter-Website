import { Metadata } from "next";
import { LocationHero } from "@/components/sections/location-hero";
import { LocationServices, LocationService } from "@/components/sections/location-services";
import { FAQSection, FAQItem } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Zap, Flame, Droplet, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "HeizCenter Günzburg - Wärmepumpe, Heizung & Sanitär | Service vor Ort",
  description: "HeizCenter Service in Günzburg. Wärmepumpen, Heizung, Sanitär und Klimaanlagen. Schneller Service aus Ulm - nur 30 km entfernt. Jetzt anfragen!",
  keywords: ["Wärmepumpe Günzburg", "Heizung Günzburg", "Sanitär Günzburg", "Klimaanlage Günzburg"],
};

export const dynamic = 'force-dynamic';

const services: LocationService[] = [
  { title: "Wärmepumpe", description: "Moderne Wärmepumpen für Günzburg. BEG-Förderung bis 40%.", icon: Zap, href: "/waermepumpe" },
  { title: "Heizung", description: "Heizungsinstallation und Wartung. 24/7 Notdienst verfügbar.", icon: Flame, href: "/heizung" },
  { title: "Sanitär & Bad", description: "Badsanierung mit Festpreisgarantie und 3D-Planung.", icon: Droplet, href: "/sanitaer" },
  { title: "Klimaanlage", description: "Split-Klimaanlagen für perfektes Raumklima.", icon: Wind, href: "/klimaanlage" },
];

const faqs: FAQItem[] = [
  { question: "Wie schnell sind Sie in Günzburg vor Ort?", answer: "Von Ulm erreichen wir Günzburg in etwa 25-30 Minuten. Bei Notfällen innerhalb von 2-3 Stunden." },
  { question: "Welche Leistungen bieten Sie in Günzburg?", answer: "Komplettes Leistungsspektrum: Wärmepumpen, Heizung, Badsanierung, Klimaanlagen inkl. Notdienst." },
  { question: "Entstehen Anfahrtskosten für Günzburg?", answer: "Anfahrtspauschale 25€. Bei größeren Aufträgen kostenlos. Beratung vor Ort immer kostenlos." },
];

const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "HeizCenter Service Günzburg", address: { "@type": "PostalAddress", addressLocality: "Günzburg", addressCountry: "DE" }, geo: { latitude: 48.4536, longitude: 10.2759 }, telephone: "+49 8234 96659 00", parentOrganization: { "@type": "Organization", name: "HeizCenter Ulm", url: "https://heizcenter.de/standorte/ulm" } };

export default function GuenzbergPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationHero name="Günzburg" address="Schlüsselbergstraße 5, 88484 Gutenzell-Hürbel" phone="+49 8234 966590" email="service@heizcenter.de" description="HeizCenter Service für Günzburg und Umgebung. Wärmepumpen, Heizung, Sanitär und Klimaanlagen mit professioneller Beratung."
        mainLocation="Gutenzell-Hürbel" />
      <LocationServices services={services} title="Unsere Leistungen in Günzburg" />
      <section className="container py-16">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6">HeizCenter Service in Günzburg</h2>
          <p className="text-lg mb-6">Von Ulm aus betreuen wir Kunden in Günzburg mit dem kompletten Service rund um Heizung, Sanitär und Klimatechnik.</p>
          <h3 className="text-2xl font-bold mb-4">Wärmepumpen für Günzburg</h3>
          <p className="mb-4">Moderne Wärmepumpen-Installation mit BEG-Förderung bis 40%. Bis zu 70% Heizkosten sparen.</p>
          <h3 className="text-2xl font-bold mb-4">Heizung & Notdienst</h3>
          <p className="mb-4">Installation, Wartung und 24/7 Notdienst für alle Heizungssysteme in Günzburg.</p>
          <div className="bg-[#0F5B78]/5 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-3">Service-Radius</h3>
            <p className="mb-2">Wir betreuen auch: Leipheim, Burgau, Ichenhausen, Offingen, Thannhausen</p>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <CTASection variant="gradient" />
    </>
  );
}
