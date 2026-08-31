import Image from "next/image";
import Link from "next/link";
import CounterStats from "@/components/CounterStats";
import FaqSection from "@/components/FaqSection";
import HomeHeroVisual, { MobileHomeHeroVisual } from "@/components/HomeHeroVisual";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import HomeBottomSection from "@/components/HomeBottomSection";

const services = [
  {
    title: "Private Clients",
    description:
      "Tailored insurance solutions designed to protect wealth, lifestyle, and long-term financial security.",
    icon: "/assets/home/client.svg",
    href: "/private-clients/health-insurance",
  },
  {
    title: "Commercial",
    description:
      "Strategic insurance solutions designed to protect businesses, assets, and operations from risks.",
    icon: "/assets/home/commercial.svg",
    href: "/commercial/group-health-insurance",
  },
  {
    title: "Reinsurance",
    description:
      "Specialized reinsurance solutions designed to optimize risk transfer and strengthen financial stability.",
    icon: "/assets/home/reinsurance.svg",
    href: "/reinsurance/transactional-risk-covers",
  },
];

const serviceSnapshots = [
  {
    category: "Private",
    title: "Health Insurance",
    description:
      "Individual and family health plans with access to premium hospital networks and international medical coverage.",
    href: "/private-clients/health-insurance",
  },
  {
    category: "Private",
    title: "Life & PCG",
    description:
      "Wealth-protective strategies and private client group coverage for ultra HNI families and business principals.",
    href: "/private-clients/high-net-worth-solutions",
  },
  {
    category: "Private",
    title: "Auto Insurance",
    description:
      "Comprehensive motor coverage for personal and fleet vehicles with dedicated claims support and accident assistance.",
    href: "/private-clients/private-car-insurance",
  },
  {
    category: "Commercial",
    title: "Employee Benefits",
    description:
      "Group health, life, and wellness programs designed to attract, retain, and protect your workforce.",
    href: "/commercial/group-health-insurance",
  },
  {
    category: "Commercial",
    title: "Liability & Cyber",
    description:
      "D&O, E&O, EPL, and cyber fidelity solutions for the modern regulatory and threat environment.",
    href: "/commercial/cyber-crime-insurance",
  },
  {
    category: "Commercial",
    title: "Treaty & Facultative",
    description:
      "Structured reinsurance placements via our global network across Lloyd's, European, and Asian markets.",
    href: "/reinsurance/transactional-risk-covers",
  },
];

const heroProducts = [
  {
    category: "Commercial",
    title: "Cyber & Crime Insurance",
    description:
      "Protect your business against cyberattacks, data breaches, fraud, and crime-related financial losses with coverage tailored to evolving digital risks.",
    image: "/assets/home/solution-auto.png",
    href: "/commercial/cyber-crime-insurance",
  },
  {
    category: "Private Clients",
    title: "Private Client Group",
    description:
      "Bespoke protection for high-value homes, collections, vehicles, travel, and personal liabilities, coordinated around your lifestyle and assets.",
    image: "/assets/home/solution-benefits.png",
    href: "/private-clients/private-client-group",
  },
  {
    category: "Commercial",
    title: "Surety Bond",
    description:
      "Strengthen contractual commitments with surety bonds that provide beneficiaries financial assurance without tying up traditional bank limits.",
    image: "/assets/home/solution-health.png",
    href: "/commercial/surety-bonds",
  },
];

const homeFaqs = [
  {
    question: "What types of insurance solutions do you offer?",
    answer:
      "We offer private client, commercial, employee benefit, and reinsurance solutions tailored to individual and business requirements.",
  },
  {
    question: "How do you help choose the right insurance plan?",
    answer:
      "We assess your specific needs, risk exposure, and long-term goals to recommend solutions that are structured, relevant, and not product-driven.",
  },
  {
    question: "Do you assist with claims as well?",
    answer:
      "Yes. Our claim advocacy team supports you throughout documentation, coordination, negotiation, and settlement.",
  },
  {
    question: "Can I customize my insurance coverage?",
    answer:
      "Yes. We design coverage around your risks and priorities, combining suitable policies and limits instead of relying on a one-size-fits-all package.",
  },
  {
    question: "How do I get Started?",
    answer:
      "Contact our advisory team to schedule an initial consultation. We will review your requirements and recommend the appropriate next steps.",
  },
];

export default function Home() {
  return (
    <>
      
      <main>
        <section className="min-h-[570px] bg-white">
          <div className="mx-auto grid min-h-[570px] max-w-[1440px] items-center gap-4 overflow-hidden px-5 pb-0 pt-10 md:gap-10 md:px-10 md:pt-12 lg:grid-cols-[0.9fr_1.1fr] xl:px-20">
            <div className="min-w-0 max-w-[600px]">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">
                End-to-End Insurance &amp; Risk Solutions
              </p>
              <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#0d0d0d] sm:text-5xl sm:leading-[1.02] md:text-[48px]">
                <span className="block">Not Just Coverage</span>
                <span className="block lg:whitespace-nowrap">Complete Risk Strategy.</span>
              </h1>
              <p className="mt-8 max-w-[520px] text-[15px] leading-7 text-[#555555] sm:text-base">
                We partner with individuals, businesses, and institutions to
                structure insurance that protects, performs, and scales with
                evolving risk landscapes.
              </p>
              <Link
                href="#services"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#0A4E08] px-8 text-base font-semibold text-white transition hover:opacity-90 md:mt-10"
              >
                Visit Our Services
              </Link>

              <div className="mt-10 flex items-center gap-3 sm:gap-5 md:mt-8">
                <div className="relative h-10 w-[100px]" aria-hidden="true">
                  {[
                    { src: "/assets/home/trusted-avatar-1.png", left: 0 },
                    { src: "/assets/home/trusted-avatar-2.png", left: 20 },
                    { src: "/assets/home/trusted-avatar-3.png", left: 40 },
                    { src: "/assets/home/trusted-avatar-4.png", left: 60 },
                  ].map((avatar) => (
                    <span
                      key={avatar.src}
                      className="absolute top-0 block size-10 overflow-hidden rounded-full"
                      style={{ left: avatar.left }}
                    >
                      <Image
                        src={avatar.src}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                  ))}
                </div>
                <p className="text-base font-medium text-[#242424] sm:text-base">
                  Trusted by over 10M+ People
                </p>
              </div>
            </div>
            <div className="flex min-w-0 justify-center lg:hidden">
              <MobileHomeHeroVisual />
            </div>
            <div className="hidden min-w-0 self-end justify-end lg:flex">
              <HomeHeroVisual />
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-t border-[#ececec] bg-white pt-16 md:pt-20"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">
                Three Segments
              </p>
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">
                Our Core Insurance Solutions
              </h2>
            </div>

            <div className="mt-3 grid pb-6 md:mt-14 md:grid-cols-3 md:pb-20">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group py-8 md:px-8 md:py-0 xl:px-10 ${index ? "border-t border-[#b8b8b8] md:border-l md:border-t-0" : ""}`}
                >
                  <Image
                    src={service.icon}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden
                    className="size-12 object-contain"
                  />
                  <h3 className="mt-5 text-lg font-semibold text-[#151515] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 min-h-[84px] text-[15px] leading-7 text-[#555555] sm:text-base">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#0A4E08]">
                    Know More
                    <Image
                      src="/assets/shared/arrow-right.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-[20px] transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CounterStats />

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8f9ff_100%)] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">
                Services Snapshots
              </p>
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">
                Risk Advisory Beyond The Policy
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {serviceSnapshots.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex min-h-[245px] flex-col rounded-xl bg-white p-6 shadow-[0_6px_24px_rgba(25,34,80,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-[#0A4E08] hover:shadow-[0_14px_35px_rgba(10,78,8,0.18)] hover:cursor-pointer md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-sm bg-[#EBFFD666] px-2.5 py-1 text-xs font-medium uppercase text-[#0A4E08] transition-colors group-hover:text-white">
                      {service.category}
                    </span>
                    <span className="relative block size-[26px] shrink-0" aria-hidden="true">
                      <Image
                        src="/assets/shared/arrow-right-up.svg"
                        alt=""
                        fill
                        sizes="26px"
                        className="object-contain opacity-100 transition-opacity group-hover:opacity-0"
                      />
                      <Image
                        src="/assets/shared/arrow-right-up-white.svg"
                        alt=""
                        fill
                        sizes="26px"
                        className="object-contain opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </span>
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="text-lg font-semibold text-[#151515] transition-colors group-hover:text-white sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#555555] transition-colors group-hover:text-white/90">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FF] pb-20 pt-8">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20 xl:px-20">
            <div className="max-w-[560px]">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">
                Our Difference
              </p>
              <h2 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">
                Why Equirus Raghnall?
              </h2>
              <p className="mt-7 text-base leading-7 text-[#555555]">
                We are an independent, IRDAI-registered insurance broker with a
                singular focus: putting our clients&apos; interests first. Our
                advisory model is built on objectivity, depth of expertise, and
                long-term partnership
              </p>
              <ul className="mt-9 space-y-5 text-base font-medium text-[#181818]">
                {[
                  "Independent Risk Advisory",
                  "End-to-end Claim Advocacy",
                  "Tailored Coverage Architecture",
                  "Pan India & Global Reach",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <Image
                      src="/assets/shared/double-tick.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 shrink-0"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] pb-2 pr-2">
              <span
                className="absolute bottom-0 left-[30%] right-0 top-[8%] rounded-[6px] bg-[#30337A]"
                aria-hidden="true"
              />
              <div className="relative aspect-[1.2/1] overflow-hidden rounded-[6px] bg-white">
                <Image
                  src="/assets/home/why-us.png"
                  alt="Advisers discussing tailored insurance solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">
                Flagship Offerings
              </p>
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">
                Our Hero Products
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {heroProducts.map((product) => (
                <article
                  key={product.title}
                  className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
                >
                  <div className="relative aspect-[1.85/1] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-black/40"
                      aria-hidden="true"
                    />
                    <span className="absolute left-4 top-4 rounded bg-white/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-2xl">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#555555]">
                      {product.description}
                    </p>
                    <Link
                      href={product.href}
                      className="group mt-auto inline-flex items-center gap-3 pt-6 text-base font-semibold text-[#0A4E08]"
                    >
                      Explore
                      <Image
                        src="/assets/shared/arrow-right.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-[20px] transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsCarousel />

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:px-10 lg:grid-cols-[0.9fr_1fr_1fr] lg:gap-5 xl:px-20">
            <div className="self-center lg:pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">
                Thought Leadership
              </p>
              <h2 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[30px]">
                Beyond The Policy
              </h2>
              <p className="mt-6 max-w-[390px] text-base leading-7 text-[#555555]">
                Market updates, risk reports, and case studies from our advisory
                team helping you stay ahead of emerging risks and regulatory
                changes.
              </p>
              <Link
                href="/blogs"
                className="mt-8 inline-flex h-12 min-w-40 items-center justify-center rounded-md border border-[#0A4E08] px-7 text-base font-semibold text-[#0A4E08] transition hover:bg-[#0A4E08] hover:text-white"
              >
                View All
              </Link>
            </div>

            {[
              {
                image: "/assets/blogs/blog1.png",
                title:
                  "Understanding D&O Liability in India's Evolving Corporate Governance Landscape",
                href: "/blogs/understanding-do-liability-india-corporate-governance",
              },
              {
                image: "/assets/blogs/blog2.png",
                title:
                  "Cyber Insurance in India: Why every business needs it in 2026",
                href: "/blogs/cyber-insurance-india-why-every-business-needs-it-2026",
              },
            ].map((article) => (
              <article key={article.title}>
                <Link href={article.href} className="group block">
                  <div className="relative aspect-[1.55/1] overflow-hidden rounded-lg bg-[#e8e8e8]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-3 top-3 rounded bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      Blog
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-[#666666]">
                    <time dateTime="2026-07-11">11 Jul</time>
                    <span>2 min read</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-7 tracking-[-0.01em] text-[#181818] transition-colors group-hover:text-[#0A4E08] sm:text-xl">
                    {article.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <FaqSection
          title="Answers to Common Insurance Queries"
          items={homeFaqs}
          compactTop
        />

        <HomeBottomSection />
      </main>
      
    </>
  );
}
