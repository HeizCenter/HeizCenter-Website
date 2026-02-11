/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Performance optimizations
  swcMinify: true,

  // Experimental features
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
    // Optimize CSS loading - extract critical CSS inline
    optimizeCss: true,
  },

  // Transpile only for modern browsers
  transpilePackages: [],

  // Headers for security and caching
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        statusCode: 301,
      },
      // Umlaut redirects for SEO
      {
        source: "/standorte/g%C3%BCnzburg",
        destination: "/standorte/guenzburg",
        statusCode: 301,
      },
      {
        source: "/standorte/günzburg",
        destination: "/standorte/guenzburg",
        statusCode: 301,
      },
      {
        source: "/standorte/k%C3%B6nigsbrunn",
        destination: "/standorte/koenigsbrunn",
        statusCode: 301,
      },
      {
        source: "/standorte/königsbrunn",
        destination: "/standorte/koenigsbrunn",
        statusCode: 301,
      },
      {
        source: "/standorte/bad-w%C3%B6rishofen",
        destination: "/standorte/bad-woerishofen",
        statusCode: 301,
      },
      {
        source: "/standorte/bad-wörishofen",
        destination: "/standorte/bad-woerishofen",
        statusCode: 301,
      },
      {
        source: "/standorte/neus%C3%A4%C3%9F",
        destination: "/standorte/neusaess",
        statusCode: 301,
      },
      {
        source: "/standorte/neusäß",
        destination: "/standorte/neusaess",
        statusCode: 301,
      },
      {
        source: "/standorte/schwabm%C3%BCnchen",
        destination: "/standorte/schwabmuenchen",
        statusCode: 301,
      },
      {
        source: "/standorte/schwabmünchen",
        destination: "/standorte/schwabmuenchen",
        statusCode: 301,
      },
      // Blog article consolidation redirects
      {
        source: "/blog/solarthermie-kosten-2025",
        destination: "/blog/solarthermie-kosten-2026",
        statusCode: 301,
      },
      {
        source: "/blog/solarthermie-kosten-wirtschaftlichkeit-2025",
        destination: "/blog/solarthermie-kosten-2026",
        statusCode: 301,
      },
      // Blog year migration 2025 → 2026
      { source: "/blog/waermepumpe-kosten-2025", destination: "/blog/waermepumpe-kosten-2026", statusCode: 301 },
      { source: "/blog/beg-foerderung-2025", destination: "/blog/beg-foerderung-2026", statusCode: 301 },
      { source: "/blog/gasheizung-kosten-2025", destination: "/blog/gasheizung-kosten-2026", statusCode: 301 },
      { source: "/blog/pelletheizung-kosten-2025", destination: "/blog/pelletheizung-kosten-2026", statusCode: 301 },
      { source: "/blog/badsanierung-kosten-2025", destination: "/blog/badsanierung-kosten-2026", statusCode: 301 },
      { source: "/blog/foerderung-heizung-2025", destination: "/blog/foerderung-heizung-2026", statusCode: 301 },
      { source: "/blog/waermepumpe-vorteile-nachteile-2025", destination: "/blog/waermepumpe-vorteile-nachteile-2026", statusCode: 301 },
      { source: "/blog/gasheizung-verbot-2025-geg", destination: "/blog/gasheizung-verbot-2026-geg", statusCode: 301 },
      { source: "/blog/heizung-vergleich-2025-waermepumpe-gas-oel-pellets", destination: "/blog/heizung-vergleich-2026-waermepumpe-gas-oel-pellets", statusCode: 301 },
      { source: "/blog/nachtspeicherheizung-ersetzen-2025", destination: "/blog/nachtspeicherheizung-ersetzen-2026", statusCode: 301 },
      { source: "/blog/fussbodenheizung-kosten-vorteile-2025", destination: "/blog/fussbodenheizung-kosten-vorteile-2026", statusCode: 301 },
      { source: "/blog/heizung-entlueften-anleitung-2025", destination: "/blog/heizung-entlueften-anleitung-2026", statusCode: 301 },
      { source: "/blog/waermepumpe-vs-gasheizung-vergleich-2025", destination: "/blog/waermepumpe-vs-gasheizung-vergleich-2026", statusCode: 301 },
      { source: "/blog/waermepumpe-vs-pelletheizung-vergleich-2025", destination: "/blog/waermepumpe-vs-pelletheizung-vergleich-2026", statusCode: 301 },
      { source: "/blog/klimaanlage-kosten-2025-anschaffung-installation-betrieb", destination: "/blog/klimaanlage-kosten-2026-anschaffung-installation-betrieb", statusCode: 301 },
      { source: "/blog/barrierefreies-bad-kosten-planung-foerderung-2025", destination: "/blog/barrierefreies-bad-kosten-planung-foerderung-2026", statusCode: 301 },
      { source: "/blog/solarthermie-vs-photovoltaik-2025-vergleich", destination: "/blog/solarthermie-vs-photovoltaik-2026-vergleich", statusCode: 301 },
      { source: "/blog/bafa-foerderung-solarthermie-2025", destination: "/blog/kfw-foerderung-solarthermie-2026", statusCode: 301 },
      { source: "/blog/bafa-foerderung-solarthermie-2026", destination: "/blog/kfw-foerderung-solarthermie-2026", statusCode: 301 },
      { source: "/blog/pvt-kollektoren-photovoltaik-thermie-hybrid-2025", destination: "/blog/pvt-kollektoren-photovoltaik-thermie-hybrid-2026", statusCode: 301 },
      { source: "/blog/solarthermie-dimensionierung-planung-2025", destination: "/blog/solarthermie-dimensionierung-planung-2026", statusCode: 301 },
      // Legacy URL redirects
      {
        source: "/datenschutzerklaerung",
        destination: "/datenschutz",
        statusCode: 301,
      },
      {
        source: "/cookie-policy",
        destination: "/cookie-hinweis",
        statusCode: 301,
      },
      {
        source: "/cookie-richtlinie",
        destination: "/cookie-hinweis",
        statusCode: 301,
      },
      {
        source: "/jobs",
        destination: "/karriere",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
