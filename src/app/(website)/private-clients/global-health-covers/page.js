import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Global Health Covers | Equirus Raghnall",
  description: "Tailored Global Health Covers solutions.",
};

const faqs = [
  {
    question: "Who should consider Global Health Covers?",
    answer:
      "Global Health Covers can be tailored to the needs and risk profile of the insured.",
  },
  {
    question: "What does this policy cover?",
    answer:
      "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording.",
  },
  {
    question: "Can the policy be customised?",
    answer:
      "Yes. Coverage can be structured around specific requirements and risk exposures.",
  },
  {
    question: "How are suitable limits determined?",
    answer:
      "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits.",
  },
];

export default function Page() {
  return (
    <>
      <main>
        <ServiceHero
          label="Global Health Covers"
          title={
            <>
              Global Healthcare. Personal Protection. Wherever Life
              Takes You.
            </>
          }
          description="Access to quality healthcare should not be limited by geography. Global Health Covers provide comprehensive international health protection for individuals and families needing care across countries and continents."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Global Health Covers"
          imagePosition="center center"
          features={[
            {
              title: "Worldwide Medical Protection",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "International Hospitalisation Cover",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Global Cashless Healthcare Access",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Emergency Medical Assistance",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Flexible International Coverage",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Are Global Health Covers?"
          title="Understanding Global Health Covers"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Global Health Covers overview"
          description="Global Health Covers are international health insurance solutions for individuals and families with global healthcare needs, whether you travel frequently, live across countries or work internationally, providing financial protection against eligible healthcare expenses abroad."
          coverageItems={[
            "Hospitalisation Abroad",
            "Day-care Procedures ",
            "Pre- and Post-Hospitalisation",
            "Emergency Medical Treatment",
            "Medical Evacuation / Repatriation",
          ]}
          example="An employee of an Indian company is travelling to Singapore for business and suffers an unexpected medical emergency requiring hospitalisation. If the employee has a Global Health Cover that includes Singapore and overseas hospitalisation, the eligible medical expenses can be covered up to the applicable Sum Insured and subject to the policy terms."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Healthcare Protection Across Borders"
          items={[
            {
              title: "Worldwide Medical Coverage",
              description:
                "Provides protection against eligible medical expenses across covered geographical regions, subject to the policy terms and territorial limits.",
            },
            {
              title: "Inpatient & Hospitalisation",
              description:
                "Covers eligible hospitalisation and inpatient treatment expenses arising from covered illness, injury or medical conditions.",
            },
            {
              title: "Outpatient & Specialist Care",
              description:
                "Depending on the selected plan, coverage may extend to eligible consultations, diagnostic tests, specialist treatment and outpatient care.",
            },
            {
              title: "Emergency Medical Assistance",
              description:
                "Provides access to assistance services during covered medical emergencies while travelling or residing abroad.",
            },
            {
              title: "Medical Evacuation & Repatriation",
              description:
                "Depending on the policy, eligible emergency medical evacuation or repatriation expenses may be covered.",
            },
            {
              title: "Maternity & Family Healthcare",
              description:
                "Selected international health plans may offer maternity and family healthcare benefits, subject to applicable waiting periods, limits and policy conditions.",
            },
              {
              title: "Preventive & Wellness Benefits",
              description:
                "Depending on the plan, preventive healthcare, health screenings and wellness-related benefits may be available.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protection Designed for a Global Lifestyle</>}
          description="Our specialists structure cover around your needs rather than relying on a standard policy."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Global Health Covers advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Global Healthcare Needs Assessment",
              description: "We understand your travel patterns, residence countries, family needs, preferred healthcare locations and existing health cover.",
            },
            {
              title: "International Plan Comparison",
              description:
                "We evaluate global health plans on geographical coverage, medical limits, deductibles, networks and benefits.",
            },
            {
              title: "Coverage Review",
              description: "Our specialists help structure coverage around your family, lifestyle and international healthcare requirements.",
            },
            {
              title: "Dedicated Claims Assistance",
              description:
                "In the event of a covered medical claim, our team assists with the claims process and coordinates with the insurer as required.",
            },
            {
              title: "Annual Global Health Review",
              description:
                "We periodically review your international health protection to reflect changes in your travel, residence, family and healthcare needs.",
            },
          ]}
        />
        <ServiceCta
          title={<>Healthcare Without Borders. <br/>Protection Without Compromise.</>}
          description="Protect yourself and your family with global health coverage designed around the way you live, travel and access healthcare worldwide."
          primaryAction={{ label: "Get a Quote", href: "/contact-us" }}
          secondaryAction={{
            label: "Download Brochure",
            href: "/assets/services/directors-officers/brochure.pdf",
            download: true,
          }}
        />
        <FaqSection
          eyebrow="Frequently Asked Questions"
          title="Answers to Common Insurance Queries"
          items={faqs}
          defaultOpen={0}
        />
      </main>
    </>
  );
}
