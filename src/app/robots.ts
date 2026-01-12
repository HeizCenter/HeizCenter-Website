import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.heizcenter.de";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/test_website/",
          "/web/",
          "/forum/",
          "/shop/",
          "/customers/",
          "/events",
          "/event",
          "/livechat",
          "/profile/",
          "/odoo",
          "/contactus",
          "/website/",
          "/slides",
          "/test_website_sitemap",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
