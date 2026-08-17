import { PARTNERS } from "@/lib/data";
import { BRAND_ICON_COLORS, BRAND_ICON_PATHS, FALLBACK_ACCENTS } from "@/lib/brand-icons";
import Reveal from "./Reveal";

export default function PartnerLogos({ limit }: { limit?: number }) {
  const logos = limit ? PARTNERS.slice(0, limit) : PARTNERS;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {logos.map((name, i) => {
        const path = BRAND_ICON_PATHS[name];
        const color = BRAND_ICON_COLORS[name] ?? FALLBACK_ACCENTS[i % FALLBACK_ACCENTS.length];
        return (
          <Reveal key={name} delay={(i % 10) * 30}>
            <div
              title={name}
              className="group flex aspect-3/2 items-center justify-center rounded-lg border border-navy/10 bg-white px-4 transition-all duration-300 hover:border-accent-blue/40 hover:shadow-md"
            >
              {path ? (
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label={name}
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                >
                  <path d={path} fill={color} />
                </svg>
              ) : (
                <span
                  className="text-center font-display text-lg font-bold sm:text-2xl"
                  style={{ color }}
                >
                  {name}
                </span>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
