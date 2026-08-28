import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceOverview from "@/components/service-page/ServiceOverview";
import ServiceCoverageGrid from "@/components/service-page/ServiceCoverageGrid";
import ServiceAdvisorySupport from "@/components/service-page/ServiceAdvisorySupport";
import ServiceCta from "@/components/service-page/ServiceCta";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Directors’ & Officers’ Liability Insurance | Equirus Raghnall",
  description:
    "Protect directors and officers from legal risks and personal liability with tailored D&O insurance coverage.",
};

const directorsOfficersFaqs = [
  {
    question: "Who should purchase D&O insurance?",
    answer:
      "Companies of every size should consider D&O insurance when directors, officers, senior managers, or board members may face personal liability arising from decisions made in their professional capacity.",
  },
  {
    question: "What types of claims does D&O insurance cover?",
    answer:
      "Coverage can respond to allegations such as breach of duty, misrepresentation, regulatory non-compliance, employment-related decisions, shareholder claims, and errors or omissions in management decisions.",
  },
  {
    question: "Does D&O insurance protect personal assets?",
    answer:
      "Yes. When the organisation cannot indemnify an insured director or officer, the policy can protect personal assets by covering eligible defence costs, settlements, and judgments.",
  },
  {
    question: "Are regulatory investigations covered?",
    answer:
      "Policies can include cover for eligible legal and professional costs arising from formal regulatory investigations, inquiries, and proceedings, subject to the agreed policy terms.",
  },
  {
    question: "How is the appropriate coverage limit determined?",
    answer:
      "We assess the organisation's size, industry, ownership, governance structure, regulatory exposure, claims history, and risk appetite before recommending suitable limits and policy extensions.",
  },
];

export default function DirectorsOfficersLiabilityPage() {
  return (
    <>
      
      <main>
        <ServiceHero
          label="Directors’ & Officers’ Liability Insurance"
          title={
            <>
              Protect Your Leadership
              <br />
              with Confidence
            </>
          }
          description="Protect your leadership from legal risks and personal liability—so they can lead with confidence."
          image="/assets/services/directors-officers/banners.png"
          imageAlt="Leadership protection and confidence"
          imagePosition="center center"
          features={[
            {
              title: "Personal Asset Protection",
              icon: "/assets/services/directors-officers/personal.svg",
            },
            {
              title: "Legal Defence Covered",
              icon: "/assets/services/directors-officers/legal.svg",
            },
            {
              title: "Management Risk Protection",
              icon: "/assets/services/directors-officers/management.svg",
            },
          ]}
        />
        <ServiceOverview
          label="What Is D&O Insurance?"
          title="Understanding D&O Insurance"
          image="/assets/services/directors-officers/overview.png"
          imageAlt="Business leaders discussing corporate risk"
          description="Directors’ & Officers’ Liability Insurance (D&O) is a specialized policy designed to protect company leaders from personal liability arising out of their managerial actions. Whether it’s an error in judgment, an alleged breach of duty, or a regulatory investigation—D&O insurance ensures financial and legal protection."
          coverageItems={[
            "Legal defence costs",
            "Settlements and court judgments",
            "Regulatory investigations",
            "Claims from shareholders, employees, customers, or authorities",
          ]}
          example="If stakeholders accuse the management of mismanagement during a financial downturn, D&O insurance covers the legal expenses and protects the personal assets of the directors involved."
        />
        <ServiceCoverageGrid
          label="Coverage Components"
          title="Comprehensive Protection At Every Level"
          items={[
            {
              title: "Individual Coverage",
              description:
                "Directly protects directors and officers when the company cannot indemnify them. Covers defence costs, judgments, and settlements.",
              href: "#individual-coverage",
            },
            {
              title: "Company Reimbursement",
              description:
                "Repays the organisation when it advances defence costs or indemnifies a director against a covered wrongful act claim by shareholders or regulators.",
              href: "#company-reimbursement",
            },
            {
              title: "Securities Entity",
              description:
                "Covers the company when it is a co-defendant in securities class action litigation, ensuring resources are preserved for business continuity.",
              href: "#securities-entity",
            },
            {
              title: "Regulatory & Investigation",
              description:
                "Covers costs of responding to formal regulatory investigations, government inquiries, and subpoenas — even before charges are filed.",
              href: "#regulatory-investigation",
            },
            {
              title: "Employment Practices Liability",
              description:
                "Protects against claims of wrongful termination, discrimination, or harassment brought by employees against leadership or the entity.",
              href: "#employment-practices",
            },
            {
              title: "ESG & Governance Liability",
              description:
                "Emerging coverage for claims arising from ESG failures — a growing area of shareholder and regulatory scrutiny worldwide.",
              href: "#esg-governance",
            },
          ]}
        />
        <ServiceAdvisorySupport
          label="Advisory Support"
          title={<>Protect Your Leadership Before Risk Finds You</>}
          description="We understand that no two boards are alike. Our policies are crafted to meet the unique risk profile of your organisation and leadership structure."
          image="/assets/services/directors-officers/advisory-support.png"
          imageAlt="Advisors reviewing documents with business leaders"
          imagePosition="center"
          steps={[
            {
              title: "Risk Assessment & Needs Analysis",
              description:
                "We understand your board composition, governance framework, and industry risks to map the right coverage for your organisation.",
            },
            {
              title: "Policy Design & Placement",
              description:
                "Our specialists craft a bespoke policy with optimal limits and retentions, placed with A-rated carriers at competitive premiums.",
            },
            {
              title: "Legal Panel Access & Defence Support",
              description:
                "Immediate access to our panel of senior corporate defence counsel with D&O litigation expertise across all jurisdictions.",
            },
            {
              title: "Dedicated Claims Advocacy",
              description:
                "A dedicated claims advocate manages your case from notification to resolution with prompt payment and minimal disruption.",
            },
            {
              title: "Annual Policy Review & Renewal",
              description:
                "Annual reviews ensure your coverage keeps pace with your organisation's growth and regulatory changes.",
            },
          ]}
        />

        <ServiceCta
          title="Ready To Protect Your Leadership Team?"
          description="Speak with a specialist today and receive a no-obligation D&O coverage assessment tailored to your organisation's risk profile."
          primaryAction={{ label: "Get a Free Quote", href: "/contact-us" }}
          secondaryAction={{
            label: "Download Brochure",
            href: "/assets/services/directors-officers/brochure.pdf",
            download: true,
          }}
        />

        <FaqSection
          eyebrow="Frequently Asked Questions"
          title="Answers to Common Insurance Queries"
          items={directorsOfficersFaqs}
          defaultOpen={0}
        />
      </main>
      
    </>
  );
}
