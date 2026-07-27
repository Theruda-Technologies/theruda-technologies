"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
};

type Pulse = {
  from: number;
  to: number;
  progress: number;
  speed: number;
};

type Bias = "full" | "right" | "left";

const CYAN = { r: 6, g: 182, b: 212 };
const CYAN_BRIGHT = { r: 34, g: 211, b: 238 };

function pickX(width: number, bias: Bias) {
  if (bias === "right") {
    // Cluster on the right 55% of the canvas
    return width * (0.42 + Math.random() * 0.58);
  }
  if (bias === "left") {
    return width * Math.random() * 0.55;
  }
  return Math.random() * width;
}

export default function NeuralNetwork({
  className = "",
  opacity = 1,
  nodeCount = 36,
  connectionDistance = 200,
  bias = "full",
}: {
  className?: string;
  opacity?: number;
  nodeCount?: number;
  connectionDistance?: number;
  bias?: Bias;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNodes() {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: pickX(width, bias),
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.3),
        vy: (Math.random() - 0.5) * (reducedMotion ? 0 : 0.3),
        radius: 4 + Math.random() * 4,
        pulse: Math.random() * Math.PI * 2,
      }));
      pulses = [];
    }

    function spawnPulse(from: number, to: number) {
      if (pulses.length > 36) return;
      pulses.push({
        from,
        to,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      const minX = bias === "right" ? width * 0.38 : 0;
      const maxX = bias === "left" ? width * 0.58 : width;

      if (!reducedMotion) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;
          node.pulse += 0.03;

          if (node.x < minX || node.x > maxX) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          node.x = Math.max(minX, Math.min(maxX, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        }
      }

      const connections: [number, number][] = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            connections.push([i, j]);
            const alpha = 0.25 + (1 - dist / connectionDistance) * 0.55;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${alpha})`;
            ctx!.lineWidth = 1.6;
            ctx!.stroke();
          }
        }
      }

      if (!reducedMotion && Math.random() < 0.06 && connections.length > 0) {
        const [from, to] =
          connections[Math.floor(Math.random() * connections.length)];
        spawnPulse(from, to);
      }

      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const a = nodes[pulse.from];
        const b = nodes[pulse.to];
        const px = a.x + (b.x - a.x) * pulse.progress;
        const py = a.y + (b.y - a.y) * pulse.progress;

        const glow = ctx!.createRadialGradient(px, py, 0, px, py, 14);
        glow.addColorStop(
          0,
          `rgba(${CYAN_BRIGHT.r}, ${CYAN_BRIGHT.g}, ${CYAN_BRIGHT.b}, 1)`,
        );
        glow.addColorStop(
          1,
          `rgba(${CYAN_BRIGHT.r}, ${CYAN_BRIGHT.g}, ${CYAN_BRIGHT.b}, 0)`,
        );
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(px, py, 14, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = "#ffffff";
        ctx!.fill();
      }

      for (const node of nodes) {
        const glow = 0.5 + Math.sin(node.pulse) * 0.35;
        const glowRadius = node.radius * 5;
        const grd = ctx!.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius,
        );
        grd.addColorStop(
          0,
          `rgba(${CYAN_BRIGHT.r}, ${CYAN_BRIGHT.g}, ${CYAN_BRIGHT.b}, ${glow})`,
        );
        grd.addColorStop(1, `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, 0)`);
        ctx!.fillStyle = grd;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${CYAN_BRIGHT.r}, ${CYAN_BRIGHT.g}, ${CYAN_BRIGHT.b}, 0.95)`;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx!.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();

    const onResize = () => {
      resize();
      initNodes();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [nodeCount, connectionDistance, bias]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
