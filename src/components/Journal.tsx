"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealStagger } from "../utils/animations";

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (introRef.current) {
      revealStagger(introRef.current.children, sectionRef.current!);
    }

    if (articlesRef.current) {
      revealStagger(articlesRef.current.children, articlesRef.current, 0.2);
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="journal" className="w-full py-space-3xl bg-surface-cream relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div ref={introRef} className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-lg">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="h-0.5 w-6 bg-accent-gold"></span>
              <span className="font-label-md text-label-md uppercase tracking-widest text-accent-terracotta">Section 09 · Journal &amp; Wisdom</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
              Stories of Wellness &amp; Arunachala.
            </h2>
            <p className="font-headline-md text-headline-md text-secondary mt-space-xs font-serif italic">
              Reflections on conscious living, ancient science, and sacred geography.
            </p>
          </div>
          <a href="#journal" className="font-label-md text-label-md uppercase tracking-wider text-forest-deep hover:text-accent-terracotta transition-all inline-flex items-center gap-1 group py-1.5 px-3 rounded hover:bg-forest-deep/5 font-semibold">
            <span>Read All Journal Entries</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        
        {/* 3 Featured Journal Articles */}
        <div ref={articlesRef} className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          
          {/* Article 1 */}
          <article className="flex flex-col rounded-xl overflow-hidden bg-canvas-ivory shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-full aspect-[16/10] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBff-dHQjJQAfDdnhZGObNdgAyI99t0GtLb7EDVP8ojtklmgX19VnBjxrvfzMTbFI_6YDtEo2pe5WQUu_QrL9ZXSv9I9-BHBMSrhft4EA4KkMY9OJ7yzHM3WzDRx8z5-0gshMLTr1X3nJaYjy4zQTy841pu4luxHmWdjHLC9y9g-_3s_ex3SMNadJZef8QJ6j9B7a2hirBcLVNZYTaW2dE1CWLeofQEdLwxJnHdfzT1uFjErccSkRbp')" }}
              ></div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-cream text-accent-terracotta font-label-sm text-label-sm uppercase">Spirituality</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">5 min read</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-forest-deep group-hover:text-accent-gold transition-colors">
                  The Sacred Stillness of Arunachala: An International Traveler’s Guide
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Navigating the sacred geography of Tiruvannamalai, the 14 km Girivalam circumambulation, and finding deep inner quietude.
                </p>
              </div>
              <div className="pt-space-md border-t border-border-muted mt-space-md">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-forest-deep flex items-center gap-1 group-hover:text-accent-gold transition-colors">
                  Read Article <span className="material-symbols-outlined text-[14px]">east</span>
                </span>
              </div>
            </div>
          </article>
          
          {/* Article 2 */}
          <article className="flex flex-col rounded-xl overflow-hidden bg-canvas-ivory shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-full aspect-[16/10] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAofNZqVnGVJzpaGvDlLSddXpowD08XVurhMktLFiO9MAIawNTe2m5F-qmtJb5-GXbPUG7moBCRYC8uZwCKxWOBYi_QSlDkZ5IvdOm_ED_i8atlnP9tu0EKclC1RTISXLMTtCWWJ-e6zOD6f6Il6aMpMhApasOoO4OU0hB7dnnfQrSL2FpjRT95HYxIZr7HMHCseBkVDfrsiZQhxLWngOaO-eAGsq1ZCYO48_OgBjQoaRsWBEHlpaH3')" }}
              ></div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-cream text-accent-gold font-label-sm text-label-sm uppercase">Ayurveda</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">7 min read</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-forest-deep group-hover:text-accent-gold transition-colors">
                  Ayurveda as Daily Rhythm: Beyond Treatments to Wholesome Living
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  How Dinacharya (daily natural routine) harmonizes the biological clock and prevents imbalances before they arise.
                </p>
              </div>
              <div className="pt-space-md border-t border-border-muted mt-space-md">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-forest-deep flex items-center gap-1 group-hover:text-accent-gold transition-colors">
                  Read Article <span className="material-symbols-outlined text-[14px]">east</span>
                </span>
              </div>
            </div>
          </article>
          
          {/* Article 3 */}
          <article className="flex flex-col rounded-xl overflow-hidden bg-canvas-ivory shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all">
            <div className="w-full aspect-[16/10] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQrVUbYJVSxbYoschzu5xitIOLTAaVU2aHAQOEVI0kk-ohlq8Th8hQ0AgNchZm20LLAlpUuBQg7ORspahMAnocuEkkSFATvUEn4cv0LS_tCQcor_3-C0BPpxK8PfF-T74cYxyljgxq7DaJKOsnP6Z6mZ6IOHK2kxN-NHc4ePFyPdoDG3QamzjezgFLryZQREUcB21g9hy-FPNzxnXSWycj411z-hKKaFBBtynqQjiKdHJh5OtIcN6t')" }}
              ></div>
            </div>
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-sm mb-space-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-cream text-forest-deep font-label-sm text-label-sm uppercase">Nourishment</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">4 min read</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-forest-deep group-hover:text-accent-gold transition-colors">
                  From Soil to Plate: The Healing Power of Sattvic Garden Dining
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Why food harvested within hours of consumption retains vibrant prana and supports physical and mental lightness.
                </p>
              </div>
              <div className="pt-space-md border-t border-border-muted mt-space-md">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-forest-deep flex items-center gap-1 group-hover:text-accent-gold transition-colors">
                  Read Article <span className="material-symbols-outlined text-[14px]">east</span>
                </span>
              </div>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  );
}

