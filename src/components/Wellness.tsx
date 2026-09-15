"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger, createParallax, createImageReveal } from "../utils/animations";

export default function Wellness() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const pillarsTriggerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header elements stagger
    if (headerRef.current) {
      revealStagger(headerRef.current.children, headerRef.current);
    }

    // Image reveal & parallax
    if (imageRef.current) {
      createImageReveal(imageRef.current);
      createParallax(imageRef.current, imageContainerRef.current!, 10);
    }

    // Overlay depth entrance
    if (overlayRef.current && imageContainerRef.current) {
      revealStagger([overlayRef.current], imageContainerRef.current, 0.4);
    }

    // Narrative Card reveal
    if (narrativeRef.current) {
      revealStagger([narrativeRef.current], narrativeRef.current, 0.2);
    }

    // Pillars stagger
    if (pillarsTriggerRef.current) {
      const pillars = pillarsTriggerRef.current.querySelectorAll('.pillar-card');
      revealStagger(pillars, pillarsTriggerRef.current);
    }

    // CTA reveal
    if (ctaRef.current) {
      revealStagger([ctaRef.current], ctaRef.current, 0);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="wellness" className="w-full py-space-3xl bg-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-lg">
          <div className="max-w-2xl">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="h-0.5 w-6 bg-accent-gold"></span>
              <span className="font-label-md text-label-md uppercase tracking-widest text-accent-terracotta">Section 02 · Sacred Restoration</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
              Wellness, in its own time.
            </h2>
            <p className="font-headline-md text-headline-md text-secondary mt-space-xs font-serif italic">
              A place built around healing, healthy living, and traditional practices.
            </p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
            Gold Mountain offers an unhurried environment where guests can slow down, reconnect, and explore authentic Ayurvedic living. Healing here is an organic way of being — not a clinical transaction.
          </p>
        </div>
        
        {/* Feature Visual & Immersion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-space-2xl">
          
          {/* Main Large Wellness Photo */}
          <div ref={imageContainerRef} className="lg:col-span-7 relative group rounded-xl overflow-hidden shadow-xl bg-surface-cream">
            <div 
              ref={imageRef}
              className="w-full aspect-[4/3] bg-cover bg-center transition-transform duration-700" 
              style={{ backgroundImage: "url('/images/wellness_image.png')" }}
            ></div>
            
            {/* Editorial Floating Overlay Tag */}
            <div ref={overlayRef} className="absolute bottom-3 left-3 right-3 sm:bottom-space-lg sm:left-space-lg sm:right-space-lg p-3 sm:p-space-md rounded-lg bg-forest-charcoal/90 text-canvas-ivory backdrop-blur-md flex items-center justify-between shadow-lg">
              <div className="min-w-0 pr-2">
                <p className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-widest text-accent-gold">Authentic Ayurvedic Lineage</p>
                <p className="font-headline-sm text-xs sm:text-headline-sm text-canvas-ivory leading-tight">Personalized Vaidya Consultations &amp; Abhyanga</p>
              </div>
              <span className="material-symbols-outlined text-accent-gold text-[24px] sm:text-[28px] hidden sm:block shrink-0">self_improvement</span>
            </div>
          </div>
          
          {/* Wellness Narrative & Quote Card */}
          <div ref={narrativeRef} className="lg:col-span-5 flex flex-col gap-space-lg bg-surface-cream p-space-xl rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-forest-deep text-accent-gold flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">spa</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-forest-deep">
              A Return to Wholeness in the Shadow of the Red Mountain
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our wellness paradigm honors centuries-old classical traditions. We do not prescribe rigid regimes; instead, we listen to the seasons, the constitution of your doshas, and the gentle rhythm of sacred Arunachala.
            </p>
            <div className="space-y-space-sm">
              <div className="flex items-center gap-space-sm text-forest-charcoal font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-accent-gold text-[20px]">check_circle</span>
                <span>Tailored Panchakarma and Detox programs</span>
              </div>
              <div className="flex items-center gap-space-sm text-forest-charcoal font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-accent-gold text-[20px]">check_circle</span>
                <span>Open-air Shala morning and sunset Hatha yoga</span>
              </div>
              <div className="flex items-center gap-space-sm text-forest-charcoal font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-accent-gold text-[20px]">check_circle</span>
                <span>Meditation caves and stillness reflection spots</span>
              </div>
            </div>
            <div className="pt-space-sm">
              <a href="#enquiry" className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-accent-terracotta hover:text-forest-deep transition-colors group">
                <span>View Treatment Rituals</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* 5 Wellness Pillars Bento-style Grid */}
        <div ref={pillarsTriggerRef} className="mb-space-2xl">
          <div className="text-center max-w-xl mx-auto mb-space-xl pillar-card">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Our Foundation</span>
            <h3 className="font-headline-md text-headline-md text-forest-deep mt-space-xs">The Five Pillars of Natural Health</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-space-md">
            {/* Pillar 1 */}
            <div className="pillar-card p-space-md sm:p-space-lg rounded-xl bg-surface-cream hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">local_pharmacy</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-terracotta">01 · Body</span>
                <h4 className="font-headline-sm text-headline-sm text-forest-deep mt-space-xs mb-space-xs break-words">Ayurveda</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Traditional therapies matched to individual constitution, herbal concoctions, and healing bodywork.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-border-muted/40">
                <span className="font-label-sm text-label-sm text-secondary">Tailored Doshas</span>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="pillar-card p-space-md sm:p-space-lg rounded-xl bg-surface-cream hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">self_improvement</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-terracotta">02 · Mind</span>
                <h4 className="font-headline-sm text-headline-sm text-forest-deep mt-space-xs mb-space-xs break-words">Meditation</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Guided mindfulness and quiet contemplation attuned to the sacred timeless silence of Mount Arunachala.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-border-muted/40">
                <span className="font-label-sm text-label-sm text-secondary">Inner Stillness</span>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="pillar-card p-space-md sm:p-space-lg rounded-xl bg-surface-cream hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">air</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-terracotta">03 · Spirit</span>
                <h4 className="font-headline-sm text-headline-sm text-forest-deep mt-space-xs mb-space-xs break-words">Yoga &amp; Prana</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Restorative movement, pranayama, and breathwork connecting somatic flow with tranquil presence.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-border-muted/40">
                <span className="font-label-sm text-label-sm text-secondary">Daily Shala</span>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="pillar-card p-space-md sm:p-space-lg rounded-xl bg-surface-cream hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">nutrition</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-terracotta">04 · Food</span>
                <h4 className="font-headline-sm text-headline-sm text-forest-deep mt-space-xs mb-space-xs break-words">Sattvic Diet</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pure seasonal nourishment harvested directly from our chemical-free soil to kindle digestive fire.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-border-muted/40">
                <span className="font-label-sm text-label-sm text-secondary">Soil to Plate</span>
              </div>
            </div>
            {/* Pillar 5 */}
            <div className="pillar-card p-space-md sm:p-space-lg rounded-xl bg-surface-cream hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">landscape</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-terracotta">05 · Habitat</span>
                <h4 className="font-headline-sm text-headline-sm text-forest-deep mt-space-xs mb-space-xs break-words">Sacred Earth</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Biophilic architecture aligned with Arunachala to the East and the ancient Parvati Malai ridge to the West.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-border-muted/40">
                <span className="font-label-sm text-label-sm text-secondary">Elemental Peace</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action */}
        <div ref={ctaRef} className="text-center">
          <a 
            href="#stay" 
            className="inline-flex items-center justify-center gap-space-sm bg-forest-deep text-canvas-ivory px-space-lg sm:px-space-xl py-3 sm:py-space-md rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:bg-forest-charcoal hover:border-accent-gold/60 border border-forest-deep hover:-translate-y-0.5 active:scale-95 transition-all min-h-[48px]"
          >
            <span>Explore Wellness Programs</span>
            <span className="material-symbols-outlined text-accent-gold text-[18px]">calendar_add_on</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}

