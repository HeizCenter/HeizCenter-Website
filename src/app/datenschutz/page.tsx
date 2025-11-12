import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HeizCenter",
  description: "Datenschutzerklärung von HeizCenter - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: "noindex, nofollow",
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

          <h3 className="text-2xl font-bold mb-4">Odoo</h3>
          <p className="mb-4">
            Anbieter ist die Odoo S.A., Chaussée de Namur 40, 1367 Grand Rosière, Belgium (nachfolgend Odoo). Wenn Sie unsere Website besuchen, erfasst Odoo verschiedene Logfiles inklusive Ihrer IP-Adressen.
          </p>
          <p className="mb-4">
            Details entnehmen Sie der Datenschutzerklärung von Odoo:{" "}
            <a href="https://www.odoo.com/de_DE/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0F5B78] hover:underline">
              https://www.odoo.com/de_DE/privacy
            </a>
          </p>
          <p className="mb-4">
            Die Verwendung von Odoo erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
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
            <p className="font-bold">HeizCenter UG</p>
            <p>Lechallee 28</p>
            <p>86399 Bobingen</p>
            <p className="mt-2">+49 8234 9665900</p>
            <p>service@heizcenter.de</p>
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
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
          <p className="mb-4">
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter Funktionen erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
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
          <p className="mb-4">
            Diese Website nutzt keine Analyse-Tools und beinhaltet keine Werbung für Produkte oder Dienstleistungen Dritter.
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
