"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";

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
        
        <div ref={introRef} className="text-center mb-space-2xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-forest-deep text-gold-light mb-space-md">
            <span className="material-symbols-outlined text-[16px]">contact_support</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Reserve Your Sanctuary</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-canvas-ivory tracking-tight">
            Your time at Gold Mountain begins here.
          </h2>
          <p className="font-headline-md text-headline-md text-gold-light mt-space-xs font-serif italic">
            Plan your stay, explore our wellness offerings, or simply speak with our retreat advisors.
          </p>
          <p className="font-body-md text-body-md text-surface-container-high/80 max-w-xl mx-auto mt-space-sm leading-relaxed">
            Whether you seek a 3-night restorative pause, a 14-day Panchakarma journey, or a prolonged sabbatical, we are here to assist with travel, dietary preferences, and custom programs.
          </p>
        </div>
        
        {/* Interactive Enquiry Form & Direct Actions Grid */}
        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl bg-forest-deep/70 backdrop-blur-md p-space-md sm:p-space-xl rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Quick Form */}
          <div className="lg:col-span-7 min-w-0">
            <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mb-space-md">Send a Direct Enquiry</h3>
            <form className="space-y-space-md" id="retreatEnquiryForm" onSubmit={(e) => { e.preventDefault(); document.getElementById('formSuccess')?.classList.remove('hidden'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Your Full Name</label>
                  <input className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm" placeholder="e.g. Maya Thorne" required type="text"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Email Address</label>
                  <input className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm" placeholder="maya@example.com" required type="email"/>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Intended Dates / Month</label>
                  <input className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm" placeholder="e.g. Nov 2024 (7 nights)" type="text"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">Area of Interest</label>
                  <select className="w-full h-12 px-space-md rounded-lg bg-forest-charcoal text-canvas-ivory focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm cursor-pointer">
                    <option>Ayurvedic Wellness Retreat</option>
                    <option>Personal Meditation &amp; Rest</option>
                    <option>Arunachala Spiritual Stay</option>
                    <option>Long-Term Sabbatical (14+ days)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high/80 mb-1">How can we support your stay?</label>
                <textarea className="w-full p-space-md rounded-lg bg-forest-charcoal text-canvas-ivory placeholder:text-surface-container-high/40 focus:outline-none focus:ring-1 focus:ring-accent-gold transition-all text-body-sm font-body-sm resize-none" placeholder="Tell us about dietary needs, health considerations or arrival plans..." rows={3}></textarea>
              </div>
              
              <button className="w-full min-h-[48px] py-space-md px-space-lg rounded-lg bg-accent-gold text-forest-charcoal font-label-lg text-label-lg uppercase tracking-wider font-semibold hover:bg-gold-light hover:border-gold-light border border-accent-gold transition-all shadow-md flex items-center justify-center gap-space-sm group cursor-pointer active:scale-[0.99]" type="submit">
                <span>Send Sanctuary Enquiry</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
              </button>
              
              <div className="hidden p-space-sm rounded bg-forest-deep text-gold-light text-center font-body-sm" id="formSuccess">
                Thank you. Our retreat advisor will be in touch within 12 hours.
              </div>
            </form>
          </div>
          
          {/* Direct Channels & Concierge Card */}
          <div className="lg:col-span-5 min-w-0 flex flex-col justify-between p-space-md sm:p-space-lg rounded-xl bg-forest-charcoal shadow-inner">
            <div className="min-w-0">
              <h3 className="font-headline-sm text-headline-sm text-canvas-ivory mb-space-md">Instant Connection</h3>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 mb-space-lg leading-relaxed">
                We understand international time zones and spontaneous travel plans. Reach us directly via messaging or phone.
              </p>
              <div className="space-y-space-md min-w-0">
                <a href="https://wa.me/919876543210" rel="noopener noreferrer" target="_blank" className="p-space-md rounded-lg bg-forest-deep hover:bg-forest-deep/80 transition-colors flex items-center gap-space-md text-canvas-ivory shadow-sm group min-w-0">
                  <span className="w-10 h-10 rounded-full bg-accent-gold text-forest-charcoal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[22px]">chat</span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-accent-gold block">WhatsApp Sanctuary Desk</span>
                    <p className="font-headline-sm text-headline-sm leading-none mt-0.5 truncate">+91 98765 43210</p>
                  </div>
                </a>
                <a href="mailto:retreats@goldmountainresort.com" className="p-space-md rounded-lg bg-forest-deep hover:bg-forest-deep/80 transition-colors flex items-center gap-space-md text-canvas-ivory shadow-sm group min-w-0">
                  <span className="w-10 h-10 rounded-full bg-forest-charcoal text-accent-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-accent-gold block">Email Concierge</span>
                    <p className="font-body-sm text-xs sm:text-body-sm leading-tight mt-1 break-all text-canvas-ivory/90">retreats@goldmountainresort.com</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="pt-space-lg border-t border-forest-deep/80 mt-space-lg">
              <div className="flex items-center gap-2 text-gold-light text-label-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
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

