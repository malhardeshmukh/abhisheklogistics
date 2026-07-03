"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-cohere-black text-on-dark h-[36px] flex items-center justify-between px-4 md:px-8 text-xs font-technical uppercase tracking-[0.02em] border-b border-white/10 select-none">
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <span>Connecting Indian Manufacturers with Global Maritime and Air Trade Lanes.</span>
          <a href="/#services" className="underline hover:text-coral transition-colors flex items-center gap-1 font-sans capitalize tracking-normal">
            Explore Services <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-hairline transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left Zone: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-technical text-lg font-bold tracking-[0.1em] text-primary uppercase select-none">
                ABHISHEK<span className="text-coral">.</span>LOGISTICS
              </span>
            </Link>
          </div>

          {/* Center Zone: Menu Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#services" className="text-sm font-medium text-ink hover:text-coral transition-colors">
              Services
            </a>
            <Link href="/ourwork" className="text-sm font-medium text-ink hover:text-coral transition-colors">
              Our Work
            </Link>
            <Link href="/about" className="text-sm font-medium text-ink hover:text-coral transition-colors">
              About Us
            </Link>
            <a href="/#quote" className="text-sm font-medium text-ink hover:text-coral transition-colors">
              Request Quote
            </a>
          </nav>

          {/* Right Zone: CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/#login"
              className="text-sm font-medium text-ink hover:text-action-blue transition-colors px-3 py-2"
            >
              Client Login
            </a>
            <a
              href="/#quote"
              className="bg-primary text-on-primary text-sm font-medium hover:bg-cohere-black px-6 py-3 rounded-full transition-all duration-150 active:scale-95 shadow-sm"
            >
              <span className="btn-radiative-text">Request Quote</span>
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink hover:text-coral hover:bg-soft-stone focus:outline-none focus:ring-2 focus:ring-inset focus:ring-focus-blue"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-canvas border-b border-hairline overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a
                  href="/#services"
                  onClick={toggleMenu}
                  className="block text-base font-medium text-ink hover:text-coral border-b border-hairline/50 pb-2"
                >
                  Services
                </a>
                <Link
                  href="/ourwork"
                  onClick={toggleMenu}
                  className="block text-base font-medium text-ink hover:text-coral border-b border-hairline/50 pb-2"
                >
                  Our Work
                </Link>
                <Link
                  href="/about"
                  onClick={toggleMenu}
                  className="block text-base font-medium text-ink hover:text-coral border-b border-hairline/50 pb-2"
                >
                  About Us
                </Link>
                <a
                  href="/#quote"
                  onClick={toggleMenu}
                  className="block text-base font-medium text-ink hover:text-coral border-b border-hairline/50 pb-2"
                >
                  Request Quote
                </a>
                <div className="pt-4 flex flex-col space-y-3">
                  <a
                    href="/#login"
                    onClick={toggleMenu}
                    className="w-full text-center py-3 text-sm font-medium text-ink border border-hairline rounded-md hover:bg-soft-stone transition-colors"
                  >
                    Client Login
                  </a>
                  <a
                    href="/#quote"
                    onClick={toggleMenu}
                    className="w-full text-center py-3 text-sm font-medium text-on-primary bg-primary rounded-full hover:bg-cohere-black transition-colors"
                  >
                    <span className="btn-radiative-text">Request Quote</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
