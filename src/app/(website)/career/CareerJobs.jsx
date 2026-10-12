"use client";

import { useEffect, useState } from "react";

const jobs = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  title: "Sales Trader (Cash)",
  type: "Full-time",
  industry: "Administration",
  city: "Mumbai",
  country: "India",
  location: "Mumbai, Maharashtra (India)",
  date: "02/28/26",
  description:
    "Client Relationship Management • Build and maintain relationships with big clients like domestic MFs, HFs, AMCs, pension funds, banks, and asset managers. • Be the go-to person for personalized advice and share our research, investment ideas, and market strategies.",
}));

const filterGroups = [
  { title: "Job Type", key: "type", options: [["Full-time", 17]] },
  { title: "Industry", key: "industry", options: [["Administration", 16]] },
  {
    title: "City",
    key: "city",
    options: [["Ahmedabad", 16], ["Bangalore (North)", 16], ["Mumbai", 16], ["NA", 16]],
  },
  { title: "Country", key: "country", options: [["India", 17]] },
];

const countWords = (value) => (value.trim() ? value.trim().split(/\s+/).length : 0);

export default function CareerJobs() {
  const [selected, setSelected] = useState({});
  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [search, setSearch] = useState({ title: "", location: "" });
  const [activeJob, setActiveJob] = useState(null);
  const [resumeName, setResumeName] = useState("Choose a file");
  const [coverNote, setCoverNote] = useState("");

  const closeApplication = () => {
    setActiveJob(null);
    setResumeName("Choose a file");
    setCoverNote("");
  };

  const openApplication = (job) => {
    setActiveJob(job);
    setResumeName("Choose a file");
    setCoverNote("");
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
                  {options.map(([label, count]) => (
                    <label className="flex cursor-pointer items-center gap-3 text-sm leading-5 text-black" key={label}>
                      <input
                        type="checkbox"
                        checked={selected[key]?.includes(label) || false}
                        onChange={() => toggleFilter(key, label)}
                        className="size-6 shrink-0 cursor-pointer appearance-none rounded border border-[#0a4e08] bg-white checked:bg-[#0a4e08] checked:shadow-[inset_0_0_0_5px_white] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a4e08]"
                      />
                      <span>{label}</span><span>({count})</span>
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
                      <p className="text-base font-semibold leading-6 text-[#1d1d1d]">Full-Time</p>
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
              className="grid grid-cols-1 gap-x-3 gap-y-3 px-[18px] pb-7 pt-5 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const fullName = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();
                const subject = encodeURIComponent(`Application for ${activeJob.title}`);
                const body = encodeURIComponent([
                  `Position: ${activeJob.title}`,
                  `Name: ${fullName}`,
                  `Email: ${formData.get("email")}`,
                  `Phone: +91 ${formData.get("phone")}`,
                  `Resume: ${resumeName}`,
                  "",
                  "Cover Note:",
                  coverNote,
                ].join("\n"));
                window.location.href = `mailto:hr@equirusraghnall.com?subject=${subject}&body=${body}`;
              }}
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
                  <input name="phone" type="tel" inputMode="numeric" required className="min-w-0 flex-1 px-2 text-[13px] font-normal outline-none" />
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
                    onChange={(event) => setResumeName(event.target.files?.[0]?.name || "Choose a file")}
                  />
                </div>
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

              <button type="submit" className="-mt-[2px] h-9 w-32 rounded bg-[#0a4e08] text-xs font-semibold text-white transition hover:bg-[#083f07]">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
