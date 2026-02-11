"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    // Don't load GA in development or if ID is not set
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Event tracking helper functions
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Conversion tracking helpers
export const trackFormSubmission = (formType: string) => {
  trackEvent("form_submission", {
    form_type: formType,
  });
};

export const trackQuoteRequest = (service: string) => {
  trackEvent("quote_request", {
    service: service,
  });
};

export const trackPhoneClick = (location: string) => {
  trackEvent("phone_click", {
    location: location,
  });
};

export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click");
};

export const trackCalculatorUse = (houseSize: number, heatingType: string) => {
  trackEvent("calculator_use", {
    house_size: houseSize,
    heating_type: heatingType,
  });
};
