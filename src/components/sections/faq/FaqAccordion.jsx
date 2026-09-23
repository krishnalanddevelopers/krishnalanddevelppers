"use client";

import Badge from "@/components/ui/Badge";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    { id: "general", label: "General" },
    { id: "investment", label: "Investment" },
    { id: "legal", label: "Legal" },
    { id: "projects", label: "Projects" },
  ];

  const faqs = {
    general: [
      {
        id: "g1",
        question: "What is Krishna Land Developers?",
        answer:
          "Krishna Land Developers is a premier real estate land development company specializing in premium NA-certified plots, farmhouse developments, and large-scale industrial land parcels inside Dholera SIR, Gujarat.",
      },
      {
        id: "g2",
        question: "Where is Dholera SIR located?",
        answer:
          "Dholera Special Investment Region (SIR) is located in the Gulf of Khambhat, approximately 100 km south of Ahmedabad, Gujarat. It is well connected via expressways, rail networks, and upcoming international airports.",
      },
      {
        id: "g3",
        question: "How can I contact Krishna Land Developers?",
        answer:
          "You can reach out to us via our Contact Page, dial +91 99090 99090 directly, or email us at info@krishnaland.com. We also coordinate guided site visits from Ahmedabad.",
      },
    ],
    investment: [
      {
        id: "i1",
        question: "Why should I invest in Dholera land?",
        answer:
          "Dholera SIR is India's flagship greenfield smart city project, offering massive appreciation potential due to central government infrastructure funding, zoning plans, fast-track approvals, and connectivity links like the DMIC corridor.",
      },
      {
        id: "i2",
        question: "What is the minimum plot size available?",
        answer:
          "Our residential and farmhouse plots start from a modular sizing of 1000 square yards onwards, while industrial and commercial parcels for bulk buyers span from 5 acres to 100+ acres.",
      },
      {
        id: "i3",
        question: "What are the payment terms and booking structures?",
        answer:
          "We offer flexible layout-based payment installments matched to registration and possession timelines. Contact our sales managers to receive booking kits and payment schedules.",
      },
    ],
    legal: [
      {
        id: "l1",
        question: "Are the plots NA-certified?",
        answer:
          "Yes, all plots developed by Krishna Land Developers are Non-Agricultural (NA) certified with clear titles, government approvals, and full registry mutation paperwork ready for possession.",
      },
      {
        id: "l2",
        question: "What legal checks are completed before deals?",
        answer:
          "Our legal division conducts full title search reports, boundary verification, town planning TP validations, and mutation checks to ensure a legally safe transaction for our buyers.",
      },
      {
        id: "l3",
        question: "Can NRI buyers invest in these plots?",
        answer:
          "Yes, Non-Resident Indians (NRIs) can legally purchase NA land plots in India, subject to standard FEMA guidelines. We provide specialized transactional and mutation paperwork support for NRI clients.",
      },
    ],
    projects: [
      {
        id: "p1",
        question: "What ongoing projects do you currently have?",
        answer:
          "Our active premium residential plotting projects include Kasindra and Navgam, both strategically positioned close to active corridors and the smart city activation boundary.",
      },
      {
        id: "p2",
        question: "Do you assist with physical site visits?",
        answer:
          "Absolutely! We provide complete Site Visit coordination including chauffeured travel from Ahmedabad, detailed layout demonstrations, and physical plotting verification.",
      },
      {
        id: "p3",
        question: "What basic utilities are provided in your projects?",
        answer:
          "Our boundary plotting layouts feature completed fencing, internal wide roads, utility access points (electricity and water), and green space allotments conforming to Dholera SIR standards.",
      },
    ],
  };

  const handleToggle = id => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Intro */}
        <div className="flex flex-col gap-4 items-center text-center max-w-2xl mx-auto">
          <Badge
            icon={<BookOpen size={12} />}
            label="FAQ Database"
            className="text-[#2c578b] bg-[#2c578b]/10 w-fit"
          />
          <h2
            id="faq-heading"
            className="font-serif text-[32px] sm:text-[38px] md:text-[44px] font-semibold text-[#0B2545] tracking-[-1px] leading-tight"
          >
            Find answers to your questions.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#737373] font-light leading-[26px]">
            Browse categories below to learn about Dholera Smart City regulations, plot
            certifications, site visits, and NRI investment schemes.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center items-center gap-2 flex-wrap max-w-xl mx-auto border-b border-neutral-100 pb-6 w-full">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null); // Close any open accordion on category change
              }}
              className={`h-10 px-6 rounded-full font-sans text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "!bg-[#0B2545] text-white shadow-sm"
                  : "bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-[#525252]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Single Column Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4 w-full mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4 w-full"
            >
              {faqs[activeCategory].map(item => {
                const isOpen = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggle(item.id)}
                    className={`bg-white border rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer group ${
                      isOpen
                        ? "border-[#2C578B] ring-2 ring-[#2C578B]/5 shadow-sm"
                        : "border-[#e5e5e5] hover:border-[#2C578B]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.01)]"
                    }`}
                  >
                    {/* Clickable Header Row */}
                    <div className="p-5 sm:p-6 flex items-center justify-between gap-4 text-left">
                      <div className="flex gap-3.5 items-start">
                        <HelpCircle
                          size={18}
                          className={`shrink-0 mt-0.5 ${isOpen ? "text-[#2C578B]" : "text-neutral-350"}`}
                        />
                        <h3 className="font-serif text-[15px] sm:text-[17px] font-bold text-[#0B2545] leading-snug">
                          {item.question}
                        </h3>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`shrink-0 ${isOpen ? "text-[#2C578B]" : "text-neutral-400"}`}
                      >
                        <ChevronDown size={18} className="stroke-[2.5]" />
                      </motion.div>
                    </div>

                    {/* Expandable answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden bg-[#FAF9F6]/45"
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-neutral-100 pl-[43px] sm:pl-[49px]">
                            <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-[22px] text-[#525252] font-light">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
