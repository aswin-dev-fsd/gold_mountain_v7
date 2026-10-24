"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection, revealStagger } from "@/utils/animations";
import { AYURVEDA_FAQS, AYURVEDA_PACKAGES, AYURVEDA_THERAPIES } from "@/content/ayurveda";

// --- HERO SECTION ---
function AyurvedaHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
    tl.fromTo(bgRef.current, { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
      .fromTo(contentRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.6");

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
        {/* Placeholder image for Ayurveda. Unsplash nature/wellness image */}
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest-charcoal/80 via-forest-charcoal/40 to-forest-charcoal/85 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-forest-deep/30 to-forest-charcoal/90 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight mb-6 text-balance">
          Kerala Ayurveda Treatments <span className="text-accent-gold block mt-2">in Tiruvannamalai</span>
        </h1>
        <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed text-balance">Authentic Panchakarma, Rasayana rejuvenation, and personalised herbal therapies administered by an in-house Ayurveda doctor and experienced therapists in Tiruvannamalai.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/contact-us?enquiry=Ayurveda#enquiry" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-canvas-ivory text-forest-deep shadow-sm hover:bg-surface-cream border border-canvas-ivory">Book Your Treatment</Link>
          <a href="https://wa.me/918838198769" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white rounded-[9999px] font-label-md uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors text-label-md font-semibold px-space-lg py-2.5 min-h-[42px]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

// --- INTRODUCTION ---
function AyurvedaIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(textRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="pt-12 pb-8 md:pt-16 md:pb-10 px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={textRef} className="max-w-3xl mx-auto">
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-2 block">The Science of Life</span>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-4">
          Ayurveda, the Science of Life
        </h2>
        <p className="text-forest-deep/80 font-body-md text-lg max-w-2xl mx-auto leading-relaxed">
          Ayurveda is not just a treatment but a way of living in harmony with nature. At Gold Mountain we honour the ancient texts while making their wisdom accessible to modern life. Our therapies are designed to cleanse, rejuvenate and support your foundational health, using sustainably sourced, traditional oils and herbs.
        </p>
      </div>
    </section>
  );
}

// --- THERAPIES ACCORDION ---
function TherapiesAccordion() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  useGSAP(() => {
    if (!listRef.current) return;
    revealStagger(listRef.current.querySelectorAll('.accordion-item'), listRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-6 md:px-12 bg-surface-cream border-y border-border-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-4">Ayurvedic Therapies &amp; Treatments</h2>
          <p className="text-forest-deep/70 font-body-sm max-w-xl mx-auto">Traditional treatments with herbal oils, powders and steam, guided by your personal consultation.</p>
        </div>
        
        <div ref={listRef} className="flex flex-col gap-4">
          {AYURVEDA_THERAPIES.map((therapy, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={therapy.name} 
                className={`accordion-item mb-space-xs last:mb-0 overflow-hidden transition-all duration-300 bg-canvas-ivory rounded-lg shadow-sm border ${isOpen ? "border-accent-gold/40 shadow-md" : "border-border-muted/20"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`therapy-panel-${index}`}
                  className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left focus:outline-none"
                >
                  <h3 className={`font-headline-sm text-xl transition-colors ${isOpen ? 'text-accent-gold' : 'text-forest-deep'}`}>
                    {therapy.name}
                  </h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={`w-5 h-5 text-forest-deep/50 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                </button>
                <div 
                  id={`therapy-panel-${index}`}
                  className={`px-4 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-forest-deep/80 font-body-sm leading-relaxed max-w-2xl">
                    {therapy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- PACKAGES ---
function AyurvedaPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    revealStagger(containerRef.current.querySelectorAll('.pkg-card'), containerRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="pt-8 pb-12 md:pt-10 md:pb-16 px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-10 text-center">Ayurvedic Programs &amp; Packages</h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
          {AYURVEDA_PACKAGES.map(pkg => (
            <div key={pkg.name} className="pkg-card bg-surface-cream border border-border-muted p-8 flex flex-col h-full rounded-xl">
              <h3 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-2">{pkg.name}</h3>
              <p className="text-accent-gold font-label-md uppercase tracking-wider mb-6">{pkg.duration}</p>
              
              <p className="text-forest-deep/80 font-body-sm mb-6 flex-grow">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-3">Includes</span>
                <ul className="space-y-2">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-forest-deep/70 text-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-4 h-4 text-accent-gold shrink-0"><path d="m5 12 4 4L19 6" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-border-muted/50 mt-auto">
                <p className="mb-6 text-sm text-forest-deep/80">Enquire for current rates and a personal program plan.</p>
                <Link href="/contact-us?enquiry=Ayurveda#enquiry" className="w-full group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
                  <span>Enquire</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center pt-10 border-t border-border-muted/40">
          <h3 className="font-headline-md text-headline-md text-forest-deep mb-4">Panchakarma Treatment in Tiruvannamalai</h3>
          <p className="font-body-md text-lg text-forest-deep/80 leading-relaxed">
            Panchakarma is Ayurveda&apos;s classical cleansing approach and the most sought-after program at our resort. It is not a fixed routine: our Ayurveda doctor sets your plan after a personal consultation, based on your constitution, the season and your comfort. Programs run for 14 or 21 days and include daily therapies, a prescribed diet and herbal medicines. You stay on the property, so there is no travelling between treatment and rest, and meals follow your plan. Panchakarma is not suitable for everyone, which is why the first step is always a consultation.
          </p>
          <Link href="/contact-us?enquiry=Ayurveda#enquiry" className="inline-flex mt-6 items-center justify-center rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory transition-colors">Book a Consultation</Link>
        </div>
      </div>
    </section>
  );
}

// --- PACKAGE INCLUSIONS ---
const PACKAGE_INCLUSIONS = [
  "Personal consultation with an experienced Ayurveda doctor",
  "Follow-up guidance based on your program",
  "Therapies by trained male and female therapists",
  "Daily Ayurveda treatment sessions",
  "Comfortable accommodation and freshly prepared sattvic meals",
  "Ayurvedic medicines as part of the program",
  "High-speed internet on the property",
  "All applicable taxes included",
];

function PackageInclusions() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-8 text-center">What Every Package Includes</h2>
        <div className="bg-surface-cream border border-border-muted rounded-xl p-8 md:p-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {PACKAGE_INCLUSIONS.map(item => (
              <li key={item} className="flex items-start gap-3 font-body-md text-forest-deep/80 leading-relaxed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-5 h-5 text-accent-gold shrink-0"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body-sm text-forest-deep/70 mt-8 pt-6 border-t border-border-muted/50 leading-relaxed">
            Airport or railway station pickup and drop, laboratory test support, local sightseeing, take-home Ayurveda medicines and private yoga trainers are available at an additional charge.
          </p>
        </div>
      </div>
    </section>
  );
}

function StayWithTreatment() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12 bg-surface-cream border-t border-border-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-4">Stay With Your Treatment</h2>
        <p className="font-body-md text-lg text-forest-deep/80 leading-relaxed mb-6">
          Treatment is gentler when you are not travelling. Choose a mountain-view room from our rooms in Tiruvannamalai and combine your program with yoga, sattvic meals and the quiet of the wellness resort. All bookings include doctor pre-consultation notes and dietary planning before check-in.
        </p>
        <Link href="/rooms-in-tiruvannamalai" className="inline-flex items-center justify-center rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory transition-colors">Explore Rooms</Link>
      </div>
    </section>
  );
}

function AyurvedaFaqs() {
  return (
    <section id="faq" className="py-12 md:py-16 px-6 md:px-12 bg-canvas-ivory scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-8 text-center">Frequently Asked Questions</h2>
        <div className="divide-y divide-border-muted border-y border-border-muted">
          {AYURVEDA_FAQS.map(faq => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-5 font-headline-sm text-xl text-forest-deep focus-visible:outline-2 focus-visible:outline-accent-gold">
                <span>{faq.question}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-5 h-5 text-accent-gold shrink-0 group-open:rotate-180 transition-transform"><path d="m6 9 6 6 6-6" /></svg>
              </summary>
              <p className="font-body-md text-forest-deep/80 leading-relaxed pt-5 pr-8">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FINAL CTA ---
function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-6 md:px-12 bg-forest-charcoal text-canvas-ivory text-center relative overflow-hidden border-t border-forest-deep/60">
      <div ref={contentRef} className="max-w-2xl mx-auto relative z-10">
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-2 block">Take the First Step</span>
        <h2 className="font-headline-lg text-headline-lg tracking-tight mb-8 text-canvas-ivory">Begin your healing journey.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact-us?enquiry=Ayurveda#enquiry" 
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-accent-gold text-forest-charcoal hover:bg-gold-light border border-accent-gold shadow-sm"
          >
            <span>Enquiry Form</span>
          </Link>
          <a
            href="https://wa.me/918838198769"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white rounded-[9999px] font-label-md uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors text-label-md font-semibold px-space-lg py-2.5 min-h-[42px] shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function AyurvedaPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <Navigation />
      <AyurvedaHero />
      <AyurvedaIntro />
      <AyurvedaPackages />
      <TherapiesAccordion />
      <PackageInclusions />
      <StayWithTreatment />
      <FinalCTA />
      <AyurvedaFaqs />
      <Footer />
    </main>
  );
}




