"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { serviceSections } from "@/data/serviceMenus";
import { ApiError, apiRequest } from "@/lib/api";

export default function BannersPage() {
  const [selectedPage, setSelectedPage] = useState(
    serviceSections[0]?.categories[0]?.links[0]?.slug || "",
  );

  const [logoKey, setLogoKey] = useState("");
  const [altText, setAltText] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const fileInputRef = useRef(null);
  const successTimerRef = useRef(null);

  const cloudFrontUrl = (
    process.env.NEXT_PUBLIC_AWS_CDN_URL || ""
  ).replace(/\/$/, "");

  const currentLogoUrl =
    logoKey && cloudFrontUrl
      ? `${cloudFrontUrl}/${logoKey.replace(/^\//, "")}`
      : "";

  // Load existing banner whenever page changes
  useEffect(() => {
    if (!selectedPage) return;

    const controller = new AbortController();

    async function loadBanner() {
      try {
        const data = await apiRequest(
          `/api/admin/banners/${selectedPage}`,
          {
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (data.success && data.banner) {
          setLogoKey(data.banner.logoKey || "");
          setAltText(data.banner.altText || "");
        } else {
          setLogoKey("");
          setAltText("");
        }
      } catch (error) {
        if (error.name === "AbortError") return;

        if (!(error instanceof ApiError && error.status === 404)) {
          console.error("Center logo fetch error:", error);
        }

        setLogoKey("");
        setAltText("");
      } finally {
        if (!controller.signal.aborted) {
          setFetching(false);
        }
      }
    }

    loadBanner();

    return () => controller.abort();
  }, [selectedPage]);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  function showSuccessMessage() {
    if (successTimerRef.current) {
      window.clearTimeout(successTimerRef.current);
    }

    setSuccessMessage("Center logo updated successfully.");
    successTimerRef.current = window.setTimeout(() => {
      setSuccessMessage("");
      successTimerRef.current = null;
    }, 4000);
  }

  function handleImageChange(event) {
    setSuccessMessage("");
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload JPG, PNG or WebP image.");
      event.target.value = "";
      return;
    }

    // 10 MB
    if (file.size > 10 * 1024 * 1024) {
      alert("Image size must be below 10 MB.");
      event.target.value = "";
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const localPreview =
      URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(localPreview);
  }

  async function uploadImageToS3() {
    if (!selectedFile) {
      return logoKey;
    }

    // 1. Ask backend for presigned S3 URL
    const signedData = await apiRequest(
      "/api/admin/upload",
      {
        method: "POST",
        body: JSON.stringify({
          fileType: selectedFile.type,
          fileSize: selectedFile.size,
          page: selectedPage,
          assetType: "service-logo",
        }),
      }
    );

    if (!signedData.uploadUrl || !signedData.fields || !signedData.key) {
      throw new Error(
        "Invalid S3 upload response"
      );
    }

    // 2. Upload directly to S3 with its enforced POST policy
    const uploadFormData = new FormData();

    Object.entries(signedData.fields).forEach(([name, value]) => {
      uploadFormData.append(name, value);
    });

    uploadFormData.append("file", selectedFile);

    const uploadResponse = await fetch(
      signedData.uploadUrl,
      {
        method: "POST",
        body: uploadFormData,
      }
    );

    if (!uploadResponse.ok) {
      throw new Error(
        "Unable to upload image to S3"
      );
    }

    // Return S3 object key
    return signedData.key;
  }

  async function saveBanner() {
    if (!selectedPage) {
      return;
    }

    if (!selectedFile && !logoKey) {
      alert("Please select a center logo.");
      return;
    }

    try {
      setLoading(true);

      // 1. Upload newly selected image
      let finalLogoKey = logoKey;

      if (selectedFile) {
        finalLogoKey =
          await uploadImageToS3();
      }

      // 2. Save S3 key in MongoDB
      const data = await apiRequest(
        `/api/admin/banners/${selectedPage}`,
        {
          method: "PUT",
          body: JSON.stringify({
            logoKey: finalLogoKey,
            altText: altText.trim(),
          }),
        }
      );

      if (!data.success) {
        throw new Error(
          data.message ||
            "Unable to save banner"
        );
      }

      // 3. Update local state
      setLogoKey(finalLogoKey);
      setSelectedFile(null);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setPreviewUrl("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setLoading(false);
      showSuccessMessage();
    } catch (error) {
      console.error(
        "Banner save error:",
        error
      );

      alert(
        error.message ||
          "Unable to update banner."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">
          Banner Management
        </h1>

        <p className="mt-2 text-gray-500">
          Manage the center logo shown on each service page banner.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-8">
          <label className="block max-w-xl text-sm font-medium text-gray-700">
            Service page
          <select
            value={selectedPage}
            onChange={(e) => {
              const nextPage = e.target.value;

              setSuccessMessage("");
              setFetching(Boolean(nextPage));
              setSelectedFile(null);
              setPreviewUrl("");
              setLogoKey("");
              setAltText("");
              setSelectedPage(nextPage);
            }}
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-[#0A4E08]"
          >
            <option value="">Select a service page</option>
            {serviceSections.map((section) => (
              <optgroup key={section.value} label={section.label}>
                {section.categories.map((category) =>
                  category.links.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {category.title} — {service.label}
                    </option>
                  )),
                )}
              </optgroup>
            ))}
          </select>
          </label>
        </div>

        {fetching ? (
          <div className="py-12 text-center text-sm text-gray-500">
            Loading banner...
          </div>
        ) : (
          <>
            {/* Center logo preview */}
            <div className="mb-8">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Center Logo Preview
              </label>

              {previewUrl ||
              currentLogoUrl ? (
                <div className="relative h-72 overflow-hidden rounded-xl border border-gray-200 bg-[#EFF1F4] p-8">
                  <Image
                    src={
                      previewUrl ||
                      currentLogoUrl
                    }
                    alt={
                      altText ||
                      "Center logo preview"
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    unoptimized={Boolean(previewUrl)}
                    className="object-contain p-8"
                  />
                </div>
              ) : (
                <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-[#EFF1F4]">
                  <p className="text-sm text-gray-400">
                    No center logo uploaded for
                    this page.
                  </p>
                </div>
              )}
            </div>

            {/* Upload */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {logoKey
                  ? "Change Center Logo"
                  : "Upload Center Logo"}
              </label>

              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={
                  handleImageChange
                }
                className="
                  block w-full rounded-lg
                  border border-gray-300
                  text-sm text-gray-600

                  file:mr-4
                  file:border-0
                  file:bg-[#0A4E08]
                  file:px-5
                  file:py-3
                  file:text-sm
                  file:font-medium
                  file:text-white

                  hover:file:bg-[#083F07]
                "
              />

              <div className="mt-2 space-y-1 text-xs text-gray-400">
                <p>
                  Recommended: a transparent PNG or WebP with
                  minimal empty space around the logo
                </p>

                <p>
                  Supported formats: JPG,
                  PNG, WebP
                </p>

                <p>
                  Maximum file size: 10 MB
                </p>
              </div>
            </div>

            {/* Selected file */}
            {selectedFile && (
              <div className="mb-6 rounded-lg bg-blue-50 px-4 py-3">
                <p className="text-sm text-blue-700">
                  New image selected:{" "}
                  <span className="font-medium">
                    {selectedFile.name}
                  </span>
                </p>
              </div>
            )}

            {/* Alt Text */}
            <div className="mb-8">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Logo Alt Text
              </label>

              <input
                type="text"
                value={altText}
                onChange={(e) => {
                  setSuccessMessage("");
                  setAltText(e.target.value);
                }}
                placeholder="Example: Private Car Insurance logo"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
              />

              <p className="mt-2 text-xs text-gray-400">
                Used for accessibility and
                image SEO.
              </p>
            </div>

            {/* Save */}
            <div className="border-t border-gray-200 pt-6">
              {successMessage && (
                <p
                  role="status"
                  className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                  {successMessage}
                </p>
              )}

              <div className="flex justify-end">
              <button
                type="button"
                onClick={saveBanner}
                disabled={
                  loading ||
                  fetching ||
                  !selectedPage
                }
                className="rounded-lg bg-[#0A4E08] px-6 py-3 text-sm font-medium text-white shadow-[0_6px_14px_rgba(10,78,8,0.16)] transition hover:bg-[#083F07] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? selectedFile
                    ? "Uploading & Saving..."
                    : "Saving..."
                  : "Save Center Logo"}
              </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
