import Image from "next/image";
import { commercialMenu } from "@/data/commercialServices";
import { privateClientsMenu } from "@/data/privateClientServices";
import { reinsuranceMenu } from "@/data/reinsuranceServices";
import ContactForm from "./ContactForm";
import OfficePresenceMap from "./OfficePresenceMap";

export const metadata = {
  title: "Contact Us | Equirus Raghnall",
  description: "Contact Equirus Raghnall for insurance and risk solutions.",
};

function ContactIcon({ type }) {
  const paths = {
    location: <><path d="M12 21s7-5.2 7-12A7 7 0 1 0 5 9c0 6.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></>,
    mail: <><rect x="4" y="6" width="16" height="12" rx="1"/><path d="m5 7 7 6 7-6"/></>,
    phone: <path d="M7.2 4.5 9 8 7.6 9.5c1.5 3 3.8 5.3 6.9 6.8L16 15l3.5 1.8-.5 3c-.1.7-.8 1.2-1.5 1.2C9.5 21 3 14.5 3 6.5 3 5.8 3.5 5.1 4.2 5l3-.5Z"/>,
    user: <><circle cx="12" cy="8" r="3"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></>,
  };

  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#0A4E08] text-[#0A4E08]">
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
    </span>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <ContactIcon type={icon} />
      <div>
        <h2 className="text-base font-semibold text-[#191919] sm:text-lg">{title}</h2>
        <div className="mt-2 text-sm leading-6 text-[#666] sm:text-base sm:leading-7">{children}</div>
      </div>
    </div>
  );
}

const contactServiceGroups = [
  ...privateClientsMenu.map((section) => ({ ...section, segment: "Private Clients" })),
  ...commercialMenu.map((section) => ({ ...section, segment: "Commercial" })),
  ...reinsuranceMenu.map((section) => ({ ...section, segment: "Reinsurance" })),
].filter((section) => section.links.length > 0);

export default function ContactUsPage() {
  return (
    <>
      
      <main className="overflow-x-clip bg-white">
        <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:py-20 xl:px-20">
          <p className="text-sm font-medium uppercase tracking-wide text-[#0A4E08] sm:text-base">Contact Us</p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <h1 className="text-[clamp(24px,7vw,30px)] font-semibold tracking-tight text-[#171717] md:text-4xl">Let&apos;s Start the Conversation</h1>
              <div className="mt-10 space-y-7">
                <ContactItem icon="location" title="Registered & Corporate Office">
                  <address className="not-italic">Equirus Raghnall Insurance Broking Pvt Ltd<br />Technopolis Knowledge Park, Ground Floor, Unit No. 15 &amp;16, Mahakali Caves Road, Andheri East, Mumbai – 400093</address>
                </ContactItem>
                <ContactItem icon="mail" title="Email"><a href="mailto:support@equirusraghnall.com">support@equirusraghnall.com</a></ContactItem>
                <ContactItem icon="phone" title="Phone & What's app"><a href="tel:+917045161616">+91-7045161616</a></ContactItem>
                <ContactItem icon="user" title="Follow Us"><div className="flex flex-wrap gap-2 uppercase"><a href="https://www.instagram.com/equirus_raghnall/" target="_blank" rel="noopener noreferrer">Instagram</a><span>|</span><a href="https://in.linkedin.com/company/equirusraghnall" target="_blank" rel="noopener noreferrer">LinkedIn</a><span>|</span><a href="https://www.facebook.com/Raghnallinsurance/" target="_blank" rel="noopener noreferrer">Facebook</a></div></ContactItem>
              </div>
            </div>

            <ContactForm serviceGroups={contactServiceGroups} />
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-10 xl:px-12">
          <div className="rounded-xl bg-[#0A4E08] px-6 py-12 text-white md:px-16 md:py-16">
            <div className="text-center"><p className="text-sm font-medium uppercase tracking-wide text-white/80">Visit Us</p><h2 className="mt-4 text-[clamp(24px,7vw,30px)] font-semibold md:text-3xl">Serving Beyond Our Headquarters</h2></div>
            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-9 lg:grid-cols-[1.15fr_1fr]">
              <div className="overflow-hidden bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5582125077754!2d72.82624218885498!3d18.995108699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8d6c5976d1%3A0x591608595f1defa5!2sEquirus%20Insurance%20Broking%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1786446289885!5m2!1sen!2sin"
                  title="Equirus Insurance Broking office location"
                  className="h-[310px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="border-white/50 lg:border-l lg:pl-8">
                <h3 className="text-xl font-semibold sm:text-2xl">Gift City</h3>
                <p className="mt-5 text-base font-semibold sm:text-lg">Equirus Securities Pvt. Ltd</p>
                <div className="mt-4 flex items-start gap-3">
                  <Image src="/assets/shared/map-pin.svg" alt="" width={20} height={20} aria-hidden className="mt-1 size-5 shrink-0" />
                  <address className="text-sm not-italic leading-6 text-white/90 sm:text-base sm:leading-7">Unit no. GA–27, Seat no. 1–6, Ground Floor, Pragya Accelerator, Block–15 T, Road 11, Zone 1, Processing area, GIFT SEZ, GIFT City, Gandhinagar 382355</address>
                </div>
                <p className="mt-5 flex items-center gap-3">
                  <Image src="/assets/shared/phone.svg" alt="" width={20} height={20} aria-hidden className="size-5 shrink-0" />
                  <a href="tel:+912243320700">+91-22-4332-0700</a>
                </p>
                <p className="mt-3 flex items-center gap-3">
                  <Image src="/assets/shared/mail.svg" alt="" width={20} height={20} aria-hidden className="size-5 shrink-0" />
                  <a href="mailto:wealth@equiruswealth.com">wealth@equiruswealth.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 pb-8 pt-4 text-center md:px-10 md:pb-20 xl:px-20">
          <p className="text-sm font-medium uppercase tracking-wide text-[#0A4E08] sm:text-base">Our Presence</p>
          <h2 className="mt-4 text-[clamp(24px,7vw,30px)] font-semibold tracking-tight md:text-4xl">Across India, Always Within Reach</h2>
          <OfficePresenceMap />
        </section>
      </main>
      
    </>
  );
}
