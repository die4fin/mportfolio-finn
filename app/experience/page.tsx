'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    year: "3RD SEMESTER",
    title: "Universiti Kelantan Malaysia",
    role: "Global Academic Exchange",
    desc: "Expanded academic horizons through an international exchange program at Universiti Malaysia Kelantan.",
    flag: "🇲🇾",
    meta: "Kelantan, Malaysia",
    // Menggunakan array assets untuk mendukung tipe media berbeda
    assets: [
      { type: 'image', src: "/umk-1.jpg" },
      { type: 'image', src: "/umk-2.png" }
    ]
  },
  {
    id: 2,
    year: "5TH SEMESTER",
    title: "Universitas Gadjah Mada",
    role: "National Strategic Exchange",
    desc: "Deepened technical expertise in Informatics Engineering during a student exchange at Universitas Gadjah Mada.",
    flag: "🇮🇩",
    meta: "Yogyakarta, Indonesia",
    assets: [
      { type: 'image', src: "/ugm-1.jpg" },
      { type: 'video', src: "/ugm-video.mp4" },
      { type: 'image', src: "/ugm-2.jpeg" },
      { type: 'image', src: "/ugm-3.jpeg" },
      { type: 'image', src: "/ugm-4.jpeg" },
    ]
  },
  {
    id: 3,
    year: "7th SEMESTER",
    title: "Zhejiang Business Technology Institute",
    role: "International Tech Immersion",
    desc: "Completed a three-week intensive summer course at Zhejiang Business Technology Institute.",
    flag: "🇨🇳",
    meta: "Ningbo, China",
    assets: [
      { type: 'image', src: "/zbti-1.jpg" },
      { type: 'image', src: "/zbti-2a.jpg" },
      { type: 'image', src: "/zbti-3.jpg" },
      { type: 'image', src: "/zbti-4.jpg" },
      { type: 'image', src: "/zbti-5.jpg" },
      { type: 'image', src: "/zbti-6.jpeg" },
      { type: 'image', src: "/zbti-7.jpeg" },
      { type: 'image', src: "/zbti-8.jpg" },
    ]
  }
];

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <main ref={containerRef} className="relative z-10 min-h-screen bg-transparent pt-32 pb-20 overflow-hidden">
      
      {/* KINETIC BACKGROUND */}
      <div className="fixed inset-0 flex items-center pointer-events-none select-none z-0 opacity-[0.02]">
        <motion.h1 style={{ x: xLeft }} className="text-[40vw] font-black whitespace-nowrap leading-none uppercase tracking-tighter">
          CHRONICLE
        </motion.h1>
      </div>

      <section className="relative z-10 px-6 max-w-lg mx-auto md:max-w-4xl">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-10 bg-[#B57EDC]" />
            <span className="text-[9px] uppercase tracking-[0.6em] text-[#B57EDC] font-bold">Archives</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Evolution <br /> <span className="text-[#B57EDC] italic">Mapping.</span>
          </h1>
        </div>

        {/* SYSTEMATIC TIMELINE */}
        <div className="space-y-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {/* Meta Header */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono text-[#B57EDC] tracking-[0.4em] uppercase mb-1">LOG_0{exp.id}</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic opacity-40">{exp.year}</h2>
                </div>
                <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{exp.flag}</span>
              </div>

              {/* Cinematic Card */}
              <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2rem] p-6 md:p-10 space-y-6 shadow-2xl">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white leading-none mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#B57EDC] font-bold">{exp.role}</p>
                </div>

                <p className="text-sm md:text-lg font-light text-gray-400 leading-relaxed italic">
                  "{exp.desc}"
                </p>

                {/* HORIZONTAL GALLERY - Asset Based */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-2 px-2 pb-2">
                  {exp.assets.map((asset, idx) => (
                    <div key={idx} className="relative flex-none w-[200px] aspect-[3/4] rounded-xl overflow-hidden border border-white/5">
                      {asset.type === 'video' ? (
                        <video 
                          src={asset.src} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image 
                          src={asset.src} 
                          alt={`Experience at ${exp.title}`} 
                          fill 
                          className="object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}