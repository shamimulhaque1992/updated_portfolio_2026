"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Medal,
  CalendarDays,
  Hash,
  Building2,
  ChevronUp,
  ChevronDown,
  Star,
  CheckCircle2,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  awardsContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "./animations";

import awardHustler from "@/assets/images/awards-and-certificates/huslar_of_the_year.png";
import awardYoungstar from "@/assets/images/awards-and-certificates/young_star_of_the_year.png";
import certGcpc from "@/assets/images/awards-and-certificates/gcpc_cirtificat.png";
import certClickup from "@/assets/images/awards-and-certificates/click_up.png";
import certPython from "@/assets/images/awards-and-certificates/p_for_ev.png";
import certSql from "@/assets/images/awards-and-certificates/sql_for_data.png";
import certLinux from "@/assets/images/awards-and-certificates/lnx.png";
import certStats from "@/assets/images/awards-and-certificates/probability.png";

const tabs = [
  { id: "awards", label: "Awards", icon: Trophy },
  { id: "certificates", label: "Certificates", icon: Medal },
];

const awards = [
  {
    id: "hustler",
    title: "Hustler of the Year",
    org: "Ethertec",
    icon: Trophy,
    image: awardHustler,
    url: null,
    points: [
      "Recognized for relentless drive and ownership across multiple projects.",
      "Consistently delivered beyond expectations under tight deadlines.",
      "Demonstrated strong initiative in solving complex technical challenges.",
      "Contributed significantly to team culture and productivity.",
    ],
  },
  {
    id: "youngstar",
    title: "Young Star of the Year",
    org: "Ethertec",
    icon: Star,
    image: awardYoungstar,
    url: null,
    points: [
      "Awarded for exceptional growth and performance as a young professional.",
      "Rapidly adapted to new technologies and delivered production-ready features.",
      "Praised for proactive communication and cross-team collaboration.",
      "Stood out among peers for quality of work and professional attitude.",
    ],
  },
];

const certificates = [
  {
    id: "gcpc",
    title: "Programming Contest",
    issuer: "GCPC — Daffodil International University",
    date: null,
    credentialId: null,
    image: certGcpc,
    url: null,
    points: [
      "Participated in a competitive programming contest organized by GCPC.",
      "Solved algorithmic problems under time constraints.",
      "Demonstrated problem-solving skills in data structures and algorithms.",
    ],
  },
  {
    id: "clickup",
    title: "ClickUp Novice Certificate Exam",
    issuer: "ClickUp",
    date: "Jun 2024",
    credentialId: null,
    image: certClickup,
    url: "https://verify.skilljar.com/c/tkhcebj2d2nn",
    points: [
      "Certified in ClickUp project management fundamentals.",
      "Demonstrated proficiency in task management, workflows, and productivity tools.",
      "Applied ClickUp features to streamline team collaboration.",
    ],
  },
  {
    id: "python",
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
    date: "Oct 2020",
    credentialId: "2WMPMLD23532",
    image: certPython,
    url: "https://www.coursera.org/account/accomplishments/certificate/2WMPMLD23532",
    points: [
      "Completed foundational Python programming course by University of Michigan.",
      "Covered variables, conditionals, loops, and functions.",
      "Built a strong base for data science and automation workflows.",
    ],
  },
  {
    id: "sql",
    title: "SQL for Data Science",
    issuer: "Coursera",
    date: "Aug 2020",
    credentialId: "3GW5Q6Q2D2SQ",
    image: certSql,
    url: "https://www.coursera.org/account/accomplishments/certificate/3GW5Q6Q2D2SQ",
    points: [
      "Learned SQL querying, filtering, aggregation, and joins.",
      "Applied SQL in data science contexts for analysis and reporting.",
      "Completed hands-on exercises with real-world datasets.",
    ],
  },
  {
    id: "linux",
    title: "Command Line in Linux",
    issuer: "Coursera",
    date: "Aug 2020",
    credentialId: "KBF3LNVJ4ZSU",
    image: certLinux,
    url: "https://www.coursera.org/account/accomplishments/certificate/KBF3LNVJ4ZSU",
    points: [
      "Gained proficiency in Linux terminal commands and shell scripting.",
      "Covered file system navigation, permissions, and process management.",
      "Built foundational DevOps and server management skills.",
    ],
  },
  {
    id: "stats",
    title: "Probability and Statistics: To p or not to p?",
    issuer: "Coursera",
    date: "Jul 2020",
    credentialId: "NACZE3XV3LGJ",
    image: certStats,
    url: "https://www.coursera.org/account/accomplishments/certificate/NACZE3XV3LGJ",
    points: [
      "Studied core concepts of probability, distributions, and hypothesis testing.",
      "Applied statistical reasoning to real-world data problems.",
      "Strengthened analytical foundation for machine learning work.",
    ],
  },
];

function CertModal({ image, title, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 max-w-3xl w-full max-h-[90vh]"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] shadow-lg hover:text-[var(--primary)] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl">
            <Image
              src={image}
              alt={title}
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Awards() {
  const [activeTab, setActiveTab] = useState("awards");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const items = activeTab === "awards" ? awards : certificates;
  const current = items[index];
  const canUp = index > 0;
  const canDown = index < items.length - 1;

  const switchTab = (id) => {
    setActiveTab(id);
    setIndex(0);
    setDirection(1);
  };

  const navigate = (dir) => {
    setDirection(dir);
    setIndex((prev) => Math.min(Math.max(prev + dir, 0), items.length - 1));
  };

  const Icon = current.icon ?? Medal;

  return (
    <section id="awardsSection" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={awardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">
              Recognition
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Awards & Certificates
            </h2>
          </motion.div>

          {/* layout */}
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
            {/* left — tabs */}
            <motion.div
              variants={fadeInLeft}
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0"
            >
              {tabs.map(({ id, label, icon: TabIcon }) => {
                const isActive = id === activeTab;
                return (
                  <button
                    key={id}
                    onClick={() => switchTab(id)}
                    className="relative shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:w-full"
                    style={{
                      borderColor: isActive
                        ? "var(--primary)"
                        : "var(--border)",
                      background: isActive
                        ? "var(--surface)"
                        : "var(--surface)",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="awardsActiveTab"
                        className="absolute inset-0 rounded-2xl"
                        style={{ background: "var(--primary)", opacity: 0.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <div className="relative flex items-center gap-3">
                      <TabIcon
                        className="h-4 w-4 shrink-0"
                        style={{
                          color: isActive
                            ? "var(--primary)"
                            : "var(--foreground-muted)",
                        }}
                      />
                      <p
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{
                          color: isActive
                            ? "var(--primary)"
                            : "var(--foreground)",
                        }}
                      >
                        {label}
                      </p>
                    </div>
                    <p className="relative mt-1 pl-7 text-xs text-[var(--foreground-muted)] opacity-70">
                      {id === "awards"
                        ? `${awards.length} awards`
                        : `${certificates.length} certificates`}
                    </p>
                  </button>
                );
              })}
            </motion.div>

            {/* right — slider */}
            <motion.div variants={fadeInRight} className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                      {activeTab === "awards" ? "Awards" : "Certificates"}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {activeTab === "awards"
                        ? "Recognition received for professional excellence."
                        : "Courses and exams completed and certified."}
                    </p>
                  </div>

                  {/* card + nav */}
                  <div className="flex gap-4">
                    {/* card */}
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={`${activeTab}-${index}`}
                          initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                        >
                          {/* title row */}
                          <div className="mb-5 space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                                  <Icon
                                    className="h-4 w-4"
                                    style={{ color: "var(--primary)" }}
                                  />
                                </span>
                                <div className="space-y-1">
                                  <h4 className="font-semibold text-[var(--foreground)] leading-snug">
                                    {current.title}
                                  </h4>
                                  <p className="flex items-center gap-1.5 text-xs text-[var(--primary)]">
                                    <Building2 className="h-3 w-3 shrink-0" />
                                    {current.org ?? current.issuer}
                                  </p>
                                </div>
                              </div>

                              {/* view certificate — top right */}
                              {current.url && (
                                <a
                                  href={current.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="shrink-0 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide transition-all duration-200 dark:bg-[#697565] dark:text-white dark:hover:bg-[#5a6357]"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Verify
                                </a>
                              )}
                            </div>

                            {/* date + credential */}
                            {(current.date || current.credentialId) && (
                              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 pl-11">
                                {current.date && (
                                  <span className="flex items-center gap-1.5 text-[11px] text-[var(--foreground-muted)]">
                                    <CalendarDays
                                      className="h-3 w-3 shrink-0"
                                      style={{ color: "var(--primary)" }}
                                    />
                                    Issued {current.date}
                                  </span>
                                )}
                                {current.credentialId && (
                                  <span className="flex items-center gap-1.5 text-[11px] text-[var(--foreground-muted)]">
                                    <Hash
                                      className="h-3 w-3 shrink-0"
                                      style={{ color: "var(--primary)" }}
                                    />
                                    {current.credentialId}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          <div className="h-px bg-[var(--border)] mb-6" />

                          {/* image + points — stacked on mobile, side by side on sm+ */}
                          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                            {/* image */}
                            {current.image && (
                              <div
                                className="group relative w-full rounded-2xl sm:w-[230px] sm:shrink-0 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] cursor-pointer"
                                onClick={() =>
                                  setModalImage({
                                    image: current.image,
                                    title: current.title,
                                  })
                                }
                              >
                                <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
                                  <motion.div
                                    whileHover={{ scale: 1.04 }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeOut",
                                    }}
                                  >
                                    <Image
                                      src={current.image}
                                      alt={current.title}
                                      className="h-48 w-full object-cover object-center sm:h-[180px]"
                                      placeholder="blur"
                                    />
                                  </motion.div>
                                </div>
                                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                                  <ZoomIn className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                              </div>
                            )}

                            {/* bullet points */}
                            <div className="flex-1">
                              <ul className="space-y-3">
                                {current.points.map((pt, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-sm leading-6 text-[var(--foreground-muted)]"
                                  >
                                    <CheckCircle2
                                      className="mt-1 h-3.5 w-3.5 shrink-0"
                                      style={{ color: "var(--primary)" }}
                                    />
                                    {pt}
                                  </li>
                                ))}
                              </ul>
                              {current.image && (
                                <button
                                  onClick={() =>
                                    setModalImage({
                                      image: current.image,
                                      title: current.title,
                                    })
                                  }
                                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/40 bg-[#0077c0] px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#0069a8] dark:bg-[#697565] dark:text-[#ECDFCC] dark:hover:bg-[#5a6357]"
                                >
                                  <ZoomIn className="h-3.5 w-3.5" />
                                  View Certificate
                                </button>
                              )}
                            </div>
                          </div>
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
                        {items.map((_, i) => (
                          <span
                            key={i}
                            onClick={() => {
                              setDirection(i > index ? 1 : -1);
                              setIndex(i);
                            }}
                            className="block h-1.5 w-1.5 cursor-pointer rounded-full transition-all duration-300"
                            style={{
                              background:
                                i === index
                                  ? "var(--primary)"
                                  : "var(--border)",
                              transform:
                                i === index ? "scale(1.4)" : "scale(1)",
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

      {modalImage && (
        <CertModal
          image={modalImage.image}
          title={modalImage.title}
          onClose={() => setModalImage(null)}
        />
      )}
    </section>
  );
}
