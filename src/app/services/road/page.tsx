import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Navigation, ShieldAlert, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RoadFreightPage() {
  const specs = [
    { key: "CARRIER CLASSIFICATION", value: "Class 8 heavy duty multi-axle / LTL & FTL consolidated trailers" },
    { key: "GEOFENCING MONITORING", value: "Active GPS satellite ping telemetry with <3s latency refresh" },
    { key: "CLIMATE TEMPERATURE RANGE", value: "Refrigerated / Reefer options: -20°C to +25°C automated logger" },
    { key: "PERMITTED CARGO CLASSIFICATIONS", value: "Hazardous Class 1-9, out-of-gauge machinery, high-value electronics" },
    { key: "REGIONAL TRANSIT CORES", value: "Mumbai, Delhi NCR, Bengaluru, Chennai, Kolkata" },
    { key: "EMERGENCY ROUTE REDIRECTS", value: "Dynamic route computed in <120 seconds on corridor blockages" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-canvas min-h-screen">
        
        {/* Stark Hero Section */}
        <section className="py-20 border-b border-hairline relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-1 text-xs font-technical text-slate hover:text-primary transition-colors uppercase tracking-wider mb-8">
              <ArrowLeft className="w-3 h-3" /> Back to Matrix
            </Link>
            
            <span className="font-technical text-xs text-coral tracking-[0.25em] uppercase block mb-4">
              CORRIDOR MODULE // ROUTE // INLAND
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-normal leading-[1] tracking-[-0.035em] text-primary uppercase mb-6 max-w-4xl">
              Precision Road Freight
            </h1>
            <p className="font-body text-lg text-body-muted max-w-2xl leading-[1.6]">
              Multi-modal trucking networks operating on high-frequency schedules across continental corridors. Dynamic re-routing coordinates supply chain safety.
            </p>
          </div>
        </section>

        {/* Dark Navy Telemetry Band */}
        <section className="py-20 bg-dark-navy text-on-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                  SYSTEM OVERVIEW
                </span>
                <h2 className="font-display text-2xl md:text-[36px] font-normal tracking-[-0.02em]">
                  Real-time transit optimization & corridor telemetry.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Fleet Integration</h3>
                  <p className="text-sm text-white/60">Over 1,240 dedicated multi-axle trucks synced via cloud telemetry dispatch.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">1,240+</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Transit Precision</h3>
                  <p className="text-sm text-white/60">SLA schedule accuracy kept using predictive routing algorithms.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">99.8%</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Incident Latency</h3>
                  <p className="text-sm text-white/60">Security and accident rerouting protocols executed immediately.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">&lt;120s</span>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table (Cohere research-table style) */}
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-normal tracking-[-0.02em] text-primary mb-12">
              Technical Specifications manifest
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
              Initiate Corridor Route Protocol
            </h3>
            <p className="text-sm text-body-muted mb-8 max-w-md mx-auto">
              Configure parameters, specify cargo types, and obtain a certified road freight dispatch quote in minutes.
            </p>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-sm transition-all duration-150 active:scale-95 group"
            >
              Configure Road Corridor
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
