"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { serviceSections } from "@/data/serviceMenus";
import { apiRequest } from "@/lib/api";

const emptyFaq = { question: "", answer: "" };

export default function FaqManagementPage() {
  const pages = useMemo(() => serviceSections.flatMap((section) => section.categories.flatMap((category) => category.links.map((link) => ({ ...link, section: section.label, category: category.title })))), []);
  const [selectedPage, setSelectedPage] = useState(pages[0]?.slug || "");
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState(emptyFaq);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (notice?.type !== "success") return undefined;
    const timeoutId = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  const loadFaqs = useCallback(async () => {
    try {
      setLoading(true);
      const data = await apiRequest(`/api/admin/faqs/${selectedPage}`, { cache: "no-store" });
      if (data?.success && Array.isArray(data.faqs)) setFaqs(data.faqs);
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to load FAQs." });
    } finally {
      setLoading(false);
    }
  }, [selectedPage]);

  useEffect(() => {
    const timeoutId = window.setTimeout(loadFaqs, 0);
    return () => window.clearTimeout(timeoutId);
  }, [loadFaqs]);

  function resetForm() { setForm(emptyFaq); setEditingId(null); }

  async function saveFaq(event) {
    event.preventDefault();
    if (!form.question.trim() || !form.answer.trim()) {
      setNotice({ type: "error", text: "Question and answer are required." });
      return;
    }
    try {
      setSaving(true);
      const data = await apiRequest(editingId ? `/api/admin/faqs/${selectedPage}/${editingId}` : `/api/admin/faqs/${selectedPage}`, { method: editingId ? "PUT" : "POST", body: JSON.stringify({ question: form.question.trim(), answer: form.answer.trim() }) });
      if (!data?.success) throw new Error("Unable to save FAQ.");
      await loadFaqs();
      resetForm();
      setNotice({ type: "success", text: "FAQ saved successfully and is now displayed on the page." });
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to save FAQ." });
    } finally { setSaving(false); }
  }

  async function deleteFaq(faq) {
    if (!window.confirm("Delete this FAQ?")) return;
    try {
      const data = await apiRequest(`/api/admin/faqs/${selectedPage}/${faq._id}`, { method: "DELETE" });
      if (!data?.success) throw new Error("Unable to delete FAQ.");
      await loadFaqs();
      if (editingId === faq._id) resetForm();
      setNotice({ type: "success", text: "FAQ deleted successfully." });
    } catch (error) { setNotice({ type: "error", text: error.message || "Unable to delete FAQ." }); }
  }

  async function moveFaq(index, direction) {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= faqs.length) return;
    const next = [...faqs];
    [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
    setFaqs(next);
    try {
      const data = await apiRequest(`/api/admin/faqs/${selectedPage}/reorder`, { method: "PATCH", body: JSON.stringify({ ids: next.map((faq) => faq._id) }) });
      if (data?.success && Array.isArray(data.faqs)) setFaqs(data.faqs);
    } catch (error) { await loadFaqs(); setNotice({ type: "error", text: error.message || "Unable to reorder FAQs." }); }
  }

  return <div className="max-w-5xl"><div className="mb-8"><h1 className="text-3xl font-semibold text-gray-900">FAQ Management</h1><p className="mt-2 text-gray-500">Add, edit, reorder, or delete FAQs for each page. A section appears as soon as it has one FAQ.</p></div><section className="rounded-xl border border-gray-200 bg-white p-6">
    {notice && <p role="status" className={`mb-5 rounded-lg border px-4 py-3 text-sm font-medium ${notice.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>{notice.text}</p>}
    <label className="block max-w-xl text-sm font-medium text-gray-700">Service page<select value={selectedPage} onChange={(event) => { setSelectedPage(event.target.value); resetForm(); setNotice(null); }} className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"><option value="home">Home Page</option>{serviceSections.map((section) => <optgroup key={section.value} label={section.label}>{section.categories.map((category) => category.links.map((link) => <option key={link.slug} value={link.slug}>{category.title} — {link.label}</option>))}</optgroup>)}</select></label>
    <form ref={formRef} onSubmit={saveFaq} className="mt-7 rounded-xl border border-gray-200 bg-gray-50 p-5"><h2 className="font-semibold text-gray-900">{editingId ? "Edit FAQ" : "Add FAQ"}</h2><label className="mt-4 block text-sm font-medium text-gray-700">Question<input value={form.question} maxLength={300} onChange={(event) => setForm({ ...form, question: event.target.value })} className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]" required /></label><label className="mt-4 block text-sm font-medium text-gray-700">Answer<textarea value={form.answer} maxLength={5000} rows={5} onChange={(event) => setForm({ ...form, answer: event.target.value })} className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]" required /></label><div className="mt-5 flex justify-end gap-3">{editingId && <button type="button" onClick={resetForm} className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700">Cancel</button>}<button type="submit" disabled={saving} className="rounded-lg bg-[#0A4E08] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50">{saving ? "Saving..." : editingId ? "Update FAQ" : "Add FAQ"}</button></div></form>
    <div className="mt-7"><h2 className="font-semibold text-gray-900">Page FAQs</h2>{loading ? <p className="py-6 text-sm text-gray-500">Loading FAQs...</p> : faqs.length === 0 ? <p className="mt-4 rounded-lg bg-gray-50 p-5 text-sm text-gray-500">No FAQs have been added. The FAQ section is currently hidden.</p> : <div className="mt-4 space-y-3">{faqs.map((faq, index) => <article key={faq._id} className="rounded-xl border border-gray-200 p-4"><div className="flex flex-col justify-between gap-4 sm:flex-row"><div className="min-w-0"><p className="font-semibold text-gray-900">{index + 1}. {faq.question}</p><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-500">{faq.answer}</p></div><div className="flex shrink-0 gap-2"><button type="button" onClick={() => moveFaq(index, -1)} disabled={index === 0} className="inline-flex size-10 items-center justify-center rounded border border-gray-300 text-sm disabled:opacity-40">↑</button><button type="button" onClick={() => moveFaq(index, 1)} disabled={index === faqs.length - 1} className="inline-flex size-10 items-center justify-center rounded border border-gray-300 text-sm disabled:opacity-40">↓</button><button type="button" onClick={() => { setForm({ question: faq.question, answer: faq.answer }); setEditingId(faq._id); window.requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })); }} className="inline-flex h-10 w-16 items-center justify-center rounded border border-[#0A4E08] text-sm text-[#0A4E08]">Edit</button><button type="button" onClick={() => deleteFaq(faq)} className="inline-flex h-10 w-16 items-center justify-center rounded border border-red-200 text-sm text-red-700">Delete</button></div></div></article>)}</div>}</div>
  </section></div>;
}
