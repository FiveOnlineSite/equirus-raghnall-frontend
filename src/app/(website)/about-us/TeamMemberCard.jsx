"use client";

import Image from "next/image";

export default function TeamMemberCard({ member, fallbackDescription }) {
  const resetScrollPosition = (event) => {
    const label = event.currentTarget.querySelector(".team-card-label");

    if (label) {
      label.scrollTop = 0;
    }
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      resetScrollPosition(event);
    }
  };

  return (
    <article
      tabIndex={0}
      className="group relative aspect-[0.9/1] w-full max-w-[248px] justify-self-center overflow-hidden rounded-lg border border-[#65689B] outline-none"
      onMouseLeave={resetScrollPosition}
      onBlur={handleBlur}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 1024px) 50vw, 248px"
        className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-focus-visible:scale-[1.03] group-focus-visible:blur-sm"
        style={{ objectPosition: member.position }}
      />
      <div className="team-card-label absolute inset-x-0 bottom-0 px-4 py-2.5 text-white">
        <h3 className="text-[13px] font-semibold leading-4 sm:text-base sm:leading-6">{member.name}</h3>
        <p className="mt-1 mb-1.5 text-[11px] leading-4 text-white/95 sm:mb-2 sm:text-sm sm:leading-5">{member.role}</p>
        <p className="team-card-description whitespace-pre-line text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-6">
          {member.description ?? fallbackDescription}
        </p>
      </div>
    </article>
  );
}
