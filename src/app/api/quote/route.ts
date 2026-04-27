import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations/contact";
import { submitQuoteRequest } from "@/lib/api/crm";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";

/**
 * POST /api/quote — proxy to W-01 v2 quote webhook.
 * Returns HTTP 200 always; clients parse `success` from the body.
 */
export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, "quote", RATE_LIMITS.quote);

    if (!rateLimit.success) {
      return NextResponse.json({
        success: false,
        error: `Zu viele Anfragen. Bitte warten Sie ${Math.ceil(rateLimit.resetIn / 60)} Minuten.`,
      });
    }

    const body = await request.json();
    const validatedData = quoteFormSchema.parse(body);

    if (validatedData.honeypot) {
      return NextResponse.json({ success: false, error: "Invalid submission" });
    }

    const result = await submitQuoteRequest({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address || "",
      postalCode: validatedData.postalCode,
      city: validatedData.city,
      serviceType: validatedData.serviceType,
      propertyType: validatedData.propertyType,
      constructionYear: validatedData.constructionYear,
      heatingArea: validatedData.heatingArea,
      currentHeating: validatedData.currentHeating,
      message: validatedData.message,
      preferredContactTime: validatedData.preferredContactTime,
      pumpType: validatedData.pumpType,
      heatingSurface: validatedData.heatingSurface,
      insulation: validatedData.insulation,
      buildingYear: validatedData.buildingYear,
      residents: validatedData.residents,
      estimatedCost: validatedData.estimatedCost,
    });

    if (!result.success) {
      console.error("Quote form CRM error:", result.error);
      return NextResponse.json({
        success: false,
        error:
          "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      });
    }

    return NextResponse.json({
      success: true,
      message:
        result.message ||
        "Vielen Dank für Ihre Anfrage! Wir erstellen Ihr individuelles Angebot und melden uns innerhalb von 24 Stunden bei Ihnen.",
      leadId: result.leadId,
    });
  } catch (error) {
    console.error("Quote form error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Ungültige Formulardaten" });
    }

    return NextResponse.json({
      success: false,
      error:
        "Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.",
    });
  }
}
