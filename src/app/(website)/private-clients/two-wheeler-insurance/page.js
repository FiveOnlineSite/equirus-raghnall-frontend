import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Two - Wheeler Insurance | Equirus Raghnall",
  description: "Tailored Two - Wheeler Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Two - Wheeler Insurance?", answer: "Two - Wheeler Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Two - Wheeler Insurance"
          title={<>Protection For Every Ride.<br />Confidence For Every Journey</>}
          description="Keep your two-wheeler protected against accidents, theft, damage and third-party liabilities with insurance designed for the way you ride."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Two - Wheeler Insurance"
          imagePosition="center center"
          features={[
            { title: "Accident & Damage Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Third-Party Liability Cover", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Protection Against Theft", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Two - Wheeler Insurance?"
          title="Understanding Two - Wheeler Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Two - Wheeler Insurance overview"
          description="Two-Wheeler Insurance protects your bike or scooter against financial losses from accidents, theft, natural or man-made events and third-party liabilities, helping you manage the impact and get back on the road with confidence."
          coverageItems={["Own Damage Protection", "Theft Protection", "Natural Calamities", "Man-Made Events", "Third-Party Liability"]}
          example="If your bike is damaged in an accident, the policy can cover the admissible repair costs under the applicable Own Damage section. Similarly, if the vehicle is stolen, the policy can provide compensation based on the applicable terms and insured value."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Every Ride"
          items={[
            { title: "Third-Party Liability", description: "Protects you against covered legal liabilities arising from injury, death or property damage caused to a third party while using your two-wheeler." },
            { title: "Own Damage", description: "Covers accidental damage to your bike or scooter, along with specified losses arising from natural and man-made events." },
            { title: "Theft & Total Loss Protection", description: "Provides financial protection in the event of theft or a covered total loss, subject to the policy terms and applicable Insured Declared Value." },
            { title: "Personal Accident", description: "Provides financial support for covered accidental death or specified permanent disabilities of the insured person." },
            { title: "Add-On Protection", description: "Choose from available add-ons to enhance the protection offered by your base two-wheeler policy, depending on your vehicle, insurer and policy requirements." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Two-Wheeler</>}
          description="Every rider and vehicle is different. Our specialists help you understand your risks and choose insurance suited to your vehicle and usage"
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Two - Wheeler Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Requirement Analysis", description: "We understand your vehicle details, usage pattern and insurance requirements to identify the appropriate coverage." },
            { title: "Policy Comparison & Placement", description: "We help evaluate insurance options, coverage, deductibles, IDV and add-ons to identify a suitable policy." },
            { title: "Policy Issuance & Documentation", description: "Our team supports you through documentation and policy issuance, helping ensure that the required details are accurately captured." },
            { title: "Claims Assistance", description: "In an accident, theft or covered loss, our team assists with claims and coordinates with the insurer." },
            { title: "Renewal & Policy Review", description: "We review your coverage at renewal to help ensure your two-wheeler keeps appropriate protection as your needs change." },
          ]}
        />
        <ServiceCta
          title="Ready To Ride With Confidence?"
          description="Protect your bike or scooter with the right insurance cover and get support from experienced insurance specialists."
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
