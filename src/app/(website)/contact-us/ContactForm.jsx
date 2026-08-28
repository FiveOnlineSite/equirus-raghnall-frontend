"use client";

import { useEffect, useState } from "react";

const inputClass = "mt-2 h-10 w-full rounded-sm border-0 bg-[#f7f7f7] px-3 text-sm outline-none ring-[#0A4E08] transition focus:ring-1 md:h-12 md:px-4";

export default function ContactForm({ serviceGroups }) {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (status !== "success" && status !== "error") return undefined;

    const timeoutId = window.setTimeout(() => {
      setFeedback("");
      setStatus("idle");
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Thank you. Your message has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Unable to send your message. Please try again.");
    }
  }

  return (
    <form className="rounded-xl bg-white p-6 shadow-[0_2px_18px_rgba(0,0,0,0.12)] md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
        <label className="text-sm font-medium">First Name<span className="text-red-600">*</span><input className={inputClass} name="firstName" maxLength={80} required /></label>
        <label className="text-sm font-medium">Last Name<span className="text-red-600">*</span><input className={inputClass} name="lastName" maxLength={80} required /></label>
        <label className="text-sm font-medium">Phone<span className="text-red-600">*</span><input className={inputClass} name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10}" minLength={10} maxLength={10} title="Enter a 10-digit phone number" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10); }} required /></label>
        <label className="text-sm font-medium">Email<span className="text-red-600">*</span><input className={inputClass} name="email" type="email" maxLength={254} required /></label>
        <label className="text-sm font-medium">Organization<span className="text-red-600">*</span><input className={inputClass} name="organization" maxLength={150} required /></label>
        <label className="text-sm font-medium">
          What services you are interested in?<span className="text-red-600">*</span>
          <div className="relative">
            <select className={`${inputClass} appearance-none pr-12`} name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {serviceGroups.map((section) => (
                <optgroup label={`${section.segment} — ${section.title}`} key={`${section.segment}-${section.title}`}>
                  {section.links.map((service) => (
                    <option value={service.slug} key={service.slug}>{service.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-4 top-[calc(50%+4px)] size-4 -translate-y-1/2 text-[#555555]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </label>
        <label className="hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label className="text-sm font-medium md:col-span-2">Write your message<textarea className="mt-2 min-h-32 w-full resize-y rounded-sm border-0 bg-[#f7f7f7] p-4 text-sm outline-none ring-[#0A4E08] focus:ring-1" name="message" maxLength={4000} /></label>
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-8 h-12 min-w-44 rounded-md bg-[#0A4E08] px-8 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {feedback ? (
        <p className={`mt-4 text-sm ${status === "success" ? "text-[#0A4E08]" : "text-red-600"}`} role="status" aria-live="polite">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
