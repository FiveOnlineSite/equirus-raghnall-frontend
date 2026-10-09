import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Property All Risk (PAR) | Equirus Raghnall",
  description: "Tailored Property All Risk (PAR) solutions.",
};

const faqs = [
  {
    question: "Who should consider Property All Risk (PAR)?",
    answer:
      "Property All Risk (PAR) can be tailored to the needs and risk profile of the insured.",
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
          label="Property All Risk (PAR)"
          title={<>Broader Property Protection. Stronger Business Security.</>}
          description="Comprehensive property insurance that safeguards your buildings, machinery, stock and other assets against accidental loss or damage. Designed to help your business recover quickly and keep operations secure."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Property All Risk (PAR)"
          imagePosition="center center"
          features={[
            {
              title: "Wide-Ranging All Risk Protection",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Comprehensive Asset Protection",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Flexible Policy Structure",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Optional Business Protection",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Differentiated Risk Solutions",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is Property All Risk (PAR)?"
          title="Understanding Property All Risk (PAR)"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Property All Risk (PAR) overview"
          description="Property All Risk (PAR) Insurance protects buildings, machinery, inventory and equipment against accidental loss or damage, except specified exclusions, with optional cover for business interruption, machinery breakdown and loss of rent."
          coverageItems={[
            "Protection for Physical Assets",
            "Buildings & Structures",
            "Machinery & Equipment",
            "Contents & Stock",
            "Protection Against Unforeseen Events",
          ]}
          example="A factory suffers sudden accidental damage to its machinery and inventory, resulting in significant repair and replacement costs. A suitably structured PAR policy can provide protection for the covered physical damage, subject to the applicable policy terms and conditions"
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            {
              title: "Property Damage Protection",
              description:
                "The mandatory section protects insured property against accidental physical loss, destruction or damage, subject to policy terms and exclusions.",
              knowMore: {
                description:
                  "Property Damage is the mandatory section of the PAR policy. It provides protection against physical loss, destruction or damage to insured property resulting from accidental causes, unless specifically excluded. Eligible property may include:",
                points: [
                  "Buildings and structures",
                  "Plant & machinery",
                  "Machinery and equipment",
                  "Furniture, fixtures and fittings",
                  "Stock and inventory",
                  "Other declared business property",
                ],
              },
            },
            {
              title: "Business Interruption Protection",
              description:
                "An optional section designed to protect against eligible financial losses arising from interruption following covered property damage.",
              knowMore: {
                description:
                  "Business Interruption is an optional section designed to address eligible financial consequences when insured physical damage results in interruption of business operations. Depending on the coverage selected, this may include:",
                points: [
                  "Fire Loss of Profit (FLOP)",
                  "Machinery Loss of Profit (MLOP)",
                  "Loss of gross profit",
                  "Continuing expenses",
                  "Increased Cost of Working",
                ],
                closingDescription:
                  "The extent of protection depends on the selected sum insured, indemnity period, coverage basis, deductibles and policy conditions.",
              },
            },
            {
              title: "Fire Loss of Profit (FLOP)",
              description:
                "Where opted for, protects against eligible loss of profit and other covered financial consequences following interruption from insured property damage.",
              knowMore: "",
            },
            {
              title: "Machinery Loss of Profit (MLOP)",
              description:
                "Where opted for, provides protection against eligible financial consequences arising from interruption following covered machinery breakdown.",
              knowMore: "",
            },
            {
              title: "Machinery Breakdown",
              description:
                "An optional section providing protection against sudden and unforeseen physical loss or damage to insured machinery, subject to the applicable terms.",
              knowMore: "",
            },
            {
              title: "Loss of Rent",
              description:
                "Where opted for, protection may be provided for eligible loss of rental income resulting from covered damage to insured property.",
              knowMore: "",
            },
            {
              title: "Additional Cover Options",
              description:
                "The policy structure can be enhanced through suitable add-ons and extensions based on the insured's requirements and risk profile.",
              knowMore: {
                description:
                  "Additional sections can be selected depending on the nature of the business and its risk exposures. These may include:",
                points: [
                  "Machinery Breakdown",
                  "Loss of Rent",
                  "All-Risk Based Wide-Ranging Protection",
                  "Internationally Accepted Wording",
                  "Flexible Policy Structure",
                  "Geographical Limits",
                  "Valuation & Sum Insured",
                  "Customised Add-On Propositions",
                ],
              },
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Property Before Risk Finds You</>}
          description="Our specialists structure cover around your needs rather than relying on a standard policy."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Property All Risk (PAR) advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Risk Assessment & Needs Analysis",
              description:
                "We understand your assets, locations, operations and key property exposures.",
            },
            {
              title: "Policy Design & Placement",
              description:
                "We structure the PAR programme around your requirements and approach suitable insurers for competitive terms.",
            },
            {
              title: "Policy Documentation & Support",
              description:
                "We coordinate policy documentation, schedules, endorsements and other required documentation.",
            },
            {
              title: "Claims Advocacy",
              description:
                "We support you through the claims process and coordinate with insurers, surveyors and other stakeholders.",
            },
            {
              title: "Annual Policy Review & Renewal",
              description:
                "We review changes in assets, locations and operations to keep your insurance programme aligned with your evolving requirements.",
            },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Property All Risk (PAR)?"
          description="Protect your property with coverage designed around your business needs."
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
