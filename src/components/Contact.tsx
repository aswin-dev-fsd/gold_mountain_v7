"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";
import { getWhatsAppEnquiryUrl } from "../utils/whatsappEnquiry";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (introRef.current) {
      revealStagger(introRef.current.children, sectionRef.current!);
    }

    if (formRef.current) {
      revealStagger(formRef.current.children, formRef.current, 0.2);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="enquiry" className="w-full py-space-3xl bg-forest-charcoal text-canvas-ivory relative overflow-hidden">
      {/* Subtle Golden Contours in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="none" r="40" stroke="#C49A3A" strokeWidth="0.5"></circle>
          <circle cx="50" cy="50" fill="none" r="25" stroke="#C49A3A" strokeWidth="0.5"></circle>
        </svg>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-margin lg:px-margin-desktop relative z-10">
        
        <div ref={introRef} className="text-center mb-space-xl">
          <h2 className="font-headline-lg text-headline-lg text-canvas-ivory tracking-tight">
            Your time at Gold Mountain begins here.
          </h2>
          <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-md font-normal">
            Plan your stay, explore our wellness offerings, or speak with our retreat advisors.
          </p>
          <p className="font-body-md text-body-md text-surface-container-high/80 max-w-xl mx-auto mt-space-md leading-relaxed">
            Whether you want a 3-night restorative pause, a 14-day Panchakarma journey or a longer sabbatical, we help with travel, dietary preferences and custom programs.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-xl">
          <a href="#retreatEnquiryForm" className="group w-full sm:w-auto inline-flex items-center justify-center gap-space-xs rounded-lg border border-accent-gold bg-accent-gold px-space-lg py-2.5 min-h-[42px] font-label-md text-label-md uppercase tracking-wider font-semibold text-forest-charcoal hover:bg-gold-light transition-colors">
            <span>Send an Enquiry</span>
            <span aria-hidden="true" className="material-symbols-outlined text-forest-charcoal text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <a href="https://wa.me/918838198769" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[9999px] bg-[#25D366] px-space-lg py-2.5 min-h-[42px] font-label-md text-label-md uppercase tracking-wider font-semibold text-white hover:bg-[#25D366]/90 transition-colors">
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.85 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.51-8.42Zm-8.47 18.37h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.66-.24-.37a9.91 9.91 0 0 1-1.52-5.24c0-5.5 4.48-9.98 9.99-9.98a9.9 9.9 0 0 1 7.06 2.92 9.9 9.9 0 0 1 2.92 7.06c0 5.51-4.48 9.99-10 9.99Zm5.48-7.48c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>
            WhatsApp Now
          </a>
        </div>

        {/* Interactive Enquiry Form & Direct Actions Grid */}
        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl bg-forest-deep/70 backdrop-blur-md p-space-md sm:p-space-xl rounded-2xl shadow-2xl overflow-hidden lg:items-stretch">
          
          {/* Quick Form */}
          <div className="lg:col-span-7 min-w-0 flex flex-col h-full">
            <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mb-space-md">Send a Direct Enquiry</h3>
            <form className="space-y-space-md" id="retreatEnquiryForm" onSubmit={(e) => {
              e.preventDefault();
              window.location.assign(getWhatsAppEnquiryUrl(e.currentTarget, "Home"));
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label htmlFor="home-name" className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Your Full Name</label>
                  <input id="home-name" name="name" className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm" placeholder="e.g. Maya Thorne" required type="text"/>
                </div>
                <div>
                  <label htmlFor="home-email" className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Email Address</label>
                  <input id="home-email" name="email" className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm" placeholder="maya@example.com" required type="email"/>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label htmlFor="home-dates" className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Intended Dates / Month</label>
                  <input id="home-dates" name="dates" className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm" placeholder="e.g. Nov 2026 (7 nights)" type="text"/>
                </div>
                <div>
                  <label htmlFor="home-type" className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Area of Interest</label>
                  <select id="home-type" name="type" className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm cursor-pointer">
                    <option>Ayurvedic Wellness Retreat</option>
                    <option>Personal Meditation &amp; Rest</option>
                    <option>Arunachala Spiritual Stay</option>
                    <option>Long-Term Sabbatical (14+ days)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="home-message" className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">How can we support your stay?</label>
                <textarea id="home-message" name="message" className="w-full p-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm resize-none" placeholder="Tell us about dietary needs, health considerations or arrival plans..." rows={3}></textarea>
              </div>
              
              <button type="submit" className="w-full cursor-pointer group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-accent-gold text-forest-charcoal shadow-sm hover:bg-gold-light hover:border-gold-light border border-accent-gold">
<span>Continue to WhatsApp</span>
<span aria-hidden="true" className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
              
              <p className="font-body-sm text-body-sm text-surface-container-high/80">Your message will open in WhatsApp. Review it and tap Send to complete your enquiry.</p>
              </form>
          </div>
          
          {/* Direct Channels & Concierge Card */}
          <div className="lg:col-span-5 min-w-0 flex flex-col justify-between p-space-md sm:p-space-lg rounded-xl bg-forest-charcoal shadow-inner h-full">
            <div className="min-w-0">
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mb-space-md">Instant Connection</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 mb-space-lg leading-relaxed">
                We understand international time zones and spontaneous travel plans. Reach us directly via messaging or phone.
              </p>
              <div className="space-y-3 min-w-0">
                <a href="https://wa.me/918838198769" rel="noopener noreferrer" target="_blank" className="py-3 px-4 rounded-lg bg-forest-deep hover:bg-forest-deep/80 transition-colors flex items-center justify-start gap-3 text-canvas-ivory shadow-sm group min-w-0">
                  <span className="w-8 h-8 rounded-md bg-accent-gold text-forest-charcoal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11.5a8.5 8.5 0 0 1-8.5 8.5 8.7 8.7 0 0 1-3.8-.9L3 21l1.9-4.7a8.7 8.7 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 4H13a8.5 8.5 0 0 1 7 7.5Z"/></svg>
                  </span>
                  <span className="font-body-md font-medium truncate">+91 88381 98769</span>
                </a>
                <a href="mailto:goldmountainstay@gmail.com" className="py-3 px-4 rounded-lg bg-forest-deep hover:bg-forest-deep/80 transition-colors flex items-center justify-start gap-3 text-canvas-ivory shadow-sm group min-w-0">
                  <span className="w-8 h-8 rounded-md bg-forest-charcoal text-accent-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  </span>
                  <span className="font-body-md font-medium truncate">goldmountainstay@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="pt-space-lg border-t border-forest-deep/80 mt-space-lg">
              <div className="flex items-center gap-2 text-accent-gold text-label-sm uppercase tracking-widest">
                <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                <span>Personalized Guest Assurance</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high/60 mt-1">
                All bookings include doctor pre-consultation notes and bespoke dietary mapping prior to check-in.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}





