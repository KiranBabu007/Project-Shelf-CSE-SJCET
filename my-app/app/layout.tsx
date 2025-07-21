import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSE Project Shelf | SJCET Palai",
  description:
    "Explore final year projects by Computer Science & Engineering students at St Joseph's College of Engineering and Technology, Palai.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "CSE Project Shelf | SJCET Palai",
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
    title: "CSE Project Shelf | SJCET Palai",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}