import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  NotebookPen,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const highlights = [
  { label: "Published stories", value: "28" },
  { label: "Avg. reading time", value: "8 min" },
  { label: "Topics covered", value: "React, UI, Product" },
];

const latestPosts = [
  {
    title: "How I design component APIs that stay clean over time",
    category: "Architecture",
    summary:
      "A framework for naming props, avoiding over-abstraction, and scaling components without painful refactors.",
    readTime: "7 min read",
    date: "Apr 12, 2026",
  },
  {
    title: "The visual rhythm checklist I use before shipping a page",
    category: "Design Systems",
    summary:
      "Spacing, contrast, typography cadence, and interaction cues that make interfaces look intentional instead of accidental.",
    readTime: "6 min read",
    date: "Apr 08, 2026",
  },
  {
    title: "A practical guide to writing maintainable Tailwind",
    category: "Frontend",
    summary:
      "Patterns for structuring utility classes so teams can move fast while keeping code readable and consistent.",
    readTime: "9 min read",
    date: "Apr 01, 2026",
  },
];

const motionDelays = ["delay-0", "delay-100", "delay-200"];

export default function BlogPage() {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#fff8f1_0%,#ffffff_36%,#f8fafc_100%)] text-zinc-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.35),transparent_60%),radial-gradient(circle_at_85%_10%,rgba(249,115,22,0.2),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(120,113,108,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.08)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(circle_at_center,black_30%,transparent_90%)]" />

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-14 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Badge
              variant="outline"
              className="border-orange-300 bg-orange-100/80 text-orange-700"
            >
              <Sparkles className="size-3" />
              Mayank Journal
            </Badge>

            <h1
              className={`${playfair.className} mt-5 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl`}
            >
              Practical frontend essays for developers who care about craft.
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 md:text-lg">
              Deep dives on React architecture, product thinking, and interface
              polish. Each article is built from real project decisions and
              lessons learned in production.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="h-10 bg-zinc-900 px-5 text-white hover:bg-zinc-700">
                Read the latest article
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="h-10 border-zinc-300 bg-white/80 px-5"
              >
                Browse by topic
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <Card
                  key={item.label}
                  size="sm"
                  className="border-zinc-200/90 bg-white/80 shadow-sm"
                >
                  <CardHeader className="gap-0.5">
                    <CardTitle className="text-lg text-zinc-900">
                      {item.value}
                    </CardTitle>
                    <CardDescription className="text-xs text-zinc-500">
                      {item.label}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-700">
            <Card className="overflow-hidden border-zinc-200 bg-white/85 shadow-[0_30px_80px_-45px_rgba(24,24,27,0.55)] backdrop-blur">
              <CardContent className="p-3">
                <Image
                  src="/hero.04Hc-67E_12tJhW.webp"
                  alt="Developer workspace"
                  width={1200}
                  height={800}
                  className="h-96 w-full rounded-2xl object-cover"
                  priority
                />
              </CardContent>
              <CardHeader className="pt-1">
                <CardDescription className="inline-flex items-center gap-2 text-zinc-500">
                  <NotebookPen className="size-4" />
                  Featured Story
                </CardDescription>
                <CardTitle
                  className={`${playfair.className} text-2xl leading-tight text-zinc-900`}
                >
                  From rough idea to polished launch in four focused sprints
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Latest Articles
            </p>
            <h2 className={`${playfair.className} mt-1 text-3xl md:text-4xl`}>
              Fresh reads from the blog
            </h2>
          </div>
          <Button variant="ghost" className="w-fit text-zinc-700 hover:text-zinc-900">
            View all posts
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <Card
              key={post.title}
              className={`border-zinc-200/90 bg-white/82 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-in fade-in slide-in-from-bottom-6 ${motionDelays[index]}`}
            >
              <CardHeader className="gap-2">
                <CardAction>
                  <Badge
                    variant="secondary"
                    className="bg-zinc-900 text-white hover:bg-zinc-700"
                  >
                    {post.readTime}
                  </Badge>
                </CardAction>
                <Badge variant="outline" className="w-fit border-zinc-300 text-zinc-700">
                  {post.category}
                </Badge>
                <CardTitle className="mt-2 text-xl leading-snug text-zinc-900">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-zinc-600">
                  {post.summary}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-between gap-2 bg-zinc-100/70">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <CalendarDays className="size-3.5" />
                  {post.date}
                </span>
                <Button size="sm" variant="outline" className="border-zinc-300 bg-white">
                  Read
                  <ArrowRight className="size-3.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-6 md:pb-24 md:pt-10">
        <Card className="border-zinc-200 bg-white/85 shadow-[0_24px_65px_-40px_rgba(24,24,27,0.55)] backdrop-blur">
          <CardContent className="grid gap-8 px-6 py-7 md:grid-cols-[1fr_auto_1fr] md:px-8 md:py-8">
            <div>
              <Badge variant="outline" className="border-zinc-300 text-zinc-600">
                Weekly Newsletter
              </Badge>
              <h3 className={`${playfair.className} mt-3 text-3xl leading-tight md:text-4xl`}>
                Stay in the loop with one sharp email per week.
              </h3>
              <p className="mt-3 text-zinc-600">
                New post drops, practical tips, and behind-the-scenes build
                notes without noise.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-500">
                <Clock3 className="size-4" />
                Takes under 3 minutes to read.
              </p>
            </div>

            <Separator orientation="vertical" className="hidden md:block" />

            <div className="space-y-3">
              <Input type="email" placeholder="you@example.com" className="bg-white" />
              <Input placeholder="Your role (Frontend Dev, Founder, Designer...)" className="bg-white" />
              <Textarea
                placeholder="Tell me one topic you want next"
                className="min-h-24 bg-white"
              />
              <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-700">
                Subscribe now
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
