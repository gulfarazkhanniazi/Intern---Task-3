import { ChevronRight } from "lucide-react";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import Button from "./Button";
import { DiagonalCorner } from "./Diagonals";
import { CASE_STUDY_IMAGES } from "@/lib/images";
import type { CaseStudy } from "@/lib/data";

export default function CaseStudyCard({
  study,
  variant,
  reversed = false,
  delay = 0,
}: {
  study: CaseStudy;
  variant: number;
  reversed?: boolean;
  delay?: number;
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal delay={delay} className="relative">
        <DiagonalCorner position="top-left" color="teal" className="h-12 w-16 -translate-x-3 -translate-y-3" />
        <DiagonalCorner position="bottom-right" color="blue" className="h-12 w-16 translate-x-3 translate-y-3" />
        <Placeholder
          label={study.title}
          src={CASE_STUDY_IMAGES[study.client]}
          variant={variant}
          aspect="aspect-4/3"
        />
      </Reveal>
      <Reveal delay={delay + 100}>
        <p className="text-xs font-bold uppercase tracking-wider text-accent-teal">
          {study.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-ink">
          {study.client}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">{study.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {study.description}
        </p>
        <ul className="mt-3 space-y-2">
          {study.highlights.map((point) => (
            <li key={point} className="flex items-start gap-1.5 text-sm text-ink">
              <ChevronRight
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Button href="/contact" size="md">
            Read Case Study
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
