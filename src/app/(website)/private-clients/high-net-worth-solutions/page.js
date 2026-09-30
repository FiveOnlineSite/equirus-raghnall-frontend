import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "High Net-Worth Solutions | Equirus Raghnall",
  description: "Tailored High Net-Worth Solutions solutions.",
};

const faqs = [
  {
    question: "Who should consider High Net-Worth Solutions?",
    answer:
      "High Net-Worth Solutions can be tailored to the needs and risk profile of the insured.",
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
          label="High Net-Worth Solutions"
          title={
            <>
              Bespoke protection for <br />
              complex wealth
            </>
          }
          description="For high-net-worth individuals and families, protecting wealth goes beyond individual insurance policies. Our High Net-Worth Solutions bring together tailored risk protection for your lifestyle, assets, liabilities and evolving personal requirements."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="High Net-Worth Solutions"
          imagePosition="center center"
          features={[
            {
              title: "Bespoke Risk Protection",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "High-Value Asset Coverage",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Personal Liability Protection",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Lifestyle & Family Protection",
              icon: "/assets/services/directors-officers/management.svg",
            },
            {
              title: "Dedicated Private Client Service",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is High Net-Worth Solutions?"
          title="Understanding High Net-Worth Solutions"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="High Net-Worth Solutions overview"
          description="High Net-Worth Solutions are specialised insurance and risk management solutions designed for individuals and families with significant assets, complex financial interests and unique lifestyle exposures.
From luxury residences and high-value vehicles to art, jewellery, collectibles, domestic staff, personal liability and international travel, conventional insurance solutions may not always adequately address the breadth or complexity of these risks.
Our approach combines risk assessment, bespoke policy structuring and dedicated servicing to create a protection programme aligned with your wealth and lifestyle.
"
          // coverageItems={[
          //   "Covered financial losses",
          //   "Relevant policy extensions",
          //   "Eligible professional expenses",
          //   "Claims coordination and advocacy",
          // ]}
          // example="The policy can respond to an insured event subject to its agreed terms, conditions, limits, deductibles, and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Wealth & Lifestyle"
          items={[
            {
              title: "High-Value Residences",
              description:
                "Specialised protection for luxury homes, holiday homes and other high-value residential properties, including eligible contents and valuables.",
            },
            {
              title: "Fine Art, Jewellery & Collectibles",
              description:
                "Tailored protection for high-value jewellery, watches, artwork, antiques, collectibles and other valuable possessions, subject to valuation and policy terms.",
            },
            {
              title: "Luxury & High-Value Vehicles",
              description:
                "Protection solutions for premium and luxury automobiles, vintage vehicles and other high-value personal vehicles.",
            },
            {
              title: "Personal Liability",
              description:
                "Protection against covered personal legal liabilities arising from specified incidents, helping safeguard personal wealth and assets.",
            },
            {
              title: "Domestic Staff Protection",
              description:
                "Insurance solutions addressing eligible risks associated with domestic employees and household staff.",
            },
            {
              title: "Global Travel & Lifestyle",
              description:
                "Worldwide protection solutions for frequent international travellers and families with global lifestyle requirements.",
            },
               {
              title: "Cyber & Identity Protection",
              description:
                "Specialised protection against selected personal cyber, identity and digital risks affecting high-net-worth individuals and families.",
            },
               {
              title: "Family & Legacy Protection",
              description:
                "Risk solutions designed to support the protection and continuity of family wealth across generations.",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>A Holistic Approach to Private Client Risk</>}
          description="Your wealth is unique. Your insurance should be too."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="High Net-Worth Solutions advisory support"
          imagePosition="center"
          steps={[
            {
              title: " Private Client Risk Assessment",
              description: "We understand your assets, lifestyle, family structure, geographical exposure and existing insurance arrangements to identify potential protection gaps.",
            },
            {
              title: "Bespoke Risk Mapping",
              description:
                "We assess individual assets and liabilities collectively rather than treating each risk as an isolated insurance requirement.",
            },
            {
              title: "Tailored Policy Structuring",
              description: "Our specialists design a coordinated insurance programme with appropriate limits, deductibles, extensions and specialised covers based on your requirements.",
            },
            {
              title: "Dedicated Claims Advocacy",
              description:
                "In the event of a claim, our team provides personalised support and coordinates with insurers through the claims process.",
            },
            {
              title: "Ongoing Portfolio Review",
              description:
                "As your assets, lifestyle and financial interests evolve, we periodically review your insurance portfolio to ensure your protection keeps pace.",
            },
          ]}
        />
        <ServiceCta
          title={<>Protect what you've built. <br/>Preserve what matters.</>}
          description="Your wealth represents more than assets—it represents years of achievement, family aspirations and a way of life. Let us build a protection strategy designed around the things that matter most to you."
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
