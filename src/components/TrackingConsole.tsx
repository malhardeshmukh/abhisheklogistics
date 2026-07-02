"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle, Ship, Truck, Plane, AlertCircle } from "lucide-react";

interface Shipment {
  id: string;
  type: "ocean" | "road" | "air";
  contents: string;
  status: "In Transit" | "Customs Clearance" | "Delivered" | "Pending";
  origin: string;
  destination: string;
  location: string;
  eta: string;
  temperature?: string;
  logs: string[];
}

const DEMO_SHIPMENTS: Record<string, Shipment> = {
  "AB-9823": {
    id: "AB-9823",
    type: "ocean",
    contents: "High-Value Semiconductor Wafers",
    status: "In Transit",
    origin: "Mumbai Port, IN",
    destination: "Hamburg Port, DE",
    location: "Suez Canal Transit (30.45° N, 32.34° E)",
    eta: "2026-07-06T14:00:00Z",
    temperature: "18.2°C (Calibrated)",
    logs: [
      "2026-07-01 08:00:00 - Transponder signal validated at Mumbai Port.",
      "2026-07-01 12:45:00 - Cargo loaded onto vessel 'Sea Venture'.",
      "2026-07-02 02:10:00 - Telemetry status: Temperature stable at 18.2°C.",
      "2026-07-02 16:30:00 - Entered Arabian Sea corridor.",
    ],
  },
  "IN-8841": {
    id: "IN-8841",
    type: "road",
    contents: "Heavy Machinery & Tooling Equipment",
    status: "Customs Clearance",
    origin: "Chennai Factory, IN",
    destination: "Bengaluru Logistics Hub, IN",
    location: "Hosur Border Checkpoint",
    eta: "2026-07-03T06:30:00Z",
    logs: [
      "2026-07-02 09:15:00 - Dispatch order approved.",
      "2026-07-02 11:30:00 - Loaded on heavy cargo trailer TR-404.",
      "2026-07-02 15:45:00 - Reached Hosur Checkpoint. Awaiting clearance.",
    ],
  },
  "EU-4530": {
    id: "EU-4530",
    type: "air",
    contents: "Critical Oncology Therapeutics",
    status: "Delivered",
    origin: "Basel Airport, CH",
    destination: "Delhi Cargo Terminal, IN",
    location: "Delivered: Apollo Depot Corridor B",
    eta: "Delivered (2026-07-02 12:00)",
    temperature: "4.5°C (Controlled Cold-chain)",
    logs: [
      "2026-07-01 22:30:00 - Priority air transit departure Basel.",
      "2026-07-02 08:15:00 - Arrived at Delhi Cargo Terminal. Deplaned.",
      "2026-07-02 10:45:00 - Dispatched in temperature-controlled truck.",
      "2026-07-02 12:00:00 - Delivered and hand-signed at Apollo Depot.",
    ],
  },
};

export default function TrackingConsole() {
  const [query, setQuery] = useState("AB-9823");
  const [activeId, setActiveId] = useState<string>("AB-9823");
  const [isSearching, setIsSearching] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "> System initialized.",
    "> Standby for query parameters.",
  ]);

  const activeShipment = DEMO_SHIPMENTS[activeId];

  useEffect(() => {
    if (activeId) {
      setTerminalLogs([
        `> Requesting telemetry for shipment ID: ${activeId}...`,
        `> Connecting to Global Positioning Satellite Transponder...`,
        `> [SUCCESS] Telemetry received. Code 200 OK.`,
        `> Current location locked: ${DEMO_SHIPMENTS[activeId]?.location}`,
      ]);
    }
  }, [activeId]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim().toUpperCase();

    setIsSearching(true);
    setTerminalLogs((prev) => [...prev, `> Querying system database for ID: '${cleanQuery}'...`]);

    setTimeout(() => {
      if (DEMO_SHIPMENTS[cleanQuery]) {
        setActiveId(cleanQuery);
        setTerminalLogs((prev) => [
          ...prev,
          `> [FOUND] Match resolved for ${cleanQuery}.`,
          `> Fetching route matrices and logs...`,
        ]);
      } else {
        setTerminalLogs((prev) => [
          ...prev,
          `> [ERROR] Telemetry ID '${cleanQuery}' not resolved. Check parameters.`,
        ]);
      }
      setIsSearching(false);
    }, 800);
  };

  const getStatusStyle = (status: Shipment["status"]) => {
    switch (status) {
      case "In Transit":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Customs Clearance":
        return "bg-coral/10 text-coral border-coral/20";
      case "Delivered":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate/10 text-slate border-slate/20";
    }
  };

  const getIcon = (type: Shipment["type"]) => {
    switch (type) {
      case "ocean":
        return <Ship className="w-5 h-5" />;
      case "air":
        return <Plane className="w-5 h-5" />;
      case "road":
        return <Truck className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full bg-primary text-on-dark rounded-[16px] p-6 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-6 max-w-4xl mx-auto font-sans relative overflow-hidden">
      {/* Absolute Glow Accent */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-deep-green/30 blur-[100px] pointer-events-none" />

      {/* Sidebar: Active Transponders */}
      <div className="w-full md:w-[260px] flex flex-col gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6 z-10">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-4 h-4 text-coral-soft" />
          <span className="font-technical text-xs text-white/50 tracking-[0.1em] uppercase">
            Active Transponders
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {Object.values(DEMO_SHIPMENTS).map((ship) => (
            <button
              key={ship.id}
              onClick={() => {
                setActiveId(ship.id);
                setQuery(ship.id);
              }}
              className={`w-full text-left p-3 rounded-xs border transition-all duration-150 flex items-center justify-between ${
                activeId === ship.id
                  ? "bg-white/5 border-white/20 text-white font-medium"
                  : "bg-transparent border-transparent text-white/60 hover:bg-white/[0.02] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`${activeId === ship.id ? "text-coral-soft" : "text-white/40"}`}>
                  {getIcon(ship.type)}
                </div>
                <div className="flex flex-col">
                  <span className="font-technical text-sm font-bold tracking-[0.05em]">{ship.id}</span>
                  <span className="text-xs text-white/40 truncate max-w-[140px]">{ship.contents}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearchSubmit} className="mt-auto pt-4 border-t border-white/10">
          <label className="font-technical text-[10px] text-white/40 tracking-[0.1em] uppercase block mb-2">
            Manual Query ID
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. AB-9823"
              className="bg-white/5 border border-white/10 focus:border-form-focus focus:outline-none rounded-xs px-3 py-2 text-sm text-white font-technical placeholder-white/30 flex-1"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="p-2 bg-coral hover:bg-coral-soft text-cohere-black rounded-xs transition-colors duration-150 flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Main Console Readout */}
      <div className="flex-1 flex flex-col justify-between min-h-[350px] z-10">
        
        {/* Top telemetry bar */}
        <AnimatePresence mode="wait">
          {activeShipment ? (
            <motion.div
              key={activeShipment.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="font-technical text-xl font-bold tracking-[0.05em]">
                    {activeShipment.id}
                  </span>
                  <span className={`text-[10px] uppercase font-technical px-2.5 py-0.5 rounded-full border ${getStatusStyle(activeShipment.status)}`}>
                    {activeShipment.status}
                  </span>
                </div>
                <div className="text-xs text-white/50 font-technical">
                  ETA: <span className="text-white font-medium">{new Date(activeShipment.eta).toLocaleString()}</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 rounded-xs p-4">
                <div>
                  <span className="text-[10px] text-white/40 font-technical uppercase block mb-1">Origin</span>
                  <span className="text-sm font-medium text-white">{activeShipment.origin}</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 font-technical uppercase block mb-1">Destination</span>
                  <span className="text-sm font-medium text-white">{activeShipment.destination}</span>
                </div>
                <div className="col-span-2 border-t border-white/5 pt-2 mt-1">
                  <span className="text-[10px] text-white/40 font-technical uppercase block mb-1">Current Coordinates / Locked Node</span>
                  <span className="text-sm font-medium text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                    {activeShipment.location}
                  </span>
                </div>
                {activeShipment.temperature && (
                  <div className="col-span-2 border-t border-white/5 pt-2">
                    <span className="text-[10px] text-white/40 font-technical uppercase block mb-1">Internal Cargo Temp Log</span>
                    <span className="text-sm font-medium text-coral-soft">{activeShipment.temperature}</span>
                  </div>
                )}
              </div>

              {/* Historical Logs List */}
              <div>
                <span className="text-[10px] text-white/40 font-technical uppercase block mb-2">Transit Manifest Log</span>
                <div className="flex flex-col gap-2 max-h-[110px] overflow-y-auto pr-1">
                  {activeShipment.logs.map((log, idx) => (
                    <div key={idx} className="text-xs text-white/70 font-body pl-3 border-l border-white/10 py-0.5">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 text-white/40">
              <AlertCircle className="w-8 h-8 mb-2" />
              <p className="text-sm">Query active shipment parameters</p>
            </div>
          )}
        </AnimatePresence>

        {/* Live system terminal logs log (at bottom of panel) */}
        <div className="mt-6 border-t border-white/10 pt-4 bg-[#0a0a0d] -mx-6 -mb-6 p-4 font-technical text-[11px] text-emerald-400/90 flex flex-col gap-1 max-h-[100px] overflow-y-auto select-text select-none">
          {terminalLogs.map((log, idx) => (
            <div key={idx} className="leading-5">
              {log}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
