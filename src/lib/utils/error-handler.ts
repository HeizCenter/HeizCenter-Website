/**
 * Error handling utilities for form submissions and API calls
 */

export class FormSubmissionError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public details?: Record<string, string>
  ) {
    super(message);
    this.name = "FormSubmissionError";
  }
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: Record<string, string>;
  statusCode?: number;
}

export interface SuccessResponse<T = unknown> {
  success: true;
  message: string;
  data?: T;
}

export type ApiResponse<T = unknown> = ErrorResponse | SuccessResponse<T>;

/**
 * Handle API errors with user-friendly messages
 */
export function handleApiError(error: unknown): ErrorResponse {
  // Network errors
  if (error instanceof TypeError && error.message.includes("fetch")) {
    return {
      success: false,
      error:
        "Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      statusCode: 0,
    };
  }

  // FormSubmissionError
  if (error instanceof FormSubmissionError) {
    return {
      success: false,
      error: error.message,
      details: error.details,
      statusCode: error.statusCode,
    };
  }

  // Generic Error
  if (error instanceof Error) {
    return {
      success: false,
      error: error.message,
    };
  }

  // Unknown error
  return {
    success: false,
    error: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
  };
}

/**
 * Get user-friendly error message based on status code
 */
export function getErrorMessage(statusCode: number): string {
  const errorMessages: Record<number, string> = {
    400: "Ungültige Anfrage. Bitte überprüfen Sie Ihre Eingaben.",
    401: "Nicht autorisiert. Bitte melden Sie sich an.",
    403: "Zugriff verweigert.",
    404: "Die angeforderte Ressource wurde nicht gefunden.",
    408: "Zeitüberschreitung der Anfrage. Bitte versuchen Sie es erneut.",
    429: "Zu viele Anfragen. Bitte warten Sie einen Moment.",
    500: "Serverfehler. Bitte versuchen Sie es später erneut.",
    502: "Gateway-Fehler. Der Server ist vorübergehend nicht verfügbar.",
    503: "Service nicht verfügbar. Bitte versuchen Sie es später erneut.",
  };

  return (
    errorMessages[statusCode] ||
    "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
  );
}

/**
 * Validate form data before submission
 */
export function validateFormData<T extends Record<string, unknown>>(
  data: T,
  requiredFields: (keyof T)[]
): { valid: boolean; errors?: Record<string, string> } {
  const errors: Record<string, string> = {};

  for (const field of requiredFields) {
    const value = data[field];
    if (value === undefined || value === null || value === "") {
      errors[field as string] = "Dieses Feld ist erforderlich";
    }
  }

  return Object.keys(errors).length === 0
    ? { valid: true }
    : { valid: false, errors };
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Format validation errors for display
 */
export function formatValidationErrors(
  errors: Record<string, string[]>
): string {
  return Object.entries(errors)
    .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
    .join("\n");
}

/**
 * Retry failed requests with exponential backoff
 */
export async function retryRequest<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error | undefined;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (i < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }

  throw lastError || new Error("Max retries exceeded");
}

/**
 * Log errors for monitoring (extend with error tracking service)
 */
export function logError(error: Error, context?: Record<string, unknown>): void {
  if (process.env.NODE_ENV === "development") {
    console.error("Error:", error);
    if (context) {
      console.error("Context:", context);
    }
  }

  // TODO: Send to error tracking service (Sentry, etc.)
  // sendToErrorTracking(error, context);
}
