import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Employers Liability | Equirus Raghnall",
  description: "Tailored Employers Liability solutions.",
};

const faqs = [
  { question: "Who should consider Employers Liability?", answer: "Employers Liability can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Employers Liability"
          title={<>Protect Your People. <br/>Secure Your Business.</>}
          description="Employers' Liability Insurance protects your business against legal liability for employee injury, illness or death arising from work, helping cover compensation and legal costs."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Employers Liability"
          imagePosition="center center"
          features={[
            { title: "Employee Injury Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Compensation Benefits", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Employer’s Legal Liability Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Death & Disability Benefits", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Legal Defence Cost Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Employers Liability?"
          title="Understanding Employers Liability"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Employers Liability overview"
          description="Employers' Liability / Workers' Compensation Insurance protects employees against the financial consequences of work-related injury, illness, disability or death, while helping employers manage compensation and legal liabilities from covered workplace accidents, subject to policy terms and applicable laws."
          coverageItems={["Accidental bodily injury to employees arising out of employment", "Death resulting from a covered workplace accident", "Permanent or temporary disability benefits", "Occupational injury or disease, where covered","Compensation payable under applicable legislation"]}
          example="If an employee suffers a serious injury while performing assigned work and becomes temporarily or permanently disabled, the policy can help provide the applicable compensation and benefits and protect the employer against covered liability arising from the incident, subject to the policy terms and applicable law."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Accidental Death Benefit", description: "Provides compensation to eligible beneficiaries if an employee dies in a covered employment-related accident, subject to policy terms and legislation." },
            { title: "Permanent Total Disability", description: "Provides benefits for permanent total disability from a covered workplace accident, subject to policy wording and assessment." },
            { title: "Permanent Partial Disability", description: "Provides compensation for a covered permanent partial disability from a workplace accident, based on policy terms and disability assessment." },
            { title: "Temporary Disability", description: "Provides eligible compensation for temporary loss of earning capacity from a covered employment-related injury, subject to policy terms." },
            { title: "Medical & Related Expenses", description: "Where covered or applicable, eligible medical and treatment expenses from a covered workplace injury may be addressed." },
            { title: "Occupational Injury & Disease", description: "Where covered, protects against specified occupational diseases or work-related illnesses recognised under the policy and legislation." },
            { title: "Employer’s Legal Liability", description: "Provides protection against covered legal liability arising from employee injury, illness, disability, or death in connection with employment." },
            { title: "Legal Defence Costs", description: "Covers eligible legal expenses for defending covered employer liability claims, subject to policy terms and limits." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Workforce Before Risk Finds You</>}
          description="Workplace accidents carry legal consequences. We structure Worker's Compensation solutions around your workforce needs."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Employers Liability advisory support"
          imagePosition="center"
          steps={[
            { title: "Workforce Risk Assessment & Needs Analysis", description: "We understand your workforce, nature of work, salary structure, locations and compensation requirements." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable coverage, employee categories, limits and policy terms, and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate employee details, documentation and declarations to ensure the coverage is accurately structured." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims from notification through documentation, medical coordination, insurer engagement and settlement." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews assess changes in workforce, remuneration and activities to keep the programme aligned." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Employers Liability?"
          description="Protect your workforce and strengthen your business against the financial impact of workplace injuries and employer liability."
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
