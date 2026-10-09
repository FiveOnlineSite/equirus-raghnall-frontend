import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Personal Cyber Insurance | Equirus Raghnall",
  description: "Tailored Personal Cyber Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Personal Cyber Insurance?", answer: "Personal Cyber Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Personal Cyber Insurance"
          title={<>Protect Your Digital Life.<br/> Secure Your Identity.</>}
          description="Personal cyber insurance that helps protect you and your family against online fraud, identity theft and data misuse. Get financial support and expert assistance to recover quickly and stay secure online."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Personal Cyber Insurance"
          imagePosition="center center"
          features={[
            { title: "Identity Theft Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Cyber Fraud Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Online Privacy & Data Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Cyber Harassment & Reputation Support", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Personal Cyber Incident Assistance", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Personal Cyber Insurance?"
          title="Understanding Personal Cyber Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Personal Cyber Insurance overview"
          description="Personal Cyber Insurance protects individuals and families against risks from cyber incidents, online fraud, identity theft and privacy breaches, providing financial protection and assistance for covered losses, subject to policy terms."
          coverageItems={["Identity theft and restoration expenses", "Online financial fraud and cyber-enabled theft", "Cyber extortion and ransomware-related incidents", "Online privacy and data breach-related risks","Cyber harassment and online reputation risks"]}
          example="If an individual becomes a victim of an online financial fraud or identity theft, Personal Cyber Insurance can help cover eligible financial losses and associated assistance or restoration expenses, subject to the policy terms and applicable limits."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Identity Theft Protection", description: "Supports covered identity theft incidents, including eligible expenses for restoring compromised personal identity information." },
            { title: "Cyber Financial Fraud", description: "Protects against eligible financial losses arising from covered cyber-enabled fraudulent transactions or online theft." },
            { title: "Cyber Extortion & Ransomware", description: "Provides protection and assistance for covered cyber extortion incidents involving threats to personal data, devices or digital information." },
            { title: "Online Privacy Protection", description: "Supports individuals facing covered privacy breaches, misuse of personal information or unauthorised exposure of sensitive data." },
            { title: "Cyber Harassment & Reputation Protection", description: "Provides assistance for covered cyber harassment, online abuse or reputation-related incidents, including eligible professional or legal support." },
            { title: "Cyber Liability", description: "Provides protection against certain third-party claims arising from covered online activities, privacy breaches or other specified cyber-related liabilities." },
            { title: "Additional Cyber Protection", description: "Additional extensions may be available for specific personal cyber exposures, subject to insurer availability and policy terms." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Digital Life Before Risk Finds You</>}
          description="Your digital identity is increasingly valuable and exposed. We structure Personal Cyber Insurance around your risk profile and digital lifestyle."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Personal Cyber Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Cyber Risk Assessment & Needs Analysis", description: "We understand your digital exposure, online activities and personal cyber risks to identify relevant protection requirements." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable coverage, limits and extensions and place the policy with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We assist with policy documentation, coverage interpretation and ongoing support so you understand the protection available to you." },
            { title: "Dedicated Claims Advocacy", description: "In the event of a covered cyber incident, we support you through the claims process and coordinate with the insurer for timely resolution." },
            { title: "Annual Policy Review & Renewal", description: "We review your coverage periodically to ensure it continues to reflect changes in your digital exposure and evolving cyber risks." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Personal Cyber Insurance?"
          description="Protect your digital identity, personal information and finances with cyber protection designed around your lifestyle."
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
