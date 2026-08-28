"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!data.success) {
        setError(data.message || "Login failed");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);

      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F8F6] px-4 py-10">
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-[#0A4E08]/8 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-20 size-96 rounded-full bg-[#30337A]/8 blur-3xl" aria-hidden />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#0A4E08]/10 bg-white shadow-[0_24px_70px_rgba(10,78,8,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden min-h-[620px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#063D07] to-[#26720F] p-10 text-white lg:flex">
          <div className="absolute -bottom-24 -right-24 size-72 rounded-full border-[45px] border-white/5" aria-hidden />
          <div className="relative flex items-center gap-3">
            <div className="grid size-16 place-items-center rounded-2xl bg-white shadow-lg">
              <Image src="/assets/shared/raghnall-logo.png" alt="Equirus Raghnall" width={78} height={62} className="h-14 w-[70px] object-cover" priority />
            </div>
            <div>
              <p className="font-semibold tracking-wide">Equirus Raghnall</p>
              <p className="text-xs text-white/60">Insurance Broking & Risk Advisory</p>
            </div>
          </div>

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Secure administration</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">Manage your website with confidence.</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Update website content and keep every service page accurate and current.</p>
          </div>

          <p className="relative text-xs text-white/45">Authorized administrators only</p>
        </div>

        <div className="p-7 sm:p-12 lg:p-14">
          <div className="mb-8 lg:hidden">
            <Image src="/assets/shared/raghnall-logo.png" alt="Equirus Raghnall" width={100} height={80} className="h-16 w-20 object-cover" priority />
          </div>
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#376E00]">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#111111]">Admin Login</h1>
            <p className="mt-2 text-sm text-[#555555]">Enter your credentials to access the admin panel.</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-[#242424]"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
              required
              className="w-full rounded-xl border border-[#DDE5DC] bg-[#FAFBFA] px-4 py-3.5 text-[#111111] outline-none transition placeholder:text-[#999999] focus:border-[#0A4E08] focus:bg-white focus:ring-3 focus:ring-[#0A4E08]/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#242424]"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-[#DDE5DC] bg-[#FAFBFA] px-4 py-3.5 text-[#111111] outline-none transition placeholder:text-[#999999] focus:border-[#0A4E08] focus:bg-white focus:ring-3 focus:ring-[#0A4E08]/10"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0A4E08] px-4 py-3.5 font-semibold text-white shadow-[0_8px_18px_rgba(10,78,8,0.18)] transition hover:bg-[#083F07] hover:shadow-[0_10px_22px_rgba(10,78,8,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        </div>
      </div>
    </main>
  );
}
