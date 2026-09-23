import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faq" },
];

const COMPANY_LINKS = [
  { label: "Dholera SIR", href: "/dholera" },
  // { label: "Partner With Us", href: "/channel-partner" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/career" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/krishnalanddeveloperspvt",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/krishnalanddeveloperspvt/?utm_source=ig_web_button_share_sheet",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/krishna-land-developers-pvt/?viewAsMember=true",
    icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/land_krishna",
    icon: FaSquareXTwitter,
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function FooterHeading({ children }) {
  return (
    <h2 className="font-sans text-[11px] sm:text-[12px] font-semibold leading-5 tracking-[3px] uppercase text-white/50 mb-4">
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="w-full border-t border-white/10 bg-[#0B2545]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
          {/* ── Logo & Description ────────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              aria-label="Krishna Land Home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/hero/logo.png"
                width={250}
                height={250}
                alt="company-logo"
                className="w-auto h-[40px] sm:h-[48px] lg:h-[80px] object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="mt-4 sm:mt-5 max-w-[320px] font-sans text-[13px] sm:text-[14px] font-light leading-[24px] text-white/60">
              Shaping the future of real estate in Dholera SIR with trust, transparency, and
              architectural elegance.
            </p>
            {/* Social Icons under logo/description */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 !text-white hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ────────────────────────────────────────────────── */}
          <div className="sm:col-span-1 lg:col-span-2 lg:col-start-6">
            <FooterHeading>Quick Links</FooterHeading>
            <nav aria-label="Footer quick links" className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit font-sans text-[14px] sm:text-[15px] font-normal !text-white hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Company Links ────────────────────────────────────────────────── */}
          <div className="sm:col-span-1 lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <nav aria-label="Footer company links" className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit font-sans text-[14px] sm:text-[15px] font-normal !text-white hover:text-white transition-all duration-200 hover:translate-x-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Legal ────────────────────────────────────────── */}
          <div className="sm:col-span-1 lg:col-span-2">
            <FooterHeading>Legal</FooterHeading>
            <nav aria-label="Footer legal links" className="flex flex-col gap-2">
              {LEGAL_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit font-sans text-[14px] sm:text-[15px] !text-white hover:text-white/80 transition-all duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────────────── */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10">
          <p className="font-sans text-[14px] font-light text-white/40 text-center">
            &copy; 2026 Krishna Land Developer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
