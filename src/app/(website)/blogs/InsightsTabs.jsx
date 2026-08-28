"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["Blogs", "Risk Reports", "Market Updates", "Case Studies"];

const tabSlugs = {
  Blogs: [
    "understanding-do-liability-india-corporate-governance",
    "cyber-insurance-india-why-every-business-needs-it-2026",
    "why-every-growing-business-needs-insurance",
    "building-better-employee-benefits-programs",
    "building-resilience-before-risks-become-reality",
    "why-risk-management-deserves-board-attention",
    "why-smart-businesses-review-coverage-annually",
    "getting-to-know-todays-insurance-scene",
    "insurance-mistakes-that-cost-businesses-millions",
    "the-hidden-cost-of-being-underinsured",
  ],
  "Risk Reports": [
    "building-resilience-before-risks-become-reality",
    "why-risk-management-deserves-board-attention",
  ],
  "Market Updates": [
    "why-smart-businesses-review-coverage-annually",
    "getting-to-know-todays-insurance-scene",
  ],
  "Case Studies": [
    "insurance-mistakes-that-cost-businesses-millions",
    "the-hidden-cost-of-being-underinsured",
  ],
};

export default function InsightsTabs({ items }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const visibleItems = tabSlugs[activeTab]
    .map((slug) => items.find((item) => item.slug === slug))
    .filter(Boolean);

  function handleKeyDown(event, currentIndex) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight")
      nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    setActiveTab(tabs[nextIndex]);
    document.getElementById(`insights-tab-${nextIndex}`)?.focus();
  }

  return (
    <>
      <div
        aria-label="Insight categories"
        className="mb-12 flex gap-4 overflow-x-auto sm:gap-6 md:gap-10"
        role="tablist"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;

          return (
            <button
              aria-controls="insights-tab-panel"
              aria-selected={isActive}
              className={`shrink-0 border-b-[3px] px-2.5 py-3 text-sm font-semibold transition-colors md:text-base ${
                isActive
                  ? "border-[#2c2f71] text-[#2c2f71]"
                  : "border-transparent text-[#363636] hover:text-[#2c2f71]"
              }`}
              id={`insights-tab-${index}`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`insights-tab-${tabs.indexOf(activeTab)}`}
        className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-4"
        id="insights-tab-panel"
        role="tabpanel"
      >
        {visibleItems.map((item) => (
          <Link
            className="group block min-w-0"
            href={`/blogs/${item.slug}`}
            key={item.slug}
          >
            <Image
              alt=""
              className="aspect-[305/193] w-full rounded object-cover"
              height={193}
              src={item.image}
              width={305}
            />
            <div className="mt-2 flex justify-between text-xs leading-5 text-[#3d3d3d] md:text-sm">
              <time dateTime="2026-07-11">11 Jul</time>
              <span>2 min read</span>
            </div>
            <h2 className="mt-2 text-base font-semibold leading-6 text-[#080808] transition-colors group-hover:text-[#0a4e08] md:text-lg md:leading-7">
              {item.title}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}
