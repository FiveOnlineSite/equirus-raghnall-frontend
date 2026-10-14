"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaCar,
  FaChartLine,
  FaFileContract,
  FaLayerGroup,
  FaGears,
  FaGlobe,
  FaHeartPulse,
  FaHouse,
  FaLaptopCode,
  FaLock,
  FaMoneyBillTrendUp,
  FaPlane,
  FaSackDollar,
  FaScaleBalanced,
  FaShieldHalved,
  FaShip,
  FaStethoscope,
  FaTruck,
  FaUmbrella,
  FaUserShield,
  FaUserLock,
  FaNetworkWired,
  FaLifeRing,
  FaUsers,
  FaBolt,
  FaStopwatch,
  FaChessKnight,
  FaCloudBolt,
  FaHandshake,
  FaPuzzlePiece,
  FaClipboardCheck,
  FaLink,
  FaCoins,
  FaHandHoldingHeart,
  FaToolbox,
  FaMicrochip,
  FaDollarSign,
  FaPiggyBank,
  FaSuitcase
} from "react-icons/fa6";
import { FaExchangeAlt, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";
import { apiRequest } from "@/lib/api";

const featureIconRules = [
  [/cyber|data|digital|technology|privacy|extortion|fraud|crime/i, FaLaptopCode],
  [/lock|theft/i, FaLock],
  [/health|medical|hospital|illness|treatment|recovery/i, FaHeartPulse],
  [/doctor|wellness/i, FaStethoscope],
  [/aviation|aircraft|flight/i, FaPlane],
  [/marine|hull|ship/i, FaShip],
  [/vehicle|fleet|car|motor|ev|battery/i, FaCar],
  [/transport|cargo|logistics/i, FaTruck],
  [/property|home|house|residential/i, FaHouse],
  [/employee|employer|family|group|team|talent|retention/i, FaUsers],
  [/legal|liability|defence|defense|regulatory|third-party/i, FaScaleBalanced],
  [/financial|money|funding|gratuity|retirement|pension|sum insured/i, FaSackDollar],
  [/trade|contract|warrant|bond/i, FaFileContract],
  [/global|worldwide|international/i, FaGlobe],
  [/machinery|equipment|breakdown|repair/i, FaGears],
  [/business|company|management|corporate|enterprise/i, FaBuilding],
  [/growth|analytics|optimisation|optimization|assessment/i, FaChartLine],
  [/accident|personal|individual/i, FaUserShield],
  [/travel|trip/i, FaUmbrella],
];

// Page components pass icon names as strings because this Client Component
// cannot receive a React component function from a Server Component.
const featureIcons = {
  FaBuilding,
  FaCar,
  FaChartLine,
  FaExchangeAlt,
  FaFileContract,
  FaGears,
  FaGlobe,
  FaHeartPulse,
  FaHouse,
  FaLaptopCode,
  FaLock,
  FaMoneyBillTrendUp,
  FaLayerGroup,
  FaHandHoldingHeart,
  FaPlane,
  FaSackDollar,
  FaMicrochip,
  FaScaleBalanced,
  FaShieldAlt,
  FaSuitcase,
  FaShieldHalved,
  FaShip,
  FaCoins,
  FaStethoscope,
  FaTachometerAlt,
  FaTruck,
  FaUmbrella,
  FaUserShield,
  FaUsers,
  FaBolt,
  FaStopwatch,
  FaChessKnight,
  FaCloudBolt,
  FaHandshake,
  FaPuzzlePiece,
  FaUserLock,
  FaNetworkWired,
  FaLifeRing,
  FaClipboardCheck,
  FaLink,
  FaToolbox,
  FaDollarSign,
  FaPiggyBank
};

function getFeatureIcon(title, iconName) {
  if (iconName && featureIcons[iconName]) {
    return featureIcons[iconName];
  }

  return featureIconRules.find(([pattern]) => pattern.test(title))?.[1] || FaShieldHalved;
}

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
    <section className="min-h-[calc(100dvh-88px)] overflow-hidden bg-[#EFF1F4]">
      <div className="mx-auto flex min-h-[calc(100dvh-88px)] max-w-[1440px] flex-col justify-center px-5 pb-6 pt-8 text-center md:px-10 md:pb-8 md:pt-10 xl:px-20">
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
            {features.map((feature) => {
              const FeatureIcon = getFeatureIcon(feature.title, feature.iconName);

              return (
                <div
                  className={`flex items-center justify-center gap-3 ${
                    features.length <= 3
                      ? "sm:justify-center"
                      : "sm:justify-start"
                  }`}
                  key={feature.title}
                >
                  <FeatureIcon
                    className="size-5 shrink-0 text-[#30337A] sm:size-6"
                    aria-hidden
                  />

                  <p className="text-sm font-medium leading-5 text-[#242424] sm:text-base sm:leading-6">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
