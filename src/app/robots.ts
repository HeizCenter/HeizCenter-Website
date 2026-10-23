import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.heizcenter.de";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /_next/ darf nicht gesperrt sein: Google rendert die Seite mit CSS/JS
        // aus /_next/static und holt alle next/image-Bilder über /_next/image.
        // Die alten Odoo-Pfade (/web/, /shop/, /odoo …) existieren nicht mehr;
        // ohne Sperre sieht Google dort ein 404 und räumt den Index auf.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
