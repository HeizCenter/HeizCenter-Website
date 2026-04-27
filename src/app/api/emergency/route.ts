import { NextRequest, NextResponse } from "next/server";
import { emergencyFormSchema } from "@/lib/validations/contact";
import { submitEmergencyRequest } from "@/lib/api/crm";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";
import { CONTACT } from "@/lib/config/contact";

/**
 * POST /api/emergency — proxy to W-01 v2 emergency webhook.
 * Returns HTTP 200 always; clients parse `success` from the body.
 */
export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, "emergency", RATE_LIMITS.emergency);

    if (!rateLimit.success) {
      return NextResponse.json({
        success: false,
        error: `Zu viele Anfragen. Bitte rufen Sie uns direkt an: ${CONTACT.PHONE_DISPLAY}`,
      });
    }

    const body = await request.json();
    const validatedData = emergencyFormSchema.parse(body);

    if (validatedData.honeypot) {
      return NextResponse.json({ success: false, error: "Invalid submission" });
    }

    const result = await submitEmergencyRequest({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address,
      postalCode: validatedData.postalCode,
      city: validatedData.city,
      emergencyType: validatedData.emergencyType,
      description: validatedData.description,
    });

    if (!result.success) {
      console.error("Emergency form CRM error:", result.error);
      return NextResponse.json({
        success: false,
        error: `Es gab einen Fehler beim Senden Ihrer Notfallanfrage. Bitte rufen Sie uns direkt an: ${CONTACT.PHONE_DISPLAY}`,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        result.message ||
        "Ihre Notfallanfrage wurde erfasst! Wir rufen Sie umgehend zurück. In dringenden Fällen rufen Sie bitte direkt unsere Notfall-Hotline an.",
      leadId: result.leadId,
    });
  } catch (error) {
    console.error("Emergency form error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ success: false, error: "Ungültige Formulardaten" });
    }

    return NextResponse.json({
      success: false,
      error: `Es gab einen Fehler beim Senden Ihrer Notfallanfrage. Bitte rufen Sie uns direkt an: ${CONTACT.PHONE_DISPLAY}`,
    });
  }
}
