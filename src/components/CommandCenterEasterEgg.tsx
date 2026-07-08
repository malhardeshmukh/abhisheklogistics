"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight } from "lucide-react";

interface LogLine {
  text: string;
  time: string;
  type: "system" | "input" | "output";
}

const LOG_TEMPLATES = [
  "[SYS] Connection established with JNPT customs server INNSA-Broker-09",
  "[CARGO] Container MSK-9082 staged at Nhava Sheva Yard 4B",
  "[CUSTOMS] Bill of Entry clearance approved for Mundra import duty #7821-M",
  "[ROAD] FTL vehicle stage completed at Garhi Harsaru ICD depot",
  "[AIR] Express consignment dispatched from Mumbai (BOM) to Dubai (DXB)",
  "[SYS] GPS telemetry signal received from FTL fleet corridor NH-48 (Speed: 62 km/h)",
  "[CUSTOMS] Gate-out customs pass generated at Chennai Port Terminal INMAA",
  "[CARGO] Reefer unit temp log check: -18.2°C (Target: -18.0°C) - OK",
  "[SYS] Multimodal bill of lading #ABL-90821-EX generated",
  "[PORT] Vessel MAERSK MC-KINNEY MOLLER berthed at JNPT Berth 2",
  "[SYS] API handshake successful with Nepal Border ICD Gateway (Birgunj)",
  "[AIR] Cold-chain cargo transfer completed at IGI Airport terminal 3",
  "[CARGO] Container MSC-4029 loading sequence completed at Cochin Port",
  "[ROAD] Fleet staging initialized for Delhi-Mumbai express corridor #DMEX-4",
  "[CUSTOMS] Quarantine check passed for agro exports at Kolkata Port INCCU"
];

export default function CommandCenterEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with some logs
  useEffect(() => {
    const initialLogs: LogLine[] = [
      { text: "ABHISHEK LOGISTICS CORE PROTOCOL v3.9.1", time: getTimestamp(), type: "system" },
      { text: "Initializing telemetry connection to Indian Port Gateways...", time: getTimestamp(), type: "system" },
      { text: "Customs brokerage validation: ONLINE", time: getTimestamp(), type: "system" },
      { text: "Establishing secure link. Press Ctrl+K or type 'exit' to close.", time: getTimestamp(), type: "system" },
      { text: "Type 'help' to view available operations.", time: getTimestamp(), type: "system" },
      { text: "--------------------------------------------------------", time: getTimestamp(), type: "system" },
    ];
    // Pick 3 random initial operational logs
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * LOG_TEMPLATES.length);
      initialLogs.push({ text: LOG_TEMPLATES[idx], time: getTimestamp(), type: "system" });
    }
    setLogs(initialLogs);
  }, []);

  // Set up event listeners for open event and keyboard shortcut
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-logistics-console", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-logistics-console", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Telemetry loop - append a log line periodically when open
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * LOG_TEMPLATES.length);
      appendLog(LOG_TEMPLATES[idx], "system");
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [logs, isOpen]);

  function getTimestamp() {
    const now = new Date();
    return now.toTimeString().split(" ")[0];
  }

  const appendLog = (text: string, type: "system" | "input" | "output") => {
    setLogs((prev) => [...prev, { text, time: getTimestamp(), type }]);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    // Log the typed command
    appendLog(`abhishek@logistics-terminal ~ % ${inputValue}`, "input");
    setInputValue("");

    // Process command
    setTimeout(() => {
      switch (cmd) {
        case "help":
          appendLog(
            `Available commands:\r\n` +
            `  ports       - List major EXIM gateways and coordinates\r\n` +
            `  clearances  - Show customs SLA metrics by port\r\n` +
            `  status      - Overview of current active shipments in transit\r\n` +
            `  clear       - Clear terminal output\r\n` +
            `  exit        - Close the command center`,
            "output"
          );
          break;
        case "ports":
          appendLog(
            `[GATEWAY DIRECTORY]\r\n` +
            `-------------------------------------------------------------\r\n` +
            `PORT ID        | CODE  | REGION         | LAT/LONG\r\n` +
            `-------------------------------------------------------------\r\n` +
            `Nhava Sheva    | INNSA | Maharashtra    | 18.94°N / 72.95°E\r\n` +
            `Mundra Port    | INMUN | Gujarat        | 22.84°N / 69.70°E\r\n` +
            `Chennai Port   | INMAA | Tamil Nadu     | 13.08°N / 80.29°E\r\n` +
            `Kolkata Port   | INCCU | West Bengal    | 22.57°N / 88.36°E\r\n` +
            `Cochin Port    | INCOK | Kerala         |  9.96°N / 76.26°E\r\n` +
            `-------------------------------------------------------------`,
            "output"
          );
          break;
        case "clearances":
          appendLog(
            `[CUSTOMS PERFORMANCE REPORT]\r\n` +
            `-------------------------------------------------------------\r\n` +
            `PORT CODE | SLA TARGET | RECENT AVG CLEARANCE | STATUS\r\n` +
            `-------------------------------------------------------------\r\n` +
            `INNSA     | < 12 Hours | 10.4 Hours           | OPTIMAL\r\n` +
            `INMUN     | <  8 Hours |  6.8 Hours           | OPTIMAL\r\n` +
            `INMAA     | < 14 Hours | 12.1 Hours           | OPTIMAL\r\n` +
            `INCCU     | < 16 Hours | 14.5 Hours           | OPTIMAL\r\n` +
            `INCOK     | < 10 Hours |  8.2 Hours           | OPTIMAL\r\n` +
            `-------------------------------------------------------------`,
            "output"
          );
          break;
        case "status":
          appendLog(
            `[LOGISTICS CORRIDOR TELEMETRY]\r\n` +
            `-------------------------------------------------------------\r\n` +
            `ACTIVE SHIPMENTS : 15 EXIM & Domestic Operations\r\n` +
            `  Ocean Cargo    : 5 containers en route (Singapore, Rotterdam, Jebel Ali)\r\n` +
            `  Air Cargo      : 2 priority packages (Pharma APIs, Auto Components)\r\n` +
            `  Road Freight   : 8 active fleets (Golden Quadrilateral stage 1 & 2)\r\n` +
            `\r\n` +
            `TRACKING SYSTEM  : 100% GPS & IoT sensors transmitting\r\n` +
            `SECURITY THREATS : 0 anomalous alerts detected\r\n` +
            `-------------------------------------------------------------`,
            "output"
          );
          break;
        case "clear":
          setLogs([]);
          break;
        case "exit":
          setIsOpen(false);
          break;
        default:
          appendLog(`Unknown command: '${cmd}'. Type 'help' for assistance.`, "output");
          break;
      }
    }, 50);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-[#000000]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 font-mono select-text"
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-full max-w-4xl h-[90vh] bg-[#0c0c0f] border border-[#ff7759]/20 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Terminal Header */}
            <div className="flex justify-between items-center bg-[#17171c] px-4 py-3 border-b border-[#ffffff]/5 select-none">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#ff7759]" />
                <span className="text-xs font-semibold text-[#a1a1a6] tracking-wider font-mono">
                  LOGISTICS OPERATIONS CONTROL MODULE
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#cbd5e1] hover:bg-white/10 hover:text-white transition-all duration-150"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Terminal Console Output */}
            <div className="flex-1 overflow-y-auto p-6 space-y-2 text-xs leading-relaxed text-[#eeece7]/90 custom-scrollbar scrollbar-thin">
              {logs.map((log, index) => {
                if (log.type === "input") {
                  return (
                    <div key={index} className="text-white font-semibold">
                      {log.text}
                    </div>
                  );
                }
                if (log.type === "output") {
                  return (
                    <div key={index} className="text-[#a1a1a6] whitespace-pre-wrap pl-4 border-l border-[#ff7759]/10">
                      {log.text}
                    </div>
                  );
                }
                return (
                  <div key={index} className="flex gap-4 text-[#4ade80]/90">
                    <span className="text-[#64748b] select-none">[{log.time}]</span>
                    <span>{log.text}</span>
                  </div>
                );
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Command Input Prompt */}
            <form
              onSubmit={handleCommandSubmit}
              className="bg-[#17171c] px-6 py-4 border-t border-[#ffffff]/5 flex items-center gap-2 select-none"
            >
              <ChevronRight className="w-4 h-4 text-[#ff7759]" />
              <span className="text-xs text-white/50 select-none">abhishek@logistics-terminal ~ %</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="type 'help' or 'ports'..."
                className="flex-grow bg-transparent outline-none text-xs text-white placeholder-white/20 font-mono"
                autoFocus
              />
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
