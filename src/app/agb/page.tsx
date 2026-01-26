import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen | HeizCenter",
  description: "Allgemeine Geschäftsbedingungen der HeizCenter GmbH für Heizung, Sanitär und Klimaanlagen.",
  alternates: {
    canonical: getCanonicalUrl("/agb"),
  },
};

export default function AGBPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">AGB</h1>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold mb-6">Allgemeine Geschäftsbedingungen</h2>

          <p className="text-lg mb-8">
            Hier finden Sie unsere Allgemeinen Geschäftsbedingungen als PDF zum Download.
          </p>

          <p className="mb-8">
            Um sie zu herunterzuladen, klicken Sie einfach auf den folgenden Button.
          </p>

          <div className="mb-12">
            <Button asChild size="lg" className="gap-2">
              <a href="/documents/HeizCenter_AGB.pdf" download>
                <Download className="h-5 w-5" />
                HeizCenter AGB
              </a>
            </Button>
          </div>

          <div className="mt-8 text-sm text-slate-600">
            <p>
              Bei Fragen zu unseren Geschäftsbedingungen kontaktieren Sie uns gerne unter{" "}
              <a href="mailto:service@heizcenter.de" className="text-[#0F5B78] hover:underline">
                service@heizcenter.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
