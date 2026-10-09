import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Aviation Insurance | Equirus Raghnall",
  description: "Tailored Aviation Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Aviation Insurance?", answer: "Aviation Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      <main>
        <ServiceHero
          label="Aviation Insurance"
          title={<>Protect Your Aircraft<br/>Secure Every Flight</>}
          description="Aviation Insurance protects your aircraft against accidental loss or damage and covers your legal liability for third-party injury or property damage, tailored to your fleet and operations."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Aviation Insurance"
          imagePosition="center center"
          features={[
            { title: "Aircraft Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Liability Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Risk Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Aviation Insurance?"
          title="Understanding Aviation Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Aviation Insurance overview"
          description="Aviation Insurance protects aircraft owners, operators and aviation businesses against financial losses from aviation risks, including damage to aircraft, passenger liability and third-party claims, subject to policy terms and conditions."
          coverageItems={["Aircraft Hull Damage", "Third-Party Liability", "Passenger Liability", "Ground Risks","Airport & Hangar Liability"]}
          example="If an insured aircraft is damaged in an accident, Aviation Insurance may cover the repair costs or the applicable loss, subject to the policy terms, conditions, and deductibles."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection Across Aviation Risks"
          items={[
            { title: "Aircraft Hull", description: "Protects the aircraft against physical loss or damage arising from covered aviation risks." },
            { title: "Third-Party Liability", description: "Covers legal liability for bodily injury or property damage caused to third parties arising from aviation operations." },
            { title: "Passenger Liability", description: "Provides protection against covered liabilities arising from injury or loss suffered by passengers." },
            { title: "Ground Risks", description: "Provides protection against specified risks affecting the aircraft while it is on the ground." },
            { title: "Airport & Hangar Liability", description: "Protects against specified liabilities arising from airport, hangar, and related aviation operations." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Flights Before Risk Takes Off</>}
          description="We understand your aircraft, operations, routes and aviation exposures to structure insurance aligned with your requirements."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Aviation Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Risk Assessment & Needs Analysis", description: "We understand your fleet, aircraft usage, operations, routes and key aviation risks to identify appropriate coverage." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable coverage, limits, deductibles, and retentions and place the risk with appropriate insurers." },
            { title: "Underwriting & Market Support", description: "We coordinate with insurers and relevant stakeholders to facilitate underwriting and address aviation-specific requirements." },
            { title: "Dedicated Claims Advocacy", description: "A dedicated claims advocate supports you from claim notification to resolution, helping minimise disruption to your aviation operations." },
            { title: "Annual Policy Review & Renewal", description: "Annual reviews ensure your aviation insurance programme keeps pace with changes in your fleet, operations, and risk exposure." },
          ]}
        />
        <ServiceCta
          title="Ready to Protect Your Aviation Operations?"
          description="We help structure aviation insurance solutions tailored to your aircraft, operations, and risk profile."
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
