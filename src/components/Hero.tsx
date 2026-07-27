import { IconArrow } from "./Icons";
import NeuralNetwork from "./NeuralNetwork";
import NeuralNetworkMobile from "./NeuralNetworkMobile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="neural-bg" aria-hidden="true">
        <div className="absolute inset-0 hidden md:block">
          <NeuralNetwork
            className="absolute inset-0 h-full w-full"
            opacity={0.45}
            nodeCount={28}
            connectionDistance={180}
            bias="full"
          />
          <NeuralNetwork
            className="absolute inset-0 h-full w-full"
            opacity={0.9}
            nodeCount={52}
            connectionDistance={170}
            bias="right"
          />
          <NeuralNetwork
            className="absolute inset-0 h-full w-full"
            opacity={0.7}
            nodeCount={36}
            connectionDistance={150}
            bias="right"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <NeuralNetworkMobile
            className="absolute inset-0 h-full w-full"
            opacity={0.45}
            nodeCount={12}
            connectionDistance={160}
            bias="full"
          />
          <NeuralNetworkMobile
            className="absolute inset-0 h-full w-full"
            opacity={0.85}
            nodeCount={22}
            connectionDistance={150}
            bias="right"
          />
          <NeuralNetworkMobile
            className="absolute inset-0 h-full w-full"
            opacity={0.65}
            nodeCount={16}
            connectionDistance={140}
            bias="right"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg) 0%, rgba(5,10,14,0.88) 32%, rgba(5,10,14,0.2) 62%, transparent 100%)",
          }}
        />
        <div
          className="pulse-glow absolute right-[8%] top-1/3 h-[40rem] w-[40rem] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10 w-full py-16 lg:py-24">
        <div className="max-w-2xl text-left">
          <p className="section-label reveal mb-5">Theruda Technologies</p>
          <h1
            id="hero-heading"
            className="reveal reveal-delay-1 m-0 font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--color-text)]"
          >
            Build what{" "}
            <span className="gradient-text">moves</span> your business forward
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-[var(--color-text-secondary)] md:text-xl">
            Software, design, and AI — crafted with precision for brands that
            refuse to settle for ordinary.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Start a project
              <IconArrow />
            </a>
            <a href="#work" className="btn-ghost">
              View our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
