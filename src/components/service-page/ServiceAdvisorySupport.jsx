import Image from "next/image";

export default function ServiceAdvisorySupport({
  label,
  title,
  description,
  steps = [],
  image,
  imageAlt = "",
  imagePosition = "center",
}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:px-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">{label}</p>
          <h2 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold leading-[1.3] tracking-[-0.02em] text-[#111111] md:text-[36px]">{title}</h2>
          <p className="mt-6 max-w-[650px] text-sm leading-7 text-[#555555] md:text-base">{description}</p>

          <ol className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[1.25rem_minmax(0,1fr)] items-baseline gap-x-2">
                <span className="text-left text-base font-medium leading-6 text-[#3d3d3d] sm:text-lg">
                  {index + 1}.
                </span>
                <div>
                  <h3 className="text-base font-medium leading-6 text-[#3d3d3d] sm:text-lg">{step.title}</h3>
                  {step.description ? <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">{step.description}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] pb-2 pr-2">
          <span className="absolute bottom-0 left-[32%] right-0 top-[38%] rounded-[5px] bg-[#30337A]" aria-hidden="true" />
          <div className="relative aspect-[0.88/1] overflow-hidden rounded-lg bg-[#f0f0f0]">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" style={{ objectPosition: imagePosition }} />
          </div>
        </div>
      </div>
    </section>
  );
}
