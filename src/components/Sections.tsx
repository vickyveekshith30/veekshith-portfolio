import { Brain, Code2, Cpu, Database, GraduationCap, Mail, MapPin, ScanEye, Wrench } from "lucide-react";
import { education, links, skillGroups } from "@/data/content";
import Reveal from "./Reveal";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal><h2 id={`${id}-title`} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2></Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="A Little About Me">
      <Reveal>
        <p className="max-w-3xl border-l border-accent/60 pl-6 text-lg leading-relaxed text-mute sm:text-xl">
          Second-year B.E. Artificial Intelligence and Machine Learning student with a strong foundation in programming, data structures and algorithms, and AI/ML technologies. Passionate about building practical solutions through projects and hackathons, with a growing interest in intelligent systems, software development, and emerging technologies. Driven by curiosity, continuous learning, and the desire to solve real-world problems through technology.
        </p>
      </Reveal>
    </Section>
  );
}

const icons = { code: Code2, brain: Brain, db: Database, tools: Wrench, eye: ScanEye, cpu: Cpu };

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={(i % 3) * 0.06}>
              <article className="h-full rounded-2xl border border-line bg-panel p-6">
                <div className="flex items-center gap-3"><Icon size={20} className="text-accent" aria-hidden /><h3 className="font-display text-lg font-medium">{g.title}</h3></div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s} className="rounded-full border border-line bg-white/[.03] px-3 py-1.5 text-sm text-fg/90">{s}</li>)}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function SeaVisual() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Abstract ocean temperature layers stacked by depth" className="h-full w-full">
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7fd6c8" /><stop offset=".5" stopColor="#2b6f9e" /><stop offset="1" stopColor="#0a1530" /></linearGradient>
        <clipPath id="seaclip"><rect width="400" height="300" /></clipPath>
      </defs>
      <rect width="400" height="300" fill="#07090f" />
      <g clipPath="url(#seaclip)">
        {Array.from({ length: 15 }).map((_, i) => (
          <path key={i} d={`M-10 ${30 + i * 17} Q 100 ${18 + i * 17 + (i % 2 ? 10 : -4)} 200 ${30 + i * 17} T 410 ${30 + i * 17} V 300 H -10 Z`} fill="url(#sea)" opacity={0.1 + (i / 15) * 0.08} stroke="#7fd6c8" strokeOpacity={0.35 - i * 0.02} />
        ))}
      </g>
    </svg>
  );
}

function AgentVisual() {
  const tools = [["GitHub", 70, 60], ["Notion", 330, 60], ["Jira", 70, 240], ["Slack", 330, 240]] as const;
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="An AI agent at the centre connected to GitHub, Notion, Jira and Slack" className="h-full w-full">
      <rect width="400" height="300" fill="#07090f" />
      {tools.map(([n, x, y]) => <line key={n} x1="200" y1="150" x2={x} y2={y} stroke="#3a3a42" strokeDasharray="4 5" />)}
      <circle cx="200" cy="150" r="48" fill="none" stroke="#7fd6c8" strokeOpacity=".3" className="pulse-soft" />
      <circle cx="200" cy="150" r="30" fill="#0d0d10" stroke="#7fd6c8" />
      <text x="200" y="154" textAnchor="middle" fontSize="12" fill="#f4f4f2">Agent</text>
      {tools.map(([n, x, y]) => (
        <g key={n}><rect x={x - 38} y={y - 15} width="76" height="30" rx="15" fill="#0d0d10" stroke="#3a3a42" /><text x={x} y={y + 4} textAnchor="middle" fontSize="12" fill="#c9c9cf">{n}</text></g>
      ))}
    </svg>
  );
}

const projects = [
  {
    n: "01", name: "Sea Embed", category: "Deep Learning · Smart India Hackathon 2026, Ministry of Earth Sciences", Visual: SeaVisual,
    desc: "Built a deep learning pipeline to reconstruct subsurface ocean temperature at 15 depth levels using satellite surface data.",
    details: [
      "Reconstructs subsurface ocean temperatures at 15 depth levels.",
      "Uses Sea Surface Temperature (SST), Sea Surface Height (SSH), Sea Surface Salinity (SSS), ocean currents, and winds.",
      "Uses a satellite-embedding architecture.",
      "Validates reconstructions against ARGO float and GLORYS reanalysis data.",
      "Focuses on the North Indian Ocean.",
    ],
    tags: ["Deep Learning", "Satellite Data", "North Indian Ocean"],
  },
  {
    n: "02", name: "Agent-OpSyn", category: "Agentic AI Platform", Visual: AgentVisual,
    desc: "Connects engineering tools so developers can resolve incidents, find runbooks, and complete operational tasks in plain natural language without switching between tools.",
    details: ["Works across GitHub, Notion, Jira, and Slack.", "Resolve incidents in plain natural language.", "Find runbooks and complete operational tasks."],
    tags: ["GitHub", "Notion", "Jira", "Slack"],
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="space-y-8">
        {projects.map((p) => (
          <Reveal key={p.n}>
            <article className="group grid overflow-hidden rounded-3xl border border-line bg-panel transition-colors hover:border-mute/50 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto md:min-h-[360px]"><p.Visual /></div>
              <div className="flex flex-col p-7 sm:p-9">
                <span className="font-display text-sm text-accent">Project {p.n}</span>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-mute">{p.category}</p>
                <p className="mt-5 leading-relaxed">{p.desc}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-mute">
                  {p.details.map((d) => <li key={d} className="flex gap-3"><span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />{d}</li>)}
                </ul>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {p.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>)}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative space-y-6 border-l border-line pl-8">
        {education.map((e) => (
          <li key={e.school} className="relative">
            <span aria-hidden className="absolute -left-[41px] top-6 grid size-5 place-items-center rounded-full border border-line bg-ink"><span className="size-2 rounded-full bg-accent" /></span>
            <Reveal>
              <div className="rounded-2xl border border-line bg-panel p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-display text-xl font-medium"><GraduationCap size={20} className="text-accent" aria-hidden />{e.school}</h3>
                  <p className="text-sm text-mute">{e.period}</p>
                </div>
                <p className="mt-3">{e.title}</p>
                {e.lines.map((l) => <p key={l} className="text-sm text-mute">{l}</p>)}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Achievements() {
  const items = [
    "Participated in 3–4 hackathons, building working prototypes under tight deadlines.",
    "Worked on the Smart India Hackathon 2026 problem statement from the Ministry of Earth Sciences through the Sea Embed project.",
  ];
  return (
    <Section id="achievements" title="Hackathons & Activities">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((t, i) => (
          <Reveal key={t} delay={i * 0.08}><p className="h-full rounded-2xl border border-line bg-panel p-6 leading-relaxed">{t}</p></Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const rows = [
    { Icon: Mail, label: "Email", text: links.email, href: `mailto:${links.email}` },
    { Icon: null, label: "GitHub", text: "github.com/vickyveekshith30", href: links.github },
    { Icon: null, label: "LinkedIn", text: "linkedin.com/in/veekshith-r-174613379", href: links.linkedin },
    { Icon: MapPin, label: "Location", text: "Mangalore, Karnataka, India" },
  ];
  return (
    <Section id="contact" title="Let's Connect">
      <Reveal><p className="max-w-2xl text-lg text-mute">Interested in connecting around AI/ML, intelligent systems, software development, and technology? Feel free to reach out.</p></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {rows.map(({ Icon, label, text, href }) => {
          const body = (
            <>
              <div className="flex items-center gap-2 text-sm text-mute">{Icon && <Icon size={16} aria-hidden />}{label}</div>
              <p className="mt-1 break-words">{text}</p>
            </>
          );
          const cls = "block rounded-2xl border border-line bg-panel p-5";
          return (
            <Reveal key={label}>
              {href ? (
                <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={`${label}: ${text}`} className={`${cls} transition-colors hover:border-mute/60`}>{body}</a>
              ) : <div className={cls}>{body}</div>}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
