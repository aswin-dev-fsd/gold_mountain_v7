"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (introRef.current) {
      revealStagger(introRef.current.children, sectionRef.current!);
    }

    if (badgesRef.current) {
      revealStagger(badgesRef.current.children, badgesRef.current, 0.2);
    }

    if (reviewsRef.current) {
      revealStagger(reviewsRef.current.children, reviewsRef.current, 0.3);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full py-space-3xl bg-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div ref={introRef} className="text-center max-w-2xl mx-auto mb-space-2xl">
          <div className="flex items-center justify-center gap-space-xs mb-space-xs">
            <span className="h-0.5 w-6 bg-accent-gold"></span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-accent-terracotta">Integrity &amp; Presence</span>
            <span className="h-0.5 w-6 bg-accent-gold"></span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
            A Sanctuary Built on Authenticity.
          </h2>
          <p className="font-headline-md text-headline-md text-secondary mt-space-xs font-serif italic">
            Uncompromised standards, certified lineage, and quiet dedication.
          </p>
        </div>
        
        {/* Trust Badges Bar */}
        <div ref={badgesRef} className="grid grid-cols-2 md:grid-cols-4 gap-space-sm sm:gap-space-md mb-space-2xl">
          <div className="p-space-md sm:p-space-lg rounded-xl bg-surface-cream text-center flex flex-col items-center shadow-xs">
            <span className="material-symbols-outlined text-forest-deep text-[32px] mb-2">verified</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep">Certified Vaidyas</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">BAMS-qualified resident Ayurvedic doctors</p>
          </div>
          <div className="p-space-md sm:p-space-lg rounded-xl bg-surface-cream text-center flex flex-col items-center shadow-xs">
            <span className="material-symbols-outlined text-accent-gold text-[32px] mb-2">compost</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep">100% Organic Soil</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Zero chemical pesticides or synthetic inputs</p>
          </div>
          <div className="p-space-md sm:p-space-lg rounded-xl bg-surface-cream text-center flex flex-col items-center shadow-xs">
            <span className="material-symbols-outlined text-accent-terracotta text-[32px] mb-2">foundation</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep">Earthen Architecture</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Low-carbon natural lime, stone &amp; clay</p>
          </div>
          <div className="p-space-md sm:p-space-lg rounded-xl bg-surface-cream text-center flex flex-col items-center shadow-xs">
            <span className="material-symbols-outlined text-forest-deep text-[32px] mb-2">self_improvement</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep">Traditional Lineage</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Rooted in ancient classical Kerala &amp; Tamil texts</p>
          </div>
        </div>
        
        {/* Real Guest Reflections */}
        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Review 1 */}
          <div className="p-space-xl rounded-xl bg-surface-cream shadow-sm flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex text-accent-gold">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-forest-charcoal italic leading-relaxed">
                &quot;The silence of this place under the gaze of Arunachala is unlike anything I experienced in years of travel. The treatments were genuine, unhurried, and deeply grounding.&quot;
              </p>
            </div>
            <div className="pt-space-md border-t border-border-muted mt-space-md">
              <p className="font-headline-sm text-headline-sm text-forest-deep">Elena Lindqvist</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Stockholm, Sweden · 14-Day Ayurvedic Retreat</p>
            </div>
          </div>
          
          {/* Review 2 */}
          <div className="p-space-xl rounded-xl bg-surface-cream shadow-sm flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex text-accent-gold">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-forest-charcoal italic leading-relaxed">
                &quot;Not a commercial resort and not a clinical hospital — it occupies the sweetest balance. The food is light and vibrant, and the early morning lotus pond meditation is life-changing.&quot;
              </p>
            </div>
            <div className="pt-space-md border-t border-border-muted mt-space-md">
              <p className="font-headline-sm text-headline-sm text-forest-deep">Dr. Rajesh Swaminathan</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Bengaluru, India · Mountain Suite Guest</p>
            </div>
          </div>
          
          {/* Review 3 */}
          <div className="p-space-xl rounded-xl bg-surface-cream shadow-sm flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex text-accent-gold">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-forest-charcoal italic leading-relaxed">
                &quot;Waking up to the mountain mist, walking through the herbal gardens, and consulting with the compassionate doctors gave me tools I still carry home with me.&quot;
              </p>
            </div>
            <div className="pt-space-md border-t border-border-muted mt-space-md">
              <p className="font-headline-sm text-headline-sm text-forest-deep">Claire Vaugrenard</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Lyon, France · 21-Day Panchakarma</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

