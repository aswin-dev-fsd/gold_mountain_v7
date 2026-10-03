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
  const attractionsRef = useRef<HTMLDivElement>(null);

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

    // Attractions Stagger
    if (attractionsRef.current && sectionRef.current) {
      revealStagger(attractionsRef.current.querySelectorAll('.attraction-item'), sectionRef.current, 0.5);
    }

    // Travel Cards Stagger
    if (travelCardsRef.current) {
      const cards = travelCardsRef.current.querySelectorAll('.travel-card');
      revealStagger(cards, travelCardsRef.current, 0.3);
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="location" className="w-full py-space-3xl bg-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div ref={introRef} className="max-w-3xl mb-space-xl">
          <div className="flex items-center gap-space-xs mb-space-xs">

            <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Sacred Geography</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
            In the presence of Arunachala.
          </h2>
          <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-xs font-normal">
            Thiruvannamalai, Tamil Nadu, the eternal beacon of silence and transformation.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
            Nestled along the quiet outer perimeter, Gold Mountain offers undisturbed visual access to sacred Mount Arunachala to the East and the undulating Parvati Malai mountain stretch to the West. Guests enjoy seamless proximity to the ancient Girivalam path while remaining enveloped in complete sanctuary quietude.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mb-space-2xl">
          
          {/* Orientation Map Box & Attractions */}
          <div className="lg:col-span-7 flex flex-col gap-space-md h-full">
            <div ref={mapContainerRef} className="w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-md relative bg-surface-cream" data-location="Arunachala, Thiruvannamalai, Tamil Nadu, India">
              <div 
                ref={mapRef}
                className="w-full h-full bg-cover bg-center transition-transform duration-1000"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDRdyHJqnJE92zop-G2JS7NpUvQOsxFFsWZ6YCzaiIo2ZXDU0X1SYv_Z2vzCt2yrYsWVtA75NTnfBPfNMs3Gx-YbYWCH0jmDEOJTEtsBWAoalST2FsDfVqTL3DOpiIWqeZ28qhUuwoYxuBebB2icrnA7VA8MCssZwvLZKAZVoDsMzJTxEUCcSHlJeOafUzpkfXIJT2ZiVNoLehFevkCi3i51CDDAhVUOOPEDwdRoFA8o0gZfISI3p5')" }}
              ></div>
              
              {/* Overlay Pin Details */}
              <div ref={mapOverlayRef} className="absolute bottom-4 left-4 bg-forest-deep text-canvas-ivory p-space-md rounded-xl shadow-xl max-w-[calc(100%-2rem)] sm:max-w-xs border border-accent-gold/20">
                <span className="material-symbols-outlined text-accent-gold text-[32px] mb-space-xs">location_on</span>
                <p className="font-headline-sm text-headline-sm text-canvas-ivory leading-snug">Sanctuary Coordinates</p>
                <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-1">Gold Mountain Wellness Resort, Kottangal, Girivalam Path, Thiruvannamalai 606604</p>
              </div>
            </div>
            
            <div ref={gpsRef} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-body-sm text-on-surface-variant px-1">
              <span className="flex items-center gap-1 font-label-sm text-label-sm uppercase">
                <span className="w-2 h-2 rounded-full bg-forest-deep"></span> 
                Direct access to Girivalam Path
              </span>
              <span className="font-label-sm text-label-sm text-accent-gold font-medium">GPS: 12.2429° N, 79.0256° E</span>
            </div>

            {/* NEW: Nearby Attractions */}
            <div ref={attractionsRef} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="attraction-item flex items-center justify-between p-4 bg-surface-cream rounded-lg border border-border-muted/50">
                <span className="font-body-sm text-forest-deep">Girivalam Path</span>
                <span className="font-label-sm text-forest-deep tracking-wider">1.0 KM</span>
              </div>
              <div className="attraction-item flex items-center justify-between p-4 bg-surface-cream rounded-lg border border-border-muted/50">
                <span className="font-body-sm text-forest-deep">Aadhi Arunachala Temple</span>
                <span className="font-label-sm text-forest-deep tracking-wider">1.5 KM</span>
              </div>
              <div className="attraction-item flex items-center justify-between p-4 bg-surface-cream rounded-lg border border-border-muted/50">
                <span className="font-body-sm text-forest-deep">Ramanasramam</span>
                <span className="font-label-sm text-forest-deep tracking-wider">5.0 KM</span>
              </div>
              <div className="attraction-item flex items-center justify-between p-4 bg-surface-cream rounded-lg border border-border-muted/50">
                <span className="font-body-sm text-forest-deep">Arunachaleswarar Temple</span>
                <span className="font-label-sm text-forest-deep tracking-wider">6.0 KM</span>
              </div>
            </div>
          </div>
          
          {/* Travel Guidance Card */}
          <div className="lg:col-span-5 h-full">
            <div ref={travelCardsRef} className="p-space-xl rounded-xl bg-surface-cream shadow-sm h-full flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-space-md flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-gold">directions_car</span>
                Arriving at the Sanctuary
              </h3>
              <div className="space-y-space-md flex-grow">
                <div className="travel-card p-space-md rounded-lg bg-canvas-ivory shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-forest-deep">Chennai International (MAA)</span>
                    <span className="font-headline-sm text-headline-sm text-forest-deep">3.5 Hours</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Smooth highway transit (180 km) via scenic Tindivanam route. We provide dedicated airport transfer assistance.</p>
                </div>
                
                <div className="travel-card p-space-md rounded-lg bg-canvas-ivory shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-forest-deep">Bengaluru International (BLR)</span>
                    <span className="font-headline-sm text-headline-sm text-forest-deep">4.0 Hours</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Direct roadway (205 km) through Krishnagiri and Chengam ghats into the quiet valleys of Thiruvannamalai.</p>
                </div>

                <div className="travel-card p-space-md rounded-lg bg-canvas-ivory shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-forest-deep">Katpadi Junction (Railway)</span>
                    <span className="font-headline-sm text-headline-sm text-forest-deep">2.0 Hours</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Major railway junction (105 km) with direct connections from all major cities. Pre-booked cabs available for a comfortable drive.</p>
                </div>
              </div>
              
              <div className="travel-card mt-space-lg pt-space-md border-t border-border-muted flex items-center justify-between gap-2 mt-auto">
                <span className="font-body-sm text-body-sm text-forest-deep font-medium">Chauffeur Service Available</span>
                <a href="/contact" className="inline-flex items-center justify-center font-label-sm text-label-sm uppercase tracking-wider text-canvas-ivory bg-forest-deep hover:bg-forest-charcoal border border-forest-deep hover:border-accent-gold/40 px-4 py-2 min-h-[38px] rounded transition-all group font-semibold shadow-sm active:scale-95">
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


