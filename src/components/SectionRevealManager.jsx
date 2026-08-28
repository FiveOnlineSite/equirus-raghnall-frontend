"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SectionRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (["/privacy-policy", "/grievance-redressal-policy"].includes(pathname)) return;

    const main = document.querySelector("main");
    if (!main) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const registeredSections = new Set();

    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.dataset.reveal = entry.isIntersecting ? "visible" : "pending";
            });
          },
          { rootMargin: "0px 0px -40%", threshold: 0.01 },
        );

    function registerSections() {
      const revealTargets = [
        ...main.querySelectorAll("section:not(footer section)"),
        ...document.querySelectorAll("footer"),
      ];
      const heroSection = revealTargets.find(
        (target) => target.tagName === "SECTION" && !target.parentElement?.closest("section"),
      );

      revealTargets.forEach((section) => {
        if (
          (section.tagName === "SECTION" && section.parentElement?.closest("section")) ||
          registeredSections.has(section) ||
          section.hasAttribute("data-no-reveal")
        ) return;

        registeredSections.add(section);

        if (reducedMotion) {
          section.dataset.reveal = "visible";
          return;
        }

        if (section === heroSection) {
          section.dataset.revealHero = "true";
          section.dataset.reveal = "visible";
          return;
        }

        const bounds = section.getBoundingClientRect();
        const revealLine = window.innerHeight * 0.6;
        const isAlreadyVisible = bounds.top < revealLine && bounds.bottom > 0;
        section.dataset.reveal = isAlreadyVisible ? "visible" : "pending";
        observer.observe(section);
      });
    }

    registerSections();

    const mutationObserver = new MutationObserver(registerSections);
    mutationObserver.observe(main, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      registeredSections.forEach((section) => {
        section.removeAttribute("data-reveal");
        section.removeAttribute("data-reveal-hero");
      });
    };
  }, [pathname]);

  return null;
}
