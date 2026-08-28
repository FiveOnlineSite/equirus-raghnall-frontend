"use client";

import Image from "next/image";

export default function HomeHeroVisual() {
  return (
    <div className="relative h-[300px] w-full max-w-[450px] sm:h-[400px] sm:max-w-[600px] lg:h-[480px] lg:w-[520px] lg:max-w-none lg:flex-none" aria-hidden="true">
      <div className="home-hero-globe absolute left-[13.5%] top-[-6%] z-10 aspect-square w-[68%]">
        <Image src="/assets/home/globe.png" alt="" fill priority sizes="(max-width: 1024px) 80vw, 470px" className="object-contain" />
      </div>
      <div className="home-hero-palm absolute bottom-0 right-[-22%] z-20 aspect-[3/2] w-[150%]">
        <Image src="/assets/home/palm.png" alt="" fill priority sizes="(max-width: 1024px) 100vw, 710px" className="object-contain object-right-bottom" />
      </div>
    </div>
  );
}

export function MobileHomeHeroVisual() {
  return (
    <div className="relative aspect-[1/0.9] w-full max-w-[420px]" aria-hidden="true">
      <div className="home-hero-globe absolute left-[19%] top-[8%] z-10 aspect-square w-[62%]">
        <Image src="/assets/home/globe.png" alt="" fill priority sizes="(max-width: 640px) 62vw, 260px" className="object-contain" />
      </div>
      <div className="home-hero-palm absolute bottom-0 right-[-10%] z-20 aspect-[3/2] w-[120%]">
        <Image src="/assets/home/palm.png" alt="" fill priority sizes="(max-width: 640px) 120vw, 504px" className="object-contain object-right-bottom" />
      </div>
    </div>
  );
}
