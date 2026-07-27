const PROJECTS = [
  {
    title: "Nexus Commerce",
    category: "Software Development",
    description: "Headless e-commerce platform with real-time inventory and multi-region checkout.",
    accent: "from-[#0891B2]/40 to-[#06B6D4]/20",
    tag: "Platform",
  },
  {
    title: "Lumen Health",
    category: "UI/UX Design",
    description: "Patient-facing redesign that cut appointment booking time by 40%.",
    accent: "from-[#06B6D4]/35 to-[#22D3EE]/15",
    tag: "Product Design",
  },
  {
    title: "Aether Insights",
    category: "AI Solutions",
    description: "LLM-powered analytics assistant for enterprise operations teams.",
    accent: "from-[#0891B2]/30 to-transparent",
    tag: "AI / ML",
  },
  {
    title: "Orbit Brand System",
    category: "Graphics Design",
    description: "Full visual identity and launch campaign for a Series B fintech.",
    accent: "from-[#06B6D4]/30 to-[#0A1218]",
    tag: "Brand",
  },
  {
    title: "Pulse Mobile",
    category: "Software Development",
    description: "Cross-platform fitness app with live coaching and wearable sync.",
    accent: "from-[#0891B2]/25 to-[#06B6D4]/30",
    tag: "Mobile",
  },
  {
    title: "Vertex Studio",
    category: "UI/UX Design",
    description: "Design system and SaaS dashboard for a creative collaboration suite.",
    accent: "from-[#06B6D4]/25 to-[#22D3EE]/25",
    tag: "Design System",
  },
] as const;

export default function Portfolio() {
  return (
    <section
      id="work"
      className="section glass-section relative"
      aria-labelledby="work-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.55 }}
        aria-hidden="true"
      />
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Selected work</p>
            <h2 id="work-heading" className="section-title">
              Projects that ship outcomes
            </h2>
            <p className="section-lead">
              A snapshot of recent engagements across product, AI, and brand —
              built for impact, not just aesthetics.
            </p>
          </div>
        </div>

        <ul className="mt-14 m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <article className="glass-card group flex h-full flex-col overflow-hidden hover:-translate-y-1">
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 mb-0 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 mb-0 text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
