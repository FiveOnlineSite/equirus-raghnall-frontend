"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import { apiRequest } from "@/lib/api";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function verifySession() {
      try {
        const session = await apiRequest("/api/admin/session", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (session?.success === false || session?.authenticated === false) {
          router.replace("/admin/login");
          return;
        }

        setAuthenticated(true);
      } catch (error) {
        if (error.name !== "AbortError") {
          router.replace("/admin/login");
        }
      }
    }

    verifySession();
    return () => controller.abort();
  }, [router]);

  if (!authenticated) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#F7F8F6] text-sm text-[#555555]">
        Verifying admin session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8F6]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="ml-64 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#0A4E08]/10 bg-white/95 px-8 backdrop-blur">
          <div>
            <h2 className="text-lg font-semibold text-[#111111]">
              Dashboard
            </h2>
            <p className="mt-0.5 text-xs text-[#555555]">Equirus Raghnall content management</p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-[#0A4E08]/10 bg-[#F1F5F0] py-2 pl-2 pr-4 text-sm text-[#376E00]">
            <span className="grid size-8 place-items-center rounded-full bg-[#0A4E08] text-xs font-semibold text-white">A</span>
            <span className="font-medium">Administrator</span>
          </div>
        </header>

        {/* Dashboard / Banners / other content */}
        <main className="p-8 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
