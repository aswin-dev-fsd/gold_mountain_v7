"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection, revealStagger } from "@/utils/animations";

// --- HERO SECTION ---
function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isReducedMotion()) return;
    gsap.fromTo(
      contentRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: EASE_CINEMATIC }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full pt-48 pb-16 px-6 md:px-12 bg-canvas-ivory text-center border-b border-border-muted/30">
      <div ref={contentRef} className="max-w-3xl mx-auto">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-forest-deep tracking-tight mb-6">
          Let&apos;s plan your <span className="text-accent-gold italic font-serif">stay.</span>
        </h1>
        <p className="font-body-lg text-lg text-forest-deep/80 max-w-2xl mx-auto font-light leading-relaxed">
          Have a question about staying, wellness programmes or availability? Speak with us directly.
        </p>
      </div>
    </section>
  );
}

// --- MAIN CONTACT SECTION ---
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(formRef.current as Element, 0);
    revealSection(infoRef.current as Element, 0.2);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Form */}
        <div ref={formRef} className="w-full lg:w-1/2">
          <EnquiryForm />
        </div>

        {/* Right Column: Info & Map */}
        <div ref={infoRef} className="w-full lg:w-1/2 flex flex-col gap-12">
          <ContactDetails />
          <LocationMap />
        </div>
        
      </div>
    </section>
  );
}

// --- ENQUIRY FORM ---
function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-canvas-ivory border border-border-muted p-12 text-center rounded-sm h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-forest-deep/10 text-forest-deep flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-[32px]">check</span>
        </div>
        <h3 className="text-2xl font-headline-md text-forest-deep mb-4">Thank you.</h3>
        <p className="text-forest-deep/80 font-body-md">We have received your enquiry and will contact you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-sm uppercase tracking-widest text-accent-terracotta hover:text-forest-deep transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-canvas-ivory border border-border-muted p-8 md:p-12 rounded-sm shadow-sm">
      <h2 className="text-2xl font-headline-sm text-forest-deep mb-8">Send an Enquiry</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Name *</label>
            <input required type="text" id="name" className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Email *</label>
            <input required type="email" id="email" className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">WhatsApp / Phone</label>
            <input type="tel" id="phone" className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="dates" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Preferred Dates</label>
            <input type="text" id="dates" placeholder="e.g. Oct 10 - Oct 15" className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="guests" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Number of Guests</label>
            <input type="number" min="1" id="guests" className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="type" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Enquiry Type</label>
            <select id="type" className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm text-forest-deep/80 cursor-pointer">
              <option value="stay">Stay</option>
              <option value="wellness">Wellness</option>
              <option value="ayurveda">Ayurveda</option>
              <option value="monthly">Monthly Stay</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-4">
          <label htmlFor="message" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Message</label>
          <textarea id="message" rows={4} className="border-b border-border-muted bg-transparent py-2 outline-none focus:border-forest-deep transition-colors font-body-sm resize-none"></textarea>
        </div>

        <button 
          type="submit" 
          className="mt-6 bg-forest-deep text-canvas-ivory px-8 py-4 rounded-lg font-label-md uppercase tracking-wider hover:bg-forest-charcoal transition-colors w-full md:w-auto self-start"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
}

// --- CONTACT DETAILS ---
function ContactDetails() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    revealStagger(containerRef.current.querySelectorAll('.contact-block'), containerRef.current);
  });

  return (
    <div ref={containerRef} className="flex flex-col gap-8">
      
      <div className="contact-block flex flex-col items-start p-6 bg-canvas-ivory border border-border-muted/50 rounded-sm">
        <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">WhatsApp / Phone</span>
        <p className="text-lg font-body-md text-forest-deep mb-4">[PHONE TO BE PROVIDED]</p>
        <a href="#" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded text-xs uppercase tracking-wider hover:bg-[#128C7E] transition-colors">
          Message on WhatsApp
        </a>
      </div>

      <div className="contact-block flex flex-col items-start p-6 bg-canvas-ivory border border-border-muted/50 rounded-sm">
        <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Email</span>
        <p className="text-lg font-body-md text-forest-deep mb-4">[EMAIL TO BE PROVIDED]</p>
        <a href="mailto:hello@goldmountain.com" className="inline-flex items-center gap-2 border border-forest-deep/20 text-forest-deep px-6 py-2 rounded text-xs uppercase tracking-wider hover:bg-forest-deep/5 transition-colors">
          Send Email
        </a>
      </div>

      <div className="contact-block flex flex-col items-start p-6 bg-canvas-ivory border border-border-muted/50 rounded-sm">
        <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Location</span>
        <p className="font-body-md text-forest-deep leading-relaxed">
          No.97, Kottangal Road,<br/>
          Adiannamalai,<br/>
          Tiruvannamalai,<br/>
          Tamil Nadu 606604,<br/>
          India
        </p>
      </div>
    </div>
  );
}

// --- LOCATION MAP ---
function LocationMap() {
  return (
    <div className="w-full h-64 md:h-80 bg-border-muted/20 relative rounded-sm overflow-hidden border border-border-muted">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.492576394145!2d79.0519!3d12.2471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc123456789ab%3A0xabcdef1234567890!2sTiruvannamalai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Gold Mountain Location"
      ></iframe>
    </div>
  );
}

// --- MAIN PAGE ---
export default function ContactPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <Navigation />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
