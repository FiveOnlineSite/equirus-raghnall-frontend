import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Term Life Insurance | Equirus Raghnall",
  description: "Tailored Term Life Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Term Life Insurance?", answer: "Term Life Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Term Life Insurance"
          title={<>Protect their tomorrow.<br />Secure your family’s future</>}
          description="Life is unpredictable, but your family's financial security doesn't have to be. Term Life Insurance provides financial protection to your loved ones by offering a life cover for a defined period, helping them stay financially secure in your absence."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Term Life Insurance"
          imagePosition="center center"
          features={[
            { title: "Financial Protection for Your Family", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "High Life Cover at Affordable Premiums", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Flexible Policy Tenures", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Optional Protection Benefits", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Income & Liability Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Term Life Insurance?"
          title="Understanding Term Life Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Term Life Insurance overview"
          description="Term Life Insurance is a pure protection life insurance plan that provides a life cover for a specified period.
In the event of the insured person's death during the policy term, the applicable death benefit is paid to the nominee, subject to the terms and conditions of the policy.
The benefit can help your family manage ongoing household expenses, outstanding liabilities, children's education, long-term financial commitments and other financial needs.
"
          coverageItems={["Life Cover", "Financial Security for Your Family", "Income Replacement", "Liability Protection","Children's Future Protection","Optional Protection Benefits"]}
          example="If the insured person passes away during the policy term, the nominee can receive the applicable death benefit, subject to the policy terms. This financial support can help the family manage household expenses, education costs, outstanding liabilities and other financial commitments."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Family"
          items={[
            { title: "Life Cover — Financial Security When It Matters Most", description: "Provides a death benefit to the nominee during the policy term, subject to the policy conditions." },
            { title: "Income Protection — Safeguard Your Family's Lifestyle", description: "Provides a financial cushion that can help your dependants manage the impact of loss of income." },
            { title: "Loan & Liability Protection — Secure Financial Commitments", description: "The life benefit can help your family manage outstanding loans and other liabilities." },
            { title: "Future Planning — Protect Long-Term Goals", description: "Help safeguard important financial goals such as children's education, family milestones and long-term savings plans." },
            { title: "Flexible Coverage — Choose Your Protection", description: "Select an appropriate life cover and policy tenure based on your income, financial responsibilities, liabilities and long-term goals." },
            { title: "Additional Riders — Enhance Your Protection", description: "Depending on the insurer and policy, optional riders may be available to provide additional protection against specified critical illnesses, accidental death, disability and other covered events." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Family Before Life Takes an Unexpected Turn</>}
          description="Every individual has different financial responsibilities and protection needs. Our specialists help you evaluate your requirements and identify suitable term insurance solutions."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Term Life Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Financial Protection Assessment", description: "We understand your income, dependants, existing liabilities, financial commitments and long-term goals to assess an appropriate level of life cover." },
            { title: "Plan Comparison & Policy Structuring", description: "We help evaluate available plans, sum assured, policy tenure, premium options, exclusions, medical requirements and applicable riders." },
            { title: "Application & Policy Placement", description: "Our team supports you through the application and documentation process and coordinates with the insurer through the policy issuance journey." },
            { title: "Claims Assistance", description: "In the event of a covered claim, our team assists the nominee with the claims process and coordinates with the insurer as required." },
            { title: "Policy Review", description: "We help review your life insurance protection periodically to ensure it continues to align with changes in your income, liabilities, family responsibilities and financial goals." },
          ]}
        />
        <ServiceCta
          title="Protect today. Secure their tomorrow."
          description="Give your family a financial safety net with Term Life Insurance designed around your responsibilities and long-term goals."
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
