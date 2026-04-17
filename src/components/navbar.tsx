"use client";

import { useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { label: "Products", target: "projects" },
  { label: "Services", target: "projects" },
  { label: "Apps", target: "projects" },
  { label: "Pricing", target: "contact" },
  { label: "About", target: "hero" },
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
    <nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
            M
          </span>
          <span className="text-sm font-semibold tracking-wide text-zinc-800">
            Mayank Developer
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 p-1 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={`#${item.target}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(item.target);
              }}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                index === 0
                  ? "border border-zinc-200 bg-white font-medium text-zinc-800"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("contact")}
          className="hidden items-center gap-2.5 rounded-full bg-linear-to-r from-zinc-950 to-zinc-500 py-2 pl-5 pr-2 text-sm font-medium text-zinc-50 transition-colors hover:text-zinc-200 md:flex"
        >
          Get started
          <span className="grid size-7 place-items-center rounded-full bg-white text-zinc-700">
            <svg
              width="12"
              height="10"
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

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-800 transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.target);
                }}
                className={`rounded-lg px-4 py-2.5 text-sm ${
                  index === 0
                    ? "bg-zinc-100 font-medium text-zinc-800"
                    : "text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-3 flex w-fit items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-zinc-950 to-zinc-500 px-5 py-2.5 text-sm font-medium text-zinc-50"
            >
              Get started
              <span className="grid size-7 place-items-center rounded-full bg-white text-zinc-700">
                <svg
                  width="12"
                  height="10"
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
        </div>
      )}
    </nav>
  );
}