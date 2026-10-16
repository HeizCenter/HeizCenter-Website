import { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/seo";
import { CONTACT } from "@/lib/config/contact";
import { isConsentEnabled } from "@/lib/consent";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HeizCenter",
  description: "Datenschutzerklärung von HeizCenter - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: {
    canonical: getCanonicalUrl("/datenschutz"),
  },
};

export default function DatenschutzPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <nav className="mb-8 p-4 bg-slate-50 rounded-lg">
          <h2 className="text-lg font-bold mb-3">Inhaltsverzeichnis</h2>
          <ol className="space-y-1 text-sm">
            <li><a href="#section-1" className="text-[#0F5B78] hover:underline">1. Datenschutz auf einen Blick</a></li>
            <li><a href="#section-2" className="text-[#0F5B78] hover:underline">2. Hosting</a></li>
            <li><a href="#section-3" className="text-[#0F5B78] hover:underline">3. Allgemeine Hinweise und Pflichtinformationen</a></li>
            <li><a href="#section-4" className="text-[#0F5B78] hover:underline">4. Datenerfassung auf dieser Website</a></li>
            <li><a href="#section-5" className="text-[#0F5B78] hover:underline">5. Analyse-Tools und Werbung</a></li>
            <li><a href="#section-6" className="text-[#0F5B78] hover:underline">6. Plugins und Tools</a></li>
          </ol>
        </nav>

        <section id="section-1" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-2xl font-bold mb-4">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Datenerfassung auf dieser Website</h3>
          
          <h4 className="text-xl font-bold mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h4 className="text-xl font-bold mb-3">Wie erfassen wir Ihre Daten?</h4>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className="text-xl font-bold mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className="mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
          </p>
        </section>

        <section id="section-2" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">2. Hosting</h2>

          <p className="mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

          <h3 className="text-2xl font-bold mb-4">Vercel</h3>
          <p className="mb-4">
            Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
          <p className="mb-4">
            Vercel ist ein Cloud-Hosting-Dienst für statische Websites und Serverless Functions. Bei Aufruf dieser Website werden automatisch Informationen (z.B. IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit) in Serverlogfiles gespeichert.
          </p>
          <p className="mb-4">
            <strong>Datenübermittlung in die USA:</strong> Vercel Inc. hat seinen Sitz in den USA. Die Datenübermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), unter dem Vercel Inc. zertifiziert ist, sowie ergänzend auf die EU-Standardvertragsklauseln. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
              https://vercel.com/legal/privacy-policy
            </a>
          </p>
          <p className="mb-4">
            Die Nutzung erfolgt auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) an einer sicheren und effizienten Bereitstellung unseres Onlineangebots.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Auftragsverarbeitung</h4>
          <p className="mb-4">
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>
        </section>

        <section id="section-3" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-2xl font-bold mb-4">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <p className="font-bold">HeizCenter GmbH</p>
            <p>Lechallee 28</p>
            <p>86399 Bobingen</p>
            <p className="mt-2">{CONTACT.PHONE_DISPLAY}</p>
            <p>{CONTACT.EMAIL}</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h3 className="text-xl font-bold mb-3">Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h3>
            <p className="mb-2 font-semibold uppercase text-sm">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p className="mb-4">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recht auf Datenübertragbarkeit</h3>
          <p className="mb-4">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">SSL- bzw. TLS-Verschlüsselung</h3>
          <p className="mb-4">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section id="section-4" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-2xl font-bold mb-4">Cookies</h3>
          <p className="mb-4">
            Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
          <p className="mb-4">
            {isConsentEnabled()
              ? "Ohne Ihre Einwilligung setzt diese Website keine Cookies. Im Speicher Ihres Browsers legt sie Ihre Auswahl im Cookie-Banner ab (siehe Abschnitt 5) sowie auf der Seite „Kostenrechner“ Ihre Eingaben (siehe „Kostenrechner“ unten). Mit Ihrer Einwilligung setzt Google Cookies (siehe „Google Analytics“ und „Google Ads“ in Abschnitt 5). Es gilt:"
              : "Diese Website setzt derzeit keine Cookies. Im Speicher Ihres Browsers legt sie nur auf der Seite „Kostenrechner“ einen Eintrag ab (siehe „Kostenrechner“ unten). Sollten wir künftig Cookies einsetzen, gilt:"}{" "}
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO und § 25 Abs. 2 Nr. 2 TDDDG gespeichert. Alle anderen Cookies setzen wir nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit für die Zukunft widerrufbar.
          </p>
          <p className="mb-4">
            Einzelheiten finden Sie in unserem{" "}
            <a href="/cookie-hinweis" className="text-[#0F5B78] hover:underline">
              Cookie-Hinweis
            </a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Kostenrechner</h3>
          <p className="mb-4">
            Auf der Seite „Kostenrechner“ werden Ihre Eingaben (z. B. Wohnfläche, Baujahr, Heizungsart, Anzahl der Bewohner, Angaben zum Einkommensbonus) unter dem Namen „heizcenter-calculator-values“ im lokalen Speicher Ihres Browsers (Local Storage) abgelegt, damit sie beim nächsten Aufruf des Rechners erhalten bleiben. Der Eintrag wird beim Aufruf der Seite angelegt, bleibt auf Ihrem Gerät und wird nicht an uns übertragen. Er bleibt gespeichert, bis Sie ihn über die Einstellungen Ihres Browsers löschen (Websitedaten löschen).
          </p>
          <p className="mb-4">
            Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse, Ihnen die erneute Eingabe zu ersparen).
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Anfragen über unsere Formulare</h3>
          <p className="mb-4">
            Wenn Sie uns über das Kontaktformular, das Angebotsformular oder das Notdienstformular eine Anfrage senden, verarbeiten wir die Angaben, die Sie dort machen – je nach Formular Name, E-Mail-Adresse, Telefonnummer, Anschrift bzw. Einsatzort, Ihre Nachricht und Angaben zu Ihrem Vorhaben –, um Ihre Anfrage zu bearbeiten.
          </p>
          <p className="mb-4">
            <strong>Weg Ihrer Anfrage:</strong> Das Formular wird über unseren Website-Hoster Vercel (siehe Abschnitt 2) an unser Automatisierungssystem n8n übermittelt. n8n legt die Anfrage in unserem Kundenverwaltungssystem (Odoo) an. Beide Systeme betreiben wir selbst auf einem gemieteten Server der Hostinger International Ltd. in einem Rechenzentrum in der EU. Zum Schutz vor Missbrauch wird Ihre IP-Adresse zur Begrenzung der Anfragen pro Absender für höchstens etwa 20 Minuten im Arbeitsspeicher gehalten und nicht dauerhaft gespeichert.
          </p>
          <p className="mb-4">
            <strong>Interne Benachrichtigung:</strong> Über eingehende Anfragen werden unsere Mitarbeitenden über den Nachrichtendienst Telegram (Telegram FZ-LLC, Vereinigte Arabische Emirate) benachrichtigt.
          </p>
          <p className="mb-4">
            <strong>KI-gestützter Antwortentwurf:</strong> Für Kontakt- und Angebotsanfragen erstellt ein KI-Sprachmodell der Mistral AI, 15 rue des Halles, 75001 Paris, Frankreich, einen Antwortentwurf. Dafür werden Name, E-Mail-Adresse, Telefonnummer und Nachricht sowie bei Angebotsanfragen die Anschrift an Mistral AI übermittelt. Der Entwurf wird als interne Notiz in unserem Kundenverwaltungssystem abgelegt und nicht automatisch an Sie versendet; ein Mitarbeitender prüft und beantwortet Ihre Anfrage selbst. Mistral AI verarbeitet die Daten als unser Auftragsverarbeiter auf Grundlage eines Auftragsverarbeitungsvertrags und speichert sie nach der Verarbeitung bis zu 30 Tage zur Missbrauchserkennung. Die Nutzung Ihrer Daten zum Training der KI-Modelle von Mistral AI haben wir ausgeschlossen.
          </p>
          <p className="mb-4">
            <strong>Ergänzung von Firmendaten:</strong> Unser Kundenverwaltungssystem übermittelt die Domain Ihrer E-Mail-Adresse (der Teil nach dem „@“) an die Odoo S.A., Chaussée de Namur 40, 1367 Grand-Rosière, Belgien, die dazu öffentlich verfügbare Firmendaten (z. B. Firmenname, Branche) zurückliefert. Bei E-Mail-Adressen allgemeiner Anbieter liefert der Dienst in der Regel keine Daten.
          </p>
          <p className="mb-4">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist; in allen übrigen Fällen sowie für Missbrauchsschutz, interne Benachrichtigung, Antwortentwurf und Ergänzung von Firmendaten unser berechtigtes Interesse an einer schnellen und vollständigen Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p className="mb-4">
            <strong>Speicherdauer:</strong> Die Protokolle des Automatisierungssystems werden nach 30 Tagen gelöscht. Anfragen, aus denen kein Auftrag entsteht, löschen wir 24 Monate nach dem letzten Kontakt. Entsteht ein Auftrag, gelten die gesetzlichen Aufbewahrungsfristen (bis zu 10 Jahre nach Handels- und Steuerrecht).
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">WhatsApp Business</h3>
          <p className="mb-4">
            Wir bieten Besuchern unserer Webseite die Möglichkeit, mit uns über den Nachrichtendienst WhatsApp in Kontakt zu treten. Hierfür verwenden wir die sog. „Business-Version" von WhatsApp.
          </p>
          <p className="mb-4">
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <p className="mb-4">
            Weitere Informationen:{" "}
            <a href="https://www.whatsapp.com/legal/?eea=1#privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
              WhatsApp Datenschutzhinweise
            </a>
          </p>
        </section>

        <section id="section-5" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">5. Analyse-Tools und Werbung</h2>
          {isConsentEnabled() && (
            <>
              <h3 className="text-2xl font-bold mb-4">Einwilligungsverwaltung (Cookie-Banner)</h3>
              <p className="mb-4">
                Beim ersten Besuch fragen wir über ein Banner ab, ob Sie in den Einsatz von Diensten der Kategorien „Statistik“ (Google Analytics) und „Marketing“ (Google Ads) einwilligen; beide werden über den Google Tag Manager eingebunden. Sie können beiden, einer oder keiner Kategorie zustimmen. Ohne Ihre Einwilligung werden diese Dienste nicht geladen und es werden keine Daten an Google übertragen.
              </p>
              <p className="mb-4">
                Ihre Auswahl und der Zeitpunkt der Entscheidung werden unter dem Namen „hc_consent“ im lokalen Speicher Ihres Browsers abgelegt, damit das Banner nicht bei jedem Seitenaufruf erneut erscheint. Diese Speicherung ist erforderlich, um Ihre Entscheidung umzusetzen (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO). Ein Protokoll Ihrer Entscheidung auf unseren Servern führen wir nicht. Nach 12 Monaten fragen wir erneut.
              </p>
              <p className="mb-4">
                Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen“ im Fußbereich jeder Seite ändern oder widerrufen. Bei einem Widerruf löschen wir die von Google für die betroffene Kategorie auf dieser Domain gesetzten Cookies und laden die Seite mit Ihrer neuen Auswahl neu.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Google Tag Manager</h3>
              <p className="mb-4">
                Wir nutzen den Google Tag Manager. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Google Tag Manager ist ein Werkzeug, mit dem wir Statistik- und Marketing-Dienste auf unserer Website einbinden. Er selbst erstellt keine Nutzerprofile und speichert keine Cookies. Beim Laden wird jedoch Ihre IP-Adresse an Google übertragen; dabei kann es auch zu einer Übermittlung an die Google LLC in den USA kommen.
              </p>
              <p className="mb-4">
                Der Google Tag Manager wird nur geladen, wenn Sie über unser Cookie-Banner mindestens einer Kategorie zugestimmt haben. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG); sie ist jederzeit widerrufbar.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Google Analytics 4 (Statistik)</h3>
              <p className="mb-4">
                Mit Ihrer Einwilligung in die Kategorie „Statistik“ nutzen wir Google Analytics 4, um zu verstehen, wie unsere Website genutzt wird (z. B. welche Seiten aufgerufen werden, wie Besucher zu uns finden und wie oft Anfragen gestellt werden). Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mb-4">
                Google Analytics setzt Cookies mit einer pseudonymen Kennung und verarbeitet dabei insbesondere: aufgerufene Seiten und Interaktionen (z. B. das Absenden eines Formulars – nur dessen Art, nicht der Inhalt), Browser- und Geräteinformationen, die zuvor besuchte Seite (Referrer), den ungefähren Standort und den Zeitpunkt. Ihre IP-Adresse wird dabei an Google übertragen; nach Angaben von Google wird sie bei Nutzern in der EU nur zur Bestimmung des ungefähren Standorts verwendet und weder protokolliert noch gespeichert. Wir erhalten ausschließlich zusammengefasste Auswertungen. Google verarbeitet die Daten für Google Analytics als unser Auftragsverarbeiter (Google Ads Data Processing Terms).
              </p>
              <p className="mb-4">
                Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG); sie ist jederzeit widerrufbar. Die Analytics-Cookies („_ga“-Cookies) werden spätestens 2 Jahre nach Ihrem letzten Besuch gelöscht; Daten auf Nutzer- und Ereignisebene werden in Google Analytics nach der von uns eingestellten Frist von höchstens 14 Monaten gelöscht. Zur Datenübermittlung in die USA siehe „Google Ads“ unten.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Google Ads (Conversion-Tracking)</h3>
              <p className="mb-4">
                Wir nutzen Google Ads, um auf unsere Leistungen aufmerksam zu machen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mb-4">
                Wenn Sie über eine Google-Anzeige auf unsere Website gelangen, kann Google ein Cookie setzen. Senden Sie danach eine Anfrage über eines unserer Formulare ab oder tippen Sie auf unsere Telefonnummer bzw. den WhatsApp-Link, erkennen Google und wir, dass eine Anzeige zu dieser Kontaktaufnahme geführt hat („Conversion“). Dies geschieht nur mit Ihrer Einwilligung in die Kategorie „Marketing“. Personalisierte Werbung (Remarketing) ist ausgeschaltet.
              </p>
              <p className="mb-4">
                Dabei verarbeitet Google insbesondere: Ihre IP-Adresse, Browser- und Geräteinformationen, die Klick-Kennung der Anzeige (GCLID), die aufgerufene Seite und die zuvor besuchte Seite (Referrer), den Zeitpunkt sowie Cookie-Kennungen. Aus unseren Formularen melden wir an Google nur die Art der Kontaktaufnahme (Kontakt-, Angebots- oder Notdienstanfrage), nicht deren Inhalt. Wir erhalten ausschließlich statistische Auswertungen (z. B. Anzahl der Conversions je Anzeige), keine Informationen, mit denen wir Sie persönlich identifizieren können. Google verarbeitet diese Daten teilweise als eigener Verantwortlicher auch für eigene Zwecke; Näheres in der Datenschutzerklärung von Google.
              </p>
              <p className="mb-4">
                Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG); sie ist jederzeit widerrufbar. Die Conversion-Cookies auf unserer Domain („_gcl_“-Cookies) werden nach spätestens 90 Tagen gelöscht; Cookies, die Google auf eigenen Domains setzt, können bis zu 13 Monate gespeichert bleiben. Die Datenübermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), unter dem die Google LLC zertifiziert ist, sowie ergänzend auf die EU-Standardvertragsklauseln.
              </p>
              <p className="mb-4">
                Weitere Informationen:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                  Datenschutzerklärung von Google
                </a>
                {" · "}
                <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
                  Google-Werbeeinstellungen
                </a>
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Google Consent Mode</h3>
              <p className="mb-4">
                Wir verwenden den Google Consent Mode (Version 2). Er teilt den Google-Diensten Ihre Auswahl im Cookie-Banner mit, sodass Analyse-Cookies nur nach Zustimmung zu „Statistik“ und Werbe-Cookies nur nach Zustimmung zu „Marketing“ gespeichert werden. Personalisierte Werbung ist unabhängig von Ihrer Auswahl ausgeschaltet. Da der Google Tag Manager bei uns erst nach Ihrer Einwilligung geladen wird, werden ohne Einwilligung keine Daten an Google übertragen.
              </p>
            </>
          )}

          <h3 className={`text-2xl font-bold mb-4${isConsentEnabled() ? " mt-8" : ""}`}>Vercel Web Analytics</h3>
          <p className="mb-4">
            Wir nutzen Vercel Web Analytics, um die Nutzung unserer Website statistisch auszuwerten (z. B. aufgerufene Seiten, Herkunftsland, Gerätetyp). Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
          <p className="mb-4">
            Vercel Web Analytics setzt keine Cookies und speichert keine Informationen auf Ihrem Endgerät. Besucher werden nicht über mehrere Tage oder über verschiedene Websites hinweg wiedererkannt; die Auswertung erfolgt ausschließlich zusammengefasst. Die Daten werden über die Domain dieser Website erhoben.
          </p>
          <p className="mb-4">
            Rechtsgrundlage ist unser berechtigtes Interesse an einer bedarfsgerechten Gestaltung unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Zur Datenübermittlung in die USA siehe Abschnitt 2 (Hosting).
          </p>
          <p className="mb-4">
            Diese Website beinhaltet keine Werbung für Produkte oder Dienstleistungen Dritter.
          </p>
        </section>

        <section id="section-6" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">6. Plugins und Tools</h2>

          <h3 className="text-2xl font-bold mb-4">Google Fonts (lokales Hosting)</h3>
          <p className="mb-4">
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
          </p>
          <p className="mb-4">
            Weitere Informationen:{" "}
            <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
              Google Fonts FAQ
            </a>
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Font Awesome (lokales Hosting)</h3>
          <p className="mb-4">
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome ist lokal installiert. Eine Verbindung zu Servern von Fonticons, Inc. findet dabei nicht statt.
          </p>
          <p className="mb-4">
            Weitere Informationen:{" "}
            <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
              Font Awesome Privacy
            </a>
          </p>
        </section>

        <div className="mt-12 pt-6 border-t text-sm text-slate-500">
          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
              https://www.e-recht24.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
