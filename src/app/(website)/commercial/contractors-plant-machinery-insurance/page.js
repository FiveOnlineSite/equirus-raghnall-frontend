import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Contractors Plant & Machinery (CPM) | Equirus Raghnall",
  description: "Tailored Contractors Plant & Machinery (CPM) solutions.",
};

const faqs = [
  { question: "Who should consider Contractors Plant & Machinery (CPM)?", answer: "Contractors Plant & Machinery (CPM) can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Contractors Plant & Machinery (CPM)"
          title={<>Protect Your Machinery.<br/> Keep Your Projects Moving.</>}
          description="Contractors Plant & Machinery (CPM) Insurance protects your construction equipment against accidental damage, theft and breakdown, helping keep your sites productive and projects on schedule."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Contractors Plant & Machinery (CPM)"
          imagePosition="center center"
          features={[
            { title: "Comprehensive CPM Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Accidental Damage Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Protection During Operation & Use", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Third-Party Liability Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Flexible Equipment-Specific Coverage", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Contractors Plant & Machinery (CPM)?"
          title="Understanding Contractors Plant & Machinery (CPM)"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Contractors Plant & Machinery (CPM) overview"
          description="Contractors Plant & Machinery (CPM) Insurance protects construction and industrial equipment against accidental loss or damage during project activities, covering mobile and stationary equipment at construction sites and other locations."
          coverageItems={["Accidental physical loss or damage to insured machinery", "Construction and earthmoving equipment", "Mobile and stationary plant used for contracting activities", "Machinery while operating at specified project locations","Protection during movement within the insured premises, where covered"]}
          example="If an excavator suffers accidental damage while carrying out excavation work at a construction site, CPM Insurance can help cover the eligible repair or replacement costs, subject to the policy terms, conditions, and exclusions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Plant & Machinery Protection", description: "Protects insured construction plant and machinery against accidental physical loss or damage at project sites, subject to policy terms." },
            { title: "Earthmoving & Construction Equipment", description: "Can cover specified equipment such as excavators, cranes, loaders, bulldozers, compressors and other machinery used in construction and contracting." },
            { title: "Mobile & Stationary Equipment", description: "Protection can be structured for mobile and stationary plant, depending on equipment type, operating environment, locations and usage." },
            { title: "Machinery During Operation", description: "Protects insured machinery during its intended contracting or project operations, subject to policy conditions and exclusions." },
            { title: "Transit & Movement Protection", description: "Where covered, protection can extend to eligible machinery in transit between specified locations, subject to policy terms and geographical limits." },
            { title: "Third-Party Liability", description: "Where selected, covers legal liability for third-party bodily injury or property damage arising from the use of insured equipment." },
            { title: "Additional Extensions", description: "Depending on the machinery and project, additional extensions may be considered for specific equipment exposures, subject to underwriting." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Equipment Before Risk Finds You</>}
          description="Construction equipment is a major investment. We structure CPM solutions around your machinery's type, value, usage and location."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Contractors Plant & Machinery (CPM) advisory support"
          imagePosition="center"
          steps={[
            { title: "Equipment Risk Assessment & Needs Analysis", description: "We understand the equipment specifications, values, usage, locations, project requirements and risk exposures." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable limits, deductibles, extensions, and liability protection and place the risk with appropriate insurers." },
            { title: "Policy Documentation & Support", description: "We coordinate policy documentation to ensure the insured machinery, values and coverage are accurately reflected." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports the claims process from initial notification through documentation, insurer coordination, assessment, and resolution." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews ensure changes in machinery, values, locations and equipment usage are reflected in the insurance programme." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Contractors Plant & Machinery (CPM)?"
          description="Protect your critical plant and machinery with coverage designed around your equipment and project requirements."
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
