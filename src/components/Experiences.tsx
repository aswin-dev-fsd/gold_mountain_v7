"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (introRef.current) {
      revealStagger(introRef.current.children, sectionRef.current!);
    }

    if (cardsRef.current) {
      revealStagger(cardsRef.current.children, cardsRef.current, 0.2);
    }

    if (ctaRef.current) {
      revealStagger([ctaRef.current], ctaRef.current);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="experiences" className="w-full py-space-3xl bg-forest-deep text-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div ref={introRef} className="max-w-3xl mb-space-lg">
          <div className="flex items-center gap-space-xs mb-space-xs">

            <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">The Living Sanctuary</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-canvas-ivory tracking-tight">
            More than a stay.
          </h2>
          <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-xs font-normal">
            A place shaped by nature, tradition, and a deeper connection to the surroundings.
          </p>
          <p className="font-body-md text-body-md text-surface-container-high/80 mt-space-sm leading-relaxed">
            Every corner of Gold Mountain is deliberately tuned to cultivate stillness. Here, daily activities are not organized entertainments, but organic touchpoints with the soil, sacred hills, and ancient customs.
          </p>
        </div>
        
        {/* Experience Mosaic / Bento Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-2xl">
          
          {/* Experience 1 */}
          <div className="p-space-lg rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Sacred Alignment</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Shiva Shakti Darshanam</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Sightlines to Arunachala in the east and Parvati Malai in the west, especially beautiful at dawn and dusk.
              </p>
            </div>
            <div className="mt-space-lg pt-space-lg border-t border-forest-deep flex items-center min-h-[42px]">
              <span className="font-label-sm text-label-sm text-accent-gold">Dawn &amp; Dusk Viewpoints</span>
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="p-space-lg rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">cruelty_free</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Compassionate Living</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Goshala with Kangayam Cows</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                A traditional cow shelter supporting the resort&apos;s farming cycle. Guests can join the peaceful morning feeding.
              </p>
            </div>
            <div className="mt-space-lg pt-space-lg border-t border-forest-deep flex items-center min-h-[42px]">
              <span className="font-label-sm text-label-sm text-accent-gold">Native Indigenous Breeds</span>
            </div>
          </div>
          
          {/* Experience 3 */}
          <div className="p-space-lg rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">water_lux</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Water Meditation</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Lotus Reflection Pond</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Native water lilies and stepped stone ghats make the lotus reflection pond a quiet place for contemplation.
              </p>
            </div>
            <div className="mt-space-lg pt-space-lg border-t border-forest-deep flex items-center min-h-[42px]">
              <span className="font-label-sm text-label-sm text-accent-gold">Silent Contemplation</span>
            </div>
          </div>
          
          {/* Experience 4 */}
          <div className="p-space-lg rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">blur_on</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Spatial Harmony</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Five-Element Philosophy</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Earth, water, fire, air and space shape the layout of the resort.
              </p>
            </div>
            <div className="mt-space-lg pt-space-lg border-t border-forest-deep flex items-center min-h-[42px]">
              <span className="font-label-sm text-label-sm text-accent-gold">Vedic Spatial Design</span>
            </div>
          </div>
          
          {/* Experience 5 */}
          <div className="p-space-lg rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between lg:col-span-2 hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">potted_plant</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Soil Medicine</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Organic Farm &amp; Medicinal Garden</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Fresh vegetables and herbs such as Brahmi, Ashwagandha, Tulsi and Moringa grow here. Ask about a guided walk through the gardens.
              </p>
            </div>
            <div className="mt-space-lg pt-space-lg border-t border-forest-deep flex items-center min-h-[42px]">
                <span className="font-label-sm text-label-sm text-accent-gold">Garden Walks on Request</span>
              </div>
          </div>
          
        </div>
        
        {/* Action */}
        <div ref={ctaRef} className="text-center">
          <a href="/about-us#estate" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-accent-gold text-forest-charcoal shadow-sm hover:bg-gold-light hover:border-gold-light border border-accent-gold">
<span>Explore the Estate</span>
<span aria-hidden="true" className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
        </div>
        
      </div>
    </section>
  );
}






