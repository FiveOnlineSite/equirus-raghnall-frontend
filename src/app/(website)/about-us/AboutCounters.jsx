"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Of Experience" },
  { value: 10, suffix: "M+", label: "Satisfied Customers" },
  { value: 360, suffix: "°", label: "Risk Protection" },
  { value: 300, suffix: "+", label: "Insurance Professionals" },
];

function AnimatedNumber({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function AboutCounters() {
  return (
    <section className="bg-white pb-8 md:pb-20" aria-label="Company statistics">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="mobile-stats-marquee pt-12 text-center md:hidden">
          <div className="mobile-stats-track">
            {[...stats, ...stats].map((stat, index) => (
              <div className="w-[60vw] shrink-0 pb-2" key={`${stat.label}-${index}`} aria-hidden={index >= stats.length}>
                <p className="text-[28px] font-semibold leading-none text-[#0A4E08]">
                  {stat.value}{stat.suffix}
                </p>
                <p className="mt-5 text-sm text-[#555555]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden grid-cols-4 gap-x-8 pt-14 md:grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[32px] font-semibold leading-none text-[#0A4E08]">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-5 text-base text-[#555555]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
