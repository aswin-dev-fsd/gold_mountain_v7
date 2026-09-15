"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger, createParallax, createImageReveal, revealSection } from "../utils/animations";

export default function Resort() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageContainerRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Left Content Stagger
    if (leftContentRef.current) {
      revealStagger(leftContentRef.current.children, sectionRef.current!);
    }

    // Right Image Reveal
    if (rightImageRef.current) {
      createImageReveal(rightImageRef.current);
      createParallax(rightImageRef.current, rightImageContainerRef.current!, 15);
    }

    // Cards Stagger
    if (cardsRef.current) {
      revealStagger(cardsRef.current.children, cardsRef.current, 0.3);
    }

    // Badge Delayed Entrance
    if (badgeRef.current) {
      revealSection(badgeRef.current, 0.6);
      createParallax(badgeRef.current, rightImageContainerRef.current!, -10);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="the-resort" className="w-full py-space-3xl bg-surface-cream relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          
          {/* Left: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col">
            <div ref={leftContentRef}>
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="h-0.5 w-6 bg-accent-gold"></span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-accent-terracotta">Section 03 · Sanctuary Architecture</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
                Stay close to nature. <br className="hidden sm:block"/>Stay close to yourself.
              </h2>
              <p className="font-body-lg text-body-lg text-forest-charcoal/90 mt-space-md mb-space-lg leading-relaxed">
                Gold Mountain is first and foremost a peaceful resort that offers a grounded, meaningful stay. Not an impersonal clinic or busy tourist hotel — a serene sanctuary where natural materials harmonize with the earth.
              </p>
            </div>
            
            {/* Key Architectural Facets */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-xl">
              <div className="p-space-md rounded-lg bg-surface-container-lowest/80 shadow-sm">
                <div className="flex items-center gap-space-xs text-accent-terracotta mb-1">
                  <span className="material-symbols-outlined text-[20px]">roofing</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Terracotta &amp; Stone</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Cool Athangudi tiles, local granite masonry, and breathable clay roof tiles.</p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-lowest/80 shadow-sm">
                <div className="flex items-center gap-space-xs text-accent-gold mb-1">
                  <span className="material-symbols-outlined text-[20px]">water</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Lotus Ponds</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Living reflection waters soothing the midday heat and welcoming native birds.</p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-lowest/80 shadow-sm">
                <div className="flex items-center gap-space-xs text-forest-deep mb-1">
                  <span className="material-symbols-outlined text-[20px]">deck</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Verandas &amp; Gardens</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Open-air shaded corridors overlooking fragrant jasmine and medicinal tulsi groves.</p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-lowest/80 shadow-sm">
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  <span className="material-symbols-outlined text-[20px]">temple_hindu</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Silent Shalas</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Dedicated quiet spaces intentionally isolated from digital noise and distraction.</p>
              </div>
            </div>
            <div>
              <a 
                href="#stay" 
                className="inline-flex items-center gap-space-sm bg-forest-deep text-canvas-ivory px-space-lg py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider shadow-md hover:bg-forest-charcoal hover:border-accent-gold/50 border border-forest-deep active:scale-95 transition-all group min-h-[44px]"
              >
                <span>Explore the Resort</span>
                <span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">arrow_outward</span>
              </a>
            </div>
          </div>
          
          {/* Right: Layered Image Composition */}
          <div className="lg:col-span-6 relative">
            <div ref={rightImageContainerRef} className="rounded-xl overflow-hidden shadow-2xl bg-canvas-ivory aspect-[4/3]">
              <div 
                ref={rightImageRef}
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbc1dAtW8lplSOhvQcqHBVeGpQhdF-oUn_WEz1SqN0VzX79McoGhpsI_7SY3DC1KS3xSthm58U7B0hDmlcZZX2AGjR8HhXK7K-rwSqh3Kb677ALVjR-gwJZqJIDyzSfxZaAQUPG9saFF5QJoxxlR1Z10GGYgkOz8Zj3Xa8Ym2wMQz1XHy8ZOB5sGj0J2ZortSftwgX3hBMuFVEejenIwhrTt85AdiiJItGxDJu2Eq0ZD2mY2PbfZj_')" }}
              ></div>
            </div>
            
            {/* Inset Floating Badge */}
            <div ref={badgeRef} className="absolute -bottom-4 left-3 sm:-bottom-6 sm:left-2 lg:bottom-4 lg:left-4 bg-forest-deep text-canvas-ivory p-space-md sm:p-space-lg rounded-xl shadow-xl max-w-[calc(100%-2rem)] sm:max-w-xs hidden sm:block border border-accent-gold/20">
              <span className="material-symbols-outlined text-accent-gold text-[32px] mb-space-xs">architecture</span>
              <p className="font-headline-sm text-headline-sm text-canvas-ivory leading-snug">Vernacular Heritage</p>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Constructed with minimal ecological disturbance to the sacred terrain.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

