"use client";

import Image from "next/image";
import { useState } from "react";

export default function FaqSection({
  eyebrow = "Frequently Asked Questions",
  title,
  items,
  defaultOpen = 0,
  compactTop = false,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <section className={`bg-[#F8F9FF] pb-16 md:pb-20 ${compactTop ? "pt-6 md:pt-12" : "pt-16 md:pt-20"}`}>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:px-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">{eyebrow}</p>
          <h2 className="mt-6 max-w-[390px] text-[clamp(24px,7vw,30px)] font-semibold leading-[1.28] tracking-[-0.02em] text-[#242424] md:text-[32px]">
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article className="overflow-hidden rounded-[4px] bg-white shadow-[0_3px_14px_rgba(20,20,20,0.05)]" key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex min-h-[58px] w-full items-center justify-between gap-5 px-5 py-4 text-left text-base font-semibold text-[#181818] md:px-6 md:text-lg"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{index + 1}. {item.question}</span>
                    <Image
                      src="/assets/shared/faq-chevron.svg"
                      alt=""
                      width={20}
                      height={20}
                      className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-[#555555] md:px-11 md:pb-6 md:text-base">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
