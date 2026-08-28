"use client";

import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/9876543210";

export default function WhatsAppFloatingButton() {
  function addCurrentPageToMessage(event) {
    const message = `Hi, I have a query about ${window.location.href}`;
    event.currentTarget.href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
  }

  return (
    <a
      href={WHATSAPP_URL}
      onClick={addCurrentPageToMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[100] block size-14 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:bottom-7 md:right-7 md:size-16"
    >
      <Image src="/assets/shared/whatsapp.svg" alt="" fill sizes="(max-width: 768px) 56px, 64px" aria-hidden="true" />
    </a>
  );
}
