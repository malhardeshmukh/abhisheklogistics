"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-dark pt-16 pb-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10 mb-12">
          
          {/* Column 1: Logo & Brief Description */}
          <div className="lg:col-span-1">
            <span className="font-technical text-sm font-bold text-white tracking-[0.15em] uppercase block mb-3 select-none">
              ABHISHEK<span className="text-coral">.</span>LOGISTICS
            </span>
            <p className="text-sm text-muted max-w-sm leading-relaxed font-body">
              Connecting Indian manufacturers with global maritime and air trade lanes through precision supply chain control.
            </p>
          </div>

          {/* Columns 2 & 3: Detailed Address and Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Address Details */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-2">
                  OUR LOCATION ADDRESS
                </h4>
                <p className="text-sm text-muted leading-relaxed font-body">
                  407 , 4th Floor, Lilamani Corporate Heights, Opp.Rampir Tekra Brts Bus Stop, Rampir Tekra Lane Wadaj - 380013, Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Phone & Email Details */}
            <div className="flex flex-col gap-6">
              
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-1">
                    PHONE
                  </h4>
                  <a href="tel:+917929702748" className="text-sm text-muted hover:text-white transition-colors font-body">
                    +91 - 79 - 29702748
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-1">
                    Email
                  </h4>
                  <a href="mailto:info@abhisheklogistics.in" className="text-sm text-muted hover:text-white transition-colors font-body">
                    info@abhisheklogistics.in
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Metadata row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-6">
            <span>© 2026 Abhishek Logistics Ltd.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            
            {/* Status indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-technical text-[10px] uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Registered Customs Broker & Carrier
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
