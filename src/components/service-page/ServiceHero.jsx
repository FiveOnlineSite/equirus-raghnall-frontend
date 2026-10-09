"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

export default function ServiceHero({
  label,
  title,
  description,
  imageAlt = "",
  features = [],
}) {
  const pathname = usePathname();
  const pageSlug = pathname.split("/").filter(Boolean).at(-1) || "";
  const [logo, setLogo] = useState({
    pageSlug: "",
    url: "",
    alt: imageAlt,
    resolved: false,
  });
  const activeLogo = logo.pageSlug === pageSlug
    ? logo
    : { url: "", alt: imageAlt, resolved: !pageSlug };

  useEffect(() => {
    if (!pageSlug) return;

    const controller = new AbortController();

    async function loadBanner() {
      let url = "";
      let alt = imageAlt;

      try {
        const data = await apiRequest(
          `/api/banners/${encodeURIComponent(pageSlug)}`,
          { signal: controller.signal },
        );

        if (data.banner?.logoUrl) {
          url = data.banner.logoUrl;
          alt = data.banner.altText || imageAlt;
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Unable to load service logo:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLogo({ pageSlug, url, alt, resolved: true });
        }
      }
    }

    loadBanner();

    return () => controller.abort();
  }, [imageAlt, pageSlug]);

  return (
    <section className="min-h-[calc(100svh-88px)] overflow-hidden bg-[#EFF1F4] md:min-h-[560px]">
      <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[1440px] flex-col px-5 pb-9 pt-14 text-center md:min-h-[560px] md:px-10 md:pt-16 xl:px-20">
        <div className="mx-auto max-w-[900px]">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">
            {label}
          </p>
          <h1 className="mx-auto mt-6 max-w-[750px] text-[clamp(24px,7vw,30px)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#080808] md:text-[48px]">
            {title}
          </h1>

          <p className="mx-auto mt-7 max-w-[850px] text-sm leading-6 text-[#555555] md:text-base md:leading-7">
            {description}
          </p>
        </div>

        <div className="flex min-h-32 flex-1 items-center justify-center px-6 py-8 md:min-h-40 md:py-10">
          {!activeLogo.resolved ? (
            <div
              className="h-20 w-48 animate-pulse rounded-2xl bg-white/65 md:h-28 md:w-72"
              aria-hidden="true"
            />
          ) : activeLogo.url ? (
            <div className="relative h-32 w-full max-w-[480px] md:h-44">
              <Image
                src={activeLogo.url}
                alt={activeLogo.alt}
                fill
                priority
                sizes="(max-width: 768px) 70vw, 480px"
                className="object-contain"
              />
            </div>
          ) : null}
        </div>

        {features.length ? (
          <div
            className={`mx-auto mb-10 grid w-full translate-y-3 gap-5 text-left md:mb-12 md:translate-y-0 ${
              features.length <= 3
                ? "max-w-[720px] sm:grid-cols-3"
                : "max-w-[1200px] sm:grid-cols-5"
            }`}
          >
            {features.map((feature) => (
              <div
                className={`flex items-center justify-center gap-3 ${
                  features.length <= 3
                    ? "sm:justify-center"
                    : "sm:justify-start"
                }`}
                key={feature.title}
              >
                {feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="size-6 shrink-0 object-contain sm:size-[30px]"
                    aria-hidden
                  />
                ) : null}

                <p className="text-sm font-medium leading-5 text-[#242424] sm:text-base sm:leading-6">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
