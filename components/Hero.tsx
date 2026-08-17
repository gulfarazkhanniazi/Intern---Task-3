import Reveal from "./Reveal";
import Button from "./Button";
import { DiagonalCorner } from "./Diagonals";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-40 pb-16 md:pt-48 md:pb-20">
      <DiagonalCorner position="bottom-right" color="blue" visibleFrom="md" className="mr-4 h-48 w-48 sm:mr-8 sm:h-64 sm:w-64" />
      <DiagonalCorner position="bottom-right" color="teal" visibleFrom="md" className="mr-2 h-32 w-32 sm:mr-4 sm:h-44 sm:w-44" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
        <Reveal delay={100}>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Helping businesses procure, renew, and manage enterprise
            technology
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            We partner with trusted global vendors to deliver software
            licensing, hardware, cloud, and security solutions — all through
            one dedicated point of contact, so your team spends less time
            chasing quotes and more time running the business.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/partners" size="lg">
              Learn More
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
