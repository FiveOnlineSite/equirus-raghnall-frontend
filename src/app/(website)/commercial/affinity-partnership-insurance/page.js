import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Affinity & Partnership Insurance | Equirus Raghnall",
  description:
    "Create tailored affinity and partnership insurance programmes for your customers, members, employees, or digital platform users.",
};

const faqs = [
  {
    question: "What is an affinity insurance programme?",
    answer:
      "An affinity insurance programme offers relevant insurance products to a defined community through an organisation they already know and trust, such as an association, employer, retailer, lender, or digital platform.",
  },
  {
    question: "Which organisations can offer affinity insurance?",
    answer:
      "Banks, fintechs, e-commerce businesses, professional associations, employers, travel companies, retailers, and other organisations with an engaged customer or member base can explore an affinity programme.",
  },
  {
    question: "Can the cover be customised for our audience?",
    answer:
      "Yes. Benefits, limits, eligibility, pricing, enrolment journeys, and communication can be structured around your audience, distribution model, and applicable regulatory requirements.",
  },
  {
    question: "Can insurance be embedded into our existing customer journey?",
    answer:
      "Depending on the programme and insurer capabilities, cover can be integrated into an existing purchase, membership, subscription, or digital onboarding journey for a simpler customer experience.",
  },
  {
    question: "How are claims supported?",
    answer:
      "We help establish clear claims processes and service standards, coordinate with the insurer and service partners, and provide programme-level claims oversight and advocacy.",
  },
];

export default function AffinityPartnershipInsurancePage() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Affinity & Partnership Insurance"
          title={
            <>
              Protection That Fits
              <br />
              Every Partnership
            </>
          }
          description="Create relevant, accessible insurance experiences for your customers, members, employees, or platform users."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Business partners collaborating on an affinity insurance programme"
          imagePosition="center center"
          features={[
            {
              title: "Tailored Programmes",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Seamless Distribution",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Claims Support",
              icon: "/assets/services/directors-officers/legal.svg",
            },
          ]}
        />

        <ServiceOverview
          label="What Is Affinity & Partnership Insurance?"
          title="Insurance Designed Around Your Community"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Team designing a partnership insurance solution"
          description="Affinity & Partnership Insurance brings tailored protection to a defined group through a trusted brand or platform. We work with partners to understand their audience, design relevant benefits, identify suitable insurers, and create a programme that complements the existing customer journey."
          coverageItems={[
            "Customised products and benefits",
            "Group and embedded insurance models",
            "Digital enrolment and policy servicing",
            "Claims coordination and programme oversight",
          ]}
          example="A digital platform can offer relevant protection within its existing customer journey, giving users convenient access to cover while strengthening the platform's value proposition."
        />

        <ServiceCoverageGrid
          label="Programme Capabilities"
          title="End-To-End Partnership Solutions"
          items={[
            {
              title: "Programme Design",
              description:
                "Audience insights, risk assessment, benefit design, limits, and eligibility structured around your commercial objectives.",
            },
            {
              title: "Product & Insurer Selection",
              description:
                "Access to suitable insurance products and insurer partners based on the programme's risk and service requirements.",
            },
            {
              title: "Embedded Distribution",
              description:
                "Insurance journeys designed to fit naturally within a purchase, membership, subscription, or onboarding experience.",
            },
            {
              title: "Customer Experience",
              description:
                "Clear communication, simple enrolment, and responsive servicing that reflect and protect your brand experience.",
            },
            {
              title: "Governance & Compliance",
              description:
                "Programme structures and operating processes aligned with insurer requirements and the applicable regulatory framework.",
            },
            {
              title: "Claims & Performance",
              description:
                "Claims advocacy, service monitoring, and programme insights to support customers and improve performance over time.",
            },
          ]}
        />

        <ServiceAdvisorySupport
          label="Partnership Approach"
          title={<>From Opportunity To Ongoing Programme</>}
          description="We bring together product, placement, distribution, and service expertise to build a programme that works for you and your audience."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Advisors and partners reviewing an affinity insurance programme"
          imagePosition="center"
          steps={[
            {
              title: "Audience & Opportunity Assessment",
              description:
                "We study your audience, customer journey, priorities, and commercial goals to define the opportunity.",
            },
            {
              title: "Solution Design",
              description:
                "We shape the product, benefits, eligibility, pricing approach, and service model around your needs.",
            },
            {
              title: "Insurer Placement & Implementation",
              description:
                "We identify suitable capacity and coordinate the operating, technology, and launch requirements.",
            },
            {
              title: "Customer & Claims Support",
              description:
                "We help establish clear service pathways and advocate for customers throughout the claims process.",
            },
            {
              title: "Performance Review & Optimisation",
              description:
                "We review programme outcomes and refine coverage, servicing, and engagement as your partnership evolves.",
            },
          ]}
        />

        <ServiceCta
          title="Ready To Build An Insurance Programme Together?"
          description="Speak with our specialists about a tailored affinity or embedded insurance solution for your organisation and audience."
          primaryAction={{ label: "Get a Quote", href: "/contact-us" }}
          secondaryAction={{ label: "Download Brochure", href: "/contact-us" }}
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
