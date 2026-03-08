'use client';
import { motion } from 'framer-motion';
import { Home, Briefcase, User, MessageCircle } from 'lucide-react';

export default function BottomNav() {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <Briefcase size={20} />, label: 'Projects' },
    { icon: <User size={20} />, label: 'About' },
    { icon: <MessageCircle size={20} />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-6 w-full flex justify-center px-6 z-50 md:hidden">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-around w-full max-w-sm py-4 px-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl"
      >
        {menuItems.map((item, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#B57EDC] transition-colors"
          >
            {item.icon}
            <span className="text-[10px] font-medium uppercase tracking-widest">{item.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}