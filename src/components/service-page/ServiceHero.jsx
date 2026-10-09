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
    <section className="overflow-hidden bg-[#EFF1F4]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pb-6 pt-8 text-center md:px-10 md:pb-8 md:pt-10 xl:px-20">
        <div className="mx-auto max-w-[900px]">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">
            {label}
          </p>
          <h1 className="mx-auto mt-4 max-w-[750px] text-[clamp(24px,7vw,30px)] font-semibold leading-[1.08] tracking-[-0.025em] text-[#080808] md:text-[48px]">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-[850px] text-sm leading-6 text-[#555555] md:text-base md:leading-7">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center px-6 py-1 md:py-2">
          {!activeLogo.resolved ? (
            <div
              className="h-28 w-full max-w-[480px] md:h-32"
              aria-hidden="true"
            />
          ) : activeLogo.url ? (
            <div className="relative h-28 w-full max-w-[480px] overflow-hidden md:h-32">
              <Image
                src={activeLogo.url}
                alt={activeLogo.alt}
                fill
                priority
                sizes="(max-width: 768px) 70vw, 480px"
                className="scale-[1.35] object-contain mix-blend-multiply"
              />
            </div>
          ) : null}
        </div>

        {features.length ? (
          <div
            className={`mx-auto mb-6 grid w-full gap-3 text-left md:mb-8 ${
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
