import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';

const diaType = localFont({
  src: [
    {
      path: "../../public/fonts/ABCDiatype-Light-Trial.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Regular-Trial.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABCDiatype-Medium-Trial.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-diatype",
});

const ppModwest = localFont({
  src: [
    {
      path: "../../public/fonts/PPMondwest-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ppModwest",
});

export const metadata: Metadata = {
  title: "Gaurav Kumar Singh",
  openGraph: {
    title: "Gaurav | Profile",
    description: "Explore Gaurav's profile - projects.",
    url: "https://gauravsingh.co.in",
    siteName: "Gaurav's Portfolio",
    images: [
      {
        url: "https://gauravsingh.co.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanmay Profile Preview",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav | Profile",
    description: "Explore Gaurav's profile - projects.",
    images: ["https://gauravsingh.co.in/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${diaType.variable} ${ppModwest.variable} antialiased overflow-hidden cz-shortcut-listen="true"`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}