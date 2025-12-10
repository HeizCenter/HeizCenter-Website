import { z } from "zod";

/**
 * General Contact Form Schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name muss mindestens 2 Zeichen lang sein")
    .max(100, "Name ist zu lang"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z
    .string()
    .min(5, "Bitte geben Sie eine gültige Telefonnummer ein")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, "Betreff muss mindestens 3 Zeichen lang sein")
    .max(200, "Betreff ist zu lang"),
  message: z
    .string()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(2000, "Nachricht ist zu lang"),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Bitte akzeptieren Sie die Datenschutzerklärung",
    }),
  honeypot: z.string().max(0).default(""), // Anti-spam field (always present, default empty)
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Quote Request Form Schema
 */
export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich").max(100),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Telefonnummer ist erforderlich"),
  address: z
    .string()
    .min(5, "Adresse ist erforderlich")
    .max(200, "Adresse ist zu lang"),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein"),
  city: z.string().min(2, "Ort ist erforderlich").max(100),
  serviceType: z.enum([
    "waermepumpe",
    "heizung",
    "sanitaer",
    "klimaanlage",
    "solar",
    "sonstiges",
  ], {
    message: "Bitte wählen Sie eine Leistung aus",
  }),
  propertyType: z.enum(["einfamilienhaus", "mehrfamilienhaus", "gewerbe"], {
    message: "Bitte wählen Sie eine Objektart aus",
  }),
  constructionYear: z
    .string()
    .regex(/^\d{4}$/, "Bitte geben Sie ein gültiges Jahr ein")
    .optional()
    .or(z.literal("")),
  heatingArea: z
    .string()
    .regex(/^\d+$/, "Bitte geben Sie eine Zahl ein")
    .optional()
    .or(z.literal("")),
  // Calculator-specific fields (optional)
  pumpType: z.enum(["air-water", "ground-water", "water-water"]).optional(),
  heatingSurface: z.enum(["floor", "radiators", "mixed"]).optional(),
  currentHeating: z.enum(["gas", "oil", "electric", "coal"]).optional(),
  insulation: z.enum(["poor", "average", "good"]).optional(),
  buildingYear: z.enum(["before-1980", "1980-2000", "2000-2010", "2010-2015", "after-2015"]).optional(),
  residents: z.string().optional(),
  estimatedCost: z.string().optional(),
  message: z.string().max(2000, "Nachricht ist zu lang").optional(),
  preferredContactTime: z
    .enum(["morning", "afternoon", "evening", "anytime"])
    .optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
  honeypot: z.string().max(0).optional().default(""),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

/**
 * Emergency Service Form Schema
 */
export const emergencyFormSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich").max(100),
  email: z
    .string()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein")
    .optional()
    .or(z.literal("")),
  phone: z.string().min(5, "Telefonnummer ist erforderlich"),
  address: z.string().min(5, "Adresse ist erforderlich").max(200),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein"),
  city: z.string().min(2, "Ort ist erforderlich").max(100),
  emergencyType: z.enum([
    "heizung-ausfall",
    "rohrbruch",
    "gasgeruch",
    "warmwasser-ausfall",
    "sonstiges",
  ]),
  description: z
    .string()
    .min(10, "Bitte beschreiben Sie den Notfall")
    .max(500),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
  honeypot: z.string().max(0).optional().default(""),
});

export type EmergencyFormData = z.infer<typeof emergencyFormSchema>;

/**
 * Newsletter Signup Schema
 */
export const newsletterSchema = z.object({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
  honeypot: z.string().max(0).optional().default(""),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
