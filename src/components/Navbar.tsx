"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight" aria-label="Veekshith R, home">Veekshith R</a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${active === n.id ? "bg-white/10 text-fg" : "text-mute hover:text-fg"}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="grid size-11 place-items-center rounded-full md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="mx-auto max-w-6xl px-5 pb-4 md:hidden">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-3 ${active === n.id ? "text-fg" : "text-mute"}`}>{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
