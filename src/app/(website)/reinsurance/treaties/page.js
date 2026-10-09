import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Treaties | Equirus Raghnall",
  description: "Tailored Treaties solutions.",
};

const faqs = [
  { question: "Who should consider Treaties?", answer: "Treaties can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Treaties"
          title={<>Protect Your Portfolio With Treaty Reinsurance</>}
          description="Reinsurance treaties give insurers ongoing protection across defined portfolios or classes of business. They help manage volatility, accumulation and capacity, supporting stable and sustainable underwriting."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Treaties"
          imagePosition="center center"
          features={[
            { title: "Risk Transfer Solutions", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Capacity Optimisation", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Portfolio Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Treaties?"
          title="Understanding Treaties"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Treaties overview"
          description="Treaty reinsurance is an arrangement where an insurer transfers an agreed portion of its risks to a reinsurer under defined terms, helping manage exposures, enhance underwriting capacity and achieve stability."
          coverageItems={["Proportional Treaty", "Non-Proportional Treaty", "Quota Share", "Surplus Share","Excess of Loss"]}
          example="If an insurer experiences a covered loss within its treaty portfolio, the reinsurer responds according to the agreed treaty structure, retention, and limits, subject to the treaty terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Reinsurance Solutions"
          items={[
            { title: "Proportional Treaties", description: "Shares premiums and losses between the insurer and reinsurer based on an agreed proportion." },
            { title: "Non-Proportional Treaties", description: "Provides protection when losses exceed an agreed retention or attachment point." },
            { title: "Quota Share", description: "Transfers a fixed percentage of premiums and losses to the reinsurer." },
            { title: "Surplus Share", description: "Provides additional capacity for risks that exceed the insurer's retained capacity." },
            { title: "Excess of Loss", description: "Provides protection against losses exceeding the insurer's predetermined retention." },
            { title: "Catastrophe Excess of Loss", description: "Protects against accumulated losses from a catastrophic event, subject to the agreed attachment point and limits." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Strengthen Your Reinsurance Programme</>}
          description="We understand your portfolio and risk appetite. Our specialists structure and place treaty solutions aligned with your needs."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Treaties advisory support"
          imagePosition="center"
          steps={[
            { title: "Portfolio Risk Assessment", description: "We understand your portfolio, exposure profile and risk appetite to identify appropriate reinsurance requirements." },
            { title: "Treaty Structure & Design", description: "Our specialists help structure suitable treaty arrangements, including limits, retentions, attachment points, and participation levels." },
            { title: "Reinsurer Placement", description: "We coordinate with suitable reinsurers to secure appropriate capacity and competitive treaty terms." },
            { title: "Treaty Negotiation & Support", description: "Our specialists support treaty negotiations, documentation, and coordination with reinsurers throughout the placement process." },
            { title: "Annual Treaty Review & Renewal", description: "Regular reviews keep your treaty programme aligned with portfolio growth, exposure changes and business strategy." },
          ]}
        />
        <ServiceCta
          title="Strengthen Your Reinsurance Strategy"
          description="We help structure treaty solutions designed around your portfolio, capacity requirements, and risk appetite."
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
