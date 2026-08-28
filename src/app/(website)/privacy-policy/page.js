
export const metadata = { title: "Privacy Policy | Equirus Raghnall", description: "Privacy Policy for Equirus Raghnall." };

const collectionMethods = [
  "Request information from Raghnall’s website.", "Use online tools and calculators (including voice enabled applications/assistance)", "Apply online for products", "Subscribe to online services", "Complete an online form", "Conduct transactions online", "Apply for a job online", "If you contact us with a complaint or query.", "When you engage with us over social media.",
];

const informationUses = [
  "By using this website and on requesting quotations or consultations therein, you hereby authorize us/our partners to contact you via calls, mails and/or text messages on the contact details so provided, to furnish you with information with regards to insurance products offered by our partners and other services of Raghnall. This authorization shall be licit for the mentioned purposes irrespective of whether you are registered with the NDNC registry.",
  "Allow you to access specific account information.",
  "Providing customisation: We may use the information provided by you to customise your visit to the website by displaying appropriate content at our judgment and discretion.",
  "To send you information about products and services offered by Raghnall and its affiliates, to contact you for policy reminder notices, claims processing and to keep you updated on the insurance sector and Raghnall through our newsletters. In case you do not wish to receive such information, you may unsubscribe through the facility in the email message you receive",
  "Determine eligibility and process applications for products and services;", "Understand and assess clients’ ongoing needs and offer products and services to meet those needs;", "Conduct data analysis;", "Execute monitoring and training;", "Develop new services;", "Market products and services (subject to appropriate consent); and", "Conduct processing necessary to fulfill other contractual obligations for the individual.",
];

const disclosurePurposes = ["Confirm to any statutory or legal requirements or comply with legal process or judicial orders", "Protect, enforce and defend our rights or property.", "Protect our interests"];

function PolicySection({ title, children }) {
  return <section><h2 className="text-xl font-semibold uppercase text-[#111111]">{title}</h2><div className="mt-4 space-y-4">{children}</div></section>;
}

function PolicyList({ items }) {
  return <ul className="list-disc space-y-2 pl-6 marker:text-[#0A4E08]">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function PrivacyPolicyPage() {
  return (
    <><main className="bg-[#F8F9FF] py-16 md:py-20"><article className="mx-auto max-w-[960px] px-5 md:px-10"><div className="rounded-2xl bg-white px-6 py-10 shadow-[0_8px_30px_rgba(25,34,80,0.05)] md:px-12 md:py-14"><h1 className="text-center text-[clamp(26px,7vw,30px)] font-semibold tracking-[-0.025em] text-[#111111]">PRIVACY POLICY</h1><div className="mt-9 space-y-9 text-base leading-8 text-[#555555]">
      <div className="space-y-4">
        <p>We value you as a customer and are committed to protecting your privacy. This commitment reflects the value we place on earning and keeping the trust of our customers, business partners, and others who share their personal information with us.</p>
        <p>In the process of operating the website, we may become aware of information relating to you, including information that is confidential in nature. We are strongly committed to protecting your privacy online and have taken steps to protect such information. To aid us in protecting your privacy, you should maintain secrecy of your login ID and password, if any, provided to you in connection with your account with <a className="text-[#0A4E08] hover:underline" href="https://www.raghnall.co.in/">https://www.raghnall.co.in/</a> .</p>
      </div>

      <PolicySection title="WHAT DOES THIS PRIVACY STATEMENT DO?">
        <p>This Privacy Statement (“Statement”) explains Raghnall Insurance Broking and Risk Management Pvt. Ltd’s (hereinafter referred as “Raghnall”) information processing practices. It applies to any personal information you provide to Raghnall and any personal information we collect from other sources. This Statement is a statement of our practices and of your rights regarding your personal information. This is not a contractual document, anThis Privacy Statement (“Statement”) explains Raghnall Insurance Broking and Risk Management Pvt. Ltd’s (hereinafter referred as “Raghnall”) information processing practices. It applies to any personal information you provide to Raghnall and any personal information we collect from other sources. This Statement is a statement of our practices and of your rights regarding your personal information. This is not a contractual document, and it does not create any rights or obligations on either party, beyond those which already exist under data protection laws.d it does not create any rights or obligations on either party, beyond those which already exist under data protection laws.</p>
        <p>This Statement does not apply to your use of a third-party site linked to on this website</p>
      </PolicySection>

      <PolicySection title="COLLECTING YOUR PERSONAL INFORMATION">
        <p className="font-semibold text-[#111111]"> Raghnall may collect the information you provide when you:</p>
        <PolicyList items={collectionMethods} />
        <p>We collect contact and business information such as your name, address, email address, risk details and other details to offer you appropriate solutions and services. If you avail services from us, we will collect financial information for the purpose of payment towards the services. We store this information for our records and to verify authenticity of the same.</p>
        <p>If you choose to use our referral service to tell a friend about our site, we will ask you for your friend’s name and email address. Your friend will automatically be sent a one-time email inviting him or her to visit the website. We will not collect any sensitive information through our website unless this is required. Sensitive information includes a number of types of data relating to: race or ethnic origin; political opinions; religious or other similar beliefs; trade union membership; physical or mental health; sexual life or criminal record. We suggest that you do not provide sensitive information of this nature unless we specifically request this information.</p>
        <p>If you provide us with sensitive personal information, you understand and give your explicit consent that we may collect, use and disclose this information to appropriate third parties for the purposes described in this Statement. If you provide personal information about other individuals such as employees or dependents, you must obtain their consent prior to your disclosure to us.</p>
      </PolicySection>

      <PolicySection title="USE OF YOUR PERSONAL INFORMATION">
        <p className="font-semibold text-[#111111]">We will use the information primarily for the following purposes:</p>
        <PolicyList items={informationUses} />
        <p>If we wish to use your personal information for a purpose which is not compatible with the purpose for which it was collected for, we will request your consent. In all cases, we balance our legal use of your personal information with your interests, rights, and freedoms in accordance with applicable laws and regulations to make sure that your personal information is not subject to unnecessary risk.</p>
      </PolicySection>

      <PolicySection title="LOG FILES">
        <p>{"As is true of most websites, we gather certain information automatically and store it in log files. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data."}</p>
        <p>{"We use this information, which does not identify individual users, to analyse trends, to administer the site, to track user movements around the site and to gather demographic information about our user base as a whole."}</p>
        <p>{"IP addresses are tied to personally identifiable information to help us customise your visit to our website so that you like the experience. However, we would like to reiterate that this information is not shared with third parties, for their promotional purposes, except as provided under Disclosure of Information clause."}</p>
        <p>{"We store a cookie on your computer when you visit our website. A cookie is a small text file that is stored on a user's computer for record-keeping purposes. The primary purpose of these cookies is to analyse how users move within our website. Our cookies let you view customised pages while transacting with us. Our cookies do not have confidential or personally identifiable information."}</p>
        <p>{"Since we use session ID cookies, they do not track a user after leaving our Website. A session ID cookie expires when you close the browser. It is required if you want to buy a policy online from us. We also use analytic tools to track visitor traffic on website."}</p>
        <p>{"Some of our business partners such as chat support use cookies on our site. We have no access to or control over these cookies. This privacy statement covers the use of cookies by https://www.raghnall.co.in/ only and does not cover the use of cookies by any third parties."}</p>
      </PolicySection>

      <PolicySection title="DISCLOSURE OF INFORMATION">
        <p className="font-semibold text-[#111111]">We will use the information primarily for the following purposes:</p>
        <PolicyList items={disclosurePurposes} />
        <p>We may also use your personal information for the purposes of providing you with any services and service-related activities. In this regard, it may be necessary to disclose your personal information to one or more service providers (For example, Third Party administrators for cashless hospitalisation, National Do Not Call Registry for filtering before call related activities) of Raghnall providing services linked to Insurance sector to fulfill your requests.</p>
        <p>We obtain your permission to post testimonials which may include your personal information prior to posting on this website. If you would like your testimonial removed, please contact us at: consult@raghnall.co.in We use service providers to fulfil some of the service requests on this site including live chat, third party administrators for cashless claims, health checkup, consultancy, wellness services and surveyors for property inspection. We do not share or sell your personal information to third parties. These service providers are not allowed to use your information for their promotional purposes</p>
      </PolicySection>

      <PolicySection title="UPDATING YOUR PERSONAL INFORMATION">
        <p>If you need to update your personal information or there is any change in the personal information, or if you no longer desire our service, you may update or delete it by making the change on our registration page or by emailing our website team at consult@raghnall.co.in or by contacting us by telephone or postal mail at the contact information listed below.</p>
      </PolicySection>

      <PolicySection title="SECURITY">
        <p>The security of your personal information is important to us and we have implemented reasonable physical, technical and administrative security standards to protect personal information from loss, misuse, alteration or destruction. We protect your personal information against unauthorized access, use or disclosure, using security technologies and procedures, such as encryption and limited access. Only authorized individuals access your personal information, and they receive training about the importance of protecting personal information.</p>
        <p>Our service providers and agents are contractually bound to maintain the confidentiality of personal information and may not use the information for any unauthorised purpose.</p>
      </PolicySection>

      <PolicySection title="LINKS TO OTHER SITES">
        <p>The website may contain links to other sites and/or portals on the internet. While we intend to link only to such sites that share our high standards and respect for privacy, we are not responsible for the content or the privacy practices employed by such other sites.</p>
        <p>Please be aware that websites that have links from our site may collect personally identifiable information about you. This privacy statement does not cover the information and disclosure practices of those websites. When you leave our site, please read the privacy statements of each and every Website that collects personally identifiable information.</p>
      </PolicySection>

      <PolicySection title="CHANGES IN THIS PRIVACY STATEMENT">
        <p>We reserve the right to modify this privacy statement at any time by posting the same on the website, so please review it frequently on the website. If we materially change our privacy practices, we will notify you by sending an email or by posting a notice on our website.</p>
      </PolicySection>

      <PolicySection title="BUSINESS TRANSITIONS">
        <p>In the event Raghnall goes through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, your personally identifiable information will likely be among the assets transferred. You will be notified [via email] [prominent notice on our website for 30 days] of any such change in ownership or control of your personal information.</p>
      </PolicySection>

      <PolicySection title="CONTACT US">
        <p>If you have any questions, would like further information about our privacy and information handling practices, would like to discuss opt-outs or withdrawing consent, or would like to make a complaint about a breach of the Act or this Statement, please contact us at:</p>
        <p><strong className="text-[#111111]">Email:</strong> <a className="text-[#0A4E08] hover:underline" href="mailto:consult@raghnall.co.in">consult@raghnall.co.in</a></p>
      </PolicySection>
    </div></div></article></main></>
  );
}
