"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  show: index => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.06,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function MobileMenu({ id, isOpen, links = [], onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* Drawer */}
          <motion.nav
            id={id}
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "fixed",
              top: "var(--header-height, 70px)",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 45,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              padding: "28px 24px 32px",
              gap: "2px",
              overflowY: "auto",
            }}
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {links.map(({ label, href, hasDropdown, dropdownItems }, index) => {
                if (hasDropdown && dropdownItems) {
                  const isOpenDropdown = openDropdown === label;

                  return (
                    <motion.div
                      key={label}
                      custom={index}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, x: -20 }}
                      variants={linkVariants}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isOpenDropdown ? null : label)}
                        className="group w-full flex items-center justify-between py-4 px-1 rounded-lg hover:bg-[#f5f5f5] transition-all duration-200"
                      >
                        <span className="font-sans text-[17px] font-medium text-[#171717]">
                          {label}
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className={`text-[#737373] transition-transform duration-200 ${
                            isOpenDropdown ? "rotate-90" : "rotate-0"
                          }`}
                        >
                          <path
                            d="M6 4L10 8L6 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                          isOpenDropdown ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col gap-1 px-1 pb-2">
                          {dropdownItems.map(item => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => {
                                onClose();
                                setOpenDropdown(null);
                              }}
                              className="block rounded-lg px-4 py-3 font-sans text-[15px] text-[#171717] hover:bg-[#f5f5f5] transition-all duration-200"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={label}
                    custom={index}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, x: -20 }}
                    variants={linkVariants}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-4 px-1 rounded-lg hover:bg-[#f5f5f5] transition-all duration-200"
                    >
                      <span className="font-sans text-[17px] font-medium text-[#171717]">
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#f0f0f0] my-3" />

            {/* CTA in mobile drawer */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-2"
            >
              <Link
                href="#"
                onClick={onClose}
                className="flex items-center justify-center w-full font-sans text-[15px] font-medium  bg-[#0B2545] hover:bg-[#2C578B] !text-white rounded-full px-6 py-3.5 transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] active:scale-[0.97]"
              >
                Connect for query
              </Link>
            </motion.div> */}

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto pt-6"
            >
              <div className="flex items-center justify-center gap-4 text-[12px] text-[#737373] font-sans">
                <Link href="/privacy" className="hover:text-[#171717] transition-colors">
                  Privacy
                </Link>
                <span className="w-px h-4 bg-[#e5e5e5]" />
                <Link href="/terms" className="hover:text-[#171717] transition-colors">
                  Terms
                </Link>
                <span className="w-px h-4 bg-[#e5e5e5]" />
                <Link href="/faq" className="hover:text-[#171717] transition-colors">
                  FAQ
                </Link>
              </div>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
