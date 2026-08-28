
export const metadata = {
  title: "Grievance Redressal Policy | Equirus Raghnall",
  description: "Grievance Redressal Policy for Equirus Raghnall.",
};

const principles = [
  "Customers are treated fairly at all times.",
  "Complaints raised by the customers/clients are dealt with courtesy and on time.",
  "The company employees must work in good faith and without prejudice to the interest of the customers.",
];

const processSteps = [
  "All grievances will be given acknowledgement receipt within 24 hours of receipt.",
  "All couriers and fax will be answered/ acknowledged within 7 working days.",
  "All grievances from walk-in customers will be acknowledged right away.",
  "Based on the type of grievance the company shall exercise all efforts to address the same including intimation to the respective insurer for quick Redressal..",
];

export default function GrievanceRedressalPolicyPage() {
  return (
    <>
      
      <main className="bg-[#F8F9FF] py-16 md:py-20">
        <article className="mx-auto max-w-[960px] px-5 md:px-10">
          <div className="rounded-2xl bg-white px-6 py-10 shadow-[0_8px_30px_rgba(25,34,80,0.05)] md:px-12 md:py-14">
            <h1 className="text-center text-[clamp(26px,7vw,30px)] font-semibold tracking-[-0.025em] text-[#111111]">Grievance Redressal Policy</h1>
            <div className="mt-10 space-y-9 text-base leading-8 text-[#555555]">
              <section>
                <h2 className="text-xl font-semibold text-[#111111]">Objectives:</h2>
                <div className="mt-4 space-y-4">
                  <p>This document aims at minimizing instances of customer complaints and grievances through proper service delivery and review mechanism to ensure prompt redressal of customer complaints and grievances.</p>
                  <p>The review is aimed at helping in identification of shortcomings in service delivery, if any and compliance with the stipulations of IRDA (Insurance Brokers) Regulations, 2002.</p>
                  <p className="font-semibold text-[#111111]">The Company&apos;s policy on Grievance Redressal follows the undernoted principles:</p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-[#0A4E08]">
                    {principles.map((principle) => <li key={principle}>{principle}</li>)}
                  </ul>
                  <p>In order to make Company&apos;s Grievance Redressal mechanism more meaningful and effective, a system/process has been build towards such end. Such system would ensure that the Redressal sought is just and fair and is permissible within the given framework of rules and regulation. The policy document would be made available at all offices of the company. The concerned employees in the respective office shall be made aware about the compliance/ grievance handling process.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#111111]">Process:</h2>
                <div className="mt-4 space-y-4">
                  <p>If you have a grievance that you wish to redress, you may contact us with the details of your grievance through:</p>
                  <div className="rounded-xl bg-[#F8F9FF] p-5">
                    <p><strong className="text-[#111111]">Name:</strong>  M.Javed Ansari</p>
                    <p><strong className="text-[#111111]">Email:</strong>  <a className="text-[#0A4E08] hover:underline" href="mailto:javedansari@equirusraghnall.com">javedansari@equirusraghnall.com</a></p>
                    <p><strong className="text-[#111111]">Post/Courier:</strong> Technopolis Knowledge Park, Ground Floor, Unit No. 15 &amp;16, Mahakali Caves Road, Andheri East, Mumbai - 400093</p>
                  </div>
                  <p className="font-semibold text-[#111111]">The process followed for addressing the grievance will be:</p>
                  <ul className="list-disc space-y-2 pl-6 marker:text-[#0A4E08]">
                    {processSteps.map((step) => <li key={step}>{step}</li>)}
                  </ul>
                  <p>In case there is no reply to your grievance in 10 working days, the customer/client will have the right to escalate the matter to the Principal Officer of the company directly at <a className="text-[#0A4E08] hover:underline" href="mailto:amitgoel@equirusraghnall.com">amitgoel@equirusraghnall.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      
    </>
  );
}
