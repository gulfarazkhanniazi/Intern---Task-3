import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import MapPlaceholder from "@/components/MapPlaceholder";
import {
  COMPANY_EMAIL,
  COMPANY_HOURS,
  COMPANY_PHONE,
  COMPANY_PHONE_DIGITS,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team for a quote or a project consultation.",
};

const SOCIAL_INITIALS: Record<string, string> = {
  LinkedIn: "in",
  "Twitter / X": "X",
  Facebook: "f",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next project"
        subtitle="Reach out for a quote, a renewal review, or just to ask what's possible — our team typically responds within one business day."
      />

      <section className="py-24 md:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <Reveal className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">
                Contact Information
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-accent">
                    {COMPANY_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`tel:${COMPANY_PHONE_DIGITS}`} className="hover:text-accent">
                    {COMPANY_PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {COMPANY_HOURS}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-navy">
                Follow Us
              </h2>
              <div className="mt-4 flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-sm font-semibold text-navy transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  >
                    {SOCIAL_INITIALS[social.label]}
                  </a>
                ))}
              </div>
            </div>

            <MapPlaceholder />
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm shadow-navy/5 sm:p-10">
              <h2 className="font-display text-xl font-semibold text-navy">
                Send Us a Message
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Fields marked required will be validated before sending.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
