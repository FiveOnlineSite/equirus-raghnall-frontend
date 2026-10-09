import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Parametric Insurance | Equirus Raghnall",
  description: "Tailored Parametric Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Parametric Insurance?", answer: "Parametric Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Parametric Insurance"
          title={<>Protection That Pays <br />When It Matters</>}
          description="Parametric Insurance pays a pre-agreed amount when a defined event, such as rainfall or temperature, crosses a set threshold, delivering faster settlements without lengthy loss assessments."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Parametric Insurance"
          imagePosition="center center"
          features={[
            { title: "Trigger-Based Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Faster Payouts", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Financial Resilience", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Parametric Insurance?"
          title="Understanding Parametric Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Parametric Insurance overview"
          description="Parametric Insurance provides a predefined payout when an agreed measurable event reaches a specified threshold. Unlike traditional insurance, payout depends on the trigger's intensity rather than assessment of the actual physical loss."
          coverageItems={["Natural Catastrophe Risks", "Weather-related Risks", "Earthquake", "Excessive Rainfall","Wind Speed"]}
          example="If an agreed rainfall threshold is exceeded at a specified location, the policy may trigger a predetermined payout, subject to the policy terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection Across Parametric Risks"
          items={[
            { title: "Natural Catastrophe", description: "Provides predefined financial protection against specified natural catastrophe events based on agreed parameters." },
            { title: "Weather Risk", description: "Protects businesses against financial impacts arising from measurable adverse weather conditions." },
            { title: "Business Interruption", description: "Provides a predefined payout when an agreed event or parameter causes disruption to business operations." },
            { title: "Agriculture & Crop Risk", description: "Provides financial protection against specified weather and environmental parameters affecting agricultural operations." },
            { title: "Infrastructure Risk", description: "Supports businesses exposed to measurable environmental and catastrophe risks affecting infrastructure and operations." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Business Before Risk Impacts You</>}
          description="We understand your operations, locations and risk triggers to structure parametric protection aligned with your requirements."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Parametric Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We understand your operations, geographical exposure, historical data, and key risks to identify suitable parameters and triggers." },
            { title: "Trigger & Policy Design", description: "Our specialists help structure appropriate triggers, thresholds, payout structures, limits, and policy terms." },
            { title: "Market & Underwriting Support", description: "We coordinate with insurers and relevant stakeholders to facilitate underwriting and develop a solution aligned with your risk profile." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports you through the payout process and coordinates with insurers for efficient resolution after a triggered event." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews help ensure your parametric programme continues to reflect changes in your business, exposure, and risk environment." },
          ]}
        />
        <ServiceCta
          title="Ready to Protect Your Business?"
          description="We help structure parametric insurance solutions tailored to your business risks, exposures, and predefined triggers."
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
