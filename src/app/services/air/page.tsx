import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Zap, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AirFreightPage() {
  const specs = [
    { key: "AIR TRANSIT TYPES", value: "Next-Flight-Out (NFO) / Priority Express Air Freight / Scheduled Charters" },
    { key: "PHARMA & COLD CHAIN", value: "GDP-compliant temperature-controlled air freight (2°C to 8°C / -20°C)" },
    { key: "AIR CARGO TERMINALS", value: "Direct access to major Indian airport hubs (BOM, DEL, BLR, MAA) and 180+ global airports" },
    { key: "CUSTOMS CLEARANCE SLA", value: "Pre-filed electronic customs manifests ensuring clearance under 4 hours at major cargo terminals" },
    { key: "SPECIAL HANDLING", value: "Automotive assemblies, high-value electronics, DGR (Dangerous Goods), and out-of-gauge parts" },
    { key: "SPACE ALLOCATIONS", value: "Guaranteed booking slots with leading global airline cargo carriers" },
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
              GLOBAL EXPRESS AIR FREIGHT
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-normal leading-[1] tracking-[-0.035em] text-primary uppercase mb-6 max-w-4xl">
              Expedited Air Cargo
            </h1>
            <p className="font-body text-lg text-body-muted max-w-2xl leading-[1.6]">
              Priority air cargo solutions for critical components, automotive exports, pharmaceuticals, and high-value electronics. Accelerating Indian EXIM cargo to global trade centers.
            </p>
          </div>
        </section>

        {/* Dark Navy Telemetry Band */}
        <section className="py-20 bg-dark-navy text-on-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                  SERVICE OVERVIEW
                </span>
                <h2 className="font-display text-2xl md:text-[36px] font-normal tracking-[-0.02em]">
                  Express global connectivity for high-value cargo.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Plane className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Global Airports</h3>
                  <p className="text-sm text-white/60">Connecting major Indian export hubs directly with trade destinations worldwide.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">180+ Airports</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Customs SLA</h3>
                  <p className="text-sm text-white/60">Digital documentation pre-filing for rapid cargo clearance.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">&lt;4 Hours</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Cold Chain Compliance</h3>
                  <p className="text-sm text-white/60">Strictly temperature-controlled logistics for sensitive pharmaceuticals.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">GDP Certified</span>
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
              Request Air Cargo Quote
            </h3>
            <p className="text-sm text-body-muted mb-8 max-w-md mx-auto">
              Discuss priority freight options, temperature-controlled shipments, and custom rates with our air cargo specialists.
            </p>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-sm transition-all duration-150 active:scale-95 group"
            >
              <span className="btn-radiative-text">Request Air Freight Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
