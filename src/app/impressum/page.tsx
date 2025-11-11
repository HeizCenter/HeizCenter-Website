import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | HeizCenter",
  description: "Impressum und Kontaktdaten von HeizCenter - Ihr Experte für Wärmepumpen, Heizung, Sanitär und Klimaanlagen.",
  robots: "noindex, nofollow",
};

export default function ImpressumPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Anschrift</h3>
          <p className="mb-4">
            <strong>HeizCenter GmbH</strong> (ehemals UG)
            <br />
            Lechallee 28
            <br />
            86399 Bobingen
          </p>
          <p className="mb-4">
            <strong>HeizCenter GmbH</strong> (ehemals UG)
            <br />
            Schlüsselbergstraße 5
            <br />
            88484 Gutenzell-Hürbel
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Telefon</h3>
          <p className="mb-2">
            <a href="tel:+4982349665900" className="text-blue-600 hover:underline">
              +49 8234 96659 00
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
          <p className="mb-2">
            <a href="https://wa.me/4982349665901" className="text-blue-600 hover:underline">
              +49 823 49 665 901
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Email</h3>
          <p className="mb-2">
            <a href="mailto:service@heizcenter.de" className="text-blue-600 hover:underline">
              service@heizcenter.de
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Vertreten durch</h3>
          <p className="mb-2">
            Geschäftsführer
            <br />
            Alexander Gellert, Andrej Voisnis
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">USt-ID</h3>
          <p className="mb-2">DE366482129</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Eintragung im Handelsregister</h3>
          <p className="mb-2">
            Registergericht: Amtsgericht Augsburg
            <br />
            Registernummer: HRB 39683
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">EU-Streitschlichtung</h3>
          <p className="mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="mb-4">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
