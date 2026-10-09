import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Terrorism & Political Violence  | Equirus Raghnall",
  description: "Tailored Terrorism & Political Violence  solutions.",
};

const faqs = [
  { question: "Who should consider Terrorism & Political Violence ?", answer: "Terrorism & Political Violence  can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      <main>
        <ServiceHero
          label="Terrorism & Political Violence "
          title={<>Protect Against Terrorism <br />And Political Violence</>}
          description="Terrorism & Political Violence Insurance protects your property, people and operations against losses from terrorism, riots, civil unrest and political violence."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Terrorism & Political Violence "
          imagePosition="center center"
          features={[
            { title: "Catastrophe Risk Transfer", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Capacity Enhancement", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Portfolio Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Terrorism & Political Violence ?"
          title="Understanding Terrorism & Political Violence "
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Terrorism & Political Violence  overview"
          description="Terrorism & Political Violence Reinsurance protects insurers against defined losses from terrorism and political violence risks, helping manage severe, low-frequency events, accumulation exposures and portfolio volatility while maintaining underwriting capacity."
          coverageItems={["Terrorism", "Political Violence", "Strikes, Riots & Civil Commotion", "Insurrection & Rebellion","Civil War"]}
          example="If a major insured property suffers covered damage following a terrorism or political violence event, the reinsurance programme may respond to the insurer's covered loss above the agreed retention, subject to the reinsurance terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection Against Terrorism & Political Violence"
          items={[
            { title: "Terrorism Reinsurance", description: "Provides reinsurance protection for defined terrorism-related losses within an insurer's portfolio." },
            { title: "Political Violence Reinsurance", description: "Supports insurers against specified losses arising from political violence events." },
            { title: "Strikes, Riots & Civil Commotion", description: "Provides capacity for defined losses arising from strikes, riots, and civil commotion." },
            { title: "Political Violence Business Interruption", description: "Provides reinsurance protection for defined business interruption exposures arising from covered political violence events." },
            { title: "Catastrophe Excess of Loss", description: "Protects against accumulated losses from a major terrorism or political violence event, subject to attachment point and limits." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Against Terrorism & Political Violence Risks</>}
          description="We understand your portfolio, geographical exposure, accumulation and risk appetite to structure appropriate reinsurance protection."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Terrorism & Political Violence  advisory support"
          imagePosition="center"
          steps={[
            { title: "Portfolio Risk Assessment", description: "We analyse geographical concentrations, insured values, exposure accumulation, loss experience and portfolio characteristics." },
            { title: "Reinsurance Structure & Design", description: "Our specialists help structure appropriate retentions, limits, layers, attachment points, and event definitions." },
            { title: "Reinsurer Placement", description: "We coordinate with suitable reinsurers to secure capacity aligned with your portfolio and risk requirements." },
            { title: "Treaty & Facultative Support", description: "Our specialists support negotiations, documentation and reinsurer coordination throughout the placement process." },
            { title: "Annual Portfolio Review & Renewal", description: "Regular reviews keep your programme aligned with changes in exposure, accumulation, portfolio growth and capacity." },
          ]}
        />
        <ServiceCta
          title={<>Manage Your Terrorism & <br/> Political Violence Exposure</>}
          description="We help structure reinsurance solutions tailored to your terrorism and political violence exposures, portfolio requirements, and risk appetite."
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
