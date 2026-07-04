"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Facebook, Github, Linkedin, Mail, Twitter, Layers, GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroContainer, fadeIn, fadeInUp } from "@/components/sections/hero/animations";
import { siteConfig } from "@/lib/resume";

const typingSteps = [
  "AI driven",
  "full stack software engineer",
  "with more than 3 years of experience",
];

const statWords = ["SaaS", "CRM", "HRM", "Ticketing", "Ecommerce"];

export function Hero({ greeting, name, role, summary, resumeUrl }) {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [statIdx, setStatIdx] = useState(0);
  const stepRef = useRef(0);
  const charRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        const step = stepRef.current;
        const currentText = typingSteps[step];

        setDisplayText(currentText.slice(0, charRef.current + 1));
        charRef.current += 1;

        if (charRef.current >= currentText.length) {
          clearInterval(intervalRef.current);
          if (step < typingSteps.length - 1) {
            setTimeout(() => {
              stepRef.current = step + 1;
              charRef.current = 0;
              setDisplayText("");
              startTyping();
            }, 1200);
          }
        }
      }, 70);
    };

    startTyping();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setStatIdx((i) => (i + 1) % statWords.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="homeIntro" className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-36 pb-safe">
      <div className="pointer-events-none absolute right-0 top-16 hidden h-80 w-80 rounded-full bg-[var(--primary)]/5 blur-3xl sm:block" />

      <Container>
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="space-y-8">
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">
              {greeting}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-base font-medium uppercase tracking-[0.24em] text-[var(--foreground-muted)] sm:text-sm">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {name}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary)] shadow-sm">
                  {role}
                </span>
                <span className="text-sm font-medium text-[var(--foreground-muted)]">
                  Next.js · TypeScript · Express.js · PostgreSQL
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                <span>{displayText}</span>
                <span
                  className="inline-block h-8 w-1 align-middle transition-opacity"
                  style={{ backgroundColor: "var(--foreground)", opacity: cursorVisible ? 1 : 0 }}
                />
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)] font-[family-name:var(--font-roboto)] font-light tracking-wide">
                {summary}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Link href={resumeUrl} download>
                <Button size="lg" className="gap-2 rounded-full" variant="default">
                  <ArrowDown className="h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
              <a href="mailto:khandokershamimulhaque@gmail.com" className="inline-flex w-fit">
                <Button size="lg" variant="secondary" className="rounded-full gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <motion.a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="relative mx-auto flex max-w-lg justify-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-glow backdrop-blur-xl sm:p-6">
              <div className="absolute -left-8 top-8 h-20 w-20 rounded-full bg-[var(--primary)]/15 blur-2xl" />
              <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-[var(--secondary)]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#1D242B]/95" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/assets/images/profile/main_profile_image.jpg"
                  alt="Portrait of Khandoker Shamimul Haque"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-6 flex items-center justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm shadow-sm">
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Architect by craft. Full stack by choice.</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--foreground-muted)] flex items-center gap-1.5">
                    <span>Shipped</span>
                    <span className="relative inline-block w-full overflow-hidden">
                      {statWords.map((w, i) => (
                        <motion.span
                          key={w}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: i === statIdx ? 1 : 0, y: i === statIdx ? 0 : -6 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute left-0 top-0"
                        >
                          {w}
                        </motion.span>
                      ))}
                      <span className="invisible">{statWords[statIdx]}</span>
                    </span>
                  </p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                  <GitBranch className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm uppercase tracking-[0.3em] text-[var(--foreground-muted)]">
        Scroll to explore
      </div>
    </section>
  );
}
