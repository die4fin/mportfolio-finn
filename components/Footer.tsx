'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 px-8 py-20 border-t border-white/5 bg-transparent">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Branding Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter">
            FINDIT <span className="text-[#B57EDC]">LABS.</span>
          </h2>
          <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed uppercase tracking-widest">
            Building systematic digital solutions for the future.
          </p>
        </div>

        {/* Socials & Contact */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Socials</h4>
            <div className="flex flex-col gap-3 text-sm font-light text-gray-300">
              <a href="https://www.linkedin.com/in/ihsanul-arifin-ramadhani-11763a2b5/" className="hover:text-[#B57EDC] transition-colors flex items-center gap-2">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="#" className="hover:text-[#B57EDC] transition-colors flex items-center gap-2">
                <Github size={14} /> GitHub
              </a>
              <a href="https://www.instagram.com/onlyf1nn/" className="hover:text-[#B57EDC] transition-colors flex items-center gap-2">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Say Hello</h4>
            <div className="flex flex-col gap-3 text-sm font-light text-gray-300">
              <a href="mailto:si.ihsanul@gmail.com?subject=Inquiry from Portfolio" className="hover:text-[#B57EDC] transition-colors flex items-center gap-2">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em]">
          © {currentYear} FINDIT labs • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}