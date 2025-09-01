// import { Geist, Geist_Mono } from "next/font/google";
import { Montez, Manrope } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import 'swiper/css';

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Disable auto CSS injection
config.autoAddCss = false;

import Header from "@/components/Partials/Header";
import Footer from "@/components/Partials/Footer";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// ✅ Montez font
const montez = Montez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montez",
});

// ✅ Manrope font
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});


export const metadata = {
 
   title: "Tourm - Travel & Tour Booking Agency",
  description: "Tourm - Travel & Tour Booking Agency HTML Template",
  authors: [{ name: "Tourm" }],
  keywords: [
    "Travel",
    "Tour Booking",
    "Tourm Template",
    "Travel Agency",
    "Holiday Booking"
  ],
  robots: "index, follow",
  themeColor: "#ffffff",

  // 🔹 Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "Tourm - Travel & Tour Booking Agency",
    description: "Book your tours and travel experiences with ease.",
    url: "https://yourdomain.com",   // replace with your actual domain
    siteName: "Tourm",
    images: [
      {
        url: "/assets/img/og-image.jpg", // put og-image.jpg in /public/assets/img/
        width: 1200,
        height: 630,
        alt: "Tourm Travel & Tour Booking Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🔹 Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Tourm - Travel & Tour Booking Agency",
    description: "Plan your dream vacation with Tourm, your trusted travel partner.",
    creator: "@yourtwitterhandle", // replace with your Twitter handle if you have one
    images: ["/img/og-image.jpg"],
  },

  // 🔹 Favicons
  icons: {
    icon: [
      { url: "/img/favicons/favicon-32x32.png", sizes: "32x32" },
      { url: "/img/favicons/favicon-96x96.png", sizes: "96x96" },
      { url: "/img/favicons/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [
      { url: "/img/favicons/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/img/favicons/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/img/favicons/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/img/favicons/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/img/favicons/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/img/favicons/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/img/favicons/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/img/favicons/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/img/favicons/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/img/favicons/manifest.json" },
      { rel: "msapplication-TileImage", url: "/img/favicons/ms-icon-144x144.png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montez.variable} ${manrope.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
