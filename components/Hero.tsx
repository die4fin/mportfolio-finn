'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[100dvh] px-8 overflow-hidden bg-transparent">
      
      {/* Background Glow yang Lebih Luas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#B57EDC]/15 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* Avatar Section: Perbesar ke w-48 h-48 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 mb-10"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-[0.5px] border-white/20 relative z-10 bg-white/5 backdrop-blur-md p-1.5">
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image 
                src="/profile.png" 
                alt="Finn Profile" 
                fill
                className="object-cover object-top transition-all duration-500" 
                priority
              />
            </div>
          </div>
          {/* Decorative Pulse Ring yang Lebih Lebar */}
          <div className="absolute -inset-2 rounded-full border border-[#B57EDC]/30 animate-pulse opacity-30 -z-1" />
        </motion.div>

        {/* Brand Identity: Perbesar Teks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black tracking-tighter mb-3 selection:bg-[#B57EDC]/30 selection:text-[#B57EDC]">
            Arifin R. 
          </h1>
          
          {/* Professional Status */}
          <p className="text-[11px] uppercase tracking-[0.5em] text-gray-500 font-bold mb-8 selection:bg-[#B57EDC]/30 selection:text-[#B57EDC]">
            Computer Engineering Fresh Graduate         </p>

          {/* Implicit Welcome / Quote */}
          <div className="max-w-[260px] mx-auto">
            <p className="text-base text-gray-400 font-light leading-relaxed italic opacity-90 selection:bg-[#B57EDC]/30 selection:text-[#B57EDC]">
              "Complex systems, <span className="text-white not-italic font-medium">simply explained.</span>"
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
        <span className="text-[8px] uppercase tracking-[0.4em] text-gray-600 font-bold">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#B57EDC] to-transparent" />
      </motion.div>
    </section>
  );
}