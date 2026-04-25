"use client";

import { useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ThemeToggle } from "@/components/shared/theme-toggle";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { label: "Work", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "About", target: "hero" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (target: string) => {
    setMenuOpen(false);
    gsap.to(window, {
      duration: 1.05,
      ease: "power2.inOut",
      scrollTo: {
        y: `#${target}`,
        offsetY: 88,
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-transform group-hover:scale-105">
            M
          </span>
          <span className="text-sm font-semibold tracking-wide text-foreground/90">
            Mayank Developer
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/50 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`#${item.target}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(item.target);
              }}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-background/80"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA */}
          <button
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-2.5 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Hire me
            <span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15">
              <svg
                width="10"
                height="9"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.6 4.602h10m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile: Theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md px-6 py-5 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.target);
                }}
                className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-3 flex w-fit items-center gap-2.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Hire me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}