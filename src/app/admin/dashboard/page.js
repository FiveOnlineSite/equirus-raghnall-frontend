import Link from "next/link";

const sections = [
  {
    title: "Banners",
    description: "Manage website hero images and their accessible alternative text.",
    href: "/admin/dashboard/banners",
  },
  {
    title: "SEO",
    description: "Review and manage search metadata for public pages.",
    href: "/admin/dashboard/seo",
  },
];

export default function DashboardPage() {
  return (
    <section className="max-w-6xl">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A4E08] to-[#26720F] px-8 py-9 text-white shadow-[0_18px_40px_rgba(10,78,8,0.16)]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Admin workspace</p>
        <h1 className="mt-3 text-3xl font-semibold">Welcome to your dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
          Manage the content and search visibility of the Equirus Raghnall website.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-[#111111]">Website management</h2>
        <p className="mt-1 text-sm text-[#555555]">Choose an area to get started.</p>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-2xl border border-[#0A4E08]/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-[#0A4E08]/25 hover:shadow-[0_14px_30px_rgba(10,78,8,0.09)]"
          >
            <h3 className="text-lg font-semibold text-[#111111]">{section.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#555555]">
              {section.description}
            </p>
            <p className="mt-5 text-sm font-semibold text-[#0A4E08]">Manage {section.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
