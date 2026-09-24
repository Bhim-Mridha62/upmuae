"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";

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
    title: "About Us",
    href: "/aboutus",
  },
  {
    title: "Products",
    href: "/product",
  },
  {
    title: "Green Arabia",
    href: "/greenarabia",
  },
  {
    title: "News & Views",
    href: "/news",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact Us",
    href: "/contactus",
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection hook (Triggers when scrolled past 120px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg border-white/10 text-white"
          : "bg-transparent text-white"
      }`}
    >
      {/* <div className="flex justify-end gap-4 items-center">
        <a href="">+971(0)4 6067300</a>
        <a href=""> info@upmuae.com </a>
        <div>
          <span>ENG</span>
          <span>العَربِيّة</span>
        </div>
      </div> */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center relative justify-end h-22">
          {/* Left: UPM Brand Logo */}
          <Link
            href="/"
            className="flex absolute top-0 left-0 items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent rounded-lg p-1"
          >
            <img
              src="/logo.png"
              alt="Union Paper Mills UAE"
              className="h-32 w-auto group-hover:opacity-90 transition-opacity duration-200"
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
                    className="ml-2 px-5 py-2 rounded-full border border-white/60 text-base font-semibold tracking-wider uppercase text-white hover:bg-white hover:text-black transition-all duration-200 shadow-sm"
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
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-base font-semibold tracking-wider rounded-md transition-colors text-white ${
                        isOpen ? "text-green-accent" : ""
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-green-accent"
                            : "text-white/70"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="px-3 py-2 text-base font-semibold tracking-wider rounded-md transition-colors text-white hover:text-white/80"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu Modal */}
                  {hasDropdown && isOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl py-3 px-2 z-50 animate-fade-in"
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
        <div className="xl:hidden backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
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
        </div>
      )}
    </header>
  );
}
