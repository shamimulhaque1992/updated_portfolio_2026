"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";

const websure = projects.find((p) => p.slug === "websure");
const aranya = projects.find((p) => p.slug === "aranya");
const rightCards = projects.filter((p) =>
  ["gain-io", "payrun", "easydesk"].includes(p.slug),
);
const allCards = [websure, aranya, ...rightCards];

// Desktop fixed heights
const GAP = 16;
const WEBSURE_IMG = 180;
const WEBSURE_H = 420;
const RIGHT_CARD = 220;
const TOTAL = RIGHT_CARD * 3 + GAP * 2;
const ARANYA_H = TOTAL - WEBSURE_H - GAP;

function useBreakpoint() {
  const [bp, setBp] = useState("desktop");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

function Pills({ stack, max = 5 }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {stack.slice(0, max).map((t) => (
        <span
          key={t}
          className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--foreground-muted)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function CardLinks({ liveUrl, slug }) {
  return (
    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-[var(--border)]">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-[var(--primary)]/40 bg-[#0077c0] px-2 py-0 text-[5px] font-semibold text-white transition-colors duration-200 hover:bg-[#0069a8] dark:bg-[#697565] dark:text-[#ECDFCC] dark:hover:bg-[#5a6357]"
        >
          <ExternalLink className="h-4 w-4" />
          Live
        </a>
      )}
      <Link
        href={`/projects/${slug}`}
        className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-2 py-0 text-[5px] font-semibold text-[var(--foreground-muted)] transition-colors duration-200 hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
      >
        Details
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function CardMeta({ project, maxPoints = 2 }) {
  return (
    <>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--primary)] mb-1">
        {project.category}
      </p>
      <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug mb-2">
        {project.title}
      </h3>
      <ul className="flex flex-col gap-1">
        {project.points.slice(0, maxPoints).map((pt, i) => (
          <li
            key={i}
            className="flex items-start gap-1.5 text-[11px] text-[var(--foreground-muted)] leading-relaxed"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--primary)]/50" />
            {pt}
          </li>
        ))}
      </ul>
    </>
  );
}

/* ── Mobile ── */
function MobileCard({ project }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
      <div className="relative w-full h-44">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="100vw"
          placeholder="blur"
        />
      </div>
      <div className="p-4">
        <CardMeta project={project} maxPoints={2} />
        <Pills stack={project.stack} />
        <CardLinks liveUrl={project.liveUrl} slug={project.slug} />
      </div>
    </div>
  );
}

/* ── Tablet ── */
function TabletCard({ project }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex flex-row">
      <div className="relative w-36 shrink-0 min-h-[160px]">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="144px"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-1 min-w-0">
        <CardMeta project={project} maxPoints={2} />
        <div>
          <Pills stack={project.stack} max={4} />
          <CardLinks liveUrl={project.liveUrl} slug={project.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: Websure — image top, content below ── */
function DesktopLargeCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex flex-col"
      style={{ height: `${WEBSURE_H}px` }}
    >
      <div className="relative shrink-0" style={{ height: `${WEBSURE_IMG}px` }}>
        <Image
          src={websure.thumb}
          alt={websure.title}
          fill
          className="object-cover object-top"
          sizes="50vw"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col flex-1 min-h-0 overflow-hidden p-4">
        <CardMeta project={websure} maxPoints={3} />
        <div className="mt-auto">
          <Pills stack={websure.stack} />
          <CardLinks liveUrl={websure.liveUrl} slug={websure.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: Aranya — horizontal ── */
function DesktopMediumCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex flex-row"
      style={{ height: `${ARANYA_H}px` }}
    >
      <div className="relative w-36 shrink-0">
        <Image
          src={aranya.thumb}
          alt={aranya.title}
          fill
          className="object-cover object-top"
          sizes="144px"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 min-w-0 overflow-hidden p-3">
        <CardMeta project={aranya} maxPoints={1} />
        <div>
          <Pills stack={aranya.stack} max={3} />
          <CardLinks liveUrl={aranya.liveUrl} slug={aranya.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: right column cards — horizontal ── */
function DesktopSmallCard({ project }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] flex flex-row"
      style={{ height: `${RIGHT_CARD}px` }}
    >
      <div className="relative w-32 shrink-0">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover object-top"
          sizes="128px"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 min-w-0 overflow-hidden p-3">
        <CardMeta project={project} maxPoints={1} />
        <div>
          <Pills stack={project.stack} max={3} />
          <CardLinks liveUrl={project.liveUrl} slug={project.slug} />
        </div>
      </div>
    </div>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function FeaturedProjects() {
  const bp = useBreakpoint();

  return (
    <section id="landingProjects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          {/* heading */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">
              Selected Work
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Featured Projects
            </h2>
          </motion.div>

          {/* grid */}
          <motion.div variants={fadeUp}>
            {/* MOBILE */}
            {bp === "mobile" && (
              <div className="flex flex-col gap-4">
                {allCards.map((p) => (
                  <MobileCard key={p.slug} project={p} />
                ))}
              </div>
            )}

            {/* TABLET */}
            {bp === "tablet" && (
              <div className="grid grid-cols-2 gap-4">
                {allCards.map((p) => (
                  <TabletCard key={p.slug} project={p} />
                ))}
              </div>
            )}

            {/* DESKTOP */}
            {bp === "desktop" && (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <DesktopLargeCard />
                  <DesktopMediumCard />
                </div>
                <div className="flex flex-col gap-4">
                  {rightCards.map((p) => (
                    <DesktopSmallCard key={p.slug} project={p} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
