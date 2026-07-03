"use client";

import { useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

// useSyncExternalStore-based mount check: server snapshot = false, client snapshot = true
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isDark = mounted && resolvedTheme === "dark";

  if (!mounted) {
    return (
      <div
        className="h-[26px] w-[48px] rounded-full"
        style={{
          background: "rgba(0,119,192,0.08)",
          border: "1px solid rgba(0,119,192,0.25)",
        }}
      />
    );
  }

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.92 }}
      className="relative flex items-center rounded-full p-0.5 overflow-hidden"
      style={{
        background: isDark ? "rgba(236,223,204,0.08)" : "rgba(0,119,192,0.08)",
        border: isDark
          ? "1px solid rgba(236,223,204,0.15)"
          : "1px solid rgba(0,119,192,0.25)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* sliding pill indicator */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 bottom-0.5 w-[22px] rounded-full"
        style={{
          left: isDark ? "calc(100% - 24px)" : "2px",
          background: isDark ? "#697565" : "#0077c0",
          boxShadow: isDark
            ? "0 0 10px rgba(105,117,101,0.6)"
            : "0 0 10px rgba(0,119,192,0.5)",
        }}
      />

      {/* Sun */}
      <span className="relative z-10 flex h-[22px] w-[22px] items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun-dim" : "sun-active"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: isDark ? 0.8 : 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun
              className="h-3 w-3"
              style={{ color: isDark ? "var(--foreground-muted)" : "#fff" }}
            />
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Moon */}
      <span className="relative z-10 flex h-[22px] w-[22px] items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon-active" : "moon-dim"}
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: isDark ? 1 : 0.8 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon
              className="h-3 w-3"
              style={{ color: isDark ? "#ECDFCC" : "var(--foreground-muted)" }}
            />
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
