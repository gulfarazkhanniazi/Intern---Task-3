import Reveal from "./Reveal";
import { DiagonalCorner } from "./Diagonals";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface pt-36 pb-20 md:pt-44 md:pb-24">
      <DiagonalCorner position="top-right" color="teal" className="h-24 w-32 sm:h-32 sm:w-44" />
      <DiagonalCorner position="top-right" color="blue" className="h-16 w-24 -translate-x-8 translate-y-6 sm:h-24 sm:w-32" />

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
