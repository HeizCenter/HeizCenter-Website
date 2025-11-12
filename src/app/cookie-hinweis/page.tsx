import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinien | HeizCenter",
  description: "Informationen zur Verwendung von Cookies auf der HeizCenter Website.",
  robots: "noindex, nofollow",
};

export default function CookieHinweisPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold mb-8">Cookie-Richtlinien</h1>

        <section className="mb-8">
          <p className="mb-4">
            Cookies sind kleine Textbausteine, die von unseren Servern an Ihren Computer oder Ihr Gerät gesendet werden, wenn Sie auf unsere Dienste zugreifen.
            Sie werden in Ihrem Browser gespeichert und später an unsere Server zurückgeschickt, damit wir kontextbezogene Inhalte bereitstellen können.
            Ohne Cookies wäre die Nutzung des Internets eine viel frustrierendere Erfahrung.
            Wir verwenden sie, um Ihre Aktivitäten auf unserer Website zu unterstützen. Zum Beispiel Ihre Sitzung (damit Sie sich nicht erneut anmelden müssen) oder Ihren Warenkorb.
          </p>

          <p className="mb-4">
            Cookies werden auch verwendet, um uns zu helfen, Ihre Präferenzen zu verstehen, basierend auf früheren oder aktuellen Aktivitäten auf unserer Website (die Seiten, die Sie
            besucht haben), Ihre Sprache und Ihr Land zu verstehen, was es uns ermöglicht, Ihnen einen besseren Service zu bieten.
            Wir verwenden Cookies auch, um aggregierte Daten über den Website-Verkehr und die Website-Interaktion zu sammeln, damit wir Ihnen in Zukunft
            bessere Website-Erfahrungen und -Tools anbieten können.
          </p>

          <p className="mb-6">
            Hier finden Sie eine Übersicht über die Cookies, die auf Ihrem Gerät gespeichert werden können, wenn Sie unsere Website besuchen:
          </p>
        </section>

        <section className="mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-300">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold">Kategorie des Cookies</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold">Zweck</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-bold">Beispiele</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Sitzung & Sicherheit</strong><br />
                    <span className="text-sm">(essenziell)</span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Benutzer authentifizieren, Benutzerdaten schützen und es der Website ermöglichen, die von den Benutzern erwarteten Dienste bereitzustellen,
                    wie z. B. die Pflege des Inhalts ihres Warenkorbs oder das Zulassen von Dateiuploads.
                    <br /><br />
                    Die Website wird nicht richtig funktionieren, wenn Sie diese Cookies ablehnen oder verwerfen.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    session_id (Odoo)
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Präferenzen</strong><br />
                    <span className="text-sm">(essenziell)</span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Merken Sie sich Informationen über das bevorzugte Aussehen oder Verhalten der Website, wie z. B. Ihre bevorzugte Sprache oder Region.
                    Ihr Erlebnis kann beeinträchtigt werden, wenn Sie diese Cookies ablehnen, aber die Website funktioniert weiterhin.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    frontend_lang (Odoo)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Interaktionsverlauf</strong><br />
                    <span className="text-sm">(optional)</span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Dient zur Erfassung von Informationen über Ihre Interaktionen mit der Website, die von Ihnen besuchten Seiten,
                    und spezifische Marketingkampagnen, die Sie auf die Website geführt haben.
                    <br /><br />
                    Wir können Ihnen möglicherweise nicht den besten Service bieten, wenn Sie diese Cookies ablehnen, aber die Website wird funktionieren.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    im_livechat_previous_operator (Odoo)<br />
                    utm_campaign (Odoo)<br />
                    utm_source (Odoo)<br />
                    utm_medium (Odoo)
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Werbung & Marketing</strong><br />
                    <span className="text-sm">(optional)</span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Wird verwendet, um Werbung für Nutzer attraktiver und für Veröffentlicher und Werbetreibende wertvoller zu machen,
                    z. B. zur Bereitstellung relevanterer Werbung, wenn Sie andere Websites besuchen, auf denen Werbung angezeigt wird, oder zur Verbesserung der Berichterstattung über die Leistung von Werbekampagnen.
                    <br /><br />
                    Beachten Sie, dass einige Drittanbieter-Dienste zusätzliche Cookies auf Ihrem Browser installieren können, um Sie zu identifizieren.
                    Sie können die Verwendung von Cookies durch Dritte verweigern und zwar auf der{" "}
                    <a href="https://optout.networkadvertising.org/?c=1" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                      Verweigerungsseite der Netzwerkwerbeinitiative
                    </a>.
                    <br />
                    Die Website funktioniert auch dann, wenn Sie diese Cookies ablehnen oder verwerfen.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    __gads (Google)<br />
                    __gac (Google)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3">
                    <strong>Analytics</strong><br />
                    <span className="text-sm">(optional)</span>
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    Verstehen Sie, wie Besucher unsere Website nutzen, mit Google Analytics.
                    Erfahren Sie mehr über{" "}
                    <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                      Analytics-Cookies und Informationen zum Datenschutz
                    </a>.
                    <br />
                    Die Website funktioniert auch dann, wenn Sie diese Cookies ablehnen oder verwerfen.
                  </td>
                  <td className="border border-slate-300 px-4 py-3">
                    _ga (Google)<br />
                    _gat (Google)<br />
                    _gid (Google)<br />
                    _gac_* (Google)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <p className="mb-4">
            Sie können wählen, ob Ihr Computer Sie jedes Mal warnen soll, wenn ein Cookie gesendet wird, oder ob Sie alle Cookies deaktivieren möchten.
            Jeder Browser ist ein wenig anders. Schauen Sie daher in das Hilfemenü Ihres Browsers, um zu erfahren, wie Sie Ihre Cookies korrekt ändern können.
          </p>

          <p className="mb-4">
            Wir unterstützen derzeit keine Do-Not-Track-Signale, da es keinen Industriestandard für die Einhaltung gibt.
          </p>
        </section>
      </div>
    </div>
  );
}
