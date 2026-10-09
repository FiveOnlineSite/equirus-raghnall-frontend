import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Commercial General Liability | Equirus Raghnall",
  description: "Tailored Commercial General Liability solutions.",
};

const faqs = [
  { question: "Who should consider Commercial General Liability?", answer: "Commercial General Liability can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Commercial General Liability"
          title={<>Protect Your Business From Third-Party Liability Risks</>}
          description="Commercial General Liability Insurance protects your business against third-party bodily injury or property damage claims arising from your operations, premises or products, helping you manage claims and legal costs."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Commercial General Liability"
          imagePosition="center center"
          features={[
            { title: "Third-Party Bodily Injury Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Third-Party Property Damage Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Legal Liability & Defence Costs", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Product & Premises Liability Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Liability Solutions", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Commercial General Liability?"
          title="Understanding Commercial General Liability"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Commercial General Liability overview"
          description="Commercial General Liability (CGL) Insurance protects businesses against third-party bodily injury, property damage and related claims, covering eligible compensation and legal defence costs, subject to policy terms, limits and exclusions."
          coverageItems={["Third-party bodily injury", "Third-party property damage", "Legal defence and litigation expenses", "Premises and operations liability","Products and completed operations liability"]}
          example="If a customer or visitor suffers an injury at an insured business premises and raises a legal claim against the company, CGL Insurance can help cover eligible legal defence costs and compensation arising from the covered liability, subject to the policy terms and applicable limits."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Premises & Operations Liability", description: "Protects against covered third-party claims for bodily injury or property damage arising from the insured's premises or business operations." },
            { title: "Products Liability", description: "Protects against covered third-party claims for bodily injury or property damage caused by products the insured manufactures, supplies or sells." },
            { title: "Completed Operations Liability", description: "Protects against eligible third-party claims from completed work or services by the insured that result in covered bodily injury or property damage." },
            { title: "Third-Party Bodily Injury", description: "Protects against covered legal liability for accidental third-party bodily injury arising from the insured's business activities." },
            { title: "Third-Party Property Damage", description: "Protects against covered legal liability for accidental damage to third-party property caused by the insured's business operations." },
            { title: "Legal Defence Costs", description: "Covers eligible legal defence expenses for covered liability claims, including legal representation and related costs, subject to policy terms and limits." },
            { title: "Personal & Advertising Injury", description: "Where covered, protects against claims such as defamation, libel, slander or other personal and advertising injury from business activities." },
            { title: "Additional Liability Extensions", description: "Depending on the business, additional extensions can be considered for specific contractual, operational or product exposures." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Yourself Before Risk Finds You</>}
          description="Third-party claims can mean significant legal costs. We structure CGL solutions around your operations, premises, products and contracts."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Commercial General Liability advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We understand your business activities, premises, products, services, contractual obligations and key liability exposures." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable limits, deductibles and extensions, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure the selected covers, limits, insured entities and extensions are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims from notification through documentation, insurer coordination and resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews assess changes in activities, turnover, products and exposures to keep the programme aligned." },
          ]}
        />
        <ServiceCta
          title={<>Ready To Explore <br/>Commercial General Liability?</>}
          description="Protect your business against third-party liability risks with comprehensive coverage designed around your operations."
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
