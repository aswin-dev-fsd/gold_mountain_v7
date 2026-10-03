"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection, revealStagger } from "@/utils/animations";

// --- HERO SECTION ---
function AyurvedaHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: EASE_CINEMATIC } });
    tl.fromTo(bgRef.current, { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
      .fromTo(contentRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=1");

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: gsap.timeline().to(bgRef.current, { yPercent: 20, ease: "none" }, 0)
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-forest-charcoal mt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Placeholder image for Ayurveda. Unsplash nature/wellness image */}
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-forest-charcoal/40 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight mb-6">
          Traditional wisdom, <span className="text-accent-gold block mt-2">thoughtfully experienced.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-canvas-ivory/90 max-w-2xl mx-auto font-light leading-relaxed">
          A gentle, profound approach to well-being that restores your body&apos;s natural balance.
        </p>
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={textRef} className="max-w-3xl mx-auto">
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-1 block">The Science of Life</span>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-1">
          Ayurveda is not just a treatment, but a way of living in harmony with nature.
        </h2>
        <p className="text-forest-deep/80 font-body-md text-lg max-w-2xl mx-auto leading-relaxed">
          At Gold Mountain, we honor the ancient texts of Ayurveda while making its wisdom accessible and relevant to modern life. Our therapies are designed to cleanse, rejuvenate, and restore your foundational health without feeling overly clinical.
        </p>
      </div>
    </section>
  );
}

// --- THERAPIES ACCORDION ---
const THERAPIES = [
  {
    name: "Abhyanga (Warm Oil Massage)",
    description: "[CONTENT TO BE PROVIDED] A full-body massage using warm, herb-infused oils tailored to your dosha, designed to nourish the skin, release toxins, and deeply relax the nervous system."
  },
  {
    name: "Shirodhara",
    description: "[CONTENT TO BE PROVIDED] A continuous, gentle stream of warm oil poured over the forehead (the 'third eye'). Known to profoundly calm the mind, relieve stress, and improve sleep quality."
  },
  {
    name: "Udvartana (Herbal Scrub)",
    description: "[CONTENT TO BE PROVIDED] An invigorating full-body massage using dry herbal powders. It helps exfoliate the skin, stimulate circulation, and break down stagnant energy and fat tissues."
  },
  {
    name: "Pizhichil",
    description: "[CONTENT TO BE PROVIDED] A luxurious treatment where the body is continuously bathed in warm herbal oils while being softly massaged. Excellent for joint health and deep rejuvenation."
  },
  {
    name: "Swedana (Herbal Steam)",
    description: "[CONTENT TO BE PROVIDED] A therapeutic steam bath enriched with medicinal leaves and roots, typically following a massage to help open pores and flush out deeply lodged toxins."
  }
];

function TherapiesAccordion() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  useGSAP(() => {
    if (!listRef.current) return;
    revealStagger(listRef.current.querySelectorAll('.accordion-item'), listRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream border-y border-border-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-1">Therapies & Treatments</h2>
          <p className="text-forest-deep/70 font-body-sm max-w-xl mx-auto">Our experienced therapists use sustainably sourced, traditional oils and herbs to deliver authentic treatments.</p>
        </div>
        
        <div ref={listRef} className="flex flex-col gap-4">
          {THERAPIES.map((therapy, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={therapy.name} 
                className={`accordion-item mb-space-xs overflow-hidden transition-all duration-300 bg-canvas-ivory rounded-lg shadow-sm border ${isOpen ? "border-accent-gold/40 shadow-md" : "border-border-muted/20"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left focus:outline-none"
                >
                  <h3 className={`font-headline-sm text-xl transition-colors ${isOpen ? 'text-accent-gold' : 'text-forest-deep'}`}>
                    {therapy.name}
                  </h3>
                  <span className={`material-symbols-outlined text-forest-deep/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div 
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
const PACKAGES = [
  {
    name: "Ayurveda Detox (Panchakarma)",
    duration: "14 Days / 21 Days",
    description: "A deep cellular cleanse using traditional Ayurvedic therapies to remove toxins and restore balance.",
    includes: ["Doctor Consultation", "Daily Therapies", "Prescribed Diet", "Herbal Medicines"],
    price: { INR: "[PRICE TO BE PROVIDED]", USD: "[PRICE TO BE PROVIDED]", EUR: "[PRICE TO BE PROVIDED]" }
  },
  {
    name: "Rejuvenation Therapy (Rasayana)",
    duration: "7 Days / 14 Days",
    description: "Designed to relieve stress, improve immunity, and revitalize the body and mind for graceful aging.",
    includes: ["Abhyanga Massage", "Shirodhara", "Yoga", "Mindful Meals"],
    price: { INR: "[PRICE TO BE PROVIDED]", USD: "[PRICE TO BE PROVIDED]", EUR: "[PRICE TO BE PROVIDED]" }
  }
];

function AyurvedaPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    revealStagger(containerRef.current.querySelectorAll('.pkg-card'), containerRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-16 text-center">Ayurvedic Programmes</h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PACKAGES.map(pkg => (
            <div key={pkg.name} className="pkg-card bg-surface-cream border border-border-muted p-8 flex flex-col h-full rounded-xl">
              <h3 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-2">{pkg.name}</h3>
              <p className="text-accent-gold font-label-md uppercase tracking-wider mb-6">{pkg.duration}</p>
              
              <p className="text-forest-deep/80 font-body-sm mb-6 flex-grow">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-3">Includes</span>
                <ul className="space-y-2">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-forest-deep/70 text-sm">
                      <span className="material-symbols-outlined text-[16px] text-accent-gold">check</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-border-muted/50 mt-auto">
                <div className="flex flex-col gap-1 mb-6 text-sm text-forest-deep font-medium">
                  <span className="flex justify-between"><span>INR</span> <span>{pkg.price.INR}</span></span>
                  <span className="flex justify-between"><span>USD</span> <span>{pkg.price.USD}</span></span>
                  <span className="flex justify-between"><span>EUR</span> <span>{pkg.price.EUR}</span></span>
                </div>
                <Link href="/contact" className="w-full group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Enquire</span>
</Link>
              </div>
            </div>
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream text-forest-deep text-center">
      <div ref={contentRef} className="max-w-2xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight mb-12">Begin your healing journey.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory">
<span>Send an Email</span>
</Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white rounded-[9999px] font-label-md uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors text-label-md font-semibold px-space-lg py-2.5 min-h-[42px]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp Now
          </Link>
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
      <TherapiesAccordion />
      <AyurvedaPackages />
      <FinalCTA />
      <Footer />
    </main>
  );
}




