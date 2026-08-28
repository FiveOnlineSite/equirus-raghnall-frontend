import Link from "next/link";

export default function ServiceCta({
  title,
  description,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="bg-[#075409] px-5 py-14 text-center text-white md:px-10 md:py-16">
      <div className="mx-auto max-w-[820px]">
        <h2 className="text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] md:text-[36px]">{title}</h2>
        <p className="mx-auto mt-5 max-w-[650px] text-sm leading-7 text-white/90 md:text-base">{description}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryAction ? (
            <Link href={primaryAction.href} className="inline-flex h-12 w-full max-w-[210px] items-center justify-center rounded-md bg-white px-6 text-base font-semibold text-[#376E00] transition hover:bg-white/90">
              {primaryAction.label}
            </Link>
          ) : null}
          {secondaryAction ? (
            <Link href={secondaryAction.href} className="inline-flex h-12 w-full max-w-[210px] items-center justify-center rounded-md border border-white px-6 text-base font-semibold text-white transition hover:bg-[#2f5e00]" download={secondaryAction.download || undefined}>
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
