import type { Metadata } from "next";
import WellnessPage from "../wellness/page";
import { WELLNESS_FAQS } from "@/content/wellness";

const title = "Wellness Resort in Tiruvannamalai | Retreats & Yoga";
const description = "A wellness resort in Tiruvannamalai with yoga, meditation, sattvic food and retreats, including a guided Arunachala spiritual retreat. Plan your stay.";
const siteUrl = "https://goldmountainwellnessresort.com";
const pageUrl = `${siteUrl}/wellness-resort-tiruvannamalai`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/wellness-resort-tiruvannamalai" },
  openGraph: { title, description, url: "/wellness-resort-tiruvannamalai", siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Resort",
      "@id": `${siteUrl}/#resort`,
      name: "Gold Mountain Wellness Resort",
      url: `${siteUrl}/`,
      telephone: "+918838198769",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kottangal, Girivalam Path",
        addressLocality: "Tiruvannamalai",
        addressRegion: "Tamil Nadu",
        postalCode: "606604",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      about: { "@id": `${siteUrl}/#resort` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Wellness Resort in Tiruvannamalai", item: pageUrl },
      ],
    },
    {
      "@type": "TouristTrip",
      "@id": `${pageUrl}#spiritual-retreat`,
      name: "Arunachala Spiritual Retreat, 2 Nights / 3 Days",
      description: "A guided spiritual pilgrimage in Tiruvannamalai with Girivalam, visits to the samadhis of revered saints, Annadanam, sattvic meals and a comfortable stay.",
      touristType: "Pilgrims and spiritual travellers",
      provider: { "@id": `${siteUrl}/#resort` },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Day 1: Arrival and stillness" },
          { "@type": "ListItem", position: 2, name: "Day 2: Girivalam and saints" },
          { "@type": "ListItem", position: 3, name: "Day 3: Blessings and departure" },
        ],
      },
      offers: [
        { "@type": "Offer", name: "Deluxe Mountain View, 2 guests", price: "8999", priceCurrency: "INR" },
        { "@type": "Offer", name: "Mountain View Suite, 2 guests", price: "10999", priceCurrency: "INR" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: WELLNESS_FAQS.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

/** Render Wellness content with its page metadata and structured data. */
export default function WellnessRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <WellnessPage />
    </>
  );
}
