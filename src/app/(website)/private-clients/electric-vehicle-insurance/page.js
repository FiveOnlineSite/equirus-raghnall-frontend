import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Electric Vehicle (EV) Insurance | Equirus Raghnall",
  description: "Tailored Electric Vehicle (EV) Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Electric Vehicle (EV) Insurance?", answer: "Electric Vehicle (EV) Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Electric Vehicle (EV) Insurance"
          title={<>Protect Your EV. Power Every Journey With Confidence.</>}
          description="Designed for electric vehicle owners, EV Insurance protects against accidents, theft, natural calamities and third-party liabilities, keeping you covered on every journey."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Electric Vehicle (EV) Insurance"
          imagePosition="center center"
          features={[
            { title: "Accident & Damage Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Battery & EV Component Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Third-Party Liability Cover", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Theft & Total Loss Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Personal Accident Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Electric Vehicle (EV) Insurance?"
          title="Understanding Electric Vehicle (EV) Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Electric Vehicle (EV) Insurance overview"
          description="Electric Vehicle Insurance protects your electric car, scooter or two-wheeler against financial losses from accidents, theft and third-party liabilities, with cover tailored to specialised components like high-value batteries, motors and charging equipment, subject to policy terms."
          coverageItems={["Own Damage Protection", "Battery & EV Component Protection", "Theft Protection", "Natural Calamities","Man-Made Events"]}
          example="If your electric vehicle is damaged in an accident, the policy can cover admissible repair costs under the applicable Own Damage section. Where covered, protection for the battery and other EV-specific components can also help reduce the financial impact of repairs."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Electric Vehicle"
          items={[
            { title: "Own Damage", description: "Covers accidental damage to your electric vehicle arising from covered accidents and insured events." },
            { title: "Battery & EV Components", description: "Provides protection for eligible battery and EV-specific components where covered under the policy or applicable add-ons." },
            { title: "Theft & Total Loss", description: "Provides compensation for covered theft or total loss based on the applicable policy terms and Insured Declared Value." },
            { title: "Third-Party Liability", description: "Protects against covered legal liabilities arising from injury, death or property damage caused to third parties." },
            { title: "Personal Accident", description: "Provides financial support for covered accidental death or specified permanent disabilities." },
            { title: "EV Add-Ons", description: "Depending on the insurer and vehicle, additional covers may be available to address specific EV-related risks and enhance the protection provided by the base policy." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your EV Before the Unexpected Happens</>}
          description="Every EV has its own usage pattern and risk profile. Our specialists help you understand your needs and identify suitable coverage."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Electric Vehicle (EV) Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "EV Risk Assessment & Requirement Analysis", description: "We understand your vehicle type, usage, battery specifications and insurance requirements to identify appropriate protection." },
            { title: "Policy Comparison & Placement", description: "We help evaluate insurance options, coverage limits, deductibles, IDV and EV-specific add-ons." },
            { title: "Policy Issuance & Documentation", description: "Our team supports you through documentation and policy issuance to help ensure your vehicle and coverage details are accurate." },
            { title: "Claims Assistance", description: "In an accident, theft or covered loss, our team assists with claims and coordinates with the insurer." },
            { title: "Renewal & Policy Review", description: "We review your coverage at renewal to help ensure your EV keeps appropriate protection as your requirements evolve." },
          ]}
        />
        <ServiceCta
          title="Ready To Drive Electric With Confidence?"
          description="Protect your electric vehicle with insurance designed around your mobility needs and get support from experienced insurance specialists."
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
