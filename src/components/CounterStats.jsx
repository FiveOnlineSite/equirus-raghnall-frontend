"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Of Experience" },
  { value: 10, suffix: "M+", label: "Satisfied Customers" },
  { value: 360, suffix: "°", label: "Risk Protection" },
  { value: 300, suffix: "+", label: "Insurance Professionals" },
];

function Counter({ value, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    const duration = 1500;
    const start = performance.now();
    let animationFrame;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, value]);

  return <strong className="text-[clamp(26px,7vw,30px)] font-semibold tabular-nums md:text-[34px]">{count}{suffix}</strong>;
}

export default function CounterStats() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { threshold: 1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#30337A] text-white" aria-label="Company statistics">
      <div className="mobile-stats-marquee py-5 text-center md:hidden">
        <div className="mobile-stats-track">
          {[...stats, ...stats].map((stat, index) => (
            <div className="w-[60vw] shrink-0" key={`${stat.label}-${index}`} aria-hidden={index >= stats.length}>
              <strong className="text-[clamp(26px,7vw,30px)] font-semibold tabular-nums">{stat.value}{stat.suffix}</strong>
              <p className="mt-4 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1440px] grid-cols-4 px-10 py-6 text-center md:grid xl:px-20">
        {stats.map((stat) => (
          <div key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} active={active} />
            <p className="mt-4 text-base font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
