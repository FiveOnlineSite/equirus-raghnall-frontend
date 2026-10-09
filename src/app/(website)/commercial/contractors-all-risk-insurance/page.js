import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Contractors All Risk (CAR) | Equirus Raghnall",
  description: "Tailored Contractors All Risk (CAR) solutions.",
};

const faqs = [
  { question: "Who should consider Contractors All Risk (CAR)?", answer: "Contractors All Risk (CAR) can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Contractors All Risk (CAR)"
          title={<>Protect Your Project. Secure Every Stage Of Construction.</>}
          description="Contractors All Risk (CAR) Insurance protects construction projects against accidental loss or damage during construction, and can also cover third-party liability for bodily injury or property damage."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Contractors All Risk (CAR)"
          imagePosition="center center"
          features={[
            { title: "Comprehensive Project Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Material Damage Coverage", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Third-Party Liability Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Protection During Construction", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Project-Specific Extensions", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Contractors All Risk (CAR)?"
          title="Understanding Contractors All Risk (CAR)"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Contractors All Risk (CAR) overview"
          description="Contractors All Risk (CAR) Insurance protects construction projects against accidental loss or damage during construction, and can also cover third-party liability for bodily injury or property damage, subject to policy terms."
          coverageItems={["Accidental physical loss or damage to works under construction", "Temporary works, construction materials, and equipment", "Plant and machinery used at the project site", "Third-party bodily injury or property damage liability","Debris removal and related expenses"]}
          example="If a partially completed structure is damaged due to a covered accidental event during construction, CAR Insurance can help cover the eligible cost of reinstating the damaged works. Where covered, the policy can also respond to third-party liability arising from the same incident."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Material Damage Protection", description: "Covers accidental loss or damage to insured contract works, including permanent and temporary works and materials." },
            { title: "Third-Party Liability Protection", description: "Protects against the insured's legal liability for accidental bodily injury or property damage to third parties arising from the construction project." },
            { title: "Construction Plant & Machinery", description: "Can protect specified construction plant, machinery, equipment and tools used on the insured project against covered accidental loss or damage." },
            { title: "Debris Removal", description: "Covers eligible expenses for removing debris after insured loss or damage to the project, subject to policy limits and conditions." },
            { title: "Escalation", description: "Allows for increases in construction costs during the policy period, such as material and labour, subject to the selected limit and conditions." },
            { title: "Maintenance Period Protection", description: "Where selected, cover can extend into the maintenance period for specified loss or damage under the maintenance clause." },
            { title: "Additional Project Extensions", description: "Where selected, protection can extend into the maintenance period for specified loss or damage covered under the maintenance clause." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Yourself Before Risk Finds You</>}
          description="Every project has its own timeline, obligations, site conditions and risks. We structure CAR solutions around your requirements."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Contractors All Risk (CAR) advisory support"
          imagePosition="center"
          steps={[
            { title: "Project Risk Assessment & Needs Analysis", description: "We understand the project scope, contract value, construction period, site conditions, contractors and key exposures." },
            { title: "Policy Design & Placement", description: "Our specialists structure appropriate limits, deductibles, extensions, and liability protection and place the risk with suitable insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure the agreed project details, coverage and extensions are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports the claims process from initial notification through documentation, insurer coordination, assessment, and resolution." },
            { title: "Annual / Project Review & Policy Closure", description: "We monitor project changes and support amendments, extensions, maintenance-period needs and final closure." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Contractors All Risk (CAR)?"
          description="Protect your construction project with coverage designed around its specific risks and requirements."
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
