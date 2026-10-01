import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Super- Top- Up Insurance | Equirus Raghnall",
  description: "Tailored Super- Top- Up Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Super- Top- Up Insurance?", answer: "Super- Top- Up Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Super- Top- Up Insurance"
          title={<>Extra Health Cover.<br /> Greater Financial Protection.</>}
          description="Medical costs can escalate during major hospitalisation. Super Top-Up Insurance adds protection once eligible expenses cross a deductible, managing high healthcare costs without a big premium increase."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Super- Top- Up Insurance"
          imagePosition="center center"
          features={[
            { title: "Additional Health Insurance Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Higher Sum Insured Options", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Protection Against Major Medical Expenses", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Individual & Family Coverage", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Cost-Effective Additional Cover", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Super- Top- Up Insurance?"
          title="Understanding Super- Top- Up Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Super- Top- Up Insurance overview"
          description="Super Top-Up Insurance provides additional health cover once cumulative eligible medical expenses in a policy year exceed a deductible. Unlike regular top-ups, which apply the deductible per claim, it works alongside your existing policy for higher financial protection."
          coverageItems={["Hospitalisation Expenses", "Cumulative Medical Expenses", "Pre & Post-Hospitalisation", "Day Care Procedures","Family Floater Options"]}
          example="Suppose your Super Top-Up policy has a ₹5 lakh deductible and a ₹20 lakh sum insured. If your eligible medical expenses during the policy period cumulatively exceed ₹5 lakh, the Super Top-Up policy can respond to the admissible expenses above the deductible, subject to the policy terms, limits and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection Above Your Existing Health Cover"
          items={[
            { title: "Higher Coverage", description: "Add a higher layer of health insurance protection above your existing coverage to help manage significant medical expenses." },
            { title: "Cumulative Expenses", description: "Eligible medical expenses can be aggregated during the policy period for determining whether the applicable deductible has been crossed." },
             { title: "Hospitalisation", description: "Provides coverage for eligible hospitalisation expenses once the applicable deductible is exceeded." },
            { title: "Family Protection", description: "Depending on the policy structure, a family floater option can provide additional protection for multiple covered family members." },
            { title: "Flexible Deductibles", description: "Select an appropriate deductible and sum insured based on your existing health insurance and financial protection requirements." },
            { title: "Additional Benefits", description: "Depending on the insurer and plan, additional benefits and optional covers may be available to complement your Super Top-Up protection." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Strengthen Your Health Cover Before Costs Rise</>}
          description="Super Top-Up Insurance suits those with existing health insurance who want extra protection against high medical expenses."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Super- Top- Up Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Existing Coverage & Requirement Assessment", description: "We understand your current health insurance, sum insured, family structure and desired level of additional protection." },
            { title: "Deductible & Plan Comparison", description: "We help evaluate deductible options, sum insured, coverage conditions, waiting periods, exclusions and applicable benefits." },
            { title: "Policy Structuring & Placement", description: "Our specialists help identify a suitable Super Top-Up structure and support the policy placement process." },
            { title: "Claims Assistance", description: "If a covered claim arises, our team assists with documentation and claims and coordinates with the insurer." },
            { title: "Annual Review & Renewal", description: "We review your Super Top-Up protection at renewal to help ensure your additional cover continues to align with your requirements." },
          ]}
        />
        <ServiceCta
          title="Go Beyond Your Base Health Cover"
          description="Add an extra layer of financial protection against significant medical expenses with Super Top-Up Insurance."
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
