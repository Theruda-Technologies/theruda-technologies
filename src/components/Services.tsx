import { IconAI, IconCode, IconDesign, IconGraphics } from "./Icons";

const SERVICES = [
  {
    title: "Software Development",
    description:
      "End-to-end web and mobile applications engineered for scale, security, and long-term maintainability.",
    Icon: IconCode,
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent systems and automation that turn data into decisions — chatbots, ML pipelines, and product AI.",
    Icon: IconAI,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interfaces that balance clarity, delight, and conversion — from research to high-fidelity design.",
    Icon: IconDesign,
  },
  {
    title: "Graphics Design",
    description:
      "Brand identity, visual systems, and marketing creatives that make your company unmistakable.",
    Icon: IconGraphics,
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="section glass-section relative"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.55 }}
        aria-hidden="true"
      />
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">What we do</p>
          <h2 id="services-heading" className="section-title">
            Four disciplines. One standard of craft.
          </h2>
          <p className="section-lead">
            From product engineering to visual identity, Theruda brings
            specialized teams together under a single partnership.
          </p>
        </div>

        <ul className="mt-14 m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, Icon }) => (
            <li key={title}>
              <article className="gradient-border group flex h-full flex-col p-6 transition-[transform] duration-500 ease-[var(--ease-out)] hover:-translate-y-1">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-accent)] transition-colors duration-300 group-hover:text-white"
                  style={{
                    background: "var(--gradient-brand-soft)",
                  }}
                >
                  <span className="flex h-full w-full items-center justify-center rounded-[inherit] group-hover:[background:var(--gradient-brand)] group-hover:shadow-[var(--glow-brand-sm)]">
                    <Icon className="transition-colors" />
                  </span>
                </div>
                <h3 className="m-0 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-text)]">
                  {title}
                </h3>
                <p className="mt-3 mb-0 flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
