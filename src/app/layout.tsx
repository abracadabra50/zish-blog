import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zishan Ashraf",
    template: "%s | Zishan Ashraf",
  },
  description: "Personal blog and digital experiments by Zishan Ashraf, Senior Software Engineer at Shopify",
  keywords: ["blog", "writing", "code", "experiments", "development", "shopify", "software engineer"],
  authors: [{ name: "Zishan Ashraf" }],
  creator: "Zishan Ashraf",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://zish.xyz",
    title: "Zishan Ashraf",
    description: "Personal blog and digital experiments by Zishan Ashraf, Senior Software Engineer at Shopify",
    siteName: "Zishan Ashraf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zishan Ashraf",
    description: "Personal blog and digital experiments by Zishan Ashraf, Senior Software Engineer at Shopify",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
