"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { serviceSections } from "@/data/serviceMenus";

export default function BannersPage() {
  const [selectedSection, setSelectedSection] = useState(
    serviceSections[0]?.value || "",
  );

  const currentSection = useMemo(() => {
    return serviceSections.find(
      (section) => section.value === selectedSection
    );
  }, [selectedSection]);

  const servicePages = useMemo(() => {
    if (!currentSection) return [];

    return currentSection.categories.flatMap((category) =>
      category.links.map((service) => ({
        ...service,
        category: category.title,
      })),
    );
  }, [currentSection]);

  const [selectedPage, setSelectedPage] = useState("");

  const [imageKey, setImageKey] = useState("");
  const [altText, setAltText] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const fileInputRef = useRef(null);
  const successTimerRef = useRef(null);

  const cloudFrontUrl = (
    process.env.NEXT_PUBLIC_AWS_CDN_URL || ""
  ).replace(/\/$/, "");

  const currentImageUrl =
    imageKey && cloudFrontUrl
      ? `${cloudFrontUrl}/${imageKey.replace(/^\//, "")}`
      : "";

  // Set first service whenever section changes
  useEffect(() => {
    if (servicePages.length > 0) {
      setSelectedPage(servicePages[0].slug);
    } else {
      setSelectedPage("");
    }
  }, [selectedSection, servicePages]);

  // Load existing banner whenever page changes
  useEffect(() => {
    if (!selectedPage) return;

    loadBanner();
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

    setSuccessMessage("Banner updated successfully.");
    successTimerRef.current = window.setTimeout(() => {
      setSuccessMessage("");
      successTimerRef.current = null;
    }, 4000);
  }

  async function loadBanner() {
    try {
      setFetching(true);

      setSelectedFile(null);

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      setPreviewUrl("");

      const response = await fetch(
        `/api/admin/banners/${selectedPage}`,
        {
          cache: "no-store",
        }
      );

      // Banner doesn't exist yet
      if (response.status === 404) {
        setImageKey("");
        setAltText("");
        return;
      }

      if (!response.ok) {
        console.error(
          "Unable to load banner:",
          response.status
        );

        setImageKey("");
        setAltText("");

        return;
      }

      const data = await response.json();

      if (data.success && data.banner) {
        setImageKey(data.banner.imageKey || "");
        setAltText(data.banner.altText || "");
      } else {
        setImageKey("");
        setAltText("");
      }
    } catch (error) {
      console.error("Banner fetch error:", error);

      setImageKey("");
      setAltText("");
    } finally {
      setFetching(false);
    }
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
      return imageKey;
    }

    // 1. Ask backend for presigned S3 URL
    const signedResponse = await fetch(
      "/api/admin/upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileType: selectedFile.type,
          fileSize: selectedFile.size,
          page: selectedPage,
        }),
      }
    );

    const signedData =
      await signedResponse.json();

    if (!signedResponse.ok) {
      throw new Error(
        signedData.message ||
          "Unable to generate upload URL"
      );
    }

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

    if (!selectedFile && !imageKey) {
      alert("Please select a banner image.");
      return;
    }

    try {
      setLoading(true);

      // 1. Upload newly selected image
      let finalImageKey = imageKey;

      if (selectedFile) {
        finalImageKey =
          await uploadImageToS3();
      }

      // 2. Save S3 key in MongoDB
      const response = await fetch(
        `/api/admin/banners/${selectedPage}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageKey: finalImageKey,
            altText: altText.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to save banner"
        );
      }

      // 3. Update local state
      setImageKey(finalImageKey);
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
          Manage banners for service pages.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        {/* Service Section */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Service Section
          </label>

          <select
            value={selectedSection}
            onChange={(e) => {
              setSuccessMessage("");
              setSelectedSection(e.target.value);
            }}
            className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
          >
            <option value="">Select a service section</option>
            {serviceSections.map(
              (section) => (
                <option
                  key={section.value}
                  value={section.value}
                >
                  {section.label}
                </option>
              )
            )}
          </select>
        </div>

        {/* Service Page */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Service Page
          </label>

          <select
            value={selectedPage}
            onChange={(e) => {
              setSuccessMessage("");
              setSelectedPage(e.target.value);
            }}
            className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#0A4E08] focus:ring-2 focus:ring-[#0A4E08]/10"
          >
            <option value="">Select a service page</option>
            {currentSection?.categories.map(
              (category) => (
                <optgroup
                  key={category.title}
                  label={category.title}
                >
                  {category.links.map(
                    (service) => (
                      <option
                        key={service.slug}
                        value={service.slug}
                      >
                        {service.label}
                      </option>
                    )
                  )}
                </optgroup>
              )
            )}
          </select>
        </div>

        {fetching ? (
          <div className="py-12 text-center text-sm text-gray-500">
            Loading banner...
          </div>
        ) : (
          <>
            {/* Banner Preview */}
            <div className="mb-8">
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Banner Preview
              </label>

              {previewUrl ||
              currentImageUrl ? (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                  <img
                    src={
                      previewUrl ||
                      currentImageUrl
                    }
                    alt={
                      altText ||
                      "Banner preview"
                    }
                    className="h-72 w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
                  <p className="text-sm text-gray-400">
                    No banner uploaded for
                    this page.
                  </p>
                </div>
              )}
            </div>

            {/* Upload */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                {imageKey
                  ? "Change Banner Image"
                  : "Upload Banner Image"}
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
                  Recommended banner size:
                  1920 × 1080 px
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
                Image Alt Text
              </label>

              <input
                type="text"
                value={altText}
                onChange={(e) => {
                  setSuccessMessage("");
                  setAltText(e.target.value);
                }}
                placeholder="Example: Private Car Insurance"
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
                  : "Save Banner"}
              </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
