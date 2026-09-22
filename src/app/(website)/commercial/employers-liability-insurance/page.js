import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Employers Liability | Equirus Raghnall",
  description: "Tailored Employers Liability solutions.",
};

const faqs = [
  { question: "Who should consider Employers Liability?", answer: "Employers Liability can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Employers Liability"
          title={<>Protect What Matters<br />with Confidence</>}
          description="Tailored protection structured around your requirements and risk exposures."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Employers Liability"
          imagePosition="center center"
          features={[
            { title: "Financial Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Claims Support", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Risk-Led Coverage", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Employers Liability?"
          title="Understanding Employers Liability"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Employers Liability overview"
          description="Employers Liability is designed to manage liability risks. Its scope can be tailored to the insured's circumstances, exposures, and expected financial impact."
          coverageItems={["Covered financial losses", "Relevant policy extensions", "Eligible professional expenses", "Claims coordination and advocacy"]}
          example="The policy can respond to an insured event subject to its agreed terms, conditions, limits, deductibles, and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Core Protection", description: "Foundational coverage aligned with the principal insured exposures." },
            { title: "Financial Loss", description: "Support for eligible financial loss following a covered event." },
            { title: "Liability Protection", description: "Protection for covered liabilities and related defence expenses." },
            { title: "Policy Extensions", description: "Selected extensions for relevant operational and contractual risks." },
            { title: "Risk Management", description: "Review of loss scenarios, controls, deductibles, and retained risk." },
            { title: "Claims Advocacy", description: "Assistance from notification and documentation through settlement." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Yourself Before Risk Finds You</>}
          description="Our specialists structure cover around your needs rather than relying on a standard policy."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Employers Liability advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We identify exposures and protection priorities." },
            { title: "Policy Design & Placement", description: "We structure suitable limits, deductibles, and extensions." },
            { title: "Coverage Review", description: "We review wording against expected protection." },
            { title: "Dedicated Claims Advocacy", description: "We coordinate claims documentation and insurer discussions." },
            { title: "Annual Policy Review & Renewal", description: "We revisit coverage as circumstances and risks change." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Employers Liability?"
          description="Speak with a specialist for a no-obligation assessment."
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
