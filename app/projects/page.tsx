'use client';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  images: string[];
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Dithvora", 
    category: "Competition Management", 
    description: "A comprehensive platform designed to manage and streamline student competition data with precision.", 
    tags: ["Next.js", "Tailwind", "PostgreSQL"], 
    images: ["/dithvora-logo7.png", "/dithvora-ss1.png", "/dithvora-ss2.png", "/dithvora-ss3.png"] 
  },
  { 
    id: 2, 
    title: "FarmShield 360", 
    category: "Agri-Tech System", 
    description: "Technology-based farming system built to protect and optimize agricultural productivity.", 
    tags: ["IoT", "React", "Data Analysis"], 
    images: ["/farmshield-logo.png", "/farm-ss1.jpeg", "/farm-ss2.jpeg", "/farm-ss3.jpeg", "/farm-ss4.jpeg", "/farm-ss5.jpeg", "/farm-ss6.jpeg", "/farm-ss7.jpeg", "/farm-ss8.jpeg", "/farm-ss9.jpeg", "/farm-ss10.jpeg", "/farm-ss11.jpeg"] 
  },
  { 
    id: 3, 
    title: "EcoVerse", 
    category: "Environmental Gamification", 
    description: "A gamified mobile platform encouraging users to take real-world environmental actions.", 
    tags: ["#1st Place", "Hackathon", "ASEAN", "Entrepreneurship", "Green Solutions", "Mobile App"], 
    images: ["/ecoverse-logo.png", "/eco-ss1.png", "/eco-ss2.png", "/eco-ss3.jpg", "/eco-ss4.jpg", "/eco-ss5.jpeg", "/eco-ss6.jpeg", "/eco-ss7.jpeg"] 
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(1); 
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImgIdx(1); 
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    if (typeof window !== 'undefined') document.body.style.overflow = 'unset';
  };

  return (
    <main className="relative z-10 min-h-screen bg-transparent overflow-x-hidden">
      
      {/* KINETIC BACKGROUND */}
      <div className="fixed inset-0 flex flex-col justify-center gap-20 pointer-events-none select-none z-0 text-white/5">
        <motion.h1 style={{ x: xLeft }} className="text-[20vw] font-black whitespace-nowrap leading-none uppercase tracking-tighter">SELECTED WORKS</motion.h1>
        <motion.h1 style={{ x: xRight }} className="text-[20vw] font-black whitespace-nowrap leading-none text-right uppercase tracking-tighter italic">FINN DIGITAL LABS</motion.h1>
      </div>

      <section className="relative z-10 px-8 pt-40 pb-20 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-32 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-[#B57EDC]" />
            <span className="text-[10px] uppercase tracking-[0.8em] text-[#B57EDC] font-bold italic">Artifacts</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Digital <br /> <span className="text-[#B57EDC]">Portfolio.</span>
          </h1>
        </motion.div>

        {/* List Proyek dengan Jarak yang Disesuaikan */}
        <div className="space-y-[30vh] mb-20">
          {projects.map((project, i) => (
            <div key={project.id} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              
              {/* --- LOGO TRIGGER --- */}
              <div 
                onClick={() => openModal(project)}
                className="flex-1 w-full aspect-video relative group cursor-pointer z-20"
              >
                <div className="absolute inset-0 bg-[#B57EDC]/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-md z-30 rounded-[2.5rem]">
                  <span className="text-[10px] font-bold tracking-[0.5em] text-white">EXPLORE STORY</span>
                </div>
                
                <div className="relative w-full h-full p-2">
                  <div className="relative w-full h-full overflow-hidden rounded-[2.55rem] bg-white/[0.02] transition-transform duration-700 group-hover:scale-105 border border-white/5">
                    {/* Ditambah padding p-12 agar logo lebih proporsional di tengah */}
                    <div className="relative w-full h-full p-12">
                        <Image 
                        src={project.images[0]} 
                        alt={project.title} 
                        fill 
                        className="object-contain" 
                        />
                    </div>
                  </div>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="flex-1 space-y-6 relative z-20">
                <span className="text-[10px] font-mono text-[#B57EDC] tracking-[0.4em] uppercase">{project.category}</span>
                <h3 className="text-4xl font-bold tracking-tighter">{project.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base italic">
                  "{project.description}"
                </p>
                <button onClick={() => openModal(project)} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white hover:text-[#B57EDC] transition-all flex items-center gap-4 group">
                  Case Study <div className="h-[1px] w-8 bg-white group-hover:w-12 group-hover:bg-[#B57EDC] transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-black/80 backdrop-blur-3xl w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden border border-white/10 flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video bg-black/40 group overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImgIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative w-full h-full p-4 flex items-center justify-center"
                  >
                    <Image 
                      src={selectedProject.images[currentImgIdx]} 
                      alt={`${selectedProject.title} screenshot`} 
                      fill 
                      className="object-contain rounded-[1.5rem] p-4" 
                    />
                  </motion.div>
                </AnimatePresence>

                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => p === 1 ? selectedProject.images.length - 1 : p - 1); }} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full hover:bg-[#B57EDC] transition-all z-[110] backdrop-blur-sm"><ChevronLeft size={24} /></button>
                <button onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(p => p === selectedProject.images.length - 1 ? 1 : p + 1); }} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full hover:bg-[#B57EDC] transition-all z-[110] backdrop-blur-sm"><ChevronRight size={24} /></button>
                <button onClick={closeModal} className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-red-500 transition-all z-[110] backdrop-blur-sm"><X size={20} /></button>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#B57EDC] font-bold italic">{selectedProject.category}</span>
                <h2 className="text-4xl font-black tracking-tighter uppercase mt-2 mb-6">{selectedProject.title}</h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8 italic">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 border border-white/10 rounded-full text-[8px] uppercase tracking-widest text-gray-500 font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}