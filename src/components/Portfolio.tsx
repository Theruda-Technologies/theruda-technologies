import Image from "next/image";
import { IconArrow } from "./Icons";

const PROJECTS = [
  {
    title: "SiteReady",
    category: "Software Development",
    description:
      "Website-as-a-Service platform — browse templates, customize a draft site, deploy with Polar checkout, then publish live.",
    tag: "SaaS Platform",
    image: "/projects/siteready-logo.png",
    href: "https://www.sitereadywebsites.com/",
    objectFit: "contain" as const,
  },
  {
    title: "CarCare",
    category: "Software Development",
    description:
      "Driver and garage platform for vehicle health, maintenance reminders, nearby booking, onsite service, community, and AI assistance.",
    tag: "Mobile",
    image: "/projects/carcare-logo-current.png",
    href: null,
    objectFit: "contain" as const,
  },
  {
    title: "Etiel Mining Hub",
    category: "Software Development",
    description:
      "Mining equipment storefront for Ethiopia — metal detectors, wash plants, crushers, and field services with online ordering.",
    tag: "Marketplace",
    image: "/projects/etiel-logo.png",
    href: "https://etiel-mining-hub.vercel.app/",
    objectFit: "contain" as const,
  },
  {
    title: "EtStockX",
    category: "Software Development",
    description:
      "Ethiopia’s capital markets gateway — browse stock listings, connect with ECMA-licensed brokers, and coordinate investments securely.",
    tag: "FinTech",
    image: "/projects/etstockx-logo.png",
    href: "https://etstockx-frontend.vercel.app/",
    objectFit: "contain" as const,
  },
  {
    title: "EthioFuture Tutor",
    category: "Software Development",
    description:
      "Tutoring platform for Ethiopian students — find tutors, book sessions, and learn through live 1:1 video classes.",
    tag: "EdTech",
    image: "/projects/ethiofuture-tutor-logo.png",
    href: "https://play.google.com/store/apps/details?id=com.ethiofuturetutor.app",
    objectFit: "contain" as const,
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
              Products Theruda has designed and engineered — from SaaS and
              marketplaces to mobility and education.
            </p>
          </div>
        </div>

        <ul className="mt-14 m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => {
            const Card = (
              <article className="glass-card group flex h-full flex-col overflow-hidden transition-[transform] duration-500 ease-[var(--ease-out)] hover:-translate-y-1">
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#050A0E]">
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`${
                      project.objectFit === "contain"
                        ? "object-contain p-8"
                        : "object-cover"
                    } transition-transform duration-500 group-hover:scale-[1.03]`}
                    unoptimized={project.image.endsWith(".svg")}
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      {project.tag}
                    </span>
                    {project.href ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        View
                        <IconArrow className="h-3.5 w-3.5" />
                      </span>
                    ) : null}
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
            );

            return (
              <li key={project.title}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full no-underline"
                    aria-label={`${project.title} — open project`}
                  >
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
