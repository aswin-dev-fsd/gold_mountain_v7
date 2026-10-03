import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { JOURNAL_ARTICLES, getArticle } from "@/data/journal";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Gold Mountain Wellness Sanctuary`,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <main className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-forest-charcoal mt-20">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }} />
        </div>
        <div className="absolute inset-0 z-10 bg-forest-charcoal/60 pointer-events-none"></div>
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 text-canvas-ivory/90">
            <span className="px-3 py-1 rounded bg-canvas-ivory/15 backdrop-blur-sm uppercase tracking-widest font-label-sm text-sm">{article.category}</span>
          </div>
          <h1 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-canvas-ivory tracking-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-space-3xl px-6 md:px-12 bg-canvas-ivory">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#journal"
            className="inline-flex items-center gap-2 mb-12 text-sm uppercase tracking-widest text-forest-deep/70 hover:text-forest-deep transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">west</span> Back to Journal
          </Link>

          <p className="font-headline-sm text-2xl md:text-[28px] text-forest-deep leading-snug mb-14">
            {article.intro}
          </p>

          <div className="space-y-6 text-forest-deep/80 font-body-md text-lg leading-relaxed">
            {article.sections.flatMap(section => section.paragraphs).map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="py-space-3xl px-6 md:px-12 bg-surface-cream border-t border-border-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-forest-deep mb-10 text-center">More from the Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((item) => (
              <div key={item.slug} className="flex flex-col rounded-xl overflow-hidden bg-canvas-ivory border border-border-muted/50 shadow-sm">
                <div className="w-full aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded bg-surface-cream text-forest-deep font-label-sm text-label-sm uppercase">{item.category}</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-forest-deep mb-6">{item.title}</h3>
                  <Link href={`/journal/${item.slug}`} className="mt-auto self-start group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal hover:border-accent-gold/40 border border-forest-deep">
<span>Read Article</span>
<span className="material-symbols-outlined text-accent-gold text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-space-3xl px-6 md:px-12 bg-forest-charcoal text-canvas-ivory text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg tracking-tight mb-10">Experience it in person at Gold Mountain.</h2>
          <Link href="/contact" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] active:scale-95 transition-all bg-accent-gold text-forest-charcoal shadow-sm hover:bg-gold-light hover:border-gold-light border border-accent-gold">
<span>Enquire Now</span>
<span className="material-symbols-outlined text-forest-charcoal text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


