"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useCurrency, Currency } from "../../context/CurrencyContext";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isReducedMotion, EASE_CINEMATIC, revealSection, revealStagger, createImageParallax } from "@/utils/animations";

// --- HERO SECTION ---
function StayHero() {
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
        <div ref={bgRef} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/stay_suite.png')" }} />
      </div>
      <div className="absolute inset-0 z-10 bg-forest-charcoal/40 pointer-events-none"></div>
      
      <div ref={contentRef} className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight leading-[1.15] mb-6">
          A peaceful place to <span className="text-accent-gold">stay.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-canvas-ivory/90 max-w-2xl mx-auto font-light leading-relaxed">
          Peaceful spaces in nature, made for rest. Deluxe and Suite rooms include breakfast and lunch. The Family Suite includes all meals.
        </p>
      </div>
    </section>
  );
}

// --- ROOMS SECTION ---

const ROOMS = [
  {
    name: "Mountain View Deluxe",
    capacity: "2 Persons",
    description: "Our comfortable deluxe room offering direct views of the mountain. Features a king-sized bed, air conditioning, and a meal plan including breakfast and lunch.",
    amenities: ["Mountain View", "King Size Bed", "Air Conditioning", "Breakfast & Lunch"],
    prices: { INR: "₹3,099", USD: "$37", EUR: "€34" },
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    reverse: false
  },
  {
    name: "Mountain View Suite",
    capacity: "2 Persons",
    description: "A spacious suite offering elevated mountain views and additional living space. Perfect for longer stays, featuring a king-sized bed, premium amenities, and a meal plan including breakfast and lunch.",
    amenities: ["Spacious Layout", "Mountain View", "King Size Bed", "Breakfast & Lunch"],
    prices: { INR: "₹4,099", USD: "$49", EUR: "€45" },
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    reverse: true
  },
  {
    name: "Mountain View Family Suite",
    capacity: "4 Persons",
    description: "Our largest accommodation, designed for families or small groups. Offers multiple sleeping arrangements, expansive mountain views, and full board for all guests (breakfast, lunch, and dinner).",
    amenities: ["Family Layout", "Mountain View", "King Size Beds", "All Meals Included"],
    prices: { INR: "₹7,999", USD: "$95", EUR: "€89" },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    reverse: false
  }
];

function Rooms() {
  const { currency } = useCurrency();

  return (
    <div className="bg-canvas-ivory">
      {ROOMS.map((room, index) => (
        <RoomBlock key={room.name} room={room} index={index} currency={currency} />
      ))}
    </div>
  );
}

function RoomBlock({ room, index, currency }: { room: typeof ROOMS[0], index: number, currency: Currency }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imageRef.current) {
      createImageParallax(imageRef.current, sectionRef.current as Element, -10, 10, 1.25);
    }
    if (contentRef.current) {
      revealSection(contentRef.current);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 border-b border-border-muted/30 last:border-b-0 overflow-hidden">
      <div className={`max-w-7xl mx-auto flex flex-col ${room.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start gap-16`}>
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/3] w-full overflow-hidden relative rounded-xl">
            <img 
              ref={imageRef} 
              src={room.image} 
              alt={room.name} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Content Side */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-accent-gold uppercase tracking-widest font-label-sm text-sm mb-4 block">Capacity: {room.capacity}</span>
          <h2 className="text-3xl md:text-4xl font-headline-md text-forest-deep mb-6">{room.name}</h2>
          <p className="text-forest-deep/80 font-body-md text-lg leading-relaxed mb-8">
            {room.description}
          </p>
          
          <div className="mb-10 w-full">
            <span className="text-xs uppercase tracking-widest text-forest-deep font-semibold block mb-4 border-b border-border-muted pb-2">Room Amenities</span>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {room.amenities.map(item => (
                <li key={item} className="flex items-center gap-2 text-forest-deep/70 text-sm">
                  <span className="material-symbols-outlined text-[16px] text-accent-gold">done</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-forest-deep/60">From</span>
              <span className="font-headline-sm text-[25px] text-forest-deep">{room.prices[currency]}</span>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-forest-deep text-canvas-ivory px-8 py-3 rounded-lg font-label-md uppercase tracking-wider hover:bg-forest-charcoal transition-colors whitespace-nowrap"
            >
              Enquire About This Room
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// --- LONG STAY CALLOUT ---
function LongStayCallout() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="pt-16 px-6 md:px-12 bg-canvas-ivory">
      <div ref={contentRef} className="max-w-7xl mx-auto p-space-lg rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <span className="material-symbols-outlined text-accent-gold text-[32px] shrink-0">calendar_today</span>
          <div>
            <p className="font-headline-sm text-headline-sm text-forest-deep">Longer Retreats &amp; Monthly Sadhana Stays</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Special seasonal privileges and complete wellness dietary plans for guests staying 14 nights or longer.</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="whitespace-nowrap px-space-lg py-2.5 rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep active:scale-95 transition-all min-h-[42px] inline-flex items-center justify-center shrink-0"
        >
          Request Long Stay Rates
        </Link>
      </div>
    </section>
  );
}

// --- AMENITIES GRID ---
const AMENITIES = [
  { name: "Air Conditioning", icon: "ac_unit" },
  { name: "High-speed Wi-Fi", icon: "wifi" },
  { name: "Secure Parking", icon: "local_parking" },
  { name: "Sattvic Restaurant", icon: "restaurant" },
  { name: "King Size Beds", icon: "bed" },
  { name: "Long-stay Options", icon: "calendar_month" },
  { name: "Alcohol & Smoke Free", icon: "smoke_free" },
  { name: "Ayurveda Doctor", icon: "health_and_safety" }
];

function AmenitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    revealStagger(gridRef.current.querySelectorAll('.amenity-item'), gridRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-canvas-ivory border-t border-border-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-headline-md text-forest-deep mb-16">Resort Amenities</h2>
        
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
          {AMENITIES.map(amenity => (
            <div key={amenity.name} className="amenity-item flex flex-col items-center group">
              <div className="w-16 h-16 rounded-lg bg-surface-cream border border-border-muted flex items-center justify-center mb-4 text-forest-deep/80 group-hover:bg-forest-deep group-hover:text-accent-gold transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">{amenity.icon}</span>
              </div>
              <h3 className="text-sm font-label-md uppercase tracking-wider text-forest-deep">{amenity.name}</h3>
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
        <h2 className="text-3xl md:text-4xl font-headline-md mb-12">Plan your stay at Gold Mountain.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:goldmountainstay@gmail.com" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-canvas-ivory/40 text-canvas-ivory px-8 py-3 rounded-lg font-label-md uppercase tracking-wider hover:bg-canvas-ivory/10 transition-colors"
          >
            Email
          </a>
          <a 
            href="https://wa.me/918838198769" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-[9999px] font-label-md uppercase tracking-wider hover:bg-[#25D366]/90 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE ---
export default function StayPage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <Navigation />
      <StayHero />
      <LongStayCallout />
      <Rooms />
      <AmenitiesGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}







