import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import InsightsTabs from "./InsightsTabs";

export const metadata = { title: "News & Insights | Equirus Raghnall" };

export default function BlogsPage() {
  return (
    <>
      <main>
        <section className="relative h-[364px] overflow-hidden text-white">
          <Image src="/assets/blogs/blogs-hero-mobile.jpg" alt="Blue sky" fill priority className="object-cover md:hidden" sizes="(max-width: 767px) 100vw, 0px" />
          <Image src="/assets/blogs/blogs-hero.png" alt="Blue sky and clouds" fill priority className="hidden object-cover object-[center_10%] md:block" sizes="(min-width: 768px) 100vw, 0px" />
          <div className="relative mx-auto max-w-[1440px] px-5 pt-[60px] md:px-10 xl:px-20">
            <p className="text-sm font-medium uppercase leading-6 tracking-[0.03em] md:text-base md:leading-[30px]">Latest Updates</p>
            <h1 className="mt-4 text-[26px] font-semibold leading-9 md:text-[32px] md:leading-[44px]">NEWS &amp; INSIGHTS</h1>
            <p className="mt-4 max-w-[519px] text-sm leading-6 md:text-base md:leading-7">From company announcements to industry developments, explore the latest news and insights all in one place.</p>
            <Link href="#solutions" className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-[#0a4e08] px-4 text-sm font-semibold leading-6 hover:bg-[#083d06] md:h-12 md:text-base md:leading-[30px]">View Our Solutions</Link>
          </div>
        </section>

        <section className="bg-[linear-gradient(187deg,#fff_9%,#f6f7fe_53%)]">
          <div className="mx-auto max-w-[1440px] px-5 pb-[60px] pt-[60px] md:px-10 xl:px-20">
            <InsightsTabs items={blogs} />
          </div>
        </section>
      </main>
      
    </>
  );
}
