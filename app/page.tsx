import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FeatureRow from "@/components/FeatureRow";
import Placeholder from "@/components/Placeholder";
import PartnerLogos from "@/components/PartnerLogos";
import { DiagonalCorner } from "@/components/Diagonals";
import { COMPANY_NAME, FEATURED_WORK, SERVICES, VALUE_PROPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Enterprise IT procurement, licensing, hardware, cloud, and cybersecurity solutions from a single trusted partner.",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* About intro */}
      <section className="py-24 md:py-28">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
          <Reveal>
            <Placeholder label="Team at work" aspect="aspect-4/3" />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              About {COMPANY_NAME}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              We are {COMPANY_NAME}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Technology investments are strategic decisions. We help
              organizations simplify how they acquire, manage, and renew
              enterprise technology — working with leading global
              manufacturers to deliver software, hardware, cloud, and
              security solutions through one trusted point of contact.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Rather than simply fulfilling purchase orders, we help
              businesses optimize technology investments, streamline
              procurement, and maintain long-term value throughout the
              lifecycle of their IT assets.
            </p>
            <div className="mt-8">
              <Button href="/about">Read More</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative overflow-hidden bg-navy-800 py-24 md:py-28">
        <DiagonalCorner position="top-right" color="teal" className="h-32 w-44 sm:h-44 sm:w-60" />
        <DiagonalCorner position="bottom-left" color="blue" className="h-40 w-56 sm:h-56 sm:w-80" />

        <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Technology solutions, delivered with expertise
            </h2>
            <p className="mt-3 text-white/60">
              Full-service procurement, licensing, and consulting — under one
              roof, with one point of contact.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} dark delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions in Action */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Featured Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Solutions in action
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_WORK.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <Placeholder
                    label={project.title}
                    variant={i}
                    aspect="aspect-3/4"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950 via-navy-950/70 to-transparent p-5">
                    <span className="inline-block bg-accent-blue/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Why {COMPANY_NAME}?
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Our Core Expertise
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-12">
            {VALUE_PROPS.map((value, i) => (
              <FeatureRow
                key={value.title}
                title={value.title}
                description={value.description}
                reversed={i % 2 === 1}
                variant={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners preview */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Our Partners
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Authorized partnerships with the brands you already trust
            </h2>
            <Button href="/partners" className="mt-2">
              See More
            </Button>
          </Reveal>

          <div className="mt-14">
            <PartnerLogos limit={10} />
          </div>
        </div>
      </section>
    </>
  );
}
