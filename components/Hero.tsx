'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100dvh] px-8 overflow-hidden bg-white">
      
      {/* Background Soft Glow - Diubah jadi sangat tipis agar tidak kotor di putih */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFC111]/5 blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 mb-10"
        >
          {/* Border Apple Style: Menggunakan shadow halus & border abu tipis */}
          <div className="w-full h-full rounded-full overflow-hidden border border-[#d2d2d7]/50 relative z-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-1.5">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image 
                src="/profile.png" 
                alt="Arifin Profile" 
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                priority
              />
            </div>
          </div>
          
          {/* Decorative Ring - Menggunakan warna baru #FFC111 */}
          <div className="absolute -inset-3 rounded-full border border-[#FFC111]/10 animate-pulse -z-1" />
        </motion.div>

        {/* Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          {/* Heading Hitam Pekat Apple */}
          <h1 className="text-5xl font-black tracking-tighter mb-3 text-[#1d1d1f] selection:bg-[#FFC111]/10 selection:text-[#FFC111]">
            ARIFIN  R<span className="text-[#FFC111]">.</span> 
          </h1>
          
          {/* Professional Status - Abu-abu Apple */}
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#86868b] font-bold mb-8">
            Computer Engineering Graduate
          </p>

          {/* Implicit Welcome / Quote */}
          <div className="max-w-[260px] mx-auto">
            <p className="text-base text-[#000000] font-light leading-relaxed italic selection:bg-[#FFC111]/10">
              "Complex systems, <span className="text-[#FFC111] not-italic font-medium hover:text-[#FFC111] transition-colors cursor-default">simply explained.</span>"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-[#000000] font-bold">Explore</span>
        {/* Gradient disesuaikan ke #FFC111 */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#000000] to-transparent opacity-40" />
      </motion.div>
    </section>
  );
}