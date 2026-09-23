"use client";

import { ChevronRight, Scale } from "lucide-react";

export default function TermsContent() {
  const sections = [
    { id: "intro", label: "1. Introduction and Acceptance" },
    { id: "use", label: "2. Definitions" },
    { id: "disclaimer", label: "3. Nature of Services" },
    { id: "responsibilities", label: "4. Eligibility" },
    { id: "ip", label: "5. Enquiry, Booking, and Allotment" },
    { id: "liability", label: "6. Pricing, Payment Terms, and Taxes" },
    { id: "links", label: "7. Title, Due Diligence, and Documentation" },
    { id: "termination", label: "8. Possession, Development, and Delay" },
    { id: "law", label: "9. Cancellation, Refund, and Forfeiture" },
    { id: "law10", label: "10. Force Majeure" },
    { id: "law11", label: "11. Marketing Material and Disclaimer" },
    { id: "law12", label: "12. Customer Obligations" },
    { id: "law13", label: "13. Intellectual Property" },
    { id: "law14", label: "14. Limitation of Liability" },
    { id: "law15", label: "15. Indemnification" },
    { id: "law16", label: "16. Confidentiality" },
    { id: "law17", label: "17. Third-Party Services and Links" },
    { id: "law18", label: "18. Amendment of Terms" },
    { id: "law19", label: "19. Dispute Resolution" },
    { id: "law20", label: "20. Governing Law and Jurisdiction" },
    { id: "law21", label: "21. Severability" },
    { id: "law22", label: "22. Waiver" },
    { id: "law23", label: "23. Entire Agreement" },
    { id: "law24", label: "24. Contact Us" },
  ];

  const handleScroll = id => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 70; // header height
      const extraOffset = 20; // additional padding
      const totalOffset = headerHeight + extraOffset;

      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-label="Terms of Service details">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Sticky Side navigation (3/12) */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-20 h-fit">
          <div className="flex flex-col gap-4.5 bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[24px] p-6 shadow-sm">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-neutral-400 flex items-center gap-1.5">
              <Scale size={13} className="text-[#2C578B]" /> Document Navigation
            </span>

            <nav className="flex flex-col gap-2" aria-label="Terms clauses navigation">
              {sections.map(sec => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleScroll(sec.id)}
                  className="group flex items-center justify-between text-left px-3.5 py-2.5 rounded-lg font-sans text-[13px] font-medium text-[#404040] hover:bg-[#2C578B]/5 hover:text-[#2C578B] transition-all cursor-pointer whitespace-normal"
                >
                  <span className="leading-snug">{sec.label}</span>
                  <ChevronRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#2C578B] flex-shrink-0 ml-2"
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Column: Detailed copy (9/12) */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-10 font-sans text-[15px] text-[#404040] leading-[26px] font-normal">
          {/* Section 1: Introduction */}
          <div
            id="intro"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              1. Introduction and Acceptance
            </h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the
              website, applications, offices, sales offices, marketing materials, and services of
              Krishna Land Developers Pvt. Ltd. (&quot;Company&quot;, &quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;), a company incorporated under the laws of India and
              having its registered office at Ahmedabad, Gujarat, India, engaged, inter alia, in the
              business of land development for residential, commercial, or mixed-use purposes,
              development and marketing of plotting schemes, and sale, purchase, and trading of land
              and land-related assets.
            </p>
            <p>
              By accessing our website/application, submitting an enquiry, booking a plot/unit,
              signing any agreement with us, or otherwise availing our services, you
              (&quot;Customer&quot;, &quot;User&quot;, &quot;you&quot;) agree to be bound by these
              Terms, our Privacy Policy, and any project-specific or transaction-specific agreement
              executed between you and the Company. If you do not agree with these Terms, please do
              not use our website or avail our services.
            </p>
            <p>
              In the event of any conflict between these Terms and a specific, duly executed
              agreement (such as an Agreement to Sell, Sale Deed, Allotment Letter, or Booking Form)
              between you and the Company for a particular transaction, the terms of such specific
              agreement shall prevail to the extent of the conflict.
            </p>
          </div>

          {/* Section 2: Use of Website */}
          <div
            id="use"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              2. Definitions
            </h2>
            <p>
              You agree to use this website only for lawful purposes related to searching for real
              estate land parcels, submitting inquiries, or consulting advisory teams. Specifically,
              you agree not to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>
                &quot;Project&quot; means any land development, plotting scheme, layout, township,
                or real estate project undertaken by the Company, whether for residential,
                commercial, or mixed use.
              </li>
              <li>
                &quot;Booking&quot; means a provisional reservation of a plot/unit made by the
                Customer against payment of booking/token amount, subject to these Terms.
              </li>
              <li>
                &quot;Agreement&quot; means the Agreement for Sale, Sale Deed, Allotment Letter, or
                any other definitive document executed between the Company and the Customer for a
                specific plot/unit.
              </li>
              <li>
                &quot;RERA&quot; means the Real Estate (Regulation and Development) Act, 2016 and
                the rules and regulations framed thereunder, including by the Gujarat Real Estate
                Regulatory Authority or the relevant State authority.
              </li>
              <li>
                &quot;Applicable Law&quot; means all applicable Indian statutes, rules, regulations,
                notifications, circulars, and orders, as amended from time to time, and, where
                relevant to overseas Customers, any applicable foreign exchange and cross-border
                transaction regulations, including FEMA and RBI guidelines.
              </li>
            </ul>
          </div>

          {/* Section 3: Property Information Disclaimer */}
          <div
            id="disclaimer"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              3. Nature of Services
            </h2>
            <p>
              The Company is engaged in land development, including but not limited to development
              of residential, commercial, or mixed-use projects, plotting schemes/layouts, and
              trading (purchase and sale) of land parcels. The Company may act as a developer,
              seller, or facilitator/intermediary in a given transaction, and the specific capacity
              in which the Company is acting shall be disclosed in the relevant Booking
              Form/Agreement for that transaction.
            </p>
            <p className="font-medium text-[#0B2545]">
              All information regarding a Project, including layout plans, amenities,
              specifications, images, renders, brochures, and marketing material, is indicative and
              intended to give a general idea of the Project. Such material does not constitute an
              offer or warranty and is subject to change as per approvals from competent
              authorities, design requirements, or operational necessities. The final specifications
              shall be as set out in the Agreement and applicable RERA registration/disclosures for
              the Project, where such registration is required under law.
            </p>
          </div>

          {/* Section 4: User Responsibilities */}
          <div
            id="responsibilities"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              4. Eligibility
            </h2>
            <p>
              The services and Bookings offered by the Company are available only to individuals who
              are 18 years of age or older and who are legally competent to enter into a binding
              contract under the Indian Contract Act, 1872, or the applicable law of their
              jurisdiction of residence. Non-Resident Indians (NRIs), Overseas Citizens of India
              (OCIs), and foreign nationals must ensure their own compliance with FEMA, RBI
              guidelines, and any other applicable foreign investment/ownership regulations prior to
              booking, and the Company may require additional documentation from such Customers.
            </p>
          </div>

          {/* Section 5: Intellectual Property */}
          <div
            id="ip"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              5. Enquiry, Booking, and Allotment
            </h2>
            <p>
              Any enquiry, expression of interest, or Booking made by a customer is subject to
              verification, availability, and acceptance by the Company. The Company reserves the
              right to accept or reject any Booking at its sole discretion, including where
              documentation or payment is incomplete, or where the Booking does not meet the
              Company&#39;s internal policies.
            </p>
            <p>
              A Booking shall be provisional until the Customer executes the definitive Agreement
              and makes payment as specified therein. No right, title, or interest in any plot/unit
              shall be deemed to be created in favour of the Customer merely upon payment of a
              token/booking amount, until the execution of the appropriate Agreement and, where
              applicable, registration of the conveyance/sale deed in accordance with law.
            </p>
            <p>
              The Company reserves the right, prior to execution of the Agreement, to modify the
              layout, plot numbering, dimensions, or allotment of any plot/unit due to statutory
              requirements, approvals from competent authorities, or bona fide operational reasons,
              and shall inform the Customer of any such material change.
            </p>
          </div>

          {/* Section 6: Limitation of Liability */}
          <div
            id="liability"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              6. Pricing, Payment Terms, and Taxes
            </h2>
            <p>
              The price of a plot/unit, payment schedule, and mode of payment shall be as set out in
              the Booking Form/Agreement. All prices are exclusive of applicable taxes, duties,
              cesses, stamp duty, registration charges, GST, and other statutory levies, unless
              expressly stated otherwise, and such amounts shall be payable by the Customer in
              addition to the base price.
            </p>
            <p>
              Timely payment of all instalments as per the agreed schedule is the essence of the
              Agreement. Delay in payment may attract interest/late payment charges as specified in
              the Agreement, and continued default may result in cancellation of the
              Booking/Agreement and forfeiture of amounts as set out in Clause 9 below.
            </p>
            <p className="font-semibold text-red-600">
              All payments shall be made only through banking channels (cheque, demand draft,
              NEFT/RTGS, or other recognised electronic mode) in the name of the Company or such
              account as communicated in writing by the Company. The Company shall not be
              responsible for payments made in cash or to any unauthorised person/account.
            </p>
          </div>

          {/* Section 7: Third-Party Links */}
          <div
            id="links"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              7. Title, Due Diligence, and Documentation
            </h2>
            <p>
              The Company shall provide such title-related documents and disclosures as are required
              under Applicable Law, including under RERA, for the relevant Project. Customers are
              strongly advised and encouraged to independently verify title, encumbrance status, and
              statutory approvals relating to the land/Project, including through their own legal
              counsel, prior to making any payment or executing any Agreement.
            </p>
            <p>
              The Company shall use reasonable efforts to ensure that all necessary approvals,
              permissions, and registrations (including RERA registration, where applicable) for a
              Project are obtained from the competent authorities prior to marketing/sale, to the
              extent required by Applicable Law. Details of such approvals/registrations, where
              applicable, shall be made available to the Customer upon request or as required under
              RERA disclosure norms.
            </p>
          </div>

          {/* Section 8: Termination */}
          <div
            id="termination"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              8. Possession, Development, and Delay
            </h2>
            <p>
              The Company shall endeavour to complete development works (such as roads, common
              infrastructure, and amenities, as applicable to the Project) and hand over possession
              within the timeline specified in the Agreement, subject to receipt of timely payments
              from the Customer and subject to Force Majeure events described below.
            </p>
            <p>
              Any delay attributable to Force Majeure events, orders of any court/authority, delay
              in grant of statutory approvals, or delay caused by the Customer&#39;s own default
              (including delay in payment or documentation) shall not be construed as a delay
              attributable to the Company, and the Customer shall not be entitled to claim
              compensation for such period.
            </p>
          </div>

          {/* Section 9: Governing Law */}
          <div id="law" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              9. Cancellation, Refund, and Forfeiture
            </h2>
            <p>
              A Customer may seek cancellation of a Booking/Agreement by submitting a written
              request to the Company. Upon such cancellation:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>
                If cancellation is sought by the Customer without any default on the part of the
                Company, the Company may deduct the booking amount and/or such reasonable percentage
                of the amounts paid towards administrative, marketing, and processing costs, as
                specified in the Agreement, and refund the balance amount within the timeline
                specified therein.
              </li>
              <li>
                If cancellation is due to the Customer&#39;s default in payment despite reasonable
                notice, the Company may cancel the Booking/Agreement and forfeit amounts to the
                extent permitted under the Agreement and Applicable Law.
              </li>
              <li>
                Refunds, where due, shall be processed only to the original payment source/bank
                account of the Customer, subject to applicable statutory deductions (such as TDS),
                within the timeframe specified in the Agreement.
              </li>
            </ul>
            <p>
              Nothing in this Clause shall be construed to override any specific and more favourable
              cancellation/refund terms agreed in the Agreement or mandated under RERA for the
              Project.
            </p>
          </div>

          {/* Section 10: Governing Law */}
          <div id="law10" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              10. Force Majeure
            </h2>
            <p>
              The Company shall not be liable for any failure or delay in performance of its
              obligations due to events beyond its reasonable control, including but not limited to
              acts of God, natural calamities, fire, flood, earthquake, epidemic/pandemic, war,
              civil unrest, strikes, governmental action or inaction, non-availability of essential
              materials, court orders/injunctions, or any change in law/policy affecting the
              Project.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law11" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              11. Marketing Material and Disclaimer
            </h2>
            <p>
              Images, artist&#39;s impressions, 3D renders, sample layouts, and models used in
              marketing the Project are for illustrative purposes only and may not represent the
              exact specifications, scale, or final appearance of the developed Project. The
              Customer acknowledges that final measurements, specifications, and layout shall be as
              per the Agreement and applicable approved plans.
            </p>
          </div>

          {/* Section 12: Governing Law */}
          <div id="law12" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              12. Customer Obligations
            </h2>
            <p>The Customer agrees to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>
                Provide true, accurate, and complete information and documentation to the Company;
              </li>
              <li>
                Provide true, accurate, and complete information and documentation to the Company;
              </li>
              <li>
                Comply with all applicable laws, including those relating to registration, stamp
                duty, and taxation, in connection with the transaction;
              </li>
              <li>Not use the plot/unit for any illegal, unauthorised, or unlawful purpose; and</li>
              <li>
                Comply with the layout rules, common area regulations, and any association/society
                rules applicable to the Project, if and when constituted.
              </li>
            </ul>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law13" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              13. Intellectual Property
            </h2>
            <p>
              All content on the Company&#39;s website, brochures, and marketing materials,
              including logos, trademarks, project names, layouts, designs, images, and text, are
              the intellectual property of the Company or its licensors and may not be copied,
              reproduced, distributed, or used without the Company&#39;s prior written consent.
            </p>
          </div>

          {/* Section 14: Governing Law */}
          <div id="law14" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              14. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted under Applicable Law, the Company&#39;s aggregate
              liability towards a Customer arising out of or in connection with a transaction shall
              not exceed the amount actually paid by such Customer to the Company in respect of the
              specific plot/unit/transaction giving rise to the claim. The Company shall not be
              liable for any indirect, incidental, consequential, or punitive damages, including
              loss of profit or anticipated business, arising from the use of its website, services,
              or any Project.
            </p>
            <p>
              Nothing in these Terms shall be construed to limit or exclude any liability, right, or
              remedy that cannot be limited or excluded under RERA, the Consumer Protection Act,
              2019, or any other mandatory Applicable Law.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law15" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              15. Indemnification
            </h2>
            <p>
              The Customer agrees to indemnify and hold harmless the Company, its directors,
              officers, employees, and agents from and against any claims, losses, damages,
              liabilities, and expenses (including reasonable legal fees) arising out of the
              Customer&#39;s breach of these Terms, the Agreement, or Applicable Law, or arising out
              of any false, inaccurate, or misleading information/documentation provided by the
              Customer.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law16" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              16. Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential the commercial terms of the Agreement and any
              proprietary or confidential information exchanged during the transaction, except where
              disclosure is required by law, by a competent authority, or for enforcement of rights
              under the Agreement.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law17" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              17. Third-Party Services and Links
            </h2>
            <p>
              Our website/application may contain links to, or facilitate engagement with,
              third-party service providers (such as home loan providers, legal consultants, or
              interior designers). The Company does not guarantee or warrant the services of such
              third parties, and any engagement with them is at the Customer&#39;s own discretion
              and risk, governed by the terms of such third party.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law18" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              18. Amendment of Terms
            </h2>
            <p>
              The Company reserves the right to modify, amend, or update these Terms at any time,
              with such changes becoming effective upon posting on the Company&#39;s website.
              Continued use of the website/services after such changes shall constitute acceptance
              of the revised Terms. Changes shall not, however, adversely affect rights already
              vested in a Customer under a duly executed Agreement.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law19" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              19. Dispute Resolution
            </h2>
            <p>
              The parties shall first attempt to resolve any dispute, difference, or claim arising
              out of or in connection with these Terms or any Agreement amicably through mutual
              discussion within 30 (thirty) days of a written notice raising the dispute.
            </p>
            <p>
              In the event the dispute is not resolved amicably, the same shall be referred to and
              finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, by a
              sole arbitrator to be appointed by the Company (or, where required by law, through
              mutual agreement of the parties). The seat and venue of arbitration shall be
              Ahmedabad, Gujarat, and the language of arbitration shall be English or any mutually
              agreed. The above shall not preclude either party from seeking interim relief from a
              competent court, or from approaching the appropriate RERA authority/adjudicating
              officer or consumer forum in relation to matters falling within their statutory
              jurisdiction.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law20" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              20. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Subject to Clause 19 above, the courts at Ahmedabad, Gujarat alone shall have
              exclusive jurisdiction over any matters arising out of or in connection with these
              Terms.
            </p>
          </div>
          {/* Section 11: Governing Law */}
          <div id="law21" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              21. Severability
            </h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable under
              Applicable Law, such provision shall be severed, and the remaining provisions shall
              continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </div>
          {/* Section 11: Governing Law */}
          <div id="law22" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              22. Waiver
            </h2>
            <p>
              No failure or delay by the Company in exercising any right, power, or remedy under
              these Terms shall operate as a waiver thereof, nor shall any single or partial
              exercise preclude any other or further exercise of such right, power, or remedy.
            </p>
          </div>

          {/* Section 11: Governing Law */}
          <div id="law23" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              23. Entire Agreement
            </h2>
            <p>
              These Terms, together with the Privacy Policy and any project/transaction-specific
              Agreement, constitute the entire understanding between the Customer and the Company
              with respect to the subject matter herein and supersede all prior discussions,
              representations, or agreements, whether oral or written, except as expressly
              incorporated herein.
            </p>
          </div>

          <div id="law24" className="scroll-mt-24 flex flex-col gap-4 pb-8">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              24. Contact Us
            </h2>
            <p>
              For any queries or grievances relating to these Terms, please contact: Krishna Land
              Developers Pvt. Ltd. Ahmedabad, Gujarat, India –
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li className="font-medium text-[#0B2545]">
                Address: [Registered Office Address], [PIN Code]
              </li>
              <li className="font-medium text-[#0B2545]">E-mail: [company email ID]</li>
              <li className="font-medium text-[#0B2545]">Phone: [company contact number]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
