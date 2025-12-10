"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emergencyFormSchema,
  EmergencyFormData,
} from "@/lib/validations/contact";
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
import { CheckCircle2, AlertCircle, Loader2, AlertTriangle } from "lucide-react";

export function EmergencyForm() {
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
    control,
  } = useForm({
    resolver: zodResolver(emergencyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      city: "",
      description: "",
      gdprConsent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: EmergencyFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/emergency", {
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
      console.error("Emergency form submission error:", err);
      setSubmitStatus({
        type: "error",
        message:
          "Ein Fehler ist aufgetreten. Bitte rufen Sie uns direkt an: +49 8234 9665900",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Emergency Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-red-800 mb-1">24/7 Notdienst</h3>
          <p className="text-sm text-red-700 mb-2">
            Bei lebensbedrohlichen Situationen (Gasgeruch, Wasserrohrbruch)
            rufen Sie bitte sofort an:
          </p>
          <a
            href="tel:+4982349665900"
            className="inline-block bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            +49 8234 9665900
          </a>
        </div>
      </div>

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

        {/* Contact Info */}
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

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">E-Mail (optional)</Label>
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

          <div>
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+49 8234 9665900"
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <p className="text-xs text-slate-500 -mt-4">
          Wir rufen Sie umgehend zurück
        </p>

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

        {/* Emergency Type */}
        <div>
          <Label htmlFor="emergencyType">Art des Notfalls *</Label>
          <Select
            onValueChange={(value) => {
              setValue("emergencyType", value as EmergencyFormData["emergencyType"]);
            }}
          >
            <SelectTrigger
              className={errors.emergencyType ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Bitte wählen..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="heizung-ausfall">Heizungsausfall</SelectItem>
              <SelectItem value="rohrbruch">Rohrbruch / Wasserschaden</SelectItem>
              <SelectItem value="gasgeruch">Gasgeruch</SelectItem>
              <SelectItem value="warmwasser-ausfall">
                Warmwasserausfall
              </SelectItem>
              <SelectItem value="sonstiges">Sonstiger Notfall</SelectItem>
            </SelectContent>
          </Select>
          {errors.emergencyType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.emergencyType.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Beschreibung des Notfalls *</Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Beschreiben Sie kurz, was passiert ist..."
            rows={4}
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* GDPR Consent */}
        <div className="flex items-start gap-2">
          <Controller
            name="gdprConsent"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="gdprConsent"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label htmlFor="gdprConsent" className="text-sm leading-relaxed">
            Ich akzeptiere die{" "}
            <a href="/datenschutz" className="text-[#0F5B78] hover:underline">
              Datenschutzerklärung
            </a>{" "}
            *
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
          className="w-full bg-red-600 hover:bg-red-700 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Wird gesendet...
            </>
          ) : (
            <>
              <AlertTriangle className="h-4 w-4 mr-2" />
              Notfall melden
            </>
          )}
        </Button>

        <p className="text-xs text-slate-500 text-center">
          * Pflichtfelder
        </p>
      </form>
    </div>
  );
}
