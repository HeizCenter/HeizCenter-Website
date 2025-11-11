"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, QuoteFormData } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
}

export function QuoteForm(props: QuoteFormProps) {
  const { defaultService } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: (defaultService as QuoteFormData["serviceType"]) || undefined,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Ein Fehler ist aufgetreten",
        });
      }
    } catch (err) {
      console.error("Quote form submission error:", err);
      setSubmitStatus({
        type: "error",
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success/Error Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          )}
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Ihr vollständiger Name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="ihre.email@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Telefon *</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+49 821 12345678"
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <Label htmlFor="address">Adresse *</Label>
        <Input
          id="address"
          {...register("address")}
          placeholder="Straße und Hausnummer"
          className={errors.address ? "border-red-500" : ""}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="postalCode">PLZ *</Label>
          <Input
            id="postalCode"
            {...register("postalCode")}
            placeholder="86150"
            maxLength={5}
            className={errors.postalCode ? "border-red-500" : ""}
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.postalCode.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="city">Ort *</Label>
          <Input
            id="city"
            {...register("city")}
            placeholder="Augsburg"
            className={errors.city ? "border-red-500" : ""}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Service Details */}
      <div>
        <Label htmlFor="serviceType">Gewünschte Leistung *</Label>
        <Select
          onValueChange={(value) => {
            setValue("serviceType", value as QuoteFormData["serviceType"]);
          }}
          defaultValue={defaultService}
        >
          <SelectTrigger className={errors.serviceType ? "border-red-500" : ""}>
            <SelectValue placeholder="Bitte wählen..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="waermepumpe">Wärmepumpe</SelectItem>
            <SelectItem value="heizung">Heizung</SelectItem>
            <SelectItem value="sanitaer">Sanitär & Bad</SelectItem>
            <SelectItem value="klimaanlage">Klimaanlage</SelectItem>
            <SelectItem value="sonstiges">Sonstiges</SelectItem>
          </SelectContent>
        </Select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="propertyType">Objektart *</Label>
        <Select
          onValueChange={(value) => {
            setValue("propertyType", value as QuoteFormData["propertyType"]);
          }}
        >
          <SelectTrigger className={errors.propertyType ? "border-red-500" : ""}>
            <SelectValue placeholder="Bitte wählen..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="einfamilienhaus">Einfamilienhaus</SelectItem>
            <SelectItem value="mehrfamilienhaus">Mehrfamilienhaus</SelectItem>
            <SelectItem value="gewerbe">Gewerbe</SelectItem>
          </SelectContent>
        </Select>
        {errors.propertyType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.propertyType.message}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="constructionYear">Baujahr (optional)</Label>
          <Input
            id="constructionYear"
            {...register("constructionYear")}
            placeholder="2010"
            maxLength={4}
            className={errors.constructionYear ? "border-red-500" : ""}
          />
          {errors.constructionYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.constructionYear.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="heatingArea">Heizfläche in m² (optional)</Label>
          <Input
            id="heatingArea"
            {...register("heatingArea")}
            placeholder="150"
            className={errors.heatingArea ? "border-red-500" : ""}
          />
          {errors.heatingArea && (
            <p className="text-red-500 text-sm mt-1">
              {errors.heatingArea.message}
            </p>
          )}
        </div>
      </div>

      {/* Additional Info */}
      <div>
        <Label htmlFor="message">Weitere Informationen (optional)</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Beschreiben Sie Ihr Projekt..."
          rows={4}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="preferredContactTime">
          Bevorzugte Kontaktzeit (optional)
        </Label>
        <Select
          onValueChange={(value) => {
            setValue(
              "preferredContactTime",
              value as QuoteFormData["preferredContactTime"]
            );
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Bitte wählen..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morgens (8-12 Uhr)</SelectItem>
            <SelectItem value="afternoon">Nachmittags (12-17 Uhr)</SelectItem>
            <SelectItem value="evening">Abends (17-20 Uhr)</SelectItem>
            <SelectItem value="anytime">Jederzeit</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-2">
        <Checkbox id="gdprConsent" {...register("gdprConsent")} />
        <Label htmlFor="gdprConsent" className="text-sm leading-relaxed">
          Ich akzeptiere die{" "}
          <a href="/datenschutz" className="text-blue-600 hover:underline">
            Datenschutzerklärung
          </a>{" "}
          und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage
          gespeichert werden. *
        </Label>
      </div>
      {errors.gdprConsent && (
        <p className="text-red-500 text-sm mt-1">
          {errors.gdprConsent.message}
        </p>
      )}

      {/* Honeypot */}
      <input
        type="text"
        {...register("honeypot")}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Wird gesendet...
          </>
        ) : (
          "Angebot anfordern"
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        * Pflichtfelder
      </p>
    </form>
  );
}
