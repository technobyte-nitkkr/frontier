import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technobyte | NIT Kurukshetra",
  description: "Official tech society of NIT Kurukshetra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen m-0 overflow-x-hidden`} style={{ backgroundImage: "var(--background-image-mainbg)" }}>
        <header className="fixed top-0 left-0 right-0 z-50">
           <Navbar />
        </header>

        <main className="relative">
            {children}
        </main>

        <footer className="relative">
           <Footer />
        </footer>
      </body>
    </html>
  );
}
