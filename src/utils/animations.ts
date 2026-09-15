import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger, this ensures it's available for all components
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Check for reduced motion
export const isReducedMotion = () => {
  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mediaQuery.matches;
  }
  return false;
};

// Global ease for consistent cinematic feel
export const EASE_CINEMATIC = "power2.out";

export const revealSection = (element: Element | string, delay = 0) => {
  if (isReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: EASE_CINEMATIC,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const revealStagger = (elements: Element[] | NodeListOf<Element> | HTMLCollection | string, trigger: Element | string, delay = 0) => {
  if (isReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: EASE_CINEMATIC,
      delay,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const createParallax = (element: Element | string, trigger: Element | string, yPercent = 20) => {
  if (isReducedMotion()) return;
  return gsap.to(element, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const createImageReveal = (element: Element | string) => {
  if (isReducedMotion()) {
    gsap.set(element, { opacity: 1 });
    return;
  }
  return gsap.fromTo(
    element,
    { opacity: 0.85 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );
};
