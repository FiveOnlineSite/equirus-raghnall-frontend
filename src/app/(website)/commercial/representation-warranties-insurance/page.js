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
          label="Representations & Warranties Insurance"
          title={
            <>
             Protect Your Deal Against Warranty Breaches
            </>
          }
          description="Protect your transaction from unexpected financial risks arising from breaches of representations and warranties so you can transact with greater certainty."
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
          description="Representations & Warranties (R&W) Insurance protects buyers or sellers against financial losses from breaches of transaction warranties, providing an extra layer of protection against unknown post-completion risks, subject to policy terms and exclusions."
          coverageItems={[
            "Breach of representations and warranties",
            "Financial losses arising from covered breaches",
            "Defence costs and associated legal expenses, where covered",
            "Certain tax-related risks, subject to policy terms",
            "Transaction-related liabilities that fall within the scope of the insured representations and warranties"
          ]}
          example="If, after completion of an acquisition, the buyer discovers an undisclosed liability that results in a breach of a covered representation or warranty in the transaction documents, the policy may respond to the resulting financial loss, subject to the policy terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection Across the Transaction"
          items={[
            {
              title: "Buyer-Side Cover",
              description:
                "Protects the buyer against financial losses arising from breaches of representations and warranties given by the seller.",
            },
            {
              title: "Seller-Side Cover",
              description:
                "Protects the seller against certain liabilities from representations and warranties given in the transaction.",
            },
            {
              title: "Tax Liability Protection",
              description:
                "Provides coverage for certain identified tax-related risks associated with the transaction, subject to underwriting and policy terms.",
            },
            {
              title: "Transaction Risk Protection",
              description:
                "Provides an additional layer of financial protection against specified unknown risks that may arise after completion.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Transaction Before Risk Finds You</>}
          description="Every contract carries obligations. We help businesses structure suitable Surety Bond solutions around their contract and obligee requirements."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Surety Bonds advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Transaction Risk Assessment",
              description: "We understand the transaction structure, parties, warranties, due diligence findings and key risk areas.",
            },
            {
              title: "Policy Design & Placement",
              description:
                "Our specialists structure appropriate coverage, limits and retentions and coordinate placement with suitable insurers.",
            },
            {
              title: "Underwriting & Due Diligence Support",
              description: "We coordinate with insurers and relevant advisors to facilitate underwriting and address transaction-specific requirements.",
            },
            {
              title: "Dedicated Claims Advocacy",
              description:
                "We support the insured through claims, from notification to resolution, coordinating with insurers and relevant stakeholders.",
            },
            {
              title: "Ongoing Transaction Support",
              description:
                "Our team remains available to support transaction-related insurance requirements and emerging risks throughout the policy period.",
            },
          ]}
        />
        <ServiceCta
          title="Protect Your Deal with Greater Certainty"
          description="Receive a tailored Representations & Warranties Insurance assessment aligned with your transaction structure and risk profile."
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
