import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Journey Capturer: आपकी नज़र से दुनिया",
  description:
    "The Journey Capturer is your go-to platform for global news, in-depth articles, personal blogs, and cultural insights. दुनिया की खबरें एक नई नज़र से पढ़ें – covering lifestyle, current affairs, technology, and more.",
  keywords: [
    "news",
    "articles",
    "blogs",
    "global news",
    "personal stories",
    "The Journey Capturer",
    "दुनिया की खबर",
    "latest news",
    "trending articles",
    "multilingual news",
    "Indian blog"
  ],
  openGraph: {
    title: "The Journey Capturer: आपकी नज़र से दुनिया",
    description:
      "Explore news, stories, and articles from around the world with a fresh perspective. The Journey Capturer brings you insightful content covering life, tech, culture, and more.",
    url: "https://thejourneycapturer.com", // replace with actual domain
    siteName: "The Journey Capturer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://thejourneycapturer.com/og-image.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "The Journey Capturer - दुनिया की खबर",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Journey Capturer: आपकी नज़र से दुनिया",
    description:
      "Discover powerful stories and global news with a unique voice. Read trending articles on culture, tech, lifestyle, and more.",
    creator: "@yourtwitterhandle", // optional
    images: ["https://thejourneycapturer.com/og-image.jpg"], // same as OG image
  },
  metadataBase: new URL("https://thejourneycapturer.com"), // replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
