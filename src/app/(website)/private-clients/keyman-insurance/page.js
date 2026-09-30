import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Keyman Insurance | Equirus Raghnall",
  description: "Tailored Keyman Insurance solutions.",
};

const faqs = [
  {
    question: "Who should consider Keyman Insurance?",
    answer:
      "Keyman Insurance can be tailored to the needs and risk profile of the insured.",
  },
  {
    question: "What does this policy cover?",
    answer:
      "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording.",
  },
  {
    question: "Can the policy be customised?",
    answer:
      "Yes. Coverage can be structured around specific requirements and risk exposures.",
  },
  {
    question: "How are suitable limits determined?",
    answer:
      "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits.",
  },
];

export default function Page() {
  return (
    <>
      <main>
        <ServiceHero
          label="Keyman Insurance"
          title={
            <>
              Protect the people who
              <br />
              drive your business forward
            </>
          }
          description="Key Man Insurance helps businesses protect themselves against the financial impact of losing a key individual whose expertise, leadership, relationships or contribution is critical to the organisation’s success."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Keyman Insurance"
          imagePosition="center center"
          features={[
            {
              title: "Business Continuity Protection",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Protection Against Revenue Loss",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Key Person Replacement Support ",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Protection of Business Interests ",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Customised Coverage  ",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is Keyman Insurance?"
          title="Understanding Keyman Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Keyman Insurance overview"
          description="Key Man Insurance is a life insurance policy taken by a business on the life of an individual whose skills, experience, leadership, relationships or specialised knowledge are considered critical to the organisation.
The company is generally the policyholder and beneficiary, subject to the policy structure and applicable regulations. If the insured key person dies during the policy term, the policy can provide a financial benefit to the business, helping it manages the resulting financial impact.
Key Man Insurance is particularly relevant for businesses that depend heavily on founders, senior executives, specialised professionals, sales leaders or individuals with critical client and business relationships.
"
          coverageItems={[
            "Key Person Death Benefit",
            "Business Continuity Protection",
            "Revenue & Profit Protection",
            "Recruitment & Replacement Costs",
            "Outstanding Financial Commitments",
            "Stakeholder & Investor Confidence",
          ]}
          example="A company relies heavily on its Managing Director, who is responsible for major client relationships, strategic decisions and a significant portion of the company’s revenue.
If the Managing Director passes away unexpectedly during the policy term, the business may face revenue disruption, replacement costs and loss of key relationships.
A Key Man Insurance policy can provide a financial benefit to the company, helping it manage the immediate financial impact and maintain business continuity, subject to the policy terms.
"
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Business"
          items={[
            {
              title: "Key Person Protection",
              description:
                "Financial protection against the loss of an individual who is critical to the organisation.",
            },
            {
              title: "Business Continuity",
              description:
                "Helps the company manage operational and financial disruption following the loss of a key person.",
            },
            {
              title: "Revenue Protection",
              description:
                "Provides financial support against potential revenue and profitability impact.",
            },
            {
              title: "Replacement & Transition Costs",
              description:
                "Helps meet potential recruitment, training and transition expenses.",
            },
            {
              title: "Financial Commitment Protection",
              description:
                "Supports the business in managing financial obligations during a period of transition.",
            },
            {
              title: "Customised Coverage",
              description:
                "Coverage can be structured based on the business’s dependency on the key individual and its financial requirements.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Business Before the Unexpected Happens</>}
          description="Our specialists structure cover around your needs rather than relying on a standard policy."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Keyman Insurance advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Risk Assessment & Needs Analysis",
              description: "We identify exposures and protection priorities.",
            },
            {
              title: "Policy Design & Placement",
              description:
                "We structure suitable limits, deductibles, and extensions.",
            },
            {
              title: "Coverage Review",
              description: "We review wording against expected protection.",
            },
            {
              title: "Dedicated Claims Advocacy",
              description:
                "We coordinate claims documentation and insurer discussions.",
            },
            {
              title: "Annual Policy Review & Renewal",
              description:
                "We revisit coverage as circumstances and risks change.",
            },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Keyman Insurance?"
          description="Speak with a specialist for a no-obligation assessment."
          primaryAction={{ label: "Get a Quote", href: "/contact-us" }}
          secondaryAction={{
            label: "Download Brochure",
            href: "/assets/services/directors-officers/brochure.pdf",
            download: true,
          }}
        />
        <FaqSection
          eyebrow="Frequently Asked Questions"
          title="Answers to Common Insurance Queries"
          items={faqs}
          defaultOpen={0}
        />
      </main>
    </>
  );
}
