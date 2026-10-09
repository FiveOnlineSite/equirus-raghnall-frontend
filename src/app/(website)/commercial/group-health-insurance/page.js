import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Group Health Insurance | Equirus Raghnall",
  description: "Tailored Group Health Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Group Health Insurance?", answer: "Group Health Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Group Health Insurance"
          title={<>Protect Your People. <br/> Strengthen Your Business.</>}
          description="Group health insurance that protects your employees and their families against medical expenses, supporting their wellbeing and your workplace. It helps you attract and retain talent while building a healthier business."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Group Health Insurance"
          imagePosition="center center"
          features={[
            { title: "Employee Health Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Cashless Hospitalisation", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Employee & Family Coverage", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Customised Benefit Structures", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Dedicated Claims Support", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Group Health Insurance?"
          title="Understanding Group Health Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Group Health Insurance overview"
          description="Group Health Insurance is an employer-sponsored solution providing medical and hospitalisation cover to employees and, where selected, dependants, structured around the workforce, budget and benefit requirements."
          coverageItems={["In-patient hospitalisation expenses", "Pre- and post-hospitalisation expenses", "Day-care procedures", "Cashless treatment at network hospitals, subject to policy terms","Ambulance expenses"]}
          example="If an employee covered under the group health policy requires hospitalisation for a covered medical condition, the policy can help meet eligible hospitalisation expenses, subject to the applicable sum insured, policy terms, conditions, and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Employee Hospitalisation Cover", description: "Covers eligible hospitalisation expenses incurred by insured employees for covered medical conditions, subject to policy terms and applicable limits." },
            { title: "Family & Dependant Coverage", description: "Where selected, cover can extend to eligible dependants such as spouses, children and parents, depending on the employer's chosen benefit structure." },
            { title: "Pre & Post-Hospitalisation", description: "Covers eligible medical expenses incurred before and after hospitalisation for a covered condition, subject to policy limits and period." },
            { title: "Day-Care Procedures", description: "Covers eligible procedures needing a medical facility for a specified period, but not necessarily 24-hour hospitalisation, subject to policy terms." },
            { title: "Cashless Hospitalisation", description: "Provides access to cashless treatment at applicable network hospitals, subject to insurer processes, pre-authorisation requirements, and policy conditions." },
            { title: "Maternity Benefits", description: "Where selected, maternity hospitalisation and related expenses may be covered for eligible employees or dependants." },
            { title: "Additional Health Benefits", description: "Organisations can consider additional benefits such as critical illness, room-rent enhancements or higher limits, depending on workforce needs." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Employees Before Risk Finds You</>}
          description="A well-structured Group Health Insurance programme supports employee healthcare and builds a sustainable benefits framework."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Group Health Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Workforce Risk Assessment & Needs Analysis", description: "We understand your workforce, existing benefits and budget to identify suitable health insurance solutions." },
            { title: "Plan Design & Placement", description: "Our specialists structure the sum insured, eligibility, benefits and extensions, and negotiate suitable terms with insurers." },
            { title: "Policy Documentation & Employee Support", description: "We coordinate policy documentation, employee data, enrolment and benefit communication to support smooth implementation." },
            { title: "Dedicated Claims Assistance", description: "Our team supports employees and the organisation through claims, including documentation, insurer coordination and assistance." },
            { title: "Annual Policy Review & Renewal", description: "We review utilisation, claims experience and benefits at renewal to keep the programme aligned with your needs." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Group Health Insurance?"
          description="Build a health insurance programme that protects your employees and supports your organisation's people strategy."
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
