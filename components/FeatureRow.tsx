import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import Placeholder from "./Placeholder";

export default function FeatureRow({
  eyebrow,
  title,
  description,
  highlights,
  cta,
  reversed = false,
  variant = 0,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: string[];
  cta?: { href: string; label: string };
  reversed?: boolean;
  variant?: number;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <Placeholder label={title} variant={variant} aspect="aspect-4/3" className="max-w-md" />
      </Reveal>
      <Reveal delay={100}>
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
            {eyebrow}
          </p>
        )}
        <h3 className={`font-display text-xl font-bold text-ink sm:text-2xl ${eyebrow ? "mt-2" : ""}`}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-1.5 text-sm text-ink">
                <ChevronRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <div className="mt-5">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        )}
      </Reveal>
    </div>
  );
}
