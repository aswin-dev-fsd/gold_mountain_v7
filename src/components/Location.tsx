"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger, revealSection, createImageReveal } from "../utils/animations";

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapOverlayRef = useRef<HTMLDivElement>(null);
  const gpsRef = useRef<HTMLDivElement>(null);
  const travelCardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Intro Reveal
    if (introRef.current) {
      revealStagger(introRef.current.children, sectionRef.current!);
    }

    // Map Image Reveal
    if (mapRef.current) {
      createImageReveal(mapRef.current);
    }
    if (mapOverlayRef.current) {
      revealSection(mapOverlayRef.current, 0.4);
    }

    // GPS Info Fade In
    if (gpsRef.current) {
      revealSection(gpsRef.current, 0.6);
    }

    // Travel Cards Stagger
    if (travelCardsRef.current) {
      // selecting the actual inner cards to stagger
      const cards = travelCardsRef.current.querySelectorAll('.travel-card');
      revealStagger(cards, travelCardsRef.current, 0.3);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="location" className="w-full py-space-3xl bg-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div ref={introRef} className="max-w-3xl mb-space-2xl">
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="h-0.5 w-6 bg-accent-gold"></span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-accent-terracotta">Section 06 · Sacred Geography</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
            In the presence of Arunachala.
          </h2>
          <p className="font-headline-md text-headline-md text-secondary mt-space-xs font-serif italic">
            Tiruvannamalai, Tamil Nadu — The eternal beacon of silence and transformation.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-md leading-relaxed">
            Nestled along the quiet outer perimeter, Gold Mountain offers undisturbed visual access to sacred Mount Arunachala to the East and the undulating Parvati Malai mountain stretch to the West. Guests enjoy seamless proximity to the ancient Girivalam path while remaining enveloped in complete sanctuary quietude.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mb-space-2xl">
          
          {/* Orientation Map Box */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div ref={mapContainerRef} className="w-full h-96 rounded-xl overflow-hidden shadow-md relative bg-surface-cream" data-location="Arunachala, Tiruvannamalai, Tamil Nadu, India">
              <div 
                ref={mapRef}
                className="w-full h-full bg-cover bg-center transition-transform duration-1000"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDRdyHJqnJE92zop-G2JS7NpUvQOsxFFsWZ6YCzaiIo2ZXDU0X1SYv_Z2vzCt2yrYsWVtA75NTnfBPfNMs3Gx-YbYWCH0jmDEOJTEtsBWAoalST2FsDfVqTL3DOpiIWqeZ28qhUuwoYxuBebB2icrnA7VA8MCssZwvLZKAZVoDsMzJTxEUCcSHlJeOafUzpkfXIJT2ZiVNoLehFevkCi3i51CDDAhVUOOPEDwdRoFA8o0gZfISI3p5')" }}
              ></div>
              
              {/* Overlay Pin Details */}
              <div ref={mapOverlayRef} className="absolute top-space-md left-space-md p-space-md rounded-lg bg-forest-charcoal/90 text-canvas-ivory backdrop-blur-md max-w-[calc(100%-2rem)] sm:max-w-xs shadow-md border border-accent-gold/20">
                <div className="flex items-center gap-2 text-accent-gold mb-1">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">Sanctuary Coordinates</span>
                </div>
                <p className="font-headline-sm text-headline-sm">Outer Girivalam Ring</p>
                <p className="font-body-sm text-body-sm text-surface-container-high/80">Tiruvannamalai, Tamil Nadu 606603</p>
              </div>
            </div>
            
            <div ref={gpsRef} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-body-sm text-on-surface-variant px-1">
              <span className="flex items-center gap-1 font-label-sm text-label-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-forest-deep"></span> 
                Direct access to Girivalam Path
              </span>
              <span className="font-label-sm text-label-sm text-accent-gold font-medium">GPS: 12.2253° N, 79.0747° E</span>
            </div>
          </div>
          
          {/* Travel Guidance Card */}
          <div ref={travelCardsRef} className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="p-space-xl rounded-xl bg-surface-cream shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-space-md flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-gold">directions_car</span>
                Arriving at the Sanctuary
              </h3>
              <div className="space-y-space-md">
                <div className="travel-card p-space-md rounded-lg bg-canvas-ivory shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-accent-terracotta">Chennai International (MAA)</span>
                    <span className="font-headline-sm text-headline-sm text-forest-deep">3.5 Hours</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Smooth highway transit (180 km) via scenic Tindivanam route. Private airport transfers arranged on request.</p>
                </div>
                
                <div className="travel-card p-space-md rounded-lg bg-canvas-ivory shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-accent-terracotta">Bengaluru International (BLR)</span>
                    <span className="font-headline-sm text-headline-sm text-forest-deep">4.0 Hours</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Direct roadway (205 km) through Krishnagiri and Chengam ghats into the quiet valleys of Tiruvannamalai.</p>
                </div>
                
                <div className="travel-card p-space-md rounded-lg bg-canvas-ivory shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-accent-terracotta">Sri Ramanasramam &amp; Temples</span>
                    <span className="font-headline-sm text-headline-sm text-forest-deep">12 Minutes</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Close enough for early morning meditation and pradakshina, far enough to escape municipal bustle.</p>
                </div>
              </div>
              
              <div className="travel-card mt-space-lg pt-space-md border-t border-border-muted flex items-center justify-between gap-2">
                <span className="font-body-sm text-body-sm text-forest-deep font-medium">Chauffeur Service Available</span>
                <a href="#enquiry" className="inline-flex items-center justify-center font-label-sm text-label-sm uppercase tracking-wider text-forest-deep bg-accent-gold/20 hover:bg-accent-gold hover:text-forest-charcoal border border-accent-gold/40 hover:border-accent-gold px-4 py-2 min-h-[38px] rounded transition-all group font-semibold shadow-xs hover:shadow">
                  Book Transfer <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

