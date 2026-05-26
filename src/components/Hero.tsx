"use client";

import { bookContent, images, siteConfig } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="relative z-10 lg:col-span-7">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-ink/50">
              Personal Portfolio
            </p>

            <div className="relative">
              <span
                className="absolute -left-4 top-2 hidden h-24 w-px bg-accent lg:block"
                aria-hidden="true"
              />
              <h1
                id="hero-heading"
                className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              >
                Prince Jeremiah
                <br />
                <span className="italic text-ink/90">Isa El-Buba</span>
              </h1>
            </div>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70 sm:text-xl">
              {siteConfig.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Get in touch
              </a>
              <a
                href={bookContent.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-ink/15 px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get the book
              </a>
              <a
                href="#about"
                className="group text-sm font-medium tracking-wide text-ink"
              >
                <span className="border-b border-transparent transition-colors group-hover:border-accent group-hover:text-accent">
                  Read my story
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative lg:col-span-5 lg:col-start-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* SWAP: Replace hero portrait in src/lib/content.ts */}
          <div className="relative w-full max-w-lg lg:ml-auto">
            <div
              className="absolute -right-4 -top-4 bottom-4 left-4 border border-ink/10"
              aria-hidden="true"
            />
            <div className="absolute -bottom-4 -left-4 z-10 h-16 w-16 bg-accent/10" aria-hidden="true" />
            <div className="relative z-[1] grid grid-cols-2 gap-3 sm:gap-4">
              <Image
                src={images.heroPortrait}
                alt="Prince Jeremiah Isa El-Buba"
                width={320}
                height={400}
                priority
                className="h-auto w-full object-contain grayscale-[20%]"
                sizes="(max-width: 1024px) 45vw, 260px"
              />
              <Image
                src={images.heroPortraitSecondary}
                alt="Jeremiah Isa El-Buba"
                width={320}
                height={400}
                priority
                className="h-auto w-full object-contain grayscale-[20%]"
                sizes="(max-width: 1024px) 45vw, 260px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 lg:flex"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px bg-ink/20" />
      </motion.a>
    </section>
  );
}
