import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Layers, Database, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WarehousingPage() {
  const specs = [
    { key: "TOTAL STORAGE CAPACITY", value: "Over 1.8 Million square feet of Grade-A warehousing in major industrial corridors" },
    { key: "INVENTORY REPORTING", value: "Real-time stock visibility, online reporting portals, and direct EDI database sync (SAP/Oracle)" },
    { key: "TEMPERATURE CONTROLLED ZONES", value: "Pharma/Food grade: 2°C to 8°C, and -80°C ultra-low freezer storage options" },
    { key: "SECURITY & COMPLIANCE", value: "24/7 CCTV surveillance, fire protection, and dedicated customs-bonded warehousing sections" },
    { key: "INVENTORY MANAGEMENT", value: "Regular cyclic counts, barcode scanning, and computerized stock tracking" },
    { key: "VALUE ADDED SERVICES", value: "Cargo de-consolidation, pick & pack, kitting, labelling, and B2B shipping fulfillment" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-canvas min-h-screen">
        
        {/* Stark Hero Section */}
        <section className="py-20 border-b border-hairline relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-1 text-xs font-technical text-slate hover:text-primary transition-colors uppercase tracking-wider mb-8">
              <ArrowLeft className="w-3 h-3" /> Back to Services
            </Link>
            
            <span className="font-technical text-xs text-coral tracking-[0.25em] uppercase block mb-4">
              INDUSTRIAL WAREHOUSING & STORAGE
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-normal leading-[1] tracking-[-0.035em] text-primary uppercase mb-6 max-w-4xl">
              Industrial Warehousing
            </h1>
            <p className="font-body text-lg text-body-muted max-w-2xl leading-[1.6]">
              Secure warehousing and distribution services positioned near industrial zones and major maritime ports. Designed to support B2B manufacturing supply chains.
            </p>
          </div>
        </section>

        {/* Deep Green Telemetry Band */}
        <section className="py-20 bg-deep-green text-on-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                  FACILITY OVERVIEW
                </span>
                <h2 className="font-display text-2xl md:text-[36px] font-normal tracking-[-0.02em]">
                  Industrial storage and distribution infrastructure.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Total Footprint</h3>
                  <p className="text-sm text-white/60">Distributed across metropolitan logistics hubs and port areas.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">1.8M Sq. Ft.</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Fulfillment SLA</h3>
                  <p className="text-sm text-white/60">Efficient cargo receiving, processing, and dispatch handling times.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">Same-Day Dispatch</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Inventory Accuracy</h3>
                  <p className="text-sm text-white/60">Meticulous stock count protocols and ledger matching integrity.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">99.9% Accuracy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table (Cohere research-table style) */}
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-normal tracking-[-0.02em] text-primary mb-12">
              Service Specifications
            </h2>
            <div className="border-t border-hairline">
              {specs.map((spec) => (
                <div key={spec.key} className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-hairline items-baseline">
                  <div className="font-technical text-xs text-slate tracking-wider uppercase mb-2 md:mb-0">
                    {spec.key}
                  </div>
                  <div className="md:col-span-2 font-body text-sm sm:text-base text-ink">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-soft-stone border-t border-hairline text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="font-display text-3xl font-normal text-primary mb-6">
              Inquire Warehousing Solutions
            </h3>
            <p className="text-sm text-body-muted mb-8 max-w-md mx-auto">
              Connect with our warehousing team to discuss custom storage requirements, customs-bonded options, and distribution rates.
            </p>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-sm transition-all duration-150 active:scale-95 group"
            >
              <span className="btn-radiative-text">Request Warehousing Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
