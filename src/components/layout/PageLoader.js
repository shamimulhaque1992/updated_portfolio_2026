"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Phase 0: show initials  Phase 1: expand to full name  Phase 2: type role  Phase 3: exit
const WORDS = [
  { initial: "K", full: "handoker" },
  { initial: "S", full: "hamimul" },
  { initial: "H", full: "aque" },
];
const ROLE = "AI Driven Full Stack Software Engineer";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0); // 0=initials, 1=expand, 2=role
  const [roleText, setRoleText] = useState("");
  const [progress, setProgress] = useState(0);

  // Phase timeline
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);   // expand after 700ms
    const t2 = setTimeout(() => setPhase(2), 1400);  // start typing role
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Type role text in phase 2
  useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setRoleText(ROLE.slice(0, i));
      if (i >= ROLE.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, [phase]);

  // Progress bar over 2.8s total then dismiss
  useEffect(() => {
    const start = performance.now();
    const duration = 2800;
    let raf;
    const tick = (now) => {
      const p = Math.min(((now - start) / duration) * 100, 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
          style={{ background: "var(--background)" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "var(--primary)", opacity: 0.07 }}
          />

          {/* name row */}
          <div className="flex items-baseline gap-3">
            {WORDS.map(({ initial, full }, wi) => (
              <div key={wi} className="flex items-baseline overflow-hidden">
                {/* initial letter — always visible, primary color */}
                <span
                  className="text-5xl sm:text-6xl font-semibold tracking-tight leading-none"
                  style={{ color: "var(--primary)" }}
                >
                  {initial}
                </span>

                {/* rest of word — slides in on phase 1 */}
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={
                    phase >= 1
                      ? { width: "auto", opacity: 1 }
                      : { width: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: wi * 0.08, ease: [0.33, 1, 0.68, 1] }}
                  className="text-5xl sm:text-6xl font-semibold tracking-tight leading-none overflow-hidden whitespace-nowrap"
                  style={{ color: "var(--foreground)" }}
                >
                  {full}
                </motion.span>
              </div>
            ))}
          </div>

          {/* role typing */}
          <div className="mt-4 h-5 flex items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "var(--foreground-muted)" }}
            >
              {roleText}
              {/* blinking cursor */}
              {roleText.length < ROLE.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="inline-block ml-0.5 w-[2px] h-3 align-middle rounded-full"
                  style={{ background: "var(--primary)" }}
                />
              )}
            </motion.p>
          </div>

          {/* progress bar */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-36 h-[2px] rounded-full overflow-hidden"
            style={{ background: "var(--border)" }}
          >
            <div
              className="h-full rounded-full transition-none"
              style={{ width: `${progress}%`, background: "var(--primary)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
