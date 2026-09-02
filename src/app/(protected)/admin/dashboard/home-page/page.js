import Link from "next/link";

const sections = [
  {
    title: "Counter Stats",
    description: "Update the figures and labels shown in the homepage statistics section.",
    href: "/admin/dashboard/home-page/counter-stats",
  },
  {
    title: "Testimonials",
    description: "Add, edit, and organize the customer testimonials shown on the homepage.",
    href: "/admin/dashboard/home-page/testimonials",
  },
  {
    title: "Short Description",
    description: "Manage the short content section displayed near the bottom of the homepage.",
    href: "/admin/dashboard/home-page/short-description",
  },
];

export default function HomePageManagementPage() {
  return (
    <section className="max-w-6xl">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#376E00]">
          Website management
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[#111111]">Home Page</h1>
        <p className="mt-2 text-sm text-[#555555]">
          Choose the homepage content you want to update.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-2xl border border-[#0A4E08]/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-[#0A4E08]/25 hover:shadow-[0_14px_30px_rgba(10,78,8,0.09)]"
          >
            <h2 className="text-lg font-semibold text-[#111111]">{section.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#555555]">{section.description}</p>
            <p className="mt-5 text-sm font-semibold text-[#0A4E08]">
              Manage {section.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
