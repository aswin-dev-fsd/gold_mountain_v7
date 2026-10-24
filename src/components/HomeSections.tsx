import Link from "next/link";
import { HOME_FAQS } from "@/content/home";

const RESORT_HIGHLIGHTS = [
  {
    icon: "temple_hindu",
    title: "6 km to Arunachaleswarar Temple",
  },
  {
    icon: "directions_walk",
    title: "1 km to Girivalam Path",
  },
  {
    icon: "local_pharmacy",
    title: "Kerala Ayurveda",
  },
  {
    icon: "nutrition",
    title: "Sattvic farm food",
  },
  {
    icon: "local_parking",
    title: "Secure free parking",
  },
  {
    icon: "wifi",
    title: "High-speed Wi-Fi",
  },
] as const;

/** Keep the Home introduction readable without crowding the image-led hero. */
export function HomeIntroduction() {
  return (
    <section className="bg-surface-cream px-margin lg:px-margin-desktop py-space-xl text-forest-deep">
      <div className="max-w-7xl mx-auto">
        <p className="max-w-4xl mx-auto text-center font-body-md text-body-md md:text-lg leading-relaxed text-forest-deep/80 text-balance">
          Gold Mountain Wellness Resort is a peaceful resort in Tiruvannamalai, about 6 km from the Arunachaleswarar Temple and 1 km from the Girivalam path. Traditional wellness, healthy food and nature come together here in unhurried silence, with views of the sacred mountain from your room.
        </p>
        <ul className="max-w-6xl mx-auto mt-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md" aria-label="Resort highlights">
          {RESORT_HIGHLIGHTS.map((highlight) => (
            <li key={highlight.title} className="rounded-xl bg-canvas-ivory p-4 sm:p-5 shadow-sm transition-transform hover:-translate-y-1">
              <div className="w-9 h-9 rounded-lg bg-forest-deep text-accent-gold flex items-center justify-center mb-3">
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">{highlight.icon}</span>
              </div>
              <h3 className="font-headline-sm text-lg text-forest-deep leading-snug">{highlight.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Introduce the treatments without duplicating the dedicated Ayurveda page. */
export function HomeAyurveda() {
  return (
    <section className="bg-surface-cream px-margin lg:px-margin-desktop py-space-3xl text-forest-deep">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:items-center">
        <div className="lg:col-span-7">
          <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Traditional care</span>
          <h2 className="font-headline-lg text-headline-lg tracking-tight mt-space-xs mb-space-md">
            Kerala Ayurveda Treatments in Tiruvannamalai
          </h2>
          <p className="font-body-md text-body-md text-forest-deep/80 leading-relaxed max-w-2xl">
            Meet our Ayurveda doctor, then choose a program that suits your stay. Panchakarma and rejuvenation (Rasayana) programs, with therapies such as Abhyanga, Shirodhara, Udvartana, Pizhichil and Swedana, bring traditional oils, herbs and experienced therapists together.
          </p>
        </div>
        <div className="lg:col-span-5 rounded-xl border border-border-muted/60 bg-canvas-ivory p-space-lg shadow-sm">
          <p className="font-headline-sm text-headline-sm text-forest-deep mb-space-md">Explore treatments at your own pace.</p>
          <p className="font-body-sm text-body-sm text-forest-deep/70 leading-relaxed mb-space-lg">The dedicated Ayurveda page explains the therapies and longer programs in detail.</p>
          <Link href="/ayurveda-treatments-tiruvannamalai" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal border border-forest-deep">
            View Ayurveda Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Preserve the Home anchor while the full retreat itinerary lives on Wellness. */
export function HomeRetreatTeaser() {
  return (
    <section id="retreat-package" className="scroll-mt-24 bg-canvas-ivory px-margin lg:px-margin-desktop py-space-3xl text-forest-deep">
      <div className="max-w-7xl mx-auto rounded-xl bg-surface-cream border border-border-muted/60 p-space-lg md:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:items-center shadow-sm">
        <div className="lg:col-span-8">
          <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Sacred journey · 2 nights / 3 days</span>
          <h2 className="font-headline-lg text-headline-lg tracking-tight mt-space-xs mb-space-md">Arunachala Spiritual Retreat in Tiruvannamalai</h2>
          <p className="font-body-md text-body-md text-forest-deep/80 leading-relaxed max-w-3xl">
            A gentle retreat with guided Girivalam, visits to the samadhis of revered saints, Annadanam and sattvic vegetarian meals. A private cab brings you to temple and ashram visits, with rest and nourishment at Gold Mountain. From ₹8,999 for 2 guests.
          </p>
        </div>
        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <Link href="/wellness-resort-tiruvannamalai#spiritual-retreat" className="group inline-flex items-center justify-center gap-space-xs rounded-lg font-label-md text-label-md uppercase tracking-wider font-semibold px-space-lg py-2.5 min-h-[42px] transition-all bg-forest-deep text-canvas-ivory shadow-sm hover:bg-forest-charcoal border border-forest-deep">
            See the Spiritual Retreat
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Visible FAQ content matches the page's FAQ structured data. */
export function HomeFAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface-cream px-margin lg:px-margin-desktop py-space-3xl text-forest-deep">
      <div className="max-w-4xl mx-auto">
        <span className="font-label-md text-label-md uppercase tracking-widest text-accent-gold">Good to know</span>
        <h2 className="font-headline-lg text-headline-lg tracking-tight mt-space-xs mb-space-xl">Frequently Asked Questions</h2>
        <div className="space-y-space-sm">
          {HOME_FAQS.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-border-muted/60 bg-canvas-ivory px-space-md md:px-space-lg shadow-sm">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-space-md font-headline-sm text-headline-sm text-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-gold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span aria-hidden="true" className="text-accent-gold text-2xl leading-none shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="font-body-md text-body-md text-forest-deep/80 leading-relaxed pb-space-md pr-space-lg">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
