import type { Metadata } from "next";
import { Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import { DiagonalCorner } from "@/components/Diagonals";
import { ABOUT_HERO_IMAGE } from "@/lib/images";
import { AWARDS, COMPANY_NAME } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${COMPANY_NAME} and how we help businesses manage enterprise technology.`,
};

const STATS = [
  { value: "10+", label: "Years in business" },
  { value: "200+", label: "Clients served" },
  { value: "20+", label: "Vendor partners" },
];

export default function AboutPage() {
  return (
    <>
      {/* About hero */}
      <section className="relative overflow-hidden bg-surface pt-36 pb-20 md:pt-44 md:pb-24">
        <DiagonalCorner position="top-right" color="blue" visibleFrom="xl" className="mr-4 h-56 w-56 -translate-y-16 sm:mr-10 sm:h-72 sm:w-72" />
        <DiagonalCorner position="top-right" color="teal" visibleFrom="xl" className="mr-2 h-36 w-36 -translate-y-6 sm:mr-4 sm:h-52 sm:w-52" />
        <DiagonalCorner position="bottom-left" color="teal" visibleFrom="xl" className="h-24 w-24 -translate-x-8 translate-y-8 opacity-70 sm:h-32 sm:w-32" />

        <div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              About Us
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
              Our story
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              A technology partner built around one idea: procurement should
              be simple, transparent, and handled by people who actually
              know your business.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-accent-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="relative">
            <DiagonalCorner position="top-left" color="teal" className="h-12 w-12 -translate-x-3 -translate-y-3 sm:h-16 sm:w-16" />
            <DiagonalCorner position="bottom-right" color="blue" className="h-12 w-12 translate-x-3 translate-y-3 sm:h-16 sm:w-16" />
            <Placeholder label="Our team at Corvex Technology Group" src={ABOUT_HERO_IMAGE} aspect="aspect-4/3" priority />
          </Reveal>
        </div>
      </section>

      {/* Company story */}
      <section className="bg-surface py-16 md:py-20">
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
      <section className="bg-surface py-16 md:py-20">
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
            {AWARDS.map((award, i) => {
              const styles =
                i % 2 === 0
                  ? {
                      card: "border-accent-blue/20 bg-accent-blue/5",
                      badge: "bg-accent-blue",
                    }
                  : {
                      card: "border-accent-teal/20 bg-accent-teal/5",
                      badge: "bg-accent-teal",
                    };
              return (
                <Reveal key={award} delay={i * 60}>
                  <div
                    className={`group flex flex-col items-center justify-center gap-2 rounded-xl border px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[140px] ${styles.card}`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${styles.badge}`}>
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-ink">
                      {award}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
