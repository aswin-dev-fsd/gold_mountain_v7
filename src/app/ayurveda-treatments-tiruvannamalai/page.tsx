import type { Metadata } from "next";
import AyurvedaPage from "../ayurveda/page";
import { AYURVEDA_FAQS } from "@/content/ayurveda";

const title = "Kerala Ayurveda Treatments in Tiruvannamalai | Book Now";
const description = "Authentic Kerala Ayurveda treatments in Tiruvannamalai at Gold Mountain: Panchakarma, Shirodhara, Abhyanga and wellness therapies. Book now.";
const siteUrl = "https://goldmountainwellnessresort.com";
const pageUrl = `${siteUrl}/ayurveda-treatments-tiruvannamalai`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ayurveda-treatments-tiruvannamalai" },
  openGraph: { title, description, url: "/ayurveda-treatments-tiruvannamalai", siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
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
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      serviceType: "Ayurveda treatments and Panchakarma",
      provider: { "@id": `${siteUrl}/#resort` },
      areaServed: { "@type": "City", name: "Tiruvannamalai" },
      description: "Kerala-style Ayurveda programs including Panchakarma, Rasayana rejuvenation, Abhyanga, Shirodhara, Udvartana, Pizhichil and Swedana, guided by an Ayurveda doctor.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Ayurveda Treatments in Tiruvannamalai", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: AYURVEDA_FAQS.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

/**
 * Render the canonical Ayurveda page with its service, breadcrumb and FAQ data.
 * @returns The Ayurveda page and server-rendered structured data.
 */
export default function AyurvedaTreatmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <AyurvedaPage />
    </>
  );
}
