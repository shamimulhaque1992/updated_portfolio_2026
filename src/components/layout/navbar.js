"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Terminal, Home, FolderGit2, Cpu, Briefcase,
  User, Mail, MoreHorizontal, Star, Wrench, GraduationCap, Award,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/resume";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const FULL_TEXT = "Khandoker Shamimul Haque";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

const navIcons = {
  homeIntro:         Home,
  aboutSection:      User,
  experienceSection: Briefcase,
  skillsSection:     Cpu,
  landingProjects:   FolderGit2,
  featuredWork:      Star,
  servicesSection:   Wrench,
  educationSection:  GraduationCap,
  awardsSection:     Award,
  contactSection:    Mail,
};

function ScrambleName() {
  const [output, setOutput] = useState(() => Array(FULL_TEXT.length).fill("·"));

  useEffect(() => {
    const resolved = new Array(FULL_TEXT.length).fill(false);
    let frame;
    const tick = (start) => {
      setOutput((prev) =>
        prev.map((_, i) => {
          if (resolved[i]) return FULL_TEXT[i];
          if (i <= start) {
            if (Math.random() < 0.35) { resolved[i] = true; return FULL_TEXT[i]; }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          return "·";
        })
      );
      if (!resolved.every(Boolean)) frame = requestAnimationFrame(() => tick(start + 0.4));
    };
    frame = requestAnimationFrame(() => tick(0));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span className="font-mono tracking-widest">
      {output.map((char, i) =>
        char === FULL_TEXT[i]
          ? <span key={i}>{char}</span>
          : <span key={i} className="text-[var(--primary)] opacity-70">{char}</span>
      )}
    </span>
  );
}

// ── shared overflow popup ──────────────────────────────────────────────────
function OverflowMenu({ overflowItems, activeSlug, resumeUrl, onClose, align = "right", direction = "up", showControls = true, onNavClick }) {
  return (
    <div
      className={cn(
        "absolute z-[999] w-52 overflow-hidden rounded-2xl border border-[var(--border)] backdrop-blur-xl",
        align === "right" ? "right-0" : "left-0",
        direction === "up" ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
      )}
      style={{ background: "var(--nav-bg-scrolled)", boxShadow: "var(--nav-shadow)" }}
    >
      {overflowItems.map((item) => {
        const Icon = navIcons[item.slug] ?? Home;
        const isActive = activeSlug === item.slug;
        return (
          <button
            key={item.id}
            onClick={() => { onNavClick(item.slug); onClose(); }}
            className={cn(
              "flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition",
              isActive
                ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                : "text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {item.title}
          </button>
        );
      })}
      {overflowItems.length > 0 && <div className="mx-4 border-t border-[var(--border)]" />}
      {showControls && (
        <>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xs font-medium text-[var(--foreground-muted)]">Theme</span>
            <ThemeToggle />
          </div>
          <a
            href={resumeUrl}
            download
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
          >
            <Terminal className="h-4 w-4 shrink-0" />
            Download Resume
          </a>
        </>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Navigate to a section: on home scroll directly, on other pages push then scroll after navigation
  const handleNav = useCallback((slug) => {
    if (isHome) {
      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Store target slug so we can scroll after the home page mounts
      sessionStorage.setItem("scrollTo", slug);
      router.push("/");
    }
  }, [isHome, router]);

  const [scrolled, setScrolled]         = useState(false);
  const [activeSlug, setActiveSlug]     = useState("homeIntro");
  const [desktopCount, setDesktopCount] = useState(navItems.length);
  const [mobileCount, setMobileCount]   = useState(navItems.length);
  const [desktopOpen, setDesktopOpen]   = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);

  const desktopPillRef  = useRef(null);
  const desktopMoreRef  = useRef(null);
  const mobilePillRef   = useRef(null);
  const mobileMoreRef   = useRef(null);

  // scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // active section — on home track scroll position, on other pages match by pathname
  useEffect(() => {
    if (!isHome) {
      // Map known pathnames to their nav slug
      const pathSlugMap = { "/projects": "landingProjects" };
      setActiveSlug(pathSlugMap[pathname] ?? "");
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.25;
      let closest = navItems[0].slug;
      let closestDist = Infinity;
      navItems.forEach(({ slug }) => {
        const el = document.getElementById(slug);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const dist = Math.abs(top - scrollY);
        if (dist < closestDist) {
          closestDist = dist;
          closest = slug;
        }
      });
      setActiveSlug(closest);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, pathname]);

  // desktop pill: measure available width for nav items
  useEffect(() => {
    const calc = () => {
      if (!desktopPillRef.current) return;
      // pill width = total header width minus name (~220px) minus controls (~120px) minus gaps (~48px)
      const pillW = desktopPillRef.current.offsetWidth;
      // each item: text + px-3 py-1.5 ≈ measure roughly by char count
      // use a fixed estimate: avg item ~88px at text-sm px-3
      const ITEM = 88;
      const MORE = 48;
      const fits = Math.floor((pillW - MORE) / ITEM);
      setDesktopCount(Math.min(fits, navItems.length));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // mobile pill: measure actual pill width
  useEffect(() => {
    const calc = () => {
      if (!mobilePillRef.current) return;
      const pillW = mobilePillRef.current.offsetWidth;
      // each mobile item: icon + tiny label + px-2 ≈ 56px
      const ITEM = 56;
      const MORE = 52;
      const fits = Math.floor((pillW - MORE) / ITEM);
      setMobileCount(Math.min(Math.max(fits, 1), navItems.length));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (desktopMoreRef.current && !desktopMoreRef.current.contains(e.target)) setDesktopOpen(false);
      if (mobileMoreRef.current  && !mobileMoreRef.current.contains(e.target))  setMobileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const pillBg = scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)";

  const desktopVisible  = navItems.slice(0, desktopCount);
  const desktopOverflow = navItems.slice(desktopCount);

  const mobileVisible  = navItems.slice(0, mobileCount);
  const mobileOverflow = navItems.slice(mobileCount);

  return (
    <>
      {/* ══════════════════════════════════════
          DESKTOP lg+ — top floating pill navbar
         ══════════════════════════════════════ */}
      <header
        className={cn(
          "fixed left-1/2 z-50 hidden w-full max-w-7xl -translate-x-1/2 px-4 transition-all duration-500 sm:px-6 lg:block",
          scrolled ? "top-4" : "top-6"
        )}
      >
        <div className="flex items-center gap-4">

          {/* Name */}
          <button
            onClick={() => handleNav("homeIntro")}
            className="shrink-0 font-mono text-sm font-bold text-[var(--foreground)] transition-opacity hover:opacity-70"
          >
            <ScrambleName />
          </button>

          {/* Nav pill — flex-1 so it fills remaining space */}
          <div
            ref={desktopPillRef}
            className="flex min-w-0 flex-1 items-center justify-center gap-0.5 rounded-full px-3 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-500"
            style={{ background: pillBg, boxShadow: "var(--nav-shadow)" }}
          >
            {desktopVisible.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.slug)}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-1.5 transition",
                  activeSlug === item.slug
                    ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                    : "text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                )}
              >
                {item.title}
              </button>
            ))}

            {/* Desktop three-dot */}
            <div ref={desktopMoreRef} className="relative ml-1 shrink-0">
              <button
                onClick={() => setDesktopOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium transition",
                  desktopOpen || desktopOverflow.some(i => i.slug === activeSlug)
                    ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                )}
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {desktopOpen && (
                <OverflowMenu
                  overflowItems={desktopOverflow}
                  activeSlug={activeSlug}
                  resumeUrl={siteConfig.resumeUrl}
                  onClose={() => setDesktopOpen(false)}
                  align="right"
                  direction="down"
                  showControls={false}
                  onNavClick={handleNav}
                />
              )}
            </div>
          </div>

          {/* Controls pill */}
          <div
            className="flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5 backdrop-blur-md transition-all duration-500"
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

      {/* ══════════════════════════════════════
          MOBILE + TABLET — top name bar
         ══════════════════════════════════════ */}
      <header
        className="fixed left-0 right-0 top-0 z-50 flex items-center px-5 py-3 backdrop-blur-md lg:hidden"
        style={{ background: "var(--nav-bg-scrolled)", boxShadow: "var(--nav-shadow)" }}
      >
        <button onClick={() => handleNav("homeIntro")} className="font-mono text-xs font-bold text-[var(--foreground)]">
          <ScrambleName />
        </button>
      </header>

      {/* ══════════════════════════════════════
          MOBILE + TABLET — floating pill bottom nav
         ══════════════════════════════════════ */}
      <div
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden"
        style={{ width: "calc(100% - 2rem)", maxWidth: "680px", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <nav
          ref={mobilePillRef}
          className="flex w-full items-center justify-around rounded-full px-2 py-1.5 backdrop-blur-xl"
          style={{
            background: "var(--nav-bg-scrolled)",
            boxShadow: "var(--nav-shadow)",
            border: "1px solid var(--border)",
          }}
        >
          {mobileVisible.map((item) => {
            const Icon = navIcons[item.slug] ?? Home;
            const isActive = activeSlug === item.slug;
            return (
              <button
                key={item.id}
                onClick={() => { handleNav(item.slug); setMobileOpen(false); }}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-full px-2 py-2 transition-all duration-200",
                  isActive
                    ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                )}
              >
                <Icon className={cn("h-5 w-5 transition-transform duration-200", isActive && "scale-110")} />
                <span className="text-[9px] font-medium leading-none">{item.title}</span>
              </button>
            );
          })}

          {/* Divider */}
          <span className="h-6 w-px shrink-0 bg-[var(--border)]" />

          {/* Mobile three-dot */}
          <div ref={mobileMoreRef} className="relative shrink-0">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-full px-2 py-2 transition-all duration-200",
                mobileOpen || mobileOverflow.some(i => i.slug === activeSlug)
                  ? "bg-[var(--primary)]/15 text-[var(--primary)]"
                  : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              )}
            >
              <MoreHorizontal className="h-5 w-5" />
              <span className="text-[9px] font-medium leading-none">More</span>
            </button>

            {mobileOpen && (
              <OverflowMenu
                overflowItems={mobileOverflow}
                activeSlug={activeSlug}
                resumeUrl={siteConfig.resumeUrl}
                onClose={() => setMobileOpen(false)}
                align="right"
                onNavClick={handleNav}
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
