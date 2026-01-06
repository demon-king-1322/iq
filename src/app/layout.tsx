import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iqra Arzoo - Professional Makeup Services",
  description: "Enhance your natural beauty with professional makeup services by Iqra Arzoo. Specializing in bridal, editorial, photoshoot, and all makeup looks. Book your appointment today!",
  keywords: ["Iqra Arzoo Makeup Artist", "bridal makeup", "editorial makeup", "professional makeup artist", "photoshoot makeup", "makeup services", "glam makeup", "natural makeup", "HD makeup"],
  authors: [{ name: "Iqra Arzoo Makeup Artist" }],
  icons: {
    icon: "/assets/images/pro.jpg",
  },
  openGraph: {
    title: "Iqra Arzoo - Professional Makeup Services",
    description: "Enhance your natural beauty with professional makeup services by Iqra Arzoo",
    url: "https://iqrawaseemmakeup.com",
    siteName: "Iqra Arzoo Makeup Artist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqra Arzoo - Professional Makeup Services",
    description: "Enhance your natural beauty with professional makeup services by Iqra Arzoo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
