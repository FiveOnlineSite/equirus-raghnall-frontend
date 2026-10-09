import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Electronic Equipment | Equirus Raghnall",
  description: "Tailored Electronic Equipment solutions.",
};

const faqs = [
  { question: "Who should consider Electronic Equipment?", answer: "Electronic Equipment can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Electronic Equipment"
          title={<>Protect Your Technology. Keep Your Business Connected.</>}
          description="Insurance that protects your computers, servers and electronic equipment against accidental damage, breakdown and loss, helping you avoid costly disruption."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Electronic Equipment"
          imagePosition="center center"
          features={[
            { title: "Electronic Equipment Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Accidental Damage Coverage", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Data & External Media Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Increased Cost of Working Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Protection for Critical Technology", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Electronic Equipment?"
          title="Understanding Electronic Equipment"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Electronic Equipment overview"
          description="Electronic Equipment Insurance (EEI) protects electronic equipment against sudden, unforeseen loss or damage, covering repair or replacement costs and, where selected, data, external media and increased operating costs."
          coverageItems={["Sudden and unforeseen physical loss or damage to electronic equipment", "Computers, servers and other electronic systems", "Accidental damage arising from covered external or internal causes", "External data media and data-related risks, where selected","Increased costs of working following insured damage"]}
          example="If a server or critical electronic system is damaged due to a covered accidental event, EEI can help cover the eligible repair or replacement cost. Where selected, additional cover may also respond to eligible costs incurred to continue operations while the damaged equipment is being restored."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Electronic Equipment Protection", description: "Protects insured electronic equipment against sudden and unforeseen physical loss or damage, subject to applicable policy terms, conditions and exclusions." },
            { title: "Computers & IT Equipment", description: "Protects specified computers, servers, workstations, networking equipment, and other IT infrastructure against covered accidental physical damage." },
            { title: "Communication & Electronic Systems", description: "Can provide protection for specified communication systems, electronic installations, and specialised equipment used in business operations." },
            { title: "External Data Media", description: "Where selected, protects specified external data media against covered physical loss or damage, subject to applicable policy conditions and limits." },
            { title: "Increased Cost of Working", description: "Where selected, protects eligible additional expenditure to continue operations after insured damage to electronic equipment." },
            { title: "Data Reconstitution", description: "Where covered, eligible costs of restoring or reconstructing data after insured physical damage to covered data media may be protected." },
            { title: "Additional Extensions", description: "Depending on the equipment, additional extensions may be considered for specific exposures, subject to underwriting and policy wording." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Technology Before Risk Finds You</>}
          description="Electronic systems are critical to business. We structure EEI solutions around your equipment's type, value, usage and importance."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Electronic Equipment advisory support"
          imagePosition="center"
          steps={[
            { title: "Technology Risk Assessment & Needs Analysis", description: "We understand your equipment, values, locations, usage and operational dependencies to identify appropriate protection." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable sums insured, deductibles and optional covers, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure the insured equipment, values and coverage are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports the claims process from initial notification through documentation, survey coordination, assessment, and resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews ensure changes in technology, equipment values and business needs are reflected in the insurance programme." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Electronic Equipment?"
          description="Protect your critical electronic equipment with coverage designed around your technology and business requirements."
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
