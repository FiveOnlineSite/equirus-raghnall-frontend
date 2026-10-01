import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Retirement / Pension Plans | Equirus Raghnall",
  description: "Tailored Retirement / Pension Plans solutions.",
};

const faqs = [
  { question: "Who should consider Retirement / Pension Plans?", answer: "Retirement / Pension Plans can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Retirement / Pension Plans"
          title={<>Plan for Tomorrow. Retire With Financial Confidence.</>}
          description="Retirement and Pension Plans help individuals build financial security for their post-retirement years by creating a structured approach to long-term savings, wealth accumulation and future income needs."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Retirement / Pension Plans"
          imagePosition="center center"
          features={[
            { title: "Retirement Income Planning ", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Long-Term Financial Security ", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Systematic Wealth Accumulation ", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Retirement Solutions ", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Financial Independence ", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Retirement / Pension Plans?"
          title="Understanding Retirement / Pension Plans"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Retirement / Pension Plans overview"
          description="Retirement / Pension Plans are long-term solutions that help individuals build funds during their working years and create retirement income, through regular contributions, guaranteed or market-linked returns, and/or periodic post-retirement payouts."
          coverageItems={["Retirement Corpus Creation", "Regular Retirement Income","Long-Term Savings", "Financial Security After Retirement", "Life Insurance Protection"]}
          example="An individual begins planning for retirement during their working years and contributes systematically towards a retirement-oriented plan.
Over time, the contributions and applicable returns help build a retirement corpus. At the chosen retirement stage, the accumulated funds can be used in accordance with the selected product structure to support regular income and other financial requirements.
"
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Retirement Protection"
          items={[
            { title: "Retirement Corpus", description: "Build a dedicated financial corpus to support your post-retirement requirements." },
            { title: "Pension Income", description: "Create a potential stream of regular income during retirement through suitable pension or annuity solutions." },
            { title: "Long-Term Wealth Accumulation", description: "Adopt a disciplined approach to saving and investing for long-term financial objectives." },
            { title: "Financial Independence", description: "Strengthen your ability to meet future expenses without relying entirely on active employment income." },
            { title: "Life & Family Protection", description: "Where applicable, selected products can combine retirement planning with life protection benefits." },
            { title: "Flexible Retirement Planning", description: "Structure your retirement strategy around your age, financial goals, expected retirement lifestyle and risk preferences." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Secure Your Future Before Retirement Arrives</>}
          description="Our specialists help you build a retirement strategy based on your current financial position, future goals and expected lifestyle."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Retirement / Pension Plans advisory support"
          imagePosition="center"
          steps={[
            { title: "Retirement Needs & Financial Assessment", description: "We understand your current financial position, retirement goals, expected expenses and desired retirement lifestyle." },
            { title: "Plan Comparison & Structuring", description: "We evaluate suitable retirement and pension solutions based on your objectives, investment preferences and financial horizon." },
            { title: "Policy / Plan Placement", description: "We coordinate the application, documentation and placement process for the selected solution." },
            { title: "Ongoing Financial Support", description: "We assist with policy servicing, documentation and applicable benefit-related requirements throughout the policy lifecycle." },
            { title: "Retirement Plan Review", description: "We periodically review your retirement strategy to ensure it remains aligned with changing financial circumstances and long-term goals." },
          ]}
        />
        <ServiceCta
          title={<>Start Planning for the Life <br/> You Want After Retirement</>}
          description="Build a retirement strategy designed to provide greater financial confidence for the years ahead."
          primaryAction={{ label: "Get a Quote", href: "/contact-us" }}
          secondaryAction={{
            label: "Download Brochure",
            href: "/assets/services/directors-officers/brochure.pdf",
            download: true,
          }}
        />
        <FaqSection eyebrow="Frequently Asked Questions" title="Answers to Common Insurance Queries" items={faqs} defaultOpen={0} />
      </main>
      
    </>
  );
}
