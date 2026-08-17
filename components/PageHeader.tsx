import Reveal from "./Reveal";
import { DiagonalCorner } from "./Diagonals";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  tight = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tight?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-surface pt-36 md:pt-44 ${
        tight ? "pb-8 md:pb-10" : "pb-20 md:pb-24"
      }`}
    >
      <DiagonalCorner position="top-right" color="blue" visibleFrom="xl" className="h-40 w-40 sm:h-48 sm:w-48" />
      <DiagonalCorner position="top-right" color="teal" visibleFrom="xl" className="h-28 w-28 sm:h-36 sm:w-36" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-muted">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
