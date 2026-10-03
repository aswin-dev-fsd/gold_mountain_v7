"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger, createParallax, createImageReveal, revealSection, createImageParallax } from "../utils/animations";

export default function Dining() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Image Reveal & Parallax
    if (imageRef.current) {
      createImageReveal(imageRef.current);
      createImageParallax(imageRef.current, imageContainerRef.current!);
    }

    // Floating Quote Delayed Entrance
    if (quoteRef.current) {
      revealSection(quoteRef.current, 0.5);
      createParallax(quoteRef.current, imageContainerRef.current!, -10);
    }

    // Content Reveal
    if (contentRef.current) {
      revealStagger(contentRef.current.children, sectionRef.current!);
    }

    // List Reveal
    if (listRef.current) {
      revealStagger(listRef.current.children, listRef.current, 0.2);
    }

    // CTA Reveal
    if (ctaRef.current) {
      revealSection(ctaRef.current, 0.4);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="dining" className="w-full py-space-3xl bg-surface-cream relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl lg:items-start items-center">
          
          {/* Dining Photography */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div ref={imageContainerRef} className="rounded-xl overflow-hidden shadow-2xl bg-canvas-ivory aspect-[4/3] group">
              <div 
                ref={imageRef}
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: "url('/images/dining_image.png')" }}
              ></div>
            </div>
            
            {/* Inset Quote / Tag */}
            <div ref={quoteRef} className="absolute -bottom-4 left-3 sm:-bottom-6 sm:left-2 lg:bottom-4 lg:left-4 bg-forest-deep text-canvas-ivory p-space-md rounded-xl shadow-xl max-w-[calc(100%-2rem)] sm:max-w-xs hidden sm:block border border-accent-gold/20">
              <span className="material-symbols-outlined text-accent-gold text-[32px] mb-space-xs">restaurant</span>
              <p className="font-headline-sm text-headline-sm text-canvas-ivory leading-snug">Ahara Chikitsa</p>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">&quot;Food taken in awareness is medicine; food taken in haste is burden.&quot;</p>
            </div>
          </div>
          
          {/* Dining Content */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <div ref={contentRef}>
              <div className="flex items-center gap-space-xs mb-space-xs">

                <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Conscious Nourishment</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
                Food that nourishes.
              </h2>
              <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-xs font-normal">
                What is grown here is served here, prepared with calm minds and clean fire.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm mb-space-lg leading-relaxed">
                We position food as an indispensable pillar of deep retreat restoration. Our kitchen cooks without chemical additives, refined sugars, or excessive oils. Instead, we elevate farm-harvested seasonal produce, traditional cold-pressed sesame oil, raw wild honey, and digestive spices like fresh cumin, turmeric, and ginger.
              </p>
            </div>
            
            <div ref={listRef} className="space-y-space-md mb-space-xl">
              <div className="flex items-start gap-space-md">
                <span className="w-8 h-8 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[16px]">eco</span>
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-forest-deep">Purely Sattvic &amp; Seasonal</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Wholesome vegetarian dining that encourages mental clarity, light digestion, and deeper meditation.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-md">
                <span className="w-8 h-8 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[16px]">water_drop</span>
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-forest-deep">Herbal Infusions &amp; Decoctions</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Customized herbal teas (Kashayams) brewed fresh twice daily from garden-picked holy basil, vetiver, and lemongrass.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-md">
                <span className="w-8 h-8 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[16px]">group</span>
                </span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-forest-deep">Communal &amp; Private Dining Verandas</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Enjoy mindful meals in shared silence or engage in gentle discussion with fellow seekers overlooking the lotus pond.</p>
                </div>
              </div>
            </div>
            
            <div ref={ctaRef}>
              <a href="#enquiry" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Discover Dining &amp; Menus</span>
<span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}



