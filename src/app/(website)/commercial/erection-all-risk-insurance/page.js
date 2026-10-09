import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Errection All Risk (EAR) | Equirus Raghnall",
  description: "Tailored Errection All Risk (EAR) solutions.",
};

const faqs = [
  { question: "Who should consider Errection All Risk (EAR)?", answer: "Errection All Risk (EAR) can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Errection All Risk (EAR)"
          title={<>Protect Every Stage Of Erection. Keep Your Project Moving.</>}
          description="Erection All Risk (EAR) Insurance protects the erection, installation and commissioning of machinery, plant and equipment against accidental loss or damage, and can also cover third-party liability."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Errection All Risk (EAR)"
          imagePosition="center center"
          features={[
            { title: "Installation Risk Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Material Damage Coverage", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Commissioning Cover", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Third-Party Liability Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Project Specific Extensions", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Errection All Risk (EAR)?"
          title="Understanding Errection All Risk (EAR)"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Errection All Risk (EAR) overview"
          description="Erection All Risk (EAR) Insurance protects the erection, installation and commissioning of machinery, plant and equipment against accidental physical loss or damage, and can also include third-party liability protection."
          coverageItems={["Accidental physical loss or damage during erection and installation", "Machinery, plant, equipment, and materials at the project site", "Risks arising during testing and commissioning", "Temporary works and installation-related property","Third-party bodily injury or property damage liability"]}
          example="If newly installed machinery is accidentally damaged during testing and commissioning, EAR Insurance can help cover the eligible cost of repairing or replacing the damaged equipment, subject to the policy terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Material Damage Protection", description: "Protects machinery, plant, equipment and materials involved in the erection or installation project against accidental physical loss or damage." },
            { title: "Testing & Commissioning Protection", description: "Covers specified accidental loss or damage during testing and commissioning of installed machinery or equipment, subject to policy conditions." },
            { title: "Third-Party Liability Protection", description: "Protects against legal liability for accidental bodily injury or property damage to third parties arising from the insured erection or installation project." },
            { title: "Construction & Erection Equipment", description: "Can provide protection for specified tools, equipment, temporary structures, and other property used in connection with the erection and installation work." },
            { title: "Debris Removal", description: "Covers eligible expenses for removing debris after insured loss or damage at the project site, subject to limits and conditions." },
            { title: "Escalation", description: "Allows for increases in the value of equipment, materials or project costs during the policy period, subject to the selected limit and conditions." },
            { title: "Maintenance Period Protection", description: "Where selected, cover can extend into the maintenance period for specified loss or damage under the maintenance clause." },
            { title: "Additional Project Extensions", description: "Depending on the project, additional extensions may be considered for specific erection and installation exposures, subject to underwriting." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Project Before Risk Finds You</>}
          description="Erection projects involve complex equipment, testing and timelines. We structure EAR solutions around your project's risks."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Errection All Risk (EAR) advisory support"
          imagePosition="center"
          steps={[
            { title: "Project Risk Assessment & Needs Analysis", description: "We understand the project scope, equipment, contract value, erection period, testing schedule and site conditions." },
            { title: "Policy Design & Placement", description: "Our specialists structure appropriate limits, deductibles, extensions, and liability protection and place the risk with suitable insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure project details, insured property and coverage are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports the claims process from initial notification through documentation, insurer coordination, assessment, and resolution." },
            { title: "Project Review & Policy Closure", description: "We monitor project changes and support amendments, extensions, maintenance-period needs and final closure." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Errection All Risk (EAR)?"
          description="Protect your erection and installation project with coverage designed around its specific risks and requirements."
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
