"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

const MAX_RESUME_SIZE = 2 * 1024 * 1024;
const ALLOWED_RESUME_EXTENSION = /\.(pdf|doc|docx)$/i;

const jobs = [
  {
    id: 1,
    title: "Business Development Executive",
    type: "Full-time",
    industry: "Administration",
    city: "Ahmedabad",
    country: "India",
    location: "Ahmedabad, Gujarat (India)",
    date: "10/01/26",
    description: "Support new business development, prepare client proposals, coordinate meetings, and maintain strong relationships with corporate insurance clients.",
  },
  {
    id: 2,
    title: "Insurance Placement Executive",
    type: "Full-time",
    industry: "Administration",
    city: "Ahmedabad",
    country: "India",
    location: "Ahmedabad, Gujarat (India)",
    date: "10/02/26",
    description: "Coordinate insurer quotations, compare coverage terms, prepare placement documents, and support the team through policy issuance and renewal.",
  },
  {
    id: 3,
    title: "Operations Analyst",
    type: "Full-time",
    industry: "Administration",
    city: "Ahmedabad",
    country: "India",
    location: "Ahmedabad, Gujarat (India)",
    date: "10/03/26",
    description: "Maintain operational records, track service requests, prepare reports, and help improve workflows across policy administration and client servicing.",
  },
  {
    id: 4,
    title: "Cyber Risk Analyst",
    type: "Full-time",
    industry: "Administration",
    city: "Bangalore (North)",
    country: "India",
    location: "Bangalore North, Karnataka (India)",
    date: "10/04/26",
    description: "Assess client cyber exposures, assist with risk questionnaires, review coverage requirements, and support the development of cyber insurance solutions.",
  },
  {
    id: 5,
    title: "Employee Benefits Consultant",
    type: "Full-time",
    industry: "Administration",
    city: "Bangalore (North)",
    country: "India",
    location: "Bangalore North, Karnataka (India)",
    date: "10/05/26",
    description: "Advise corporate clients on employee benefit programmes, analyse utilisation data, coordinate renewals, and support benefit communication initiatives.",
  },
  {
    id: 6,
    title: "Insurance Technology Associate",
    type: "Full-time",
    industry: "Administration",
    city: "Bangalore (North)",
    country: "India",
    location: "Bangalore North, Karnataka (India)",
    date: "10/06/26",
    description: "Support digital insurance workflows, document product requirements, coordinate testing, and help teams improve technology-enabled client experiences.",
  },
  {
    id: 7,
    title: "Sales Trader (Cash)",
    type: "Full-time",
    industry: "Administration",
    city: "Mumbai",
    country: "India",
    location: "Mumbai, Maharashtra (India)",
    date: "10/07/26",
    description: "Build relationships with institutional clients, share relevant market insights, coordinate trade execution, and provide responsive day-to-day support.",
  },
  {
    id: 8,
    title: "Corporate Insurance Relationship Manager",
    type: "Full-time",
    industry: "Administration",
    city: "Mumbai",
    country: "India",
    location: "Mumbai, Maharashtra (India)",
    date: "10/08/26",
    description: "Manage corporate accounts, understand evolving risk requirements, coordinate internal specialists, and deliver timely insurance programme reviews.",
  },
  {
    id: 9,
    title: "Claims Specialist",
    type: "Full-time",
    industry: "Administration",
    city: "Mumbai",
    country: "India",
    location: "Mumbai, Maharashtra (India)",
    date: "10/09/26",
    description: "Review claim documents, coordinate with clients and insurers, track claim progress, and help achieve fair and timely claim resolutions.",
  },
  {
    id: 10,
    title: "Underwriting Support Analyst",
    type: "Full-time",
    industry: "Administration",
    city: "NA",
    country: "India",
    location: "Remote (India)",
    date: "10/10/26",
    description: "Review proposal information, organise underwriting data, support quote comparisons, and maintain accurate records for insurance submissions.",
  },
  {
    id: 11,
    title: "Compliance Coordinator",
    type: "Full-time",
    industry: "Administration",
    city: "NA",
    country: "India",
    location: "Remote (India)",
    date: "10/11/26",
    description: "Maintain compliance documentation, monitor recurring filings, support internal reviews, and help teams follow insurance broking regulations.",
  },
  {
    id: 12,
    title: "Client Servicing Executive",
    type: "Full-time",
    industry: "Administration",
    city: "NA",
    country: "India",
    location: "Remote (India)",
    date: "10/12/26",
    description: "Respond to client requests, coordinate endorsements and policy documents, maintain service trackers, and support renewal activities remotely.",
  },
];

const filterGroups = [
  { title: "Job Type", key: "type", options: ["Full-time"] },
  { title: "Industry", key: "industry", options: ["Administration"] },
  {
    title: "City",
    key: "city",
    options: ["Ahmedabad", "Bangalore (North)", "Mumbai", "NA"],
  },
  { title: "Country", key: "country", options: ["India"] },
];

const getFilterCount = (key, value) => jobs.filter((job) => job[key] === value).length;

const countWords = (value) => (value.trim() ? value.trim().split(/\s+/).length : 0);

export default function CareerJobs() {
  const [selected, setSelected] = useState({});
  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [search, setSearch] = useState({ title: "", location: "" });
  const [activeJob, setActiveJob] = useState(null);
  const [resumeName, setResumeName] = useState("Choose a file");
  const [resumeError, setResumeError] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("idle");
  const [applicationFeedback, setApplicationFeedback] = useState("");

  const closeApplication = () => {
    setActiveJob(null);
    setResumeName("Choose a file");
    setResumeError("");
    setCoverNote("");
    setApplicationStatus("idle");
    setApplicationFeedback("");
  };

  const openApplication = (job) => {
    setActiveJob(job);
    setResumeName("Choose a file");
    setResumeError("");
    setCoverNote("");
    setApplicationStatus("idle");
    setApplicationFeedback("");
  };

  const handleResumeChange = (event) => {
    const file = event.currentTarget.files?.[0];
    setResumeError("");

    if (!file) {
      setResumeName("Choose a file");
      return;
    }

    if (!ALLOWED_RESUME_EXTENSION.test(file.name)) {
      event.currentTarget.value = "";
      setResumeName("Choose a file");
      setResumeError("Upload a PDF, DOC, or DOCX file.");
      return;
    }

    if (file.size > MAX_RESUME_SIZE) {
      event.currentTarget.value = "";
      setResumeName("Choose a file");
      setResumeError("The resume must be 2 MB or smaller.");
      return;
    }

    setResumeName(file.name);
  };

  const handleApplicationSubmit = async (event) => {
    event.preventDefault();
    setResumeError("");
    setApplicationStatus("sending");
    setApplicationFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || !resume.size) {
      setResumeError("Please select your resume.");
      setApplicationStatus("idle");
      return;
    }

    if (!ALLOWED_RESUME_EXTENSION.test(resume.name) || resume.size > MAX_RESUME_SIZE) {
      setResumeError("Upload a PDF, DOC, or DOCX file up to 2 MB.");
      setApplicationStatus("idle");
      return;
    }

    formData.set("organization", "Career application");
    formData.set("service", "career-application");
    formData.set("position", activeJob.title);
    formData.set("message", `Application for ${activeJob.title}\n\n${coverNote}`);
    formData.set("website", "");

    try {
      await apiRequest("/api/contact", {
        method: "POST",
        body: formData,
      });

      form.reset();
      setResumeName("Choose a file");
      setCoverNote("");
      setApplicationStatus("success");
      setApplicationFeedback("Thank you. Your application has been submitted successfully.");
    } catch (error) {
      setApplicationStatus("error");
      setApplicationFeedback(error.message || "Unable to submit your application. Please try again.");
    }
  };

  useEffect(() => {
    if (!activeJob) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveJob(null);
        setResumeName("Choose a file");
        setCoverNote("");
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeJob]);

  const toggleFilter = (key, value) => {
    setSelected((previous) => ({
      ...previous,
      [key]: previous[key]?.includes(value)
        ? previous[key].filter((item) => item !== value)
        : [...(previous[key] || []), value],
    }));
  };

  const visibleJobs = jobs.filter((job) => {
    const matchesFilters = filterGroups.every(({ key }) => !selected[key]?.length || selected[key].includes(job[key]));
    const matchesTitle = `${job.title} ${job.description}`.toLowerCase().includes(search.title);
    const matchesLocation = job.location.toLowerCase().includes(search.location);
    return matchesFilters && matchesTitle && matchesLocation;
  });

  return (
    <>
      <section id="open-positions" className="scroll-mt-[100px] bg-white py-[60px]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="text-center">
          <p className="text-base font-medium uppercase leading-[30px] tracking-[0.03em] text-[#0a4e08]">Career Opportunities</p>
          <h2 className="mt-4 text-[32px] font-semibold leading-[44px] text-[#080808]">Find Your Place With Us</h2>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-[305px_minmax(0,1fr)]">
          <aside aria-label="Filter jobs" className="rounded-lg border border-[#bfbfbf] bg-[#fcfcfc] p-[23px]">
            {filterGroups.map(({ title, key, options }) => (
              <fieldset className="mb-4 last:mb-0" key={key}>
                <legend className="mb-4 text-base font-semibold leading-6 text-[#1d1d1d]">{title}</legend>
                <div className="space-y-3">
                  {options.map((label) => (
                    <label className="flex cursor-pointer items-center gap-3 text-sm leading-5 text-black" key={label}>
                      <input
                        type="checkbox"
                        checked={selected[key]?.includes(label) || false}
                        onChange={() => toggleFilter(key, label)}
                        className="size-6 shrink-0 cursor-pointer appearance-none rounded border border-[#0a4e08] bg-white checked:bg-[#0a4e08] checked:shadow-[inset_0_0_0_5px_white] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a4e08]"
                      />
                      <span>{label}</span><span>({getFilterCount(key, label)})</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </aside>

          <div className="min-w-0">
            <form
              role="search"
              className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_197px]"
              onSubmit={(event) => {
                event.preventDefault();
                setSearch({ title: titleInput.trim().toLowerCase(), location: locationInput.trim().toLowerCase() });
              }}
            >
              <label className="sr-only" htmlFor="career-title">Job title or skill</label>
              <input id="career-title" type="search" value={titleInput} onChange={(event) => setTitleInput(event.target.value)} placeholder="Job title or skill" className="h-12 min-w-0 rounded-lg border border-[#bfbfbf] bg-[#fcfcfc] px-[14px] text-sm text-[#1d1d1d] placeholder:text-[#444]" />
              <label className="sr-only" htmlFor="career-location">City, State, Province / Country</label>
              <input id="career-location" type="search" value={locationInput} onChange={(event) => setLocationInput(event.target.value)} placeholder="City, State, Province / Country" className="h-12 min-w-0 rounded-lg border border-[#bfbfbf] bg-[#fcfcfc] px-[14px] text-sm text-[#1d1d1d] placeholder:text-[#444]" />
              <button type="submit" className="h-12 rounded-lg bg-[#0a4e08] px-6 text-base font-semibold text-white transition hover:bg-[#083f07] sm:col-span-2 xl:col-span-1">Search</button>
            </form>

            <div aria-live="polite" className="mt-6 space-y-5">
              {visibleJobs.length ? visibleJobs.map((job) => (
                <article className="flex min-h-[230px] flex-col rounded-lg border border-[#c9c9c9] bg-[#fcfcfc] p-[23px]" key={job.id}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold leading-[30px] text-[#0a4e08]">{job.title}</h3>
                      <p className="mt-[7px] text-sm leading-5 text-[#1d1d1d]">{job.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-semibold leading-6 text-[#1d1d1d]">{job.type}</p>
                      <p className="mt-1 text-sm leading-5 text-[#444]">{job.date}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-5 text-[#444]">{job.description}</p>
                  <button type="button" onClick={() => openApplication(job)} className="mt-6 inline-flex h-11 w-[126px] items-center justify-center self-start rounded-lg bg-[#0a4e08] text-base font-semibold text-white transition hover:bg-[#083f07]">Apply Now</button>
                </article>
              )) : (
                <div className="rounded-lg border border-[#c9c9c9] bg-[#fcfcfc] p-8 text-center text-[#444]">No positions match these filters.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      </section>

      {activeJob && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/55 px-3 pb-3 pt-[12vh]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeApplication();
          }}
        >
          <div role="dialog" aria-modal="true" aria-labelledby="application-title" className="max-h-[calc(88vh-12px)] w-full max-w-[850px] overflow-y-auto rounded-[6px] bg-[#fafafa] shadow-[0_14px_45px_rgba(0,0,0,0.22)]">
            <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-[#7f9f7f] bg-[#fafafa] pl-[18px] pr-[10px]">
              <h3 id="application-title" className="m-0 text-[17px] font-semibold leading-6 text-[#111]">{activeJob.title}</h3>
              <button type="button" onClick={closeApplication} aria-label="Close application form" className="grid size-9 place-items-center border-0 bg-transparent text-black">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </div>

            <form
              encType="multipart/form-data"
              className="grid grid-cols-1 gap-x-3 gap-y-3 px-[18px] pb-7 pt-5 sm:grid-cols-2"
              onSubmit={handleApplicationSubmit}
            >
              <label className="flex min-w-0 flex-col gap-1 text-xs font-medium leading-4 text-[#111]">
                <span>First Name<span className="text-[#e00000">*</span></span>
                <input name="firstName" type="text" required className="h-9 w-full rounded-[3px] border border-[#d0d0d0] bg-white px-2 text-[13px] font-normal outline-none focus:border-[#0a4e08]" />
              </label>

              <label className="flex min-w-0 flex-col gap-1 text-xs font-medium leading-4 text-[#111]">
                <span>Last Name<span className="text-[#e00000">*</span></span>
                <input name="lastName" type="text" required className="h-9 w-full rounded-[3px] border border-[#d0d0d0] bg-white px-2 text-[13px] font-normal outline-none focus:border-[#0a4e08]" />
              </label>

              <label className="flex min-w-0 flex-col gap-1 text-xs font-medium leading-4 text-[#111]">
                <span>Email<span className="text-[#e00000">*</span></span>
                <input name="email" type="email" required className="h-9 w-full rounded-[3px] border border-[#d0d0d0] bg-white px-2 text-[13px] font-normal outline-none focus:border-[#0a4e08]" />
              </label>

              <label className="flex min-w-0 flex-col gap-1 text-xs font-medium leading-4 text-[#111]">
                <span>Phone<span className="text-[#e00000">*</span></span>
                <span className="flex h-9 overflow-hidden rounded-[3px] border border-[#d0d0d0] bg-white focus-within:border-[#0a4e08]">
                  <span className="grid w-[32px] shrink-0 place-items-center border-r border-[#d0d0d0] bg-[#f2f2f2] text-[11px] font-normal">+91</span>
                  <input name="phone" type="tel" inputMode="numeric" pattern="[0-9]{10}" minLength={10} maxLength={10} title="Enter a 10-digit phone number" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10); }} required className="min-w-0 flex-1 px-2 text-[13px] font-normal outline-none" />
                </span>
              </label>

              <div className="flex min-w-0 flex-col gap-1 text-xs font-medium leading-4 text-[#111]">
                <label htmlFor="application-resume">Updated Resume<span className="text-[#e00000">*</span></label>
                <div className="flex h-9 overflow-hidden rounded-[3px] border border-[#d0d0d0] bg-white">
                  <span className="min-w-0 flex-1 truncate px-2 py-2 text-[11px] font-normal text-[#444]">{resumeName}</span>
                  <label htmlFor="application-resume" className="grid w-[78px] shrink-0 cursor-pointer place-items-center bg-[#0a4e08] text-[11px] font-semibold text-white">Browse</label>
                  <input
                    id="application-resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="sr-only"
                    onChange={handleResumeChange}
                  />
                </div>
                <span className={`text-[10px] font-normal leading-4 ${resumeError ? "text-[#e00000]" : "text-[#555]"}`} role={resumeError ? "alert" : undefined}>
                  {resumeError || "PDF, DOC, or DOCX files up to 2 MB."}
                </span>
              </div>

              <label className="flex min-w-0 flex-col gap-1 text-xs font-medium leading-4 text-[#111]">
                <span>Cover Note<span className="text-[#e00000">*</span></span>
                <textarea
                  name="coverNote"
                  required
                  value={coverNote}
                  onChange={(event) => {
                    if (countWords(event.target.value) <= 500) setCoverNote(event.target.value);
                  }}
                  className="h-9 w-full resize-none rounded-[3px] border border-[#d0d0d0] bg-white px-2 py-1 text-[13px] outline-none focus:border-[#0a4e08]"
                />
                <span className="text-right text-[9px] font-normal leading-3 text-[#222]">{countWords(coverNote)}/500 Words</span>
              </label>

              <button type="submit" disabled={applicationStatus === "sending"} className="-mt-[2px] h-9 w-32 rounded bg-[#0a4e08] text-xs font-semibold text-white transition hover:bg-[#083f07] disabled:cursor-not-allowed disabled:opacity-60">
                {applicationStatus === "sending" ? "Submitting..." : "Submit"}
              </button>
              {applicationFeedback ? (
                <p className={`text-xs leading-5 sm:col-span-2 ${applicationStatus === "success" ? "text-[#0a4e08]" : "text-[#e00000]"}`} role="status" aria-live="polite">
                  {applicationFeedback}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
