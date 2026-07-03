"use client";

import { useEffect } from "react";
import { animate } from "animejs";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Capability {
  id: string;
  title: string;
  label: string;
  description: string;
  link: string;
  viewBox: string;
  paths: string[];
}

const CAPABILITIES: Capability[] = [
  {
    id: "road",
    title: "Inland Road & FTL/LTL",
    label: "INLAND FREIGHT",
    description: "High-capacity road transport covering major industrial zones and Golden Quadrilateral routes. Reliability for moving raw materials, steel, components, and finished products.",
    link: "/services/road",
    viewBox: "0 0 100 60",
    paths: [
      "M 15 45 V 22 H 58 V 30 H 75 L 85 38 V 45 H 15 Z", // Truck body outline
      "M 28 45 A 6 6 0 1 1 27.9 45 Z",                 // Wheel 1
      "M 65 45 A 6 6 0 1 1 64.9 45 Z",                 // Wheel 2
      "M 58 22 V 45",                                   // Shutter divider
    ],
  },
  {
    id: "air",
    title: "Global Air Cargo & Express",
    label: "EXPEDITED AIR",
    description: "Priority air freight for high-value components, automotive parts, pharmaceuticals, and urgent export shipments. Direct routes connecting major global industrial centers.",
    link: "/services/air",
    viewBox: "0 0 100 60",
    paths: [
      "M 15 32 H 72 L 85 38 H 20 Z",                   // Fuselage
      "M 22 32 L 12 18 H 20 L 28 32",                   // Tail fin
      "M 42 32 L 58 14 H 66 L 49 32",                   // Upper wing
      "M 45 38 L 56 50 H 64 L 51 38",                   // Lower wing
    ],
  },
  {
    id: "ocean",
    title: "Ocean Freight & Port Logistics",
    label: "MARITIME SHIPPING",
    description: "FCL and LCL shipping through India's major container ports (JNPT, Mundra, Chennai, Kolkata). Custom clearance, port handling, and containerized transport.",
    link: "/services/ocean",
    viewBox: "0 0 100 60",
    paths: [
      "M 10 38 L 16 46 H 80 L 88 34 H 83 L 80 38 H 10 Z", // Hull
      "M 22 38 V 26 H 32 V 38 H 42 V 26 H 52 V 38 H 62 V 26 H 72 V 38", // Container stacks
      "M 5 49 Q 15 46, 25 49 T 45 49 T 65 49 T 85 49 T 95 49", // Waves
    ],
  },
  {
    id: "warehouse",
    title: "Industrial Warehousing",
    label: "BONDED STORAGE",
    description: "Customs-bonded warehouses and distribution centers close to major ports and manufacturing hubs, featuring inventory management, packaging, and fulfillment.",
    link: "/services/warehouse",
    viewBox: "0 0 100 60",
    paths: [
      "M 15 45 V 26 L 50 14 L 85 26 V 45 H 15 Z",       // Shingle roof warehouse outline
      "M 40 45 V 32 H 60 V 45",                         // Loading gate
      "M 25 28 H 33 V 34 H 25 Z",                       // Shutter window left
      "M 67 28 H 75 V 34 H 67 Z",                       // Shutter window right
    ],
  },
];

export default function Capabilities() {
  // Play animation on mount for all SVGs
  useEffect(() => {
    animate(".capability-svg-path", {
      strokeDashoffset: [300, 0],
      duration: 1500,
      delay: (el, i) => (i || 0) * 100,
      ease: "inOutQuad",
    });
  }, []);

  const handleMouseEnter = (id: string) => {
    // Re-animate path on hover
    animate(`.path-${id}`, {
      strokeDashoffset: [300, 0],
      duration: 1000,
      ease: "outQuad",
    });
  };

  return (
    <section id="services" className="py-24 bg-canvas border-b border-hairline/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-technical text-sm font-normal text-coral tracking-[0.2em] uppercase block mb-3">
            LOGISTICS SERVICES
          </span>
          <h2 className="font-display text-4xl md:text-[60px] font-normal leading-[1] tracking-[-0.02em] text-primary max-w-3xl">
            Reliable supply chain solutions for Indian manufacturing sectors.
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              onMouseEnter={() => handleMouseEnter(cap.id)}
              className="bg-canvas border-t-2 border-hairline hover:border-emerald-800 transition-all duration-300 pt-8 pb-10 flex flex-col justify-between group"
            >
              <div>
                {/* SVG Illustration Container */}
                <div className="mb-8 w-full aspect-[5/3] bg-soft-stone/40 border border-card-border rounded-xs p-4 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-soft-stone">
                  <svg
                    viewBox={cap.viewBox}
                    className="w-full h-full max-h-[120px] text-emerald-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {cap.paths.map((d, i) => (
                      <path
                        key={i}
                        d={d}
                        strokeDasharray="300"
                        strokeDashoffset="300"
                        className={`capability-svg-path path-${cap.id}`}
                      />
                    ))}
                  </svg>
                </div>

                <span className="font-technical text-xs text-slate tracking-[0.1em] uppercase block mb-2">
                  {cap.label}
                </span>
                <h3 className="font-display text-2xl font-normal text-primary mb-4">
                  {cap.title}
                </h3>
                <p className="text-sm font-body text-[#616161] leading-[1.5] mb-6">
                  {cap.description}
                </p>
              </div>

              <div>
                <Link
                  href={cap.link}
                  className="inline-flex items-center text-sm font-medium text-action-blue hover:text-focus-blue transition-colors group-hover:underline gap-1"
                >
                  Explore Service Details <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
