"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  "ATLAS INDUSTRIALS",
  "VANGUARD SECTOR",
  "BAYSIDE GLOBAL",
  "APEX RETAIL CO",
  "MERIDIAN ENERGY",
  "OCEANIC CARGO",
  "TRIDENT GLOBAL",
  "NEXUS LOGISTICS",
];

export default function TrustLogos() {
  // Double the list for infinite scroll effect
  const doublePartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-20 bg-canvas overflow-hidden border-b border-hairline/60">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-technical text-slate uppercase tracking-[0.2em] mb-10">
          TRUSTED BY LEADERS IN HEAVY INDUSTRY AND RETAIL NETWORKS
        </p>
        
        {/* Infinite Scroller */}
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          {/* Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex space-x-16 whitespace-nowrap min-w-full"
            animate={{
              x: [0, -1030], // Adjust based on estimated content size
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {doublePartners.map((partner, index) => (
              <span
                key={index}
                className="font-technical text-2xl font-bold tracking-[0.15em] text-[#cbd5e1] hover:text-primary transition-colors cursor-default select-none inline-block py-1"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
