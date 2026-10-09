import FaqSection from "@/components/FaqSection";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceCta from "@/components/service-page/ServiceCta";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";

export const metadata = {
  title: "Trade Credit Insurance | Equirus Raghnall",
  description: "Tailored Trade Credit Insurance solutions.",
};

const faqs = [
  { question: "Who should consider Trade Credit Insurance?", answer: "Trade Credit Insurance can be tailored to the needs and risk profile of the insured." },
  { question: "What does this policy cover?", answer: "Coverage depends on the selected limits, extensions, exclusions, and agreed policy wording." },
  { question: "Can the policy be customised?", answer: "Yes. Coverage can be structured around specific requirements and risk exposures." },
  { question: "How are suitable limits determined?", answer: "We assess values, exposures, obligations, loss scenarios, and risk appetite before recommending limits." },
];

export default function Page() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Trade Credit Insurance"
          title={<>Protect Your Receivables. Trade With Greater Confidence.</>}
          description="Trade Credit Insurance protects your business against customer insolvency or prolonged default, helping you secure receivables, safeguard cash flow and trade with greater confidence at home and abroad."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Trade Credit Insurance"
          imagePosition="center center"
          features={[
            { title: "Protection Against Buyer Default", icon: "/assets/services/directors-officers/personal.svg" },
            { title: "Receivables & Cash Flow Protection", icon: "/assets/services/directors-officers/legal.svg" },
            { title: "Insolvency Risk Protection", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Credit Risk Management", icon: "/assets/services/directors-officers/management.svg" },
            { title: "Support for Business Growth", icon: "/assets/services/directors-officers/management.svg" },
          ]}
        />
        <ServiceOverview
          label="What Is Trade Credit Insurance?"
          title="Understanding Trade Credit Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Trade Credit Insurance overview"
          description="Trade Credit Insurance protects businesses against customer non-payment on credit sales, covering eligible receivables against risks such as buyer insolvency or prolonged default, subject to policy terms, approved credit limits and exclusions."
          coverageItems={["Buyer insolvency", "Protracted or prolonged default", "Non-payment of eligible trade receivables", "Protection against selected commercial credit risks","Credit monitoring and risk assessment support"]}
          example="If a business supplies goods to a customer on credit and the customer subsequently becomes insolvent or fails to pay within the applicable period, Trade Credit Insurance can help protect the insured receivable against the covered loss, subject to the policy terms and conditions."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            { title: "Buyer Default Protection", description: "Protects against eligible losses when a buyer fails to pay covered trade receivables within the period specified under the policy." },
            { title: "Buyer Insolvency Protection", description: "Protects against covered losses when an insured buyer becomes insolvent, subject to policy terms and exclusions." },
            { title: "Protracted Default", description: "Where covered, provides protection when an eligible buyer fails to make payment beyond the applicable waiting or default period specified in the policy." },
            { title: "Receivables Protection", description: "Helps businesses protect eligible outstanding trade receivables arising from the sale of goods or provision of services on agreed credit terms." },
            { title: "Credit Risk Assessment", description: "Trade Credit Insurance programmes can include buyer assessment and credit-limit management, helping businesses make informed credit decisions." },
            { title: "Domestic & Export Trade Protection", description: "Cover can apply to domestic or international receivables, subject to geographical limits, approved buyers and policy conditions." },
            { title: "Political Risk Protection", description: "Selected political risks affecting payment may be considered for eligible international trade, subject to policy wording and underwriting." },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Receivables Before Risk Finds You</>}
          description="Delayed payments strain cash flow. We structure Trade Credit Insurance around your customers, trading terms and credit exposures."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Trade Credit Insurance advisory support"
          imagePosition="center"
          steps={[
            { title: "Credit Risk Assessment & Needs Analysis", description: "We understand your customer portfolio, sales on credit, payment terms, outstanding receivables, territories, and buyer concentration." },
            { title: "Policy Design & Placement", description: "Our specialists structure suitable credit limits, deductibles and waiting periods, and place the risk with appropriate insurers." },
            { title: "Buyer & Policy Documentation Support", description: "We coordinate buyer information, credit-limit requirements, policy documentation, and other information required for implementation." },
            { title: "Dedicated Claims Advocacy", description: "Our team supports claims for covered non-payment, including documentation, insurer coordination and settlement support." },
            { title: "Annual Policy Review & Renewal", description: "Regular reviews assess changes in buyer exposure, sales and credit limits to keep the programme aligned with your business." },
          ]}
        />
        <ServiceCta
          title="Ready To Explore Trade Credit Insurance?"
          description="Protect your trade receivables and strengthen your business against the financial impact of buyer default."
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
