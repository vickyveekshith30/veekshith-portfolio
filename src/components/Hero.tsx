import { ChevronDown } from "lucide-react";
import { links } from "@/data/content";
import Reveal from "./Reveal";

export const btnPrimary = "inline-flex min-h-11 items-center rounded-full bg-fg px-6 text-sm font-medium text-ink transition hover:bg-white hover:shadow-[0_0_30px_-8px_rgba(255,255,255,.5)]";
export const btnGhost = "inline-flex min-h-11 items-center rounded-full border border-line px-6 text-sm font-medium transition hover:border-mute hover:bg-white/5";

function Orbit() {
  const nodes = [[250, 70], [420, 170], [380, 360], [150, 400], [70, 220], [250, 250]];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [2, 5], [4, 5], [1, 5]];
  return (
    <svg viewBox="0 0 500 500" role="img" aria-label="Abstract network of connected nodes inside orbital rings" className="mx-auto w-full max-w-[460px]">
      <defs>
        <radialGradient id="glow"><stop offset="0" stopColor="#7fd6c8" stopOpacity=".28" /><stop offset="1" stopColor="#7fd6c8" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="250" cy="250" r="240" fill="url(#glow)" />
      <g className="spin-slow" fill="none" stroke="#2c2c33">
        <circle cx="250" cy="250" r="230" strokeDasharray="2 8" />
        <circle cx="250" cy="250" r="185" />
        <circle cx="480" cy="250" r="5" fill="#7fd6c8" stroke="none" />
      </g>
      <g className="spin-rev" fill="none" stroke="#2c2c33"><circle cx="250" cy="250" r="140" strokeDasharray="1 6" /><circle cx="110" cy="250" r="4" fill="#f4f4f2" stroke="none" /></g>
      <g stroke="#3a3a42" strokeWidth="1">{edges.map(([a, b], i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}</g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 5 ? 14 : 7} fill="#050506" stroke={i === 5 ? "#7fd6c8" : "#9a9aa2"} />
          {i === 5 && <circle cx={x} cy={y} r="5" fill="#7fd6c8" className="pulse-soft" />}
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[.35] [background-image:linear-gradient(#1c1c21_1px,transparent_1px),linear-gradient(90deg,#1c1c21_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Reveal>
            <h1 id="hero-title" className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-semibold leading-[.92] tracking-[-0.04em]">Veekshith R</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl font-display text-2xl leading-snug text-fg sm:text-3xl">Building intelligent systems. Exploring AI. Solving real-world problems.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl leading-relaxed text-mute">Second-year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, passionate about intelligent systems, software development, and emerging technologies.</p>
          </Reveal>
          <Reveal delay={0.26} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={btnPrimary}>Explore My Projects</a>
            <a href="#contact" className={btnGhost}>Get In Touch</a>
          </Reveal>
          <Reveal delay={0.32} className="mt-8 flex gap-6 text-sm text-mute">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="py-2 underline-offset-4 hover:text-fg hover:underline">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="py-2 underline-offset-4 hover:text-fg hover:underline">LinkedIn</a>
          </Reveal>
        </div>
        <Reveal delay={0.2}><Orbit /></Reveal>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-mute transition hover:text-fg sm:block"><ChevronDown className="pulse-soft" /></a>
    </section>
  );
}
