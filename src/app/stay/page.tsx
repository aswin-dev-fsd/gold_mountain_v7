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
          A peaceful place to <span className="text-accent-gold italic font-serif">stay.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-canvas-ivory/90 max-w-2xl mx-auto font-light leading-relaxed">
          Comfortable spaces surrounded by nature, created for rest and reconnection.
        </p>
      </div>
    </section>
  );
}

// --- ROOMS SECTION ---
const ROOMS = [
  {
    name: "Valley View Suite",
    capacity: "2 Adults",
    description: "Our signature suite offering expansive views of the valley. Features a private balcony, king-sized bed, and an en-suite bathroom with sustainable amenities designed for complete relaxation.",
    amenities: ["Private Balcony", "King Size Bed", "En-suite Bathroom", "Forest Views"],
    price: "[PRICE TO BE PROVIDED]",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    reverse: false
  },
  {
    name: "Forest Pavilion",
    capacity: "Up to 3 Adults",
    description: "Tucked away in the greenery, the Forest Pavilion offers deep quiet and privacy. A spacious layout with natural wood finishes brings the calming energy of the outdoors inside.",
    amenities: ["Spacious Layout", "Sitting Area", "Premium Linens", "Garden Access"],
    price: "[PRICE TO BE PROVIDED]",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    reverse: true
  }
];

function Rooms() {
  return (
    <div className="bg-canvas-ivory">
      {ROOMS.map((room, index) => (
        <RoomBlock key={room.name} room={room} index={index} />
      ))}
    </div>
  );
}

function RoomBlock({ room, index }: { room: typeof ROOMS[0], index: number }) {
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
      <div className={`max-w-7xl mx-auto flex flex-col ${room.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/3] w-full overflow-hidden relative">
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
          <span className="text-accent-terracotta uppercase tracking-widest font-label-sm text-sm mb-4 block">Capacity: {room.capacity}</span>
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
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-forest-deep/60">From</span>
              <span className="font-headline-sm text-xl text-forest-deep">{room.price}</span>
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

// --- MONTHLY STAYS SECTION ---
function MonthlyStays() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    revealSection(contentRef.current as Element);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-surface-cream text-center border-t border-border-muted/30">
      <div ref={contentRef} className="max-w-2xl mx-auto">
        <span className="text-accent-terracotta uppercase tracking-widest font-label-sm text-sm mb-4 block">Extended Retreats</span>
        <h2 className="text-3xl md:text-5xl font-headline-md mb-8 italic font-serif text-forest-deep">Stay a little longer.</h2>
        <p className="text-forest-deep/80 font-body-md text-lg mb-10 max-w-xl mx-auto">
          Take the time to truly disconnect. We offer tailored packages and pricing for guests looking to stay for a month or longer, providing a quiet sanctuary for deep work, healing, or extended rest.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 border border-forest-deep text-forest-deep px-8 py-3 rounded font-label-md uppercase tracking-wider hover:bg-forest-deep hover:text-canvas-ivory transition-colors"
        >
          Ask About Monthly Stay <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        </Link>
      </div>
    </section>
  );
}

// --- AMENITIES GRID ---
const AMENITIES = [
  { name: "Room Service", icon: "room_service" },
  { name: "Dining Area", icon: "restaurant" },
  { name: "Free Parking", icon: "local_parking" },
  { name: "Air Conditioning", icon: "ac_unit" },
  { name: "High-speed Wi-Fi", icon: "wifi" },
  { name: "CCTV", icon: "videocam" },
  { name: "24-hour Front Desk", icon: "concierge" }
];

function AmenitiesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    revealStagger(gridRef.current.querySelectorAll('.amenity-item'), gridRef.current);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-canvas-ivory">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-headline-md text-forest-deep mb-16">Resort Amenities</h2>
        
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
          {AMENITIES.map(amenity => (
            <div key={amenity.name} className="amenity-item flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-surface-cream border border-border-muted flex items-center justify-center mb-4 text-forest-deep/80 group-hover:bg-forest-deep group-hover:text-accent-gold transition-colors duration-300">
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
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded font-label-md uppercase tracking-wider hover:bg-[#128C7E] transition-colors shadow-lg"
          >
            WhatsApp
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-canvas-ivory/40 text-canvas-ivory px-8 py-3 rounded font-label-md uppercase tracking-wider hover:bg-canvas-ivory/10 transition-colors"
          >
            Email
          </Link>
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
      <Rooms />
      <MonthlyStays />
      <AmenitiesGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}
