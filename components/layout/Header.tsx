"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";

/* Custom Social SVG Icons */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface NavDropdownItem {
  title: string;
  description?: string;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Who We Are",
    href: "#who-we-are",
  },
  {
    title: "Sustainability",
    dropdown: [
      {
        title: "Circular Economy",
        description: "Closed-loop paper recycling solutions",
        href: "#circular-economy",
      },
      {
        title: "Waste Paper Recovery",
        description: "Sustainable raw material collection",
        href: "#impact",
      },
      {
        title: "Our Impact & Metrics",
        description: "2.5M+ tons recycled annually",
        href: "#impact",
      },
      {
        title: "Environmental Commitment",
        description: "Water and energy conservation",
        href: "#why-upm",
      },
    ],
  },
  {
    title: "Products",
    dropdown: [
      {
        title: "Containerboard",
        description: "High performance corrugated packaging",
        href: "#products",
      },
      {
        title: "Kraft Paper",
        description: "Durable kraft paper for packaging & wrapping",
        href: "#products",
      },
      {
        title: "Flute Medium",
        description: "Engineered for superior crush strength",
        href: "#products",
      },
      {
        title: "Flute Medium Cores",
        description: "Specialized winding cores & tubes",
        href: "#products",
      },
    ],
  },
  {
    title: "Operations",
    dropdown: [
      {
        title: "Manufacturing Facility",
        description: "State-of-the-art paper mill in the UAE",
        href: "#why-upm",
      },
      {
        title: "Green Arabia Initiative",
        description: "Regional sustainability partnerships",
        href: "#why-upm",
      },
      {
        title: "Quality Assurance",
        description: "Strict compliance and international standards",
        href: "#why-upm",
      },
      {
        title: "Global Reach",
        description: "Exporting to over 40 countries worldwide",
        href: "#impact",
      },
    ],
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-green text-white shadow-md">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Left: UPM Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent rounded-lg p-1"
          >
            {/* Brand Logo */}
            <img
              src="/logo.png"
              alt="Union Paper Mills UAE"
              className="h-24 w-auto group-hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Center: Desktop Navigation Menu */}
          <nav
            className="hidden xl:flex items-center gap-1 2xl:gap-2"
            aria-label="Main Navigation"
          >
            {navigationItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown);
              const isOpen = openDropdown === item.title;

              if (item.title === "Contact Us") {
                return (
                  <Link
                    key={item.title}
                    href={item.href || "/contact"}
                    className="ml-2 px-5 py-2 rounded-full border border-white/40 text-base font-semibold tracking-wider uppercase text-white hover:bg-white hover:text-dark-green transition-all duration-200 shadow-sm"
                  >
                    Contact Us
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() =>
                    hasDropdown && handleMouseEnter(item.title)
                  }
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.title)
                      }
                      aria-expanded={isOpen}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-base font-medium tracking-wider text-white/90 hover:text-white rounded-md transition-colors ${
                        isOpen ? "text-green-accent" : ""
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-green-accent"
                            : "text-white/60"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="px-3 py-2 text-base font-medium tracking-wider text-white/90 hover:text-white rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu Modal */}
                  {hasDropdown && isOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-forest-light/95 backdrop-blur-md border border-white/10 shadow-2xl py-3 px-2 z-50 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex flex-col gap-1">
                        {item.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="p-2.5 rounded-lg hover:bg-white/10 transition-colors group"
                          >
                            <p className="text-sm font-semibold text-white group-hover:text-green-accent transition-colors">
                              {subItem.title}
                            </p>
                            {subItem.description && (
                              <p className="text-xs text-white/60 mt-0.5 leading-snug">
                                {subItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-forest-light border-t border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-white/5 pb-2">
                {item.dropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.title ? null : item.title,
                        )
                      }
                      className="w-full flex items-center justify-between text-base font-medium text-white py-1.5"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.title
                            ? "rotate-180 text-green-accent"
                            : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.title && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-white/70 hover:text-white py-1"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white py-1.5"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/70">
              <a href="https://facebook.com" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://medium.com" aria-label="Medium">
                <MediumIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com" aria-label="X / Twitter">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-2.5 rounded-full bg-white text-dark-green text-xs font-bold uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
