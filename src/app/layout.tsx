import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Explore | Airbnb UI Clone",
  description: "Mobile-first Airbnb interface clone built with Next.js",
};


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" className={`${beVietnamPro.variable} h-full antialiased`}>
    <body className="min-h-full flex flex-col">{children}</body>
  </html>
);

export default RootLayout;
