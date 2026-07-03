"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Server, Smartphone, GitBranch,
  CheckCircle2, ArrowUpRight, Briefcase, Clock, FileText, Zap, Layers,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { servicesContainer, fadeInUp, fadeInLeft, fadeInRight } from "./animations";

const services = [
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend Solution",
    tagline: "Pixel-perfect interfaces that scale",
    description:
      "End-to-end frontend architecture using Next.js, React, and TypeScript. From component systems and design tokens to performance optimization — I build UIs that teams can grow with.",
    deliverables: [
      "Next.js App Router with Server Components & Actions",
      "Reusable component systems with Tailwind CSS / shadcn/ui",
      "State management with Redux Toolkit or RTK Query",
      "Performance: code splitting, lazy loading, caching",
      "RBAC-driven UI access control for multi-tenant apps",
      "Pixel-perfect Figma-to-code implementation",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui"],
    modes: {
      fulltime:    { title: "Full Time",    desc: "Embed into your team — own the frontend architecture, lead decisions, and ship end-to-end across the entire product." },
      parttime:    { title: "Part Time",    desc: "Steady feature delivery and architecture guidance on a structured part-time basis." },
      contractual: { title: "Contractual", desc: "A defined UI build or component system — clear scope, clear timeline, handed over clean." },
      freelance:   { title: "Freelance",   desc: "MVPs, feature sprints, or UI audits — scoped tight and shipped fast." },
    },
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Solution",
    tagline: "APIs and systems built to last",
    description:
      "Scalable backend services with Express.js, PostgreSQL, and Prisma. Clean MVC architecture, type-safe routes, and schemas designed for production — not just to work, but to last.",
    deliverables: [
      "REST API design with Express.js and TypeScript",
      "PostgreSQL schema design, migrations, and query optimization",
      "Prisma ORM for type-safe, schema-first database access",
      "Auth — session-based, JWT, and RBAC middleware",
      "GraphQL API consumption and integration",
      "MVC architecture with clean separation of concerns",
    ],
    stack: ["Express.js", "PostgreSQL", "Prisma", "TypeScript", "GraphQL", "REST"],
    modes: {
      fulltime:    { title: "Full Time",    desc: "Own the API layer, database design, and infrastructure as a fully integrated team member." },
      parttime:    { title: "Part Time",    desc: "Reliable backend support for ongoing API work, schema evolution, or new service development." },
      contractual: { title: "Contractual", desc: "Scoped backend delivery — API design, database schema, auth system, or a full service. No ambiguity." },
      freelance:   { title: "Freelance",   desc: "REST APIs, database setup, or auth flows — fast turnaround, well-structured output." },
    },
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Solution",
    tagline: "Cross-platform mobile experiences",
    description:
      "Cross-platform mobile apps with React Native and Progressive Web Apps with Next.js. From native mobile builds to offline-capable PWAs — delivering quality experiences across every device.",
    deliverables: [
      "React Native apps for iOS and Android",
      "Progressive Web Apps (PWA) with offline support",
      "Mobile-first responsive layouts with Tailwind CSS",
      "Touch-optimized interactions and smooth animations",
      "Performance-tuned for mobile networks and devices",
      "Cross-browser and cross-device compatibility",
    ],
    stack: ["React Native", "Next.js", "PWA", "Tailwind CSS", "Framer Motion", "TypeScript"],
    modes: {
      fulltime:    { title: "Full Time",    desc: "Own the full mobile product — React Native app or PWA — from architecture through to app store delivery." },
      parttime:    { title: "Part Time",    desc: "Steady progress on your mobile app or PWA with regular feature delivery and performance improvements." },
      contractual: { title: "Contractual", desc: "A complete mobile build — React Native or PWA — scoped, delivered, and ready to ship." },
      freelance:   { title: "Freelance",   desc: "Responsive overhauls, PWA setup, React Native screens, or mobile UX improvements — shipped fast." },
    },
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps Solution",
    tagline: "Ship with confidence",
    description:
      "CI/CD pipelines, containerized environments, and cloud deployments. From GitHub Actions to DigitalOcean and AWS — I set up infrastructure that lets your team ship without friction.",
    deliverables: [
      "CI/CD pipelines with GitHub Actions",
      "Docker containerization and Compose setups",
      "Vercel deployments with preview environments",
      "DigitalOcean Droplet and App Platform configuration",
      "AWS basics — S3, EC2, environment and SSL config",
      "Environment management across dev, staging, and production",
    ],
    stack: ["GitHub Actions", "Docker", "Vercel", "DigitalOcean", "AWS", "CI/CD"],
    modes: {
      fulltime:    { title: "Full Time",    desc: "Maintain and evolve your entire CI/CD pipeline, infrastructure, and deployment strategy full-time." },
      parttime:    { title: "Part Time",    desc: "Regular pipeline management, deployment monitoring, and infrastructure improvements on a set schedule." },
      contractual: { title: "Contractual", desc: "A complete infra setup — CI/CD, Docker, cloud deployment — scoped, built, and handed over." },
      freelance:   { title: "Freelance",   desc: "One-off DevOps work — set up a pipeline, Dockerize an app, or configure a cloud deployment. Fast and clean." },
    },
  },
];

const modeKeys = ["fulltime", "parttime", "contractual", "freelance"];
const modeIcons = { fulltime: Briefcase, parttime: Clock, contractual: FileText, freelance: Zap };

const topTabs = [
  { id: "details",    label: "Service Details", icon: Layers    },
  { id: "engagement", label: "Engagement Mode",  icon: Briefcase },
];

export function Services() {
  const [activeService, setActiveService] = useState("frontend");
  const [activeTab, setActiveTab]         = useState("details");

  const active = services.find((s) => s.id === activeService);
  const Icon   = active.icon;

  const switchService = (id) => {
    setActiveService(id);
    setActiveTab("details");
  };

  return (
    <section id="servicesSection" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={servicesContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">Services</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              What I can build for you
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-12">

            {/* left — service side tabs */}
            <motion.div variants={fadeInLeft} className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
              {services.map((svc) => {
                const SvcIcon  = svc.icon;
                const isActive = svc.id === activeService;
                return (
                  <button
                    key={svc.id}
                    onClick={() => switchService(svc.id)}
                    className="relative shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:w-full"
                    style={{
                      borderColor: isActive ? "var(--primary)" : "var(--border)",
                      background:  isActive ? "var(--primary)" + "1a" : "var(--surface)",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceTab"
                        className="absolute inset-0 rounded-2xl"
                        style={{ background: "var(--primary)", opacity: 0.08 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className="relative mb-2.5 flex items-center gap-2.5">
                      <SvcIcon
                        className="h-4 w-4 transition-colors duration-300"
                        style={{ color: isActive ? "var(--primary)" : "var(--foreground-muted)" }}
                      />
                      <p
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                      >
                        {svc.title}
                      </p>
                    </div>
                    <p className="relative text-xs text-[var(--foreground-muted)] leading-5">{svc.tagline}</p>
                  </button>
                );
              })}
            </motion.div>

            {/* right — top tabs (outside) + card below */}
            <motion.div variants={fadeInRight} className="min-w-0 flex flex-col gap-4">

              {/* top tabs — outside the card, same style as side tabs */}
              <div className="flex gap-3">
                {topTabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  const TabIcon  = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative flex items-center gap-2.5 rounded-2xl border px-5 py-4 text-left transition-all duration-300"
                      style={{
                        borderColor: isActive ? "var(--primary)" : "var(--border)",
                        background:  isActive ? "var(--primary)" + "1a" : "var(--surface)",
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTopTab"
                          className="absolute inset-0 rounded-2xl"
                          style={{ background: "var(--primary)", opacity: 0.08 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <TabIcon
                        className="relative h-4 w-4 transition-colors duration-300"
                        style={{ color: isActive ? "var(--primary)" : "var(--foreground-muted)" }}
                      />
                      <span
                        className="relative text-sm font-semibold transition-colors duration-300"
                        style={{ color: isActive ? "var(--primary)" : "var(--foreground)" }}
                      >
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* card — below the tabs */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService + activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm overflow-y-auto max-h-[520px] scrollbar-thin"
                >
                  {activeTab === "details" ? (
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon className="h-6 w-6 shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-[var(--foreground)]">{active.title}</h3>
                          <p className="text-sm leading-6 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light">
                            {active.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {active.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-0.5 text-xs font-medium text-[var(--foreground-muted)] transition-colors hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="h-px bg-[var(--border)]" />
                      <div className="space-y-2.5">
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)]">What&apos;s included</p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {active.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm leading-5 text-[var(--foreground-muted)]">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--primary)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 space-y-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)]">How we can work together</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {modeKeys.map((key) => {
                          const ModeIcon = modeIcons[key];
                          const mode     = active.modes[key];
                          return (
                            <div
                              key={key}
                              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all duration-300 hover:border-[var(--primary)]/40"
                            >
                              <span
                                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{ background: "var(--primary)" }}
                              />
                              <div className="flex items-center gap-2 mb-2">
                                <ModeIcon className="h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
                                <span className="text-sm font-semibold text-[var(--foreground)]">{mode.title}</span>
                              </div>
                              <p className="text-xs leading-5 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light">
                                {mode.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                        <p className="text-xs text-[var(--foreground-muted)]">Not sure which fits? Let&apos;s figure it out.</p>
                        <a
                          href="#contactSection"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[var(--primary)] px-4 py-2 text-xs font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--background)] ml-4"
                        >
                          Let&apos;s talk
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
