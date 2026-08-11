const LEADERSHIP = [
  {
    name: "Alex Rivera",
    role: "CEO",
    title: "Chief Executive Officer",
    focus: "Sets the vision, partnerships, and growth strategy for Theruda.",
    initials: "AR",
  },
  {
    name: "Jordan Lee",
    role: "CTO",
    title: "Chief Technology Officer",
    focus: "Owns architecture, engineering excellence, and AI product direction.",
    initials: "JL",
  },
  {
    name: "Sam Okonkwo",
    role: "CIO",
    title: "Chief Information Officer",
    focus: "Leads systems, information strategy, and technology operations across Theruda.",
    initials: "SO",
  },
] as const;

export default function Team() {
  return (
    <section
      id="team"
      className="section glass-section relative"
      aria-labelledby="team-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.55 }}
        aria-hidden="true"
      />
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Leadership</p>
          <h2 id="team-heading" className="section-title">
            The people steering Theruda
          </h2>
          <p className="section-lead">
            Strategy, technology, and information — led by a tight executive
            team that stays close to the work.
          </p>
        </div>

        <ul className="mt-12 m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-3">
          {LEADERSHIP.map((leader) => (
            <li key={leader.role}>
              <article className="glass-card flex h-full flex-col p-6 transition-[transform] duration-500 ease-[var(--ease-out)] hover:-translate-y-1">
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold tracking-wide text-white shadow-[var(--glow-brand-sm)]"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden="true"
                >
                  {leader.initials}
                </div>
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  {leader.role}
                </p>
                <h3 className="mt-2 mb-0 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-text)]">
                  {leader.name}
                </h3>
                <p className="mt-1 mb-0 text-sm font-medium text-[var(--color-text)]">
                  {leader.title}
                </p>
                <p className="mt-3 mb-0 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {leader.focus}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
