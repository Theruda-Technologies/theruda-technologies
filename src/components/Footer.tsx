import Image from "next/image";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Get in touch" },
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
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Theruda Technologies"
            width={140}
            height={140}
            className="h-20 w-auto md:h-24"
          />
          <p className="m-0 text-sm text-[var(--color-text-secondary)]">
            Software · Design · AI · Graphics
          </p>
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
