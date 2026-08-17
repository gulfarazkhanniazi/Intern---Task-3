import { Cloud, FileText, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import type { ServiceItem } from "@/lib/data";

const ICONS: Record<ServiceItem["icon"], LucideIcon> = {
  FileText,
  Server,
  ShieldCheck,
  Cloud,
};

export default function ServiceCard({
  service,
  dark = false,
  delay = 0,
}: {
  service: ServiceItem;
  dark?: boolean;
  delay?: number;
}) {
  const Icon = ICONS[service.icon];

  return (
    <Reveal delay={delay}>
      <div>
        <Icon
          className={dark ? "h-8 w-8 text-accent-teal" : "h-8 w-8 text-accent-blue"}
          aria-hidden="true"
        />
        <h3
          className={`mt-4 font-display text-lg font-semibold ${dark ? "text-white" : "text-ink"}`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}
        >
          {service.short}
        </p>
      </div>
    </Reveal>
  );
}
