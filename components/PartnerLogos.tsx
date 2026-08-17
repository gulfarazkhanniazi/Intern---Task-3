import { PARTNERS } from "@/lib/data";
import { BRAND_ICON_COLORS, BRAND_ICON_PATHS, FALLBACK_ACCENTS } from "@/lib/brand-icons";
import Reveal from "./Reveal";

const CUSTOM_PARTNER_IMAGES: Record<string, string> = {
  Logitech: "/images/partners/logitech.png",
  APC: "/images/partners/apc.png",
  ESET: "/images/partners/eset.png",
  Kingston: "/images/partners/kingston.png",
  Eaton: "/images/partners/eaton.png",
  Broadcom: "/images/partners/broadcom.png",
  Barracuda: "/images/partners/barracuda.png",
  "Aruba Networks": "/images/partners/aruba-networks.png",
  "Dell Technologies": "/images/partners/dell-technologies.png",
  Fortinet: "/images/partners/fortinet.png",
  Adobe: "/images/partners/adobe.png",
  Microsoft: "/images/partners/microsoft.png",
};

export default function PartnerLogos({ limit }: { limit?: number }) {
  const logos = limit ? PARTNERS.slice(0, limit) : PARTNERS;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {logos.map((name, i) => {
        const path = BRAND_ICON_PATHS[name];
        const color = BRAND_ICON_COLORS[name] ?? FALLBACK_ACCENTS[i % FALLBACK_ACCENTS.length];
        const customImagePath = CUSTOM_PARTNER_IMAGES[name];

        return (
          <Reveal key={name} delay={(i % 10) * 30}>
            <div
              title={name}
              className="group flex aspect-3/2 items-center justify-center rounded-lg border border-navy/10 bg-white p-4 transition-all duration-300 hover:border-accent-blue/40 hover:shadow-md"
            >
              {customImagePath ? (
                <img
                  src={customImagePath}
                  alt={name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              ) : path ? (
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label={name}
                  className="h-4/5 w-4/5 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d={path} fill={color} />
                </svg>
              ) : (
                <span
                  className="text-center font-display text-2xl font-bold sm:text-4xl"
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

