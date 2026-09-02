"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { apiRequest } from "@/lib/api";

const categories = ["Blogs", "Risk Reports", "Market Updates", "Case Studies"];
const pageSize = 10;

const emptyForm = {
  category: "",
  title: "",
  metaTitle: "",
  metaDescription: "",
  slug: "",
  imageAlt: "",
  readTime: "",
  content: "",
  imageKey: "",
};

function formatDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function createSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 160);
}

async function requestBlogs(options = {}) {
  const data = await apiRequest("/api/admin/blogs", {
    cache: "no-store",
    ...options,
  });
  return Array.isArray(data?.blogs) ? data.blogs : [];
}

export default function BlogManager() {
  const formRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [slugWasEdited, setSlugWasEdited] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [fileInputKey, setFileInputKey] = useState(0);
  const [notice, setNotice] = useState(null);
  const [formNotice, setFormNotice] = useState(null);
  const [homepageNotice, setHomepageNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [updatingFeaturedId, setUpdatingFeaturedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const loadBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setBlogs(await requestBlogs());
    } catch (error) {
      setNotice({
        type: "error",
        text: error.message || "Unable to load blogs.",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    requestBlogs({ signal: controller.signal })
      .then(setBlogs)
      .catch((error) => {
        if (error.name !== "AbortError") {
          setNotice({
            type: "error",
            text: error.message || "Unable to load blogs.",
          });
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  useEffect(() => {
    if (notice?.type !== "success") return undefined;

    const timeoutId = window.setTimeout(() => setNotice(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  useEffect(() => {
    if (formNotice?.type !== "success") return undefined;

    const timeoutId = window.setTimeout(() => setFormNotice(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [formNotice]);

  useEffect(() => {
    if (homepageNotice?.type !== "success") return undefined;

    const timeoutId = window.setTimeout(() => setHomepageNotice(null), 4000);
    return () => window.clearTimeout(timeoutId);
  }, [homepageNotice]);

  function updateForm(key) {
    return (event) => {
      const value = event.target.value;
      setFormNotice(null);
      if (key === "slug") setSlugWasEdited(true);
      setForm((current) => ({
        ...current,
        [key]: value,
        ...(key === "title" && !slugWasEdited
          ? { slug: createSlug(value) }
          : {}),
      }));
    };
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
    setSlugWasEdited(false);
    setFile(null);
    setPreview("");
    setFileInputKey((current) => current + 1);
  }

  function startEditing(blog) {
    setForm({
      category: blog.category || "",
      title: blog.title || "",
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      slug: blog.slug || "",
      imageAlt: blog.imageAlt || "",
      readTime: blog.readTime || "",
      content: blog.content || "",
      imageKey: blog.imageKey || "",
    });
    setEditingId(blog._id);
    setSlugWasEdited(true);
    setFile(null);
    setPreview(blog.imageUrl || "");
    setFileInputKey((current) => current + 1);
    setNotice(null);
    setFormNotice(null);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleImageChange(event) {
    const selectedFile = event.target.files?.[0] || null;
    setFormNotice(null);
    setFile(selectedFile);
    setPreview(selectedFile ? URL.createObjectURL(selectedFile) : "");
  }

  async function uploadImage() {
    if (!file) return form.imageKey;

    const upload = await apiRequest("/api/admin/upload", {
      method: "POST",
      body: JSON.stringify({
        fileType: file.type,
        fileSize: file.size,
        page: "blogs",
      }),
    });
    const uploadData = new FormData();
    Object.entries(upload.fields).forEach(([key, value]) => {
      uploadData.append(key, value);
    });
    uploadData.append("file", file);

    const response = await fetch(upload.uploadUrl, {
      method: "POST",
      body: uploadData,
    });

    if (!response.ok) throw new Error("Image upload failed.");
    return upload.key;
  }

  async function saveBlog(event) {
    event.preventDefault();

    const requiredFields = [
      "category",
      "title",
      "metaTitle",
      "metaDescription",
      "slug",
      "imageAlt",
      "readTime",
      "content",
    ];

    if (requiredFields.some((field) => !form[field].trim())) {
      setFormNotice({
        type: "error",
        text: "Complete all required blog fields.",
      });
      return;
    }

    if (!file && !form.imageKey) {
      setFormNotice({ type: "error", text: "Choose a blog image." });
      return;
    }

    try {
      setSaving(true);
      setFormNotice(null);
      const imageKey = await uploadImage();
      const data = await apiRequest(
        editingId ? `/api/admin/blogs/${editingId}` : "/api/admin/blogs",
        {
          method: editingId ? "PUT" : "POST",
          body: JSON.stringify({ ...form, imageKey }),
        },
      );

      if (!data?.success || !data.blog) {
        throw new Error(editingId ? "Unable to update blog." : "Unable to save blog.");
      }

      setBlogs((current) =>
        editingId
          ? current.map((blog) => (blog._id === editingId ? data.blog : blog))
          : [data.blog, ...current],
      );
      resetForm();
      setFormNotice({
        type: "success",
        text: editingId ? "Blog updated successfully." : "Blog added successfully.",
      });
    } catch (error) {
      setFormNotice({
        type: "error",
        text: error.message || "Unable to save blog.",
      });
    } finally {
      setSaving(false);
    }
  }

  async function deleteBlog(blog) {
    const confirmed = window.confirm(
      `Delete “${blog.title}”? This action cannot be undone.`,
    );
    if (!confirmed) return;

    try {
      setDeletingId(blog._id);
      setNotice(null);
      const data = await apiRequest(`/api/admin/blogs/${blog._id}`, {
        method: "DELETE",
      });

      if (!data?.success) throw new Error("Unable to delete blog.");

      setBlogs((current) => current.filter((item) => item._id !== blog._id));
      if (editingId === blog._id) resetForm();
      setNotice({ type: "success", text: "Blog deleted successfully." });
    } catch (error) {
      setNotice({
        type: "error",
        text: error.message || "Unable to delete blog.",
      });
    } finally {
      setDeletingId(null);
    }
  }

  async function toggleHomepageFeature(blog) {
    const featuredOnHome = !blog.featuredOnHome;

    try {
      setUpdatingFeaturedId(blog._id);
      setHomepageNotice(null);
      const data = await apiRequest(`/api/admin/blogs/${blog._id}/featured`, {
        method: "PATCH",
        body: JSON.stringify({ featuredOnHome }),
      });

      if (!data?.success || !data.blog) {
        throw new Error("Unable to update the homepage selection.");
      }

      setBlogs((current) =>
        current.map((item) => (item._id === blog._id ? data.blog : item)),
      );
      setHomepageNotice({
        type: "success",
        text: featuredOnHome
          ? "Blog added to Beyond The Policy."
          : "Blog removed from Beyond The Policy.",
      });
    } catch (error) {
      setHomepageNotice({
        type: "error",
        text: error.message || "Unable to update the homepage selection.",
      });
    } finally {
      setUpdatingFeaturedId(null);
    }
  }

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        categoryFilter === "All" || blog.category === categoryFilter;
      const matchesSearch =
        !query ||
        [blog.title, blog.slug, blog.category].some((value) =>
          value?.toLowerCase().includes(query),
        );

      return matchesCategory && matchesSearch;
    });
  }, [blogs, categoryFilter, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / pageSize));
  const activePage = Math.min(currentPage, totalPages);
  const pageStart = (activePage - 1) * pageSize;
  const visibleBlogs = filteredBlogs.slice(pageStart, pageStart + pageSize);
  const featuredBlogs = blogs.filter((blog) => blog.featuredOnHome);
  const featuredCount = featuredBlogs.length;

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Blog Management</h1>
        <p className="mt-2 text-gray-500">
          Add new articles and manage the blogs currently published on the website.
        </p>
      </div>

      {notice && (
        <p
          role="status"
          className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
            notice.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {notice.text}
        </p>
      )}

      <section ref={formRef} className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {editingId ? "Edit Blog" : "Add Blog"}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {editingId
                ? "Update the selected blog and save your changes."
                : "Create and publish a new blog article."}
            </p>
          </div>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400"
            >
              Cancel editing
            </button>
          )}
        </div>

        <form onSubmit={saveBlog} className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <label className="block text-sm font-medium text-gray-700">
            Blog category
            <select
              value={form.category}
              onChange={updateForm("category")}
              required
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            <span className="flex items-center justify-between gap-4">
              <span>Meta title</span>
              <span className="text-xs font-normal text-gray-500">
                {form.metaTitle.length}/60 characters
              </span>
            </span>
            <input
              value={form.metaTitle}
              onChange={updateForm("metaTitle")}
              required
              maxLength={60}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            <span className="flex items-center justify-between gap-4">
              <span>Meta description</span>
              <span className="text-xs font-normal text-gray-500">
                {form.metaDescription.length}/160 characters
              </span>
            </span>
            <textarea
              value={form.metaDescription}
              onChange={updateForm("metaDescription")}
              required
              rows={3}
              maxLength={160}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
            />
          </label>

          <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
            <label className="block text-sm font-medium text-gray-700">
              Blog title
              <input
                value={form.title}
                onChange={updateForm("title")}
                required
                maxLength={200}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Read time
              <input
                value={form.readTime}
                onChange={updateForm("readTime")}
                placeholder="e.g. 2 min"
                required
                maxLength={30}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Slug
            <input
              value={form.slug}
              onChange={updateForm("slug")}
              required
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Image alt text
            <input
              value={form.imageAlt}
              onChange={updateForm("imageAlt")}
              required
              maxLength={200}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Blog image {editingId && <span className="font-normal text-gray-500">(current image is retained unless replaced)</span>}
            <input
              key={fileInputKey}
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              required={!editingId && !form.imageKey}
              onChange={handleImageChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white text-sm text-gray-600 file:mr-4 file:border-0 file:bg-[#0A4E08] file:px-5 file:py-3 file:text-sm file:font-medium file:text-white hover:file:bg-[#083F07]"
            />
          </label>

          {preview && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700">Image preview</p>
              <Image
                src={preview}
                alt="Blog image preview"
                width={640}
                height={360}
                unoptimized={preview.startsWith("blob:")}
                className="mt-2 h-56 w-full max-w-md rounded-lg border border-gray-200 object-cover"
              />
            </div>
          )}

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Blog content
            <textarea
              value={form.content}
              onChange={updateForm("content")}
              required
              rows={12}
              maxLength={20000}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
            />
          </label>

          <div className="mt-5 flex justify-end">
            <button
              disabled={saving}
              className="rounded-lg bg-[#0A4E08] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#083F07] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : editingId ? "Update Blog" : "Save Blog"}
            </button>
          </div>
          {formNotice && (
            <p
              role="status"
              className={`mt-4 rounded-lg border px-4 py-3 text-sm font-medium ${
                formNotice.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {formNotice.text}
            </p>
          )}
        </form>
      </section>

      <section className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Added Blogs</h2>
              <p className="mt-1 text-sm text-gray-500">
                {blogs.length} {blogs.length === 1 ? "blog" : "blogs"} published
              </p>
            </div>
            <button
              type="button"
              onClick={loadBlogs}
              disabled={loading}
              className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#0A4E08] hover:text-[#0A4E08] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "Refresh list"}
            </button>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
            <label>
              <span className="sr-only">Search blogs</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by title, slug, or category"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
              />
            </label>
            <label>
              <span className="sr-only">Filter blogs by category</span>
              <select
                value={categoryFilter}
                onChange={(event) => {
                  setCategoryFilter(event.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
              >
                <option value="All">All categories</option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {loading ? (
          <div className="py-16 text-center text-sm text-gray-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="m-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
            <p className="font-medium text-gray-700">No blogs added yet.</p>
            <p className="mt-1 text-sm text-gray-500">Use the form above to publish the first blog.</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="font-medium text-gray-700">No matching blogs found.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("All");
                setCurrentPage(1);
              }}
              className="mt-2 text-sm font-semibold text-[#0A4E08] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1080px] table-fixed border-collapse text-left">
                <colgroup>
                  <col className="w-[31%]" />
                  <col className="w-[16%]" />
                  <col className="w-[10%]" />
                  <col className="w-[14%]" />
                  <col className="w-[14%]" />
                  <col className="w-[15%]" />
                </colgroup>
                <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-6 py-3">Article</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3 text-center">Read time</th>
                    <th className="px-4 py-3">Published</th>
                    <th className="px-4 py-3 text-center">Homepage</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {visibleBlogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className={`transition hover:bg-gray-50 ${
                        editingId === blog._id ? "bg-[#F7FAF6]" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex min-w-[310px] items-center gap-3">
                          {blog.imageUrl ? (
                            <Image
                              src={blog.imageUrl}
                              alt={blog.imageAlt || ""}
                              width={72}
                              height={52}
                              className="h-[52px] w-[72px] shrink-0 rounded-md object-cover"
                            />
                          ) : (
                            <div className="grid h-[52px] w-[72px] shrink-0 place-items-center rounded-md bg-gray-100 text-[10px] text-gray-400">
                              No image
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="max-w-sm truncate text-sm font-semibold text-gray-900">
                              {blog.title}
                            </p>
                            <p className="mt-1 max-w-sm truncate text-xs text-gray-500">
                              /{blog.slug}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex rounded-full bg-[#EDF4EC] px-2.5 py-1 text-xs font-medium text-[#0A4E08]">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="whitespace-nowrap text-sm text-gray-600">
                          {blog.readTime}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600">
                        {formatDate(blog.createdAt)}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                          <input
                            type="checkbox"
                            checked={Boolean(blog.featuredOnHome)}
                            onChange={() => toggleHomepageFeature(blog)}
                            disabled={
                              updatingFeaturedId === blog._id ||
                              (!blog.featuredOnHome && featuredCount >= 2)
                            }
                            aria-label={`${blog.featuredOnHome ? "Remove" : "Add"} ${blog.title} ${blog.featuredOnHome ? "from" : "to"} the homepage`}
                            className="size-4 accent-[#0A4E08] disabled:cursor-not-allowed disabled:opacity-50"
                          />
                          <span>{blog.featuredOnHome ? "Selected" : "Select"}</span>
                        </label>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => startEditing(blog)}
                            className="rounded-md bg-[#EDF4EC] px-3 py-1.5 text-xs font-semibold text-[#0A4E08] transition hover:bg-[#DDEBDB]"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteBlog(blog)}
                            disabled={deletingId === blog._id}
                            className="rounded-md bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId === blog._id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 px-6 py-4">
              <p className="text-sm text-gray-500">
                Showing {pageStart + 1}–{Math.min(pageStart + pageSize, filteredBlogs.length)} of {filteredBlogs.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.max(1, activePage - 1))}
                  disabled={activePage === 1}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-[#0A4E08] hover:text-[#0A4E08] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="px-2 text-sm text-gray-600">
                  Page {activePage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.min(totalPages, activePage + 1))}
                  disabled={activePage === totalPages}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-[#0A4E08] hover:text-[#0A4E08] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Selected Homepage Blogs
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Blogs selected from the Homepage column in the list above.
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">
              {featuredCount}/2 selected
            </p>
            <p
              className={`mt-1 text-sm font-medium ${
                featuredCount === 2 ? "text-[#0A4E08]" : "text-amber-700"
              }`}
            >
              {featuredCount === 2
                ? "Published on the homepage"
                : "Homepage section is hidden"}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[0, 1].map((slotIndex) => {
            const blog = featuredBlogs[slotIndex];

            return blog ? (
              <article
                key={blog._id}
                className="flex min-h-32 items-center gap-4 rounded-lg border border-gray-200 p-4"
              >
                {blog.imageUrl ? (
                  <Image
                    src={blog.imageUrl}
                    alt={blog.imageAlt || ""}
                    width={112}
                    height={80}
                    className="h-20 w-28 shrink-0 rounded-md object-cover"
                  />
                ) : (
                  <div className="grid h-20 w-28 shrink-0 place-items-center rounded-md bg-gray-100 text-xs text-gray-400">
                    No image
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0A4E08]">
                    Homepage blog {slotIndex + 1}
                  </p>
                  <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900">
                    {blog.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => toggleHomepageFeature(blog)}
                    disabled={updatingFeaturedId === blog._id}
                    className="mt-2 text-sm font-semibold text-red-700 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {updatingFeaturedId === blog._id ? "Removing..." : "Remove"}
                  </button>
                </div>
              </article>
            ) : (
              <div
                key={`homepage-slot-${slotIndex}`}
                className="grid min-h-32 place-items-center rounded-lg border border-dashed border-gray-300 px-6 text-center"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Homepage blog {slotIndex + 1}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Select a blog from the list above.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {homepageNotice && (
          <p
            role="status"
            className={`mt-4 rounded-lg border px-4 py-3 text-sm font-medium ${
              homepageNotice.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {homepageNotice.text}
          </p>
        )}
      </section>
    </div>
  );
}
