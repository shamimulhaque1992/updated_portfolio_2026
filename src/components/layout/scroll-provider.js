"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Pages where Lenis smooth scroll should be active
const SMOOTH_SCROLL_PATHS = ["/"];

export function ScrollProvider({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const shouldSmooth = SMOOTH_SCROLL_PATHS.includes(pathname);

    // Tear down any existing instance first
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    if (!shouldSmooth) return;

    // Only reset scroll if there's no pending section target from another page
    if (!sessionStorage.getItem("scrollTo")) {
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: "vertical",
      syncTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    };

    document.addEventListener("click", handleAnchorClick);

    function raf(time) {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    }
    frameRef.current = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
