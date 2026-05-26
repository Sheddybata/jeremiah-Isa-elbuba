"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { galleryImages } from "@/lib/content";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <>
      <AnimatedSection
        id="gallery"
        className="bg-white py-24 md:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
                Moments
              </p>
              <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
                Life in frames
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              A glimpse into ministry, work, and the moments that shape the story.
            </p>
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="group relative mb-5 break-inside-avoid overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block w-full cursor-zoom-in text-left"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    style={{ width: "100%", height: "auto" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/25"
                    aria-hidden="true"
                  />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/80 transition-colors hover:text-white"
            aria-label="Close lightbox"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-white sm:left-4"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-white sm:right-4"
            aria-label="Next image"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              width={1200}
              height={1600}
              className="max-h-[90vh] w-auto object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
