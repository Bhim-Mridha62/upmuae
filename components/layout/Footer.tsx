import React from "react";
import Link from "next/link";

const footerData = [
  {
    title: "ABOUT US",
    links: [
      { label: "Company Overview", href: "#" },
      { label: "Adding Value To Waste", href: "#" },
      { label: "Vision, Mission, Values", href: "#" },
    ],
  },
  {
    title: "GREEN ARABIA",
    links: [
      { label: "Introduction", href: "#" },
      { label: "Waste Paper Collection & Recyclability", href: "#" },
      { label: "Help Recycle, Get Rewarded", href: "#" },
      { label: "Waste Management Solutions", href: "#" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "Products Overview", href: "#" },
      { label: "Quality Assurance", href: "#" },
    ],
  },
  {
    title: "NEWS & VIEWS",
    links: [
      { label: "Press & Articles", href: "#" },
      { label: "Customer Testimonials", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "CAREER", href: "#" },
      { label: "CONTACT US", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full text-white font-sans" aria-label="Footer">
      {/* Top Section */}
      {/* Replaced 'bg-dark-green' with your specific hex if you have one. Using #3b439c to match your bottom bar gracefully */}
      <div className="w-full bg-[#3b439c] py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Logo & Tagline Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/20 pb-8 gap-6">
            <img
              src="https://www.upmuae.com/en/style/images/logo-icon-white.png"
              alt="Union Paper Mills UAE"
              className="h-16 w-auto drop-shadow-md"
            />
            <p className="text-white/80 text-sm md:text-base font-medium max-w-sm md:text-right">
              Pioneering sustainable paper manufacturing and waste management
              solutions across the UAE.
            </p>
          </div>

          {/* Links Grid - Using columns to prevent blank spaces */}
          <div className="columns-2 lg:columns-4 gap-8 md:gap-12 space-y-10 sm:space-y-12">
            {footerData.map((section, index) => (
              <div key={index} className="flex flex-col break-inside-avoid">
                <h3 className="text-[14px] md:text-[15px] font-bold tracking-widest uppercase mb-0 md:mb-5 text-white/90">
                  {section.title}
                </h3>

                {/* Section Links */}
                {section.links.length > 0 && (
                  <ul className="space-y-3.5">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-[14px] font-light text-white/80 hover:text-white hover:underline decoration-1 underline-offset-4 transition-all"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#6a74b1] py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] md:text-[14px] font-medium tracking-wide text-white/90">
            © Union Paper Mills 2017. All rights reserved.
          </p>

          {/* Optional: Small sub-links in the bottom bar to fill space beautifully */}
          <div className="flex space-x-6 text-[12px] md:text-[13px] text-white/70">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
