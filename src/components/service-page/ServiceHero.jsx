"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

export default function ServiceHero({
  label,
  title,
  description,
  image,
  imageAlt = "",
  features = [],
  imagePosition = "center center",
}) {
  const pathname = usePathname();
  const [bannerImage, setBannerImage] = useState("");
  const [bannerAlt, setBannerAlt] = useState(imageAlt);
  const [bannerResolved, setBannerResolved] = useState(false);

  useEffect(() => {
    const pageSlug = pathname.split("/").filter(Boolean).at(-1);

    setBannerImage("");
    setBannerAlt(imageAlt);
    setBannerResolved(false);

    if (!pageSlug) {
      setBannerImage(image);
      setBannerResolved(true);
      return;
    }

    const controller = new AbortController();

    async function loadBanner() {
      try {
        const data = await apiRequest(
          `/api/banners/${encodeURIComponent(pageSlug)}`,
          { signal: controller.signal },
        );

        if (data.banner?.imageUrl) {
          setBannerImage(data.banner.imageUrl);
          setBannerAlt(data.banner.altText || imageAlt);
        } else {
          setBannerImage(image);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Unable to load service banner:", error);
          setBannerImage(image);
        }
      } finally {
        if (!controller.signal.aborted) {
          setBannerResolved(true);
        }
      }
    }

    loadBanner();

    return () => controller.abort();
  }, [image, imageAlt, pathname]);

  return (
    <section className="relative isolate min-h-[calc(100svh-88px)] overflow-hidden bg-[#F7F8FA] md:min-h-[560px]">
      {!bannerResolved ? (
        <div
          className="absolute inset-0 -z-20 animate-pulse bg-[#EEF0F3]"
          aria-hidden="true"
        />
      ) : null}
      {bannerResolved && bannerImage ? (
        <Image
          src={bannerImage}
          alt={bannerAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
          style={{ objectPosition: imagePosition }}
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-white/10" aria-hidden="true" />

      <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[1440px] flex-col px-5 pb-9 pt-14 text-center md:min-h-[560px] md:px-10 md:pt-16 xl:px-20">
        <div className="mx-auto max-w-[650px]">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">{label}</p>
          <h1 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#080808] md:text-[48px]">{title}</h1>
          <p className="mx-auto mt-7 max-w-[530px] text-sm leading-6 text-[#555555] md:text-base md:leading-7">{description}</p>
        </div>

        {features.length ? (
          <div className="mx-auto mb-10 mt-auto grid w-full max-w-[760px] translate-y-3 gap-3 text-left sm:grid-cols-3 md:mb-12 md:translate-y-0 md:gap-5 md:pt-24">
            {features.map((feature) => (
              <div className="flex items-center justify-center gap-4 sm:justify-start" key={feature.title}>
                {feature.icon ? (
                  <Image src={feature.icon} alt="" width={30} height={30} className="size-6 shrink-0 object-contain sm:size-[30px]" aria-hidden />
                ) : null}
                <p className="max-w-[160px] text-sm font-medium leading-5 text-[#242424] sm:text-base sm:leading-6">{feature.title}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
