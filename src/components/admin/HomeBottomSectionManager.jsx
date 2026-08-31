"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

const fallbackContent = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse...",
};

export default function HomeBottomSectionManager() {
  const [content, setContent] = useState(fallbackContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (notice?.type !== "success") return undefined;
    const timeoutId = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContent() {
      try {
        const data = await apiRequest("/api/admin/home/bottom-section", { cache: "no-store", signal: controller.signal });
        if (data?.success && data.bottomSection) setContent(data.bottomSection);
      } catch (error) {
        if (error.name !== "AbortError") setNotice({ type: "error", text: error.message || "Unable to load section text." });
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadContent();
    return () => controller.abort();
  }, []);

  async function saveContent(event) {
    event.preventDefault();
    if (!content.description.trim()) {
      setNotice({ type: "error", text: "Description is required." });
      return;
    }

    try {
      setSaving(true);
      const data = await apiRequest("/api/admin/home/bottom-section", {
        method: "PUT",
        body: JSON.stringify({ description: content.description.trim() }),
      });
      if (data?.success && data.bottomSection) setContent(data.bottomSection);
      setNotice({ type: "success", text: "Bottom section text updated successfully." });
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to update section text." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-6"><h2 className="text-lg font-semibold text-gray-900">Short Description Section</h2><p className="mt-1 text-sm text-gray-500">Edit the descriptive text displayed above the footer.</p></div>
      {loading ? <p className="py-8 text-center text-sm text-gray-500">Loading section text...</p> : <form onSubmit={saveContent}>
        {notice && <p role="status" className={`mb-5 rounded-lg border px-4 py-3 text-sm font-medium ${notice.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>{notice.text}</p>}
        <label className="block text-sm font-medium text-gray-700">Description
          <textarea value={content.description} maxLength={3000} rows={7} onChange={(event) => { setContent({ ...content, description: event.target.value }); setNotice(null); }} className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]" required />
        </label>
        <div className="mt-6 flex justify-end"><button type="submit" disabled={saving} className="rounded-lg bg-[#0A4E08] px-6 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50">{saving ? "Saving..." : "Save Bottom Section"}</button></div>
      </form>}
    </section>
  );
}
