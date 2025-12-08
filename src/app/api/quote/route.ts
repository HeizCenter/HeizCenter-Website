import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/contact";
import { submitQuoteRequest } from "@/lib/api/crm";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, "quote", RATE_LIMITS.quote);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Zu viele Anfragen. Bitte warten Sie ${Math.ceil(rateLimit.resetIn / 60)} Minuten.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.resetIn),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateLimit.resetIn),
          },
        }
      );
    }

    const body = await request.json();

    // Validate input
    const validatedData = quoteFormSchema.parse(body);

    // Check honeypot (anti-spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { success: false, error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Submit to n8n webhook
    const result = await submitQuoteRequest({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address,
      postalCode: validatedData.postalCode,
      city: validatedData.city,
      serviceType: validatedData.serviceType,
      propertyType: validatedData.propertyType,
      constructionYear: validatedData.constructionYear,
      heatingArea: validatedData.heatingArea,
      message: validatedData.message,
      preferredContactTime: validatedData.preferredContactTime,
    });

    if (!result.success) {
      // Log technical error for debugging, show friendly message to user
      console.error("Quote form CRM error:", result.error);
      return NextResponse.json(
        {
          success: false,
          error: "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut oder rufen Sie uns an."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Vielen Dank für Ihre Anfrage! Wir erstellen Ihr individuelles Angebot und melden uns innerhalb von 24 Stunden bei Ihnen.",
      leadId: result.leadId,
    });
  } catch (error) {
    console.error("Quote form error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "Ungültige Formulardaten" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
