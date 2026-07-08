"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Clock, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface PortInfo {
  id: string;
  name: string;
  code: string;
  location: string;
  clearanceSla: string;
  destinations: { name: string; transit: string }[];
  icdConnections: string[];
  sectors: string[];
}

const PORT_DATA: Record<string, PortInfo> = {
  "nhava-sheva": {
    id: "nhava-sheva",
    name: "Nhava Sheva (JNPT)",
    code: "INNSA",
    location: "Maharashtra, India",
    clearanceSla: "Under 12 Hours",
    destinations: [
      { name: "Jebel Ali, UAE", transit: "4-6 Days" },
      { name: "Port of Rotterdam, NL", transit: "18-20 Days" },
      { name: "Port of Singapore, SG", transit: "7-9 Days" },
    ],
    icdConnections: ["ICD Tughlakabad (Delhi)", "ICD Dadri", "ICD Whitefield (Bengaluru)", "ICD Dhandari Kalan (Ludhiana)"],
    sectors: ["Automotive Components", "Engineering Goods", "Pharmaceuticals", "Textiles"],
  },
  "mundra": {
    id: "mundra",
    name: "Mundra Port",
    code: "INMUN",
    location: "Gujarat, India",
    clearanceSla: "Under 8 Hours",
    destinations: [
      { name: "Jebel Ali, UAE", transit: "3-5 Days" },
      { name: "Port of Hamburg, DE", transit: "16-18 Days" },
      { name: "Port of Shanghai, CN", transit: "14-16 Days" },
    ],
    icdConnections: ["ICD Garhi Harsaru (Gurugram)", "ICD Sanand (Ahmedabad)", "ICD Bhagat Ki Kothi (Jodhpur)"],
    sectors: ["Chemicals & Petrochemicals", "Heavy Machinery", "Agricultural Goods", "Textiles"],
  },
  "chennai": {
    id: "chennai",
    name: "Chennai Port",
    code: "INMAA",
    location: "Tamil Nadu, India",
    clearanceSla: "Under 14 Hours",
    destinations: [
      { name: "Port of Singapore, SG", transit: "5-7 Days" },
      { name: "Port of Yokohama, JP", transit: "15-17 Days" },
      { name: "Port of Rotterdam, NL", transit: "20-22 Days" },
    ],
    icdConnections: ["ICD Singanallur (Coimbatore)", "ICD Whitefield (Bengaluru)", "ICD Irungattukottai"],
    sectors: ["Automotive & EV", "Electronics & Electronics Manufacturing", "Leather & Apparel"],
  },
  "kolkata": {
    id: "kolkata",
    name: "Kolkata & Haldia Port",
    code: "INCCU",
    location: "West Bengal, India",
    clearanceSla: "Under 16 Hours",
    destinations: [
      { name: "Port of Singapore, SG", transit: "5-6 Days" },
      { name: "Port of Chittagong, BD", transit: "1-2 Days" },
      { name: "Port of Rotterdam, NL", transit: "22-24 Days" },
    ],
    icdConnections: ["ICD Durgapur", "ICD Patna", "ICD Birgunj (Nepal border gateway)"],
    sectors: ["Steel & Metals", "Paper & Pulp", "Jute & Textiles", "Tea & Agro Exports"],
  },
  "cochin": {
    id: "cochin",
    name: "Cochin Port (Vallarpadam)",
    code: "INCOK",
    location: "Kerala, India",
    clearanceSla: "Under 10 Hours",
    destinations: [
      { name: "Port of Colombo, LK", transit: "1 Day" },
      { name: "Port of Singapore, SG", transit: "5 Days" },
      { name: "Port of Rotterdam, NL", transit: "15-17 Days" },
    ],
    icdConnections: ["ICD Whitefield (Bengaluru)", "ICD Singanallur (Coimbatore)"],
    sectors: ["Marine & Seafood", "Spices & Agro", "Rubber & Polymers", "Coir Products"],
  },
};

const PORT_COORDS: Record<string, { x: number; y: number; name: string }> = {
  "nhava-sheva": { x: 120, y: 120, name: "JNPT" },
  "mundra": { x: 95, y: 90, name: "MUN" },
  "chennai": { x: 155, y: 140, name: "MAA" },
  "kolkata": { x: 195, y: 80, name: "CCU" },
  "cochin": { x: 130, y: 160, name: "COK" },
  "jebel-ali": { x: 35, y: 75, name: "AEJEA" },
  "rotterdam": { x: 25, y: 25, name: "NLRTM" },
  "singapore": { x: 235, y: 175, name: "SGSIN" },
  "hamburg": { x: 35, y: 15, name: "DEHAM" },
  "shanghai": { x: 265, y: 110, name: "CNSHA" },
  "yokohama": { x: 285, y: 70, name: "JPYOK" },
  "chittagong": { x: 215, y: 85, name: "BDCGP" },
  "colombo": { x: 145, y: 185, name: "LKCMB" },
};

const getDestKey = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes("jebel")) return "jebel-ali";
  if (n.includes("rotterdam")) return "rotterdam";
  if (n.includes("singapore")) return "singapore";
  if (n.includes("hamburg")) return "hamburg";
  if (n.includes("shanghai")) return "shanghai";
  if (n.includes("yokohama")) return "yokohama";
  if (n.includes("chittagong")) return "chittagong";
  if (n.includes("colombo")) return "colombo";
  return "";
};

const getBezierPath = (x1: number, y1: number, x2: number, y2: number) => {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const offset = Math.min(25, len * 0.18);
  const px = -dy / len;
  const py = dx / len;
  
  const cx = mx + px * offset;
  const cy = my + py * offset;
  
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
};

export default function PortNetworkConsole() {
  const [activePort, setActivePort] = useState<string>("nhava-sheva");
  const port = PORT_DATA[activePort];

  return (
    <div className="w-full bg-[#faf9f6] text-[#212121] rounded-[22px] p-6 border border-[#e5e7eb] shadow-xl flex flex-col md:flex-row gap-6 max-w-4xl mx-auto font-sans relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#edfce9] rounded-full filter blur-[60px] pointer-events-none opacity-60" />

      {/* Port Selector Sidebar */}
      <div className="w-full md:w-[260px] flex flex-col gap-4 border-b md:border-b-0 md:border-r border-[#e5e7eb] pb-6 md:pb-0 md:pr-6 z-10">
        <div className="flex items-center gap-2 mb-2">
          <Anchor className="w-4 h-4 text-emerald-700" />
          <span className="font-technical text-[11px] font-bold text-emerald-800 tracking-[0.1em] uppercase">
            Major EXIM Gateways
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          {Object.values(PORT_DATA).map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePort(p.id)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-150 flex items-center justify-between ${
                activePort === p.id
                  ? "bg-emerald-800/10 border-emerald-800/25 text-emerald-900 font-semibold"
                  : "bg-transparent border-transparent text-[#616161] hover:bg-[#eeece7]/50 hover:text-[#212121]"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{p.name}</span>
                <span className="text-xs text-[#93939f] font-mono">{p.code}</span>
              </div>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activePort === p.id ? "translate-x-0.5 text-emerald-800" : "text-[#93939f]"}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Details Panel */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[350px] z-10">
        {/* Left column: Text details */}
        <div className="flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={port.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Header info */}
              <div className="flex justify-between items-start gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#17171c] tracking-tight">
                    {port.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#616161] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#93939f]" />
                    <span>{port.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-[#93939f] font-mono uppercase tracking-wider block mb-0.5">Customs SLA</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {port.clearanceSla}
                  </span>
                </div>
              </div>

              {/* Content Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Box 1: Transit Times */}
                <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-xs">
                  <span className="text-[10px] text-[#93939f] font-mono uppercase tracking-wider block mb-3">Average Ocean Transit</span>
                  <ul className="space-y-2">
                    {port.destinations.map((d, idx) => (
                      <li key={idx} className="flex justify-between text-xs items-center">
                        <span className="text-[#616161]">{d.name}</span>
                        <span className="font-semibold text-[#17171c]">{d.transit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Box 2: ICD Connectivity */}
                <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-xs">
                  <span className="text-[10px] text-[#93939f] font-mono uppercase tracking-wider block mb-3">Linked Inland Container Depots</span>
                  <ul className="space-y-1.5">
                    {port.icdConnections.map((icd, idx) => (
                      <li key={idx} className="text-xs text-[#616161] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700/50" />
                        <span>{icd}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Box 3: Sectors Served */}
              <div>
                <span className="text-[10px] text-[#93939f] font-mono uppercase tracking-wider block mb-2">Key Industrial Sectors Supported</span>
                <div className="flex flex-wrap gap-2">
                  {port.sectors.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-[#212121] bg-[#eeece7]/40 border border-[#e5e7eb] px-3 py-1 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Customs Status Alert */}
              <div className="flex items-center gap-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-3.5 mt-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <div className="text-xs text-[#616161] leading-relaxed">
                  <span className="font-semibold text-emerald-800">Customs Brokerage Presence:</span> 24/7 on-site documentation, custom clearing agents, and bonded warehouse handlers active at {port.name}.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right column: Route Schematic Map */}
        <div className="w-full lg:w-[280px] h-[240px] lg:h-auto bg-white border border-[#e5e7eb] rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shadow-xs">
          <div>
            <span className="font-technical text-[10px] text-slate tracking-[0.1em] uppercase block mb-1">
              ROUTE SCHEMATIC
            </span>
            <span className="text-xs font-semibold text-[#17171c] font-sans">
              Active Transit Lanes
            </span>
          </div>

          <div className="flex-1 w-full flex items-center justify-center min-h-[140px]">
            <svg viewBox="0 0 300 220" className="w-full h-full text-slate/45" fill="none">
              {/* Grid Background */}
              {Array.from({ length: 15 }).map((_, i) =>
                Array.from({ length: 11 }).map((_, j) => (
                  <circle
                    key={`${i}-${j}`}
                    cx={i * 20 + 10}
                    cy={j * 20 + 10}
                    r="0.75"
                    fill="currentColor"
                    className="opacity-15"
                  />
                ))
              )}

              {/* Render Active paths */}
              {(() => {
                const originCoord = PORT_COORDS[port.id];
                if (!originCoord) return null;

                return port.destinations.map((dest, idx) => {
                  const destKey = getDestKey(dest.name);
                  const destCoord = PORT_COORDS[destKey];
                  if (!destCoord) return null;

                  const pathStr = getBezierPath(originCoord.x, originCoord.y, destCoord.x, destCoord.y);

                  return (
                    <g key={idx}>
                      {/* Faint static base path */}
                      <path
                        d={pathStr}
                        stroke="#f3f4f6"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      
                      {/* Active flowing route */}
                      <motion.path
                        d={pathStr}
                        stroke="#ff7759" // Coral accent color
                        strokeWidth="1.75"
                        fill="none"
                        strokeDasharray="6, 6"
                        animate={{
                          strokeDashoffset: [0, -20],
                        }}
                        transition={{
                          strokeDashoffset: {
                            repeat: Infinity,
                            ease: "linear",
                            duration: 1,
                          },
                          default: { duration: 1.2, ease: "easeOut" }
                        }}
                      />
                    </g>
                  );
                });
              })()}

              {/* Render Port Nodes */}
              {Object.entries(PORT_COORDS).map(([key, coord]) => {
                const isIndianPort = ["nhava-sheva", "mundra", "chennai", "kolkata", "cochin"].includes(key);
                const isActiveIndian = key === port.id;
                
                // Check if this is one of the active destinations
                const isDestination = port.destinations.some(
                  (d) => getDestKey(d.name) === key
                );

                if (!isIndianPort && !isDestination) {
                  // Render other global destinations as tiny dots
                  return (
                    <circle key={key} cx={coord.x} cy={coord.y} r="1.5" fill="#e2e8f0" />
                  );
                }

                return (
                  <g key={key}>
                    {/* Node Dot */}
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r={isActiveIndian ? "5" : "3"}
                      fill={isActiveIndian ? "#003c33" : isDestination ? "#ff7759" : "#cbd5e1"}
                      className="transition-colors duration-300"
                    />

                    {/* Ring for active Indian port */}
                    {isActiveIndian && (
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r="9"
                        stroke="#003c33"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    )}

                    {/* Port Tag Labels */}
                    <text
                      x={coord.x}
                      y={coord.y - (isActiveIndian ? 10 : 7)}
                      textAnchor="middle"
                      className={`font-mono text-[8px] font-bold tracking-tight select-none ${
                        isActiveIndian
                          ? "fill-[#003c33]"
                          : isDestination
                          ? "fill-[#ff7759]"
                          : "fill-slate"
                      }`}
                    >
                      {coord.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex justify-between items-center text-[8px] font-mono tracking-wider text-slate border-t border-[#e5e7eb] pt-2 select-none">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003c33]" />
              <span>ORIGIN</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7759]" />
              <span>DESTINATION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
