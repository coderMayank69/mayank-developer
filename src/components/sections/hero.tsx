import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm Mayank
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A full-stack developer passionate about creating beautiful, performant web experiences.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/projects">
            <Button size="lg">View My Work</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
