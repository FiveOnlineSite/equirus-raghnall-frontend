import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Private Car Insurance | Equirus Raghnall",
  description: "Tailored Private Car Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Private Car Insurance?", answer: "Private Car Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Private Car Insurance"
          title={<>Drive With Confidence.<br />Protected For The Road Ahead.</>}
          description="Tailored protection structured around your requirements and risk exposures."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Private Car Insurance"
          imagePosition="center center"
          features={[
            { title: "Protection Against Accidental Damage", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Third-Party Liability Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Protection Against Theft & Natural Perils", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Private Car Insurance?"
          title="Understanding Private Car Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Private Car Insurance overview"
          description="Private Car Insurance protects your vehicle against financial losses from accidents, theft, natural calamities and other covered risks. Whether it's damage, theft, fire or third-party liability, the right cover reduces the impact of unexpected events and keeps you moving with confidence."
          coverageItems={["Accidental damage to the insured vehicle", "Theft of the insured vehicle", "Fire and explosion", "Natural calamities", "Man-made events "]}
          example="If your car is damaged in an accident, the policy can cover the cost of repairs, subject to the applicable terms, conditions, deductibles and policy limits. In case of theft, the policy can provide compensation based on the applicable insured value."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Own Damage", description: "Covers accidental loss or damage to your insured car arising from covered events such as accidents, fire, theft and specified natural or man-made perils." },
            { title: "Third-Party Liability", description: "Provides coverage for your legal liability towards third parties for bodily injury, death or property damage arising from the use of your insured vehicle." },
            { title: "Theft Protection", description: "Provides financial protection if your insured vehicle is stolen, subject to the policy terms and applicable insured value." },
            { title: "Natural & Man-Made Perils", description: "Protects your vehicle against covered events such as floods, earthquakes, storms, riots, strikes and other specified perils." },
            { title: "Personal Accident Cover", description: "Provides personal accident protection for the owner-driver, subject to the applicable policy terms, limits and conditions." },
            { title: "Add-On Protection", description: "Enhance your motor insurance with suitable add-on covers based on your vehicle, usage and risk profile, subject to availability and policy terms." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protection That Moves<br/>With You</>}
          description="Every vehicle and driver is different. We help you choose the right cover and add-ons for your vehicle, usage and risk profile."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Private Car Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Vehicle & Risk Assessment", description: "We understand your vehicle details, usage, location and insurance requirements to identify the appropriate coverage." },
            { title: "Policy Selection & Placement", description: "Our specialists compare insurance options and help structure the policy with suitable coverage, deductibles and add-ons." },
            { title: "Policy Issuance & Documentation", description: "We coordinate the documentation and policy issuance process to ensure a smooth and hassle-free experience." },
            { title: "Dedicated Claims Assistance", description: "If an accident, theft or other covered loss occurs, our team assists with claims and coordinates with the insurer for timely resolution." },
            { title: "Annual Policy Review & Renewal", description: "We review your policy at renewal to ensure that the coverage continues to reflect your vehicle, usage and protection requirements." },
          ]}
        />
        <ServiceCta
          title="Ready to Drive with Confidence?"
          description="Get the right protection for your car with a policy designed around your needs. Speak with our insurance specialists for a personalised Private Car Insurance assessment."
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
