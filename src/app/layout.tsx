import type { Metadata } from "next";
import Script from "next/script";
import { CurrencyProvider } from "../context/CurrencyContext";
import "./globals.css";

const isLive = process.env.NEXT_PUBLIC_SITE_ENV === "live";

export const metadata: Metadata = {
  metadataBase: new URL("https://goldmountainwellnessresort.com"),
  title: "Gold Mountain Wellness Resort",
  description: "A peaceful wellness resort in Tiruvannamalai with mountain-view rooms, Ayurveda, yoga and sattvic food.",
  robots: isLive ? { index: true, follow: true } : { index: false, follow: false },
  verification: isLive ? { google: "bwEJi6U1NcfiNBptyAOTmK3hAhkEW6EQQDX-UHbRn2U" } : undefined,
  openGraph: { siteName: "Gold Mountain Wellness Resort", locale: "en_IN", type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
        {isLive && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-TWMQQ81D56" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TWMQQ81D56');`}
            </Script>
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ywe9m8fmi5");`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
