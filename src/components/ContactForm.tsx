"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="quote" className="py-24 bg-soft-stone/70 border-b border-hairline/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-technical text-sm font-normal text-coral tracking-[0.2em] uppercase block mb-3">
            ROUTE PROTOCOL INITIATION
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-normal leading-[1.1] tracking-[-0.02em] text-primary">
            Request Freight Corridor Quote
          </h2>
          <p className="mt-4 text-sm text-body-muted font-body max-w-md mx-auto">
            Input freight specifications. Abhishek logistics engineers will compile pricing telemetry and capacity schedules within 60 minutes.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-canvas border border-card-border rounded-[22px] p-8 md:p-12 shadow-sm relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-pale-green border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-normal text-primary mb-3">
                Protocol Confirmed
              </h3>
              <p className="text-base text-body-muted max-w-sm mb-8">
                Your freight request has been indexed. Telemetry specialists are calculating route capacity. Check your inbox for updates.
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
                Submit another manifest <ArrowRight className="w-4 h-4" />
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
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
              </div>

              {/* Row 3: Origin & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Origin Corridor / Node
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="e.g. Mumbai IN (BOM)"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
                <div>
                  <label className="font-technical text-xs text-slate uppercase tracking-[0.05em] block mb-2">
                    Destination Corridor / Node
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Frankfurt DE (FRA)"
                    className="w-full bg-canvas border border-hairline focus:border-form-focus focus:ring-2 focus:ring-form-focus/20 outline-none rounded-xs px-4 py-3 text-sm text-ink placeholder-muted/60 transition-all duration-150"
                  />
                </div>
              </div>

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
                    <option value="road">Corridor Road Freight</option>
                    <option value="multimodal">Integrated Multi-modal</option>
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
                  Specialized Handling Manifest
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
                  {isSubmitting ? "Processing Telemetry..." : "Initiate Quote Manifest"}
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
