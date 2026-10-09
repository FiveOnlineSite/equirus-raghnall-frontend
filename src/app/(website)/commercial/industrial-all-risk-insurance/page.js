import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Industrial All Risk (IAR) | Equirus Raghnall",
  description: "Tailored Industrial All Risk (IAR) solutions.",
};

const faqs = [
  {
    question: "Who should consider Industrial All Risk (IAR)?",
    answer:
      "Industrial All Risk (IAR) can be tailored to the needs and risk profile of the insured.",
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
          label="Industrial All Risk (IAR)"
          title={
            <>Broader Protection For Assets. Stronger Security For Business.</>
          }
          description="Comprehensive insurance solutions that safeguard your property, equipment and operations against unexpected losses. Tailored to your business, they help you stay secure and keep operations running smoothly."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Industrial All Risk (IAR)"
          imagePosition="center center"
          features={[
            {
              title: "Wider Asset Protection ",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Business Continuity Protection ",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Comprehensive Risk Coverage ",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Protection for Critical Assets  ",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Tailored Insurance Solutions  ",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is Industrial All Risk (IAR)?"
          title="Understanding Industrial All Risk (IAR)"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Industrial All Risk (IAR) overview"
          description="Industrial All Risk (IAR) Insurance provides broad protection for large industrial units and manufacturing facilities against accidental physical loss or damage, except specified exclusions, and can also cover business interruption arising from an insured loss."
          coverageItems={[
            "Protection Against Physical Loss or Damage",
            "Protection for Business Assets",
            "Protection Against Business Disruption",
            "Protection for Industrial Risks",
            "Flexible & Structured Protection",
          ]}
          example="A manufacturing facility suffers accidental damage to its plant and machinery, resulting in repair costs and temporary business interruption. An appropriately structured IAR policy can provide protection for the covered physical damage and eligible financial losses, subject to policy terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            {
              title: "Material Damage Protection",
              description:
                "Protects insured physical assets against accidental loss or damage, including buildings, plant & machinery, fixtures, stocks and other declared property.",
              knowMore:
                "The Material Damage section provides protection against accidental physical loss or damage to insured property. Depending on the policy structure, this may include buildings, plant & machinery, furniture, fixtures, electrical installations, stocks and other declared assets. Fire and Allied Perils form part of the Material Damage protection rather than being treated as a separate primary section. Property may be insured on an appropriate valuation basis, such as reinstatement value for buildings and machinery and market value for stocks, as applicable.",
            },
            {
              title: "Machinery Breakdown Protection",
              description:
                "Provides protection against sudden and unforeseen physical loss or damage to insured machinery, subject to the policy terms.",
              knowMore:
                "Machinery Breakdown protection addresses sudden and unforeseen physical loss or damage to insured machinery arising from covered causes. It is particularly relevant for businesses where production depends heavily on specialised or critical machinery.",
            },
            {
              title: "Fire Loss of Profit (FLOP)",
              description:
                "Provides protection against eligible financial losses arising from interruption of business following covered material damage caused by insured fire-related events.",
              knowMore:
                "FLOP addresses the financial consequences of interruption following covered material damage caused by insured fire-related events. Depending on the policy structure, the cover may respond to loss of gross profit, continuing expenses and reasonable Increased Cost of Working during the applicable indemnity period.",
            },
            {
              title: "Machinery Loss of Profit (MLOP)",
              description:
                "Where opted for, provides protection against eligible financial consequences arising from interruption caused by covered machinery breakdown.",
              knowMore:
                "MLOP, where specifically opted for, addresses the financial consequences of business interruption following covered machinery breakdown. It can provide protection for eligible loss of profit, continuing expenses and Increased Cost of Working during the applicable indemnity period.",
            },
            {
              title: "Business Interruption Protection",
              description:
                "Protects the business against eligible financial losses from interruption after insured physical damage, subject to policy terms, sum insured and indemnity period.",
              knowMore:
                "Business Interruption protection addresses eligible financial losses arising when insured physical damage interrupts normal business operations. The extent of protection depends on the selected coverage basis, sum insured, indemnity period, applicable deductibles, conditions and exclusions.",
            },
            {
              title: "Transit Risk Within Premises",
              description:
                "Can extend protection to eligible movement of materials, stock or goods within the insured industrial premises, subject to the policy terms.",
              knowMore:
                "IAR may provide protection for eligible movement or transit of materials, stock or goods within the insured industrial compound, subject to the specific policy wording, limits and conditions.",
            },
            {
              title: "Under-Insurance Waiver",
              description:
                "Where applicable, the policy may provide an under-insurance waiver subject to the specified percentage, conditions and policy wording.",
              knowMore:
                "Where an under-insurance waiver is provided, the policy may waive application of the average clause up to the specified percentage, subject to compliance with the applicable conditions and policy terms.",
            },
            {
              title: "Additional Risk Extensions",
              description:
                "The policy can be enhanced through suitable extensions based on the business's specific risk profile and insurance requirements.",
              knowMore: {
                description:
                  "The IAR programme can be enhanced through suitable extensions based on the insured's requirements. Common extensions may include:",
                points: [
                  "Terrorism Damage",
                  "Architect's & Surveyor's Fees",
                  "Debris Removal",
                  "Omission to Insure",
                  "Escalation",
                ],
                  closingDescription: "and other extensions available under the applicable policy wording."
              },
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Industrial Assets Before Risk Finds You</>}
          description="Our specialists structure cover around your needs rather than relying on a standard policy."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Industrial All Risk (IAR) advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Risk Assessment & Needs Analysis",
              description:
                "We understand your operations, locations, asset values, processes and key risk exposures.",
            },
            {
              title: "Policy Design & Placement",
              description:
                "We structure the IAR programme based on your business requirements and approach suitable insurers for competitive terms.",
            },
            {
              title: "Policy Documentation & Support",
              description:
                "We coordinate policy documentation, schedules, endorsements and other required insurance documentation.",
            },
            {
              title: "Claims Advocacy",
              description:
                "We support you through claims, coordinating with insurers, surveyors and other stakeholders for efficient handling.",
            },
            {
              title: "Annual Policy Review & Renewal",
              description:
                "We review changes in assets, operations and risk exposures to keep your insurance programme aligned with your business.",
            },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Industrial All Risk (IAR)?"
          description="Protect your industrial assets and strengthen your business continuity with a comprehensive Industrial All Risk insurance solution."
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
