"use client";

import { ChevronRight, Shield } from "lucide-react";

export default function PrivacyContent() {
  const sections = [
    { id: "intro", label: "1. Introduction" },
    { id: "collect", label: "2. Scope and Applicability" },
    { id: "use", label: "3. Information We Collect" },
    { id: "cookies", label: "4. Purpose of Collection and Use of Information" },
    { id: "sharing", label: "5. Sharing and Disclosure of Information" },
    { id: "security", label: "6. Cross-Border Transfer of Information" },
    { id: "rights", label: "7. Data Storage and Security" },
    { id: "updates", label: "8. Data Retention" },
    { id: "contact", label: "9. Cookies and Tracking Technologies" },
    { id: "contact10", label: "10. Your Rights" },
    { id: "contact11", label: "11. Children's Privacy" },
    { id: "contact12", label: "12. Third-Party Links" },
    { id: "contact13", label: "13. Grievance Officer / Contact Us" },
    { id: "contact14", label: "14. Changes to this Policy" },
    { id: "contact15", label: "15. Governing Law and Jurisdiction" },
    { id: "contact16", label: "16. Contact Us" },
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
    <section className="w-full py-16 md:py-24 bg-white" aria-label="Privacy Policy details">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Sticky Side navigation (3/12) */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-20 h-fit">
          <div className="flex flex-col gap-4.5 bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[24px] p-6 shadow-sm">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-neutral-400 flex items-center gap-1.5">
              <Shield size={13} className="text-[#2C578B]" /> Policy Navigation
            </span>
            <nav className="flex flex-col gap-2" aria-label="Privacy clauses navigation">
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

        {/* Right Column: Detailed copy & CTA (9/12) */}
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-10 font-sans text-[15px] text-[#404040] leading-[26px] font-normal">
          {/* Section 1: Introduction */}
          <div
            id="intro"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy (&quot;Policy&quot;) describes how Krishna Land Developers Pvt.
              Ltd. (referred to as &quot;the Company&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;), a company engaged in the business of land development, plotting
              schemes, sale, purchase and trading of land and other real estate related activities
              for residential, commercial or mixed-use purposes, having its registered office at
              Ahmedabad, Gujarat, India, collects, uses, stores, discloses and otherwise processes
              the personal information of visitors to our website(s), applications, offices and
              sales offices, and of our customers, prospective customers, channel partners, brokers
              and other individuals who interact with us (collectively, &quot;you&quot; or
              &quot;User&quot;).
            </p>
            <p>
              This Policy applies to Users located in India as well as, on a prospective basis, to
              Users located outside India, since the Company intends to expand its customer base
              internationally. By accessing our website, providing your information to us, visiting
              our project sites, or availing our services, you agree to the collection and use of
              your information as described in this Policy.
            </p>
            <p>
              If you do not agree with this Policy, please refrain from using our website,
              applications or services, or from sharing your personal information with us.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div
            id="collect"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              2. Scope and Applicability
            </h2>
            <p>This Policy applies to all personal information collected by the Company through:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>Our official website(s) and mobile applications, if any;</li>
              <li>Enquiry forms, brochures, and registration forms (online or offline);</li>
              <li>Site visits, sales offices and marketing events;</li>
              <li>
                Communications through call, e-mail, SMS, WhatsApp or other messaging platforms;
              </li>
              <li>Booking, agreement, and post-sale documentation; and</li>
              <li>
                Interactions with our channel partners, brokers, dealers or referral associates
                acting on our behalf.
              </li>
            </ul>
            <p>
              This Policy does not apply to information collected by any third party, including
              through any application or website that may link to or be accessible from our website,
              or to third-party service providers who maintain their own privacy policies.
            </p>
          </div>

          {/* Section 3: How We Use Information */}
          <div
            id="use"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              3. Information We Collect
            </h2>
            <p className="font-semibold text-[#0B2545]">3.1 Information You Provide to Us</p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>Full name, gender, date of birth, and photograph (where applicable);</li>
              <li>
                Identity and address proof documents such as PAN, Aadhaar, passport, voter ID,
                driving licence, or equivalent government-issued identification (including, for
                overseas customers, passport, OCI/PIO card, or equivalent);
              </li>
              <li>
                Financial information such as bank account details, payment instrument details,
                income proof, loan/finance related information, and GST details, to the extent
                required for booking, payment, invoicing and compliance purposes;
              </li>
              <li>
                Details of co-applicants, nominees, or family members where relevant to a booking or
                agreement;
              </li>
              <li>
                Preferences regarding the type, size, location and budget of property/plot in which
                you are interested; and
              </li>
              <li>
                Any other information you voluntarily provide during enquiries, site visits,
                feedback, grievances or correspondence.
              </li>
            </ul>
            {/* ends */}
            {/* start seconds */}
            <p className="font-semibold text-[#0B2545]">3.2 Information Collected Automatically</p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>IP address, browser type, device type, operating system;</li>
              <li>
                Pages visited, time spent, referring website, and click-stream data on our
                website/application; and
              </li>
              <li>
                Location information (only where you have enabled location sharing on your device or
                browser).
              </li>
            </ul>
            {/* ends  */}
            {/* third start*/}
            <p className="font-semibold text-[#0B2545]">3.3 Sensitive Personal Data</p>
            <p>
              Where required for statutory or contractual purposes (for example, KYC, registration
              of sale deeds, loan facilitation, or RERA-related compliance), we may collect
              sensitive personal data such as government identity numbers, financial account
              information, or biometric information (if applicable). Such information is collected
              only with your consent or as permitted/required under applicable law, and is used
              strictly for the purpose for which it was collected.
            </p>
            {/* third ends */}
          </div>

          {/* Section 4: Cookies & Tracking */}
          <div
            id="cookies"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              4. Purpose of Collection and Use of Information
            </h2>
            <p>We use the information collected for the following purposes:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>
                To respond to enquiries and provide information about our projects, plotting
                schemes, and land parcels available for sale;
              </li>
              <li>
                To process bookings, execute agreements, sale deeds and other transactional
                documents, and to complete registration formalities with the Sub-Registrar or other
                statutory authorities;
              </li>
              <li>
                To verify identity, perform KYC/AML checks, and comply with applicable legal and
                regulatory requirements, including under the Real Estate (Regulation and
                Development) Act, 2016 (&#39;RERA&#39;), income tax laws, and anti- money laundering
                regulations;
              </li>
              <li>To process payments, issue invoices/receipts, and maintain accounts;</li>
              <li>
                To communicate updates regarding project status, possession, documentation, dues,
                offers, and other service- related matters;
              </li>
              <li>
                To send promotional and marketing communications about new projects/schemes, where
                you have not opted out of such communication;
              </li>
              <li>
                To improve our website, services, and customer experience, including through
                analytics;
              </li>
              <li>To respond to grievances, disputes, or legal notices; and</li>
              <li>
                To comply with any order of a court, tribunal, regulatory authority, or government
                body.
              </li>
            </ul>
          </div>

          {/* Section 5: Data Sharing */}
          <div
            id="sharing"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              5. Sharing and Disclosure of Information
            </h2>
            <p>
              We do not sell your personal information to third parties. We may, however, share your
              information with:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
              <li>
                Group companies, affiliates, and business partners involved in the development,
                marketing, or execution of the relevant project;
              </li>
              <li>
                Channel partners, brokers, and marketing associates strictly for the purpose of
                facilitating your enquiry or transaction;
              </li>
              <li>
                Banks, non-banking financial companies, and housing finance companies for
                facilitating loan/finance arrangements, where you have requested the same;
              </li>
              <li>
                Legal, tax, and other professional advisors, auditors, and
                registration/documentation agencies engaged by the Company;
              </li>
              <li>
                Government departments, statutory and regulatory authorities (including RERA
                authorities, Sub-Registrar offices, revenue/land records authorities, and
                municipal/town planning authorities) as required for compliance and registration
                purposes;
              </li>
              <li>
                Third-party service providers such as IT service providers, payment gateways, cloud
                storage providers, and communication service providers, who are contractually bound
                to protect your information; and
              </li>
              <li>
                Any successor entity in the event of a merger, acquisition, restructuring, or sale
                of business/assets, subject to confidentiality obligations.
              </li>
            </ul>
            <p>
              We may also disclose information where required by law, regulation, legal process, or
              governmental request, or where necessary to protect the rights, property, or safety of
              the Company, our customers, or others.
            </p>
          </div>

          {/* Section 6: Data Security */}
          <div
            id="security"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              6. Cross-Border Transfer of Information
            </h2>
            <p>
              As the Company may, in the future, serve customers located outside India, your
              information may be collected, stored, or processed in India or transferred to and
              processed in other jurisdictions where the Company, its group entities, or its service
              providers operate. Where such transfer takes place, the Company shall take reasonable
              steps to ensure that your information continues to be protected in a manner consistent
              with this Policy and applicable law, including the Digital Personal Data Protection
              Act, 2023 (as and when applicable) and other relevant Indian data protection
              regulations.
            </p>
          </div>

          {/* Section 7: User Rights */}
          <div
            id="rights"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              7. Data Storage and Security
            </h2>
            <p>
              We implement reasonable security practices and procedures, including administrative,
              technical, and physical safeguards, to protect your personal information against
              unauthorised access, alteration, disclosure, or destruction. These may include access
              controls, encryption of sensitive data in transit, restricted access to personal data
              on a need- to-know basis, and periodic review of our security practices.
            </p>
            <p>
              While we strive to protect your information, no method of electronic storage or
              transmission over the internet is completely secure, and we cannot guarantee absolute
              security. You are responsible for maintaining the confidentiality of any login
              credentials, if applicable, and for promptly notifying us of any unauthorised use of
              your account or information.
            </p>
          </div>

          {/* Section 8: Updates to Policy */}
          <div
            id="updates"
            className="scroll-mt-24 flex flex-col gap-4 border-b border-neutral-100 pb-8"
          >
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              8. Data Retention
            </h2>
            <p>
              We retain personal information for as long as is necessary to fulfil the purposes
              outlined in this Policy, including for satisfying legal, regulatory, accounting, or
              reporting requirements (for example, retention of sale/purchase and
              registration-related documents for the statutory limitation period), or until you
              request deletion, subject to our legal obligations. Upon expiry of the applicable
              retention period, information is securely deleted, destroyed, or anonymised.
            </p>
          </div>

          {/* Section 9: Contact Information */}
          <div id="contact" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              9. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user
              experience, remember preferences, and gather analytical information about website
              usage. You may configure your browser to refuse cookies; however, this may affect
              certain functionalities of the website.
            </p>
          </div>

          {/* Section 13.3 Optional CTA: Contact Us for Privacy Concerns */}
          <div
            id="contact10"
            className="bg-[#FAF9F6]/45 border border-[#eaeaea] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6 shadow-sm"
          >
            <div className="flex flex-col gap-1 max-w-lg">
              <h3 className="font-serif text-[18px] font-bold text-[#0B2545]">10. Your Rights</h3>
              <p className="font-sans text-[13.5px] text-[#404040] leading-[22px] font-normal">
                Subject to applicable law, you may have the right to:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 mt-1">
                <li>Access and obtain a copy of the personal information we hold about you;</li>
                <li>Request correction or updation of inaccurate or incomplete information;</li>
                <li>
                  Request erasure of your personal information, subject to our legal and contractual
                  obligations to retain such information;
                </li>
                <li>
                  Withdraw consent for processing (including for marketing communications), without
                  affecting the lawfulness of processing carried out prior to such withdrawal;
                </li>
                <li>
                  Opt out of promotional/marketing communications at any time by writing to us or
                  using the &#39;unsubscribe&#39; option, where provided; and
                </li>
                <li>
                  Lodge a grievance with our Grievance Officer as set out below, and, if unresolved,
                  approach the appropriate consumer forum, RERA authority, or Data Protection Board
                  (as applicable).
                </li>
              </ul>
              <p>
                Please note that withdrawal of consent or a request for erasure may affect our
                ability to process your booking, complete registration formalities, or provide
                certain services, and the Company shall not be liable for any resultant delay or
                inability to perform such services.
              </p>
            </div>
          </div>
          <div id="contact11" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              11. Children&#39;s Privacy
            </h2>
            <p>
              Our services are intended for use by individuals who are 18 years of age or older and
              are legally competent to contract. We do not knowingly collect personal information
              from minors. If we become aware that we have inadvertently collected personal
              information from a minor without appropriate consent, we will take steps to delete
              such information.
            </p>
          </div>

          <div id="contact12" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              12. Third-Party Links
            </h2>
            <p>
              Our website/application may contain links to third-party websites or services (such as
              maps, payment gateways, or social media platforms). This Policy does not apply to such
              third-party websites, and we encourage you to review the privacy policies of any
              third-party site you visit.
            </p>
          </div>

          <div id="contact13" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              13. Grievance Officer / Contact Us
            </h2>
            <p>
              In accordance with applicable Indian law, including the Information Technology Act,
              2000 and rules made thereunder, and the Digital Personal Data Protection Act, 2023 (as
              applicable), the Company has designated a Grievance Officer to address any queries,
              concerns, or complaints regarding this Policy or the processing of your personal
              information.
            </p>
            <div className="bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[20px] p-5 flex flex-col gap-2 mt-1">
              <div>
                <strong>Grievance Officer:</strong> [Name to be designated by the Company]
              </div>
              <div>
                <strong>Designation:</strong> [Designation]
              </div>
              <div>
                <strong>Address:</strong> Krishna Land Developers Pvt. Ltd., [Registered Office
                Address], Ahmedabad, Gujarat, India – [PIN Code]
              </div>
              <div>
                <strong>E-mail:</strong> [grievance email ID to be inserted]
              </div>
              <div>
                <strong>Phone:</strong> [contact number to be inserted]
              </div>
            </div>
            <p>
              We will endeavour to acknowledge and address grievances within the timelines
              prescribed under applicable law.
            </p>
          </div>

          <div id="contact14" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              14. Changes to this Policy
            </h2>
            <p>
              The Company reserves the right to modify or update this Policy at any time to reflect
              changes in our practices, business operations, or applicable law. The revised Policy
              will be posted on our website with an updated &quot;Last Updated&quot; date. We
              encourage you to review this Policy periodically. Your continued use of our website or
              services after any modification constitutes your acceptance of the revised Policy.
            </p>
          </div>
          <div id="contact15" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              15. Governing Law and Jurisdiction
            </h2>
            <p>
              This Policy shall be governed by and construed in accordance with the laws of India.
              Subject to Clause on Dispute Resolution in our Terms &amp; Conditions, courts at
              Ahmedabad, Gujarat shall have exclusive jurisdiction over any disputes arising out of
              or in connection with this Policy.
            </p>
          </div>

          <div id="contact16" className="scroll-mt-24 flex flex-col gap-4 pb-4">
            <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[#0B2545]">
              16. Contact Us
            </h2>
            <p>
              For any questions regarding this Privacy Policy, please contact us at: Krishna Land
              Developers Pvt. Ltd.
            </p>
            <div className="bg-[#FAF9F6]/60 border border-[#eaeaea] rounded-[20px] p-5 flex flex-col gap-2 mt-1">
              <div>
                <strong>Address:</strong> [Registered Office Address], Ahmedabad, Gujarat, India –
                [PIN Code]
              </div>
              <div>
                <strong>E-mail:</strong> [company email ID]
              </div>
              <div>
                <strong>Phone:</strong> [company contact number]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
