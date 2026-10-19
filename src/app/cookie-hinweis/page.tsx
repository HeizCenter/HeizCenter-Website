import { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";
import { isConsentEnabled } from "@/lib/consent";
import { CookieSettingsLink } from "@/components/consent/cookie-settings-link";

export const metadata: Metadata = {
  title: "Cookie-Richtlinien | HeizCenter",
  description: "Informationen zur Verwendung von Cookies auf der HeizCenter Website.",
  alternates: {
    canonical: getCanonicalUrl("/cookie-hinweis"),
  },
};

export default function CookieHinweisPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold mb-8">Cookie-Richtlinien</h1>

        <section className="mb-8">
          <p className="mb-4">
            Cookies sind kleine Textdateien, die eine Website in Ihrem Browser speichert. Ähnlich funktionieren Einträge im
            Speicher Ihres Browsers (z. B. „Local Storage“), mit denen eine Website Informationen auf Ihrem Gerät ablegen kann.
          </p>
          {isConsentEnabled() ? (
            <p className="mb-4">
              <strong>Ohne Ihre Einwilligung setzt diese Website keine Cookies.</strong> Im Speicher Ihres Browsers legt sie
              Ihre Auswahl im Cookie-Banner ab sowie auf der Seite „Kostenrechner“ Ihre Eingaben. Nur wenn Sie im
              Cookie-Banner zustimmen, werden über den Google Tag Manager Google Analytics (Statistik) bzw. Google Ads
              (Marketing) geladen, die Cookies setzen. Ihre Auswahl können Sie jederzeit ändern:{" "}
              <CookieSettingsLink className="text-[#0F5B78] underline" />. Auch Vercel Web Analytics, das ohne Cookies
              arbeitet, läuft nur mit Ihrer Einwilligung in „Statistik“.
            </p>
          ) : (
            <p className="mb-4">
              <strong>Diese Website setzt derzeit keine Cookies.</strong> Im Speicher Ihres Browsers legt sie nur auf der Seite
              „Kostenrechner“ einen Eintrag ab, damit Ihre Eingaben beim nächsten Aufruf erhalten bleiben. Für die
              Reichweitenmessung nutzen wir Vercel Web Analytics, das ohne Cookies arbeitet.
            </p>
          )}
          <p className="mb-6">
            Die folgende Übersicht zeigt, welche Dienste auf Ihrem Gerät Informationen speichern oder auslesen:
          </p>
        </section>

        <section className="mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-300">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold">Kategorie</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold">Zweck</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold">Cookies / Speichereinträge</th>
                </tr>
              </thead>
              <tbody>
                {isConsentEnabled() && (
                  <>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Einwilligung</strong><br />
                        <span className="text-sm">(notwendig)</span>
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        Speichert Ihre Auswahl im Cookie-Banner und den Zeitpunkt der Entscheidung. Nach 12 Monaten fragen wir
                        erneut.
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        hc_consent (Local Storage, HeizCenter)
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Statistik</strong><br />
                        <span className="text-sm">(nur mit Einwilligung)</span>
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        Google Analytics über den Google Tag Manager: Auswertung, wie unsere Website genutzt wird, mit
                        pseudonymer Kennung. Löschung spätestens 2 Jahre nach dem letzten Besuch.
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        _ga, _ga_* (Google)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Marketing</strong><br />
                        <span className="text-sm">(nur mit Einwilligung)</span>
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        Google Ads Conversion-Tracking über den Google Tag Manager: misst, ob eine Anzeige zu einer Anfrage,
                        einem Anruf, einer WhatsApp-Nachricht oder E-Mail geführt hat. Cookies auf unserer Domain werden nach spätestens
                        90 Tagen gelöscht, Cookies auf Google-eigenen Domains nach bis zu 13 Monaten.
                      </td>
                      <td className="border border-slate-300 px-4 py-3">
                        _gcl_* (z. B. _gcl_au, Google)
                      </td>
                    </tr>
                  </>
                )}
                <tr>
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Funktion</strong><br />
                    <span className="text-sm">(notwendig)</span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Kostenrechner: speichert Ihre Eingaben (z. B. Wohnfläche, Baujahr, Heizungsart) auf Ihrem Gerät, damit
                    Sie sie beim nächsten Aufruf nicht erneut eingeben müssen. Der Eintrag wird nicht an uns übertragen und
                    bleibt bestehen, bis Sie die Websitedaten in Ihrem Browser löschen.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    heizcenter-calculator-values (Local Storage, HeizCenter)
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Statistik</strong><br />
                    <span className="text-sm">
                      {isConsentEnabled() ? "(cookielos, nur mit Einwilligung)" : "(cookielos)"}
                    </span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Vercel Web Analytics: zusammengefasste Auswertung, welche Seiten wie oft aufgerufen werden.
                    Besucher werden nicht über mehrere Tage oder Websites hinweg wiedererkannt.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    keine
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <p className="mb-4">
            Ändern wir etwas daran, aktualisieren wir diese Seite. Cookies, die nicht technisch notwendig sind, setzen wir nur mit
            Ihrer vorherigen Einwilligung.
          </p>
          <p className="mb-4">
            Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-[#0F5B78] hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
