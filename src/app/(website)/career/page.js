import Image from "next/image";
import CareerJobs from "./CareerJobs";
import styles from "./careerBanner.module.css";
import lifeStyles from "./careerLife.module.css";
import voiceStyles from "./careerVoiceLayout.module.css";
import growthStyles from "./careerGrowthLayout.module.css";

export const metadata = {
  title: "Careers | Equirus Raghnall",
  description: "Grow your career and make an impact at Equirus Raghnall.",
};

const asset = (file) => `/assets/career/${file}`;

const culture = [
  { title: "One Team", icon: "culture-team.svg" },
  { title: "Ownership", icon: "culture-ownership.svg" },
  { title: "Integrity", icon: "culture-integrity.svg" },
  { title: "Growth", icon: "culture-growth.svg" },
];

const lifeFeatures = [
  { title: "Leadership Connect", icon: "life-leadership.svg" },
  { title: "Recognition", icon: "life-recognition.svg" },
  { title: "Employee Engagement", icon: "life-engagement.svg" },
  { title: "Learning & Development", icon: "life-learning.svg" },
];

const growthSteps = [
  { title: "Join", image: "growth-join.png", icon: "growth-icon-join.svg", position: "stepJoin" },
  { title: "Learn", image: "growth-learn.png", icon: "growth-icon-learn.svg", position: "stepLearn" },
  { title: "Contribute", image: "growth-contribute.png", icon: "growth-icon-contribute-bg.svg", position: "stepContribute" },
  { title: "Grow", image: "growth-grow.png", icon: "growth-icon-grow.svg", position: "stepGrow" },
  { title: "Lead", image: "growth-lead.png", icon: "growth-icon-lead.svg", position: "stepLead" },
];

function Eyebrow({ children, className = "" }) {
  return <p className={`text-base font-medium uppercase leading-[30px] tracking-[0.03em] text-[#0a4e08] ${className}`}>{children}</p>;
}

function GreenButton({ children, href, className = "" }) {
  return <a href={href} className={`inline-flex h-12 w-[197px] items-center justify-center rounded-lg bg-[#0a4e08] text-base font-semibold text-white transition hover:bg-[#083f07] ${className}`}>{children}</a>;
}

export default function CareerPage() {
  return (
    <main>
      <section className="overflow-hidden bg-white">
        <div className={`${styles.hero} relative w-full`}>
          <div className={`${styles.fade} absolute inset-y-0 left-0 z-[1] hidden`} aria-hidden="true" />
          <div className={`${styles.content} relative z-10 px-5 pb-10 pt-12 md:px-10`}>
            <Eyebrow className={styles.eyebrow}>People &amp; Culture</Eyebrow>
            <h1 className={`${styles.heading} mt-4 max-w-[579px] text-[34px] font-semibold leading-[1.2] text-[#080808] md:text-[40px] md:leading-[52px]`}>Where People Grow. Ideas Thrive. Impact Matters</h1>
            <p className={`${styles.body} mt-4 max-w-[522px] text-base leading-7 text-[#3d3d3d]`}>At Equirus Raghnall, our people are at the heart of our success. We foster a culture built on collaboration, ownership, integrity and continuous growth—empowering every individual to contribute and make an impact.</p>
            <div className={`${styles.buttonWrap} mt-10`}><GreenButton href="#open-positions" className={styles.button}>View Jobs</GreenButton></div>
          </div>
          <div className={`${styles.image} relative min-h-[320px] w-full flex-1`}>
            <Image src={asset("hero.png")} alt="Colleagues collaborating around a laptop" fill preload sizes="(max-width: 1023px) 100vw, 55.7vw" className="object-contain object-bottom" />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(185deg,#fff_16%,#f6f7fe_91%)] py-[60px] xl:min-h-[518px]">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-10 xl:px-20">
          <Eyebrow>What We Stand For</Eyebrow>
          <h2 className="mt-4 text-[30px] font-semibold leading-[44px] text-[#080808] md:text-[32px]">The Culture That Drives Us</h2>
          <div className="mx-auto mt-12 grid max-w-[1180px] gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {culture.map(({ title, icon }) => (
              <article className="flex min-h-[260px] flex-col items-center rounded-xl bg-white px-5 pb-6 pt-6 shadow-[0_1px_16px_rgba(0,0,0,0.1)]" key={title}>
                <div className="relative size-[86px]">
                  <Image src={asset("culture-ring.svg")} alt="" width={86} height={86} />
                  <Image src={asset(icon)} alt="" width={40} height={40} className="absolute left-[23px] top-[23px]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-[30px] text-[#0a4e08]">{title}</h3>
                <p className="mt-4 max-w-[231px] text-base leading-7 text-[#080808]">Collaborate. Support.<br />Succeed together.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${lifeStyles.lifeSection} bg-[linear-gradient(185deg,#f6f7fe_9%,#fff_72%)] py-16`}>
        <div className={`${lifeStyles.lifeInner} relative mx-auto max-w-[1440px] px-5 md:px-10`}>
          <div className={lifeStyles.lifeCopy}>
            <Eyebrow className={lifeStyles.lifeEyebrow}>Experience Life, Build Connections</Eyebrow>
            <h2 className={`${lifeStyles.lifeHeading} mt-4 text-[30px] font-semibold leading-[44px] text-[#080808] md:text-[32px]`}>Learn. Connect. Grow</h2>
            <p className={`${lifeStyles.lifeBody} mt-5 max-w-[522px] text-base leading-7 text-[#3d3d3d]`}>A workplace that encourages professional development, collaboration, employee engagement and meaningful connections.</p>
          </div>
          <div className={`${lifeStyles.lifeFeatures} mt-10 grid max-w-[616px] grid-cols-2 gap-y-8 text-center sm:grid-cols-4`}>
            {lifeFeatures.map(({ title, icon }, index) => (
              <div className={`${lifeStyles.lifeFeature} ${index === 0 ? lifeStyles.lifeFeatureFirst : ""} relative flex min-h-[100px] flex-col items-center px-3`} key={title}>
                <Image src={asset(icon)} alt="" width={32} height={32} className={lifeStyles.lifeIcon} />
                <p className={`${lifeStyles.lifeFeatureText} mt-4 text-base font-medium leading-6 text-black`}>{title}</p>
                {index < 3 && <Image src={asset("life-divider.svg")} alt="" width={1} height={96} className={`${lifeStyles.lifeDivider} ${index === 0 ? lifeStyles.lifeDividerFirst : ""} absolute top-0 hidden`} />}
              </div>
            ))}
          </div>
          <div className={`${lifeStyles.lifeMedia} relative mt-12 h-auto max-w-[615px] pb-3`}>
            <div className={`${lifeStyles.lifeAccent} absolute bottom-0 right-[-12px] top-[35px] w-[59.5%] rounded bg-[#2c2f71]`} aria-hidden="true" />
            <div className={`${lifeStyles.lifePhoto} relative z-10 aspect-[615/406] overflow-hidden rounded-lg`}>
              <Image src={asset("life.png")} alt="Team members sharing ideas in an office" fill sizes="(max-width: 1279px) 100vw, 615px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="growth-journey" className={`${growthStyles.section} bg-white py-[60px]`}>
        <div className={`${growthStyles.inner} relative mx-auto max-w-[1440px] text-center`}>
          <div className={`${growthStyles.heading} px-5`}>
            <Eyebrow className={growthStyles.eyebrow}>Build Your Future</Eyebrow>
            <h2 className={`${growthStyles.title} mt-4 text-[30px] font-semibold leading-[44px] text-[#080808] md:text-[32px]`}>Your Growth. Your Journey</h2>
          </div>
          <div className={`${growthStyles.mobileGrid} mt-12 grid gap-8 px-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-5`}>
            {growthSteps.map(({ title, image, icon }) => (
              <div className="flex flex-col items-center" key={title}>
                <div className="relative size-[180px]">
                  <Image src={asset(image)} alt={`Colleagues at the ${title.toLowerCase()} stage`} fill sizes="180px" className="object-contain" />
                </div>
                <div className="relative z-10 -mt-9 grid size-[72px] place-items-center">
                  <Image src={asset(icon)} alt="" width={72} height={72} />
                  {title === "Contribute" && <Image src={asset("growth-icon-contribute.svg")} alt="" width={24} height={22} className="absolute" />}
                </div>
                <span className={`mt-1 inline-flex h-10 items-center justify-center rounded-full bg-[#0a4e08] px-5 text-base font-medium text-white ${["Contribute", "Grow", "Lead"].includes(title) ? "min-w-[152px]" : "min-w-[125px]"}`}>{title}</span>
              </div>
            ))}
          </div>
          <div className={`${growthStyles.desktopJourney} absolute inset-0 hidden`}>
            <Image src={asset("growth-curve.svg")} alt="" width={1277} height={308} className={growthStyles.curve} />
            {growthSteps.map(({ title, image, icon, position }) => (
              <div className={`${growthStyles.step} ${growthStyles[position]}`} key={title}>
                <Image src={asset(image)} alt="" width={197} height={197} className={growthStyles.stepImage} />
                <div className={`${growthStyles.badge} absolute`}>
                  <Image src={asset(icon)} alt="" width={72} height={72} />
                  {title === "Contribute" && <Image src={asset("growth-icon-contribute.svg")} alt="" width={24} height={22} className={`${growthStyles.contributeIcon} absolute`} />}
                </div>
                <span className={`${growthStyles.label} ${["Contribute", "Grow", "Lead"].includes(title) ? growthStyles.labelWide : ""} ${title === "Contribute" ? growthStyles.labelContribute : ""} absolute left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-[#0a4e08] font-medium text-white`}>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="your-voice" className={`${voiceStyles.voiceSection} bg-[linear-gradient(185deg,#fff_9%,#f6f7fe_106%)] py-16`}>
        <div className={`${voiceStyles.voiceInner} relative mx-auto flex max-w-[1440px] flex-col gap-12 px-5 md:px-10`}>
          <div className={`${voiceStyles.voiceArt} relative mx-auto aspect-[423/400] w-full max-w-[423px]`}>
            <div className="absolute rounded-xl bg-[#2c2f71]" style={{ left: "-0.8%", top: "-0.75%", width: "57%", height: "81%" }} aria-hidden="true" />
            <div className="absolute left-[1.2%] top-[1.25%] z-10 aspect-[304/365] w-[72%] overflow-hidden rounded-xl">
              <Image src={asset("voice-main.png")} alt="Team members collaborating around a table" fill sizes="(max-width: 1023px) 72vw, (max-width: 1399px) 21.9vw, 315px" className="object-cover" />
            </div>
            <div className="absolute rounded-xl bg-[#2c2f71]" style={{ left: "81%", top: "62.75%", width: "20%", height: "39.25%" }} aria-hidden="true" />
            <div className="absolute left-[58%] top-[47%] z-20 aspect-[172/207] w-[41%] overflow-hidden rounded-xl shadow-[0_1px_12px_rgba(0,0,0,0.1)]">
              <Image src={asset("voice-detail.png")} alt="Colleagues working together on a laptop" fill sizes="(max-width: 1023px) 41vw, (max-width: 1399px) 12.47vw, 180px" className="object-cover" />
            </div>
          </div>
          <div className={voiceStyles.voiceCopy}>
            <Eyebrow className={voiceStyles.voiceEyebrow}>Your Voice. Your Impact</Eyebrow>
            <h2 className={`${voiceStyles.voiceHeading} mt-4 text-[30px] font-semibold leading-[44px] text-[#080808] md:text-[32px]`}>You Speak. We Listen. We Act</h2>
            <p className={`${voiceStyles.voiceBody} mt-5 max-w-[522px] text-base leading-7 text-[#3d3d3d]`}>We encourage our people to share ideas and feedback, helping us continuously improve the employee experience.</p>
          </div>
        </div>
      </section>

      <CareerJobs />

      <section className="overflow-hidden bg-[#fafafa]">
        <div className="relative mx-auto max-w-[1440px] lg:h-[467px]">
          <div className="absolute inset-y-0 left-0 z-[1] hidden w-[664px] bg-[#fafafa] blur-[20px] lg:block" aria-hidden="true" />
          <div className="relative z-10 px-5 pb-10 pt-12 md:px-10 lg:pb-0 lg:pt-[83px] xl:px-20">
            <Eyebrow>Stay Connected</Eyebrow>
            <h2 className="mt-4 max-w-[429px] text-[34px] font-semibold leading-[1.2] text-[#080808] md:text-[40px] md:leading-[52px]">We Still Want To Hear From You</h2>
            <p className="mt-4 max-w-[558px] text-base leading-7 text-[#3d3d3d]">Send your resume to <a className="font-semibold text-[#0a4e08] hover:underline" href="mailto:hr@equirusraghnall.com">hr@equirusraghnall.com</a> with a cover note (up to 500 words) for priority consideration in insurance broking careers.</p>
            <div className="mt-9"><GreenButton href="mailto:hr@equirusraghnall.com?subject=Career%20enquiry">Write to HR</GreenButton></div>
          </div>
          <div className="relative h-[300px] w-full lg:absolute lg:right-[50px] lg:top-0 lg:h-[467px] lg:w-[701px]">
            <Image src={asset("hr-banner.png")} alt="Recruitment team member working on a laptop" fill loading="eager" sizes="(max-width: 1023px) 100vw, 701px" className="object-contain object-bottom" />
          </div>
        </div>
      </section>
    </main>
  );
}
