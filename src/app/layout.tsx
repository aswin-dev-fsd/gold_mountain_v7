import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gold Mountain Wellness Sanctuary",
  description: "A peaceful sanctuary where traditional Ayurveda, mindful meditation, farm-to-table dining, and sacred nature come together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
