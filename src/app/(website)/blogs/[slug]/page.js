import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowLeftSLine } from "react-icons/ri";
import { blogs, getBlog } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);

  return blog
    ? { title: `${blog.title} | Equirus Raghnall`, description: blog.excerpt }
    : {};
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) notFound();

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
            <time dateTime="2026-07-11">11 Jul 2026</time>
            {[blog.category, ...(blog.tags ?? [])].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#edf4ec] px-3 py-1 font-medium text-[#0a4e08]"
              >
                {tag}
              </span>
            ))}
          </div>

          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="mt-6 aspect-video w-full rounded-xl object-cover md:mt-8"
          />

          <div className="mt-10 w-full md:mt-14">
            <p className="w-full text-base font-medium leading-7 text-gray-500 md:text-xl md:leading-8">
              {blog.excerpt}
            </p>
          </div>
        </article>
      </main>
      
    </>
  );
}
