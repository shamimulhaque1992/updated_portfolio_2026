"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/resume";

const socials = [
  { icon: Github, href: siteConfig.socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.socialLinks.twitter, label: "Twitter" },
  { icon: Facebook, href: siteConfig.socialLinks.facebook, label: "Facebook" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

const MARQUEE_TEXT =
  "AVAILABLE FOR WORK  ·  OPEN TO REMOTE  ·  FULL-TIME  ·  PART-TIME  ·  FREELANCE  ·  CONTRACT  ·  ";

export function Footer() {
  const track = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleNav = useCallback((slug) => {
    if (isHome) {
      const lenis = window.__lenis;
      const el = document.getElementById(slug);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTo", slug);
      router.push("/");
    }
  }, [isHome, router]);

  // duplicate content so the loop is seamless
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.innerHTML += el.innerHTML;
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)] overflow-hidden">
      {/* ── marquee strip ── */}
      <div className="overflow-hidden border-b border-[var(--border)] py-3 select-none">
        <div
          ref={track}
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {Array(4)
            .fill(MARQUEE_TEXT)
            .map((t, i) => (
              <span
                key={i}
                className="pr-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--foreground-muted)]"
              >
                {t.split("·").map((seg, j, arr) => (
                  <span key={j}>
                    {seg.trim()}
                    {j < arr.length - 1 && (
                      <span className="mx-3 text-[var(--primary)]">·</span>
                    )}
                  </span>
                ))}
              </span>
            ))}
        </div>
      </div>

      <Container>
        <div className="py-12 grid grid-cols-1 gap-10 sm:grid-cols-[1fr_auto_auto] sm:gap-16 lg:items-start">
          {/* ── left: identity ── */}
          <div className="space-y-4 max-w-xs">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--primary)] mb-1">
                Portfolio
              </p>
              <h2 className="text-lg font-semibold text-[var(--foreground)] leading-tight">
                {siteConfig.name}
              </h2>
              <p className="text-xs text-[var(--foreground-muted)] mt-0.5">
                {siteConfig.role}
              </p>
            </div>
            <p className="text-xs leading-6 text-[var(--foreground-muted)]">
              Building interfaces that scale — from architecture to pixel. Based
              in Dhaka, open to the world.
            </p>
            {/* socials */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground-muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── middle: nav ── */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
              Navigate
            </p>
            <ul className="space-y-2">
              {navItems.map(({ id, title, slug }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(slug)}
                    className="text-xs text-[var(--foreground-muted)] transition-colors duration-200 hover:text-[var(--primary)] text-left"
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── right: contact cta ── */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
              Get in Touch
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-xs text-[var(--foreground-muted)] transition-colors duration-200 hover:text-[var(--primary)] break-all"
              >
                {siteConfig.email}
              </a>
              <p className="text-xs text-[var(--foreground-muted)]">
                {siteConfig.location}
              </p>
            </div>
            <button
              onClick={() => handleNav("contactSection")}
              className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/40 bg-[#0077c0] px-4 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#0069a8] dark:bg-[#697565] dark:text-[#ECDFCC] dark:hover:bg-[#5a6357]"
            >
              Say hello
              <ArrowUpRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* ── bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-[var(--border)] py-5 sm:flex-row">
          <p className="text-[10px] text-[var(--foreground-muted)]">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-[var(--foreground-muted)]">
            Designed & built by{" "}
            <span className="font-semibold" style={{ color: "var(--primary)" }}>
              Shamimul
            </span>
          </p>
        </div>
      </Container>

      {/* marquee keyframe */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
