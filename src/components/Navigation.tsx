"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Wellness", href: "/wellness" },
  { label: "Ayurveda", href: "/ayurveda" },
  { label: "Stay & Rooms", href: "/stay" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const CURRENCIES = [
  { code: "INR", symbol: "₹", label: "₹ INR" },
  { code: "USD", symbol: "$", label: "$ USD" },
  { code: "EUR", symbol: "€", label: "€ EUR" },
];

export default function Navigation() {
  const headerRef = useRef<HTMLElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      start: "top -40",
      end: 99999,
      onEnter: () => {
        headerRef.current?.classList.add("shadow-md");
      },
      onLeaveBack: () => {
        headerRef.current?.classList.remove("shadow-md");
      }
    });
  }, { scope: headerRef });

  // Close currency dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setIsCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsCurrencyOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-40 bg-canvas-ivory/95 backdrop-blur-md transition-shadow duration-300 shadow-[0_1px_8px_rgba(27,50,36,0.05)]">
        <div className="h-20 w-full px-4 sm:px-margin lg:px-6 xl:px-6 2xl:px-margin-desktop flex items-center justify-between gap-2 xl:gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="Gold Mountain Wellness Sanctuary Home">
            <img alt="Gold Mountain Wellness Resort" className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" src="/images/logo.png" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-2 2xl:gap-5 shrink">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-label-md text-xs 2xl:text-label-md uppercase text-on-surface-variant hover:text-forest-deep transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-accent-gold hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action & Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 2xl:gap-4 shrink-0">
            {/* Compact Currency Dropdown (Desktop / Tablet) */}
            <div ref={currencyRef} className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setIsCurrencyOpen((prev) => !prev)}
                className="flex items-center gap-1 px-2 2xl:px-2.5 py-1.5 rounded-lg border border-border-muted bg-surface-cream/80 hover:bg-surface-cream hover:border-accent-gold/60 text-forest-deep font-label-sm text-xs 2xl:text-label-sm font-semibold transition-all cursor-pointer shadow-2xs"
                aria-expanded={isCurrencyOpen}
                aria-haspopup="listbox"
                aria-label="Select Currency"
              >
                <span>{selectedCurrency.label}</span>
                <span className={`material-symbols-outlined text-[16px] text-forest-deep/70 transition-transform duration-200 ${isCurrencyOpen ? "rotate-180" : ""}`}>
                  keyboard_arrow_down
                </span>
              </button>

              {isCurrencyOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 mt-2 w-28 py-1.5 bg-surface-cream rounded-lg shadow-lg border border-border-muted z-50 flex flex-col"
                >
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      type="button"
                      onClick={() => {
                        setSelectedCurrency(curr);
                        setIsCurrencyOpen(false);
                      }}
                      className={`px-3 py-1.5 text-left font-label-sm text-label-sm flex items-center justify-between transition-colors ${
                        selectedCurrency.code === curr.code
                          ? "bg-forest-deep text-canvas-ivory font-bold"
                          : "text-forest-deep hover:bg-forest-deep/10"
                      }`}
                    >
                      <span>{curr.label}</span>
                      {selectedCurrency.code === curr.code && (
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book / Enquire Desktop & Tablet CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-forest-deep text-canvas-ivory font-label-md text-xs 2xl:text-label-md uppercase tracking-wider px-3 xl:px-4 2xl:px-5 py-2 2xl:py-2.5 rounded-lg hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep shadow-sm transition-all font-semibold active:scale-95"
            >
              Book / Enquire
            </Link>

            {/* Compact Mobile Book CTA */}
            <Link
              href="/contact"
              className="sm:hidden inline-flex items-center justify-center bg-forest-deep text-canvas-ivory font-label-sm text-[11px] uppercase tracking-wider px-3.5 py-2 min-h-[36px] rounded-md hover:bg-forest-charcoal font-semibold active:scale-95 shadow-xs"
            >
              Book
            </Link>

            {/* Hamburger Toggle (Tablets & Mobile) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-forest-deep hover:bg-forest-deep/10 transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-accent-gold/30"></div>
      </header>

      {/* Mobile / Tablet Slide-out Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-forest-charcoal/60 backdrop-blur-xs z-50 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile / Tablet Slide-out Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-[320px] sm:w-[380px] max-w-[85vw] bg-canvas-ivory shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-accent-gold/25">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
              <img alt="Gold Mountain Logo" className="h-9 sm:h-10 w-auto object-contain" src="/images/logo.png" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-forest-deep hover:bg-forest-deep/10 transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col py-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-label-lg text-label-lg uppercase tracking-wider text-forest-deep hover:text-accent-terracotta hover:translate-x-1.5 transition-all py-2.5 px-2 rounded-lg flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-border-muted text-[18px] group-hover:text-accent-terracotta group-hover:translate-x-0.5 transition-all">
                  chevron_right
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions & Utilities */}
        <div className="pt-6 border-t border-accent-gold/25 space-y-4">
          {/* Mobile Currency Selection Strip */}
          <div className="flex flex-col gap-1.5">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-on-surface-variant">Preferred Currency</span>
            <div className="grid grid-cols-3 gap-2">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  type="button"
                  onClick={() => setSelectedCurrency(curr)}
                  className={`py-2 px-1 text-center font-label-sm text-xs rounded-md transition-all font-semibold ${
                    selectedCurrency.code === curr.code
                      ? "bg-forest-deep text-canvas-ivory shadow-xs"
                      : "bg-surface-cream text-forest-deep border border-border-muted hover:border-accent-gold/60"
                  }`}
                >
                  {curr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Book / Enquire Primary Button */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-widest hover:bg-forest-charcoal shadow-sm transition-all font-semibold active:scale-[0.98]"
          >
            Book / Enquire
          </Link>

          {/* Sanctuary Location Note */}
          <div className="text-center pt-2">
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-accent-gold">
              Tiruvannamalai, Tamil Nadu
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
