import AnimatedSection from "@/components/AnimatedSection";
import { aboutContent, images } from "@/lib/content";
import Image from "next/image";

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-lg pb-16 sm:max-w-xl lg:mx-0 lg:max-w-2xl lg:pb-20">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={images.aboutPortrait}
                alt="Prince Jeremiah Isa El-Buba"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
              <div
                className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-accent/30 lg:block"
                aria-hidden="true"
              />

              <div className="absolute -bottom-4 right-0 z-10 flex translate-x-4 gap-3 sm:-bottom-5 sm:translate-x-8 sm:gap-4 lg:-bottom-6 lg:translate-x-12">
                <div className="relative aspect-[3/4] w-36 overflow-hidden border-4 border-white shadow-lg sm:w-40 md:w-44 lg:w-52">
                  <Image
                    src={images.aboutPortraitSecondary}
                    alt="Jeremiah — portrait"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 144px, 208px"
                  />
                </div>
                <div className="relative aspect-[3/4] w-36 overflow-hidden border-4 border-white shadow-lg sm:w-40 md:w-44 lg:w-52">
                  <Image
                    src={images.aboutPortraitBeside}
                    alt="Jeremiah — ministry and moments"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 144px, 208px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            About
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl lg:text-6xl">
            Rooted in legacy.
            <br />
            <span className="italic text-ink/80">Built for the now.</span>
          </h2>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink/70 md:text-lg">
            {aboutContent.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-12 border-l-2 border-accent pl-6">
            <p className="font-serif text-xl italic leading-relaxed text-accent md:text-2xl">
              &ldquo;{aboutContent.pullQuote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </AnimatedSection>
  );
}
