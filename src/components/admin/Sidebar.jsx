"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    name: "Banners",
    href: "/admin/dashboard/banners",
  },
  {
    name: "SEO",
    href: "/admin/dashboard/seo",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      const data = await response.json();

      if (data.success) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-[#0A4E08]/10 bg-white text-[#242424] shadow-[8px_0_30px_rgba(10,78,8,0.05)]">
      {/* Logo / Heading */}
      <div className="flex h-20 items-center gap-3 border-b border-[#0A4E08]/10 px-5">
        <div className="grid size-12 place-items-center rounded-xl bg-[#F1F5F0]">
          <Image
            src="/assets/shared/raghnall-logo.png"
            alt="Equirus Raghnall"
            width={58}
            height={46}
            className="h-11 w-14 object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide">Equiris Raghnall</p>
          <p className="text-xs text-[#555555]">Administration</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 pt-6">
        <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A8B79]">
          Management
        </p>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin/dashboard" &&
                pathname.startsWith(item.href));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#0A4E08] text-white shadow-[0_6px_14px_rgba(10,78,8,0.16)]"
                      : "text-[#555555] hover:bg-[#F1F5F0] hover:text-[#0A4E08]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-[#0A4E08]/10 p-4">
        <button
          onClick={handleLogout}
          className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-[#A33A3A] transition hover:bg-red-50 hover:text-red-700"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
