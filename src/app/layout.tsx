import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const _openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cody Wales | Experience Designer, Business Builder & Creative",
  description:
    "Cody Wales is an experience designer, business builder and creative. Senior Manager, Global Commercial Innovation Strategy & Insights at Pfizer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
