"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RetreatPackage from "@/components/RetreatPackage";
import { WELLNESS_FAQS } from "@/content/wellness";
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
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/wellness_image.png')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest-charcoal/80 via-forest-charcoal/40 to-forest-charcoal/85 pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-forest-deep/30 to-forest-charcoal/90 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight mb-6 text-balance">
          Wellness Resort <span className="text-accent-gold">in Tiruvannamalai</span>
        </h1>
        <p className="font-headline-sm text-2xl text-accent-gold mb-8">A slower way back to yourself.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="#programs" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal border border-forest-deep">
            Check Programs
          </a>
          <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] border border-canvas-ivory/70 text-canvas-ivory hover:bg-canvas-ivory/15 transition-colors">
            Enquire
          </Link>
        </div>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-canvas-ivory text-center">
      <div ref={textRef} className="max-w-3xl mx-auto">
        <p className="font-body-lg text-body-lg text-forest-deep/80 max-w-2xl mx-auto leading-relaxed mb-12 text-balance">
          Gold Mountain is a wellness resort in Tiruvannamalai built for slowing down. Explore traditional wellness practices, nourishing food and quiet spaces designed to help you reconnect with body and mind, below the sacred hill of Arunachala.
        </p>
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-1 block">Our Philosophy</span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-forest-deep mb-4 text-balance">
          Traditional Wellness and the Healing Qualities of Nature
        </h2>
        <p className="text-forest-deep/80 font-body-md text-lg max-w-2xl mx-auto leading-relaxed">
          At Gold Mountain, wellness is not a rigid program but a personal experience. By bringing together timeless traditions and the quiet power of our natural surroundings, we offer a space where healing happens at its own natural pace. It is not a clinic and not a busy tourist hotel, but a peaceful place to rest.
        </p>
      </div>
    </section>
  );
}

// --- APPROACH GRID ---
const APPROACH_ITEMS = [
  { title: "Ayurveda and Traditional Therapies", description: "Authentic treatments that support your body's natural balance.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", fallback: "/images/wellness_image.png" },
  { title: "Yoga", description: "Gentle movement and breathwork in an open-air shala.", img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80", fallback: "/images/hero_bg.png" },
  { title: "Meditation", description: "Guided mindfulness and silent spaces for reflection.", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80", fallback: "/images/hero_bg.png" },
  { title: "Healthy Food", description: "Sattvic vegetarian meals, with vegan and gluten-free options on request.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80", fallback: "/images/dining_image.png" },
  { title: "Nature", description: "Time by the lotus pond, flower garden and medicinal herb garden.", img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80", fallback: "/images/hero_bg.png" },
  { title: "Lifestyle Consultations", description: "Personal guidance on daily routine and diet.", img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80", fallback: "/images/wellness_image.png" },
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-forest-deep mb-12 text-center text-balance">Our Approach: Ayurveda, Yoga, Meditation, Food and Nature</h2>
        
        <div ref={gridRef} className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {APPROACH_ITEMS.map((item) => (
            <div key={item.title} className="approach-item group relative overflow-hidden flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-3">
                <div className="parallax-img absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${item.img}'), url('${item.fallback}')` }} />
              </div>
              <h3 className="text-base md:text-lg font-headline-sm text-forest-deep uppercase tracking-wider">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-forest-deep/75 mt-2 leading-relaxed">{item.description}</p>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-surface-cream text-forest-deep text-center">
      <div ref={contentRef} className="max-w-3xl mx-auto">
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold mb-1 block">Ayurveda</span>
        <h2 className="font-headline-lg text-headline-lg tracking-tight mb-4">Explore Ayurveda in Tiruvannamalai</h2>
        <p className="text-forest-deep/80 font-body-md text-lg mb-12 max-w-2xl mx-auto">
          Ayurveda and traditional therapies support your body&apos;s natural balance. Explore personalised treatments with guidance from our Ayurveda doctor.
        </p>
        <Link href="/ayurveda-treatments-tiruvannamalai" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Explore Ayurveda</span>
<span aria-hidden="true" className="text-accent-gold text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
</Link>
      </div>
    </section>
  );
}

// --- PROGRAMMES / PACKAGES ---
const PACKAGES = [
  {
    name: "Inner Silence Retreat",
    duration: "3 Days / 2 Nights",
    description: "A gentle introduction to mindful living with daily yoga, silent walks and organic food.",
    includes: ["Daily yoga", "Guided meditation", "Organic meals", "Nature walks"],
  },
  {
    name: "Ayurveda Detox (Panchakarma)",
    duration: "14 or 21 Days",
    description: "A traditional cleansing program that supports the body's natural balance.",
    includes: ["Doctor consultation", "Daily therapies", "Prescribed diet", "Herbal medicines"],
  },
  {
    name: "Rejuvenation Therapy (Rasayana)",
    duration: "7 or 14 Days",
    description: "A restorative program to ease stress and renew body and mind.",
    includes: ["Abhyanga massage", "Shirodhara", "Yoga", "Mindful meals"],
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
    <section ref={sectionRef} id="programs" className="scroll-mt-24 py-space-3xl px-6 md:px-12 bg-surface-cream border-t border-border-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-forest-deep mb-12 text-center text-balance">Wellness Programs and Packages in Tiruvannamalai</h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map(pkg => (
            <div key={pkg.name} className="pkg-card bg-canvas-ivory border border-border-muted p-8 flex flex-col h-full rounded-xl">
              <h3 className="font-headline-md text-headline-md font-normal leading-[1.05] text-forest-deep mb-2">{pkg.name}</h3>
              <p className="text-accent-gold font-label-md uppercase tracking-wider mb-6">{pkg.duration}</p>
              
              <p className="text-forest-deep/80 font-body-sm mb-6 flex-grow">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-3">Includes</span>
                <ul className="space-y-2">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-forest-deep/70 text-sm">
                      <span aria-hidden="true" className="text-accent-gold font-semibold leading-none mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-border-muted/50 mt-auto">
                <p className="font-body-sm text-body-sm text-forest-deep/75 mb-5">Enquire for current rates and availability.</p>
                <Link href="/contact-us" className="w-full group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
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

function GirivalamGuidance() {
  return (
    <section className="py-space-3xl px-6 md:px-12 bg-forest-charcoal text-canvas-ivory">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
        <div>
          <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold block mb-3">Arunachala</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-balance">Girivalam: What to Know Before You Walk</h2>
        </div>
        <div className="font-body-md text-body-md text-canvas-ivory/85 leading-relaxed space-y-4">
          <p>Girivalam is the 14 km walk around the hill of Arunachala, traditionally done barefoot, quietly or with soft chanting. Our resort is about 1 km from the path, so you can start before dawn and be back for breakfast.</p>
          <p>Walk early or after sunset to avoid the heat, carry water, keep valuables to a minimum and go at your own pace. If you have a health condition or mobility concerns, speak to your doctor first. Pournami nights and festival periods are very crowded, so book early.</p>
        </div>
      </div>
    </section>
  );
}

function NourishmentAndLongStays() {
  return (
    <section className="py-space-3xl px-6 md:px-12 bg-surface-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-canvas-ivory border border-border-muted rounded-xl p-8 md:p-10 flex flex-col">
          <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold block mb-3">Nourishment</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-forest-deep mb-5 text-balance">Sattvic Diet and Herbal Infusions</h2>
          <p className="font-body-md text-body-md text-forest-deep/80 leading-relaxed">Food is part of the healing. Meals are vegetarian and prepared without chemical additives or refined sugar, using seasonal produce from our own soil, cold-pressed sesame oil, honey and digestive spices. Fresh herbal infusions from tulsi, vetiver and lemongrass are served through the day.</p>
        </div>
        <div className="bg-canvas-ivory border border-border-muted rounded-xl p-8 md:p-10 flex flex-col">
          <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold block mb-3">Extended stays</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-forest-deep mb-5 text-balance">Long Stays and Monthly Sadhana</h2>
          <p className="font-body-md text-body-md text-forest-deep/80 leading-relaxed mb-8">For guests staying 14 nights or longer, we offer seasonal privileges and complete wellness diet plans.</p>
          <Link href="/contact-us#enquiry" className="mt-auto self-start group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory">
            Request Long-Stay Rates
          </Link>
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
    <section ref={sectionRef} className="py-space-3xl px-6 md:px-12 bg-canvas-ivory text-forest-deep text-center">
      <div ref={contentRef} className="max-w-2xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight mb-5 text-balance">Find the Kind of Wellness That Suits Your Stay</h2>
        <p className="font-body-md text-body-md text-forest-deep/80 mb-8">Choose a program, then a room. Our team can help you plan both.</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4">
          <Link href="/rooms-in-tiruvannamalai" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory hover:bg-forest-charcoal">
            Rooms in Tiruvannamalai
          </Link>
          <a href="mailto:goldmountainstay@gmail.com" className="w-full sm:w-auto group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all border border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-canvas-ivory">
<span>Send an Email</span>
</a>
          <a
            href="https://wa.me/918838198769"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white rounded-[9999px] font-label-md uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors text-label-md font-semibold px-space-lg py-2.5 min-h-[42px]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

function WellnessFAQs() {
  return (
    <section id="faq" className="scroll-mt-24 py-space-3xl px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-forest-deep text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {WELLNESS_FAQS.map(faq => (
            <details key={faq.question} className="group bg-surface-cream border border-border-muted rounded-xl px-6 md:px-8">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-6 text-forest-deep font-headline-sm text-headline-sm [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span aria-hidden="true" className="text-accent-gold text-2xl leading-none shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="font-body-md text-body-md text-forest-deep/80 leading-relaxed pb-6 pr-6">{faq.answer}</p>
            </details>
          ))}
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
      <Programmes />
      <RetreatPackage sectionId="spiritual-retreat" title="Arunachala Spiritual Retreat in Tiruvannamalai: 2 Nights / 3 Days" />
      <GirivalamGuidance />
      <WellnessApproach />
      <AyurvedaHighlight />
      <NourishmentAndLongStays />
      <FinalCTA />
      <WellnessFAQs />
      <Footer />
    </main>
  );
}
