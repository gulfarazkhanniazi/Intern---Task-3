import type { Metadata } from "next";
import { Award } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { AWARDS, COMPANY_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${COMPANY_NAME} and how we help businesses manage enterprise technology.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Our story" />

      {/* Company story */}
      <section className="bg-surface py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-[180px_1fr]">
            <Reveal>
              <p className="font-display text-lg font-bold text-ink">Our story</p>
              <div className="mt-3 h-0.5 w-10 bg-accent-blue" />
            </Reveal>
            <Reveal delay={100} className="max-w-2xl space-y-5">
              <p className="text-base leading-relaxed text-ink">
                {COMPANY_NAME} was founded on a simple idea: technology
                procurement shouldn&apos;t require juggling a dozen vendor
                relationships to get a straight answer.
              </p>
              <p className="text-base leading-relaxed text-muted">
                As an independent IT procurement and licensing partner, we
                work with leading global technology manufacturers to deliver
                software subscriptions, licensing renewals, cloud services,
                cybersecurity solutions, and enterprise hardware through a
                single, trusted point of contact.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Rather than simply fulfilling purchase orders, we help
                businesses optimize technology investments, streamline
                procurement processes, and maintain long-term value
                throughout the lifecycle of their IT assets.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Whether supporting routine software renewals or complex
                infrastructure projects, our focus remains the same:
                delivering the right technology with transparency,
                responsiveness, and commercial expertise.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-[180px_1fr]">
            <Reveal>
              <p className="font-display text-lg font-bold text-ink">Our Vision</p>
              <div className="mt-3 h-0.5 w-10 bg-accent-teal" />
            </Reveal>
            <Reveal delay={100} className="max-w-2xl">
              <p className="text-base font-medium leading-relaxed text-ink">
                To become a globally trusted technology procurement partner,
                recognized for simplifying enterprise IT purchasing while
                building long-term customer relationships through expertise,
                integrity, and innovation.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-[180px_1fr]">
            <Reveal>
              <p className="font-display text-lg font-bold text-ink">Our Mission</p>
              <div className="mt-3 h-0.5 w-10 bg-accent-blue" />
            </Reveal>
            <Reveal delay={100} className="max-w-2xl">
              <p className="text-base font-medium leading-relaxed text-ink">
                To simplify enterprise technology procurement through
                transparent pricing, trusted vendor partnerships, and a
                dedicated team that treats every client relationship as
                long-term.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-surface py-24 md:py-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Awards &amp; Recognition
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Recognized for how we work
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {AWARDS.map((award, i) => (
              <Reveal key={award} delay={i * 60}>
                <div className="flex aspect-3/2 flex-col items-center justify-center gap-2 rounded-xl border border-navy/10 bg-white px-3 text-center grayscale transition-all duration-300 hover:grayscale-0">
                  <Award className="h-6 w-6 text-navy/40" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">
                    {award}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
