"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isReducedMotion } from "../utils/animations";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (isReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="w-full bg-forest-charcoal text-canvas-ivory pt-space-3xl pb-space-xl">
      <div className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-space-lg xl:gap-space-xl pb-space-2xl">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2 flex flex-col items-start pr-0 xl:pr-space-lg mb-space-md xl:mb-0">
            <a href="/" className="inline-flex items-center mb-space-md rounded-lg bg-canvas-ivory px-4 py-3" aria-label="Gold Mountain Wellness Sanctuary Home">
              <img alt="Gold Mountain Wellness Resort" className="h-12 w-auto object-contain" src="/images/logo.png" />
            </a>
            <p className="font-body-md text-body-md text-surface-container-high/80 mb-space-lg leading-relaxed max-w-xl">
              A peaceful sanctuary where traditional Ayurveda, mindful meditation, farm-to-table dining, and sacred nature come together in the eternal presence of sacred Arunachala.
            </p>
            <div className="flex items-center gap-space-xs text-accent-gold font-label-md text-label-md uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">spa</span>
              <span>Thiruvannamalai, Tamil Nadu</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Wellness</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li><a href="#wellness" className="hover:text-canvas-ivory transition-colors">Ayurveda Programs</a></li>
              <li><a href="#wellness" className="hover:text-canvas-ivory transition-colors">Yoga Shala</a></li>
              <li><a href="#wellness" className="hover:text-canvas-ivory transition-colors">Lifestyle Consultations</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Stay</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li><a href="#stay" className="hover:text-canvas-ivory transition-colors">Garden Cottages</a></li>
              <li><a href="#stay" className="hover:text-canvas-ivory transition-colors">Hill View Suites</a></li>
              <li><a href="#stay" className="hover:text-canvas-ivory transition-colors">Wellness Villas</a></li>
              <li><a href="#stay" className="hover:text-canvas-ivory transition-colors">Private Sanctums</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Experiences</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li><a href="#experiences" className="hover:text-canvas-ivory transition-colors">Shiva Shakti Darshan</a></li>
              <li><a href="#experiences" className="hover:text-canvas-ivory transition-colors">Organic Farm &amp; Garden</a></li>
              <li><a href="#experiences" className="hover:text-canvas-ivory transition-colors">Inner Girivalam Path</a></li>
              <li><a href="#experiences" className="hover:text-canvas-ivory transition-colors">Nature &amp; Temple Walks</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Contact</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li>Kottangal, Girivalam Path</li>
              <li>Thiruvannamalai 606604</li>
              <li>
                <a href="https://wa.me/918838198769" className="hover:text-canvas-ivory transition-colors flex items-center gap-space-xs mt-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-accent-gold">chat</span> WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-canvas-ivory transition-colors flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-accent-gold">map</span> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm text-surface-container-high/60 border-t border-canvas-ivory/15">
          <p>© 2024 Gold Mountain Wellness Resort. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-space-lg">
            <span>Preserving Arunachala Ecology</span>
            <a href="#" className="hover:text-canvas-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-canvas-ivory transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


