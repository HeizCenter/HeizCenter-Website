import { ImageResponse } from "next/og";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = "image/png";

interface OGImageProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export async function generateOGImage({ title, subtitle, badge }: OGImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0F5B78 0%, #0D4A61 50%, #0A3A4D 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: Badge */}
        {badge && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "999px",
                padding: "8px 24px",
                color: "white",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          </div>
        )}

        {/* Center: Title + Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: title.length > 40 ? "52px" : "64px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: "28px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom: Branding bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              HeizCenter
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              heizcenter.de
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Augsburg | Ulm | Memmingen
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
