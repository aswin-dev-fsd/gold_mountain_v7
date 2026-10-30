import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const title = "Terms and Conditions | Gold Mountain Wellness Resort";
const description = "Terms and conditions governing room reservations, booking cancellations, resort policies, and website use for Gold Mountain Wellness Resort in Tiruvannamalai.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title,
    description,
    url: "/terms-and-conditions",
    siteName: "Gold Mountain Wellness Resort",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://goldmountainwellnessresort.com/terms-and-conditions#webpage",
      url: "https://goldmountainwellnessresort.com/terms-and-conditions",
      name: title,
      description,
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://goldmountainwellnessresort.com/#website",
        name: "Gold Mountain Wellness Resort",
        url: "https://goldmountainwellnessresort.com",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://goldmountainwellnessresort.com/" },
        { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: "https://goldmountainwellnessresort.com/terms-and-conditions" },
      ],
    },
  ],
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-forest-charcoal text-canvas-ivory border-b border-canvas-ivory/10">
        <div className="max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-accent-gold font-label-md text-xs uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-surface-container-high/70">Terms and Conditions</span>
          </nav>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-canvas-ivory tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-surface-container-high/70 text-sm">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-deep text-accent-gold text-xs font-medium tracking-wide">
              Last Updated: July 2026
            </span>
            <span>•</span>
            <span>Gold Mountain Wellness Resort</span>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <main className="flex-1 py-14 md:py-20 px-6 bg-canvas-ivory">
        <article className="max-w-4xl mx-auto space-y-12 text-forest-deep">
          
          {/* Welcome Intro */}
          <div className="space-y-4">
            <p className="font-body-md text-base md:text-lg text-forest-deep/90 leading-relaxed">
              Welcome to Gold Mountain Wellness Resort. These Terms and Conditions govern your use of our website, room reservations, enquiries, and services provided by Gold Mountain Wellness Resort.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/90 leading-relaxed">
              By accessing our website, making a reservation, or using our services, you agree to these Terms and Conditions. Please read them carefully before making a booking.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              1. About Gold Mountain Wellness Resort
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Gold Mountain Wellness Resort provides accommodation and hospitality services to guests visiting Tiruvannamalai, Tamil Nadu.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Our official website is:{" "}
              <a href="https://goldmountainwellnessresort.com" className="text-forest-deep font-semibold underline decoration-accent-gold/60 underline-offset-4 hover:decoration-accent-gold">
                goldmountainwellnessresort.com
              </a>. All bookings and services are subject to availability and the terms described on this page.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              2. Room Reservations
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests may make room reservations through our website, by phone, through WhatsApp, or through other booking channels made available by Gold Mountain Wellness Resort.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              When making a reservation, guests must provide accurate and complete information, which may include:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address, where applicable</li>
              <li>Check-in and check-out dates</li>
              <li>Number of guests</li>
              <li>Room preferences</li>
              <li>Any special requests relevant to the stay</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              A reservation is considered confirmed only after receiving confirmation from Gold Mountain Wellness Resort and, where applicable, completing the required advance or full payment.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              3. Booking Confirmation
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              After a booking request is submitted, our team may contact the guest to verify the booking details and confirm room availability.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Submitting an enquiry or booking request does not automatically guarantee a reservation. A booking is confirmed only when the guest receives explicit confirmation from Gold Mountain Wellness Resort.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              4. Room Availability
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              All rooms and accommodation options are subject to availability. We reserve the right to decline or modify a booking request when the requested room is unavailable.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              In exceptional circumstances, if a confirmed room becomes unavailable, we may offer a suitable alternative, reschedule the reservation, or provide another appropriate resolution depending on the circumstances.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              5. Pricing and Payments
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Room prices may vary based on factors including:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Room or accommodation type</li>
              <li>Number of guests</li>
              <li>Length of stay</li>
              <li>Season and demand</li>
              <li>Special offers or packages</li>
              <li>Additional services requested</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              The applicable price will be communicated during the booking process or displayed through the relevant booking channel. Guests are responsible for ensuring that payment details and booking information are accurate.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              6. Check-In and Check-Out
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests must follow the check-in and check-out times communicated during booking or confirmation.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Early check-in and late check-out are subject to availability and may involve additional charges.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests may be required to provide a valid government-issued identification document at check-in, where required by applicable laws or resort policy.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              7. Cancellation and Refunds
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Cancellation and refund eligibility may depend on the specific booking, room type, booking channel, special offer, and the time at which cancellation is requested.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests should contact Gold Mountain Wellness Resort directly as soon as possible if they wish to cancel or modify a reservation.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Any applicable cancellation charges, refund conditions, or non-refundable terms communicated during the booking process will apply to the reservation.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              If a refund is approved, processing times may vary depending on the original payment method, payment provider, or banking institution.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              8. No-Show Policy
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              If a guest does not arrive on the scheduled check-in date without prior notice, the reservation may be treated as a no-show.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              In such circumstances, payments already made may be subject to the applicable booking and cancellation conditions.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              9. Guest Responsibilities
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests are expected to:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Provide accurate information when making a reservation.</li>
              <li>Respect resort property and facilities.</li>
              <li>Follow reasonable safety instructions and resort policies.</li>
              <li>Avoid causing excessive noise or disturbance to other guests.</li>
              <li>Use rooms, amenities, and facilities responsibly.</li>
              <li>Comply with applicable laws and regulations.</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              Guests may be held responsible for damage caused intentionally or through negligence during their stay, subject to applicable law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              10. Children and Additional Guests
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests must accurately state the number of adults and children included in the reservation.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Additional guests may be subject to room capacity limits, availability, resort policies, and additional charges.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Children should be supervised by a responsible adult while on the resort premises.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              11. Personal Belongings
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests are responsible for taking reasonable care of their personal belongings during their stay.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Gold Mountain Wellness Resort is not responsible for the loss, theft, or damage of personal belongings except where responsibility cannot legally be excluded or limited under applicable law.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests should immediately inform resort staff if an item is lost or misplaced.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              12. Resort Facilities and Amenities
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              The availability of particular facilities, amenities, activities, or services may vary due to maintenance, weather, safety considerations, operational requirements, or other circumstances.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We may temporarily modify, restrict, or suspend access to certain facilities when reasonably necessary.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              13. Special Requests
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Guests may submit special requests relating to their stay. We will make reasonable efforts to accommodate such requests, but availability cannot always be guaranteed unless explicitly confirmed.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              14. Website Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We aim to keep information on our website accurate and up to date. However, room images, descriptions, prices, amenities, and other details may occasionally change.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Images are generally intended to represent the accommodation or experience, but minor differences may exist due to maintenance, improvements, furnishings, seasonal conditions, or other operational factors.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              15. Website Use
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              You agree not to misuse our website or attempt to:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Gain unauthorized access to our systems.</li>
              <li>Introduce viruses or malicious software.</li>
              <li>Interfere with website functionality.</li>
              <li>Submit false or fraudulent booking requests.</li>
              <li>Use website content unlawfully.</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              We reserve the right to restrict access where misuse, fraud, or security risks are reasonably suspected.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              16. Privacy and Personal Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We respect the privacy of our guests and website visitors.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Personal information such as your name, phone number, email address, and booking details is used primarily to process reservations, communicate regarding your stay, provide requested services, and meet applicable legal requirements.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              For more information, please refer to our{" "}
              <Link href="/privacy-policy" className="text-forest-deep font-semibold underline decoration-accent-gold/60 underline-offset-4 hover:decoration-accent-gold">
                Privacy Policy
              </Link>.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              17. Third-Party Services
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Our website or booking process may include links to or integrations with third-party services, including payment providers, maps, communication platforms, or external booking services.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              These third parties may operate under their own terms and privacy policies. Gold Mountain Wellness Resort is not responsible for independent third-party websites or services except where responsibility arises under applicable law.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              18. Limitation of Liability
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              To the extent permitted by applicable law, Gold Mountain Wellness Resort will not be responsible for indirect or consequential losses arising from circumstances outside our reasonable control.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Nothing in these Terms and Conditions excludes or limits any rights or liabilities that cannot legally be excluded or limited.
            </p>
          </section>

          {/* Section 19 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              19. Force Majeure
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Gold Mountain Wellness Resort will not be responsible for delays, cancellations, or inability to provide services due to events beyond our reasonable control, including severe weather, natural disasters, government restrictions, public emergencies, utility failures, transportation disruptions, or similar unforeseen circumstances.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Where possible, we will make reasonable efforts to communicate with affected guests and provide an appropriate resolution based on the circumstances.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              20. Changes to These Terms
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We may update these Terms and Conditions periodically to reflect changes in our services, booking practices, operational requirements, or applicable laws.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              The latest version will be published on this page with an updated revision date.
            </p>
          </section>

          {/* Section 21 */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              21. Governing Law
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              These Terms and Conditions are governed by the applicable laws of India.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Any disputes relating to bookings or services will be subject to applicable law and the jurisdiction of the appropriate courts in Tamil Nadu, India, unless otherwise required by law.
            </p>
          </section>

          {/* Section 22 */}
          <section className="space-y-4 pt-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              22. Contact Us
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              If you have questions about these Terms and Conditions, a booking, cancellation, or your stay, please contact us:
            </p>
            <div className="p-6 sm:p-8 rounded-xl bg-surface-cream border border-border-muted/50 space-y-3 font-body-md text-base md:text-lg">
              <p className="font-semibold text-forest-deep text-xl">Gold Mountain Wellness Resort</p>
              <p className="text-forest-deep/85">
                Address: No. 97, Kottangal Road, Adiannamalai, Tiruvannamalai, Tamil Nadu – 606604
              </p>
              <p className="text-forest-deep/85">
                Phone:{" "}
                <a href="tel:+918838198769" className="text-forest-deep font-medium hover:text-accent-gold transition-colors underline decoration-forest-deep/30">
                  +91 88381 98769
                </a>
              </p>
              <p className="text-forest-deep/85">
                Email:{" "}
                <a href="mailto:goldmountainstay@gmail.com" className="text-forest-deep font-medium hover:text-accent-gold transition-colors underline decoration-forest-deep/30">
                  goldmountainstay@gmail.com
                </a>
              </p>
              <p className="text-forest-deep/85">
                Website:{" "}
                <a href="https://goldmountainwellnessresort.com" className="text-forest-deep font-medium hover:text-accent-gold transition-colors underline decoration-forest-deep/30">
                  goldmountainwellnessresort.com
                </a>
              </p>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
