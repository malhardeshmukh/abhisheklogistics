"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Warehouse } from "lucide-react";

export default function DarkFeatureBand() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // Custom easeOutExpo
      },
    },
  };

  return (
    <section id="network" className="py-24 bg-canvas px-4 sm:px-6 lg:px-8">
      {/* Outer wrapper with Cohere's rounded.lg (22px) and deep-green background */}
      <div className="max-w-7xl mx-auto bg-deep-green text-on-dark rounded-[22px] overflow-hidden p-8 md:p-20 relative">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
            <div className="max-w-xl">
              <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                LOGISTICS SECURITY & HANDLING
              </span>
              <h2 className="font-display text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.02em]">
                End-to-end security, seamless customs handling, and robust infrastructure.
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-sm text-white/70 font-body leading-[1.5]">
                We streamline manufacturing supply chains with efficient route management, complete customs documentation, and bonded facilities.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1: Security */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-[16px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">
                  Secure Cargo & Safety
                </h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Continuous cargo safety monitoring and locked container transits protect your high-value manufacturing output from factory to port.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-technical text-xs text-white/40">CARGO SECURITY</span>
                <span className="font-technical text-sm font-bold text-coral-soft">GUARANTEED</span>
              </div>
            </motion.div>

            {/* Card 2: Customs Brokerage */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-[16px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">
                  Expert Customs Brokerage
                </h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Dedicated customs documentation team at all major Indian ports ensures smooth clearing, tariff optimization, and regulatory compliance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-technical text-xs text-white/40">CUSTOMS CLEARANCE</span>
                <span className="font-technical text-sm font-bold text-coral-soft">EFFICIENT</span>
              </div>
            </motion.div>

            {/* Card 3: Warehousing */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-[16px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Warehouse className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">
                  Strategic Warehouse Footprint
                </h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Warehousing solutions situated near industrial clusters and maritime ports to minimize double-handling and transport times.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-technical text-xs text-white/40">METRO HUBS</span>
                <span className="font-technical text-sm font-bold text-coral-soft">COVERED</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
