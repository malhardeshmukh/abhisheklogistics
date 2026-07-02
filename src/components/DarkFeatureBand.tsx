"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Leaf } from "lucide-react";

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
                COMMAND CENTER & INTEGRATION
              </span>
              <h2 className="font-display text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.02em]">
                Engineered for cargo security, precision routing, and net-zero.
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-sm text-white/70 font-body leading-[1.5]">
                We combine physical operations with advanced digital twin simulations to track and route global shipments with zero latency.
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
                  Secured Corridors
                </h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Military-grade geolocation tracking combined with digital lock alerts ensures all cargo remains secure from pick-up to delivery.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-technical text-xs text-white/40">RISK MITIGATION</span>
                <span className="font-technical text-sm font-bold text-coral-soft">100%</span>
              </div>
            </motion.div>

            {/* Card 2: AI Dispatch */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-[16px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">
                  Autonomous Dispatch
                </h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Algorithmic dispatch systems compute weather, customs delays, and carrier availability to reroute shipments in real-time.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-technical text-xs text-white/40">LATENCY REDUCTION</span>
                <span className="font-technical text-sm font-bold text-coral-soft">-38%</span>
              </div>
            </motion.div>

            {/* Card 3: Sustainability */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-[16px] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">
                  Eco Corridor Offsets
                </h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Automatic routing via electric heavy-freight and optimized sea channels helps companies reach net-zero carbon logistics goals.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-technical text-xs text-white/40">CARBON DISPLACED</span>
                <span className="font-technical text-sm font-bold text-coral-soft">420t CO2e</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
