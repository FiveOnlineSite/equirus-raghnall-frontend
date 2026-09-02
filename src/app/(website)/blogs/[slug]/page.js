import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import { notFound } from "next/navigation";
import { RiArrowLeftSLine } from "react-icons/ri";
import { apiRequest } from "@/lib/api";
import BlogShareButtons from "@/components/BlogShareButtons";

const getBlogDetails = cache(async function getBlogDetails(slug) {
  try {
    const data = await apiRequest(`/api/blogs/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });

    return data?.blog
      ? {
          ...data.blog,
          image: data.blog.imageUrl,
        }
      : null;
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
});

function formatPublishedDate(createdAt) {
  if (!createdAt) return null;

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(createdAt));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogDetails(slug);

  return blog
    ? {
        title: blog.metaTitle,
        description: blog.metaDescription,
      }
    : {};
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogDetails(slug);

  if (!blog) notFound();

  const publishedDate = formatPublishedDate(blog.createdAt);

  return (
    <>
      
      <main className="bg-white">
        <article className="mx-auto max-w-4xl px-5 py-12 md:px-10 md:py-20">
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#0a4e08] transition-opacity hover:opacity-70"
          >
            <RiArrowLeftSLine className="size-5" aria-hidden="true" />
            Back to Blogs
          </Link>

          <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-[#151515] md:text-4xl">
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[#4b4b4b] md:gap-3 md:text-sm">
            {publishedDate && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
                <span className="text-gray-500">Published:</span>
                <time dateTime={blog.createdAt} className="font-medium text-gray-800">
                  {publishedDate}
                </time>
              </span>
            )}
            {blog.readTime && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
                <span className="text-gray-500">Read time:</span>
                <span className="font-medium text-gray-800">{blog.readTime}</span>
              </span>
            )}
            <span className="rounded-full bg-[#edf4ec] px-3 py-1 font-medium text-[#0a4e08]">
              {blog.category}
            </span>
          </div>

          <BlogShareButtons title={blog.title} />

          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="mt-6 aspect-video w-full rounded-xl object-cover md:mt-8"
          />

          <div className="mt-10 w-full md:mt-14">
            {blog.content && (
              <p className="w-full whitespace-pre-line text-base leading-8 text-[#363636]">
                {blog.content}
              </p>
            )}
          </div>
        </article>
      </main>
      
    </>
  );
}
