import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Private Client Group | Equirus Raghnall",
  description: "Tailored Private Client Group solutions.",
};

const faqs = [
  {
    question: "Who should consider Private Client Group?",
    answer:
      "Private Client Group can be tailored to the needs and risk profile of the insured.",
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
          label="Private Client Group"
          title={<>Private Wealth Deserves Personal Attention</>}
          description="Protecting significant wealth takes more than a collection of policies. Our Private Client Group combines bespoke insurance, specialist expertise and dedicated service for high-net-worth individuals and families."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Private Client Group"
          imagePosition="center center"
          features={[
            {
              title: "Bespoke Risk Management",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "High-Value Asset Protection",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Personal & Family Protection",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Specialised Liability Solutions",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Dedicated Private Client Service",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is Private Client Group?"
          title="Understanding Private Client Group"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Private Client Group overview"
          description="The Private Client Group (PCG) addresses the complex, evolving insurance needs of high-net-worth individuals and families. Multiple residences, luxury vehicles, fine art, jewellery, domestic staff, travel and liabilities create exposures standard insurance may not adequately address."
          coverageItems={[
            "Home & Property Protection",
            "Valuable Possessions",
            "Luxury Vehicle Protection",
            "Personal Liability Protection",
            "Lifestyle & Global Protection"
          ]}
          example="A high-net-worth family with a luxury residence, valuable jewellery and artwork, premium vehicles, and international travel requirements can have these exposures addressed through a comprehensive PCG insurance solution, subject to the applicable policy terms, limits, and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Lifestyle & Wealth"
          items={[
            {
              title: "High Net-Worth Solutions",
              description:
                "Bespoke insurance solutions designed around high-value assets, complex personal risks and specialised lifestyle requirements.",
            },
            {
              title: "Luxury Homes & Properties",
              description:
                "Protection solutions for high-value residences, holiday homes and other properties, including eligible buildings, contents and valuables.",
            },
            {
              title: "Fine Art, Jewellery & Collectibles",
              description:
                "Specialised protection for valuable artwork, jewellery, watches, antiques, collectibles and other prized possessions.",
            },
            {
              title: "Luxury & High-Value Vehicles",
              description:
                "Tailored solutions for premium automobiles, vintage and classic vehicles and other high-value personal assets.",
            },
            {
              title: "Risk Management",
              description:
                "Review of loss scenarios, controls, deductibles, and retained risk.",
            },
            {
              title: "Personal Liability",
              description:
                "Protection against covered personal liabilities that could otherwise expose significant personal assets and wealth.",
            },
            {
              title: "Travel & Global Lifestyle",
              description:
                "Solutions designed for individuals and families with frequent international travel, global residences or international lifestyle exposures.",
            },

            {
              title: "Personal Cyber Protection",
              description:
                "Protection against selected cyber, identity and digital risks affecting individuals and families in an increasingly connected world.",
            },
                  {
              title: "Family & Legacy Protection",
              description:
                "Insurance and risk solutions that support the long-term protection and continuity of family wealth.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Your Wealth. Your Lifestyle. Your Protection</>}
          description="Every client's assets, family and lifestyle differ. Our approach is built around your individual risk profile, not a standard template."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Private Client Group advisory support"
          imagePosition="center"
          steps={[
            {
              title: "Understand",
              description: "We begin by understanding your assets, lifestyle, family needs, locations and existing insurance.",
            },
            {
              title: "Assess",
              description:
                "Our specialists identify risks, coverage gaps, overlaps and areas where conventional insurance may fall short.",
            },
            {
              title: "Structure",
              description: "We design a coordinated insurance programme with appropriate limits, deductibles, extensions and specialised coverage.",
            },
            {
              title: "Protect",
              description:
                "We place the programme with suitable insurers and provide ongoing support across policy administration and servicing.",
            },
            {
              title: "Review",
              description:
                "Your wealth and lifestyle evolve. We periodically review your protection programme to reflect your changing requirements.",
            },
          ]}
        />
        <ServiceCta
          title={<>Protect What You've Built. <br/>Preserve What Matters</>}
          description="Your wealth represents more than financial assets. It reflects your achievements, your lifestyle and what you want to preserve for the future. Our Private Client Group brings together the expertise and solutions needed to protect the things that matter most."
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
