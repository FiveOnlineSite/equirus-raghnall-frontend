import Image from "next/image";
import AboutCounters from "./AboutCounters";
import TeamMemberCard from "./TeamMemberCard";

export const metadata = {
  title: "About Us | Equirus Raghnall",
  description: "More than insurance—a partner in every decision.",
};

const expertFaces = [
  "/assets/about/expert-avatar-1.png",
  "/assets/about/expert-avatar-2.png",
  "/assets/about/expert-avatar-3.png",
];

const directors = [
  { name: "Amit Goel", role: "Co-founder Director & Principal Officer", description:"Amit Goel is an XLRI alumnus with over 20 years of experience in the insurance industry, with extensive expertise across large commercial insurance and claims. As Director and Principal Officer, he plays a key role in shaping Equirus Raghnall’s strategic and operational direction.", image: "/assets/team/amit-goel.jpg", position: "center" },
  { name: "Arun Garg", role: "Director", image: "/assets/team/arun-garg.jpg", description:"Arun Garg is a Mechanical Engineer and IIM Bangalore alumnus with 29 years of experience in large-scale infrastructure development. He has led infrastructure projects exceeding INR 10,000 crore and held senior leadership positions across Reliance Group, UPL and GMR. He is an IBBI-registered Insolvency Professional and a Broker Qualified Person.", position: "center" },
  { name: "Yagnesh Dosshi", role: "Co-founder & Director", description:"Yagnesh Dosshi is an IIM Calcutta alumnus with over 20 years of experience across insurance sales, marketing and channel development. As Co-founder and Director, he brings extensive industry knowledge and strategic insight to Equirus Raghnall’s growth and client-focused approach.", image: "/assets/team/yagnesh-doshi.jpg", position: "center" },
  { name: "Bhavesh A Shah", role: "Managing Director & Head – Investment Banking", description:"Bhavesh A. Shah brings over 22 years of investment banking experience, specialising in deal origination and execution across sectors. He has held senior positions at Avener Capital, JM Financial and Morgan Stanley and is a CFA charter holder from ICFAI, India, and the CFA Institute, USA.", image: "/assets/team/demo.png", position: "center bottom" },
];

const managementTeam = [
  { name: "Esha Bajaj", role: "President – Operations",description:"Esha Bajaj is an insurance industry veteran with over two decades of experience spanning operations, HR, finance and administration. She leads Operations and Placement for the Non-EB business, with a strong focus on operational excellence, process efficiency and sustainable business growth.", image: "/assets/team/esha-bajaj.jpg", position: "center" },
  { name: "Prashant Mirchandani", role: "President – Corporate Solution", description: "Prashant Mirchandani is a seasoned insurance professional with over 19 years of experience across Commercial Lines, Liability, Credit Insurance and complex corporate insurance solutions. A qualified lawyer specialising in Insurance Law, he leads Corporate Solutions with a focus on programme structuring, risk management and complex claims.", image: "/assets/team/prashant-mirchandani.jpg", position: "center" },
  { name: "Pritam Barkataki", role: "President – Business Development & Client Relations",description:"Pritam Barkataki brings over 24 years of experience across insurance, banking, pensions, investments and advisory. An MBA in Finance & Marketing and Fellow of the Insurance Institute of India (FIII), he has held leadership roles across ICICI Group, Axis Bank and JLT Insurance Broking, driving institutional and corporate business growth.", image: "/assets/team/pritam-bharkatki.jpg", position: "center bottom" },
  { name: "Varun Vashishth", role: "Partner & Global Head – Reinsurance",description:"Varun Vashishth has over 18 years of experience across reinsurance strategy, market development, client relationships and reinsurance technology. With leadership experience across Turtlemint, ICICI and Max Group, he brings a strategic and technology-led perspective to Equirus Raghnall’s reinsurance business.", image: "/assets/team/varun-vashishth.jpg", position: "center" },
  { name: "Durga Prasad Vattimilli", role: "Sr. VP – Business Development & Client Relations",description:"Durga Prasad Vattimilli brings over 23 years of insurance industry experience across agency, broking, health and commercial insurance. He specialises in business strategy, client relationships and growth, with a strong track record of leading teams and developing sustainable business opportunities.", image: "/assets/team/durgaprasad-vattimili.jpg", position: "center" },
  { name: "Visheshank Shukla", role: "Sr. VP – Corporate Solutions",description:"Visheshank Shukla brings over 21 years of experience across strategic sales, P&L management, corporate and institutional business, distribution and digital transformation. Having held senior positions at ICICI Lombard and Bharti AXA, he focuses on strategic growth, client relationships and building high-performing teams.", image: "/assets/team/visheshank-shukla.jpg", position: "center" },
  { name: "Rakesh Thakur", role: "VP – Corporate Solutions",description:"Rakesh Thakur has over 19 years of experience across commercial insurance, broker management and multi-channel business development. His experience spans direct and broking channels, profit centre management and SME business, with a strong focus on partner relationships, retention and sustainable growth.", image: "/assets/team/demo.png", position: "center" },
  { name: "Rohan Purohit", role: "VP – Corporate Solutions",description:"Rohan Purohit heads the Nagpur branch of Equirus Raghnall and brings over 10 years of experience in the insurance industry. A graduate of Christ College, Bangalore, with an MBA from Mumbai University, he focuses on corporate solutions, business growth and long-term client relationships.", image: "/assets/team/rohan-purohit.jpg", position: "center" },
  { name: "Amrit Pal Singh", role: "VP – Corporate Solutions",description:"", image: "/assets/team/amritpal-singh.jpg", position: "center" },
  { name: "Anand Podar", role: "National Head – Non-EB Claims",description:"A detail-oriented Chartered Accountant with 13+ years of insurance industry experience, specialising in diverse claims including fire, marine, loss of profit, burglary and theft. Strong expertise in claim inspection, loss assessment, asset verification, document analysis and survey report finalisation, with additional experience in financial reporting, taxation, GST compliance, stakeholder coordination, salvage disposal and risk valuation.", image: "/assets/team/anand-poddar.jpg", position: "center" },
  { name: "Dr. Vrushank Shah", role: "National Head – Health Insurance",description:"Dr. Vrushank Shah is a health insurance professional with over 17 years of experience across Corporate and Retail Health Insurance. Having worked with leading organisations including Care Health Insurance, ManipalCigna, Future Generali and Royal Sundaram General Insurance, he brings comprehensive expertise across underwriting, claims, risk assessment, portfolio management and business development.", image: "/assets/team/dr-vrushank-shah.jpg", position: "center" },
  { name: "Vinaykumar Rai", role: "Sr. VP – Techno Marketing",description:"Vinaykumar Rai is a seasoned insurance professional with over 20 years of experience across major commercial lines, including Property, Engineering and Marine. His experience across insurers and broking firms enables him to bring strong technical expertise and market understanding to Equirus Raghnall’s techno-marketing initiatives.", image: "/assets/team/vinay-rai.jpg", position: "center" },
  { name: "Zubin Dadhich", role: "VP – Corporate Solutions",description:"Zubin Dadhich brings over 10 years of experience in business development and strategic partnerships within the insurance industry. His expertise spans embedded insurance, product placement, digital process design, stakeholder management and system integrations, with a strong focus on building scalable insurance solutions.", image: "/assets/team/zubin-dadhich.jpg", position: "center" },
  { name: "Charlotte Fernandes", role: "VP – Placement & Servicing",description:"Charlotte Fernandes brings over 19 years of experience in insurance broking, with extensive expertise in placement and servicing. Her experience with Emedlife Insurance Broking and Mahindra Insurance Broking adds significant depth to Equirus Raghnall’s placement capabilities.", image: "/assets/team/charlotte-fernandes.jpg", position: "center bottom" },
  { name: "Aman Gaur", role: "National Head – Risk Engineering",description:"Aman Gaur is a Risk Engineer and Insurance Professional with extensive expertise across industrial risk assessment, loss prevention, risk engineering and claims advisory. He holds qualifications in Engineering, Management, Law and Industrial Safety and is a Licentiate of the Insurance Institute of India. His specialised experience includes FM Global-certified loss prevention and business interruption mitigation.", image: "/assets/team/aman-gaur.jpg", position: "center" },
  { name: "Abhishek Patnaik", role: "AVP – Reinsurance",description:"Abhishek Patnaik is an insurance professional with experience across reinsurance, regulatory compliance and insurance broking. Having worked with SBI General Insurance and Turtlemint Insurance Brokers, he brings expertise in reinsurance operations, governance and risk management. He is an Associate of the Insurance Institute of India and holds an MBA in Insurance and Analytics from IIRM, Hyderabad.", image: "/assets/team/abhishek-patnaik.jpg", position: "center" },
  { name: "Apurva Gangdev", role: "National Head – Risk Engineering",description:"Apurva Gangdev brings over 15 years of experience in the insurance industry, with expertise across Property, Marine, Affinity and Parametric insurance. A qualified Telecommunications Engineer, he combines strong technical knowledge with extensive insurance experience to deliver tailored corporate solutions and placement strategies.", image: "/assets/team/apurva-gangadev.jpg", position: "center" },
  { name: "Shilpa Mahajan", role: "National Head – Risk Engineering",description:"Shilpa Mahajan is insurance professional with over 21 years of extensive experience with business development, operations, and corporate insurance solutions across ICICI group, Bajaj Finserv & Broking Industries.Known for building high-performing relationships with clients and stakeholders, navigating complex business challenges, result-oriented strategies. Passionate about driving sustainable growth, improving processes, and creating long-term value for clients and organizations.", image: "/assets/team/shilpa-mahajan.jpg", position: "center" },
  { name: "Shreyas Chauhan", role: "VP – Non EB Claims",description:"", image: "/assets/team/sreyash-chauhan.jpg", position: "center" },
  { name: "Gaurav Palliwal", role: "Business Head – Retail",description:"", image: "/assets/team/gaurav-palliwal.jpg", position: "center bottom" },
];



const awards = [
  { name: "Excellence in Insurance Advisory", organizer: "Organizer", image: "/assets/about/award-insurance-advisory.png", position: "center" },
  { name: "Trusted Insurance Partner Award", organizer: "Organizer", image: "/assets/about/award-trusted-partner.png", position: "center" },
  { name: "Industry Leadership Recognition", organizer: "Organizer", image: "/assets/about/award-industry-leadership.png", position: "center" },
  { name: "Innovation in Insurance Solutions", organizer: "Organizer", image: "/assets/about/award-innovation.png", position: "center" },
];

export default function AboutUsPage() {
  return (
    <>
      
      <main>
        <section className="min-h-[calc(100vh-88px)] bg-[#F8F9FF] py-10 md:py-12">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h1 className="text-2xl font-semibold leading-[1.12] tracking-[-0.025em] text-[#080808] md:text-[40px]">
                More Than Insurance.
                <br />
                A Partner in Every Decision.
              </h1>
              <p className="mx-auto mt-6 max-w-[570px] text-sm leading-6 text-[#555555] md:text-base md:leading-7">
                Helping individuals and businesses navigate risks with confidence
                <br className="hidden sm:block" />
                through personalized insurance and advisory solutions.
              </p>
            </div>

            <div className="mx-auto mt-6 grid max-w-[1290px] items-center gap-5 md:grid-cols-3">
              <div className="relative aspect-[413/273] overflow-hidden rounded-lg shadow-[0_1px_16px_rgba(0,0,0,0.1)] md:-translate-y-3">
                <Image src="/assets/about/about-hero-family.png" alt="A family enjoying time together" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>

              <div className="relative aspect-[414/285] overflow-hidden rounded-lg shadow-[0_1px_16px_rgba(0,0,0,0.1)] md:mt-8">
                <Image src="/assets/about/about-hero-collaboration.png" alt="Insurance experts collaborating" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute bottom-6 left-6 flex items-center rounded-full bg-white py-1.5 px-2 shadow-md">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {expertFaces.map((image) => (
                      <span className="relative block size-7 overflow-hidden rounded-full border-2 border-white" key={image}>
                        <Image src={image} alt="" fill sizes="28px" className="object-cover" />
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-xs font-medium text-[#242424]">300+ Experts</span>
                </div>
              </div>

              <div className="relative aspect-[413/273] overflow-hidden rounded-lg shadow-[0_1px_16px_rgba(0,0,0,0.1)] md:-translate-y-3">
                <Image src="/assets/about/about-hero-office.png" alt="A modern collaborative workplace" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pt-16 md:pt-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">About The Company</p>
            <h2 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">
              Built for Complex Risks. Trusted for Every Solution.
            </h2>
            <div className="mt-6 max-w-[1320px] space-y-3 text-sm leading-7 text-[#555555] md:text-base">
              <p>
                Equirus Raghnall Insurance Broking is a leading corporate insurance broker and risk advisory firm, delivering world-class risk solutions to businesses across India and international markets. Backed by the institutional strength, governance, and financial expertise of the Equirus Group, we combine global standards with deep local market knowledge to help organisations navigate an increasingly complex risk landscape.
              </p>
              <p>
                Our multidisciplinary team of insurance specialists, risk engineers, claims professionals, legal experts, and industry practitioners advises clients across sectors including infrastructure, manufacturing, financial services, healthcare, logistics, renewable energy, technology, real estate, and global trade. By combining technical expertise with commercial insight, we design solutions that are aligned with each client&apos;s strategic objectives and risk appetite.
              </p>
            </div>
          </div>
        </section>

        <AboutCounters />

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:px-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">Global Capabilities</p>
              <h2 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] md:text-[32px]">
                Global Reach.
                <br />
                Tailored Protection.
              </h2>
              <p className="mt-7 max-w-[700px] text-sm leading-7 text-[#555555] md:text-base">
                With access to leading domestic insurers and international insurance markets, we are equipped to support complex cross-border operations, global insurance programmes, and evolving regulatory requirements. Our relationships, technical expertise, and market intelligence enable us to negotiate innovative and competitive solutions for risks of every scale and complexity.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] pb-2 pr-2">
              <span className="absolute bottom-0 left-[57%] right-0 top-[35%] rounded-[6px] bg-[#30337A]" aria-hidden="true" />
              <div className="relative aspect-[1.22/1] overflow-hidden rounded-[10px] bg-white">
                <Image src="/assets/about/global-capabilities.png" alt="A globe representing Equirus Raghnall's global insurance capabilities" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:px-20">
            <div className="lg:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">What Drives Us</p>
              <h2 className="mt-6 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">How We Measure Success</h2>
              <p className="mt-7 max-w-[700px] text-sm leading-7 text-[#555555] md:text-base">
                At Equirus Raghnall, we measure our success by the confidence our clients place in us. We are committed to building enduring partnerships founded on integrity, technical excellence, responsiveness, and a relentless focus on delivering value. As trusted advisors to our clients, we help them anticipate risk, seize opportunities with confidence, and create resilient businesses prepared for the future.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] pb-2 pl-2 lg:order-1">
              <span className="absolute bottom-0 left-0 right-[57%] top-[35%] rounded-[6px] bg-[#30337A]" aria-hidden="true" />
              <div className="relative aspect-[1.22/1] overflow-hidden rounded-[10px] bg-[#f1f1f1]">
                <Image src="/assets/about/measure-success.png" alt="Modern architecture representing a strong foundation" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#30337A] py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-white/90 sm:text-base">Why Choose Us</p>
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] md:text-[32px]">Why Equirus Raghnall</h2>
            </div>

            <div className="mt-12 grid md:mt-14 md:grid-cols-3">
              {[
                { number: "01.", title: "We Understand Your Business", text: "Every business faces unique risks. We assess your operations and design tailored insurance solutions that align with your specific exposures and objectives." },
                { number: "02.", title: "Expert Risk Advisory", text: "Our specialists identify potential risks and recommend practical measures to reduce exposures, helping strengthen your business while minimizing future claims." },
                { number: "03.", title: "Access Top Insurance Markets", text: "As an independent broker, we compare leading insurers and global markets to secure tailored coverage with the most competitive terms." },
              ].map((item, index) => (
                <article key={item.number} className={`py-8 md:min-h-[250px] md:px-8 md:py-0 xl:px-10 ${index ? "border-t border-white/60 md:border-l md:border-t-0" : ""}`}>
                  <p className="text-[28px] font-semibold leading-none text-white/65 sm:text-[32px]">{item.number}</p>
                  <h3 className={`mt-10 text-lg font-semibold leading-7 sm:text-xl ${index === 2 ? "lg:whitespace-nowrap" : ""}`}>{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/90">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">Meet Our Team</p>
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">Board Of Directors</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {directors.map((director) => (
                <TeamMemberCard
                  key={director.name}
                  member={director}
                  fallbackDescription={`${director.name} provides strategic leadership and expertise as ${director.role}.`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-20 pt-12">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">Management Team</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {managementTeam.map((member, index) => (
                <TeamMemberCard
                  key={`${member.name}-${index}`}
                  member={member}
                  fallbackDescription={`${member.name} brings specialist experience and leadership to the role of ${member.role}.`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* <section className="bg-[#F8F9FF] pb-20 pt-12">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h2 className="mt-2 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">Management Team- Reinsurance</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {reinsuranceTeam.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  fallbackDescription={`${member.name} contributes deep market expertise and leadership as ${member.role}.`}
                />
              ))}
            </div>
          </div>
        </section> */}

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#0A4E08] sm:text-base">Why Choose Us</p>
              <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">Why Equirus Raghnall</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {awards.map((award) => (
                <article key={award.name} className="text-center">
                  <div className="group relative aspect-[305/312] overflow-hidden rounded-lg bg-[#d7d9db]">
                    <Image
                      src={award.image}
                      alt={award.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: award.position }}
                    />
                  </div>
                  <h3 className="mx-auto mt-3 max-w-[271px] text-sm font-semibold leading-5 text-[#080808] sm:mt-4 sm:text-xl sm:leading-8">{award.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#3d3d3d] sm:mt-2 sm:text-base sm:leading-7">{award.organizer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}
