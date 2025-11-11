import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/contact";
import { subscribeNewsletter } from "@/lib/api/crm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = newsletterSchema.parse(body);

    // Check honeypot (anti-spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { success: false, error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Subscribe in Odoo
    const result = await subscribeNewsletter({
      email: validatedData.email,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Vielen Dank! Sie haben sich erfolgreich für unseren Newsletter angemeldet.",
    });
  } catch (error) {
    console.error("Newsletter error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
