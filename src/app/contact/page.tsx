"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection } from "@/utils/animations";

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
    <section ref={sectionRef} className="w-full pt-40 pb-space-3xl px-6 md:px-12 bg-canvas-ivory text-center border-b border-border-muted/30">
      <div ref={contentRef} className="max-w-3xl mx-auto">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-forest-deep tracking-tight mb-6">
          Let&apos;s plan your <span className="text-accent-gold">stay.</span>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-surface-cream">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        
        {/* Left Column: Form */}
        <div ref={formRef} className="w-full">
          <EnquiryForm />
        </div>

        {/* Right Column: Info & Map */}
        <div ref={infoRef} className="w-full">
          <ContactDetails />
        </div>
        </div>

        {/* Full-width Map */}
        <LocationMap />
        
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
      <div className="bg-canvas-ivory border border-border-muted p-12 text-center rounded-xl h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-lg bg-forest-deep/10 text-forest-deep flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-[32px]">check</span>
        </div>
        <h3 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-4">Thank you.</h3>
        <p className="text-forest-deep/80 font-body-md">We have received your enquiry and will contact you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-sm uppercase tracking-widest text-accent-gold hover:text-forest-deep transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-canvas-ivory border border-border-muted p-8 md:p-12 rounded-xl shadow-sm h-full flex flex-col">
      <h2 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-8">Send an Enquiry</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Name *</label>
            <input required type="text" id="name" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Email *</label>
            <input required type="email" id="email" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">WhatsApp / Phone</label>
            <input type="tel" id="phone" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="dates" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Preferred Dates</label>
            <input type="text" id="dates" placeholder="e.g. Oct 10 - Oct 15" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="guests" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Number of Guests</label>
            <input type="number" min="1" id="guests" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="type" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Enquiry Type</label>
            <select id="type" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm text-forest-deep/80 cursor-pointer">
              <option value="stay">Stay</option>
              <option value="wellness">Wellness</option>
              <option value="ayurveda">Ayurveda</option>
              <option value="monthly">Monthly Stay</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-4 flex-1">
          <label htmlFor="message" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Message</label>
          <textarea id="message" rows={5} className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm resize-none flex-1 min-h-[120px]"></textarea>
        </div>

        <button type="submit" className="mt-6 w-full md:w-auto self-start group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Send Enquiry</span>
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
    revealSection(containerRef.current);
  });

  return (
    <div ref={containerRef} className="flex flex-col p-6 md:p-8 bg-canvas-ivory border border-border-muted/50 rounded-xl h-full">
      
      <div className="flex flex-col items-start">
        <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">WhatsApp / Phone</span>
        <p className="text-lg font-body-md text-forest-deep mb-4">+91 88381 98769</p>
        <a href="https://wa.me/918838198769" className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-[9999px] uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors font-label-md text-label-md font-semibold px-space-lg py-2.5 min-h-[42px]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          WhatsApp Now
        </a>
      </div>

      <div className="flex flex-col items-start pt-6 border-t border-border-muted/50 mt-6">
        <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Email</span>
        <p className="text-lg font-body-md text-forest-deep mb-4">goldmountainstay@gmail.com</p>
        <a href="mailto:goldmountainstay@gmail.com" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory">
<span>Send Email</span>
</a>
      </div>

      <div className="flex flex-col items-start pt-6 border-t border-border-muted/50 mt-6">
        <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Location</span>
        <p className="font-body-md text-forest-deep leading-relaxed mb-4">
          Gold Mountain Wellness Resort,<br/>
          Kottangal,<br/>
          Girivalam Path,<br/>
          Thiruvannamalai 606604
        </p>
        
        <div className="w-full border-t border-border-muted/50 pt-4 mt-2">
          <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-3">Nearby Attractions</span>
          <ul className="space-y-2 text-sm text-forest-deep/80 font-body-sm">
            <li className="flex justify-between"><span>Girivalam Path</span> <span className="text-accent-gold">1.0 KM</span></li>
            <li className="flex justify-between"><span>Aadhi Arunachala Temple</span> <span className="text-accent-gold">1.5 KM</span></li>
            <li className="flex justify-between"><span>Ramanasramam</span> <span className="text-accent-gold">5.0 KM</span></li>
            <li className="flex justify-between"><span>Arunachaleswarar Temple</span> <span className="text-accent-gold">6.0 KM</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- LOCATION MAP ---
function LocationMap() {
  return (
    <div className="w-full h-72 md:h-96 bg-border-muted/20 relative rounded-xl overflow-hidden border border-border-muted">
      <iframe 
        src="https://www.google.com/maps?q=12.2428722,79.0256161&hl=en&z=15&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Gold Mountain Wellness Resort location map"
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
