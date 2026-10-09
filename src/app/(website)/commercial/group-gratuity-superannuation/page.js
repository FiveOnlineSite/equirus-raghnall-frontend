import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Group Gratuity & Superannuation | Equirus Raghnall",
  description: "Tailored Group Gratuity & Superannuation solutions.",
};

const faqs = [
  { question: "Who should consider Group Gratuity & Superannuation?", answer: "Group Gratuity & Superannuation can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Group Gratuity & Superannuation"
          title={<>Plan For Your People. <br/>Secure Their Future.</>}
          description="Group Gratuity & Superannuation solutions help employers manage gratuity obligations and create retirement benefits, giving employees long-term financial security and giving your organisation peace of mind."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Group Gratuity & Superannuation"
          imagePosition="center center"
          features={[
            { title: "Employee Gratuity Funding Solutions", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Structured Retirement Benefits", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Long-Term Employee Financial Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Benefit Structures", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Employer-Sponsored Employee Benefits", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Group Gratuity & Superannuation?"
          title="Understanding Group Gratuity & Superannuation"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Group Gratuity & Superannuation overview"
          description="Group Gratuity & Superannuation solutions help organisations fund long-term employee benefits, with gratuity solutions covering eligible gratuity liabilities and superannuation solutions creating structured retirement benefits, subject to applicable scheme terms and regulations."
          coverageItems={["Funding support for eligible gratuity liabilities", "Structured retirement benefit solutions", "Employer-sponsored employee benefit programmes", "Long-term financial planning for employees","Flexible contribution and benefit structures"]}
          example="An organisation may establish a structured gratuity or superannuation arrangement to help plan for future employee benefit obligations and provide eligible employees with financial benefits in accordance with the applicable scheme, policy terms, and regulations."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Group Gratuity Solutions", description: "Helps employers structure funding for eligible gratuity liabilities, supporting the organisation in planning for future employee benefit obligations." },
            { title: "Gratuity Funding", description: "Provides a structured way to set aside funds for eligible gratuity obligations, subject to the arrangement, applicable rules and scheme structure." },
            { title: "Superannuation Benefits", description: "Supports employer-sponsored retirement benefits for eligible employees after retirement or other qualifying events, per scheme rules." },
            { title: "Retirement Corpus Creation", description: "Helps build a pool of funds for retirement benefits through employer contributions and the applicable investment or insurance arrangement." },
            { title: "Employee Retirement Benefits", description: "Gives employees access to structured long-term financial benefits as part of the organisation's employee welfare and retirement programme." },
            { title: "Flexible Benefit Structures", description: "Benefit structures can be designed around workforce demographics, employee categories and long-term objectives, subject to regulations." },
            { title: "Additional Employee Benefit Solutions", description: "Gratuity and superannuation can form part of a broader employee benefits strategy alongside life, health and accident solutions." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Employees Before Risk Finds You</>}
          description="Long-term employee benefits need careful planning and review. We help organisations structure solutions around their workforce and objectives."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Group Gratuity & Superannuation advisory support"
          imagePosition="center"
          steps={[
            { title: "Workforce & Benefit Assessment", description: "We understand your employee demographics, existing benefits, gratuity obligations and retirement objectives." },
            { title: "Scheme Design & Placement", description: "Our specialists help structure suitable benefit and funding arrangements and coordinate placement with insurers or providers." },
            { title: "Policy & Scheme Documentation", description: "We coordinate documentation, employee data, scheme details and implementation requirements to support smooth administration." },
            { title: "Dedicated Support & Claims Assistance", description: "Our team supports the organisation and employees with benefit queries, documentation and coordination throughout the scheme." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews assess workforce changes, funding needs and employee requirements to keep the programme aligned." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Group Gratuity & Superannuation?"
          description="Build a structured employee benefit programme designed to support gratuity obligations and long-term retirement needs."
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
