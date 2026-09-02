"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["Blogs", "Risk Reports", "Market Updates", "Case Studies"];

function formatBlogDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
  }).format(new Date(value));
}

export default function InsightsTabs({ items }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const visibleItems = items.filter((item) => item.category === activeTab);

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
              {item.createdAt && (
                <time dateTime={item.createdAt}>{formatBlogDate(item.createdAt)}</time>
              )}
              {item.readTime && <span>{item.readTime} read</span>}
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
