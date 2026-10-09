import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Marine Hull & Aviation | Equirus Raghnall",
  description: "Tailored Marine Hull & Aviation solutions.",
};

const faqs = [
  { question: "Who should consider Marine Hull & Aviation?", answer: "Marine Hull & Aviation can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Marine Hull & Aviation"
          title={<>Protect Your Vessels. Secure Your Aircraft.</>}
          description="Specialist marine and aviation insurance that protects your vessels, aircraft and related operations against accidental loss, damage and liability. Tailored to your assets, it helps keep your operations moving."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Marine Hull & Aviation"
          imagePosition="center center"
          features={[
            { title: "Marine Hull Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Aviation Asset Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Physical Damage Coverage", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Liability Protection Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Specialised Risk Solutions", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Marine Hull & Aviation?"
          title="Understanding Marine Hull & Aviation"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Marine Hull & Aviation overview"
          description="Marine Hull & Aviation Insurance protects vessels, aircraft and related operational risks against accidental physical loss or damage, with Aviation also offering liability protection for aviation-related risks, subject to policy terms."
          coverageItems={["Physical loss or damage to insured vessels and aircraft", "Marine hull and machinery protection", "Aircraft hull protection", "Third-party liability protection","Protection against specified marine and aviation risks"]}
          example="If an insured vessel suffers accidental damage during its operation or an aircraft sustains covered physical damage, the relevant policy can help meet eligible repair or reinstatement costs, subject to the applicable policy terms, conditions, and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Marine Hull Protection", description: "Covers accidental physical loss or damage to insured vessels, subject to policy wording, insured value and geographical limits." },
            { title: "Hull & Machinery", description: "Can provide protection for the vessel's hull, machinery, equipment, and associated marine property against covered physical loss or damage." },
            { title: "Marine War & Related Risks", description: "Where arranged, cover may be available for war and related marine risks excluded from standard hull terms, subject to policy wording." },
            { title: "Aviation Hull Protection", description: "Protects insured aircraft and specified equipment and components against accidental physical loss or damage, subject to policy terms." },
            { title: "Aviation Liability", description: "Protects against covered liabilities from aviation operations, including third-party injury or property damage, subject to policy terms." },
            { title: "Passenger & Third-Party Liability", description: "Where applicable, provides liability protection for covered claims involving passengers and third parties arising from insured aviation operations." },
            { title: "Additional Marine & Aviation Extensions", description: "Depending on the vessel, aircraft and operations, additional extensions can be considered, subject to underwriting and policy wording." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Assets Before Risk Finds You</>}
          description="Marine and aviation assets carry complex risks. We structure solutions around your vessel or aircraft, operations, geography and liability needs."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Marine Hull & Aviation advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We understand your vessel or aircraft specifications, values, usage, territories, ownership structure and liability exposures." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable insured values, deductibles and liability limits, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure asset details, values, geographical limits and agreed coverage are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims from notification through documentation, survey coordination and insurer engagement to resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews ensure changes in asset values, fleet, operations, routes and risk exposures are reflected in the insurance programme." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Marine Hull & Aviation?"
          description="Protect your marine and aviation assets with specialised insurance solutions designed around your operational risks."
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
