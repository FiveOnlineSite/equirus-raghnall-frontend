import Image from "next/image";
import AboutCounters from "./AboutCounters";

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
  { name: "Amit Goel", role: "Co-founder Director & Principal Officer", image: "/assets/about/board-amit-goel.png", position: "center top" },
  { name: "Yognesh Dosshi", role: "Co-founder & Director", image: "/assets/about/board-yognesh-dosshi.png", position: "center" },
  { name: "Arun Garg", role: "Director", image: "/assets/about/board-arun-garg.png", position: "center top" },
  { name: "Bhavesh A Shah", role: "Managing Director", image: "/assets/about/management-pritam.png", position: "center bottom" },
];

const managementTeam = [
  { name: "Esha Bajaj", role: "President – Operations", image: "/assets/about/management-esha-bajaj.png", position: "center" },
  { name: "Prashant Mirchandani", role: "President – Corporate Solution", description: "Prashant Mirchandani | LLB, FIII\n18+ years in commercial insurance, insurance law & complex claims. Former National Head – TATA AIG. Expert in liability & commercial lines, high-value claim advisory, and strategic negotiation across industries.", image: "/assets/about/management-prashant-mirchandani.png", position: "center top" },
  { name: "Zubin Dadhich", role: "VP – Corporate Solutions", image: "/assets/about/management-zubin-dadhich.png", position: "center top" },
  { name: "Pritam Barkataki", role: "President – Business Development", image: "/assets/about/management-pritam.png", position: "center bottom" },
  { name: "Rakesh Thakur", role: "VP – Corporate Solutions", image: "/assets/about/management-corporate-solutions.png", position: "center" },
  { name: "Visheshank Shukla", role: "Sr. VP – Corporate Solutions", image: "/assets/about/management-prashant-mirchandani.png", position: "center top" },
  { name: "Dr. Vrushank Shah", role: "National Head", image: "/assets/about/management-sonu-gupta.png", position: "center top" },
  { name: "Charlotte Fernandes", role: "VP – Placement & Servicing", image: "/assets/about/management-charlotte-fernandes.png", position: "center bottom" },
  { name: "Sonu Kumar Gupta", role: "VP – Non EB Claims", image: "/assets/about/management-sonu-gupta.png", position: "center top" },
  { name: "Vinay Rai", role: "Sr. VP – Techno Marketing", image: "/assets/about/management-corporate-solutions.png", position: "center" },
  { name: "Rohan Purohit", role: "VP – Corporate Solutions", image: "/assets/about/management-prashant-mirchandani.png", position: "center top" },
  { name: "Amrit Pal Singh", role: "VP – Corporate Solutions", image: "/assets/about/management-sonu-gupta.png", position: "center top" },
  { name: "Gaurav Palliwal", role: "Business Head – Retail", image: "/assets/about/management-pritam.png", position: "center bottom" },
  { name: "Aman Gour", role: "National Head – Risk Engineering", image: "/assets/about/management-prashant-mirchandani.png", position: "center top" },
  { name: "M. Javed Ansari", role: "Compliance Officer", image: "/assets/about/management-corporate-solutions.png", position: "center" },
];

const reinsuranceTeam = [
  { name: "Abhyudaya Das", role: "Partner & CBO – Reinsurance", image: "/assets/about/reinsurance-abhyudaya-das.png", position: "center" },
  { name: "Varun Vashishth", role: "Partner & COO – Reinsurance", image: "/assets/about/reinsurance-varun-vashishth.png", position: "center top" },
];

const awards = [
  { name: "Excellence in Insurance Advisory", organizer: "Organizer", image: "/assets/about/award-insurance-advisory.png", position: "center top" },
  { name: "Trusted Insurance Partner Award", organizer: "Organizer", image: "/assets/about/award-trusted-partner.png", position: "center" },
  { name: "Industry Leadership Recognition", organizer: "Organizer", image: "/assets/about/award-industry-leadership.png", position: "center top" },
  { name: "Innovation in Insurance Solutions", organizer: "Organizer", image: "/assets/about/award-innovation.png", position: "center top" },
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
                <article key={director.name} tabIndex={0} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db] outline-none">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-focus-visible:scale-[1.03] group-focus-visible:blur-sm"
                    style={{ objectPosition: director.position }}
                  />
                  <div className="team-card-label absolute inset-x-0 bottom-0 px-4 py-2.5 text-white">
                    <h3 className="text-[13px] font-semibold leading-4 sm:text-base sm:leading-6">{director.name}</h3>
                    <p className="mt-1 text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-5">{director.role}</p>
                    <p className="team-card-description whitespace-pre-line text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-6">{director.description ?? `${director.name} provides strategic leadership and expertise as ${director.role}.`}</p>
                  </div>
                </article>
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
                <article key={`${member.name}-${index}`} tabIndex={0} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db] outline-none">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-focus-visible:scale-[1.03] group-focus-visible:blur-sm"
                    style={{ objectPosition: member.position }}
                  />
                  <div className="team-card-label absolute inset-x-0 bottom-0 px-4 py-2.5 text-white">
                    <h3 className="text-[13px] font-semibold leading-4 sm:text-base sm:leading-6">{member.name}</h3>
                    <p className="mt-1 text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-5">{member.role}</p>
                    <p className="team-card-description whitespace-pre-line text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-6">{member.description ?? `${member.name} brings specialist experience and leadership to the role of ${member.role}.`}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FF] pb-20 pt-12">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h2 className="mt-2 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">Management Team- Reinsurance</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {reinsuranceTeam.map((member) => (
                <article key={member.name} tabIndex={0} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db] outline-none">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-focus-visible:scale-[1.03] group-focus-visible:blur-sm"
                    style={{ objectPosition: member.position }}
                  />
                  <div className="team-card-label absolute inset-x-0 bottom-0 px-4 py-2.5 text-white">
                    <h3 className="text-[13px] font-semibold leading-4 sm:text-base sm:leading-6">{member.name}</h3>
                    <p className="mt-1 text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-5">{member.role}</p>
                    <p className="team-card-description whitespace-pre-line text-[11px] leading-4 text-white/95 sm:text-sm sm:leading-6">{member.description ?? `${member.name} contributes deep market expertise and leadership as ${member.role}.`}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
