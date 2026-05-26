"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/SocialIcons";
import { siteConfig, socialLinks } from "@/lib/content";
import { FormEvent, useState } from "react";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  whatsapp: WhatsAppIcon,
} as const;

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formspreeId) {
      setError(
        "Contact form is not configured yet. Email jeremiahisaelbuba@gmail.com directly."
      );
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        event.currentTarget.reset();
      } else {
        setError("Something went wrong. Please try again or email directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="border-t border-black/5 bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Contact
        </p>
        <h2 className="font-serif text-4xl tracking-tight text-ink md:text-6xl">
          Let&apos;s connect<span className="text-accent">.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
          For collaborations, speaking inquiries, or a simple hello — I&apos;d
          love to hear from you.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 inline-block border-b-2 border-accent pb-1 font-medium text-ink transition-colors hover:text-accent"
        >
          {siteConfig.email}
        </a>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-all hover:border-accent hover:text-accent"
                  aria-label={link.label}
                >
                  <Icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              </li>
            );
          })}
        </ul>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl space-y-5 text-left"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-y border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Sending..." : "Send message"}
          </button>
          {submitted && (
            <p className="text-sm text-ink/70" role="status">
              Thank you — your message has been sent. Jeremiah will be in touch
              soon.
            </p>
          )}
          {error && (
            <p className="text-sm text-accent" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </AnimatedSection>
  );
}
