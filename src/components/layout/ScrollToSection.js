"use client";

import { useEffect } from "react";

export function ScrollToSection() {
  useEffect(() => {
    const slug = sessionStorage.getItem("scrollTo");
    if (!slug) return;
    sessionStorage.removeItem("scrollTo");

    // Wait for Lenis to init (scroll-provider runs in same tick) + sections to render
    const attempt = (tries = 0) => {
      const el = document.getElementById(slug);
      if (el) {
        // Use Lenis if available, otherwise native
        const lenis = window.__lenis;
        if (lenis) {
          lenis.scrollTo(el, { offset: -80, duration: 1.4 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (tries < 15) {
        setTimeout(() => attempt(tries + 1), 100);
      }
    };
    // Delay slightly so Lenis has time to init and NOT call scrollTo(0,0) after us
    setTimeout(() => attempt(), 300);
  }, []);

  return null;
}
