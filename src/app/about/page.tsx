"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection, createImageParallax } from "@/utils/animations";

// --- HERO SECTION ---
function AboutHero() {
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
        {/* Placeholder image for About (a wide landscape view) */}
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-forest-charcoal/30 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight leading-[1.15]">
          A place created <span className="text-accent-gold italic font-serif block mt-2">with purpose.</span>
        </h1>
      </div>
    </section>
  );
}

// --- THE STORY ---
function TheStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(textRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={textRef} className="max-w-3xl mx-auto">
        <span className="text-accent-gold uppercase tracking-widest font-label-sm text-sm mb-6 block">Our Story</span>
        <p className="text-forest-deep/90 font-body-lg text-xl md:text-2xl leading-relaxed font-light">
          Gold Mountain was born from a desire to create a sanctuary where people could step away from the noise of modern life. We envisioned a place not just for leisure, but for genuine restoration—a space where the natural world and traditional healing practices work together quietly, without pretense.
        </p>
      </div>
    </section>
  );
}

// --- FOUNDER PROFILE ---
function FounderProfile() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imageRef.current) {
      createImageParallax(imageRef.current, sectionRef.current as Element, -8, 8, 1.15);
    }
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Founder Image Placeholder */}
        <div className="w-full lg:w-5/12 relative">
          <div className="aspect-[3/4] w-full overflow-hidden relative">
            <img 
              ref={imageRef} 
              src="https://images.unsplash.com/photo-1544168190-79c154433778?auto=format&fit=crop&w=800&q=80" 
              alt="Founder Profile Placeholder" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
            />
            <div className="absolute inset-0 border border-border-muted m-4 pointer-events-none"></div>
          </div>
        </div>

        {/* Right: Structured Text Blocks */}
        <div ref={contentRef} className="w-full lg:w-7/12 flex flex-col items-start text-left">
          <span className="text-accent-terracotta uppercase tracking-widest font-label-sm text-sm mb-2 block">The Founder</span>
          
          <h2 className="text-3xl md:text-4xl font-headline-md text-forest-deep mb-8">
            [FOUNDER NAME TO BE PROVIDED]
          </h2>
          
          <div className="space-y-8 text-forest-deep/80 font-body-md text-lg leading-relaxed">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-forest-deep font-semibold mb-2">Biography</h3>
              <p>[FOUNDER BIOGRAPHY TO BE PROVIDED. This section will contain the background and personal story of the founder, explaining their journey leading up to the creation of the resort.]</p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest text-forest-deep font-semibold mb-2">The Vision</h3>
              <p className="italic font-serif text-forest-deep text-xl">
                &ldquo;[FOUNDER VISION TO BE PROVIDED. A short, impactful quote or statement about what they hope guests experience here.]&rdquo;
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-forest-deep font-semibold mb-2">Why Gold Mountain Exists</h3>
              <p>[REASON FOR EXISTENCE TO BE PROVIDED. An explanation of the core motivation behind building this specific sanctuary at this specific location.]</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// --- PHILOSOPHY & LOCATION NARRATIVE ---
function PhilosophyNarrative() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    revealSection(textRef.current as Element);
    if (imageRef.current) {
      createImageParallax(imageRef.current, sectionRef.current as Element, -15, 15, 1.25);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-canvas-ivory relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* Narrative Flow */}
        <div ref={textRef} className="w-full lg:w-3/5">
          <h2 className="text-3xl font-headline-md text-forest-deep mb-10">Our Philosophy & Place</h2>
          
          <div className="space-y-8 text-forest-deep/80 font-body-md text-lg leading-relaxed">
            <p>
              We believe that true <strong className="text-forest-deep font-medium">Wellness</strong> cannot be forced. It unfolds naturally when you are given the space to breathe, the time to rest, and an environment that supports your healing.
            </p>
            <p>
              This is why <strong className="text-forest-deep font-medium">Nature</strong> dictates our rhythm. Situated in the powerful energetic field of <strong className="text-forest-deep font-medium">Arunachala</strong>, the resort is deeply connected to the surrounding landscape. The silence of the mountain grounds us, reminding us of the stillness within ourselves.
            </p>
            <p>
              Our <strong className="text-forest-deep font-medium">Food</strong> is prepared with the same mindfulness. We serve nourishing, locally sourced meals that honor the body&apos;s need for clean energy, proving that healthy eating can be a deeply joyful experience.
            </p>
            <p>
              We rely on <strong className="text-forest-deep font-medium">Traditional Knowledge</strong>—drawing from the ancient sciences of Ayurveda and Yoga—not as rigid doctrines, but as flexible, living practices tailored to your modern needs.
            </p>
            <p>
              Finally, our <strong className="text-forest-deep font-medium">Hospitality</strong> is rooted in genuine care. We step forward when you need guidance and step back when you need solitude, ensuring your stay at Gold Mountain is exactly what you require it to be.
            </p>
          </div>
        </div>

        {/* Floating Accent Image */}
        <div className="w-full lg:w-2/5 hidden md:block mt-20">
          <div className="aspect-[3/4] w-full overflow-hidden relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?auto=format&fit=crop&w=800&q=80" 
              alt="Arunachala Landscape" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-forest-deep/50 mt-4 text-center">The presence of the mountain</p>
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
        <h2 className="text-3xl md:text-5xl font-headline-md mb-12 italic font-serif">Come experience Gold Mountain.</h2>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-accent-gold text-forest-charcoal px-10 py-4 rounded-lg font-label-md uppercase tracking-wider hover:bg-gold-light transition-colors"
        >
          Explore the Resort <span className="material-symbols-outlined text-[18px]">east</span>
        </Link>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <Navigation />
      <AboutHero />
      <TheStory />
      <FounderProfile />
      <PhilosophyNarrative />
      <FinalCTA />
      <Footer />
    </main>
  );
}
