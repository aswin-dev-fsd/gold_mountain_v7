"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection, revealStagger, createImageParallax } from "@/utils/animations";

// --- HERO SECTION ---
function WellnessHero() {
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
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/wellness_image.png')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-forest-charcoal/50 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight leading-[1.15] mb-6">
          A slower way back to <span className="text-accent-gold italic font-serif">yourself.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-canvas-ivory/90 max-w-2xl mx-auto font-light leading-relaxed">
          Explore traditional wellness practices, nourishing food and quiet spaces designed to help you reconnect with body and mind.
        </p>
      </div>
    </section>
  );
}

// --- PHILOSOPHY SECTION ---
function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(textRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={textRef} className="max-w-3xl mx-auto">
        <span className="text-accent-gold uppercase tracking-widest font-label-sm text-sm mb-4 block">Our Philosophy</span>
        <h2 className="text-3xl md:text-5xl font-headline-md text-forest-deep mb-8 leading-tight">
          Traditional wellness practices and the restorative qualities of nature.
        </h2>
        <p className="text-forest-deep/80 font-body-md text-lg max-w-2xl mx-auto leading-relaxed">
          At Gold Mountain, wellness is not a rigid program but a personal experience. By bringing together timeless traditions and the quiet power of our natural surroundings, we offer a space where healing happens at its own natural pace.
        </p>
      </div>
    </section>
  );
}

// --- APPROACH GRID ---
const APPROACH_ITEMS = [
  { title: "Ayurveda", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" },
  { title: "Traditional Therapies", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80" },
  { title: "Yoga", img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80" },
  { title: "Meditation", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80" },
  { title: "Healthy Food", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" },
  { title: "Nature", img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80" },
  { title: "Lifestyle", img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80" },
];

function WellnessApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.approach-item');
    revealStagger(items, gridRef.current);

    items.forEach((item) => {
      const img = item.querySelector('.parallax-img');
      if (img) createImageParallax(img, item, -10, 10, 1.25);
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-headline-md text-forest-deep mb-16 text-center">Our Approach</h2>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {APPROACH_ITEMS.map((item, i) => (
            <div key={item.title} className={`approach-item group relative overflow-hidden flex flex-col ${i === 3 ? "md:col-span-2 lg:col-span-1" : ""} ${i === 6 ? "lg:col-start-2" : ""}`}>
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-4">
                <img src={item.img} alt={item.title} className="parallax-img absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-headline-sm text-forest-deep uppercase tracking-wider">{item.title}</h3>
              <div className="w-8 h-[1px] bg-accent-gold mt-3 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- AYURVEDA HIGHLIGHT ---
function AyurvedaHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-forest-charcoal text-canvas-ivory text-center">
      <div ref={contentRef} className="max-w-3xl mx-auto">
        <span className="text-gold-light uppercase tracking-widest font-label-sm text-sm mb-4 block">Ayurveda</span>
        <h2 className="text-3xl md:text-5xl font-headline-md mb-8 italic font-serif">Traditional wisdom, thoughtfully experienced.</h2>
        <p className="text-canvas-ivory/80 font-body-md text-lg mb-12 max-w-2xl mx-auto">
          Ayurveda forms the root of our physical healing practices. We offer authentic treatments designed not just to cure, but to restore your body&apos;s natural balance. Discover a gentle, profound approach to well-being.
        </p>
        <Link 
          href="/ayurveda" 
          className="inline-flex items-center gap-2 bg-accent-gold text-forest-charcoal px-8 py-3 rounded-lg font-label-md uppercase tracking-wider hover:bg-gold-light transition-colors"
        >
          Explore Ayurveda <span className="material-symbols-outlined text-[18px]">east</span>
        </Link>
      </div>
    </section>
  );
}

// --- HEALING PHILOSOPHY ---
function HealingPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(titleRef.current as Element);
    revealStagger(itemsRef.current?.querySelectorAll('.heal-item') as NodeListOf<Element>, itemsRef.current as Element);
  }, { scope: sectionRef });

  const areas = ["Body", "Mind", "Food", "Movement", "Nature", "Rest"];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-5xl mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-headline-md text-forest-deep mb-16 text-center">The Dimensions of Healing</h2>
        
        <div ref={itemsRef} className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 text-center">
          {areas.map(area => (
            <div key={area} className="heal-item flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-accent-gold/40 flex items-center justify-center mb-6 text-accent-terracotta">
                <span className="material-symbols-outlined text-[28px]">spa</span>
              </div>
              <h3 className="text-xl font-headline-sm text-forest-deep">{area}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PROGRAMMES / PACKAGES ---
const PACKAGES = [
  {
    name: "Inner Silence Retreat",
    duration: "3 Days / 2 Nights",
    description: "A gentle introduction to mindful living with daily yoga, silent walks, and organic food.",
    includes: ["Daily Yoga", "Guided Meditation", "Organic Meals", "Nature Walks"],
    price: { INR: "[PRICE TO BE PROVIDED]", USD: "[PRICE TO BE PROVIDED]", EUR: "[PRICE TO BE PROVIDED]" }
  },
  {
    name: "Ayurveda Detox (Panchakarma)",
    duration: "14 Days",
    description: "A deep cellular cleanse using traditional Ayurvedic therapies to remove toxins and restore balance.",
    includes: ["Doctor Consultation", "Daily Therapies", "Prescribed Diet", "Herbal Medicines"],
    price: { INR: "[PRICE TO BE PROVIDED]", USD: "[PRICE TO BE PROVIDED]", EUR: "[PRICE TO BE PROVIDED]" }
  },
  {
    name: "Rejuvenation Therapy",
    duration: "7 Days",
    description: "Designed to relieve stress, improve immunity, and revitalize the body and mind.",
    includes: ["Abhyanga Massage", "Shirodhara", "Yoga", "Mindful Meals"],
    price: { INR: "[PRICE TO BE PROVIDED]", USD: "[PRICE TO BE PROVIDED]", EUR: "[PRICE TO BE PROVIDED]" }
  }
];

function Programmes() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    revealStagger(containerRef.current.querySelectorAll('.pkg-card'), containerRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream border-t border-border-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline-md text-forest-deep mb-16 text-center">Programmes & Packages</h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map(pkg => (
            <div key={pkg.name} className="pkg-card bg-canvas-ivory border border-border-muted p-8 flex flex-col h-full">
              <h3 className="text-2xl font-headline-sm text-forest-deep mb-2">{pkg.name}</h3>
              <p className="text-accent-terracotta font-label-md uppercase tracking-wider mb-6">{pkg.duration}</p>
              
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
                <Link 
                  href="/contact" 
                  className="w-full block text-center border border-forest-deep text-forest-deep py-3 uppercase tracking-wider text-sm font-semibold hover:bg-forest-deep hover:text-canvas-ivory transition-colors"
                >
                  Enquire
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-forest-charcoal text-canvas-ivory text-center">
      <div ref={contentRef} className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-headline-md mb-12">Find the kind of wellness that suits your stay.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded font-label-md uppercase tracking-wider hover:bg-[#128C7E] transition-colors shadow-lg"
          >
            Enquire on WhatsApp
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-canvas-ivory/40 text-canvas-ivory px-8 py-3 rounded font-label-md uppercase tracking-wider hover:bg-canvas-ivory/10 transition-colors"
          >
            Send an Email
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function WellnessPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <Navigation />
      <WellnessHero />
      <Philosophy />
      <WellnessApproach />
      <AyurvedaHighlight />
      <HealingPhilosophy />
      <Programmes />
      <FinalCTA />
      <Footer />
    </main>
  );
}
