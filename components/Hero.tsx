import Reveal from "./Reveal";
import Button from "./Button";
import { DiagonalCorner } from "./Diagonals";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-40 pb-32 md:pt-48 md:pb-40">
      <DiagonalCorner position="bottom-right" color="blue" className="h-40 w-56 sm:h-56 sm:w-80" />
      <DiagonalCorner position="bottom-right" color="teal" className="h-28 w-40 translate-x-6 translate-y-6 sm:h-40 sm:w-56" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-10">
        <Reveal delay={100}>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Helping businesses procure, renew, and manage enterprise
            technology
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We partner with trusted global vendors to deliver software
            licensing, hardware, cloud, and security solutions — all through
            one dedicated point of contact.
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
