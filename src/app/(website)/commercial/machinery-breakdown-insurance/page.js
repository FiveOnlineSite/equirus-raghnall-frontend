import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "MBD | Equirus Raghnall",
  description: "Tailored MBD solutions.",
};

const faqs = [
  { question: "Who should consider MBD?", answer: "MBD can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="MBD"
          title={<>Protect Your Machinery. Minimise Downtime.</>}
          description="Comprehensive insurance that protects your machinery against sudden breakdown and accidental damage. It helps you minimise costly downtime and keep your operations running smoothly."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="MBD"
          imagePosition="center center"
          features={[
            { title: "Sudden Breakdown Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Machinery Repair & Replacement", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Protection for Critical Equipment", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Business Interruption Protection Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Machinery Specific Coverage", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is MBD?"
          title="Understanding MBD"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="MBD overview"
          description="Machinery Breakdown (MBD) Insurance protects machinery against sudden, unforeseen damage from covered mechanical or electrical breakdowns, helping manage repair or replacement costs and, where selected, eligible loss of profit."
          coverageItems={["Sudden and unforeseen mechanical breakdown", "Electrical and machinery-related damage", "Damage to insured machinery and equipment", "Repair and replacement costs following covered breakdowns","Protection for critical production equipment"]}
          example="If a critical production machine suffers a sudden mechanical or electrical breakdown, MBD Insurance can help cover the eligible repair or replacement costs. Where loss-of-profit cover is selected, it may also respond to eligible financial losses resulting from the interruption."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Machinery Breakdown Protection", description: "Provides protection against sudden and unforeseen physical loss or damage to insured machinery arising from covered mechanical or electrical breakdowns." },
            { title: "Mechanical Breakdown", description: "Covers specified machinery against sudden mechanical failures, including certain internal damage, subject to policy wording and exclusions." },
            { title: "Electrical Breakdown", description: "Provides protection for covered electrical or electronic damage affecting insured machinery, subject to the applicable policy terms and conditions." },
            { title: "Machinery Repair & Replacement", description: "Helps meet eligible costs of repairing or replacing machinery after an insured breakdown, subject to the sum insured and policy conditions." },
            { title: "Machinery Loss of Profit (MLOP)", description: "Where selected, MLOP covers eligible loss of profit and continuing expenses from an insured breakdown that interrupts operations." },
            { title: "Expediting Expenses", description: "Where covered, extra expenses to expedite repairs or restore machinery after an insured breakdown may be considered, subject to limits." },
            { title: "Additional Extensions", description: "Depending on the machinery, additional extensions may be considered for specific breakdown exposures, subject to underwriting and policy wording." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Yourself Before Risk Finds You</>}
          description="Breakdowns can halt production and create heavy repair costs. We structure MBD solutions around your machinery and downtime impact."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="MBD advisory support"
          imagePosition="center"
          steps={[
            { title: "Machinery Risk Assessment & Needs Analysis", description: "We understand the type, age, value, usage, operating conditions, maintenance practices, and criticality of your machinery." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable sums insured, deductibles and optional loss-of-profit cover, and place the risk with insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure machinery details, values, locations and agreed coverage are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims from breakdown notification through documentation, survey coordination and assessment to resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews ensure changes in machinery, values, production capacity and operations are reflected in the insurance programme." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore MBD?"
          description="Protect your critical machinery and keep your business prepared for unexpected breakdowns."
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
