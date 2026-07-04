"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/data/projects";

// ── Sidebar tab ──────────────────────────────────────────────────────────────
function SidebarTab({ project, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full text-left rounded-xl border transition-all duration-200 overflow-hidden group",
        isActive
          ? "border-[var(--primary)]/50 bg-[var(--primary)]/8 shadow-sm"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5",
      ].join(" ")}
    >
      {/* thumbnail */}
      <div className="relative w-full h-32 overflow-hidden">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="300px"
          placeholder="blur"
        />
        {isActive && (
          <div className="absolute inset-0 bg-[var(--primary)]/10" />
        )}
      </div>

      {/* meta */}
      <div className="p-3 space-y-2">
        {/* title + active indicator */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
            {project.title}
          </h3>
          {isActive && (
            <ChevronRight className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[var(--primary)]" />
          )}
        </div>

        {/* short description */}
        <p className="text-[11px] leading-5 text-[var(--foreground-muted)] line-clamp-2">
          {project.description ?? project.category}
        </p>

        {/* tech pills */}
        <div className="flex flex-wrap gap-1 pt-0.5">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[9px] font-medium text-[var(--foreground-muted)]"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[9px] font-medium text-[var(--foreground-muted)]">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ── Detail panel ─────────────────────────────────────────────────────────────
function DetailPanel({ project }) {
  const cs = caseStudies[project.slug] ?? { challenges: [], improvements: [] };

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-10"
    >
      {/* Header */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] font-medium">
          {project.category}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
          {project.title}
        </h1>
        <p className="text-sm text-[var(--foreground-muted)]">
          {project.period}
        </p>
      </div>

      {/* Hero image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-[var(--border)]"
        style={{ aspectRatio: "16/7" }}
      >
        <Image
          src={project.details_thumbnail_url || project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 65vw"
          placeholder="blur"
          priority
        />
      </div>

      {/* Tech stack */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)] font-medium">
          Main Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)] transition-colors hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Brief description */}
      {project.description && (
        <div className="space-y-3">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)] font-medium">
            Brief Description
          </h2>
          <p className="text-sm leading-7 text-[var(--foreground-muted)]">
            {project.description}
          </p>
        </div>
      )}

      {/* Bullet points */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)] font-medium">
          Key Highlights
        </h2>
        <ul className="space-y-2.5">
          {project.points.map((pt, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm leading-6 text-[var(--foreground-muted)]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]/60" />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/40 bg-[#0077c0] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0069a8] dark:bg-[#697565] dark:text-[#ECDFCC] dark:hover:bg-[#5a6357]"
            >
              <ExternalLink className="h-4 w-4" />
              Live Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--foreground-muted)] transition hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="h-px w-full bg-[var(--border)]" />

      {/* Case Study */}
      <div className="space-y-8">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Case Study
        </h2>

        {/* Challenges */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Challenges Faced
            </h3>
          </div>
          <ul className="space-y-3">
            {cs.challenges.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground-muted)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/70" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-[var(--primary)] shrink-0" />
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Potential Improvements & Future Plans
            </h3>
          </div>
          <ul className="space-y-3">
            {cs.improvements.map((imp, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground-muted)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]/60" />
                {imp}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        {cs.responsibilities?.length > 0 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 space-y-4">
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-emerald-500 shrink-0" />
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                My Responsibilities
              </h3>
            </div>
            <ul className="space-y-3">
              {cs.responsibilities.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground-muted)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main page client ──────────────────────────────────────────────────────────
export function ProjectsPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const detailRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const initialSlug = searchParams.get("project") ?? projects[0].slug;
  const [activeSlug, setActiveSlug] = useState(
    projects.find((p) => p.slug === initialSlug)
      ? initialSlug
      : projects[0].slug,
  );

  const activeProject =
    projects.find((p) => p.slug === activeSlug) ?? projects[0];

  const handleSelect = (slug) => {
    setActiveSlug(slug);
    router.replace(`/projects?project=${slug}`, { scroll: false });
    if (window.innerWidth < 1024 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-24 pb-20">
      <Container>
        {/* back link */}
        <Link
          href="/#landingProjects"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* heading */}
        <div className="mb-10 space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--primary)] font-medium">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            All Projects
          </h1>
        </div>

        {/* layout: sidebar + detail */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-start">
          {/* ── Sidebar ── */}
          <div
            data-lenis-prevent
            className="w-full lg:w-[280px] xl:w-[300px] shrink-0 lg:sticky lg:top-28 overflow-y-auto scrollbar-thin pr-1"
            style={{ maxHeight: "calc(100vh - 8rem)" }}
          >
            <div className="space-y-3">
              {projects.map((p) => (
                <SidebarTab
                  key={p.slug}
                  project={p}
                  isActive={p.slug === activeSlug}
                  onClick={() => handleSelect(p.slug)}
                />
              ))}
            </div>
          </div>

          {/* ── Detail panel ── */}
          <div ref={detailRef} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <DetailPanel key={activeSlug} project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
