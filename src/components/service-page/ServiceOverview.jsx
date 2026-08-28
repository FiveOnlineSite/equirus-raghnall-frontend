import Image from "next/image";

export default function ServiceOverview({
  label,
  title,
  image,
  imageAlt = "",
  description,
  coverageTitle = "What Does It Cover?",
  coverageItems = [],
  exampleTitle = "Example:",
  example,
  overlap = true,
}) {
  return (
    <section className={`relative z-20 px-5 md:px-10 xl:px-20 ${overlap ? "-mt-10 pb-16 md:-mt-14 md:pb-20" : "bg-[#F8F9FF] py-16 md:py-20"}`}>
      {overlap ? <span className="absolute inset-x-0 bottom-0 top-10 -z-10 bg-[#F8F9FF] md:top-14" aria-hidden="true" /> : null}
      <div className="mx-auto max-w-[1360px] rounded-xl bg-white px-6 py-10 shadow-[0_4px_22px_rgba(0,0,0,0.1)] md:px-10 md:py-12">
        <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">{label}</p>
        <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">{title}</h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[520px] pb-2 pl-2">
            <span className="absolute bottom-0 left-0 right-[28%] top-[15%] rounded-[5px] bg-[#30337A]" aria-hidden="true" />
            <div className="relative aspect-[1.08/1] overflow-hidden rounded-lg bg-[#f0f0f0]">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
          </div>

          <div>
            <p className="text-sm leading-7 text-[#3d3d3d] md:text-base">{description}</p>
            {coverageItems.length ? (
              <div className="mt-9">
                <h3 className="text-lg font-semibold text-[#242424] sm:text-xl">{coverageTitle}</h3>
                <ul className="mt-5 space-y-4">
                  {coverageItems.map((item) => (
                    <li className="flex items-start gap-4 text-sm leading-6 text-[#3d3d3d] sm:text-base" key={item}>
                      <Image src="/assets/shared/double-tick.svg" alt="" width={22} height={14} className="mt-1 h-[14px] w-[22px] shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {example ? (
          <div className="mt-9">
            <div className="flex items-center gap-3">
              <Image src="/assets/services/directors-officers/example.svg" alt="" width={22} height={28} className="mt-1 h-auto w-[22px] shrink-0" aria-hidden />
              <h3 className="text-lg font-semibold text-[#242424] sm:text-xl">{exampleTitle}</h3>
            </div>
            <p className="mt-3 pl-9 text-sm leading-7 text-[#555555] md:text-base">{example}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
