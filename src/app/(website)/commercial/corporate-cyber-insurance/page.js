import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Corporate Cyber Insurance | Equirus Raghnall",
  description: "Tailored Corporate Cyber Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Corporate Cyber Insurance?", answer: "Corporate Cyber Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Corporate Cyber Insurance"
          title={<>Protect Your Business From Cyber Threats</>}
          description="Cyber insurance that helps protect your business against data breaches, cyber attacks and system disruptions. Get financial support and expert assistance to recover quickly and keep operations running."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Corporate Cyber Insurance"
          imagePosition="center center"
          features={[
            { title: "Cyber Incident Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Data & Privacy Liability", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Network Security Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Cyber Business Interruption", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Incident Response & Recovery Support", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Corporate Cyber Insurance?"
          title="Understanding Corporate Cyber Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Corporate Cyber Insurance overview"
          description="Corporate Cyber Insurance protects businesses against financial and liability exposures from cyber attacks, data breaches and network security incidents, covering incident response, data recovery, business interruption and third-party claims, subject to policy terms."
          coverageItems={["Data breaches and privacy incidents", "Network security and cyber attacks", "Cyber business interruption", "Incident response and investigation costs","Data and system restoration"]}
          example="If a company experiences a cyber attack that brings its systems to a standstill and exposes sensitive customer information, Corporate Cyber Insurance can help cover eligible incident response, data recovery, business interruption, and third-party liability costs, subject to the policy terms and applicable limits."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Cyber Incident Response", description: "Protects eligible costs of responding to a covered cyber incident, including investigation, incident management and specialist support." },
            { title: "Data & Privacy Liability", description: "Protects against covered third-party claims from a data breach, privacy incident or failure to protect confidential or personal information." },
            { title: "Network Security Liability", description: "Protects against covered claims from a network security failure that results in third-party loss, damage or other covered liability." },
            { title: "Cyber Business Interruption", description: "Can protect against eligible loss of income and additional expenses from an insured cyber incident that disrupts business operations." },
            { title: "Data Restoration & Recovery", description: "Provides protection for eligible costs associated with restoring, recovering, or recreating data and systems following a covered cyber event." },
            { title: "Cyber Extortion & Ransomware", description: "Where specifically covered, protects eligible expenses from cyber extortion or ransomware incidents, subject to policy terms and limits." },
            { title: "Regulatory & Privacy Response", description: "Where covered, protects eligible costs of regulatory investigations, privacy proceedings or notifications from a covered cyber incident." },
            { title: "Additional Cyber Extensions", description: "Depending on your technology, data exposure and industry, additional cyber extensions can be considered, subject to underwriting and policy wording." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Yourself Before Risk Finds You</>}
          description="Cyber incidents hit technology, data and operations at once, so we structure Corporate Cyber Insurance around your cyber risks."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Corporate Cyber Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Cyber Risk Assessment & Needs Analysis", description: "We assess your cyber risks and exposures, then structure tailored cover and negotiate suitable terms with insurers." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable limits, deductibles and coverage sections, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure your selected cyber, privacy and business interruption covers are accurately reflected." },
            { title: "Dedicated Claims Advocacy and Breach Response services", description: "We support you through cyber incidents and claims, coordinating with insurers and response partners for timely resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews track changes in technology, data and exposures to keep your cover aligned with your risk." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Corporate Cyber Insurance?"
          description="Protect your digital operations and strengthen your business against the financial impact of cyber incidents."
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
