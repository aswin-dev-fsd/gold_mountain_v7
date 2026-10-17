import type { Metadata } from "next";
import ContactPage from "../contact/page";

const title = "Contact & Book Resort in Tiruvannamalai | Gold Mountain";
const description = "Call or WhatsApp +91 88381 98769 to book rooms at Gold Mountain Wellness Resort, Kottangal, Tiruvannamalai. Directions from Chennai and Bengaluru.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact-us" },
  openGraph: { title, description, url: "/contact-us", siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Resort",
      "@id": "https://goldmountainwellnessresort.com/#resort",
      name: "Gold Mountain Wellness Resort",
      url: "https://goldmountainwellnessresort.com/",
      telephone: "+918838198769",
      email: "goldmountainstay@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kottangal, Girivalam Path",
        addressLocality: "Tiruvannamalai",
        addressRegion: "Tamil Nadu",
        postalCode: "606604",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.2428722, longitude: 79.0256161 },
      checkinTime: "12:00",
      checkoutTime: "12:00",
      sameAs: ["https://www.instagram.com/goldmountainstay/"],
    },
    {
      "@type": "ContactPage",
      "@id": "https://goldmountainwellnessresort.com/contact-us#webpage",
      url: "https://goldmountainwellnessresort.com/contact-us",
      name: title,
      about: { "@id": "https://goldmountainwellnessresort.com/#resort" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://goldmountainwellnessresort.com/" },
        { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://goldmountainwellnessresort.com/contact-us" },
      ],
    },
  ],
};

/** Render the Contact page and its server-rendered search metadata. */
export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <ContactPage />
    </>
  );
}
