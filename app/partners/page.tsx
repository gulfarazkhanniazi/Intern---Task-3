import type { Metadata } from "next";
import { Cloud, FileText, Laptop, RefreshCcw, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PartnerLogos from "@/components/PartnerLogos";
import { DiagonalCorner } from "@/components/Diagonals";
import { COMPANY_NAME, SOLUTIONS_WE_OFFER } from "@/lib/data";

const PAGE_DESCRIPTION =
  "Authorized partnerships with trusted global technology manufacturers and vendors.";

export const metadata: Metadata = {
  title: "Our Partners",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/partners" },
  openGraph: {
    title: `Our Partners | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 2172, height: 724, alt: COMPANY_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Partners | ${COMPANY_NAME}`,
    description: PAGE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const ICONS: Record<string, LucideIcon> = {
  Server,
  Laptop,
  Cloud,
  ShieldCheck,
  FileText,
  RefreshCcw,
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Partners"
        title="Trusted global brands, one point of contact"
        subtitle="We hold authorized reseller status with leading manufacturers across hardware, software, cloud, and security — so you get genuine products, competitive pricing, and manufacturer-backed support."
        tight
      />

      <section className="pt-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
              Our Partners
            </p>
          </Reveal>
          <div className="mt-10">
            <PartnerLogos />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-800 py-24 md:py-28">
        <DiagonalCorner position="top-left" color="blue" visibleFrom="xl" className="mr-4 h-56 w-56 sm:mr-10 sm:h-72 sm:w-72" />
        <DiagonalCorner position="top-right" color="teal" visibleFrom="xl" className="mr-2 h-36 w-36 sm:mr-4 sm:h-52 sm:w-52" />

        <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Solutions We Offer
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS_WE_OFFER.map((item, i) => {
              const Icon = ICONS[item.icon] ?? Server;
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <Icon className="h-8 w-8 text-accent-teal" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
