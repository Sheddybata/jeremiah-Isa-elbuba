"use client";

import Logo from "@/components/Logo";
import { navLinks } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);

    window.setTimeout(() => {
      if (href === "#" || href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const id = href.replace("#", "");
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToSection(href);
    };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#"
          className="inline-flex transition-opacity hover:opacity-80"
          aria-label="Jeremiah El-Buba — home"
          onClick={handleNavClick("#")}
        >
          <Logo priority size="lg" />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link group relative text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-ink"
                onClick={handleNavClick(link.href)}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block border-b border-black/5 py-3 text-base font-medium text-ink/80 transition-colors hover:text-accent"
                    onClick={handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {!scrolled && !menuOpen && (
        <motion.div
          className="pointer-events-none absolute bottom-0 left-6 hidden h-12 w-px bg-accent lg:block lg:left-8"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ originY: 0 }}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
