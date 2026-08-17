import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { DiagonalCorner } from "@/components/Diagonals";
import {
  COMPANY_EMAIL,
  COMPANY_HOURS,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_DIGITS,
  SOCIAL_LINKS,
} from "@/lib/data";

const PAGE_DESCRIPTION = "Get in touch with our team for a quote or a project consultation.";

export const metadata: Metadata = {
  title: "Contact",
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `Contact | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 2172, height: 724, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const SOCIAL_STYLES: Record<string, { initial: string; color: string }> = {
  LinkedIn: { initial: "in", color: "#0A66C2" },
  "Twitter / X": { initial: "X", color: "#111111" },
  Facebook: { initial: "f", color: "#1877F2" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next project"
        subtitle="Reach out for a quote, a renewal review, or just to ask what's possible — our team typically responds within one business day."
        tight
      />

      <section className="pt-4 pb-16 md:pb-20">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-20">
          <Reveal className="relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 sm:p-10 text-center shadow-sm shadow-navy/5">
            <DiagonalCorner position="top-left" color="teal" className="h-8 w-8 sm:h-8 sm:w-8 -translate-x-4 -translate-y-4 opacity-60" />
            <DiagonalCorner position="bottom-right" color="blue" className="h-8 w-8 sm:h-8 sm:w-8 translate-x-4 translate-y-4 opacity-60" />

            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-ink">
                Feel free to keep in touch
              </h2>
              <p className="mt-3 text-sm text-muted">
                Have a procurement need, renewal deadline, or IT project on
                the horizon? Let&apos;s talk.
              </p>

              <div className="mx-auto mt-8 h-px w-12 bg-navy/10" />

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                    Email
                  </p>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-blue"
                  >
                    <Mail className="h-4 w-4 text-accent-blue" aria-hidden="true" />
                    {COMPANY_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                    Contact No.
                  </p>
                  <a
                    href={`tel:${COMPANY_PHONE_DIGITS}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-blue"
                  >
                    <Phone className="h-4 w-4 text-accent-blue" aria-hidden="true" />
                    {COMPANY_PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                    Business Hours
                  </p>
                  <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    <Clock className="h-4 w-4 text-accent-blue" aria-hidden="true" />
                    {COMPANY_HOURS}
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-8 h-px w-12 bg-navy/10" />

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                  Follow Us
                </p>
                <div className="mt-3 flex items-center justify-center gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const style = SOCIAL_STYLES[social.label];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        style={{ backgroundColor: style.color }}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white transition-transform hover:scale-110"
                      >
                        {style.initial}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
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
