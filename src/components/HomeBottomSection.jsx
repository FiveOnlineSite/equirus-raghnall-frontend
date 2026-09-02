"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { apiRequest } from "@/lib/api";

const fallbackContent = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse...",
};

export default function HomeBottomSection() {
  const [content, setContent] = useState(fallbackContent);
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContent() {
      try {
        const data = await apiRequest("/api/home/bottom-section", { cache: "no-store", signal: controller.signal });
        if (data?.success && data.bottomSection?.description) {
          setContent(data.bottomSection);
        }
      } catch (error) {
        if (error.name !== "AbortError") console.error("Home bottom section fetch error:", error);
      }
    }

    loadContent();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const description = descriptionRef.current;
    if (!description) return undefined;

    function updateOverflowState() {
      if (description.dataset.expanded === "true") return;
      setCanExpand(description.scrollHeight > description.clientHeight + 1);
    }

    const frameId = window.requestAnimationFrame(updateOverflowState);
    const observer = new ResizeObserver(updateOverflowState);
    observer.observe(description);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [content.description]);

  return (
    <section className="bg-white pb-14 pt-4">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start px-5 text-left md:px-10 xl:px-20">
        <Image src="/assets/shared/raghnall-logo.png" alt="Equirus Raghnall" width={200} height={200} className="h-[180px] w-[180px] object-contain" />
        <p
          ref={descriptionRef}
          id="home-bottom-description"
          data-expanded={isExpanded}
          className={`whitespace-pre-line text-sm leading-7 text-[#555555] md:text-base ${
            isExpanded ? "" : "line-clamp-4"
          }`}
        >
          {content.description}
        </p>
        {canExpand && (
          <button
            type="button"
            aria-controls="home-bottom-description"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="mt-5 inline-flex text-base font-semibold text-[#0A4E08] transition"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
    </section>
  );
}
