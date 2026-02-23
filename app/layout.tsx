import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEOFINDA Tech Hub Career Portal — Career Opportunities & Internships",
  description:
    "GEOFINDA Tech Hub Career Portal: Explore 30+ career opportunities including academic and professional internships, and job placements across five technology domains. Build projects, get mentored, and launch your tech career from Kigali, Rwanda.",
  keywords: [
    "tech careers",
    "career opportunities",
    "GEOFINDA Tech Hub",
    "Rwanda",
    "internships",
    "career portal",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "GEOFINDA Tech Hub Career Portal — Opportunities & Internships",
    description:
      "Explore academic and professional internship tracks, job placements, and career opportunities in software, infrastructure, electronics, AI, and creative technology.",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4CC3E0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
