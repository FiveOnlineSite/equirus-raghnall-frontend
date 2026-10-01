import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Travel Insurance | Equirus Raghnall",
  description: "Tailored Travel Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Travel Insurance?", answer: "Travel Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Travel Insurance"
          title={<>Travel With Confidence. Stay Protected Wherever You Go.</>}
          description="Travel should be about discovery, not worrying about medical costs, disruptions or lost belongings. Travel Insurance covers financial losses from covered travel risks, so you can travel confidently."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Travel Insurance"
          imagePosition="center center"
          features={[
            { title: "Overseas Medical Expense Protection", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Trip Cancellation & Interruption", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Baggage & Personal Belongings Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Travel Delay & Missed Connections", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Personal Accident Protection", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Travel Insurance?"
          title="Understanding Travel Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Travel Insurance overview"
          description="Travel Insurance protects you against financial losses from specified medical emergencies, accidents, trip disruptions, baggage loss and other covered events. Whether travelling internationally or within India, the right plan provides valuable support when unexpected situations affect your journey."
          coverageItems={["Overseas Medical Expenses", "Emergency Medical Evacuation", "Trip Cancellation & Interruption", "Baggage Loss & Delay","Travel Delay"]}
          example="If you fall ill during an international trip and require hospitalisation, the policy can cover eligible medical expenses subject to the policy terms and limits. Similarly, if your checked-in baggage is delayed or lost due to a covered event, applicable benefits may be available."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection for Every Journey"
          items={[
            { title: "Medical Protection", description: "Provides coverage for eligible medical expenses arising from covered illness or injury during your trip." },
            { title: "Trip Cancellation & Interruption", description: "Provides financial protection against eligible non-refundable travel expenses arising from covered events." },
            { title: "Baggage Protection", description: "Provides benefits for covered baggage loss, damage or delay, subject to applicable limits and conditions." },
            { title: "Travel Delay", description: "Provides applicable benefits for covered travel delays and associated eligible expenses." },
            { title: "Personal Accident", description: "Provides financial support for covered accidental death or specified permanent disabilities during the insured journey." },
            { title: "Travel Assistance", description: "Depending on the policy, assistance services may be available for medical emergencies, travel documentation and other covered situations." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Journey Before You Take Off</>}
          description="Every trip is different. Our specialists help you find suitable travel insurance for your destination, duration and traveller profile."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Travel Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Travel Risk & Requirement Assessment", description: "We understand your destination, trip duration, number of travellers and purpose of travel to identify appropriate protection." },
            { title: "Plan Comparison & Policy Selection", description: "We help evaluate available plans, medical limits, deductibles, trip benefits, exclusions and applicable additional covers." },
            { title: "Policy Issuance & Documentation", description: "Our team supports you through documentation and policy issuance to help ensure your travel details are accurately captured." },
            { title: "Claims Assistance", description: "If you face a covered medical emergency, baggage loss or trip disruption, our team assists with claims and insurer coordination." },
            { title: "Travel Policy Review", description: "For frequent travellers, we help review ongoing insurance requirements and identify suitable options for future journeys." },
          ]}
        />
        <ServiceCta
          title={<>Travel Far. <br/>Travel Confidently.</>}
          description="Protect your journey with travel insurance designed around your destination and travel requirements."
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
