import AnimatedSection from "@/components/AnimatedSection";
import { books } from "@/lib/content";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Image from "next/image";

type BookEntry = (typeof books)[number];

function BookBlock({
  book,
  reversed = false,
}: {
  book: BookEntry;
  reversed?: boolean;
}) {
  const subtitle = "subtitle" in book ? book.subtitle : undefined;

  return (
    <div
      className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md ${reversed ? "lg:[direction:ltr]" : ""}`}>
        <div
          className="absolute -left-4 top-8 hidden h-24 w-px bg-accent lg:block"
          aria-hidden="true"
        />
        <div className="relative aspect-[2/3] w-full shadow-[12px_12px_0_0_rgba(217,4,41,0.12)]">
          <Image
            src={book.coverImage}
            alt={`Book cover — ${book.title}`}
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

      <div className={reversed ? "lg:[direction:ltr]" : ""}>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
          {book.volume}
        </p>

        <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
          &ldquo;{book.hook}&rdquo;
        </p>

        <h3 className="mt-8 font-serif text-3xl tracking-tight text-ink md:text-4xl lg:text-5xl">
          {book.title}
        </h3>

        {subtitle && (
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink/50 md:text-base">
            {subtitle}
          </p>
        )}

        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70 md:text-lg">
          {book.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="mt-10 border-l-2 border-accent pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-accent md:text-2xl">
            {book.highlight}
          </p>
        </blockquote>

        <a
          href={book.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Buy now
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default function Book() {
  return (
    <AnimatedSection
      id="book"
      className="border-t border-black/5 bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            The Books
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl lg:text-6xl">
            Called for it
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            A two-part journey — from finding hope when you feel late, to
            stepping boldly into your next level.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {[...books].reverse().map((book, index) => (
            <BookBlock
              key={book.title}
              book={book}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
