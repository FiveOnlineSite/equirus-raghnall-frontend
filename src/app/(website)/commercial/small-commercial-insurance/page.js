import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Small Commercial | Equirus Raghnall",
  description: "Tailored Small Commercial solutions.",
};

const faqs = [
  { question: "Who should consider Small Commercial?", answer: "Small Commercial can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Small Commercial"
          title={<>Protect Your Business. <br/>Cover What Matters Most.</>}
          description="Simple, affordable insurance solutions that protect your shop, office or small business against everyday risks. Tailored to your needs, so you can focus on running and growing your business."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Small Commercial"
          imagePosition="center center"
          features={[
            { title: "Business Property Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Stock & Contents Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Flexible Coverage Solutions", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Business Interruption Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Liability Protection", icon: "/assets/services/directors-officers/legal.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Small Commercial?"
          title="Understanding Small Commercial"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Small Commercial overview"
          description="Small Commercial Insurance protects eligible small businesses against accidental loss or damage to insured property, including premises, stock, contents and equipment, with solutions structured around the size, nature and requirements of the business."
          coverageItems={["Business premises and property", "Stock, contents and equipment", "Accidental physical loss or damage", "Burglary and theft-related risks, where opted", "Business interruption following covered property damage"]}
          example="If a small business suffers accidental damage to its premises and stock, the appropriate Small Commercial insurance solution can help cover the insured loss or damage. Where Business Interruption cover is selected, eligible financial losses arising from the interruption may also be covered, subject to the policy terms."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Bharat Sookshma Udyam Suraksha (BSUS)", description: "A standardised property insurance solution designed for eligible businesses falling within the applicable value-at-risk criteria.",knowMore:"Designed for eligible small businesses with a lower value at risk, BSUS provides a standardised framework for protecting insured business property against covered risks. It can help safeguard eligible buildings, contents, plant & machinery and stock, subject to the applicable policy terms, conditions and exclusions." },
            { title: "Bharat Laghu Udyam Suraksha (BLUS)", description: "A standardised property insurance solution for eligible businesses with higher value at risk, subject to eligibility and policy terms.",knowMore:"Designed for eligible businesses with a higher value at risk, BLUS provides structured protection for commercial property and business assets against covered risks. The policy can be tailored within the applicable product framework to address the specific property and asset exposures of the business." },
            { title: "Burglary Protection", description: "Protection against eligible loss or damage arising from covered burglary-related events, where the cover is selected.",knowMore:"Provides protection against eligible loss or damage arising from covered burglary-related events. It can help safeguard insured business property and contents against the financial impact of burglary, subject to the policy wording, security conditions and applicable exclusions." },
            { title: "Business Interruption Protection", description: "elps address eligible financial losses from interruption following covered property damage, subject to selected cover, sum insured and policy terms.",knowMore:"Helps protect the financial continuity of a business when covered property damage results in an interruption to normal operations. Depending on the selected cover, it may respond to eligible loss of income or profit and continuing expenses during the applicable indemnity period." },
            { title: "Additional Extensions", description: "Relevant extensions can be incorporated based on the selected product, business activity, insurer and risk profile.",knowMore:"Additional extensions can be incorporated to address specific property and operational exposures that may not be adequately addressed by the base policy. These may include selected extensions for insured property, expenses or business requirements, subject to availability, underwriting and policy terms." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Yourself Before Risk Finds You</>}
          description="Every business has different assets, operations and risks. We help you identify the right protection as your needs change."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Small Commercial advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We understand your business operations, property, assets and key risk exposures to identify the appropriate protection." },
            { title: "Policy Design & Placement", description: "Our specialists structure the right product, coverage and limits based on your requirements and place the policy with suitable insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation, schedules, endorsements and other requirements to ensure a smooth placement." },
            { title: "Dedicated Claims Advocacy", description: "Our claims team supports you through claims, coordinating with insurers and other stakeholders from notification to resolution." },
            { title: "Annual Policy Review & Renewal", description: "Annual reviews help ensure that your coverage continues to reflect changes in your business, assets and insurance requirements." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Small Commercial?"
          description="Protect your business with a Small Commercial insurance solution tailored to your needs."
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
