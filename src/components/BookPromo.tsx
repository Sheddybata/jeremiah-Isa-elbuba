import { bookContent } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BookPromo() {
  return (
    <section
      aria-label="Book promotion"
      className="border-y border-black/5 bg-white py-12 md:py-14"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            New Book
          </p>
          <p className="mt-2 max-w-xl font-serif text-2xl tracking-tight text-ink md:text-3xl">
            {bookContent.title}
          </p>
          <p className="mt-2 text-sm text-ink/60">{bookContent.highlight}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#book"
            className="text-sm font-medium tracking-wide text-ink transition-colors hover:text-accent"
          >
            Read more
          </Link>
          <a
            href={bookContent.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            Get the book
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
