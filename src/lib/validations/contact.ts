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
  honeypot: z.string().max(0), // Anti-spam field
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
    "sonstiges",
  ]),
  propertyType: z.enum(["einfamilienhaus", "mehrfamilienhaus", "gewerbe"]),
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
  message: z.string().max(2000, "Nachricht ist zu lang").optional(),
  preferredContactTime: z
    .enum(["morning", "afternoon", "evening", "anytime"])
    .optional(),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "Bitte akzeptieren Sie die Datenschutzerklärung",
  }),
  honeypot: z.string().max(0),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

/**
 * Emergency Service Form Schema
 */
export const emergencyFormSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich").max(100),
  phone: z.string().min(5, "Telefonnummer ist erforderlich"),
  address: z.string().min(5, "Adresse ist erforderlich").max(200),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein"),
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
  honeypot: z.string().max(0),
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
  honeypot: z.string().max(0),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
