"use client";

import { useEffect, useId, useState } from "react";

export default function ServiceCoverageGrid({
  label,
  title,
  items = [],
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const titleId = useId();
  const descriptionId = useId();
  const getPreviewDescription = (item) =>
    item.description.match(/^.*?[.!?](?:\s|$)/)?.[0].trim() || item.description;
  const getFullDescription = (item) =>
    item.fullDescription ||
    `${item.description} Our specialists review the relevant exposures, policy terms, limits, exclusions, and supporting requirements to ensure this area of cover is clearly structured around your needs.`;

  useEffect(() => {
    if (!selectedItem) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <section className="bg-[#F8F9FF] py-8 md:pb-16 md:pt-6">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">{label}</p>
            <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">{title}</h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.title} className="group flex min-h-[190px] flex-col rounded-xl border border-[#E2E2E2] bg-white p-5 shadow-[0_5px_18px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#0A4E08] hover:bg-[#0A4E08] hover:shadow-[0_14px_35px_rgba(10,78,8,0.18)] md:p-6">
                <h3 className="text-lg font-semibold leading-6 text-[#242424] transition-colors group-hover:text-white sm:text-xl sm:leading-7">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#555555] transition-colors group-hover:text-white/90 md:text-base">{getPreviewDescription(item)}</p>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="mt-auto inline-flex cursor-pointer self-start pt-4 text-sm font-semibold text-[#376E00] decoration-1 underline-offset-4 group-hover:text-white hover:underline hover:decoration-white"
                >
                  Know more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/55 p-5 backdrop-blur-[2px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedItem(null);
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-[#555555] transition hover:bg-[#F1F3F0] hover:text-[#0A4E08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A4E08]"
              aria-label="Close details"
            >
              &times;
            </button>
            <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00]">Coverage details</p>
            <h3 id={titleId} className="mt-3 pr-10 text-2xl font-semibold text-[#111111] sm:text-[28px]">
              {selectedItem.title}
            </h3>
            <p id={descriptionId} className="mt-5 text-base leading-7 text-[#555555]">
              {getFullDescription(selectedItem)}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
