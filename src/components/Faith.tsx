import AnimatedSection from "@/components/AnimatedSection";
import { faithContent } from "@/lib/content";

export default function Faith() {
  return (
    <AnimatedSection
      id="faith"
      className="bg-ink py-24 text-white md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-white/50">
          Faith
        </p>

        <div className="relative">
          <span
            className="pointer-events-none absolute -left-2 -top-8 font-serif text-7xl leading-none text-accent md:-left-6 md:-top-12 md:text-8xl"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote>
            <p className="font-serif text-2xl leading-snug tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {faithContent.verse}
            </p>
            <footer className="mt-8 font-sans text-sm uppercase tracking-[0.25em] text-accent">
              — {faithContent.reference}
            </footer>
          </blockquote>
          <span
            className="pointer-events-none absolute -bottom-10 -right-2 font-serif text-7xl leading-none text-accent md:-bottom-14 md:-right-6 md:text-8xl"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </div>

        <p className="mx-auto mt-20 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {faithContent.reflection}
        </p>
      </div>
    </AnimatedSection>
  );
}
