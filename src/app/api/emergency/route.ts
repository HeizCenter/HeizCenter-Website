import { NextRequest, NextResponse } from "next/server";
import { emergencyFormSchema } from "@/lib/validations/contact";
import { submitEmergencyRequest } from "@/lib/api/crm";
import { checkRateLimit, getClientIp, RATE_LIMITS } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (more lenient for emergencies)
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(clientIp, "emergency", RATE_LIMITS.emergency);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Zu viele Anfragen. Bitte rufen Sie uns direkt an: +49 8234 9665900`,
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
    const validatedData = emergencyFormSchema.parse(body);

    // Check honeypot (anti-spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { success: false, error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Submit to n8n webhook with high priority
    const result = await submitEmergencyRequest({
      name: validatedData.name,
      phone: validatedData.phone,
      address: validatedData.address,
      postalCode: validatedData.postalCode,
      emergencyType: validatedData.emergencyType,
      description: validatedData.description,
    });

    if (!result.success) {
      // Log technical error for debugging, show friendly message to user
      console.error("Emergency form CRM error:", result.error);
      return NextResponse.json(
        {
          success: false,
          error: "Es gab einen Fehler beim Senden Ihrer Notfallanfrage. Bitte rufen Sie uns direkt an: +49 8234 9665900"
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Ihre Notfallanfrage wurde erfasst! Wir rufen Sie umgehend zurück. In dringenden Fällen rufen Sie bitte direkt unsere Notfall-Hotline an.",
      leadId: result.leadId,
    });
  } catch (error) {
    console.error("Emergency form error:", error);

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
          "Es gab einen Fehler beim Senden Ihrer Notfallanfrage. Bitte rufen Sie uns direkt an.",
      },
      { status: 500 }
    );
  }
}
