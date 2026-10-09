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
          label="Surety Bonds"
          title={
            <>
             Secure Your Commitments. Build Business Credibility.
            </>
          }
          description="Surety bonds and guarantee solutions help you meet contractual obligations and win more business, giving clients assurance of performance without tying up your cash."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Surety Bonds"
          imagePosition="center center"
          features={[
            {
              title: "Contractual Obligation Support",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Performance & Financial Guarantees",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Enhanced Business Credibility",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Flexible Bond Solutions",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Support Across Project Lifecycles",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is Surety Bonds?"
          title="Understanding Surety Bonds"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Surety Bonds overview"
          description="Surety Bonds guarantee performance of contractual or statutory obligations among the Principal, Obligee and Surety, offering an alternative to traditional security that helps businesses preserve banking limits and working capital."
          coverageItems={[
            "Performance obligations under contracts",
            "Advance payment obligations",
            "Bid and tender requirements",
            "Contractual and statutory obligations",
            "Financial and commercial commitments"
          ]}
          example="If a contractor is awarded a project and the contract requires a performance security, a Surety Bond can be issued in favour of the project owner to provide the required security, subject to the bond wording and applicable terms."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            {
              title: "Performance Bonds",
              description:
                "Provide security to the obligee for the principal's performance of specified contractual obligations. These are commonly used in construction, infrastructure, engineering, and other project-based contracts.",
            },
            {
              title: "Advance Payment Bonds",
              description:
                "Provide security in respect of an advance payment made to the principal under a contract, subject to the terms and conditions of the bond.",
            },
            {
              title: "Bid & Tender Bonds",
              description:
                "Provides security for tender or bidding requirements and demonstrates the bidder's commitment to proceed under the tender conditions.",
            },
            {
              title: "Retention Money Bonds",
              description:
                "Can replace retention of funds under eligible contracts, helping businesses preserve working capital while providing the required security.",
            },
            {
              title: "Customs Bonds",
              description:
                "Provides security for customs-related obligations where a bond is required by the authority, subject to regulations and bond conditions.",
            },
            {
              title: "Statutory & Regulatory Bonds",
              description:
                "Can provide security for statutory, regulatory or other obligations where bonds are permitted or required by the authority.",
            },
            {
              title: "Other Contractual Bonds",
              description:
                "Depending on the contract and obligation, customised bond structures may be considered for specific commercial or project requirements.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Secure Your Commitments Before Risk Finds You</>}
          description="Every contract carries obligations. We help businesses structure suitable Surety Bond solutions around their contract and obligee requirements."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Surety Bonds advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Contract & Obligation Assessment",
              description: "We review the contract, tender requirements, bond amount, tenure, obligee requirements and nature of the obligation.",
            },
            {
              title: "Bond Structuring & Placement",
              description:
                "Our specialists structure the right bond solution and coordinate with suitable surety providers.",
            },
            {
              title: "Documentation & Issuance Support",
              description: "We coordinate the required financial, contractual, KYC, and other documentation to facilitate the bond issuance process.",
            },
            {
              title: "Dedicated Bond Support",
              description:
                "Our team supports amendments, extensions, cancellations, claims coordination and other bond requirements throughout the lifecycle.",
            },
            {
              title: "Bond Review & Renewal",
              description:
                "We monitor bond expiry dates, project timelines, contractual changes and extension needs to help ensure continuity of security.",
            },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Surety Bonds?"
          description="Strengthen your contractual commitments with Surety Bond solutions designed around your business and project requirements."
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
