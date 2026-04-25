"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-9 rounded-full border border-border bg-muted animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative flex size-9 items-center justify-center rounded-full
        border border-border bg-muted/60
        text-muted-foreground
        transition-all duration-200
        hover:bg-accent hover:text-accent-foreground hover:border-primary/40
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        dark:hover:bg-card dark:hover:text-primary
      "
    >
      {isDark ? (
        <Sun
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 rotate-0 scale-100"
        />
      ) : (
        <Moon
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 rotate-0 scale-100"
        />
      )}
    </button>
  );
}
