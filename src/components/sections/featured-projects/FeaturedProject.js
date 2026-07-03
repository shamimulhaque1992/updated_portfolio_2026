"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { gainioProject } from "@/data/featureProject";
import {
  featuredContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "./animations";
import Image from "next/image";

export function FeaturedProject() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);
  const highlight = gainioProject.highlights[activeTab];
  const canUp = activeTab > 0;
  const canDown = activeTab < gainioProject.highlights.length - 1;

  const navigate = (dir) => {
    setDirection(dir);
    setActiveTab((prev) =>
      Math.min(Math.max(prev + dir, 0), gainioProject.highlights.length - 1),
    );
  };

  return (
    <section id="featuredWork" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={featuredContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">
              Featured Work
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              A product I built end-to-end
            </h2>
          </motion.div>

          {/* main card */}
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-glow overflow-hidden">
            {/* top — image + project identity */}
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* image */}
              <motion.div
                variants={fadeInLeft}
                className="relative min-h-[280px] lg:min-h-[420px] bg-[var(--border)]/30 flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-3 text-[var(--foreground-muted)]">
                  <Image
                    src={gainioProject.img_url}
                    alt={gainioProject.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface)]/20 hidden lg:block" />
              </motion.div>

              {/* project identity */}
              <motion.div
                variants={fadeInRight}
                className="flex flex-col justify-center gap-6 p-8 lg:p-10"
              >
                {/* badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    {gainioProject.category}
                  </span>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)]">
                    {gainioProject.role}
                  </span>
                </div>

                {/* title */}
                <div className="space-y-1">
                  <h3 className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                    {gainioProject.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {gainioProject.company} &middot; {gainioProject.period}
                  </p>
                </div>

                {/* overview */}
                <p className="text-sm leading-7 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light tracking-wide">
                  {gainioProject.overview}
                </p>

                {/* action buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={gainioProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="default"
                      variant="default"
                      className="gap-2 rounded-full"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Product
                    </Button>
                  </a>
                  <Link className="rounded-full bg-[#0077c0] text-white hover:bg-[#0069a8] dark:bg-[#697565] dark:text-[#ECDFCC] dark:hover:bg-[#5a6357]" href={`/projects?project=${gainioProject.slug}`}>
                    <Button
                      size="default"
                      variant="outline"
                      className="gap-2 rounded-full"
                    >
                      <ArrowRight className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* divider */}
            <div className="h-px w-full bg-[var(--border)]" />

            {/* bottom — highlights slider + stack */}
            <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
              {/* highlights slider */}
              <div className="p-8 lg:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--foreground-muted)]">
                  What I built
                </p>

                {/* tab pills */}
                <div className="flex flex-wrap gap-2">
                  {gainioProject.highlights.map((h, i) => (
                    <button
                      key={h.title}
                      onClick={() => {
                        setDirection(i > activeTab ? 1 : -1);
                        setActiveTab(i);
                      }}
                      className="relative rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300"
                      style={{
                        borderColor:
                          i === activeTab ? "var(--primary)" : "var(--border)",
                        color:
                          i === activeTab
                            ? "var(--primary)"
                            : "var(--foreground-muted)",
                        backgroundColor:
                          i === activeTab
                            ? "var(--primary)" + "18"
                            : "transparent",
                      }}
                    >
                      {i === activeTab && (
                        <motion.div
                          layoutId="featuredTab"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "var(--primary)",
                            opacity: 0.08,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative">{h.title}</span>
                    </button>
                  ))}
                </div>

                {/* card + nav */}
                <div className="flex gap-4">
                  {/* card */}
                  <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: direction > 0 ? 24 : -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: direction > 0 ? -24 : 24 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 space-y-3"
                      >
                        <h4 className="font-semibold text-[var(--foreground)]">
                          {highlight.title}
                        </h4>
                        <ul className="space-y-2.5">
                          {highlight.points.map((pt, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm leading-6 text-[var(--foreground-muted)]"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* nav controls */}
                  <div className="flex flex-col items-center justify-center gap-3">
                    <button
                      onClick={() => navigate(-1)}
                      disabled={!canUp}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <div className="flex flex-col gap-1.5">
                      {gainioProject.highlights.map((_, i) => (
                        <span
                          key={i}
                          onClick={() => {
                            setDirection(i > activeTab ? 1 : -1);
                            setActiveTab(i);
                          }}
                          className="block cursor-pointer rounded-full transition-all duration-300"
                          style={{
                            width: "6px",
                            height: i === activeTab ? "20px" : "6px",
                            backgroundColor:
                              i === activeTab
                                ? "var(--primary)"
                                : "var(--border)",
                          }}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => navigate(1)}
                      disabled={!canDown}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* stack */}
              <div className="p-8 lg:p-10 space-y-6 border-t border-[var(--border)] lg:border-t-0 lg:border-l lg:border-l-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--foreground-muted)]">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {gainioProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)] transition-colors duration-300 hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
