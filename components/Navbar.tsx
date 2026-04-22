'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
  { 
    title: "Main Gate", 
    sub: "Terminal • Home Interface", 
    path: "/"
  },
  { 
    title: "About", 
    sub: "Me • Philosophy", 
    path: "/about" 
  },
  { 
    title: "Experience", 
    sub: "ZBTI • UGM • UMK", 
    path: "/experience" 
  },
  { 
    title: "Project", 
    sub: "FINDIT MLBB Draft Sim • Dithvora • FS360 • EcoVerse", 
    path: "/projects" 
  }
];

  return (
    <nav className="fixed top-0 w-full z-[100] p-5">
      {/* Container Utama - Menggunakan White/5 & Backdrop Blur Tinggi */}
      <div className="max-w-md mx-auto bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2rem] p-4 flex justify-between items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <span className="font-bold tracking-tighter text-lg px-2 text-black">
          FINN<span className="text-[#FFC111]">.</span>
        </span>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/5 p-2 rounded-full hover:bg-yellow-400 transition-all active:scale-90 text-black border border-white/5"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            // Modal Dropdown - Menggunakan Glass Effect Terang
            className="absolute top-24 left-5 right-5 max-w-md mx-auto bg-white/[0.02] backdrop-blur-[40px] border border-white/[0.08] rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="space-y-3">
              {menuItems.map((item, i) => (
                <a 
                  key={i}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-black group-hover:text-[#FFC111] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[9px] text-black uppercase tracking-[0.2em]">
                      {item.sub}
                    </p>
                  </div>
                  <ArrowUpRight size={14} className="text-gray-500 group-hover:text-[#FFC111] transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-[9px] text-black uppercase tracking-[0.3em]">
                ARIFIN Ramadhani • 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}