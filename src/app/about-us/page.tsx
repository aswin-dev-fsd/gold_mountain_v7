import type { Metadata } from "next";
import AboutPage from "../about/page";

const title = "About Gold Mountain Wellness Resort | Tiruvannamalai Stay";
const description = "Meet Gold Mountain Wellness Resort in Tiruvannamalai: founder Preethi Parangusam, organic farm, Kangayam cow goshala and a sattvic restaurant.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about-us" },
  openGraph: { title, description, url: "/about-us", siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
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
      "@type": "AboutPage",
      "@id": "https://goldmountainwellnessresort.com/about-us#webpage",
      url: "https://goldmountainwellnessresort.com/about-us",
      name: title,
      about: { "@id": "https://goldmountainwellnessresort.com/#resort" },
    },
    {
      "@type": "Person",
      name: "Preethi Parangusam",
      jobTitle: "Founder",
      worksFor: { "@id": "https://goldmountainwellnessresort.com/#resort" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://goldmountainwellnessresort.com/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "https://goldmountainwellnessresort.com/about-us" },
      ],
    },
  ],
};

/** Render the About page and its server-rendered search metadata. */
export default function AboutUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <AboutPage />
    </>
  );
}
