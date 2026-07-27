const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.4 }}
        aria-hidden="true"
      />
      <div className="container flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-[10px] text-sm font-bold text-white"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden="true"
          >
            T
          </span>
          <div>
            <p className="m-0 font-[family-name:var(--font-display)] text-base font-700 text-[var(--color-text)]">
              Theruda Technologies
            </p>
            <p className="m-0 text-sm text-[var(--color-text-secondary)]">
              Software · Design · AI · Graphics
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--color-text-secondary)] no-underline transition-colors hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="m-0 text-sm text-[var(--color-text-secondary)]">
          © {year} Theruda Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
