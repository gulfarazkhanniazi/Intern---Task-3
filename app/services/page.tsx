import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import FeatureRow from "@/components/FeatureRow";
import { DiagonalCorner } from "@/components/Diagonals";
import { SERVICE_IMAGES } from "@/lib/images";
import { PROCESS_STEPS, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software licensing, hardware procurement, cybersecurity, and cloud services delivered end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do"
        subtitle="Full-service procurement, licensing, and consulting — under one roof, with one point of contact."
        tight
      />

      {/* What We Do */}
      <section className="relative overflow-hidden bg-navy-800 pt-10 pb-16 md:pb-20">
        <DiagonalCorner position="top-right" color="blue" visibleFrom="xl" className="h-40 w-40 sm:h-48 sm:w-48" />
        <DiagonalCorner position="bottom-left" color="teal" visibleFrom="xl" className="h-28 w-28 sm:h-36 sm:w-36" />

        <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} dark delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Our Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              A straightforward path from quote to support
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative">
                  <span className="font-display text-5xl font-bold text-accent-blue/15">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute -right-5 top-6 hidden h-px w-8 bg-navy/15 lg:block"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed breakdown */}
      <section className="py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:px-10">
          {SERVICES.map((service, i) => (
            <FeatureRow
              key={service.slug}
              eyebrow={service.number}
              title={service.title}
              description={service.description}
              highlights={[...service.highlights]}
              cta={{ href: "/contact", label: "Read More" }}
              src={SERVICE_IMAGES[service.title]}
              reversed={i % 2 === 1}
              variant={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
