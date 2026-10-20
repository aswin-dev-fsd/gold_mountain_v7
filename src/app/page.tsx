import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Wellness from "@/components/Wellness";
import Resort from "@/components/Resort";
import Stay from "@/components/Stay";
import Experiences from "@/components/Experiences";
import Location from "@/components/Location";
import Dining from "@/components/Dining";
import Trust from "@/components/Trust";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { HomeIntroduction, HomeAyurveda, HomeRetreatTeaser, HomeFAQ } from "@/components/HomeSections";
import { HOME_FAQS } from "@/content/home";

const title = "Resort in Tiruvannamalai | Gold Mountain Wellness Resort";
const description = "Stay at Gold Mountain Wellness Resort, a peaceful resort in Tiruvannamalai near Arunachala with mountain-view rooms, Ayurveda and sattvic food. Book now.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const siteUrl = "https://goldmountainwellnessresort.com";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Resort",
      "@id": `${siteUrl}/#resort`,
      name: "Gold Mountain Wellness Resort",
      description: "A peaceful wellness resort in Tiruvannamalai near Arunachala hill with mountain-view rooms, Ayurveda treatments, yoga and sattvic farm-to-table food.",
      url: `${siteUrl}/`,
      telephone: "+918838198769",
      email: "goldmountainstay@gmail.com",
      priceRange: "INR 3099 - 7999",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kottangal, Girivalam Path",
        addressLocality: "Tiruvannamalai",
        addressRegion: "Tamil Nadu",
        postalCode: "606604",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.24287, longitude: 79.02562 },
      checkinTime: "12:00",
      checkoutTime: "12:00",
      amenityFeature: [
        "Air conditioning",
        "High-speed Wi-Fi",
        "Secure free parking",
        "Sattvic vegetarian restaurant",
        "King-size beds",
        "Ayurveda doctor",
        "Alcohol and smoke free",
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      sameAs: ["https://www.instagram.com/goldmountainstay/"],
    },
    {
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-canvas-ivory selection:bg-accent-gold/20 selection:text-forest-deep overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Navigation />
      <Hero />
      <HomeIntroduction />
      <Wellness />
      <Resort />
      <Stay />
      <HomeAyurveda />
      <Experiences />
      <HomeRetreatTeaser />
      <Dining />
      <Location />
      <Trust />
      <Journal />
      <HomeFAQ />
      <Contact />
      <Footer />
    </main>
  );
}
