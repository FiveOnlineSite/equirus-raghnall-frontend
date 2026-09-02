"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLink,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const buttonClass =
  "inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 text-sm font-medium text-gray-700 transition hover:border-[#0A4E08] hover:text-[#0A4E08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A4E08]/30";

export default function BlogShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const copiedTimeoutRef = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(copiedTimeoutRef.current);
  }, []);

  function openShare(platform) {
    const pageUrl = window.location.href;
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(title);
    const targets = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${pageUrl}`)}`,
      x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    const newTab = window.open(targets[platform], "_blank");
    if (newTab) newTab.opener = null;
  }

  function shareByEmail() {
    const pageUrl = window.location.href;
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${pageUrl}`)}`;
  }

  async function copyLink() {
    const pageUrl = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageUrl);
      } else {
        const input = document.createElement("textarea");
        input.value = pageUrl;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }

      setCopied(true);
      window.clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      aria-label="Share this article"
      className="mt-7 border-y border-gray-200 py-5"
    >
      <p className="text-sm font-semibold text-gray-900">Share this article</p>
      <div className="mt-3 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => openShare("linkedin")}
          className={buttonClass}
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn className="size-4" aria-hidden="true" />
          LinkedIn
        </button>
        <button
          type="button"
          onClick={() => openShare("whatsapp")}
          className={buttonClass}
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="size-4" aria-hidden="true" />
          WhatsApp
        </button>
        <button
          type="button"
          onClick={() => openShare("x")}
          className={buttonClass}
          aria-label="Share on X"
        >
          <FaXTwitter className="size-4" aria-hidden="true" />
          Twitter/X
        </button>
        <button
          type="button"
          onClick={() => openShare("facebook")}
          className={buttonClass}
          aria-label="Share on Facebook"
        >
          <FaFacebookF className="size-4" aria-hidden="true" />
          Facebook
        </button>
        <button
          type="button"
          onClick={shareByEmail}
          className={buttonClass}
          aria-label="Share by email"
        >
          <FaEnvelope className="size-4" aria-hidden="true" />
          Email
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={copyLink}
            className={buttonClass}
            aria-label="Copy article link"
          >
            <FaLink className="size-4" aria-hidden="true" />
            Copy Link
          </button>
          {copied && (
            <span
              role="status"
              className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#151515] px-2.5 py-1.5 text-xs font-medium text-white shadow-lg"
            >
              Link copied
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
