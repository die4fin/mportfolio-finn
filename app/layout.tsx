'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Partikel dimatikan di home agar iPhone lu ga panas
  const showParticles = pathname !== "/";

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        suppressHydrationWarning={true} 
        className={`${inter.className} antialiased bg-white text-[#1d1d1f] selection:bg-[#FFC111]/30 selection:text-[#FFC111] overflow-x-hidden`}
      >
        <Navbar />
        

        {/* --- LAYER 1: CONTENT & FOOTER --- */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}