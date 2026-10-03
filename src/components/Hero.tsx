"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { isReducedMotion, EASE_CINEMATIC } from "../utils/animations";
import Link from "next/link";
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isReducedMotion()) return;
    
    gsap.registerPlugin(ScrollTrigger);

    // Initial Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
    
    // Background settle
    tl.fromTo(bgRef.current, 
      { scale: 1.05, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2 }
    )
    .fromTo(headlineRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=1.2"
    )
    .fromTo(paraRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(indicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.2"
    );

    // Scroll Parallax and Exit
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: gsap.timeline()
        .to(bgRef.current, { yPercent: 20, ease: "none" }, 0)
        .to(contentRef.current, { yPercent: 40, ease: "none" }, 0)
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-forest-charcoal">
      {/* Immersive Background Image with Subtle Parallax Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={bgRef}
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        >
        </div>
      </div>
      
      {/* Scrim / Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest-charcoal/80 via-forest-charcoal/40 to-forest-charcoal/85 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-forest-deep/30 to-forest-charcoal/90 pointer-events-none"></div>
      
      {/* Mountain Line Art SVG Silhouette Motif */}
      <div className="absolute bottom-0 left-0 right-0 z-10 opacity-20 pointer-events-none flex justify-center overflow-hidden">
        <svg className="w-full max-w-6xl h-28 text-accent-gold" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,120 L180,85 L320,110 L480,45 L620,10 L760,70 L910,35 L1060,95 L1200,60 L1200,120 Z" fill="currentColor" fillOpacity="0.15"></path>
          <path d="M0,120 L180,85 L320,110 L480,45 L620,10 L760,70 L910,35 L1060,95 L1200,60" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5"></path>
        </svg>
      </div>
      
      {/* Hero Content Container */}
      <div ref={contentRef} className="relative z-20 w-full max-w-5xl mx-auto px-margin lg:px-margin-desktop pt-32 pb-12 text-center flex flex-col items-center">
        
        {/* Headline */}
        <h1 ref={headlineRef} className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory max-w-4xl tracking-tight mb-space-md font-normal">
          A Wellness Stay in the Presence of <span className="text-accent-gold font-normal">Arunachala.</span>
        </h1>
        
        {/* Supporting Copy */}
        <p ref={paraRef} className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl mx-auto mb-space-xl font-light leading-relaxed">
          A peaceful resort where traditional wellness, healthy food, and nature come together in unhurried silence.
        </p>
        
        {/* Dual Call to Actions */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto">
          <Link href="/wellness" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Explore Wellness</span>
<span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
          <Link href="/stay" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] bg-canvas-ivory/15 hover:bg-canvas-ivory/25 text-canvas-ivory border border-canvas-ivory/40 hover:border-canvas-ivory/80 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-canvas-ivory/50 active:scale-95 transition-all duration-300">
<span>Plan Your Stay</span>
<span className="material-symbols-outlined text-accent-gold text-[18px]">calendar_month</span>
</Link>
        </div>
      </div>

      {/* Micro Indicator (out of flow so the content stays centred) */}
      <div ref={indicatorRef} className="absolute bottom-8 inset-x-0 z-20 flex justify-center text-surface-container-high/60">
        <span className="material-symbols-outlined text-[20px] text-accent-gold animate-bounce">expand_more</span>
      </div>
    </section>
  );
}

