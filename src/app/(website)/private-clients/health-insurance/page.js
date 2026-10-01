import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Health Insurance | Equirus Raghnall",
  description: "Tailored Health Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Health Insurance?", answer: "Health Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Health Insurance"
          title={<>Protect Your Health. Secure Your Financial Well-Being</>}
          description="Healthcare costs can be unpredictable. The right health insurance provides financial protection against covered medical expenses, helping you access quality healthcare without the burden of unexpected costs."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Health Insurance"
          imagePosition="center center"
          features={[
            { title: "Hospitalisation Expense Cover", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Pre & Post-Hospitalisation Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Cashless Treatment Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Family Health Protectione", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Critical Illness & Additional Covers", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Health Insurance?"
          title="Understanding Health Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Health Insurance overview"
          description="Health Insurance is designed to provide financial protection against eligible medical and hospitalisation expenses arising from illness, injury or accidents, subject to the terms and conditions of the policy."
          coverageItems={["Hospitalisation Expenses", "Pre & Post-Hospitalisation", "Day Care Procedures", "Cashless Hospitalisation", "Ambulance Expenses"]}
          example="If an insured person requires hospitalisation following an illness or accident, the policy can cover eligible medical expenses such as hospital charges, treatment costs and other admissible expenses, subject to the applicable coverage, limits and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Health"
          items={[
            { title: "Hospitalisation", description: "Provides financial protection against eligible hospitalisation expenses arising from covered illnesses, injuries and medical procedures." },
            { title: "Day Care ", description: "Covers eligible day care procedures included under the policy, subject to applicable terms and conditions." },
            { title: "Pre & Post-Hospitalisation ", description: "Provides coverage for eligible medical expenses incurred before and after a covered hospitalisation." },
            { title: "Family Floater", description: "A family floater policy can provide a shared sum insured for covered family members, depending on the policy structure." },
            { title: "Critical Illness", description: "Provides a lump-sum benefit for covered critical illnesses when specifically included in the policy." },
            { title: "Additional Covers ", description: "Depending on the insurer and policy, additional covers and optional benefits may be available to address specific healthcare requirements." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Health Before the Unexpected Happens </>}
          description="Healthcare needs differ for every individual and family. Our specialists help assess yours and identify suitable health insurance."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Health Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Health Risk & Requirement Assessment", description: "We understand your family structure, healthcare needs, existing cover and finances to identify suitable protection." },
            { title: "Plan Comparison & Policy Structuring", description: "We help evaluate available plans, sum insured options, deductibles, waiting periods, network hospitals and applicable benefits." },
            { title: "Policy Placement & Documentation", description: "Our team supports you through documentation and policy issuance, helping ensure required information is accurately captured." },
            { title: "Claims Assistance", description: "In the event of a covered medical claim, our team assists with the claims process and coordinates with the insurer as required." },
            { title: "Annual Policy Review & Renewal", description: "We review your health insurance at renewal to help ensure it continues to meet your evolving healthcare and financial needs." },
          ]}
        />
        <ServiceCta
          title="Protect Your Health. Plan for Tomorrow."
          description="Choose the right health insurance protection for yourself and your family with support from experienced insurance specialists."
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
