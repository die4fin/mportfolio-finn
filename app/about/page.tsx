'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Kita ubah offset agar animasi selesai tepat saat konten terakhir terlihat
    offset: ["start start", "end end"]
  });

  // Pergerakan Kinetik tetap dramatis
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const textOpacity = 0.04;

  const kineticWords = [
    "ARCHITECTING",
    "PROTOCOL",
    "STRATEGIC THINKING",
    "WISDOM MODERN LOGIC"
  ];

  return (
    // Hilangkan min-h-[300vh] agar tidak ada ruang hampa di bawah
    <main ref={containerRef} className="relative z-10 bg-transparent overflow-x-hidden">
      
      {/* KINETIC TYPOGRAPHY */}
      <div className="fixed inset-0 flex flex-col justify-center gap-16 pointer-events-none select-none z-0">
        <motion.h1 style={{ x: xLeft, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none text-white uppercase tracking-tighter">
          {kineticWords[0]}
        </motion.h1>
        <motion.h1 style={{ x: xRight, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none text-right text-white uppercase tracking-tighter">
          {kineticWords[1]}
        </motion.h1>
        <motion.h1 style={{ x: xLeft, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none italic text-white uppercase tracking-tighter">
          {kineticWords[2]}
        </motion.h1>
        <motion.h1 style={{ x: xRight, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none text-right text-white uppercase tracking-tighter">
          {kineticWords[3]}
        </motion.h1>
      </div>

      <section className="relative z-10 px-8">
        
        {/* Intro */}
        <div className="h-[100dvh] flex flex-col justify-center max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#B57EDC]" />
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#B57EDC] font-bold">Chronicle</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase"
            >
              Quiet <br />
              <span className="text-[#B57EDC]">Power.</span>
            </motion.h2>
            <p className="text-xs text-gray-500 tracking-[0.4em] uppercase font-light">
              Designing stability through logic.
            </p>
          </div>
        </div>

        {/* Narrative Layers */}
        <div className="flex flex-col justify-center space-y-48 pb-32"> {/* pb disesuaikan agar pas dengan footer */}
          {/* Narrative 01 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-mono text-[#B57EDC] mb-6 block tracking-[0.4em] uppercase italic">Section_01 // Genesis</span>
            <p className="text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight">
              A leadership forged by <span className="font-bold italic">birthright</span>, refined by code.
            </p>
            <p className="mt-8 text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
              As the firstborn, responsibility isn't just a trait it's the core architecture of how I operate. Precision is my language, stability is my goal.
            </p>
          </motion.div>

          {/* Narrative 02 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl ml-auto text-right md:text-left flex flex-col items-end"
          >
            <span className="text-[10px] font-mono text-[#B57EDC] mb-6 block tracking-[0.4em] uppercase italic">Section_02 // Dualism</span>
            <p className="text-2xl md:text-4xl font-light text-gray-200 leading-snug">
              The intersection of <span className="text-white font-medium">Historical Strategy</span> and <span className="text-white font-medium italic">Digital Logic</span>.
            </p>
            <p className="mt-8 text-gray-500 text-sm leading-relaxed max-w-sm ml-auto font-light italic">
              Drawing parallels between the rise of civilizations and the optimization of algorithms. Every system tells a story.
            </p>
          </motion.div>

          {/* Persona Final */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="py-32 border-y border-white/5 flex flex-col items-center text-center"
          >
            <p className="text-xl md:text-3xl font-extralight text-gray-400 max-w-lg leading-relaxed mb-12">
              Transforming complex visions into <br />
              <span className="text-white font-medium tracking-tight">structured digital realities.</span>
            </p>
            <div className="flex gap-6">
               {['Strategic', 'Analytical', 'Resilient'].map((trait) => (
                 <span key={trait} className="text-[9px] uppercase tracking-[0.5em] text-[#B57EDC] font-bold">
                   {trait}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}