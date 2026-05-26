import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/lib/content";
import { Layers, PenLine, Target, Users } from "lucide-react";

const iconMap = {
  target: Target,
  pen: PenLine,
  layers: Layers,
  users: Users,
} as const;

export default function Work() {
  return (
    <AnimatedSection
      id="work"
      className="border-t border-black/5 bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            What I Do
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl lg:text-6xl">
            Crafting presence
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Strategy, storytelling, and community — delivered with clarity and
            care for brands that want to be heard, not just seen.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="service-card group flex flex-col border border-ink/15 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_12px_40px_-12px_rgba(217,4,41,0.35)]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
