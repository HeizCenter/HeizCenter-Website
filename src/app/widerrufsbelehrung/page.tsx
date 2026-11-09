import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getCanonicalUrl } from "@/lib/seo";
import { CONTACT } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung | HeizCenter",
  description:
    "Widerrufsbelehrung und Muster-Widerrufsformular der HeizCenter GmbH für Verbraucher als PDF zum Download.",
  alternates: {
    canonical: getCanonicalUrl("/widerrufsbelehrung"),
  },
};

export default function WiderrufsbelehrungPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Widerrufsbelehrung</h1>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold mb-6">
            Widerrufsbelehrung und Muster-Widerrufsformular
          </h2>

          <p className="text-lg mb-8">
            Hier finden Sie unsere Widerrufsbelehrung für Verbraucher samt
            Muster-Widerrufsformular als PDF zum Download.
          </p>

          <p className="mb-8">
            Um sie herunterzuladen, klicken Sie einfach auf den folgenden Button.
          </p>

          <div className="mb-12">
            <Button asChild size="lg" className="gap-2">
              <a href="/documents/HeizCenter_Widerrufsbelehrung.pdf" download>
                <Download className="h-5 w-5" />
                Widerrufsbelehrung
              </a>
            </Button>
          </div>

          <p className="mb-8 text-sm text-slate-600">
            Die Widerrufsbelehrung ist außerdem als Anlage in unseren{" "}
            <Link href="/agb" className="text-[#0F5B78] hover:underline">
              Allgemeinen Geschäftsbedingungen
            </Link>{" "}
            enthalten.
          </p>

          <div className="mt-8 text-sm text-slate-600">
            <p>
              Bei Fragen zu Ihrem Widerrufsrecht kontaktieren Sie uns gerne unter{" "}
              <a href={`mailto:${CONTACT.EMAIL}`} className="text-[#0F5B78] hover:underline">
                {CONTACT.EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
