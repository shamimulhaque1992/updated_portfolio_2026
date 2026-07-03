"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";

const websure    = projects.find((p) => p.slug === "websure");
const aranya     = projects.find((p) => p.slug === "aranya");
const rightCards = projects.filter((p) => ["gain-io", "payrun", "easydesk"].includes(p.slug));
const allCards   = [websure, aranya, ...rightCards];

// Desktop fixed heights
const GAP         = 16;
const WEBSURE_IMG = 160;
const WEBSURE_H   = 370;
const RIGHT_CARD  = 190;
const TOTAL       = RIGHT_CARD * 3 + GAP * 2; // 602
const ARANYA_H    = TOTAL - WEBSURE_H - GAP;   // 216

function useBreakpoint() {
  const [bp, setBp] = useState("desktop");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)  setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

const pill = {
  display: "inline-block", padding: "2px 8px", borderRadius: "999px",
  fontSize: "10px", border: "1px solid var(--border)",
  background: "transparent", color: "var(--foreground-muted)",
  whiteSpace: "nowrap",
};

function Pills({ stack, max = 5 }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }}>
      {stack.slice(0, max).map((t) => <span key={t} style={pill}>{t}</span>)}
    </div>
  );
}

function CardLinks({ liveUrl, slug }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid var(--border)" }}>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "11px", fontWeight: 500, color: "var(--primary)", textDecoration: "none" }}>
          Live ↗
        </a>
      )}
      <Link href={`/projects/${slug}`}
        style={{ fontSize: "11px", fontWeight: 500, color: "var(--foreground-muted)", textDecoration: "none" }}>
        View Details →
      </Link>
    </div>
  );
}

function CardMeta({ project, maxPoints = 2 }) {
  return (
    <>
      <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--foreground-muted)", margin: "0 0 3px" }}>
        {project.category}
      </p>
      <h3 style={{ fontSize: "13px", fontWeight: 600, color: "var(--foreground)", margin: "0 0 8px", lineHeight: 1.3 }}>
        {project.title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
        {project.points.slice(0, maxPoints).map((pt, i) => (
          <li key={i} style={{ display: "flex", gap: "6px", fontSize: "11px", color: "var(--foreground-muted)", lineHeight: 1.5 }}>
            <span style={{ marginTop: "6px", width: "3px", height: "3px", borderRadius: "50%", background: "var(--foreground-muted)", flexShrink: 0 }} />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ── Mobile card — image on top, content below, auto height ── */
function MobileCard({ project }) {
  return (
    <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)" }}>
      <div style={{ position: "relative", width: "100%", height: "180px" }}>
        <Image src={project.thumb} alt={project.title} fill
          style={{ objectFit: "cover", objectPosition: "top" }} sizes="100vw" />
      </div>
      <div style={{ padding: "14px 16px" }}>
        <CardMeta project={project} maxPoints={2} />
        <div style={{ marginTop: "8px" }}>
          <Pills stack={project.stack} />
          <CardLinks liveUrl={project.liveUrl} slug={project.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Tablet card — image left fixed width, content right, auto height ── */
function TabletCard({ project }) {
  return (
    <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "row" }}>
      <div style={{ position: "relative", width: "150px", flexShrink: 0, minHeight: "160px" }}>
        <Image src={project.thumb} alt={project.title} fill
          style={{ objectFit: "cover", objectPosition: "top" }} sizes="150px" />
      </div>
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, minWidth: 0 }}>
        <CardMeta project={project} maxPoints={2} />
        <div>
          <Pills stack={project.stack} max={4} />
          <CardLinks liveUrl={project.liveUrl} slug={project.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: Websure — image top, content below, fixed height ── */
function DesktopLargeCard() {
  return (
    <div style={{ height: `${WEBSURE_H}px`, borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", width: "100%", height: `${WEBSURE_IMG}px`, flexShrink: 0 }}>
        <Image src={websure.thumb} alt={websure.title} fill
          style={{ objectFit: "cover", objectPosition: "top" }} sizes="50vw" />
      </div>
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
        <CardMeta project={websure} maxPoints={3} />
        <div style={{ marginTop: "auto" }}>
          <Pills stack={websure.stack} />
          <CardLinks liveUrl={websure.liveUrl} slug={websure.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: Aranya — horizontal, fixed height ── */
function DesktopMediumCard() {
  return (
    <div style={{ height: `${ARANYA_H}px`, borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "row" }}>
      <div style={{ position: "relative", width: "160px", flexShrink: 0 }}>
        <Image src={aranya.thumb} alt={aranya.title} fill
          style={{ objectFit: "cover", objectPosition: "top" }} sizes="160px" />
      </div>
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, minWidth: 0, overflow: "hidden" }}>
        <CardMeta project={aranya} maxPoints={2} />
        <div>
          <Pills stack={aranya.stack} max={4} />
          <CardLinks liveUrl={aranya.liveUrl} slug={aranya.slug} />
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: right column cards — horizontal, fixed height ── */
function DesktopSmallCard({ project }) {
  return (
    <div style={{ height: `${RIGHT_CARD}px`, borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", display: "flex", flexDirection: "row" }}>
      <div style={{ position: "relative", width: "140px", flexShrink: 0 }}>
        <Image src={project.thumb} alt={project.title} fill
          style={{ objectFit: "cover", objectPosition: "top" }} sizes="140px" />
      </div>
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, minWidth: 0, overflow: "hidden" }}>
        <CardMeta project={project} maxPoints={2} />
        <div>
          <Pills stack={project.stack} max={3} />
          <CardLinks liveUrl={project.liveUrl} slug={project.slug} />
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const bp = useBreakpoint();

  return (
    <section id="landingProjects" style={{ padding: "80px 0", scrollMarginTop: "80px" }}>
      <Container>
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--foreground-muted)", margin: "0 0 6px" }}>
            Selected Work
          </p>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
            Featured Projects
          </h2>
        </div>

        {/* MOBILE — single column */}
        {bp === "mobile" && (
          <div style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}>
            {allCards.map((p) => <MobileCard key={p.slug} project={p} />)}
          </div>
        )}

        {/* TABLET — 2 columns, auto height */}
        {bp === "tablet" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: `${GAP}px` }}>
            {allCards.map((p) => <TabletCard key={p.slug} project={p} />)}
          </div>
        )}

        {/* DESKTOP — 2 columns, fixed heights, left 2/3 + 1/3, right 3 equal */}
        {bp === "desktop" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: `${GAP}px` }}>
            <div style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}>
              <DesktopLargeCard />
              <DesktopMediumCard />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}>
              {rightCards.map((p) => <DesktopSmallCard key={p.slug} project={p} />)}
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}
