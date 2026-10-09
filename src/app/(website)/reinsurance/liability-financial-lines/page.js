import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Liability & Financial Lines  | Equirus Raghnall",
  description: "Tailored Liability & Financial Lines  solutions.",
};

const faqs = [
  { question: "Who should consider Liability & Financial Lines ?", answer: "Liability & Financial Lines  can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Liability & Financial Lines "
          title={<>Protect Against Liability And Financial Risks</>}
          description="Insurance that protects your business, directors and professionals against legal claims, financial loss and regulatory exposure, helping you manage legal costs and compensation with confidence."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Liability & Financial Lines "
          imagePosition="center center"
          features={[
            { title: "Portfolio Risk Transfer", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Capacity Enhancement", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Balance Sheet Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Liability & Financial Lines ?"
          title="Understanding Liability & Financial Lines "
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Liability & Financial Lines  overview"
          description="Liability & Financial Lines Reinsurance lets insurers transfer defined portions of their liability and financial lines portfolios to reinsurers, helping manage accumulation, volatility, severity and emerging exposures while supporting sustainable underwriting capacity."
          coverageItems={["Directors & Officers Liability", "Professional Indemnity", "Errors & Omissions", "Employment Practices Liability","Cyber Liability"]}
          example="If an insurer experiences a significant liability loss within a covered portfolio, the reinsurance programme may respond above the agreed retention, subject to the treaty or facultative terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Reinsurance Solutions"
          items={[
            { title: "Liability Reinsurance", description: "Provides reinsurance capacity for portfolios exposed to third-party bodily injury, property damage, and other liability risks." },
            { title: "Financial Lines Reinsurance", description: "Supports insurers in managing portfolios covering management, professional, cyber, crime, and other financial risks." },
            { title: "Excess of Loss", description: "Provides protection against large or severe losses exceeding the insurer's agreed retention." },
            { title: "Facultative Reinsurance", description: "Provides tailored reinsurance protection for individual or complex liability and financial lines risks that require specific underwriting consideration." },
            { title: "Portfolio Protection", description: "Helps insurers manage portfolio volatility and accumulation across liability and financial lines exposures." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Strengthen Your Liability & Financial Lines Portfolio</>}
          description="We understand your portfolio, underwriting strategy, claims experience and risk appetite to structure appropriate reinsurance solutions."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Liability & Financial Lines  advisory support"
          imagePosition="center"
          steps={[
            { title: "Portfolio Risk Assessment", description: "We analyse your portfolio, exposure profile, claims experience, underwriting approach, and key accumulation areas." },
            { title: "Reinsurance Structure & Design", description: "Our specialists help structure appropriate retentions, limits, layers, attachment points, and reinsurance participation." },
            { title: "Reinsurer Placement", description: "We coordinate with suitable reinsurers to secure capacity aligned with your portfolio and underwriting requirements." },
            { title: "Treaty & Facultative Support", description: "Our specialists support negotiations, documentation and reinsurer coordination throughout the placement process." },
            { title: "Annual Portfolio Review & Renewal", description: "Regular reviews keep your reinsurance programme aligned with portfolio growth, emerging risks and capacity needs." },
          ]}
        />
        <ServiceCta
          title="Strengthen Your Reinsurance Strategy"
          description="We help structure Liability & Financial Lines reinsurance solutions designed around your portfolio, risk appetite, and capacity requirements."
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
