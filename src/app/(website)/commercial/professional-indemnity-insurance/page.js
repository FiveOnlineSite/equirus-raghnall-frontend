import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Professional Indemnity | Equirus Raghnall",
  description: "Tailored Professional Indemnity solutions.",
};

const faqs = [
  { question: "Who should consider Professional Indemnity?", answer: "Professional Indemnity can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Professional Indemnity"
          title={<>Protect Your Expertise. Secure Your Professional Practice.</>}
          description="Professional Indemnity Insurance protects your business against claims of negligence, errors or omissions in your services, helping you manage legal costs and compensation."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Professional Indemnity"
          imagePosition="center center"
          features={[
            { title: "Professional Liability Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Errors & Omissions Coverage", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Legal Defence Cost Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Client Claim Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Tailored Professional Risk Solutions", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Professional Indemnity?"
          title="Understanding Professional Indemnity"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Professional Indemnity overview"
          description="Professional Indemnity Insurance protects professionals and businesses against claims of errors, omissions or negligence, covering eligible legal defence costs and compensation from client or third-party claims, subject to policy terms, limits and exclusions."
          coverageItems={["Professional errors and omissions", "Alleged negligence in professional services", "Legal defence and litigation costs", "Claims for financial loss arising from professional services","Breach of professional duty, where covered"]}
          example="If a client alleges that an error in professional advice or services resulted in financial loss and raises a claim against the professional or firm, Professional Indemnity Insurance can help cover eligible legal defence costs and covered compensation, subject to the policy terms and applicable limits."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Errors & Omissions", description: "Provides protection against covered claims arising from an alleged error, omission, oversight, or failure in the delivery of professional services." },
            { title: "Professional Negligence", description: "Provides protection against eligible claims alleging negligence in the performance of professional duties or services provided to clients." },
            { title: "Legal Defence Costs", description: "Covers eligible legal and defence expenses for responding to covered claims, investigations or proceedings, subject to policy wording and limits." },
            { title: "Financial Loss Claims", description: "Provides protection against covered third-party claims for financial loss arising from professional services provided by the insured." },
            { title: "Breach of Professional Duty", description: "Where covered, protects against claims alleging a failure to meet professional duties or standards in connection with the insured services." },
            { title: "Defamation & Personal Injury", description: "Where covered, protects against certain claims involving defamation, libel, slander or other specified personal injury from professional activities." },
            { title: "Loss of Documents & Records", description: "Where covered, protects eligible costs of loss, damage or destruction of clients' documents or records during professional services." },
            { title: "Additional Professional Liability Extensions", description: "Depending on the profession and services, additional extensions can be considered for specific professional exposures, subject to underwriting." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Profession Before Risk Finds You</>}
          description="Even one error can create significant legal exposure. We structure Professional Indemnity solutions around your profession."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Professional Indemnity advisory support"
          imagePosition="center"
          steps={[
            { title: "Professional Risk Assessment & Needs Analysis", description: "We understand your professional services, client base, contracts, geographical operations, revenue profile, and key liability exposures." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable limits, deductibles, retroactive dates and extensions, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure the insured profession, services, limits and extensions are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims from notification through documentation, insurer coordination, legal engagement and resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews assess changes in services, contracts, turnover and exposure to keep the programme aligned with your requirements." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Professional Indemnity?"
          description="Protect your professional reputation and financial interests with Professional Indemnity coverage designed around your practice."
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
