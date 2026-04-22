'use client';
import Hero from "../components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const menuHub = [
    { label: "The Story", title: "About", link: "/about" },
    { label: "The Journey", title: "Experience", link: "/experience" },
    { label: "The Works", title: "Projects", link: "/projects" },
  ];

  return (
    // Background dipaksa putih bersih
    <main className="relative z-10 bg-white min-h-screen text-[#1d1d1f]">
      {/* Hero harus dipastikan isinya juga sudah bertema putih */}
      <Hero />
      
      <section className="px-8 pb-32 max-w-lg mx-auto -mt-10 relative z-20">
        <div className="space-y-4">
          {menuHub.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Border diganti jadi hitam transparan (halus) */}
              <Link 
                href={item.link} 
                className="group block py-6 border-b border-black/5 active:opacity-50 transition-opacity"
              >
                {/* Teks sekunder abu-abu khas Apple */}
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#86868b] block mb-2">
                  {item.label}
                </span>
                
                {/* Heading Hitam Pekat dengan hover Biru Apple */}
                <h3 className="text-4xl font-bold tracking-tighter uppercase group-hover:text-[#FFC111] transition-colors text-[#1d1d1f]">
                  {item.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}