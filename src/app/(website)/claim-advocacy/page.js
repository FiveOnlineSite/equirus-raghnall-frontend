import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Claim Advocacy | Equirus Raghnall",
  description: "Expert support from the first notification of loss to final recovery.",
};

const asset = (name) => `/assets/claims/${name}`;

const strengths = [
  { title: "Expertise", icon: "expertise.svg" },
  { title: "Advocacy", icon: "advocacy.svg" },
  { title: "Clarity", icon: "clarity.svg" },
  { title: "Commitment", icon: "commitment.svg" },
];

const journey = [
  { title: "Report", description: "Notify us of the loss and receive immediate guidance on the information required." },
  { title: "Review", description: "We interpret your policy, review coverage, and assess applicable extensions and exclusions." },
  { title: "Strategise", description: "We develop the claims strategy, documentation plan, and align all key stakeholders." },
  { title: "Assess", description: "We assess losses, quantify damages, evaluate interruptions, and identify causes." },
  { title: "Advocate", description: "We engage with insurers, negotiate claim value, manage disputes, and support escalations." },
  { title: "Recover", description: "We support settlement, follow up on payments, coordinate recovery." },
];

const risks = [
  { title: "Property & Engineering", icon: "property.svg", iconSize: 24, description: "Support for complex claims involving property damage, machinery breakdown, fire, flood, and major industrial losses." },
  { title: "Marine", icon: "marine.svg", iconSize: 24, description: "Specialist support for cargo damage, transit losses, theft, contamination, and other marine-related claims." },
  { title: "Business Interruption", icon: "business.svg", iconSize: 24, description: "Expert guidance for loss of profit, increased operating costs, indemnity periods, and financial loss assessment." },
  { title: "Liability & Financial Lines", icon: "liability.svg", iconSize: 24, description: "Claims expertise across D&O, public liability, product liability, professional indemnity, and related exposures." },
  { title: "Construction & Infrastructure", icon: "construction.svg", iconSize: 24, description: "Claims support for CAR, EAR, project losses, and complex matters involving contractors and multiple stakeholders." },
  { title: "Cyber & Emerging Risks", icon: "cyber.svg", iconSize: 24, description: "Support for cyber incidents, ransomware, business interruption, surety, and evolving technology-related risk exposures." },
];

const preparedness = [
  "Policy Gap Analysis",
  "Asset Valuation Review",
  "Business Interruption Review",
  "Claims Readiness Assessment",
  "Mock Claim Exercises",
  "Claims Documentation Framework",
  "Claims Training",
  "Plant Risk Walkthroughs",
];

const insights = [
  { title: "Why Commercial Claims Get Delayed?", image: "insight-delayed.png", category: "Updates", action: "Know More" },
  { title: "The Problem with Underinsurance", image: "insight-underinsurance.png", category: "Updates", action: "Know More" },
  { title: "Major fire and business interruption.", image: "insight-fire.png", category: "Case Study", action: "Read Case Study" },
  { title: "Complex project loss.", image: "insight-project.png", category: "Case Study", action: "Read Case Study" },
];

const resources = [
  ["Claim Readiness Checklist", "claim-readiness-checklist.txt"],
  ["Claims Document Guide", "claims-document-guide.txt"],
  ["Business Interruption Template", "business-interruption-template.txt"],
  ["Incident Reporting Guide", "incident-reporting-guide.txt"],
];

const faqs = [
  { question: "What should we do immediately after a loss?", answer: "Protect people and property first, take reasonable steps to limit further damage, preserve evidence, and contact your claims adviser as soon as possible." },
  { question: "When should a claim be notified to the insurer?", answer: "Notify your insurer as soon as practicable. Your policy may set a specific notification period, so check its terms and speak with your adviser promptly." },
  { question: "What documents are required for a claim?", answer: "Requirements depend on the policy and type of loss. Common records include incident details, photographs, invoices, ownership or valuation records, and correspondence relating to the event." },
  { question: "How long can a commercial claim take to settle?", answer: "Timing depends on the complexity of the loss, the information available, policy terms, and the insurer's assessment. Our team helps coordinate the process and keep you informed." },
  { question: "What happens if an insurer rejects a claim?", answer: "We can review the insurer's reasons alongside the policy wording and supporting evidence, then help you understand the available next steps." },
  { question: "What is underinsurance?", answer: "Underinsurance means the insured value or limit is below the amount needed for the covered exposure. It can affect the amount recoverable after a loss, depending on your policy terms." },
];

function Eyebrow({ children, light = false }) {
  return <p className={`text-base font-medium uppercase leading-[30px] tracking-[0.03em] ${light ? "text-white" : "text-[#0a4e08]"}`}>{children}</p>;
}

function Action({ children, href = "/contact-us", outline = false, onDark = false, accent = "green" }) {
  const darkTextColor = accent === "blue" ? "text-[#2c2f71]" : "text-[#0a4e08]";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 min-w-[197px] items-center justify-center rounded-lg border px-5 text-center text-base font-semibold transition hover:opacity-85 ${onDark ? outline ? "border-white text-white" : `border-white bg-white ${darkTextColor}` : outline ? "border-[#0a4e08] text-[#0a4e08]" : "border-[#0a4e08] bg-[#0a4e08] text-white"}`}
    >
      {children}
    </Link>
  );
}

export default function ClaimAdvocacyPage() {
  return (
    <main>
      <section className="overflow-hidden border-b border-[#d8d8df] bg-[linear-gradient(185deg,#fff_16%,#f6f7fe_91%)]">
        <div className="relative mx-auto min-h-[625px] max-w-[1440px] px-5 pt-16 md:px-10 lg:pt-[85px] xl:px-20">
          <div className="relative z-10 max-w-[630px]">
            <Eyebrow>Claim Advisory</Eyebrow>
            <h1 className="mt-[26px] text-[clamp(30px,7vw,38px)] font-semibold leading-[1.18] text-[#080808] sm:text-[48px]">When Losses Happen,<br />Experience Matters.</h1>
            <p className="mt-[27px] max-w-[522px] text-base leading-7 text-[#3d3d3d]">We stand by you when it matters most. Our Claims Advisory team supports you from the first notification of loss to final recovery — with expertise, advocacy and commitment.</p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Action>Report a Claim</Action>
              <Action outline>Talk to an Expert</Action>
            </div>
          </div>
          <div className="relative mt-10 h-[320px] w-full lg:absolute lg:bottom-0 lg:left-[38%] lg:mt-0 lg:h-[565px] lg:w-[848px]">
            <Image src={asset("hero.png")} alt="Claims advisers discussing a loss with a business client" fill priority sizes="(max-width: 1023px) 100vw, 848px" className="object-contain object-bottom" />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(187deg,#f6f7fe_9%,#fff_72%)]">
        <div className="mx-auto grid min-h-[755px] max-w-[1440px] gap-12 px-5 pb-[60px] pt-[60px] md:px-10 lg:grid-cols-2 xl:px-20 min-[1440px]:grid-cols-[522px_1fr] min-[1440px]:gap-[245px]">
          <div>
            <Eyebrow>Why Claim Advocacy</Eyebrow>
            <h2 className="mt-4 text-[32px] font-semibold leading-[44px] text-[#080808]">Insurance Is More Than a Policy.<br />It&apos;s About Recovery.</h2>
            <p className="mt-6 text-base leading-7 text-[#3d3d3d]">A claim tests insurance through policy interpretation, technical assessments, financial calculations, and negotiations. We provide structure, expertise, and advocacy with confidence.</p>
            <div className="mt-[56px] space-y-5">
              {strengths.map(({ title, icon }) => (
                <div className="flex items-start gap-4" key={title}>
                  <Image src={asset(icon)} alt="" width={28} height={28} className="mt-0.5 size-7 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold leading-[30px] text-[#080808]">{title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#3d3d3d]">Deep insurance and industry knowledge</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0 self-end lg:mb-1 lg:h-[446px] min-[1440px]:-ml-[14px]">
            <div className="absolute -bottom-2 -right-2 top-8 w-[70%] rounded bg-[#2c2f71] lg:-bottom-[2px] lg:top-10 min-[1440px]:-right-1" aria-hidden="true" />
            <div className="relative z-10 h-[350px] w-full overflow-hidden rounded lg:absolute lg:bottom-[6px] lg:left-0 lg:h-[440px] min-[1440px]:w-[522px]">
              <Image src={asset("overview.png")} alt="Adviser meeting a client about an insurance claim" fill sizes="(max-width: 1023px) 100vw, 522px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2c2f71] px-5 py-[56px] text-center text-white md:px-10">
        <div className="mx-auto max-w-[720px]">
          <Eyebrow light>Our Promise</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[44px]">Don&apos;t let a denied claim be the final word.</h2>
          <p className="mx-auto mt-6 max-w-[591px] text-base leading-7">Every day you wait, evidence fades and deadlines close. Our advocates are ready right now — get a clear, confidential claim assessment within 24 hours</p>
          <div className="mt-[64px]"><Action onDark accent="blue">Report a Claim</Action></div>
        </div>
      </section>

      <section className="bg-[linear-gradient(186deg,#fff_16%,#f6f7fe_91%)] py-9">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10 xl:px-20">
          <Eyebrow>Our Claim Journey</Eyebrow>
          <h2 className="mt-1 text-[28px] font-bold leading-9 text-[#080808]">From Incident To Recovery</h2>
          <div className="mt-6 grid gap-x-4 gap-y-3 text-left md:grid-cols-2 lg:grid-cols-3">
            {journey.map(({ title, description }, index) => (
              <article className="min-h-[168px] rounded-lg bg-white p-4 shadow-[0_3px_14px_rgba(20,20,20,0.09)]" key={title}>
                <span className="block text-[38px] font-semibold leading-12 text-[#2c2f71]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-base font-semibold leading-6 text-black">{title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-[#4a4a4a]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(185deg,#f6f7fe_9%,#fff_72%)] pb-[60px] pt-[60px]">
        <div className="mx-auto max-w-[1440px] px-5 text-left md:px-10 xl:px-20">
          <Eyebrow>Claim Expertise</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[44px] text-[#080808]">Expertise Across Different Risks</h2>
          <div className="mt-[48px] grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
            {risks.map(({ title, icon, iconSize, description }) => (
              <article className="min-h-[158px] rounded-xl bg-white px-5 py-5 shadow-[0_1px_16px_rgba(0,0,0,0.1)]" key={title}>
                <div className="flex items-center gap-3">
                  <Image src={asset(icon)} alt="" width={iconSize} height={iconSize} className="shrink-0" />
                  <h3 className="text-[18px] font-semibold leading-7 text-[#080808]">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#444]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[60px]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:min-h-[657px] lg:grid-cols-2 xl:px-20 min-[1440px]:grid-cols-[522px_1fr] min-[1440px]:gap-[245px]">
          <div>
            <Eyebrow>Claims Preparedness</Eyebrow>
            <h2 className="mt-4 text-[32px] font-semibold leading-[44px] text-[#080808]">Prepare Before the Loss.</h2>
            <p className="mt-6 text-base leading-7 text-[#3d3d3d]">Effective claims management begins before a loss occurs. Our Claims Preparedness services help businesses identify gaps and prepare teams to respond effectively.</p>
            <ul className="mt-8 space-y-3">
              {preparedness.map((item) => (
                <li className="flex items-center gap-3 text-base font-semibold leading-[30px] text-[#080808]" key={item}>
                  <Image src={asset("check.svg")} alt="" width={28} height={28} className="size-7 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8"><Action>Get Claim Ready</Action></div>
          </div>
          <div className="relative h-[388px] min-w-0 lg:h-[613px] min-[1440px]:-ml-[14px]">
            <div className="absolute left-0 top-0 h-[380px] w-[calc(100%_-_8px)] lg:top-[125px] lg:h-[480px] lg:max-w-[480px]">
              <div className="absolute -bottom-2 -right-2 h-[90%] w-[70%] rounded-lg bg-[#2c2f71]" aria-hidden="true" />
              <div className="absolute inset-0 z-10 overflow-hidden rounded-lg">
                <Image src={asset("preparedness.png")} alt="Claims adviser helping a client prepare for a loss" fill sizes="(max-width: 1023px) 100vw, 480px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FF] pb-[60px] pt-[60px]">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10 xl:px-20">
          <Eyebrow>Claim Insights</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[44px] text-[#080808]">Insights Backed by Experience</h2>
          <div className="mt-[48px] grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
            {insights.map(({ title, image, category, action }) => (
              <article className="overflow-hidden rounded" key={title}>
                <div className="relative h-[193px] overflow-hidden rounded">
                  <Image src={asset(image)} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 305px" className="object-cover" />
                  <span className="absolute left-3 top-3 rounded border border-white/10 bg-black/10 px-[10px] py-1 text-sm font-semibold leading-6 text-white backdrop-blur-[2px]">{category}</span>
                </div>
                <p className="mt-3 flex justify-between text-sm leading-5 text-[#3d3d3d]"><span>11 Jul</span><span>2 min read</span></p>
                <h3 className="mt-3 min-h-[56px] text-[18px] font-semibold leading-7 text-[#080808]">{title}</h3>
                <Link href="/blogs" className="mt-4 inline-flex items-center gap-2 text-base font-bold leading-[30px] text-[#0a4e08] hover:underline">
                  {action}
                  <span className="relative size-[18px]">
                    <Image src={asset("insight-arrow-circle.png")} alt="" width={18} height={18} />
                    <Image src={asset("insight-arrow.svg")} alt="" width={12} height={12} className="absolute left-[3px] top-[3px]" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
          <Link href="/blogs" className="mt-10 inline-flex h-10 min-w-[96px] items-center justify-center rounded-lg border border-[#0a4e08] px-8 text-sm font-semibold text-[#0a4e08] hover:bg-[#0a4e08] hover:text-white">View All</Link>
        </div>
      </section>

      <section className="bg-white pb-[60px] pt-[60px]">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10 xl:px-20">
          <Eyebrow>Knowledge Center</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[44px] text-[#080808]">Practical Resources For Better Claims</h2>
          <div className="mt-[48px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map(([label, file]) => (
              <a href={asset(file)} download className="flex h-[47px] items-center justify-center gap-2 rounded-lg border border-[#0a4e08]/80 px-2 text-[13px] font-bold text-[#0a4e08] hover:bg-[#f6f7fe]" key={label}>
                <span>{label}</span>
                <Image src={asset("download.svg")} alt="" width={20} height={20} className="size-5 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a4e08] px-5 py-[60px] text-center text-white md:px-10">
        <div className="mx-auto max-w-[650px]">
          <Eyebrow light>Our Commitment</Eyebrow>
          <h2 className="mt-4 text-[32px] font-semibold leading-[44px]">When A Loss Happens, We’re Ready</h2>
          <p className="mx-auto mt-6 max-w-[591px] text-base leading-7">From first notification to final recovery, our Claims Advisory team is here with the expertise, structure and advocacy you can rely on.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Action onDark>Report a Claim</Action>
            <Action onDark outline>Speak to an Expert</Action>
          </div>
        </div>
      </section>

      <FaqSection eyebrow="Frequently Asked Questions" title="Answers to Common Insurance Queries" items={faqs} defaultOpen={-1} />
    </main>
  );
}
