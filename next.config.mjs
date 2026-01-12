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
        permanent: true,
      },
      // Umlaut redirects for SEO
      {
        source: "/standorte/g%C3%BCnzburg",
        destination: "/standorte/guenzburg",
        permanent: true,
      },
      {
        source: "/standorte/günzburg",
        destination: "/standorte/guenzburg",
        permanent: true,
      },
      {
        source: "/standorte/k%C3%B6nigsbrunn",
        destination: "/standorte/koenigsbrunn",
        permanent: true,
      },
      {
        source: "/standorte/königsbrunn",
        destination: "/standorte/koenigsbrunn",
        permanent: true,
      },
      {
        source: "/standorte/bad-w%C3%B6rishofen",
        destination: "/standorte/bad-woerishofen",
        permanent: true,
      },
      {
        source: "/standorte/bad-wörishofen",
        destination: "/standorte/bad-woerishofen",
        permanent: true,
      },
      {
        source: "/standorte/neus%C3%A4%C3%9F",
        destination: "/standorte/neusaess",
        permanent: true,
      },
      {
        source: "/standorte/neusäß",
        destination: "/standorte/neusaess",
        permanent: true,
      },
      {
        source: "/standorte/schwabm%C3%BCnchen",
        destination: "/standorte/schwabmuenchen",
        permanent: true,
      },
      {
        source: "/standorte/schwabmünchen",
        destination: "/standorte/schwabmuenchen",
        permanent: true,
      },
      // Legacy URL redirects
      {
        source: "/datenschutzerklaerung",
        destination: "/datenschutz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
