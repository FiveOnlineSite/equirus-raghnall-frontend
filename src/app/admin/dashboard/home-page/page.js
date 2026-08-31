"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";
import TestimonialsManager from "@/components/admin/TestimonialsManager";
import HomeBottomSectionManager from "@/components/admin/HomeBottomSectionManager";

const defaultStats = [
  { value: 20, suffix: "+", label: "Years Of Experience" },
  { value: 10, suffix: "M+", label: "Satisfied Customers" },
  { value: 360, suffix: "\u00B0", label: "Risk Protection" },
  { value: 300, suffix: "+", label: "Insurance Professionals" },
];

export default function HomePageManagement() {
  const [stats, setStats] = useState(defaultStats);
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (notice?.type !== "success") return undefined;

    const timeoutId = window.setTimeout(() => {
      setNotice(null);
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStats() {
      try {
        const data = await apiRequest("/api/admin/home/stats", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (data?.success && Array.isArray(data.stats) && data.stats.length === 4) {
          setStats(data.stats);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setNotice({ type: "error", text: error.message || "Unable to load statistics." });
        }
      } finally {
        if (!controller.signal.aborted) setFetching(false);
      }
    }

    loadStats();
    return () => controller.abort();
  }, []);

  function updateStat(index, field, value) {
    setNotice(null);
    setStats((current) => current.map((stat, statIndex) => (
      statIndex === index
        ? { ...stat, [field]: field === "value" ? value.replace(/\D/g, "") : value }
        : stat
    )));
  }

  async function saveStats(event) {
    event.preventDefault();

    if (stats.some((stat) => stat.value === "" || !stat.label.trim())) {
      setNotice({ type: "error", text: "Every statistic needs a number and a label." });
      return;
    }

    try {
      setSaving(true);
      setNotice(null);
      const data = await apiRequest("/api/admin/home/stats", {
        method: "PUT",
        body: JSON.stringify({
          stats: stats.map((stat) => ({
            value: Number(stat.value),
            suffix: stat.suffix.trim(),
            label: stat.label.trim(),
          })),
        }),
      });

      if (data?.success && Array.isArray(data.stats)) setStats(data.stats);
      setNotice({ type: "success", text: "Home page statistics updated successfully." });
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to update statistics." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Home Page</h1>
        <p className="mt-2 text-gray-500">Manage the number statistics displayed on the home page.</p>
      </div>

      <form onSubmit={saveStats} className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Counter Statistics</h2>
          <p className="mt-1 text-sm text-gray-500">Edit the number, optional suffix, and label for each counter.</p>
        </div>

        {fetching ? (
          <div className="py-12 text-center text-sm text-gray-500">Loading statistics...</div>
        ) : (
          <div className="space-y-5">
            {stats.map((stat, index) => (
              <fieldset key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <legend className="px-2 text-sm font-semibold text-[#0A4E08]">Statistic {index + 1}</legend>
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_2fr]">
                  <label className="text-sm font-medium text-gray-700">
                    Number
                    <input
                      inputMode="numeric"
                      value={stat.value}
                      onChange={(event) => updateStat(index, "value", event.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
                      required
                    />
                  </label>

                  <label className="text-sm font-medium text-gray-700">
                    Suffix
                    <input
                      value={stat.suffix}
                      onChange={(event) => updateStat(index, "suffix", event.target.value)}
                      placeholder="+, M+, °"
                      maxLength={10}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
                    />
                  </label>

                  <label className="text-sm font-medium text-gray-700">
                    Label
                    <input
                      value={stat.label}
                      onChange={(event) => updateStat(index, "label", event.target.value)}
                      maxLength={80}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
                      required
                    />
                  </label>
                </div>
              </fieldset>
            ))}
          </div>
        )}

        <div className="mt-8 border-t border-gray-200 pt-6">
          {notice && (
            <p
              role="status"
              className={`mb-4 rounded-lg border px-4 py-3 text-sm font-medium ${
                notice.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {notice.text}
            </p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={fetching || saving}
              className="rounded-lg bg-[#0A4E08] px-6 py-3 text-sm font-medium text-white shadow-[0_6px_14px_rgba(10,78,8,0.16)] transition hover:bg-[#083F07] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Statistics"}
            </button>
          </div>
        </div>
      </form>

      <TestimonialsManager />
      <HomeBottomSectionManager />
    </div>
  );
}
