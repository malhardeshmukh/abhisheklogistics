"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TRANSIT_MATRIX: Record<string, Record<string, string>> = {
  "Nhava Sheva": {
    "Jebel Ali": "4-6 Days (Ocean)",
    "Rotterdam": "18-20 Days (Ocean)",
    "Singapore": "7-9 Days (Ocean)",
  },
  "Mundra": {
    "Jebel Ali": "3-5 Days (Ocean)",
    "Hamburg": "16-18 Days (Ocean)",
    "Shanghai": "14-16 Days (Ocean)",
  },
  "Chennai": {
    "Singapore": "5-7 Days (Ocean)",
    "Yokohama": "15-17 Days (Ocean)",
    "Rotterdam": "20-22 Days (Ocean)",
  },
  "Kolkata": {
    "Singapore": "5-6 Days (Ocean)",
    "Chittagong": "1-2 Days (Ocean)",
    "Rotterdam": "22-24 Days (Ocean)",
  },
  "Cochin": {
    "Colombo": "1 Day (Ocean)",
    "Singapore": "5 Days (Ocean)",
    "Rotterdam": "15-17 Days (Ocean)",
  },
};

const matchPort = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes("nhava") || t.includes("jnpt") || t.includes("innsa")) return "Nhava Sheva";
  if (t.includes("mundra") || t.includes("inmun")) return "Mundra";
  if (t.includes("chennai") || t.includes("maa") || t.includes("inmaa")) return "Chennai";
  if (t.includes("kolkata") || t.includes("haldia") || t.includes("inccu")) return "Kolkata";
  if (t.includes("cochin") || t.includes("vallarpadam") || t.includes("incok")) return "Cochin";
  return null;
};

const getTransitEstimate = (originText: string, destText: string, mode: string) => {
  const originPort = matchPort(originText);
  let destPort = "";
  const dt = destText.toLowerCase();
  if (dt.includes("jebel") || dt.includes("dubai") || dt.includes("ali")) destPort = "Jebel Ali";
  else if (dt.includes("rotterdam")) destPort = "Rotterdam";
  else if (dt.includes("singapore")) destPort = "Singapore";
  else if (dt.includes("hamburg")) destPort = "Hamburg";
  else if (dt.includes("shanghai")) destPort = "Shanghai";
  else if (dt.includes("yokohama") || dt.includes("japan")) destPort = "Yokohama";
  else if (dt.includes("chittagong") || dt.includes("bangladesh")) destPort = "Chittagong";
  else if (dt.includes("colombo") || dt.includes("sri lanka")) destPort = "Colombo";

  if (!originPort || !destPort) return null;

  if (mode === "air") {
    return {
      route: `${originPort} ➔ ${destPort}`,
      time: "2-3 Days (Priority Air)",
      sla: "Customs cleared in 6 hrs",
    };
  }
  if (mode === "road") {
    return {
      route: `${originPort} ➔ inland corridor`,
      time: "3-5 Days (FTL Express)",
      sla: "GPS tracked, 24/7 dispatch",
    };
  }

  const oceanTime = TRANSIT_MATRIX[originPort]?.[destPort];
  if (oceanTime) {
    return {
      route: `${originPort} ➔ ${destPort}`,
      time: oceanTime,
      sla: originPort === "Mundra" ? "SLA: Under 8 Hours customs clear" : "SLA: Under 12 Hours customs clear",
    };
  }

  return {
    route: `${originPort} ➔ ${destPort}`,
    time: "12-15 Days (Est. Ocean Transit)",
    sla: "Standard Customs Clearance SLA",
  };
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    freightType: "ocean",
    weight: "",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Requesting Freight Quote...");

  const transitEstimate = useMemo(() => {
    return getTransitEstimate(formData.origin, formData.destination, formData.freightType);
  }, [formData.origin, formData.destination, formData.freightType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let step = 0;
    const messages = [
      "Securing container carrier capacity...",
      "Computing optimal maritime route...",
      "Running duty tariff optimization...",
      "Validating customs SLA compliance..."
    ];
    setLoadingMessage(messages[0]);
    const interval = setInterval(() => {
      step++;
      if (step < messages.length) {
        setLoadingMessage(messages[step]);
      }
    }, 320);

    setTimeout(() => {
      clearInterval(interval);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1400);
  };

  return (
    <section id="quote" className="py-24 bg-soft-stone/70 border-b border-hairline/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-technical text-sm font-normal text-coral tracking-[0.2em] uppercase block mb-3">
            GET A FREIGHT QUOTE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-[1.1] tracking-[-0.02em] text-primary">
            Request Cargo Freight Quote
          </h2>
          <p className="mt-4 text-sm text-body-muted font-body max-w-md mx-auto">
            Input your shipment specifications. Our customs and logistics experts will analyze your requirements and get back to you with custom rates and schedules.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-canvas border border-card-border rounded-[22px] p-8 md:p-12 shadow-sm relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center relative"
            >
              {/* Custom Animated Success Badge */}
              <div className="relative w-20 h-20 flex items-center justify-center bg-pale-green border border-emerald-500/20 rounded-full mb-6 overflow-visible">
                <svg className="w-10 h-10 text-emerald-600 z-10" viewBox="0 0 52 52" fill="none">
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="23"
                    stroke="currentColor"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M16 27l7 7 14-14"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  />
                </svg>

                {/* Flowing success particles */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const distance = 45 + Math.random() * 25;
                  const targetX = Math.cos(angle) * distance;
                  const targetY = Math.sin(angle) * distance;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#ff7759" : "#003c33",
                        left: "calc(50% - 3px)",
                        top: "calc(50% - 3px)"
                      }}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                      animate={{
                        x: targetX,
                        y: targetY,
                        opacity: 0,
                        scale: 1.2,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.45,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
              </div>

              <h3 className="font-display text-3xl font-normal text-primary mb-3">
                Quote Request Received
              </h3>
              <p className="text-base text-body-muted max-w-sm mb-8">
                Thank you for reaching out. A logistics manager is reviewing your cargo specifications and will contact you shortly with rates.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    company: "",
                    contactName: "",
                    email: "",
                    phone: "",
                    origin: "",
                    destination: "",
                    freightType: "ocean",
                    weight: "",
                    details: "",
                  });
                }}
                className="font-technical text-sm font-medium text-action-blue hover:text-focus-blue transition-colors flex items-center gap-1.5"
              >
                Submit another request <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Company & Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Atlas Industrials"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@atlas.com"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Row 3: Origin & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Loading Point / Origin (City or Port)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="e.g. Mumbai IN (BOM) or Nhava Sheva"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Delivery Point / Destination (City or Port)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Hamburg DE (HAM) or Rotterdam"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Dynamic Route Transit Estimator */}
              <AnimatePresence>
                {transitEstimate && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="bg-pale-green/40 border border-emerald-500/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
                      <div>
                        <span className="font-technical font-bold text-emerald-800 mr-2 uppercase tracking-wide">ROUTE ESTIMATOR:</span>
                        <span className="font-medium text-[#212121]">{transitEstimate.route}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-0.5">
                      <div className="font-semibold text-emerald-800 font-technical uppercase tracking-wide">
                        Transit: {transitEstimate.time}
                      </div>
                      <div className="text-[10px] text-slate font-mono uppercase">{transitEstimate.sla}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row 4: Service Type & Cargo Weight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Freight Mode
                  </label>
                  <select
                    value={formData.freightType}
                    onChange={(e) => setFormData({ ...formData, freightType: e.target.value })}
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink transition-all duration-150"
                  >
                    <option value="ocean">Maritime / Ocean Cargo</option>
                    <option value="air">Expedited / Air Cargo</option>
                    <option value="road">Inland Road Transport</option>
                    <option value="multimodal">Integrated Multi-modal & Customs</option>
                  </select>
                </div>
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Cargo Weight (kg / metric tons)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="e.g. 18,500 kg"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                  Additional Shipment Details (e.g., Cargo type, dimensions, customs assistance)
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe cargo dimensions, hazard codes, temperature-control requirements, or priority timing specifications."
                  className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full flex items-center gap-2 select-none shadow-sm transition-all duration-150 active:scale-95 disabled:opacity-50"
                >
                  <span className="btn-radiative-text">
                    {isSubmitting ? loadingMessage : "Request Freight Quote"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
