"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";
import Link from "next/link";

export default function RetreatPackage() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (leftColRef.current) {
      revealStagger(leftColRef.current.children, leftColRef.current, 0.2);
    }

    if (rightColRef.current) {
      revealStagger(rightColRef.current.children, rightColRef.current, 0.2);
    }

    if (ctaRef.current) {
      revealStagger(ctaRef.current.children, ctaRef.current, 0.2);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="retreat-package" className="w-full py-space-3xl bg-canvas-ivory relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop relative z-10">
        
        {/* Content Flow */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-space-xl lg:gap-space-3xl">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-forest-deep/10 -translate-x-1/2"></div>
          
          {/* Left Column: Intro & Inclusions */}
          <div ref={leftColRef} className="flex flex-col justify-between h-full gap-space-xl">
            
            {/* Intro (Left Aligned) */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-space-xs mb-space-sm">
                <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Sacred Journey · 2 Nights / 3 Days</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight mb-space-md">
                Arunachala Spiritual Retreat
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed text-balance">
                Walk the sacred Girivalam, sit in the presence of great saints, and offer food to those who have renounced everything. A complete spiritual pilgrimage, gently guided, with rest and nourishment at Gold Mountain.
              </p>
            </div>

            {/* Inclusions */}
            <div>
              <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-space-md">
                What&apos;s Included
              </h3>
              <ul className="space-y-4">
                {[
                  "2 nights stay for 2 guests",
                  "All meals: breakfast, lunch & dinner (Sattvic vegetarian)",
                  "Guided Girivalam, the 14 km sacred walk around Arunachala",
                  "Guided visits to the samadhis of revered saints: Sri Ramana Maharshi, Sri Seshadri Swamigal, Yogi Ramsuratkumar and Guhai Namasivayar",
                  "Private cab for all temple and ashram visits",
                  "Annadanam: serve a meal to 10 sadhus with your own hands"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-forest-deep/60 text-[20px] shrink-0 mt-0.5">check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Itinerary & Pricing */}
          <div ref={rightColRef} className="flex flex-col justify-between h-full">
            
            {/* Itinerary */}
            <div>
              <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-space-lg">
                Your Journey
              </h3>
              
              {/* Timeline */}
              <div className="relative pl-6">
                
                <div className="relative mb-space-lg">
                  <div className="absolute -left-[14px] top-4 bottom-[-2rem] w-px bg-forest-deep/15"></div>
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-accent-gold border-4 border-canvas-ivory shadow-sm z-10 box-content"></div>
                  <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-forest-deep font-semibold mb-2">Day 1 · Arrival &amp; Stillness</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Check in, lunch, and rest. Evening sunset viewing of Arunachala from the resort, followed by a quiet dinner.
                  </p>
                </div>

                <div className="relative mb-space-lg">
                  <div className="absolute -left-[14px] top-4 bottom-[-2rem] w-px bg-forest-deep/15"></div>
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-accent-gold border-4 border-canvas-ivory shadow-sm z-10 box-content"></div>
                  <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-forest-deep font-semibold mb-2">Day 2 · Girivalam &amp; Saints</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Early morning Girivalam with your guide. Breakfast and rest. Afternoon cab visits to the saints&apos; samadhis, and Annadanam offering to sadhus.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-forest-deep border-4 border-canvas-ivory shadow-sm z-10 box-content"></div>
                  <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-forest-deep font-semibold mb-2">Day 3 · Blessings &amp; Departure</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Morning meditation, breakfast, and checkout.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="bg-surface-cream rounded-xl p-space-md border border-border-muted/50 shadow-sm w-full">
              <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-space-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-gold text-[20px]">key</span>
                Choose Your Stay
              </h3>
              
              <div className="space-y-3 mb-space-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-border-muted/40">
                  <span className="font-label-lg text-label-lg uppercase tracking-wider text-forest-deep font-semibold">Deluxe Mountain View</span>
                  <span className="font-headline-sm text-headline-sm text-forest-deep whitespace-nowrap">₹8,999 <span className="font-body-sm text-on-surface-variant font-normal">for 2 guests</span></span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-label-lg text-label-lg uppercase tracking-wider text-forest-deep font-semibold">Mountain View Suite</span>
                  <span className="font-headline-sm text-headline-sm text-forest-deep whitespace-nowrap">₹10,999 <span className="font-body-sm text-on-surface-variant font-normal">for 2 guests</span></span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-forest-deep/70 bg-forest-deep/5 p-3 rounded-md">
                <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5 text-accent-gold">info</span>
                <p className="font-body-xs text-body-xs text-balance">
                  Full Moon (Pournami) and festival dates are priced separately. Please enquire for specific dates.
                </p>
              </div>
            </div>

          </div>
          
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-space-xl flex flex-col sm:flex-row items-center justify-center gap-space-md">
          <Link href="/contact" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
            <span>Book This Retreat</span>
            <span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 transition-transform">event_available</span>
          </Link>
          
          <a href="https://wa.me/918838198769" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white rounded-[9999px] font-label-md uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors text-label-md font-semibold px-8 py-3 min-h-[46px] border border-[#25D366]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp Now
          </a>
        </div>

      </div>
    </section>
  );
}
