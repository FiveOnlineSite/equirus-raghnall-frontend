import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Risk Analytics, Structuring, and Advisory | Equirus Raghnall",
  description: "Tailored Risk Analytics, Structuring, and Advisory solutions.",
};

const faqs = [
  { question: "Who should consider Risk Analytics, Structuring, and Advisory?", answer: "Risk Analytics, Structuring, and Advisory can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Risk Analytics, Structuring, and Advisory"
          title={<>Understand Your Risk<br />Structure Your Cover</>}
          description="We combine data, analytics and specialist expertise to identify risks, model potential losses and design insurance programmes aligned with your risk appetite and business objectives."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Risk Analytics, Structuring, and Advisory"
          imagePosition="center center"
          features={[
            { title: "Risk & Portfolio Analytics", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Tailored Reinsurance Structures", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Strategic Risk Advisory", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Risk Analytics, Structuring, and Advisory?"
          title="Understanding Risk Analytics, Structuring, and Advisory"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Risk Analytics, Structuring, and Advisory overview"
          description="Risk Analytics, Structuring, and Advisory combines exposure analysis, portfolio modelling and reinsurance expertise to help insurers evaluate risks and develop risk transfer strategies, supporting decisions on retention, capacity, limits, pricing and programme structure."
          coverageItems={["Risk & Exposure Analytics ", "Portfolio Modelling ", "Reinsurance Structuring ", "Retention & Capacity Analysis","Programme Optimisation "]}
          example="An insurer with a growing property portfolio wants to optimise its catastrophe protection. We analyse its exposure concentrations, historical losses, and risk appetite, then recommend suitable retentions, limits, and reinsurance structures to support effective risk transfer."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Risk Analytics, Structuring & Advisory Solutions"
          items={[
            { title: "Risk & Exposure Analytics", description: "Analyse portfolio data, exposures, claims experience, and risk concentrations to identify key drivers of potential loss." },
            { title: "Reinsurance Structuring", description: "Develop tailored treaty and facultative structures based on portfolio characteristics, risk appetite, and capacity requirements." },
            { title: "Portfolio Optimisation", description: "Evaluate existing reinsurance programmes to identify opportunities for improved protection, efficiency, and risk transfer." },
            { title: "Retention & Capacity Advisory", description: "Support decisions on appropriate retentions, limits, capacity requirements, and programme deployment." },
            { title: "Scenario & Loss Analysis", description: "Assess potential financial outcomes across different loss scenarios to support reinsurance programme decisions." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Turn Risk Insights Into Better Reinsurance Decisions</>}
          description="We combine analytics, structuring expertise and market knowledge to help insurers develop reinsurance strategies aligned with their portfolios."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Risk Analytics, Structuring, and Advisory advisory support"
          imagePosition="center"
          steps={[
            { title: "Portfolio Risk Assessment", description: "Review portfolio composition, exposure concentrations, claims experience, and key risk drivers." },
            { title: "Data & Exposure Analysis", description: "Analyse relevant portfolio and exposure data to develop meaningful risk insights." },
            { title: "Reinsurance Structure Design", description: "Develop appropriate treaty, facultative, retention, and limit structures." },
            { title: "Market & Reinsurer Advisory", description: "Support market discussions and placement strategy to align the programme with available reinsurance capacity." },
            { title: "Programme Review & Optimisation", description: "Continuously assess portfolio changes and programme performance to identify opportunities for refinement." },
          ]}
        />
        <ServiceCta
          title="Make Every Reinsurance Decision More Informed"
          description="We help insurers use risk analytics and structured advisory to build efficient reinsurance programmes that balance protection, capacity, retention, and portfolio objectives."
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
