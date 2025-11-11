import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/api/crm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactFormSchema.parse(body);

    // Check honeypot (anti-spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { success: false, error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Submit to Odoo CRM
    const result = await submitContactForm({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      subject: validatedData.subject,
      message: validatedData.message,
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
        "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.",
      leadId: result.leadId,
    });
  } catch (error) {
    console.error("Contact form error:", error);

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
          "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
