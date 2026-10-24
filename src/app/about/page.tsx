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
        {/* Placeholder image for About (a wide landscape view) */}
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest-charcoal/80 via-forest-charcoal/40 to-forest-charcoal/85 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-forest-deep/30 to-forest-charcoal/90 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight mb-6">
          About Gold Mountain Wellness Resort, <span className="text-accent-gold block mt-2">Tiruvannamalai</span>
        </h1>
        <p className="font-headline-sm text-2xl text-accent-gold mb-6">A place created with purpose.</p>
        <p className="font-body-lg text-body-lg text-canvas-ivory/90 max-w-2xl mx-auto font-light leading-relaxed text-balance">
          Discover the story behind Gold Mountain, a resort in Tiruvannamalai built on harmony, traditional wellness and deep respect for the natural world.
        </p>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={textRef} className="max-w-3xl mx-auto">
        <h2 className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-1 block">Our Story</h2>
        <p className="text-forest-deep/90 font-body-lg text-xl md:text-2xl leading-relaxed font-light">
          Gold Mountain was born from a desire to create a sanctuary where people could step away from the noise of modern life. We envisioned a place not just for leisure but for genuine restoration: a space where the natural world and traditional healing practices work together quietly, without pretense.
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-surface-cream overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Founder Image Placeholder */}
        <div className="w-full lg:w-5/12 relative">
          <div className="aspect-[3/4] w-full overflow-hidden relative">
            <img 
              ref={imageRef} 
              src="https://images.unsplash.com/photo-1544168190-79c154433778?auto=format&fit=crop&w=800&q=80" 
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
            />
            <div className="absolute inset-0 border border-border-muted m-4 pointer-events-none"></div>
          </div>
        </div>

        {/* Right: Structured Text Blocks */}
        <div ref={contentRef} className="w-full lg:w-7/12 flex flex-col items-start text-left">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-2">
            <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-1 block">Meet Our Founder,</span>{" "}
            Preethi Parangusam
          </h2>
          <p className="font-label-md uppercase tracking-widest text-forest-deep/60 mb-8">Founder, Gold Mountain Wellness Resort</p>
          
          <div className="space-y-8 text-forest-deep/80 font-body-md text-lg leading-relaxed">
            <div className="space-y-4">
              <p>Gold Mountain Wellness Resort was founded with a vision to create a peaceful sanctuary where spirituality, wellness, nature and traditional hospitality come together.</p>
              <p>Inspired by the sacred presence of Arunachala, Preethi envisioned a space where guests from around the world can slow down, reconnect with themselves and experience the serenity of Tiruvannamalai.</p>
              <p>From mindful stays and wholesome food to Ayurveda, yoga, meditation and spiritual experiences, every element of Gold Mountain is shaped around one purpose:</p>
            </div>
            
            <div className="relative border-l-2 border-accent-gold pl-6 py-2 mt-8">
              <p className="font-headline-sm text-forest-deep text-2xl leading-snug">
                &ldquo;To make every stay a journey towards peace, balance, and inner well-being.&rdquo;
              </p>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-canvas-ivory relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* Narrative Flow */}
        <div ref={textRef} className="w-full lg:w-3/5">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-10">Our Philosophy &amp; Place</h2>
          
          <div className="space-y-8 text-forest-deep/80 font-body-md text-lg leading-relaxed">
            <p>
              We believe true <strong className="text-forest-deep font-medium">wellness</strong> cannot be forced. It unfolds naturally when you are given space to breathe, time to rest and an environment that supports healing.
            </p>
            <p>
              <strong className="text-forest-deep font-medium">Nature</strong> sets our rhythm. Situated in the powerful field of <strong className="text-forest-deep font-medium">Arunachala</strong>, the resort is deeply connected to the surrounding landscape, and the silence of the mountain reminds us of the stillness within.
            </p>
            <p>
              Our <strong className="text-forest-deep font-medium">food</strong> is prepared with the same mindfulness: nourishing, locally sourced meals that honour the body&apos;s need for clean energy.
            </p>
            <p>
              We rely on <strong className="text-forest-deep font-medium">traditional knowledge</strong>, drawing from Ayurveda and Yoga as flexible, living practices tailored to modern needs. Explore our <Link href="/ayurveda-treatments-tiruvannamalai" className="text-forest-deep underline decoration-accent-gold underline-offset-4 hover:text-surface-tint transition-colors">Ayurveda treatments in Tiruvannamalai</Link> and the <Link href="/wellness-resort-tiruvannamalai" className="text-forest-deep underline decoration-accent-gold underline-offset-4 hover:text-surface-tint transition-colors">wellness resort</Link>.
            </p>
            <p>
              Our <strong className="text-forest-deep font-medium">hospitality</strong> is rooted in genuine care. We step forward when you need guidance and step back when you need solitude.
            </p>
          </div>
        </div>

        {/* Floating Accent Image */}
        <div className="w-full lg:w-2/5 hidden md:block mt-20">
          <div className="aspect-[3/4] w-full overflow-hidden relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9b?auto=format&fit=crop&w=800&q=80" 
              alt=""
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          <p className="text-xs uppercase tracking-widest text-forest-deep/50 mt-4 text-center">The presence of the mountain</p>
        </div>

      </div>
    </section>
  );
}

// --- GROUNDS & NOURISHMENT ---
function GroundsAndNourishment() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-surface-cream border-t border-border-muted/30">
      <div ref={contentRef} className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-1 block">The Resort</span>
        <p className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-16">Grounds &amp; Nourishment</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full">
          {/* Nature & Grounds */}
          <div className="p-8 bg-canvas-ivory border border-border-muted/50 rounded-xl">
            <h2 id="estate" className="scroll-mt-24 text-2xl font-headline-sm text-forest-deep mb-6 pb-4 border-b border-accent-gold/30 text-center w-full block">The Estate: <span className="block text-lg mt-1">Goshala, Organic Farm &amp; Gardens</span></h2>
            <ul className="space-y-4 text-forest-deep/80 font-body-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-gold mt-0.5">grass</span>
                <div>
                  <strong className="block text-forest-deep font-medium">Goshala with Kangayam Cows</strong>
                  <p>A traditional cow shelter housing native Kangayam cows, which play a vital role in our organic farming cycle.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-gold mt-0.5">yard</span>
                <div>
                  <strong className="block text-forest-deep font-medium">Organic Food Farm</strong>
                  <p>A dedicated plot where we grow fresh, chemical-free vegetables and herbs used directly in our kitchens.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-gold mt-0.5">deceased</span>
                <div>
                  <strong className="block text-forest-deep font-medium">Flower Garden</strong>
                  <p>Tranquil walking paths among native flora, with spaces for quiet reflection and meditation.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Dining */}
          <div className="p-8 bg-canvas-ivory border border-border-muted/50 rounded-xl">
            <h2 className="text-2xl font-headline-sm text-forest-deep mb-6 pb-4 border-b border-accent-gold/30 text-center w-full block">Nourishment: <span className="block text-lg mt-1">Sattvic Vegetarian Restaurant</span></h2>
            <ul className="space-y-4 text-forest-deep/80 font-body-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[20px] text-accent-gold mt-0.5">eco</span>
                <div>
                  <strong className="block text-forest-deep font-medium">Sattvic Vegetarian Restaurant</strong>
                  <p>A kitchen that follows pure sattvic principles, with meals crafted for mental clarity and physical lightness.</p>
                </div>
              </li>
              <li className="flex gap-3">
                  <span className="material-symbols-outlined text-[20px] text-accent-gold mt-0.5">set_meal</span>
                  <div>
                    <strong className="block text-forest-deep font-medium">Dietary Accommodations</strong>
                    <p>Vegan and gluten-free meals available on request, prepared without compromising on taste.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-[20px] text-accent-gold mt-0.5">local_cafe</span>
                  <div>
                    <strong className="block text-forest-deep font-medium">Herbal Infusions</strong>
                    <p>Teas brewed fresh from medicinal plants in our gardens, served daily to support healthy digestion.</p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- LOCATION ---
function OurLocation() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={contentRef} className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-6">Our Location</h2>
        <p className="font-body-md text-lg text-forest-deep/80 leading-relaxed mb-6">
          The resort lies on the quiet outer side of Arunachala, about 1 km from the Girivalam path, 1.5 km from Adi Arunachala Temple, 5 km from Ramanasramam and 6 km from Arunachaleswarar Temple.
        </p>
        <Link href="/contact-us#location" className="font-body-md text-forest-deep underline decoration-accent-gold underline-offset-4 hover:text-surface-tint transition-colors">See how to reach us</Link>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-surface-cream text-forest-deep text-center">
      <div ref={contentRef} className="max-w-2xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg tracking-tight mb-6">Come Experience Gold Mountain</h2>
        <p className="font-body-md text-lg text-forest-deep/80 leading-relaxed mb-10">
          Stay with us in our <Link href="/rooms-in-tiruvannamalai" className="text-forest-deep underline decoration-accent-gold underline-offset-4 hover:text-surface-tint transition-colors">rooms in Tiruvannamalai</Link> or <Link href="/contact-us" className="text-forest-deep underline decoration-accent-gold underline-offset-4 hover:text-surface-tint transition-colors">get in touch</Link>.
        </p>
        <Link href="/" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Explore the Resort</span>
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
      <GroundsAndNourishment />
      <OurLocation />
      <FinalCTA />
      <Footer />
    </main>
  );
}
