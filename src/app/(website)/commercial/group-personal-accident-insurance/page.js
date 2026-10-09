import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Group Personal Accident | Equirus Raghnall",
  description: "Tailored Group Personal Accident solutions.",
};

const faqs = [
  { question: "Who should consider Group Personal Accident?", answer: "Group Personal Accident can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Group Personal Accident"
          title={<>Protect Your People. Support Them When It Matters.</>}
          description="Group Personal Accident Insurance protects your employees against accidental injury, disability and death, providing financial support for them and their families when the unexpected happens."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Group Personal Accident"
          imagePosition="center center"
          features={[
            { title: "Accidental Death Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Disability Benefit Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Accidental Medical Expense Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Employer-Sponsored Employee Cover", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Employee Benefit Structures", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Group Personal Accident?"
          title="Understanding Group Personal Accident"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Group Personal Accident overview"
          description="Group Personal Accident (GPA) Insurance is an employer-sponsored solution protecting employees against accidental injuries, with benefits for accidental death, permanent or temporary disability and eligible accident-related expenses, depending on policy terms."
          coverageItems={["Accidental death", "Permanent total disability", "Permanent partial disability", "Temporary total disability, where selected","Accidental medical expenses, where covered"]}
          example="If a covered employee suffers a permanent disability due to an accident, the policy can provide the applicable benefit based on the nature and extent of the disability, subject to the policy terms, benefit schedule, and applicable conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Accidental Death Benefit", description: "Provides a defined benefit on the accidental death of a covered employee during the policy period, subject to policy terms." },
            { title: "Permanent Total Disability", description: "Provides a benefit where an insured employee suffers a qualifying permanent total disability due to an accident, as defined under the policy." },
            { title: "Permanent Partial Disability", description: "Provides benefits for specified permanent partial disabilities from an accident, generally determined by the policy's benefit schedule." },
            { title: "Temporary Total Disability", description: "Where selected, provides a periodic benefit for eligible temporary total disability from an accident, subject to waiting period and limits." },
            { title: "Accidental Medical Expenses", description: "Where included, provides coverage for eligible medical expenses arising from accidental bodily injury, subject to the selected limit and policy terms." },
            { title: "Additional Accident Benefits", description: "Depending on the policy, benefits like ambulance expenses, transport of mortal remains or education support may be considered, subject to terms." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Employees Before Risk Finds You</>}
          description="Accidents can strain employees financially. A well-structured GPA programme adds financial protection to your benefits framework."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Group Personal Accident advisory support"
          imagePosition="center"
          steps={[
            { title: "Workforce Assessment & Needs Analysis", description: "We understand your workforce, work environment, existing benefits and accident-related exposures." },
            { title: "Plan Design & Placement", description: "Our specialists structure suitable benefit amounts, employee categories and optional covers, and negotiate solutions with insurers." },
            { title: "Policy Documentation & Employee Support", description: "We coordinate employee data, policy documentation, enrolment and benefit communication to support smooth implementation." },
            { title: "Dedicated Claims Assistance", description: "Our team supports employees, the organisation and beneficiaries through claims, including documentation and insurer coordination." },
            { title: "Annual Policy Review & Renewal", description: "We review workforce changes, benefit utilisation and claims to keep the programme aligned with needs." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Group Personal Accident?"
          description="Protect your employees with accident insurance designed around their needs and your organisation's benefit objectives."
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
