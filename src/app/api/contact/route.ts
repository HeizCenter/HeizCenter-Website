import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/api/crm";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";

/**
 * POST /api/contact — proxy to W-01 v2 contact webhook.
 * Returns HTTP 200 always; clients parse `success` from the body
 * (matches the n8n backend contract).
 */
export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, "contact", RATE_LIMITS.contact);

    if (!rateLimit.success) {
      return NextResponse.json({
        success: false,
        error: `Zu viele Anfragen. Bitte warten Sie ${Math.ceil(rateLimit.resetIn / 60)} Minuten.`,
      });
    }

    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    if (validatedData.honeypot) {
      return NextResponse.json({ success: false, error: "Invalid submission" });
    }

    const result = await submitContactForm({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      subject: validatedData.subject,
      message: validatedData.message,
    });

    if (!result.success) {
      console.error("Contact form CRM error:", result.error);
      return NextResponse.json({
        success: false,
        error:
          "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      });
    }

    return NextResponse.json({
      success: true,
      message:
        result.message ||
        "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.",
      leadId: result.leadId,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Ungültige Formulardaten" });
    }

    return NextResponse.json({
      success: false,
      error:
        "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
    });
  }
}
