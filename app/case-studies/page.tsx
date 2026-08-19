import type { Metadata } from "next";
import { Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES, COMPANY_NAME } from "@/lib/data";

const PAGE_DESCRIPTION =
  "A look at the procurement and technology projects we deliver for clients.";

export const metadata: Metadata = {
  title: "Case Studies",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `Case Studies | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 2172, height: 724, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Results our clients can measure"
        subtitle="A look at the kind of procurement and technology projects we deliver for clients."
        tight
      />

      <section className="pt-6 pb-16 md:pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-10">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
              variant={i}
              reversed={i % 2 === 1}
              delay={80}
            />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-800 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <Quote className="mx-auto h-10 w-10 text-accent-teal" aria-hidden="true" />
            <p className="mt-6 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
              &ldquo;Working with this team took the stress out of our
              technology renewals entirely. One phone call replaced what
              used to take three vendor calls and a week of back and
              forth.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/50">
              Jordan Ellis, IT Director — Meridian Health Group
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
