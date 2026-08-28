
export const metadata = {
  title: "Disclaimer | Equirus Raghnall",
  description:
    "Website disclaimer for Equirus Raghnall Insurance Broking Pvt Ltd.",
};

const paragraphs = [
  "To the extent permitted by law, Equirus Raghnall Insurance Broking Pvt Ltd (ERIB) will not be liable to any person or organisation under any circumstances for any indirect, consequential, incidental or special damages arising in any way out of your use of this site.",
  "This includes any act or omission in reliance on the information on this site or any linked third-party site.",
  "This website does not attempt to provide full details of all policies offered in the insurance market. Please refer to the relevant policy wording. If it is not available on this website, it can be made available on request.",
  "Some products are not available in certain areas. Please contact ERIB for further clarification.",
  "Access to and use of this site is governed by the applicable laws in India. It is a condition of your access and use that you and ERIB submit to the exclusive jurisdiction of the courts in connection with this site.",
];

export default function DisclaimerPage() {
  return (
    <>
      
      <main className="bg-[#F8F9FF] py-16 md:py-20">
        <section className="mx-auto max-w-[960px] px-5 md:px-10">
          <div className="rounded-2xl bg-white px-6 py-10 shadow-[0_8px_30px_rgba(25,34,80,0.05)] md:px-12 md:py-14">
            <h1 className="mt-3 text-center text-[clamp(26px,7vw,30px)] font-semibold tracking-[-0.025em] text-[#111111]">
              Disclaimer
            </h1>
            <div className="mt-8 space-y-6 text-base leading-8 text-[#555555]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
