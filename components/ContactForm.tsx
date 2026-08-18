"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";

type Fields = "name" | "email" | "phone" | "subject" | "message";
type FormState = Record<Fields, string>;
type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-\s]{7,20}$/;

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(v: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!v.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(v.email)) next.email = "Enter a valid email address.";
    if (!v.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(v.phone.trim()) || v.phone.replace(/\D/g, "").length < 7)
      next.phone = "Enter a valid phone number.";
    if (!v.subject.trim()) next.subject = "Please enter a subject.";
    if (!v.message.trim() || v.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  }

  function handleChange(field: Fields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data: { error?: string } | null = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(initialState);
    } catch {
      setErrorMessage("Network error — check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-accent-blue/30 bg-accent-soft px-6 py-12 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-accent-blue" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold text-ink">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-muted">
          Thanks for reaching out — a member of our team will get back to you
          shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-accent-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          placeholder="John Smith"
          value={values.name}
          error={errors.name}
          onChange={(v) => handleChange("name", v)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="john@company.com"
          value={values.email}
          error={errors.email}
          onChange={(v) => handleChange("email", v)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="+1 (307) 449-2961"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => handleChange("phone", v)}
        />
        <Field
          id="subject"
          label="Subject"
          placeholder="What can we help with?"
          value={values.subject}
          error={errors.subject}
          onChange={(v) => handleChange("subject", v)}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us a bit about your project or renewal timeline…"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5 w-full rounded-md border border-navy/40 bg-white px-4 py-3 text-sm text-ink placeholder:text-navy/35 outline-none transition-colors focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
            <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-1.5 text-sm text-red-600">
          <TriangleAlert className="h-4 w-4" aria-hidden="true" />
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 border-2 border-accent-blue bg-accent-blue px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark hover:border-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
}: {
  id: Fields;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 w-full rounded-md border border-navy/40 bg-white px-4 py-3 text-sm text-ink placeholder:text-navy/35 outline-none transition-colors focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
