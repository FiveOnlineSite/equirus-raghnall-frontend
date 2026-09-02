"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import InsightsTabs from "./InsightsTabs";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => { const controller = new AbortController(); apiRequest("/api/blogs", { cache: "no-store", signal: controller.signal }).then((data) => setBlogs((data?.blogs || []).map((blog) => ({ ...blog, image: blog.imageUrl })))).catch(() => setBlogs([])); return () => controller.abort(); }, []);
  return <main><section className="relative h-[364px] overflow-hidden text-white"><Image src="/assets/blogs/blogs-hero-mobile.jpg" alt="Blue sky" fill priority className="object-cover md:hidden" /><Image src="/assets/blogs/blogs-hero.png" alt="Blue sky and clouds" fill priority className="hidden object-cover md:block" /><div className="relative mx-auto max-w-[1440px] px-5 pt-[60px] md:px-10 xl:px-20"><p className="text-sm font-medium uppercase">Latest Updates</p><h1 className="mt-4 text-[26px] font-semibold md:text-[32px]">NEWS &amp; INSIGHTS</h1><p className="mt-4 max-w-[519px] text-sm md:text-base">From company announcements to industry developments, explore the latest news and insights all in one place.</p><Link href="#solutions" className="mt-8 inline-flex rounded-lg bg-[#0a4e08] px-4 py-3 text-sm font-semibold">View Our Solutions</Link></div></section><section className="bg-[linear-gradient(187deg,#fff_9%,#f6f7fe_53%)]"><div className="mx-auto max-w-[1440px] px-5 py-[60px] md:px-10 xl:px-20">{blogs === null ? <p className="text-sm text-gray-500">Loading blogs...</p> : <InsightsTabs items={blogs} />}</div></section></main>;
}
