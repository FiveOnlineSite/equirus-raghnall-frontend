import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Cyber & Crime | Equirus Raghnall",
  description: "Tailored Cyber & Crime solutions.",
};

const faqs = [
  { question: "Who should consider Cyber & Crime?", answer: "Cyber & Crime can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Cyber & Crime"
          title={<>Protect Your Business From <br/> Digital And Financial Crime</>}
          description="Comprehensive insurance that protects your business against cyber attacks, fraud and financial crime, helping you recover from losses quickly and keep operations secure."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Cyber & Crime"
          imagePosition="center center"
          features={[
            { title: "Cyber Incident Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Data & Privacy Liability", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Cyber Extortion Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Financial Crime & Fraud Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Business Interruption Support", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Cyber & Crime?"
          title="Understanding Cyber & Crime"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Cyber & Crime overview"
          description="Cyber & Crime Insurance protects businesses against exposures from cyber incidents, data breaches and fraud or crime, covering incident response, restoration, data recovery and covered claims, subject to policy terms."
          coverageItems={["Data breaches and privacy incidents", "Cyber attacks and network security events", "Business interruption caused by covered cyber incidents", "Cyber extortion and ransomware-related expenses","Data restoration and incident response costs"]}
          example="If a business suffers a cyber attack that disrupts its systems and compromises sensitive data, Cyber & Crime Insurance can help cover eligible incident response, data restoration, business interruption, and liability-related costs, subject to the policy terms and applicable limits."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Cyber Incident Response", description: "Covers eligible costs of responding to a covered cyber incident, including investigation, incident management and specialist support." },
            { title: "Data & Privacy Liability", description: "Protects against covered third-party claims from a data breach, privacy incident or failure to protect confidential information, subject to policy wording." },
            { title: "Cyber Business Interruption", description: "Can protect against eligible loss of income or additional expenses from an insured cyber event that disrupts business operations." },
            { title: "Cyber Extortion & Ransomware", description: "Where covered, protects eligible expenses from cyber extortion events, including certain response and recovery costs, subject to policy terms." },
            { title: "Data Restoration & Recovery", description: "Provides protection for eligible costs associated with restoring or recovering data and systems following a covered cyber incident." },
            { title: "Crime & Employee Dishonesty", description: "Protects against specified direct financial losses from covered fraudulent or dishonest acts, including certain employee-related crime exposures." },
            { title: "Social Engineering & Funds Transfer Fraud", description: "Where covered, protects against financial losses from fraudulent instructions, impersonation or manipulation of payment processes." },
            { title: "Additional Cyber & Crime Extensions", description: "Depending on the business, additional extensions may be considered for specific cyber, crime and fraud exposures, subject to underwriting." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Business Before Risk Finds You</>}
          description="Cyber and financial crime can hit operations, data and finances at once. We structure Cyber & Crime solutions around your exposures."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Cyber & Crime advisory support"
          imagePosition="center"
          steps={[
            { title: "Cyber & Crime Risk Assessment", description: "We understand your technology, data, payment processes, financial controls and key cyber and crime exposures." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable limits, deductibles, coverage sections and extensions, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure your selected cyber, privacy and crime covers are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims from incident notification through documentation, insurer coordination and resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews assess changes in technology, data, payment processes and emerging threats to keep the programme aligned." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Cyber & Crime?"
          description="Regular reviews help assess changes in technology, data volumes, payment processes, business operations, and emerging threats to keep the insurance programme aligned with the organisation's risk profile."
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
