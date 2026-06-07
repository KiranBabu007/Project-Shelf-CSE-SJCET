import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

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
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "The Project Shelf | SJCET Palai",
    description:
      "Discover innovative projects from the Department of Computer Science and Engineering at SJCET Palai.",
    url: "https://project.sjcet.in/",
    siteName: "SJCET Palai",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Project Shelf | SJCET Palai",
    description:
      "Showcasing final year Computer Science projects from SJCET Palai.",
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
      </body>
    </html>
  );
}
