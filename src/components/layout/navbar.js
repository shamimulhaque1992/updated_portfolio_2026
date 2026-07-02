"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/resume";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillBg = scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)";

  return (
    <header
      className={cn(
        "fixed left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4 transition-all duration-500 sm:px-6",
        scrolled ? "top-4" : "top-6"
      )}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Left: Name */}
        <Link
          href="#homeIntro"
          className="shrink-0 font-mono text-xs font-bold tracking-widest text-[var(--foreground)] transition-opacity hover:opacity-70"
        >
          &lt;Khandoker Shamimul Haque /&gt;
        </Link>

        {/* Center: Nav pill */}
        <div
          className="hidden flex-1 items-center justify-center gap-1 rounded-full px-8 py-3 text-sm font-medium backdrop-blur-md transition-all duration-500 md:flex"
          style={{ background: pillBg, boxShadow: "var(--nav-shadow)" }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.slug}`}
              className="rounded-full px-4 py-1.5 text-[var(--foreground)] transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Right: Controls pill */}
        <div
          className="hidden shrink-0 items-center gap-3 rounded-full px-4 py-3 backdrop-blur-md transition-all duration-500 md:flex"
          style={{ background: pillBg, boxShadow: "var(--nav-shadow)" }}
        >
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            download
            className="flex items-center gap-1.5 text-xs font-semibold text-[var(--foreground)] transition hover:text-[var(--primary)]"
          >
            <Terminal className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
