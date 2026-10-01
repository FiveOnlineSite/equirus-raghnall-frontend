import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Critical Illness Insurance | Equirus Raghnall",
  description: "Tailored Critical Illness Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Critical Illness Insurance?", answer: "Critical Illness Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Critical Illness Insurance"
          title={<>Protect Your Financial Future When Life Takes A Turn</>}
          description="A critical illness can bring major medical and financial challenges. Critical Illness Insurance pays a lump sum on diagnosis of a covered illness, helping you manage treatment costs, income loss and other commitments"
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Critical Illness Insurance"
          imagePosition="center center"
          features={[
            { title: "Lump-Sum Financial Benefit", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Protection Against Major Illnesses", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Financial Support During Recovery", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Coverage Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Individual & Family Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Critical Illness Insurance?"
          title="Understanding Critical Illness Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Critical Illness Insurance overview"
          description="Critical Illness Insurance pays a lump sum when the insured is diagnosed with a covered critical illness. Unlike regular health insurance, which reimburses eligible medical expenses, it pays a predetermined benefit once diagnosis and policy conditions are met, helping with medical costs and other obligations during recovery."
          coverageItems={["Covered Critical Illnesses", "Cancer", "Heart-Related Conditions", "Stroke", "Major Organ Conditions"]}
          example="If an insured person is diagnosed with a critical illness covered under the policy and the diagnosis satisfies the applicable policy conditions, a lump-sum benefit may be paid. This amount can help meet medical expenses, household commitments, loss of income or other financial needs during recovery."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Financial Protection for Critical Illness"
          items={[
            { title: "Lump-Sum Benefit", description: "Receive the applicable insured benefit upon diagnosis of a covered critical illness, subject to the policy terms." },
            { title: "Cancer Protection", description: "Provides financial protection for qualifying cancer diagnoses covered under the policy." },
            { title: "Heart & Stroke Protection", description: "Provides a benefit for specified heart and stroke conditions that meet the policy's definitions." },
            { title: "Major Organ Protection", description: "Provides financial assistance for covered major organ conditions and failures, subject to the policy terms." },
            { title: "Flexible Sum Insured", description: "Select an appropriate sum insured based on your financial responsibilities, existing health coverage and protection requirements." },
            { title: "Additional Benefits", description: "Depending on the insurer and policy, additional benefits or optional covers may be available to enhance your critical illness protection." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Finances Before a Critical Illness Happens</>}
          description="A critical illness can affect your health, income and savings. Our specialists help you find suitable protection."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Critical Illness Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk & Financial Requirement Assessment", description: "We understand your financial responsibilities, existing insurance protection and desired level of coverage." },
            { title: "Plan Comparison & Policy Structuring", description: "We help evaluate available plans, covered illnesses, sum insured options, waiting periods, survival periods and applicable exclusions." },
            { title: "Policy Placement & Documentation", description: "Our team supports you through documentation and policy issuance to help ensure your coverage is correctly structured." },
            { title: "Claims Assistance", description: "If a covered critical illness is diagnosed, our team assists with the claim process and coordinates with the insurer." },
            { title: "Policy Review & Renewal", description: "We review your coverage at renewal to help keep your critical illness protection aligned with your evolving financial needs." },
          ]}
        />
        <ServiceCta
          title={<>Protect Your Health. <br/>Secure Your Financial Future.</>}
          description="Prepare for the financial impact of a critical illness with protection designed around your needs."
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
