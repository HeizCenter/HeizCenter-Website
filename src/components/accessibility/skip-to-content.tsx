"use client";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F5B78] focus:text-white focus:rounded-lg focus:shadow-lg"
    >
      Zum Hauptinhalt springen
    </a>
  );
}

export function SkipToNav() {
  return (
    <a
      href="#main-navigation"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-36 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F5B78] focus:text-white focus:rounded-lg focus:shadow-lg"
    >
      Zur Navigation springen
    </a>
  );
}
