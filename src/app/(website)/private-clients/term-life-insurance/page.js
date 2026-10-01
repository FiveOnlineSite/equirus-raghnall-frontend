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
          title={<>Protect Their Tomorrow.<br />Secure Your Family’s Future</>}
          description="Life is unpredictable, but your family's financial security doesn't have to be. Term Life Insurance offers life cover for a defined period, helping keep your loved ones financially secure in your absence."
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
          description="Term Life Insurance is a pure protection plan providing life cover for a specified period. If the insured dies during the term, the death benefit is paid to the nominee, helping your family meet expenses, liabilities and long-term needs."
          coverageItems={["Life Cover", "Financial Security for Your Family", "Income Replacement", "Liability Protection","Children's Future Protection"]}
          example="If the insured person passes away during the policy term, the nominee can receive the applicable death benefit, subject to the policy terms. This financial support can help the family manage household expenses, education costs, outstanding liabilities and other financial commitments."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Family"
          items={[
            { title: "Life Cover", description: "Provides a death benefit to the nominee during the policy term, subject to the policy conditions." },
            { title: "Income Protection", description: "Provides a financial cushion that can help your dependants manage the impact of loss of income." },
            { title: "Loan & Liability Protection", description: "The life benefit can help your family manage outstanding loans and other liabilities." },
            { title: "Future Planning", description: "Help safeguard important financial goals such as children's education, family milestones and long-term savings plans." },
            { title: "Flexible Coverage", description: "Select an appropriate life cover and policy tenure based on your income, financial responsibilities, liabilities and long-term goals." },
            { title: "Additional Riders", description: "Depending on the insurer and policy, optional riders may cover critical illnesses, accidental death, disability and other events." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Family Before Life Takes an Unexpected Turn</>}
          description="Every individual has different financial responsibilities and protection needs."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Term Life Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Financial Protection Assessment", description: "We understand your income, dependants, liabilities, commitments and long-term goals to assess appropriate life cover." },
            { title: "Plan Comparison & Policy Structuring", description: "We help evaluate plans, sum assured, tenure, premium options, exclusions, medical requirements and riders." },
            { title: "Application & Policy Placement", description: "Our team supports you through application and documentation and coordinates with the insurer until policy issuance." },
            { title: "Claims Assistance", description: "In the event of a covered claim, our team assists the nominee with the claims process and coordinates with the insurer as required." },
            { title: "Policy Review", description: "We periodically review your life insurance to keep it aligned with changes in your income, liabilities, family responsibilities and goals." },
          ]}
        />
        <ServiceCta
          title="Protect Today. Secure Their Tomorrow."
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
