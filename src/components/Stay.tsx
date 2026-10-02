"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger, revealSection } from "../utils/animations";
import { useCurrency } from "../context/CurrencyContext";

const PRICES = {
  deluxe: { INR: '₹3,099', USD: '$37', EUR: '€34' },
  suite: { INR: '₹4,099', USD: '$49', EUR: '€45' },
  family: { INR: '₹7,999', USD: '$95', EUR: '€89' }
};

export default function Stay() {
  const { currency } = useCurrency();
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Intro Reveal
    if (introRef.current) {
      revealStagger(introRef.current.children, sectionRef.current!);
    }

    // Cards Sequential Reveal
    if (cardsRef.current) {
      revealStagger(cardsRef.current.children, cardsRef.current, 0.2);
    }

    // Callout Reveal
    if (calloutRef.current) {
      revealSection(calloutRef.current, 0.4);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="stay" className="w-full py-space-3xl bg-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-lg">
          <div ref={introRef}>
            <div className="flex items-center gap-space-xs mb-space-xs">

              <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Rest &amp; Replenishment</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
              Spaces for Rest and Healing.
            </h2>
            <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-sm font-normal">
              Thoughtfully appointed sanctuaries designed for short visits, intensive retreats, and extended sabbaticals.
            </p>
          </div>
          
        </div>
        
        {/* Accommodation Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl mb-space-2xl">
          
          {/* Room 1 */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-surface-cream shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-full aspect-[16/10] overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgHH2vB_Lh8e5Q8IMxsfZP65dP-16-6HiBxMKJxFwFHwv7UwVKcY9DTOXKUplRFYLaTBQsp2aos0xypMpDNF6toKbYLgQdvdaoB_KUyUq3mWM6XVj-65T2KLTvLRzm_436vRndIvc2InOZQo8b_ok-TA4bo6lvKaHrdlT1nK1d71xl4A2fzsysbM4aM1ClVa0hyGISrMXkZXqtYEeg_lTHsTte8P2dIizeqK0yWiBm-27TmbV0B7DP')" }}
              ></div>
              <span className="absolute top-space-sm right-space-sm px-space-sm py-0.5 rounded bg-forest-deep/90 text-canvas-ivory font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-sm">
                2 Guests
              </span>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-forest-deep">Mountain View Deluxe</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs mb-space-md leading-relaxed">
                  A serene and comfortable space offering beautiful views of the mountain, perfect for a peaceful retreat.
                </p>
                <div className="flex flex-wrap gap-space-xs mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-canvas-ivory text-forest-charcoal font-label-sm text-label-sm border border-border-muted/40 shadow-sm">Mountain View</span>
                  <span className="px-3 py-1 rounded-full bg-canvas-ivory text-forest-charcoal font-label-sm text-label-sm border border-border-muted/40 shadow-sm">Breakfast & Lunch</span>
                </div>
              </div>
              <div className="pt-space-md border-t border-border-muted flex items-end justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase text-forest-deep font-medium">From</span>
                  <p className="font-headline-md text-headline-md text-forest-deep">{PRICES.deluxe[currency]} <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ night</span></p>
                </div>
                <a 
                  href="#enquiry" 
                  className="px-8 py-2.5 rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep active:scale-95 transition-all min-h-[42px] inline-flex items-center justify-center"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
          
          {/* Room 2: Hero Room */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-surface-cream shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-full aspect-[16/10] overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('/images/stay_suite.png')" }}
              ></div>
              <span className="absolute top-space-sm right-space-sm px-space-sm py-0.5 rounded bg-forest-deep/90 text-canvas-ivory font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-sm">
                2 Guests
              </span>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between relative">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-forest-deep">Mountain View Suite</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs mb-space-md leading-relaxed">
                  An expansive suite featuring a comfortable sitting area and uninterrupted panoramic views of the sacred mountain.
                </p>
                <div className="flex flex-wrap gap-space-xs mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-canvas-ivory text-forest-charcoal font-label-sm text-label-sm border border-border-muted/40 shadow-sm">Panoramic View</span>
                  <span className="px-3 py-1 rounded-full bg-canvas-ivory text-forest-charcoal font-label-sm text-label-sm border border-border-muted/40 shadow-sm">Breakfast & Lunch</span>
                </div>
              </div>
              <div className="pt-space-md border-t border-border-muted flex items-end justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase text-forest-deep font-medium">From</span>
                  <p className="font-headline-md text-headline-md text-forest-deep">{PRICES.suite[currency]} <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ night</span></p>
                </div>
                <a 
                  href="#enquiry" 
                  className="px-8 py-2.5 rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep active:scale-95 transition-all min-h-[42px] inline-flex items-center justify-center"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
          
          {/* Room 3 */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-surface-cream shadow-md group hover:shadow-xl hover:-translate-y-1 transition-all md:col-span-2 lg:col-span-1">
            <div className="w-full aspect-[16/10] overflow-hidden relative">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWI45UeEFbYgTReGpFa8JM3ytvvvwzSU9RNhRMXIbnYWoOmKmuGEolhG9O3r-rzv6TmRi-VCyntHk12zJw66uvU8KM4TKX-QbMn2bpbu9_5oGfo4RTKsKhWayJISk01Cx302LzZCJCI86Ot3yaJjc12mOhQ_QZp_QStc1xlPq1gYw4l1h-DwFbDswrtAA0PJBcMNuN33u-HdLYRMvZkA01iZbpMkmnkKVvAq8Vo-75XBXhG8fPq9ni')" }}
              ></div>
              <span className="absolute top-space-sm right-space-sm px-space-sm py-0.5 rounded bg-forest-deep/90 text-canvas-ivory font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-sm">
                4 Guests
              </span>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-forest-deep">Mountain View Family Suite</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs mb-space-md leading-relaxed">
                  A spacious suite designed for families or larger groups, offering comfort, togetherness, and stunning mountain vistas.
                </p>
                <div className="flex flex-wrap gap-space-xs mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-canvas-ivory text-forest-charcoal font-label-sm text-label-sm border border-border-muted/40 shadow-sm">Spacious Living</span>
                  <span className="px-3 py-1 rounded-full bg-canvas-ivory text-forest-charcoal font-label-sm text-label-sm border border-border-muted/40 shadow-sm">All Meals Included</span>
                </div>
              </div>
              <div className="pt-space-md border-t border-border-muted flex items-end justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase text-forest-deep font-medium">From</span>
                  <p className="font-headline-md text-headline-md text-forest-deep">{PRICES.family[currency]} <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ night</span></p>
                </div>
                <a 
                  href="#enquiry" 
                  className="px-8 py-2.5 rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep active:scale-95 transition-all min-h-[42px] inline-flex items-center justify-center"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Extended Stay Notice Callout */}
        <div ref={calloutRef} className="p-space-lg rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <span className="material-symbols-outlined text-accent-gold text-[32px] shrink-0">calendar_today</span>
            <div>
              <p className="font-headline-sm text-headline-sm text-forest-deep">Longer Retreats &amp; Monthly Sadhana Stays</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Special seasonal privileges and complete wellness dietary plans for guests staying 14 nights or longer.</p>
            </div>
          </div>
          <a 
            href="#enquiry" 
            className="whitespace-nowrap px-space-lg py-2.5 rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep active:scale-95 transition-all min-h-[42px] inline-flex items-center justify-center shrink-0"
          >
            Request Long Stay Rates
          </a>
        </div>
        
      </div>
    </section>
  );
}





