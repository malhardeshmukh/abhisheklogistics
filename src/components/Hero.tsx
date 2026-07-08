"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PortNetworkConsole from "./PortNetworkConsole";

export default function Hero() {
  return (
    <section className="relative bg-canvas pt-20 pb-28 border-b border-hairline overflow-hidden">
      
      {/* Editorial Grid Lines Background (Subtle Cohere theme) */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-[1px] bg-hairline" />
          <div className="absolute right-4 sm:right-6 lg:right-8 top-0 bottom-0 w-[1px] bg-hairline" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          
          {/* Upper Category Label */}
          <span className="font-technical text-sm font-normal text-coral tracking-[0.25em] uppercase mb-6 block select-none">
            EXIM & DOMESTIC B2B LOGISTICS
          </span>
          
          {/* Monumental Headline */}
          <h1 className="font-display text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px] font-normal leading-[0.95] tracking-[-0.035em] text-primary uppercase max-w-3xl mb-8">
            GLOBAL FREIGHT. <br className="hidden sm:inline" />
            <span className="text-[#a1a1a6]">SHIPPED WITH</span> RELIABILITY.
          </h1>
          
          {/* Subtext */}
          <p className="font-body text-base sm:text-lg text-body-muted max-w-xl mb-10 leading-[1.6]">
            Abhishek Logistics provides dependable ocean, air, and road logistics. Connecting Indian manufacturers to international markets through customized cargo forwarding and customs clearance solutions.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#quote"
              className="w-full sm:w-auto bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-md transition-all duration-150 active:scale-95 text-center flex items-center justify-center gap-2 group"
            >
              <span className="btn-radiative-text">Get Freight Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#services"
              className="text-sm font-medium text-ink hover:text-action-blue border-b border-ink/40 hover:border-action-blue transition-all duration-150 py-1"
            >
              Our Logistics Services
            </a>
          </div>
        </div>

        {/* Two-card composition: Wide console card + narrower image card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-8">
          
          {/* Card 1 (Wide): Interactive Port Connectivity Dashboard (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="relative group h-full">
              {/* Outer container imitating Cohere's hero-photo-card style with rounded-lg (22px) */}
              <div className="h-full bg-soft-stone rounded-[22px] border border-card-border p-4 sm:p-6 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-technical text-xs text-slate tracking-[0.1em] uppercase">
                    PORT GATEWAYS // CONNECTIVITY
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-ink/60 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                    Customs Bonded Carrier
                  </div>
                </div>
                <PortNetworkConsole />
              </div>
            </div>
          </div>

          {/* Card 2 (Narrower): High-res photo card (Spans 1 column) */}
          <div className="flex flex-col">
            <div className="h-full bg-soft-stone rounded-[22px] border border-card-border p-6 flex flex-col justify-between relative overflow-hidden group">
              <div>
                <span className="font-technical text-[10px] text-slate tracking-[0.1em] uppercase block mb-4">
                  INTEGRATED EXIM CARGO
                </span>
                <h3 className="font-display text-2xl font-normal text-primary mb-4 leading-tight">
                  Export & Import Shipping Solutions
                </h3>
              </div>
              
              {/* Image Container with 22px radius (lg) */}
              <div className="w-full aspect-[4/3] relative rounded-[22px] overflow-hidden border border-card-border mt-2 mb-6">
                <Image
                  src="/images/freight_hero.png"
                  alt="Futuristic cargo ship at sunset terminal"
                  fill
                  sizes="(max-w-728px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              <div>
                <p className="text-xs text-body-muted leading-[1.5] mb-4">
                  Dedicated customs-bonded logistics linking major industrial corridors and production hubs directly with critical sea lanes.
                </p>
                <div 
                  onDoubleClick={() => window.dispatchEvent(new CustomEvent("open-logistics-console"))}
                  title="Double-click to initialize Control Console"
                  className="flex items-center justify-between cursor-pointer select-none group/badge"
                >
                  <span className="font-technical text-[10px] text-slate group-hover/badge:text-primary transition-colors">COMPLIANCE: 100%</span>
                  <span className="font-technical text-[10px] text-coral font-bold uppercase group-hover/badge:underline decoration-1 underline-offset-2">CARGO ASSURED</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
