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
             Build Connections. <br/> Deliver Protection.
            </>
          }
          description="Create relevant, accessible insurance experiences for your customers, members, employees, or platform users."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Business partners collaborating on an affinity insurance programme"
          imagePosition="center center"
          features={[
            {
              title: "Insurance Programmes",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Embedded & Affinity Insurance Solutions",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Partner-Led Distribution Models",
              icon: "/assets/services/directors-officers/legal.svg",
            },
             {
              title: "Scalable Customer Protection",
              icon: "/assets/services/directors-officers/legal.svg",
            },
             {
              title: "Seamless Digital & Service Integration",
              icon: "/assets/services/directors-officers/legal.svg",
            },
          ]}
        />

        <ServiceOverview
          label="What is Affinity & Partnership?"
          title="Insurance Designed Around Your Community"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Team designing a partnership insurance solution"
          description="Affinity & Partnership solutions enable organisations to offer relevant insurance to their customers, members, employees or communities. We work with businesses, institutions and platforms to design programmes aligned with their customer proposition, distribution model and risk requirements."
          coverageItems={[
            "Customer-focused insurance programmes",
            "Employee and member benefit solutions",
            "Embedded insurance propositions",
            "Co-branded and affinity programmes",
            "Digital insurance distribution",
          ]}
          example="A digital platform or financial institution can integrate a relevant insurance product into its customer journey, allowing eligible customers to access protection as part of the overall service proposition."
        />

        <ServiceCoverageGrid
          label="Programme Capabilities"
          title="Comprehensive Partnership Solutions"
          items={[
            {
              title: "Affinity Insurance",
              description:
                "Customised insurance programmes designed around the needs of a defined customer, member or employee community.",
            },
            {
              title: "Embedded Insurance",
              description:
                "Insurance solutions integrated into existing products, platforms or customer journeys to provide relevant protection at the point of need.",
            },
            {
              title: "Corporate Partnerships",
              description:
                "Insurance programmes developed with corporates, institutions and partners to meet specific customer or employee needs.",
            },
            {
              title: "Employee & Member Benefits",
              description:
                "Tailored insurance benefits that organisations can extend to employees, members or associated communities as part of their broader benefits proposition.",
            },
            {
              title: "Digital Distribution Solutions",
              description:
                "Technology-enabled distribution models that simplify customer engagement, policy issuance, servicing and claims support.",
            },
               {
              title: "Co-Branded Insurance Solutions",
              description:
                "Insurance propositions designed around the partner's brand and customer experience while maintaining appropriate insurance and regulatory frameworks.",
            },
               {
              title: "Customised Product & Digital Distribution Solutions",
              description:
                "Bespoke insurance structures developed around the partner's customer profile, business model, distribution requirements and risk exposures.",
            },
          ]}
        />

        <ServiceAdvisorySupport
          label="Partnership Approach"
          title={<>Build Partnerships That Create Lasting Value</>}
          description="We combine insurance expertise, product knowledge and distribution to build partnership models that work for businesses and their customers."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Advisors and partners reviewing an affinity insurance programme"
          imagePosition="center"
          steps={[
            {
              title: "Partnership & Requirement Assessment",
              description:
                "We understand your customer base, business model, distribution ecosystem and strategic objectives.",
            },
            {
              title: "Product & Programme Design",
              description:
                "Our specialists structure relevant insurance products, benefits, coverage limits and programme features around your requirements.",
            },
            {
              title: "Distribution & Implementation",
              description:
                "We support the integration and implementation of the insurance programme across the agreed customer or partner journey.",
            },
            {
              title: "Ongoing Servicing & Claims Support",
              description:
                "Our team provides ongoing policy servicing, customer support and claims assistance throughout the programme lifecycle.",
            },
            {
              title: "Programme Review & Optimisation",
              description:
                "We periodically review programme performance, customer needs and changing risks to identify opportunities for refinement.",
            },
          ]}
        />

        <ServiceCta
          title={<>Ready To Build An <br/> Insurance Programme Together?</>}
          description="Create insurance propositions that strengthen partnerships and deliver meaningful protection to your customers."
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
