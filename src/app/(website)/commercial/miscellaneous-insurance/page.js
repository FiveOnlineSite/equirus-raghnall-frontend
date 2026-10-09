import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Miscellaneous | Equirus Raghnall",
  description: "Tailored Miscellaneous solutions.",
};

const faqs = [
  { question: "Who should consider Miscellaneous?", answer: "Miscellaneous can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Miscellaneous"
          title={<>Protect Your Business Against Risks Outside Standard Covers</>}
          description="Specialty insurance solutions designed for risks that standard policies often don't address. Our specialists help you identify exposures and build tailored protection for your business."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Miscellaneous"
          imagePosition="center center"
          features={[
            { title: "Flexible Risk Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Specialised Commercial Covers", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Protection for Unique Business Exposures", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Tailored Insurance Solutions", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Comprehensive Risk Management", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Miscellaneous?"
          title="Understanding Miscellaneous"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Miscellaneous overview"
          description="Miscellaneous Insurance offers specialised solutions that protect businesses against specific risks not covered by standard property, liability or commercial policies, structured around the nature of the business, its assets, contractual obligations and unique exposures."
          coverageItems={["Specialised Risks Protection", "Asset & Contract Cover", "Accidental Loss Protection", "Business Liability","Custom Extensions"]}
          example="If a business has a specialised operational exposure that is not adequately addressed under its standard insurance programme, a suitable Miscellaneous Insurance solution can provide targeted protection for that specific risk, subject to the policy terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Fidelity Guarantee Insurance", description: "Protects businesses against direct financial loss from fraud, dishonesty or specified fraudulent acts by covered employees, subject to policy terms." },
            { title: "Money Insurance", description: "Protects against loss of money in transit, on business premises or in other specified situations, subject to the selected cover and conditions." },
            { title: "Plate Glass Insurance", description: "Provides protection against accidental breakage of specified glass installed at insured premises. The cover can help address the cost of replacing insured glass, subject to the policy wording and exclusions." },
            { title: "Electronic Equipment Insurance", description: "Protects specified electronic equipment against accidental physical loss or damage arising from covered events. It can be structured for equipment used in offices, commercial establishments, and specialised operations." },
            { title: "Baggage Insurance", description: "Protects specified baggage and personal belongings against loss or damage while travelling, subject to selected cover, limits and exclusions." },
            { title: "Personal Accident Insurance", description: "Protects against specified accidental bodily injury, including accidental death and permanent disability benefits, subject to policy terms." },
            { title: "Additional Specialised Covers", description: "Other specialised solutions can be structured for business or individual risks that need protection beyond conventional insurance." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Business Before Risk Finds You</>}
          description="Every business has exposures that standard policies miss. We help identify these risks and structure suitable insurance around your needs."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Miscellaneous advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We understand your business activities, assets, contracts and specialised exposures to identify the right protection." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable coverage, limits, deductibles, and extensions and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation and ensure the selected coverage aligns with agreed requirements and policy terms." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports you through claims, from initial notification and documentation to insurer coordination and resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews keep your insurance programme aligned with changes in your business, assets, operations and risk exposures." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Miscellaneous?"
          description="Protect your business with insurance solutions designed around your specific risk exposures."
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
