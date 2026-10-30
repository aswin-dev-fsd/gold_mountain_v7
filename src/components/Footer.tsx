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
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="w-full bg-forest-charcoal text-canvas-ivory pt-12 lg:pt-16 pb-space-xl">
      <div className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-space-lg xl:gap-space-xl pb-space-xl">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2 flex flex-col items-start pr-0 xl:pr-space-lg mb-space-md xl:mb-0">
            <a href="/" className="inline-flex items-center mb-space-md" aria-label="Gold Mountain Wellness Resort Home">
              <img alt="Gold Mountain Wellness Resort" className="h-24 sm:h-28 w-auto object-contain" src="/images/logo.png" />
            </a>
            <p className="font-body-md text-body-md text-surface-container-high/80 mb-space-lg leading-relaxed max-w-xl">
              A peaceful resort where traditional Ayurveda, mindful meditation, farm-to-table dining, and sacred nature come together in the eternal presence of sacred Arunachala.
            </p>
            <div className="flex items-center gap-space-xs text-accent-gold font-label-md text-label-md uppercase tracking-wider">
              <svg aria-hidden="true" className="h-[18px] w-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C6 21 2 17 2 11c6 0 10 4 10 10Zm0 0c6 0 10-4 10-10-6 0-10 4-10 10Zm0-8c-3-3-3-6 0-10 3 4 3 7 0 10Z"/></svg>
              <span>Tiruvannamalai, Tamil Nadu</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Wellness</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li><a href="/ayurveda-treatments-tiruvannamalai" className="hover:text-canvas-ivory transition-colors">Ayurveda Programs</a></li>
              <li><a href="/wellness-resort-tiruvannamalai" className="hover:text-canvas-ivory transition-colors">Yoga and Retreats</a></li>
              <li><a href="/wellness-resort-tiruvannamalai#spiritual-retreat" className="hover:text-canvas-ivory transition-colors">Spiritual Retreat</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Stay</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li><a href="/rooms-in-tiruvannamalai#deluxe" className="hover:text-canvas-ivory transition-colors">Mountain View Deluxe</a></li>
              <li><a href="/rooms-in-tiruvannamalai#suite" className="hover:text-canvas-ivory transition-colors">Mountain View Suite</a></li>
              <li><a href="/rooms-in-tiruvannamalai#family-suite" className="hover:text-canvas-ivory transition-colors">Mountain View Family Suite</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Experiences</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li><a href="/about-us#estate" className="hover:text-canvas-ivory transition-colors">Organic Farm &amp; Garden</a></li>
              <li><a href="/#location" className="hover:text-canvas-ivory transition-colors">Girivalam Path</a></li>
              <li><a href="/#location" className="hover:text-canvas-ivory transition-colors">Nature &amp; Temple Walks</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-space-md">Contact</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-container-high/70">
              <li>Kottangal, Girivalam Path</li>
              <li>Tiruvannamalai 606604</li>
              <li>
                <a href="https://wa.me/918838198769" className="hover:text-canvas-ivory transition-colors flex items-center gap-space-xs mt-space-xs">
                  <svg aria-hidden="true" className="h-4 w-4 shrink-0 translate-x-px text-accent-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.85 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.51-8.42Zm-8.47 18.37h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.66-.24-.37a9.91 9.91 0 0 1-1.52-5.24c0-5.5 4.48-9.98 9.99-9.98a9.9 9.9 0 0 1 7.06 2.92 9.9 9.9 0 0 1 2.92 7.06c0 5.51-4.48 9.99-10 9.99Zm5.48-7.48c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg> WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=12.2428722%2C79.0256161" target="_blank" rel="noopener noreferrer" className="hover:text-canvas-ivory transition-colors flex items-center gap-space-xs">
                  <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-7 3V6l7-3 6 3 7-3v15l-7 3-6-3Zm0 0V3m6 3v15"/></svg> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-y-4 font-label-sm text-label-sm text-surface-container-high/60 border-t border-canvas-ivory/15">
          <p className="flex-1 text-center md:text-left">© 2026 Gold Mountain Wellness Resort. All rights reserved.</p>
          <div className="flex items-center justify-center gap-x-6">
            <a href="/privacy-policy" className="hover:text-canvas-ivory transition-colors">Privacy Policy</a>
            <span className="text-canvas-ivory/20" aria-hidden="true">&bull;</span>
            <a href="/terms-and-conditions" className="hover:text-canvas-ivory transition-colors">Terms &amp; Conditions</a>
          </div>
          <p className="flex-1 text-center md:text-right">
            <span>Crafted by <span className="text-canvas-ivory/80 font-medium">DreamLand Pictures</span></span>
          </p>
        </div>
      </div>
    </footer>
  );
}


