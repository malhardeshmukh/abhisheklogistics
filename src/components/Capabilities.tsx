"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { ArrowUpRight } from "lucide-react";

interface Capability {
  id: string;
  title: string;
  monoLabel: string;
  description: string;
  link: string;
  // SVG drawing paths
  paths: string[];
  viewBox: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "road",
    title: "Precision Road Freight",
    monoLabel: "ROUTE / INLAND",
    description: "Multi-modal trucking networks operating on high-frequency schedules across continental corridors. Dynamic re-routing coordinates supply chain safety.",
    link: "/services/road",
    viewBox: "0 0 100 60",
    paths: [
      "M 10 50 Q 30 10, 50 30 T 90 10", // Road route path
      "M 10 50 L 90 50",                 // Baseline
    ],
  },
  {
    id: "air",
    title: "Expedited Air Cargo",
    monoLabel: "CORRIDOR / GLOBAL",
    description: "Next-flight-out dispatch and priority clearance for time-critical parts, pharma, and high-value cargo. Global hubs connect key economic centers.",
    link: "/services/air",
    viewBox: "0 0 100 60",
    paths: [
      "M 10 50 C 30 50, 40 10, 90 10",   // Takeoff flight arc
      "M 80 10 L 90 10 L 90 20",         // Arrow head
    ],
  },
  {
    id: "ocean",
    title: "Maritime Freight Shipping",
    monoLabel: "PORT / TRANSIT",
    description: "Full container load (FCL) and consolidated shipments (LCL) serving all major sea ports. Real-time satellite tracking monitors container health.",
    link: "/services/ocean",
    viewBox: "0 0 100 60",
    paths: [
      "M 10 30 Q 25 20, 40 30 T 70 30 T 90 30", // Ocean wave
      "M 10 40 Q 25 30, 40 40 T 70 40 T 90 40", // Wave layer 2
    ],
  },
  {
    id: "warehouse",
    title: "Smart Warehousing Systems",
    monoLabel: "FACILITY / STORAGE",
    description: "De-consolidating, picking, and fulfillment nodes operating on micro-fulfillment schedules. Cloud inventory databases provide 100% stock accuracy.",
    link: "/services/warehouse",
    viewBox: "0 0 100 60",
    paths: [
      "M 20 15 H 80 V 45 H 20 Z",       // Warehouse box
      "M 40 15 V 45 M 60 15 V 45",       // Grid divisions
      "M 20 30 H 80",                    // Grid shelves
    ],
  },
];

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Play animation on mount for all SVGs
  useEffect(() => {
    animate(".capability-svg-path", {
      strokeDashoffset: [200, 0],
      duration: 1500,
      delay: (el, i) => (i || 0) * 150,
      ease: "inOutQuad",
    });
  }, []);

  const handleMouseEnter = (id: string) => {
    // Re-animate path on hover
    animate(`.path-${id}`, {
      strokeDashoffset: [200, 0],
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
            CAPABILITY MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-[60px] font-normal leading-[1] tracking-[-0.02em] text-primary max-w-2xl">
            Engineered logistics for high-demand networks.
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              onMouseEnter={() => handleMouseEnter(cap.id)}
              className="bg-canvas border-t-2 border-hairline hover:border-primary transition-all duration-300 pt-8 pb-10 flex flex-col justify-between group"
            >
              <div>
                {/* SVG Illustration Container */}
                <div className="mb-8 w-full aspect-[5/3] bg-soft-stone/40 border border-card-border rounded-xs p-4 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-soft-stone">
                  <svg
                    viewBox={cap.viewBox}
                    className="w-full h-full max-h-[120px] text-ink"
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
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        className={`capability-svg-path path-${cap.id}`}
                      />
                    ))}
                  </svg>
                </div>

                <span className="font-technical text-xs text-slate tracking-[0.1em] uppercase block mb-2">
                  {cap.monoLabel}
                </span>
                <h3 className="font-display text-2xl font-normal text-primary mb-4">
                  {cap.title}
                </h3>
                <p className="text-sm font-body text-body-muted leading-[1.5] mb-6">
                  {cap.description}
                </p>
              </div>

              <div>
                <a
                  href={cap.link}
                  className="inline-flex items-center text-sm font-medium text-action-blue hover:text-focus-blue transition-colors group-hover:underline gap-1"
                >
                  Configure Corridor <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
