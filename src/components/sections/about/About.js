"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Sparkles, ChevronUp, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { aboutContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "./animations";

const VISIBLE = 3;

export function About({ bio, highlights, focus, currentRole, availability }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const canUp = activeIndex > 0;
  const canDown = activeIndex < focus.length - VISIBLE;

  const navigate = (dir) => {
    setDirection(dir);
    setActiveIndex((prev) => Math.min(Math.max(prev + dir, 0), focus.length - VISIBLE));
  };

  const visibleCards = focus.slice(activeIndex, activeIndex + VISIBLE);

  return (
    <section id="aboutSection" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={aboutContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-20"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">About Me</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              The person behind the code
            </h2>
          </motion.div>

          {/* grid */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

            {/* left */}
            <motion.div variants={fadeInLeft} className="space-y-8">
              <p className="text-lg leading-8 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light tracking-wide">
                {bio}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  {currentRole}
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Uttar Badda, Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                    {availability}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={scaleIn}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 shadow-sm"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-[var(--primary)]">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* right — vertical slider */}
            <motion.div variants={fadeInRight} className="flex gap-4">

              {/* cards */}
              <div className="flex-1 space-y-4 overflow-hidden">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)]">What I focus on</p>
                <div className="relative">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {visibleCards.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
                        transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.06 }}
                        className="mb-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)]/10 text-xs font-bold text-[var(--primary)]">
                            {String(activeIndex + i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
                        </div>
                        <p className="text-sm leading-6 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* nav controls */}
              <div className="flex flex-col items-center justify-center gap-3 pt-8">
                <button
                  onClick={() => navigate(-1)}
                  disabled={!canUp}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>

                {/* dots */}
                <div className="flex flex-col gap-1.5">
                  {focus.map((_, i) => (
                    <span
                      key={i}
                      className="block h-1.5 w-1.5 rounded-full transition-all duration-300"
                      style={{
                        background: i >= activeIndex && i < activeIndex + VISIBLE
                          ? "var(--primary)"
                          : "var(--border)",
                        transform: i >= activeIndex && i < activeIndex + VISIBLE ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => navigate(1)}
                  disabled={!canDown}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
