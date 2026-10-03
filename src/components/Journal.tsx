"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { revealStagger } from "../utils/animations";
import { JOURNAL_ARTICLES } from "../data/journal";

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
    <section ref={sectionRef} id="journal" className="w-full py-space-3xl bg-canvas-ivory relative">
      <div className="w-full max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        
        {/* Section Intro */}
        <div ref={introRef} className="flex flex-col md:flex-row md:items-start justify-between mb-space-xl gap-space-lg">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">

              <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Journal &amp; Wisdom</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-forest-deep tracking-tight">
              Stories of Wellness &amp; Arunachala.
            </h2>
            <p className="font-headline-sm text-headline-sm text-accent-gold mt-space-xs font-normal">
              Reflections on conscious living, ancient science, and sacred geography.
            </p>
          </div>
          <a href="#journal" className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-forest-deep text-canvas-ivory font-label-md text-label-md uppercase tracking-wider font-semibold shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep active:scale-95 transition-all group px-space-lg py-2.5 min-h-[42px]">
            <span>Read All Journal Entries</span>
            <span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        
        {/* 3 Featured Journal Articles */}
        <div ref={articlesRef} className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          {JOURNAL_ARTICLES.map((article) => (
            <article key={article.slug} className="flex flex-col rounded-xl overflow-hidden bg-surface-cream shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-full aspect-[16/10] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                ></div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-sm mb-space-xs">
                    <span className="px-2 py-0.5 rounded bg-canvas-ivory text-forest-deep font-label-sm text-label-sm uppercase">{article.category}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-forest-deep group-hover:text-accent-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-space-md border-t border-border-muted mt-space-md">
                  <Link href={`/journal/${article.slug}`} className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Read Article</span>
<span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




