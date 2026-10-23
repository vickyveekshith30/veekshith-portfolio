import { links } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base text-fg">Veekshith R</p>
          <p>Portfolio of an AI/ML student and developer.</p>
        </div>
        <div className="flex gap-5">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="py-2 hover:text-fg">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="py-2 hover:text-fg">LinkedIn</a>
        </div>
        <p>© {new Date().getFullYear()} Veekshith R</p>
      </div>
    </footer>
  );
}
