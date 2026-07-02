"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "light";

  return (
    <Button
      variant="ghost"
      size="sm"
      type="button"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="h-8 w-8 rounded-full border border-slate-200/80 bg-white/60 p-0 dark:border-slate-700/70 dark:bg-slate-800/60"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-3.5 w-3.5 text-[#ECDFCC]" />
      ) : (
        <Moon className="h-3.5 w-3.5 text-[#0d0f14]" />
      )}
    </Button>
  );
}
