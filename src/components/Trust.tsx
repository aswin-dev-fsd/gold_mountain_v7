"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";

const highlights = [
  { title: "Ayurveda on Site", detail: "Personal consultations and traditional therapies", icon: "spa" },
  { title: "Sattvic Dining", detail: "Vegetarian meals prepared at the resort", icon: "restaurant" },
  { title: "Mountain View Rooms", detail: "Three room types for short and longer stays", icon: "landscape" },
  { title: "Room to Slow Down", detail: "Yoga, meditation and quiet natural spaces", icon: "self_improvement" },
];

const reviews = [
  { quote: "The rooms were very good and exceptionally clean.", author: "Prathik Reddy" },
  { quote: "The food served was excellent.", author: "Machina Sanjeevi" },
];

/** Home trust section with the guest excerpts supplied in the final content. */
export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (introRef.current) revealStagger(introRef.current.children, sectionRef.current!);
    if (badgesRef.current) revealStagger(badgesRef.current.children, badgesRef.current, 0.2);
    if (reviewsRef.current) revealStagger(reviewsRef.current.children, reviewsRef.current, 0.3);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full py-space-xl bg-surface-cream relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div ref={introRef} className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Gold Mountain</span>
          <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight mt-space-xs">What Our Guests Say</h2>
          <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-xs font-normal">
            A place for rest, nourishment and time in nature.
          </p>
        </div>

        <div ref={badgesRef} className="grid grid-cols-2 md:grid-cols-4 gap-space-sm sm:gap-space-md mb-space-lg">
          {highlights.map(({ title, detail, icon }) => (
            <div key={title} className="p-space-md sm:p-space-lg rounded-xl bg-canvas-ivory text-center flex flex-col items-center shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-3">
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">{icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-forest-deep">{title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{detail}</p>
            </div>
          ))}
        </div>

        <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-2 gap-space-md sm:gap-space-lg max-w-3xl mx-auto">
          {reviews.map(({ quote, author }) => (
            <blockquote key={author} className="p-space-md sm:p-space-lg rounded-xl bg-canvas-ivory shadow-xs flex flex-col justify-between">
              <div>
                <span aria-hidden="true" className="block font-serif text-5xl sm:text-6xl leading-none text-accent-gold -mb-1 select-none">“</span>
                <p className="font-body-md text-body-md text-forest-charcoal leading-relaxed pt-1">
                  {quote}
                </p>
              </div>
              <footer className="pt-space-sm border-t border-border-muted mt-space-md font-headline-sm text-headline-sm text-forest-deep">
                {author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
