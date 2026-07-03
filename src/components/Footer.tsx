"use client";

import { useState } from "react";
import { ArrowRight, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-on-dark pt-20 pb-12 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-white/10 mb-16">
          <div className="max-w-md">
            <span className="font-technical text-xs text-coral tracking-[0.2em] uppercase block mb-3">
              ABHISHEK LOGISTICS
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-normal leading-[1.2] tracking-[-0.01em]">
              Subscribe to global trade updates, custom regulations, and port congestion alerts.
            </h3>
          </div>
          
          <div className="w-full lg:w-auto min-w-[320px]">
            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-white/20 focus-within:border-white/50 transition-colors py-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="bg-transparent border-none outline-none text-white text-sm w-full pr-10 placeholder-white/30"
              />
              <button
                type="submit"
                className="absolute right-0 text-white/60 hover:text-coral transition-colors p-1"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            {subscribed && (
              <span className="font-technical text-[10px] text-coral-soft mt-2 block animate-fade-in">
                SUBSCRIBED SUCCESSFULLY.
              </span>
            )}
            <p className="text-[11px] text-muted mt-3 leading-relaxed">
              Stay informed with our regular logistics briefs and trade lane updates. Opt-out at any time.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          
          {/* Col 1 */}
          <div>
            <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-6">
              FREIGHT SERVICES
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Inland Road Freight
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Ocean Freight & Shipping
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Global Air Cargo
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Industrial Warehousing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-6">
              INDIAN PORT NETWORK
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Nhava Sheva (JNPT)
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Mundra Port
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Chennai Port
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-muted hover:text-white transition-colors">
                  Kolkata & Haldia Port
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-6">
              EXIM SERVICES
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/#network" className="text-sm text-muted hover:text-white transition-colors">
                  Customs Brokerage
                </a>
              </li>
              <li>
                <a href="/#network" className="text-sm text-muted hover:text-white transition-colors">
                  CFS Operations
                </a>
              </li>
              <li>
                <a href="/#network" className="text-sm text-muted hover:text-white transition-colors">
                  Bonded Warehousing
                </a>
              </li>
              <li>
                <a href="/#network" className="text-sm text-muted hover:text-white transition-colors">
                  Multi-modal Transport
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-technical text-xs font-bold text-white tracking-[0.1em] uppercase mb-6">
              RESOURCES
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/#quote" className="text-sm text-muted hover:text-white transition-colors">
                  Request Freight Quote
                </a>
              </li>
              <li>
                <a href="/ourwork" className="text-sm text-muted hover:text-white transition-colors">
                  Our Work & Operations
                </a>
              </li>
              <li>
                <a href="/#login" className="text-sm text-muted hover:text-white transition-colors">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted hover:text-white transition-colors">
                  About Our Company
                </a>
              </li>
              <li>
                <a href="/#quote" className="text-sm text-muted hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-6">
            <span className="font-technical font-bold text-white tracking-widest uppercase">
              ABHISHEK.LOGISTICS
            </span>
            <span>© 2026 Abhishek Logistics Ltd.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            
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
