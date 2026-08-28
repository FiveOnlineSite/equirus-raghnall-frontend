"use client";

import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const data = await apiRequest("/api/admin/logout", {
        method: "POST",
      });

      if (data.success) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
    >
      Logout
    </button>
  );
}
