'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Pergerakan Kinetik diperhalus
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Opacity sangat tipis agar tidak mengganggu keterbacaan teks utama
  const textOpacity = 0.03;

  const kineticWords = [
    "ARCHITECTING",
    "PROTOCOL",
    "STRATEGIC THINKING",
    "MODERN LOGIC"
  ];

  return (
    <main ref={containerRef} className="relative z-10 bg-white overflow-x-hidden text-[#1d1d1f]">
      
      {/* KINETIC TYPOGRAPHY - Diubah ke Hitam/Abu Sangat Tipis */}
      <div className="fixed inset-0 flex flex-col justify-center gap-20 pointer-events-none select-none z-0">
        <motion.h1 style={{ x: xLeft, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none text-black uppercase tracking-tighter">
          {kineticWords[0]}
        </motion.h1>
        <motion.h1 style={{ x: xRight, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none text-right text-black uppercase tracking-tighter">
          {kineticWords[1]}
        </motion.h1>
        <motion.h1 style={{ x: xLeft, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none italic text-black uppercase tracking-tighter">
          {kineticWords[2]}
        </motion.h1>
        <motion.h1 style={{ x: xRight, opacity: textOpacity }} className="text-[18vw] font-black whitespace-nowrap leading-none text-right text-black uppercase tracking-tighter">
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
            <div className="h-[1px] w-12 bg-[#FFC111]" />
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#000000] font-bold">Chronicle</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase text-[#1d1d1f]"
            >
              Quiet <br />
              <span className="text-[#FFC111]">Power.</span>
            </motion.h2>
            <p className="text-xs text-[#86868b] tracking-[0.4em] uppercase font-bold">
              Designing stability through logic.
            </p>
          </div>
        </div>

        {/* Narrative Layers */}
        <div className="flex flex-col justify-center space-y-48 pb-32">
          
          {/* Narrative 01 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-mono text-[#000000] mb-6 block tracking-[0.4em] uppercase font-bold italic">Genesis</span>
            <p className="text-3xl md:text-5xl font-light text-[#1d1d1f] leading-[1.1] tracking-tight">
              A leadership forged by <span className="font-bold italic">birthright</span>, refined by code.
            </p>
            <p className="mt-8 text-[#86868b] text-sm md:text-base font-medium leading-relaxed max-w-sm">
              As the firstborn, responsibility isn't just a trait—it's the core architecture of how I operate. Precision is my language, stability is my goal.
            </p>
          </motion.div>

          {/* Narrative 02 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl ml-auto text-right md:text-left flex flex-col items-end"
          >
            <span className="text-[10px] font-mono text-[#000000] mb-6 block tracking-[0.4em] uppercase font-bold italic">Dualism</span>
            <p className="text-2xl md:text-4xl font-light text-[#86868b] leading-snug">
              The intersection of <span className="text-[#1d1d1f] font-medium">Historical Strategy</span> and <span className="text-[#1d1d1f] font-medium italic">Digital Logic</span>.
            </p>
            <p className="mt-8 text-[#86868b] text-sm leading-relaxed max-w-sm ml-auto font-medium italic">
              Drawing parallels between the rise of civilizations and the optimization of algorithms. Every system tells a story.
            </p>
          </motion.div>

          {/* Persona Final */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="py-32 border-y border-black/5 flex flex-col items-center text-center"
          >
            <p className="text-xl md:text-3xl font-light text-[#86868b] max-w-lg leading-relaxed mb-12">
              Transforming complex visions into <br />
              <span className="text-[#1d1d1f] font-medium tracking-tight">structured digital realities.</span>
            </p>
            <div className="flex gap-6">
               {['Strategic', 'Analytical', 'Resilient'].map((trait) => (
                 <span key={trait} className="text-[9px] uppercase tracking-[0.5em] text-[#FFC111] font-bold">
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