import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Project Shelf | SJCET Palai",
  description:
    "A handcrafted gallery showcasing innovative ideas and the brilliant minds behind them at SJCET.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The Project Shelf | SJCET Palai",
    description:
      "Discover innovative projects from the Department of Computer Science and Engineering at SJCET Palai.",
    url: "https://project.sjcet.in/",
    siteName: "SJCET Palai",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "SJCET Project Shelf",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Project Shelf | SJCET Palai",
    description:
      "Showcasing final year Computer Science projects from SJCET Palai.",
    images: ["/favicon.ico"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://project.sjcet.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
