import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Employer Employee Insurance | Equirus Raghnall",
  description: "Tailored Employer Employee Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Employer Employee Insurance?", answer: "Employer Employee Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Employer Employee Insurance"
          title={<>Protect Your People.<br />Strengthen Your Business.</>}
          description="Employer Employee Insurance helps businesses provide structured financial protection to employees while supporting the organisation’s broader employee retention, compensation and business continuity objectives."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Employer Employee Insurance"
          imagePosition="center center"
          features={[
            { title: "Employee Financial Protection ", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Enhanced Employee Benefits ", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Talent Retention & Attraction ", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Business Continuity Support  ", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Customised Benefit Structures  ", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Employer Employee Insurance?"
          title="Understanding Employer Employee Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Employer Employee Insurance overview"
          description="Employer Employee Insurance is a life insurance-based solution that enables employers to provide financial protection to their employees while aligning the benefit structure with the organisation’s business and workforce requirements."
          coverageItems={["Life Insurance Protection", "Financial Security for Employees & Families", "Employer-Sponsored Benefits", "Employee Retention Support", "Customised Coverage"]}
          example="A company wants to strengthen its employee benefits programme for its senior and key employees.
The organisation arranges an Employer Employee Insurance solution providing defined life protection to eligible employees. In the event of a covered claim, the applicable benefit is paid according to the policy structure, helping provide financial security while strengthening the organisation’s overall employee benefits proposition.
"
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Workforce"
          items={[
            { title: "Employee Life Protection", description: "Financial protection designed around the needs of eligible employees." },
            { title: "Family Financial Security", description: "Helps protect employees’ families against the financial consequences of a covered life event." },
            { title: "Employer-Sponsored Benefits", description: "Provides organisations with a structured way to enhance their employee benefits offering." },
            { title: "Flexible Benefit Structures", description: "Coverage can be designed around employee categories, eligibility and benefit requirements." },
            { title: "Additional Protection", description: "Optional benefits may provide broader protection against specified risks, subject to policy terms." },
            { title: "Employee Welfare & Retention", description: "A comprehensive benefits proposition can contribute towards employee satisfaction, engagement and retention." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Build a Stronger Benefits Programme</>}
          description="Our specialists structure cover around your needs rather than relying on a standard policy."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Employer Employee Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Workforce & Requirement Assessment", description: "We understand your employee profile, benefit objectives, eligibility criteria and protection requirements." },
            { title: "Plan Design & Structuring", description: "We help structure suitable benefits, coverage levels and employee categories based on your organisation’s requirements." },
            { title: "Policy Placement & Documentation", description: "We coordinate with insurers to facilitate policy placement, documentation and implementation." },
            { title: "Claims Assistance", description: "We provide support throughout the claims process and coordinate with the insurer for documentation and resolution." },
            { title: "Annual Policy Review & Renewal", description: "We review the programme periodically to ensure the benefits remain aligned with workforce requirements and organisational objectives." },
          ]}
        />
        <ServiceCta
          title={<>Protect Your Employees. <br/> Strengthen Your Organisation.</>}
          description="Build an employee protection programme designed around your people and business requirements."
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
