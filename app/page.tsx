import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FeatureRow from "@/components/FeatureRow";
import Placeholder from "@/components/Placeholder";
import PartnerLogos from "@/components/PartnerLogos";
import { DiagonalCorner } from "@/components/Diagonals";
import { INTRO_IMAGE, VALUE_PROP_IMAGES } from "@/lib/images";
import { COMPANY_NAME, SERVICES, VALUE_PROPS } from "@/lib/data";

const PAGE_DESCRIPTION =
  "Enterprise IT procurement, licensing, hardware, cloud, and cybersecurity solutions from a single trusted partner.";

export const metadata: Metadata = {
  title: "Home",
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `Home | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 2172, height: 724, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* About intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
          <Reveal className="relative mx-auto w-full max-w-md">
            <DiagonalCorner position="top-left" color="teal" className="h-12 w-16 -translate-x-3 -translate-y-3" />
            <DiagonalCorner position="bottom-right" color="blue" className="h-12 w-16 translate-x-3 translate-y-3" />
            <Placeholder
              label="We are TechRynex"
              src={INTRO_IMAGE}
              aspect="aspect-4/3"
              priority
            />
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
      <section className="relative overflow-hidden bg-navy-800 py-16 md:py-20">
        <DiagonalCorner position="top-right" color="blue" visibleFrom="xl" className="h-40 w-40 sm:h-48 sm:w-48" />
        <DiagonalCorner position="bottom-left" color="teal" visibleFrom="xl" className="h-28 w-28 sm:h-36 sm:w-36" />

        <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-normal text-white/90 sm:text-4xl">
              Technology solutions, delivered with expertise
            </h2>
            <p className="mt-3 font-light text-white/75">
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

      {/* Why Choose Us */}
      <section className="bg-surface py-16 md:py-20">
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
                highlights={[...value.highlights]}
                src={VALUE_PROP_IMAGES[value.title]}
                reversed={i % 2 === 1}
                variant={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners preview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                Our Partners
              </p>
              <h2 className="mt-2 max-w-xl font-display text-3xl font-bold text-ink sm:text-4xl">
                Authorized partnerships with the brands you already trust
              </h2>
            </div>
            <Button href="/partners" className="shrink-0">
              See More
            </Button>
          </Reveal>

          <div className="mt-10">
            <PartnerLogos limit={4} />
          </div>
        </div>
      </section>
    </>
  );
}
