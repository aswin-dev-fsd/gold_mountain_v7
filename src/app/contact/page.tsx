"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection } from "@/utils/animations";
import { getWhatsAppEnquiryUrl } from "@/utils/whatsappEnquiry";

// --- HERO SECTION ---
function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    
    // Intro animation
    const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
    tl.fromTo(bgRef.current, { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(contentRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.6");

    // Scroll parallax
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: gsap.timeline().to(bgRef.current, { yPercent: 20, ease: "none" }, 0)
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full min-h-[80svh] py-20 flex items-center justify-center overflow-hidden bg-forest-charcoal mt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Scenic image for Contact (reception or serene setting) */}
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80')" }} />
      </div>
      
      {/* Scrim / Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest-charcoal/80 via-forest-charcoal/40 to-forest-charcoal/85 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-forest-deep/30 to-forest-charcoal/90 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight mb-6">
          Contact Gold Mountain <span className="block mt-2 text-accent-gold">Wellness Resort</span>
        </h1>
        <p className="font-headline-sm text-2xl text-canvas-ivory">Let&apos;s plan your stay.</p>
      </div>
    </section>
  );
}

// --- MAIN CONTACT SECTION ---
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const enquiryRef = useRef<HTMLFormElement>(null);
  const [enquiryType, setEnquiryType] = useState("Stay");

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("enquiry") === "Ayurveda") {
      setEnquiryType("Ayurveda");
    }
  }, []);

  const handleBookTransfer = () => {
    setEnquiryType("Stay");
    enquiryRef.current?.querySelector<HTMLInputElement>("#name")?.focus({ preventScroll: true });
  };

  useGSAP(() => {
    revealSection(formRef.current as Element, 0);
    revealSection(infoRef.current as Element, 0.2);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-surface-cream">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="max-w-4xl mx-auto text-center text-forest-deep">
          <p className="font-body-lg text-lg md:text-xl font-normal leading-relaxed text-balance">
            Have a question about staying, wellness programs or availability? Speak with us directly.
          </p>
          <p className="font-body-md text-sm md:text-base text-forest-deep/80 font-light leading-relaxed mt-4 text-balance">
            Our retreat advisor replies within 12 hours, and we are happy to help with travel, dietary preferences and custom programs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">
        
        {/* Left Column: Form */}
        <div ref={formRef} className="w-full h-full">
          <EnquiryForm formRef={enquiryRef} enquiryType={enquiryType} onEnquiryTypeChange={setEnquiryType} />
        </div>

        {/* Right Column: Info & Map */}
        <div ref={infoRef} className="w-full h-full">
          <ContactDetails />
        </div>
        </div>

        {/* Full-width Map */}
        <LocationMap />
        <TravelInformation onBookTransfer={handleBookTransfer} />
        
      </div>
    </section>
  );
}

// --- ENQUIRY FORM ---
function EnquiryForm({ formRef, enquiryType, onEnquiryTypeChange }: {
  formRef: React.RefObject<HTMLFormElement>;
  enquiryType: string;
  onEnquiryTypeChange: (value: string) => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.assign(getWhatsAppEnquiryUrl(e.currentTarget, "Contact Us"));
  };

  return (
    <div id="enquiry" className="scroll-mt-24 bg-canvas-ivory border border-border-muted p-8 md:p-10 rounded-xl shadow-sm h-full flex flex-col">
      <h2 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-8">Send an Enquiry</h2>
      
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Name *</label>
            <input required type="text" id="name" name="name" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Email *</label>
            <input required type="email" id="email" name="email" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">WhatsApp / Phone</label>
            <input type="tel" id="phone" name="phone" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="dates" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Preferred Dates</label>
            <input type="text" id="dates" name="dates" placeholder="e.g. Oct 10 - Oct 15" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="guests" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Number of Guests</label>
            <input type="number" min="1" id="guests" name="guests" className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm" />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="type" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Enquiry Type</label>
            <select id="type" name="type" value={enquiryType} onChange={(event) => onEnquiryTypeChange(event.target.value)} className="w-full min-w-0 border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm text-forest-deep/80 cursor-pointer">
              <option value="Stay">Stay</option>
              <option value="Wellness">Wellness</option>
              <option value="Ayurveda">Ayurveda</option>
              <option value="Monthly Stay">Monthly Stay</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-2">
          <label htmlFor="message" className="text-xs uppercase tracking-widest text-forest-deep font-semibold">Message</label>
          <textarea id="message" name="message" rows={3} className="border border-border-muted bg-surface-cream/60 rounded-lg px-4 py-3 outline-none placeholder:text-forest-deep/40 focus:border-forest-deep focus:bg-canvas-ivory focus:ring-1 focus:ring-forest-deep/20 transition-colors font-body-sm resize-none min-h-[96px]"></textarea>
        </div>

        <button type="submit" className="w-full md:w-auto self-start group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Continue to WhatsApp</span>
</button>
        <p className="font-body-sm text-forest-deep/70">Your message will open in WhatsApp. Review it and tap Send to complete your enquiry.</p>
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
    <div ref={containerRef} className="flex flex-col justify-between h-full p-8 md:p-10 bg-canvas-ivory border border-border-muted rounded-xl shadow-sm">
      <div>
        <h2 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-8">Call, WhatsApp or Email</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] gap-4 sm:gap-6 items-start">
          <div className="flex flex-col items-start min-w-0">
            <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">WhatsApp / Phone</span>
            <a href="tel:+918838198769" className="text-base sm:text-[1.1rem] font-body-md text-forest-deep mb-4 hover:text-surface-tint transition-colors leading-6">+91 88381 98769</a>
            <a href="https://wa.me/918838198769" className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-[9999px] uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors font-label-md text-label-md font-semibold px-space-lg py-2.5 min-h-[42px]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp Now
            </a>
          </div>
          <div className="flex flex-col items-start min-w-0 w-full">
            <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Email</span>
            <a href="mailto:goldmountainstay@gmail.com" className="text-base sm:text-[1.1rem] font-body-md text-forest-deep mb-4 hover:text-surface-tint transition-colors truncate w-full leading-6" title="goldmountainstay@gmail.com">goldmountainstay@gmail.com</a>
            <a href="mailto:goldmountainstay@gmail.com" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory">
              <span>Send Email</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-muted/50 mt-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Instagram</span>
            <a href="https://www.instagram.com/goldmountainstay/" className="font-body-md text-forest-deep underline decoration-accent-gold underline-offset-4 hover:text-surface-tint transition-colors">@goldmountainstay</a>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-forest-deep font-semibold mb-2">Check-in</dt>
              <dd className="font-body-md text-forest-deep/80">12:00</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-forest-deep font-semibold mb-2">Check-out</dt>
              <dd className="font-body-md text-forest-deep/80">12:00</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col items-start pt-6 border-t border-border-muted/50 mt-6">
          <h2 className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-2">Our Location</h2>
          <p className="font-body-md text-forest-deep leading-relaxed">
            Gold Mountain Wellness Resort,<br/>
            Kottangal, Girivalam Path,<br/>
            Tiruvannamalai 606604
          </p>
        </div>
      </div>
      
      <div className="w-full border-t border-border-muted/50 pt-6 mt-6">
        <h2 className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-3">Nearby Attractions</h2>
        <ul className="space-y-2.5 text-sm text-forest-deep/80 font-body-sm">
          <li className="flex justify-between"><span>Girivalam Path</span> <span className="text-accent-gold">1.0 KM</span></li>
          <li className="flex justify-between"><span>Adi Arunachala Temple</span> <span className="text-accent-gold">1.5 KM</span></li>
          <li className="flex justify-between"><span>Ramanasramam</span> <span className="text-accent-gold">5.0 KM</span></li>
          <li className="flex justify-between"><span>Arunachaleswarar Temple</span> <span className="text-accent-gold">6.0 KM</span></li>
        </ul>
      </div>
    </div>
  );
}

// --- LOCATION MAP ---
function LocationMap() {
  return (
    <div id="location" className="scroll-mt-24 w-full h-72 md:h-96 bg-border-muted/20 relative rounded-xl overflow-hidden border border-border-muted">
      <iframe 
        src="https://www.google.com/maps?q=12.2428722,79.0256161&hl=en&z=15&output=embed" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Gold Mountain Wellness Resort location in Tiruvannamalai"
      ></iframe>
    </div>
  );
}

// --- TRAVEL INFORMATION ---
function TravelInformation({ onBookTransfer }: { onBookTransfer: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} aria-labelledby="travel-heading" className="pt-space-xl">
      <div ref={contentRef} className="max-w-6xl mx-auto">
        <h2 id="travel-heading" className="font-headline-lg text-display-lg-mobile md:text-headline-lg tracking-tight text-forest-deep mb-10 text-center">How to Reach Our Resort in Tiruvannamalai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="p-6 md:p-8 rounded-xl bg-canvas-ivory border border-border-muted/50">
            <span aria-hidden="true" className="material-symbols-outlined text-accent-gold text-[32px] mb-4 block">flight</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-3">Chennai International Airport (MAA)</h3>
            <p className="font-body-sm text-body-sm text-forest-deep/80 leading-relaxed">Via Tindivanam. Contact us to plan your airport transfer and confirm the journey time for your arrival.</p>
          </div>
          <div className="p-6 md:p-8 rounded-xl bg-canvas-ivory border border-border-muted/50">
            <span aria-hidden="true" className="material-symbols-outlined text-accent-gold text-[32px] mb-4 block">flight</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-3">Bengaluru International Airport (BLR)</h3>
            <p className="font-body-sm text-body-sm text-forest-deep/80 leading-relaxed">Via Krishnagiri and Chengam. Contact us to plan your airport transfer and confirm the journey time for your arrival.</p>
          </div>
          <div className="p-6 md:p-8 rounded-xl bg-canvas-ivory border border-border-muted/50">
            <span aria-hidden="true" className="material-symbols-outlined text-accent-gold text-[32px] mb-4 block">train</span>
            <h3 className="font-headline-sm text-headline-sm text-forest-deep mb-3">Katpadi Junction</h3>
            <p className="font-body-sm text-body-sm text-forest-deep/80 leading-relaxed">Arriving by train? Contact us for onward travel assistance from the railway station.</p>
          </div>
        </div>
        <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
          <p className="font-body-md text-forest-deep/80 leading-relaxed">We provide airport transfer assistance and pre-booked cabs.</p>
          <a href="#enquiry" onClick={onBookTransfer} className="shrink-0 group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">Book Transfer</a>
        </div>
      </div>
    </section>
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
