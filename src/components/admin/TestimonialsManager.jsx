"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { apiRequest } from "@/lib/api";

const emptyTestimonial = {
  name: "",
  quote: "",
  imageKey: "",
  imageUrl: "",
};

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(emptyTestimonial);
  const [editingId, setEditingId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [notice, setNotice] = useState(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const previewUrlRef = useRef("");

  useEffect(() => {
    if (notice?.type !== "success") return undefined;
    const timeoutId = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  useEffect(() => () => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
  }, []);

  async function loadTestimonials() {
    try {
      setLoading(true);
      const data = await apiRequest("/api/admin/testimonials", { cache: "no-store" });
      if (data?.success && Array.isArray(data.testimonials)) setTestimonials(data.testimonials);
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to load testimonials." });
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = "";
    setImagePreviewUrl("");
    setForm(emptyTestimonial);
    setEditingId(null);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function editTestimonial(testimonial) {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = "";
    setImagePreviewUrl("");
    setForm({
      name: testimonial.name,
      quote: testimonial.quote,
      imageKey: testimonial.imageKey,
      imageUrl: testimonial.imageUrl,
    });
    setEditingId(testimonial._id);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setNotice(null);
    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 10 * 1024 * 1024) {
      setNotice({ type: "error", text: "Choose a JPG, PNG, or WebP image under 10 MB." });
      event.target.value = "";
      return;
    }

    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    const previewUrl = URL.createObjectURL(file);
    previewUrlRef.current = previewUrl;
    setImagePreviewUrl(previewUrl);
    setSelectedFile(file);
    setNotice(null);
  }

  async function uploadImage() {
    if (!selectedFile) return form.imageKey;

    const signedData = await apiRequest("/api/admin/upload", {
      method: "POST",
      body: JSON.stringify({
        fileType: selectedFile.type,
        fileSize: selectedFile.size,
        page: "testimonials",
      }),
    });

    const uploadFormData = new FormData();
    Object.entries(signedData.fields).forEach(([name, value]) => uploadFormData.append(name, value));
    uploadFormData.append("file", selectedFile);
    const uploadResponse = await fetch(signedData.uploadUrl, { method: "POST", body: uploadFormData });
    if (!uploadResponse.ok) throw new Error("Unable to upload testimonial image.");
    return signedData.key;
  }

  async function saveTestimonial(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.quote.trim() || (!form.imageKey && !selectedFile)) {
      setNotice({ type: "error", text: "Name, testimonial text, and an image are required." });
      return;
    }

    try {
      setSaving(true);
      const imageKey = await uploadImage();
      const payload = {
        name: form.name.trim(),
        quote: form.quote.trim(),
        imageKey,
      };
      const data = await apiRequest(
        editingId ? `/api/admin/testimonials/${editingId}` : "/api/admin/testimonials",
        { method: editingId ? "PUT" : "POST", body: JSON.stringify(payload) },
      );

      if (!data?.success) throw new Error("Unable to save testimonial.");
      await loadTestimonials();
      resetForm();
      setNotice({ type: "success", text: "Testimonial saved successfully." });
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to save testimonial." });
    } finally {
      setSaving(false);
    }
  }

  async function deleteTestimonial(testimonial) {
    if (!window.confirm(`Delete ${testimonial.name}'s testimonial?`)) return;
    try {
      const data = await apiRequest(`/api/admin/testimonials/${testimonial._id}`, { method: "DELETE" });
      if (!data?.success) throw new Error("Unable to delete testimonial.");
      await loadTestimonials();
      if (editingId === testimonial._id) resetForm();
      setNotice({ type: "success", text: "Testimonial deleted successfully." });
    } catch (error) {
      setNotice({ type: "error", text: error.message || "Unable to delete testimonial." });
    }
  }

  async function moveTestimonial(index, direction) {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= testimonials.length) return;
    const next = [...testimonials];
    [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
    setTestimonials(next);

    try {
      const data = await apiRequest("/api/admin/testimonials/reorder", {
        method: "PATCH",
        body: JSON.stringify({ ids: next.map((testimonial) => testimonial._id) }),
      });
      if (data?.success && Array.isArray(data.testimonials)) setTestimonials(data.testimonials);
    } catch (error) {
      await loadTestimonials();
      setNotice({ type: "error", text: error.message || "Unable to reorder testimonials." });
    }
  }

  return (
    <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Testimonials</h2>
        <p className="mt-1 text-sm text-gray-500">Add, edit, order, or delete testimonial cards. Add at least five cards to display this section on the home page.</p>
      </div>

      {notice && (
        <p className={`mb-5 rounded-lg border px-4 py-3 text-sm font-medium ${notice.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`} role="status">
          {notice.text}
        </p>
      )}

      <form ref={formRef} onSubmit={saveTestimonial} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <h3 className="text-base font-semibold text-gray-900">{editingId ? "Edit Testimonial" : "Add Testimonial"}</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-gray-700">Customer name
            <input value={form.name} maxLength={100} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]" required />
          </label>
          <label className="text-sm font-medium text-gray-700">Photo
            <input ref={fileInputRef} type="file" accept=".jpg,.jpeg,.png,.webp" onChange={handleFileChange} className="mt-2 block w-full text-sm text-gray-600 file:mr-3 file:border-0 file:bg-[#0A4E08] file:px-4 file:py-2 file:text-white" />
          </label>
        </div>
        {(imagePreviewUrl || form.imageUrl) && <div className="mt-4"><p className="text-sm font-medium text-gray-700">Image preview</p><div className="mt-2 size-24 overflow-hidden rounded-lg border border-gray-200 bg-white">{imagePreviewUrl ? <img src={imagePreviewUrl} alt="Selected testimonial" className="size-full object-cover" /> : <Image src={form.imageUrl} alt="Current testimonial" width={96} height={96} className="size-full object-cover" />}</div></div>}
        <label className="mt-4 block text-sm font-medium text-gray-700">Testimonial
          <textarea value={form.quote} maxLength={3000} rows={5} onChange={(event) => setForm({ ...form, quote: event.target.value })} className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]" required />
        </label>
        <div className="mt-5 flex flex-wrap justify-end gap-3">
          {editingId && <button type="button" onClick={resetForm} className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700">Cancel</button>}
          <button type="submit" disabled={saving} className="rounded-lg bg-[#0A4E08] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50">{saving ? "Saving..." : "Save Testimonial"}</button>
        </div>
      </form>

      <div className="mt-7">
        <div className="mb-4 flex items-center justify-between"><h3 className="font-semibold text-gray-900">All Testimonials</h3><span className="text-sm text-gray-500">{testimonials.length} added · 5 minimum</span></div>
        {loading ? <p className="py-6 text-sm text-gray-500">Loading testimonials...</p> : testimonials.length === 0 ? <p className="rounded-lg bg-gray-50 p-5 text-sm text-gray-500">No testimonials yet. Add at least five to show this section on the home page.</p> : (
          <div className="space-y-3">
            {testimonials.map((testimonial, index) => (
              <article key={testimonial._id} className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center">
                {testimonial.imageUrl && <Image src={testimonial.imageUrl} alt="" width={56} height={56} className="size-14 rounded-full object-cover" />}
                <div className="min-w-0 flex-1"><p className="font-semibold text-gray-900">{testimonial.name}</p><p className="mt-1 line-clamp-2 text-sm text-gray-500">{testimonial.quote}</p></div>
                <div className="flex flex-wrap gap-2"><button type="button" onClick={() => moveTestimonial(index, -1)} disabled={index === 0} className="rounded border border-gray-300 px-3 py-2 text-sm disabled:opacity-40">↑</button><button type="button" onClick={() => moveTestimonial(index, 1)} disabled={index === testimonials.length - 1} className="rounded border border-gray-300 px-3 py-2 text-sm disabled:opacity-40">↓</button><button type="button" onClick={() => editTestimonial(testimonial)} className="rounded border border-[#0A4E08] px-3 py-2 text-sm text-[#0A4E08]">Edit</button><button type="button" onClick={() => deleteTestimonial(testimonial)} className="rounded border border-red-200 px-3 py-2 text-sm text-red-700">Delete</button></div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
