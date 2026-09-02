"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(date);
}

export default function HomeFeaturedBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    apiRequest("/api/blogs/featured", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((data) => setBlogs(Array.isArray(data?.blogs) ? data.blogs : []))
      .catch((error) => {
        if (error.name !== "AbortError") setBlogs([]);
      });

    return () => controller.abort();
  }, []);

  if (blogs.length !== 2) return null;

  return (
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
            Market updates, risk reports, and case studies from our advisory team
            helping you stay ahead of emerging risks and regulatory changes.
          </p>
          <Link
            href="/blogs"
            className="mt-8 inline-flex h-12 min-w-40 items-center justify-center rounded-md border border-[#0A4E08] px-7 text-base font-semibold text-[#0A4E08] transition hover:bg-[#0A4E08] hover:text-white"
          >
            View All
          </Link>
        </div>

        {blogs.map((blog) => (
          <article key={blog._id}>
            <Link href={`/blogs/${blog.slug}`} className="group block">
              <div className="relative aspect-[1.55/1] overflow-hidden rounded-lg bg-[#e8e8e8]">
                <Image
                  src={blog.imageUrl}
                  alt={blog.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {blog.category}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-[#666666]">
                <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 tracking-[-0.01em] text-[#181818] transition-colors group-hover:text-[#0A4E08] sm:text-xl">
                {blog.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
