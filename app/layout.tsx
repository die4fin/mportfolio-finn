'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';
import ParticlesBg from "@/components/ParticlesBg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Pastikan lu punya komponen Footer

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Optimisasi: Partikel mati di Home (/) biar ga ngelag di iPhone
  const showParticles = pathname !== "/";

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        suppressHydrationWarning={true} 
        className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-[#B57EDC]/30 selection:text-[#B57EDC] overflow-x-hidden`}
      >
        <Navbar />
        
        {/* --- LAYER 0: THE GALAXY BASE --- */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {showParticles && <ParticlesBg />}
          
          {/* Subtle Glow agar tidak flat */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(181,126,220,0.04),transparent_80%)]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#B57EDC]/2 to-transparent" />
        </div>

        {/* --- LAYER 1: CONTENT & FOOTER --- */}
        {/* Kita buat wrapper flex agar footer selalu terdorong ke bawah */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer ditaruh di sini agar konsisten di setiap rute */}
          <Footer />
        </div>

      </body>
    </html>
  );
}