import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Travel Insurance", href: "/private-clients/travel-insurance" },
  { label: "Private Car Insurance", href: "/private-clients/private-car-insurance" },
  { label: "Health Insurance", href: "/private-clients/health-insurance" },
  { label: "Term Life Insurance", href: "/private-clients/term-life-insurance" },
];
const links = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Insights", href: "/blogs" },
  { label: "Career", href: "/career" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Code Of Conduct", href: "/pdf/code_of_conduct.pdf", newTab: true },
  { label: "Grievance Redressal Policy", href: "/grievance-redressal-policy" },
];

function FooterLinkList({ title, items }) {
  return <section><h2 className="mb-[18px] font-bold leading-7">{title}</h2><ul className="space-y-3 text-sm leading-6">{items.map((item) => { const label = typeof item === "string" ? item : item.label; const href = typeof item === "string" ? "#" : item.href; return <li key={label}><Link href={href}>{label}</Link></li>; })}</ul></section>;
}

function ContactRow({ icon, children }) {
  return <div className="flex items-start gap-3"><Image src={icon} alt="" width={20} height={20} aria-hidden className="mt-0.5 size-5 shrink-0" /><div>{children}</div></div>;
}

export default function Footer() {
  return (
    <footer className="bg-[#2c2f71] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 xl:px-20 xl:py-[60px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[276px_176px_187px_343px] lg:justify-between">
          <section className="text-sm leading-6">
            <h2 className="mb-[18px] font-bold text-base leading-7">Contact Details</h2>
            <div className="space-y-4">
              <ContactRow icon="/assets/shared/map-pin.svg"><address className="not-italic">Technopolis Knowledge Park, Ground Floor, Unit No. 15 &amp;16, Mahakali Caves Road, Andheri East, Mumbai - 400093</address><p className="mt-2">Delhi&nbsp; | &nbsp;Surat&nbsp; | &nbsp;Pune&nbsp; |</p></ContactRow>
              <ContactRow icon="/assets/shared/phone.svg"><a href="tel:+919876543210">+91 9876543210</a></ContactRow>
              <ContactRow icon="/assets/shared/mail.svg"><a href="mailto:email@equirusraghnall.com">email@equirusraghnall.com</a></ContactRow>
            </div>
            <h2 className="mb-[18px] mt-5 font-bold text-base leading-7">Follow Us</h2>
            <div className="flex gap-2">{[
              ["facebook.svg", "Facebook", "https://www.facebook.com/Raghnallinsurance/"],
              ["instagram.svg", "Instagram", "https://www.instagram.com/equirus_raghnall/"],
              ["linkedin.svg", "LinkedIn", "https://in.linkedin.com/company/equirusraghnall"],
            ].map(([icon, label, href]) => <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} key={label} className="grid size-6 place-items-center"><Image src={`/assets/shared/${icon}`} alt="" width={24} height={24} aria-hidden /></a>)}</div>
          </section>

          <div className="space-y-[18px]"><FooterLinkList title="Services" items={services} /><FooterLinkList title="Links" items={links} /></div>

          <section className="text-sm leading-6">
            <h2 className="mb-[18px] font-bold text-base leading-7">License Info</h2>
            <dl className="space-y-3">
              <div><dt className="font-semibold">IRDA License Code :</dt><dd>IRDA/DB-599/14</dd></div>
              <div><dt className="font-semibold">IRDA License Number :</dt><dd>556</dd></div>
              <div><dt className="font-semibold">Category :</dt><dd>Composite Broker<br />(Direct &amp; Reinsurance)</dd></div>
              <div><dt className="font-semibold">CIN :</dt><dd>U74900MH2014PTC254164</dd></div>
            </dl>
          </section>

          <section className="space-y-2 lg:pt-[13px]">
            <Image src="/assets/shared/ibai-logo.png" alt="Insurance Brokers Association of India" width={343} height={84} className="h-auto w-full" />
            <Image src="/assets/shared/office-map.png" alt="Map of Equirus Raghnall office locations across India" width={343} height={328} className="h-auto w-full" />
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/60 pt-4 text-sm leading-6 lg:mt-[27px] lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Legal" className="flex flex-wrap gap-y-2">{legalLinks.map((item, index) => <Link key={item.label} href={item.href} target={item.newTab ? "_blank" : undefined} rel={item.newTab ? "noopener noreferrer" : undefined} className={index ? "ml-3 border-l border-white/70 pl-3" : undefined}>{item.label}</Link>)}</nav>
          <p className="flex items-center gap-2 whitespace-normal lg:whitespace-nowrap"><Image src="/assets/shared/copyright.svg" alt="" width={20} height={20} aria-hidden className="size-5" />2026 Equirus Raghnall Insurance All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
