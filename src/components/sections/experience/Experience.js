"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Layers, CheckCircle2, ChevronUp, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { experienceContainer, fadeInUp, fadeInLeft, fadeInRight } from "./animations";

export function Experience({ experiences }) {
  const [activeId, setActiveId]       = useState(experiences[0].id);
  const [projectIndex, setProjectIndex] = useState(0);
  const [direction, setDirection]     = useState(1);

  const active   = experiences.find((e) => e.id === activeId);
  const project  = active.projects[projectIndex];
  const canUp    = projectIndex > 0;
  const canDown  = projectIndex < active.projects.length - 1;

  const switchCompany = (id) => {
    setActiveId(id);
    setProjectIndex(0);
    setDirection(1);
  };

  const navigate = (dir) => {
    setDirection(dir);
    setProjectIndex((prev) => Math.min(Math.max(prev + dir, 0), active.projects.length - 1));
  };

  return (
    <section id="experienceSection" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={experienceContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">Experience</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Where I&apos;ve worked
            </h2>
          </motion.div>

          {/* layout */}
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">

            {/* left — company tabs */}
            <motion.div variants={fadeInLeft} className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
              {experiences.map((exp) => {
                const isActive = exp.id === activeId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => switchCompany(exp.id)}
                    className="relative shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:w-full"
                    style={{
                      borderColor: isActive ? "var(--primary)" : "var(--border)",
                      background:  isActive ? "var(--primary)" + "1a" : "var(--surface)",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-2xl"
                        style={{ background: "var(--primary)", opacity: 0.08 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <p
                      className="relative text-sm font-semibold transition-colors duration-300"
                      style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                    >
                      {exp.company}
                    </p>
                    <p className="relative mt-0.5 text-xs text-[var(--foreground-muted)]">{exp.role}</p>
                    <p className="relative mt-1 text-xs text-[var(--foreground-muted)] opacity-70">{exp.period}</p>
                  </button>
                );
              })}
            </motion.div>

            {/* right — slider */}
            <motion.div variants={fadeInRight} className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* company header */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold text-[var(--foreground)]">{active.company}</h3>
                      <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                        {active.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground-muted)]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[var(--primary)]" />
                        {active.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[var(--primary)]" />
                        {active.location}
                      </span>
                    </div>
                  </div>

                  {/* project slider */}
                  <div className="flex gap-4">

                    {/* card */}
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={`${activeId}-${projectIndex}`}
                          initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                        >
                          {/* project name + description */}
                          <div className="mb-4 space-y-2">
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                <Layers className="h-3.5 w-3.5" />
                              </span>
                              <div>
                                <h4 className="font-semibold text-[var(--foreground)]">{project.name}</h4>
                                <p className="mt-0.5 text-sm text-[var(--foreground-muted)]">{project.description}</p>
                              </div>
                            </div>

                            {/* stack tags */}
                            <div className="flex flex-wrap gap-2 pl-10">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground-muted)]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* bullets */}
                          <ul className="space-y-2.5 pl-10">
                            {project.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--foreground-muted)]">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                                {bullet}
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

                      {/* dots */}
                      <div className="flex flex-col gap-1.5">
                        {active.projects.map((_, i) => (
                          <span
                            key={i}
                            onClick={() => { setDirection(i > projectIndex ? 1 : -1); setProjectIndex(i); }}
                            className="block h-1.5 w-1.5 cursor-pointer rounded-full transition-all duration-300"
                            style={{
                              background: i === projectIndex ? "var(--primary)" : "var(--border)",
                              transform:  i === projectIndex ? "scale(1.4)" : "scale(1)",
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
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
