"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import * as Si from "react-icons/si";
import { Container } from "@/components/ui/container";
import { skillsContainer, fadeInUp, fadeInLeft, fadeInRight } from "./animations";

function SkillIcon({ iconName, className }) {
  const Icon = Si[iconName];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  const [cardIndex, setCardIndex]           = useState(0);
  const [direction, setDirection]           = useState(1);

  const group   = skills.find((g) => g.category === activeCategory);
  const card    = group.skills[cardIndex];
  const canUp   = cardIndex > 0;
  const canDown = cardIndex < group.skills.length - 1;

  const switchCategory = (cat) => {
    setActiveCategory(cat);
    setCardIndex(0);
    setDirection(1);
  };

  const navigate = (dir) => {
    setDirection(dir);
    setCardIndex((prev) => Math.min(Math.max(prev + dir, 0), group.skills.length - 1));
  };

  return (
    <section id="skillsSection" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={skillsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">Skills</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              What I work with
            </h2>
          </motion.div>

          {/* layout — mirrored from experience: slider left, tabs right */}
          <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:gap-12">

            {/* left — vertical slider */}
            <motion.div variants={fadeInLeft} className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* category header */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">{activeCategory}</h3>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {group.skills.length} {group.skills.length === 1 ? "technology" : "technologies"}
                    </p>
                  </div>

                  {/* card + nav controls side by side */}
                  <div className="flex gap-4">

                    {/* nav controls — left of card */}
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
                        {group.skills.map((_, i) => (
                          <span
                            key={i}
                            onClick={() => { setDirection(i > cardIndex ? 1 : -1); setCardIndex(i); }}
                            className="block cursor-pointer rounded-full transition-all duration-300"
                            style={{
                              width:           "6px",
                              height:          i === cardIndex ? "20px" : "6px",
                              backgroundColor: i === cardIndex ? "var(--primary)" : "var(--border)",
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

                    {/* card */}
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={`${activeCategory}-${cardIndex}`}
                          initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                        >
                          {/* icon + name + tag */}
                          <div className="mb-5 flex items-start gap-4">
                            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                              <SkillIcon iconName={card.icon} className="h-6 w-6" />
                            </span>
                            <div>
                              <h4 className="text-xl font-semibold text-[var(--foreground)]">{card.name}</h4>
                              <span className="mt-1 inline-block rounded-full bg-[var(--primary)]/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                                {card.tag}
                              </span>
                            </div>
                          </div>

                          {/* divider */}
                          <div className="mb-5 h-px w-full bg-[var(--border)]" />

                          {/* bullet points */}
                          <ul className="space-y-2.5">
                            {card.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* right — category tabs */}
            <motion.div variants={fadeInRight} className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
              {skills.map((g) => {
                const isActive = g.category === activeCategory;
                return (
                  <button
                    key={g.category}
                    onClick={() => switchCategory(g.category)}
                    className="relative shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:w-full"
                    style={{
                      borderColor: isActive ? "var(--primary)" : "var(--border)",
                      background:  isActive ? "var(--primary)" + "1a" : "var(--surface)",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 rounded-2xl"
                        style={{ background: "var(--primary)", opacity: 0.08 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <p
                      className="relative text-sm font-semibold transition-colors duration-300"
                      style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                    >
                      {g.category}
                    </p>
                    <p className="relative mt-0.5 text-xs text-[var(--foreground-muted)]">
                      {g.skills.length} {g.skills.length === 1 ? "technology" : "technologies"}
                    </p>
                  </button>
                );
              })}
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
