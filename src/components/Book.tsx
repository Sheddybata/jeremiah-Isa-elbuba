import AnimatedSection from "@/components/AnimatedSection";
import { bookContent } from "@/lib/content";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Book() {
  return (
    <AnimatedSection
      id="book"
      className="border-t border-black/5 bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
          <div
            className="absolute -left-4 top-8 hidden h-24 w-px bg-accent lg:block"
            aria-hidden="true"
          />
          <div className="relative aspect-[2/3] w-full shadow-[12px_12px_0_0_rgba(217,4,41,0.12)]">
            <Image
              src={bookContent.coverImage}
              alt={`Book cover — ${bookContent.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 400px"
            />
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink/45">
            <BookOpen size={14} strokeWidth={1.5} aria-hidden="true" />
            Available on Selar
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            The Book
          </p>

          <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
            &ldquo;{bookContent.hook}&rdquo;
          </p>

          <h2 className="mt-8 font-serif text-3xl tracking-tight text-ink md:text-4xl lg:text-5xl">
            {bookContent.title}
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
            {bookContent.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p className="font-serif text-xl italic leading-relaxed text-accent md:text-2xl">
              {bookContent.highlight}
            </p>
          </blockquote>

          <a
            href={bookContent.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Buy now
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
