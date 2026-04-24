"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Hero, FeaturedProjects, Skills } from "@/components/sections";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from([subtitleRef.current, titleRef.current, descriptionRef.current, ctaRef.current], {
          y: 42,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
        })
        .from(
          imageRef.current,
          {
            x: 56,
            opacity: 0,
            scale: 0.95,
            duration: 1,
          },
          "-=0.55",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    gsap.to(window, {
      duration: 1.1,
      ease: "power2.inOut",
      scrollTo: {
        y: `#${sectionId}`,
        offsetY: 88,
      },
    });
  };

  return (
    <div ref={rootRef} className="w-full bg-background text-foreground">
      <Navbar />

      <main
        id="hero"
        className="grid h-screen w-full place-items-center bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-6 py-10 md:px-10"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p
              ref={subtitleRef}
              className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase"
            >
              Building polished web products
            </p>
            <h1
              ref={titleRef}
              className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl"
            >
              Mayank Developer
            </h1>
            <p ref={descriptionRef} className="mt-5 max-w-xl text-lg text-zinc-600 md:text-xl">
              I design and build modern web applications with strong UX,
              thoughtful engineering, and production-ready architecture.
            </p>
            <div ref={ctaRef} className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 shadow-2xl"
          >
            <Image
              src="/hero.04Hc-67E_12tJhW.webp"
              alt="Developer workspace"
              width={1200}
              height={800}
              priority
              className="h-120 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </main>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <main
        id="contact"
        className="flex h-screen w-full items-center justify-center bg-blue-800 px-6 text-white"
      >
        <div className="text-center">
          <h2 className="text-4xl font-semibold md:text-6xl">Contact</h2>
          <p className="mt-4 text-lg text-blue-100 md:text-xl">
            Have a project in mind? Let's work together.
          </p>
          <Button className="mt-8 bg-white text-blue-900 hover:bg-blue-100" onClick={() => scrollToSection("hero")}>
            Back to Top
          </Button>
        </div>
      </main>
    </div>
  );
}