import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const title = "Privacy Policy | Gold Mountain Wellness Resort";
const description = "Privacy policy for Gold Mountain Wellness Resort in Tiruvannamalai. Learn how we collect, use, protect, and handle guest and booking information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title,
    description,
    url: "/privacy-policy",
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
      "@id": "https://goldmountainwellnessresort.com/privacy-policy#webpage",
      url: "https://goldmountainwellnessresort.com/privacy-policy",
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
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://goldmountainwellnessresort.com/privacy-policy" },
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
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
            <span className="text-surface-container-high/70">Privacy Policy</span>
          </nav>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-canvas-ivory tracking-tight mb-4">
            Privacy Policy
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
          
          {/* Introduction */}
          <div className="space-y-4">
            <p className="font-body-md text-base md:text-lg text-forest-deep/90 leading-relaxed">
              At Gold Mountain Wellness Resort, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, make a room reservation, contact us, or use our resort services.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/90 leading-relaxed">
              Our website address is{" "}
              <a href="https://goldmountainwellnessresort.com" className="text-forest-deep font-semibold underline decoration-accent-gold/60 underline-offset-4 hover:decoration-accent-gold">
                goldmountainwellnessresort.com
              </a>.
            </p>
          </div>

          {/* Section: Who We Are */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Who We Are
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Gold Mountain Wellness Resort provides accommodation, wellness experiences, and hospitality services to our guests. We understand the importance of protecting your personal information and handle all guest data responsibly and only for legitimate booking and service-related purposes.
            </p>
          </section>

          {/* Section: Information We Collect */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Information We Collect
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              When you make a room reservation, submit an enquiry, contact us, or use our website, we may collect information such as:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Check-in and check-out dates</li>
              <li>Number of guests</li>
              <li>Room preferences</li>
              <li>Booking and reservation details</li>
              <li>Special requests voluntarily provided by you</li>
              <li>Any other information you choose to provide while contacting us</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              We collect only the information reasonably necessary to process your booking, respond to your enquiries, provide resort services, and communicate important information related to your stay.
            </p>
          </section>

          {/* Section: How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              How We Use Your Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Your personal information is used only for legitimate purposes related to your booking and experience with Gold Mountain Wellness Resort. We may use your information to:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Process and confirm room reservations.</li>
              <li>Contact you regarding your booking or stay.</li>
              <li>Send check-in, check-out, or reservation-related information.</li>
              <li>Respond to your enquiries and customer support requests.</li>
              <li>Manage special requests associated with your stay.</li>
              <li>Improve our guest services and website experience.</li>
              <li>Meet applicable legal, regulatory, accounting, or security requirements.</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              We do not use your name, phone number, email address, or other personal information for unrelated purposes. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          {/* Section: Room Bookings and Guest Information */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Room Bookings and Guest Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              When you book a room with Gold Mountain Wellness Resort, we may require your name, phone number, email address, stay dates, number of guests, and other information necessary to manage your reservation.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              This information is used primarily to:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Confirm your room booking.</li>
              <li>Communicate with you before, during, or after your stay when necessary.</li>
              <li>Handle changes, cancellations, or special requests.</li>
              <li>Provide customer support.</li>
              <li>Deliver the services you have requested.</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              We will not use your personal information for unrelated purposes without an appropriate legal basis or your consent where required.
            </p>
          </section>

          {/* Section: Payment Information */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Payment Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              If online payment facilities are available on our website, payments may be processed through third-party payment service providers. Gold Mountain Wellness Resort does not necessarily store complete credit card, debit card, or other sensitive payment credentials on its own servers.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Payment providers may process your information according to their own privacy policies and security practices.
            </p>
          </section>

          {/* Section: Contact Forms and Enquiries */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Contact Forms and Enquiries
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              When you submit an enquiry through our website, we may collect your name, phone number, email address, and message.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              This information is used only to respond to your enquiry, assist with reservations, provide requested information, or communicate with you regarding our resort services.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We do not sell contact-form information to third parties.
            </p>
          </section>

          {/* Section: Cookies */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Cookies
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Our website may use cookies and similar technologies to ensure proper functionality, remember preferences, understand website performance, and improve the visitor experience.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Some cookies may be essential for the website to operate correctly. Other cookies, including analytics or third-party cookies, may be used depending on the services integrated into our website.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect some website features.
            </p>
          </section>

          {/* Section: Embedded Content and Third-Party Services */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Embedded Content and Third-Party Services
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Our website may include embedded content or integrations from third-party websites, such as maps, videos, social media platforms, booking tools, analytics services, or payment providers.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Embedded content from third-party websites may behave in the same way as if you visited those websites directly. These third parties may collect information, use cookies, or track interactions according to their own privacy policies.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Gold Mountain Wellness Resort is not responsible for the privacy practices of independent third-party websites or services.
            </p>
          </section>

          {/* Section: Who We Share Your Information With */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Who We Share Your Information With
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We do not sell or rent your personal information.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Your information may be shared only when reasonably necessary with trusted service providers that help us operate our website, process bookings or payments, provide technical services, or deliver requested guest services.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We may also disclose information when required by applicable law, regulation, legal process, or government authority.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Any service provider receiving personal information should only process it for the relevant service purpose and subject to applicable privacy requirements.
            </p>
          </section>

          {/* Section: How Long We Retain Your Information */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              How Long We Retain Your Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We retain personal information only for as long as reasonably necessary to:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Complete and manage your booking.</li>
              <li>Provide requested services.</li>
              <li>Respond to enquiries or support requests.</li>
              <li>Maintain necessary business and financial records.</li>
              <li>Meet applicable legal, tax, accounting, or regulatory requirements.</li>
              <li>Resolve disputes and protect against fraud or misuse.</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              When personal information is no longer reasonably required, it may be securely deleted, anonymized, or otherwise handled in accordance with applicable requirements.
            </p>
          </section>

          {/* Section: How We Protect Your Information */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              How We Protect Your Information
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section: Your Privacy Rights */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Your Privacy Rights
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Depending on applicable privacy laws and your location, you may have the right to:
            </p>
            <ul className="space-y-2 list-disc pl-6 text-forest-deep/85 text-base md:text-lg leading-relaxed">
              <li>Request access to personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of personal information where legally applicable.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Ask questions about how your personal information is used.</li>
            </ul>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed pt-2">
              Certain information may need to be retained where required for legal, administrative, accounting, fraud-prevention, or security purposes.
            </p>
          </section>

          {/* Section: Children's Privacy */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Children’s Privacy
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Our website and booking services are not intended to knowingly collect personal information directly from children without appropriate involvement or authorization from a parent, guardian, or responsible adult where required.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              If you believe that personal information relating to a child has been provided improperly, please contact us.
            </p>
          </section>

          {/* Section: Changes to This Privacy Policy */}
          <section className="space-y-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Changes to This Privacy Policy
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              We may update this Privacy Policy occasionally to reflect changes in our services, website features, legal requirements, or privacy practices.
            </p>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              Any updated version will be published on this page with a revised Last Updated date.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section className="space-y-4 pt-4">
            <h2 className="font-headline-sm text-2xl md:text-3xl text-forest-deep tracking-tight pb-3 border-b border-border-muted/40">
              Contact Us
            </h2>
            <p className="font-body-md text-base md:text-lg text-forest-deep/85 leading-relaxed">
              If you have any questions about this Privacy Policy, your personal information, or how we handle guest data, please contact Gold Mountain Wellness Resort:
            </p>
            <div className="p-6 sm:p-8 rounded-xl bg-surface-cream border border-border-muted/50 space-y-3 font-body-md text-base md:text-lg">
              <p className="font-semibold text-forest-deep text-xl">Gold Mountain Wellness Resort</p>
              <p className="text-forest-deep/85">
                Address: Kottangal, Girivalam Path, Tiruvannamalai, Tamil Nadu – 606604
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
