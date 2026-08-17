import type { Metadata } from "next";
import { Cloud, FileText, Laptop, RefreshCcw, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PartnerLogos from "@/components/PartnerLogos";
import { DiagonalCorner } from "@/components/Diagonals";
import { SOLUTIONS_WE_OFFER } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Authorized partnerships with trusted global technology manufacturers and vendors.",
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
      />

      <section className="py-24 md:py-28">
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
        <DiagonalCorner position="top-left" color="blue" className="h-40 w-56 sm:h-56 sm:w-80" />
        <DiagonalCorner position="top-right" color="teal" className="h-32 w-44 sm:h-44 sm:w-60" />

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
