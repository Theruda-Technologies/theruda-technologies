import { IconCheck } from "./Icons";
import NeuralNetwork from "./NeuralNetwork";
import NeuralNetworkMobile from "./NeuralNetworkMobile";

const REASONS = [
  {
    title: "Product-minded teams",
    body: "Engineers and designers who think in outcomes — not just tickets and deliverables.",
  },
  {
    title: "End-to-end ownership",
    body: "Strategy through launch and iteration. One partner, clear accountability.",
  },
  {
    title: "Modern stack, lasting craft",
    body: "We ship with current tooling and leave you with code and systems you can own.",
  },
  {
    title: "Transparent collaboration",
    body: "Weekly demos, shared roadmaps, and honest timelines — no black boxes.",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="section relative"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.55 }}
        aria-hidden="true"
      />
      <div className="neural-bg" aria-hidden="true">
        <NeuralNetwork
          className="absolute inset-0 hidden h-full w-full md:block"
          opacity={0.4}
        />
        <NeuralNetworkMobile
          className="absolute inset-0 h-full w-full md:hidden"
          opacity={0.35}
          nodeCount={14}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-bg) 0%, transparent 30%, transparent 70%, var(--color-bg) 100%)",
          }}
        />
      </div>
      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="section-label">Why Theruda</p>
          <h2 id="about-heading" className="section-title">
            A studio built for ambitious digital products
          </h2>
          <p className="section-lead">
            Theruda Technologies partners with startups and established brands
            to design, build, and scale software that feels inevitable —
            purposeful, polished, and ready for growth.
          </p>
          <p className="mt-5 max-w-xl text-[var(--color-text-secondary)]">
            We believe great digital experiences come from tight collaboration
            between engineering, design, and intelligence. That&apos;s why our
            four services sit under one roof — so nothing gets lost in
            translation.
          </p>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li key={reason.title}>
              <article className="glass-card h-full p-5 hover:-translate-y-1">
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-full text-white"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden="true"
                >
                  <IconCheck />
                </div>
                <h3 className="m-0 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[var(--color-text)]">
                  {reason.title}
                </h3>
                <p className="mt-2 mb-0 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {reason.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
