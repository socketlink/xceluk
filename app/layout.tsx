import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { SEO } from "./_components/SEO";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { CookieConsent } from "./_components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "XcelTutors",
  description:
    "Connect with top-tier tutors, schedule flexible sessions, and achieve your academic goals with personalized learning experiences.",
  url: "https://xceltutors.co.uk",
  ogImage: "https://xceltutors.co.uk/og-image.jpg",
} as const;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Expert Online Tutoring`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "tutoring",
    "online education",
    "expert tutors",
    "personalized learning",
  ],
  authors: [{ name: "XcelTutors Team" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Expert Online Tutoring`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Expert Online Tutoring`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Expert Online Tutoring`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@xceltutors",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <SEO
            title={metadata.title?.default?.toString() || siteConfig.name}
            description={
              metadata.description?.toString() || siteConfig.description
            }
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <ConvexClientProvider>
            <ThemeProvider attribute="class">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <CookieConsent />
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
