import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Surety Bonds | Equirus Raghnall",
  description: "Tailored Surety Bonds solutions.",
};

const faqs = [
  {
    question: "Who should consider Surety Bonds?",
    answer:
      "Surety Bonds can be tailored to the needs and risk profile of the insured.",
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
          label="Mergers & Acquisitions Insurance"
          title={
            <>
             Protect Your Deal. <br/>Secure Your Value.
            </>
          }
          description="Protect your transaction from unforeseen risks, undisclosed liabilities and post-deal surprises, so you can pursue mergers and acquisitions with greater confidence."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Surety Bonds"
          imagePosition="center center"
          features={[
            {
              title: "Transaction Risk Protection",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Financial Loss Protection",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Deal Certainty",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is Surety Bonds?"
          title="Understanding Surety Bonds"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Surety Bonds overview"
          description="M&A Insurance protects parties in mergers, acquisitions and other corporate transactions against specified financial risks, such as breaches of representations and warranties, unexpected liabilities or transaction-related risks, subject to policy terms."
          coverageItems={[
            "Representations & warranties",
            "Unknown or unforeseen liabilities",
            "Certain tax liabilities",
            "Transaction-related financial losses",
            "Legal and defence costs, where covered"
          ]}
          example="If a buyer discovers an undisclosed liability after completing an acquisition that falls within the insured transaction risks, M&A insurance may cover the resulting financial loss, subject to the policy terms."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection Across the Transaction"
          items={[
            {
              title: "Representations & Warranties",
              description:
                "Protects against financial losses arising from breaches of covered representations and warranties.",
            },
            {
              title: "Tax Liability",
              description:
                "Provides protection against certain identified tax risks associated with the transaction.",
            },
            {
              title: "Contingent Risks",
              description:
                "Provides coverage for specified unknown or contingent risks identified during the transaction.",
            },
            {
              title: "Transaction Liability",
              description:
                "Protects against certain financial liabilities arising from the completed transaction.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Transaction Before Risk Finds You</>}
          description="Every transaction has its own risk profile. Our specialists identify key exposures and structure suitable protection."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Surety Bonds advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Risk Assessment & Needs Analysis",
              description: "We understand the transaction structure, business operations, due diligence findings, and key exposures.",
            },
            {
              title: "Policy Design & Placement",
              description:
                "Our specialists structure appropriate limits and retentions and coordinate placement with suitable insurers.",
            },
            {
              title: "Underwriting & Due Diligence Support",
              description: "We coordinate with insurers and relevant stakeholders to facilitate underwriting and address transaction-specific requirements.",
            },
            {
              title: "Dedicated Claims Advocacy",
              description:
                "A dedicated claims advocate supports the insured from claim notification through resolution.",
            },
            {
              title: "Transaction Support",
              description:
                "We provide ongoing support throughout the policy period as transaction-related risks arise.",
            },
          ]}
        />
        <ServiceCta
          title={<>Protect Your Transaction <br/> with Greater Certainty</>}
          description="We help structure tailored M&A insurance solutions aligned with your transaction, risk profile, and strategic objectives, providing greater certainty and protection throughout the deal process."
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
