"use client";

import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./Icons";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--glass-border)] bg-[rgba(5,10,14,0.55)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#top"
          className="group flex items-center gap-2.5 no-underline"
          aria-label="Theruda Technologies home"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-sm font-bold text-white shadow-[var(--glow-brand-sm)]"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden="true"
          >
            T
          </span>
          <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-bold tracking-tight text-[var(--color-text)]">
            Theruda
            <span className="font-medium text-[var(--color-text-secondary)]">
              {" "}
              Technologies
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] no-underline transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 pb-8 pt-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-[var(--color-text)] no-underline hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
