import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Group Term Life Insurance | Equirus Raghnall",
  description: "Tailored Group Term Life Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Group Term Life Insurance?", answer: "Group Term Life Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Group Term Life Insurance"
          title={<>Protect Your People. Secure Their Families.</>}
          description="Group Term Life Insurance provides employer-sponsored life cover for your employees, giving their families financial protection and strengthening your employee benefits."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Group Term Life Insurance"
          imagePosition="center center"
          features={[
            { title: "Employee Life Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Financial Security for Families", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Employer-Sponsored Benefit", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Sum Insured Options", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Customised Employee Coverage", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Group Term Life Insurance?"
          title="Understanding Group Term Life Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Group Term Life Insurance overview"
          description="Group Term Life Insurance provides employer-sponsored life cover to employees under a single policy, paying the life benefit to the designated beneficiary if a covered employee dies during the policy period."
          coverageItems={["Life cover for eligible employees", "Death benefit during the policy period", "Financial protection for employees' families", "Flexible sum insured structures","Coverage for eligible employee categories"]}
          example="If a covered employee passes away during the policy period, the applicable sum insured can be paid to the designated beneficiary in accordance with the policy terms, helping provide financial support to the employee's family."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Employee Life Cover", description: "Provides life cover to eligible employees under the group policy, with the benefit payable on covered death during the policy period." },
            { title: "Financial Protection for Families", description: "The death benefit supports the family of a covered employee with household expenses and other financial commitments." },
            { title: "Employer-Sponsored Life Benefits", description: "Employers can offer life insurance as an employee benefit, with cover structured around workforce requirements and the selected policy design." },
            { title: "Flexible Sum Insured Options", description: "Cover can use fixed, salary-linked, designation-based or other eligible benefit structures, depending on the insurer and policy terms." },
            { title: "Additional Protection Benefits", description: "Where available and selected, additional benefits or riders may enhance employee protection, subject to terms and conditions." },
            { title: "Employee & Family Financial Security", description: "Group Term Life Insurance can be part of an employee welfare programme, adding financial protection for employees' families." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Employees Before Risk Finds You</>}
          description="Life cover is key to benefits. We structure Group Term Life Insurance around your workforce and budget."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Group Term Life Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Workforce Assessment & Needs Analysis", description: "We understand your workforce, salary bands and existing benefits to identify suitable life insurance solutions." },
            { title: "Plan Design & Placement", description: "Our specialists structure eligibility, sum insured, benefit design, and optional enhancements and negotiate suitable terms with insurers." },
            { title: "Policy Documentation & Employee Support", description: "We coordinate employee data, enrolment, policy documentation and benefit communication to support smooth implementation." },
            { title: "Dedicated Claims Assistance", description: "Our team supports the organisation and beneficiaries through claims, including documentation, insurer coordination and assistance." },
            { title: "Annual Policy Review & Renewal", description: "We review workforce changes, benefit structures and claims experience to keep the programme aligned with your needs." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Group Term Life Insurance?"
          description="Protect your employees with life insurance designed to provide meaningful financial security for their families."
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
