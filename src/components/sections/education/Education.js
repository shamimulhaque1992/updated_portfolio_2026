"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FlaskConical, Calendar, Award, Code2, Binary, Coffee, Cpu, FunctionSquare, Layers, Brain, Globe, Database, Network } from "lucide-react";
import { Container } from "@/components/ui/container";
import { educationContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "./animations";

const degree = {
  level:       "Bachelor of Science (B.Sc)",
  field:       "Computer Science & Engineering",
  institute:   "Daffodil International University",
  year:        "2022",
  cgpa:        "3.74",
  outOf:       "4.00",
  major:       "Deep Learning",
  project:     "Agricultural Pest Detection Using Deep Learning",
};

const secondaryRecords = [
  { exam: "JSC", year: "2012", gpa: "4.71", outOf: "5.00", institution: "BN School & College, Chittagong" },
  { exam: "SSC", year: "2015", gpa: "4.78", outOf: "5.00", institution: "BN School & College, Chittagong" },
  { exam: "HSC", year: "2017", gpa: "3.83", outOf: "5.00", institution: "BN School & College, Chittagong" },
];

const examLabels = {
  JSC: "Junior School Certificate",
  SSC: "Secondary School Certificate",
  HSC: "Higher Secondary Certificate",
};

export function Education() {
  return (
    <section id="educationSection" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={educationContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">Education</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Academic background
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-12">

            {/* left — BSc degree */}
            <motion.div variants={fadeInLeft} className="flex flex-col gap-4 h-full">

              {/* degree card — flex-1 so it stretches to fill */}
              <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm flex flex-col gap-5">

                {/* header */}
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                  <div className="space-y-1.5">
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--primary)]">{degree.level}</p>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{degree.field}</h3>
                    <p className="text-sm text-[var(--foreground-muted)]">{degree.institute}</p>
                  </div>
                </div>

                <div className="py-2"><div className="h-px bg-[var(--border)]" /></div>

                {/* stats row */}
                <div className="flex gap-3 px-1">
                  {[
                    { value: degree.cgpa,  label: "CGPA"   },
                    { value: degree.year,  label: "Passed" },
                    { value: degree.outOf, label: "Scale"  },
                  ].map((s) => (
                    <motion.div key={s.label} variants={scaleIn} className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3 py-4 text-center">
                      <p className="text-base font-bold text-[var(--primary)]">{s.value}</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="py-2"><div className="h-px bg-[var(--border)]" /></div>

                {/* key courses */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">Key Courses</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      { icon: Code2,           name: "Programming & Problem Solving" },
                      { icon: Binary,          name: "Data Structures & Algorithms" },
                      { icon: Coffee,          name: "Java OOP" },
                      { icon: Cpu,             name: "Microprocessor & Assembly" },
                      { icon: FunctionSquare,  name: "Discrete Mathematics" },
                      { icon: Layers,          name: "Software Design & Architecture" },
                      { icon: Brain,           name: "Machine Learning" },
                      { icon: Globe,           name: "Web Development" },
                      { icon: Database,        name: "Database Systems" },
                      { icon: Network,         name: "Computer Networks" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center gap-2">
                        <c.icon className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--primary)" }} />
                        <p className="text-xs text-[var(--foreground-muted)] leading-tight">{c.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-2"><div className="h-px bg-[var(--border)]" /></div>

                {/* major */}
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">Major</p>
                    <p className="text-sm font-medium text-[var(--foreground)]">{degree.major}</p>
                  </div>
                </div>
              </div>

              {/* final year project card */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <FlaskConical className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--foreground-muted)]">Final Year Project</p>
                    <p className="text-sm font-semibold leading-relaxed text-[var(--foreground)]">{degree.project}</p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* right — secondary education timeline */}
            <motion.div variants={fadeInRight} className="flex flex-col gap-4 h-full">

              <p className="text-xs uppercase tracking-[0.3em] text-[var(--foreground-muted)]">Secondary Education</p>

              {/* timeline */}
              <div className="relative flex flex-col gap-4">

                {/* single line: from center of first dot to center of last dot
                    dot: mt-5(20px) + h-10/2(20px) = 40px from top of each row
                    row height ≈ card height. We use top/bottom anchored to dot centers */}
                <div
                  className="absolute w-px pointer-events-none"
                  style={{
                    background: "var(--border)",
                    left: "19px",
                    top: "40px",
                    bottom: "40px",
                  }}
                />

                {secondaryRecords.map((rec) => (
                  <motion.div
                    key={rec.exam}
                    variants={scaleIn}
                    className="relative flex items-start gap-4"
                  >
                    {/* dot */}
                    <div
                      className="relative z-10 mt-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-bold"
                      style={{ borderColor: "var(--primary)", background: "var(--surface)", color: "var(--primary)" }}
                    >
                      {rec.exam}
                    </div>

                    {/* card */}
                    <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm p-6 space-y-4">

                      {/* title + badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-[var(--foreground)]">{examLabels[rec.exam]}</p>
                          <p className="text-xs text-[var(--foreground-muted)]">{rec.institution}</p>
                        </div>
                        <span
                          className="shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold"
                          style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                        >
                          Science
                        </span>
                      </div>

                      <div className="h-px bg-[var(--border)]" />

                      {/* year + gpa */}
                      <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
                          <Calendar className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--primary)" }} />
                          {rec.year}
                        </span>
                        <span className="flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
                          <Award className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--primary)" }} />
                          GPA {rec.gpa} / {rec.outOf}
                        </span>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
