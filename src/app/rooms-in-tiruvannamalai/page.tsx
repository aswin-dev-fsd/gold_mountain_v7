import type { Metadata } from "next";
import StayPage from "../stay/page";
import { STAY_ROOMS, STAY_FAQS } from "@/content/stay";

const title = "Rooms in Tiruvannamalai Near Girivalam | Gold Mountain";
const description = "Book king-bed mountain-view rooms in Tiruvannamalai: Deluxe, Suite and Family Suite with sattvic meals, Wi-Fi and secure parking, 6 km from the temple.";
const siteUrl = "https://goldmountainwellnessresort.com";
const pageUrl = `${siteUrl}/rooms-in-tiruvannamalai`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rooms-in-tiruvannamalai" },
  openGraph: { title, description, url: "/rooms-in-tiruvannamalai", siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
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
      checkinTime: "12:00",
      checkoutTime: "12:00",
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
        { "@type": "ListItem", position: 2, name: "Rooms in Tiruvannamalai", item: pageUrl },
      ],
    },
    ...STAY_ROOMS.map(room => ({
      "@type": "HotelRoom",
      "@id": `${pageUrl}#${room.id}`,
      url: `${pageUrl}#${room.id}`,
      name: room.name,
      description: room.description,
      occupancy: { "@type": "QuantitativeValue", maxValue: room.capacity },
      ...(room.capacity === 2 ? { bed: { "@type": "BedDetails", typeOfBed: "King", numberOfBeds: 1 } } : {}),
      amenityFeature: room.amenities.map(name => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      containedInPlace: { "@id": `${siteUrl}/#resort` },
      offers: {
        "@type": "Offer",
        url: `${pageUrl}#${room.id}`,
        priceCurrency: "INR",
        price: room.prices.INR.replace(/\D/g, ""),
        description: "Starting price per night; festival and full moon dates are priced separately.",
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: STAY_FAQS.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

/**
 * Render accommodation content with server-rendered metadata and structured data.
 * @returns The canonical Rooms page and its room, resort, breadcrumb and FAQ schema.
 */
export default function RoomsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <StayPage />
    </>
  );
}
