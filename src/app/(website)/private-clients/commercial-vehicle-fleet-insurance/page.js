import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Commercial Vehicle & Fleet | Equirus Raghnall",
  description: "Tailored Commercial Vehicle & Fleet solutions.",
};

const faqs = [
  { question: "Who should consider Commercial Vehicle & Fleet?", answer: "Commercial Vehicle & Fleet can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Commercial Vehicle & Fleet"
          title={<>Protect Your Vehicles.<br />Keep Your Business Moving.</>}
          description="Keep your commercial vehicles protected against accidents, theft, damage and third-party liabilities with insurance solutions designed to support businesses that depend on mobility"
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Commercial Vehicle & Fleet"
          imagePosition="center center"
          features={[
            { title: "Accident & Damage Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Third-Party Liability Cover", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Theft & Total Loss Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Fleet Insurance Solutions", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Personal Accident Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Commercial Vehicle & Fleet?"
          title="Understanding Commercial Vehicle & Fleet"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Commercial Vehicle & Fleet overview"
          description="Commercial Vehicle & Fleet Insurance protects business vehicles against financial losses from accidents, theft, natural or man-made events and third-party liabilities, whether you run a single vehicle or a large fleet, safeguarding your vehicles, drivers and operations."
          coverageItems={["Own Damage Protection", "Third-Party Liability", "Theft Protection", "Natural Calamities","Man-Made Events"]}
          example="If a delivery vehicle is involved in an accident while being used for business purposes, the policy can cover admissible repair costs under the applicable Own Damage section and provide protection against covered third-party liabilities."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Your Commercial Fleet"
          items={[
            { title: "Own Damage", description: "Covers accidental damage to insured commercial vehicles arising from covered accidents and insured events." },
            { title: "Third-Party Liability", description: "Provides protection against covered legal liabilities arising from third-party injury, death or property damage." },
            { title: "Theft & Total Loss", description: "Provides financial protection against covered theft or total loss based on the applicable policy terms and Insured Declared Value." },            { title: "Fleet Insurance", description: "Designed to simplify insurance management for businesses with multiple commercial vehicles through structured fleet insurance solutions." },
            { title: "Personal Accident", description: "Provides financial protection for covered accidental death or specified permanent disabilities, as applicable under the policy." },
            { title: "Roadside Assistance", description: "24/7 emergency breakdown assistance, towing, and on-site support anywhere in India." },
            { title: "Legal Liability to Employees", description: "Covers liability towards employed drivers, cleaners, and crew arising from vehicle-related injuries during the course of employment." },
            { title: "Telematics & Fleet Tracking", description: "Usage-based insurance leveraging GPS and telematics data for premium optimisation and driver safety monitoring." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Keep Your Business Moving With the Right Protection</>}
          description="Every fleet has different vehicles, routes and needs. Our specialists help you structure insurance around your business."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Commercial Vehicle & Fleet advisory support"
          imagePosition="center"
          steps={[
            { title: "Fleet Risk Assessment & Requirement Analysis", description: "We understand your fleet composition, vehicle types, usage, geographical operations and risk profile to identify suitable coverage." },
            { title: "Policy Structuring & Placement", description: "Our specialists help evaluate coverage options, deductibles, IDVs and add-ons before placing the programme with suitable insurers." },
            { title: "Fleet Documentation & Policy Administration", description: "We support documentation and policy issuance while streamlining vehicle additions, deletions and other policy requirements." },
            { title: "Dedicated Claims Assistance", description: "In an accident, theft or covered loss, our team assists with claim intimation, documentation and insurer coordination." },
            { title: "Renewal & Fleet Review", description: "We review your fleet insurance at renewal to account for changes in your vehicles, operations and risk exposure." },
          ]}
        />
        <ServiceCta
          title={<>Keep Your Fleet Moving. <br/>Keep Your Business Protected.</>}
          description="Protect your commercial vehicles with an insurance programme designed around your business and fleet requirements."
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
