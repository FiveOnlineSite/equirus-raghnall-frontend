import { requireAdmin } from "@/lib/requireAdmin";
import Sidebar from "@/components/admin/Sidebar";

export default async function DashboardLayout({ children }) {
  await requireAdmin();

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
