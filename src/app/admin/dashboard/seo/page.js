"use client";

import { useState } from "react";

export default function SeoPage() {
  const [selectedPage, setSelectedPage] = useState("home");

  const [formData, setFormData] = useState({
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    robots: "index, follow",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      page: selectedPage,
      ...formData,
    });

    alert("SEO data saved successfully - Demo only");
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">
          SEO Management
        </h1>

        <p className="mt-2 text-gray-500">
          Manage page-level SEO settings, metadata and search engine
          visibility.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-gray-200 bg-white p-6"
      >
        {/* Select Page */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Select Page
          </label>

          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-black"
          >
            <option value="home">Home</option>
            <option value="about-us">About Us</option>
            <option value="commercial">Commercial</option>
            <option value="blogs">Blogs</option>
            <option value="contact-us">Contact Us</option>
          </select>
        </div>

        <div className="grid gap-6">
          {/* Meta Title */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Meta Title
              </label>

              <span className="text-xs text-gray-400">
                {formData.metaTitle.length}/60
              </span>
            </div>

            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              maxLength={60}
              placeholder="Enter meta title"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
            />
          </div>

          {/* Meta Description */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Meta Description
              </label>

              <span className="text-xs text-gray-400">
                {formData.metaDescription.length}/160
              </span>
            </div>

            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              maxLength={160}
              rows={4}
              placeholder="Enter meta description"
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
            />
          </div>

          {/* Canonical */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Canonical URL
            </label>

            <input
              type="url"
              name="canonicalUrl"
              value={formData.canonicalUrl}
              onChange={handleChange}
              placeholder="https://example.com/page"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
            />
          </div>

          {/* Robots */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Robots
            </label>

            <select
              name="robots"
              value={formData.robots}
              onChange={handleChange}
              className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-black"
            >
              <option value="index, follow">
                Index, Follow
              </option>

              <option value="noindex, follow">
                Noindex, Follow
              </option>

              <option value="index, nofollow">
                Index, Nofollow
              </option>

              <option value="noindex, nofollow">
                Noindex, Nofollow
              </option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
              Open Graph
            </h2>

            <div className="grid gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  OG Title
                </label>

                <input
                  type="text"
                  name="ogTitle"
                  value={formData.ogTitle}
                  onChange={handleChange}
                  placeholder="Enter Open Graph title"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  OG Description
                </label>

                <textarea
                  name="ogDescription"
                  value={formData.ogDescription}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter Open Graph description"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  OG Image URL
                </label>

                <input
                  type="text"
                  name="ogImage"
                  value={formData.ogImage}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Save SEO
          </button>
        </div>
      </form>
    </div>
  );
}