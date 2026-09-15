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
        <div ref={introRef} className="max-w-3xl mb-space-2xl">
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="h-0.5 w-6 bg-accent-gold"></span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-gold-light">Section 05 · The Living Sanctuary</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-canvas-ivory tracking-tight">
            More than a stay.
          </h2>
          <p className="font-headline-md text-headline-md text-gold-light mt-space-xs font-serif italic">
            A place shaped by nature, tradition, and a deeper connection to the surroundings.
          </p>
          <p className="font-body-md text-body-md text-surface-container-high/80 mt-space-md leading-relaxed">
            Every corner of Gold Mountain is deliberately tuned to cultivate stillness. Here, daily activities are not organized entertainments, but organic touchpoints with the soil, sacred hills, and ancient customs.
          </p>
        </div>
        
        {/* Experience Mosaic / Bento Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-2xl">
          
          {/* Experience 1 */}
          <div className="p-space-xl rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Sacred Alignment</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Shiva Shakti Darshanam</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Direct sacred sightlines to Arunachala in the East and Parvati Malai to the West, creating a unique energetic balance honoring the divine masculine and feminine principles.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-forest-deep">
              <span className="font-label-sm text-label-sm text-gold-light">Dawn &amp; Dusk Viewpoints</span>
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="p-space-xl rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">cruelty_free</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Compassionate Living</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Desi Cow Goshala</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Home to indigenous Gir and Kangayam cows cared for with gentle reverence. Guests may participate in peaceful morning feedings and discover the spiritual calm of the sanctuary.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-forest-deep">
              <span className="font-label-sm text-label-sm text-gold-light">Native Indigenous Breeds</span>
            </div>
          </div>
          
          {/* Experience 3 */}
          <div className="p-space-xl rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">water_lux</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Water Meditation</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Lotus Reflection Pond</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                A serene expanse of clear natural water reflecting the golden silhouette of the mountain at sunrise, surrounded by native water lilies, koi, and silent stepped stone ghats.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-forest-deep">
              <span className="font-label-sm text-label-sm text-gold-light">Silent Contemplation</span>
            </div>
          </div>
          
          {/* Experience 4 */}
          <div className="p-space-xl rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">blur_on</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Spatial Harmony</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Five-Element Philosophy</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                The spatial plan honors Pancha Bhoota — Earth, Water, Fire, Air, and Space. Healing pathways are specifically sequenced to balance sensory stimuli and restore equilibrium.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-forest-deep">
              <span className="font-label-sm text-label-sm text-gold-light">Vedic Spatial Design</span>
            </div>
          </div>
          
          {/* Experience 5 */}
          <div className="p-space-xl rounded-xl bg-forest-charcoal/80 shadow-md flex flex-col justify-between lg:col-span-2 hover:bg-forest-charcoal transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-[24px]">potted_plant</span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-accent-gold">Soil Medicine</span>
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mt-space-xs mb-space-xs">Organic Farm &amp; Medicinal Flora Garden</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/70 leading-relaxed">
                Walk through dense rows of Brahmi, Ashwagandha, Tulsi, Moringa, and heirloom indigenous vegetables. Learn herbal preparations and taste wild herbs harvested fresh during morning quiet walks guided by our master botanist.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-forest-deep flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <span className="font-label-sm text-label-sm text-gold-light">Guided Daily Walks at 07:30 AM</span>
              <a href="#dining" className="text-accent-gold hover:text-canvas-ivory transition-colors font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 group py-1">
                <span>Explore Farm To Table</span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Action */}
        <div ref={ctaRef} className="text-center">
          <a 
            href="#enquiry" 
            className="inline-flex items-center justify-center gap-space-sm bg-accent-gold text-forest-charcoal px-space-xl py-3.5 sm:py-space-md rounded-lg font-label-lg text-label-lg uppercase tracking-wider shadow-lg hover:bg-gold-light hover:border-gold-light border border-accent-gold active:scale-95 transition-all font-semibold min-h-[48px] hover:-translate-y-0.5"
          >
            <span>Explore All Experiences</span>
            <span className="material-symbols-outlined text-[18px]">explore</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}

