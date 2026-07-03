import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Anchor, Globe2, Ship, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OceanFreightPage() {
  const specs = [
    { key: "CONTAINER FREIGHT MODES", value: "Full Container Load (FCL) / Less than Container Load (LCL) / Breakbulk and Over Dimensional Cargo (ODC)" },
    { key: "EXIM PORT GATEWAYS", value: "Direct service links through Nhava Sheva (JNPT), Mundra Port, Chennai Port, Kolkata Port, and Cochin Port" },
    { key: "SHIPPING LINE PARTNERS", value: "Direct volume contracts with leading global ocean carriers (2M, Ocean Alliance, THE Alliance)" },
    { key: "CUSTOMS CLEARANCE & CFS", value: "On-site customs brokerage, cargo consolidation, and Container Freight Station (CFS) operations" },
    { key: "TRANSIT TIMELINES", value: "Predictable schedules with weekly departures on major maritime trade lanes" },
    { key: "GLOBAL TRADE LANES", value: "Direct ocean sailings connecting India with key destinations: Europe, Middle East, Southeast Asia, Far East, and USA" },
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
              GLOBAL MARITIME SHIPPING
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-normal leading-[1] tracking-[-0.035em] text-primary uppercase mb-6 max-w-4xl">
              Ocean Freight Solutions
            </h1>
            <p className="font-body text-lg text-body-muted max-w-2xl leading-[1.6]">
              Full Container Load (FCL) and Less than Container Load (LCL) logistics serving all major sea ports. Specialized customs clearing, bonded container handling, and inland depot transport.
            </p>
          </div>
        </section>

        {/* Deep Green Telemetry Band */}
        <section className="py-20 bg-deep-green text-on-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                  PORT SERVICES
                </span>
                <h2 className="font-display text-2xl md:text-[36px] font-normal tracking-[-0.02em]">
                  Connecting Indian manufacturing with global sea trade lanes.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Ocean Gateways</h3>
                  <p className="text-sm text-white/60">Fully operational custom clearance and logistics support at India's 5 key container ports.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">5 Major Ports</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Ship className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">Annual Cargo Vol</h3>
                  <p className="text-sm text-white/60">High-volume ocean shipping and consolidated LCL cargo managed seamlessly.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">240,000+ TEU</span>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-normal mb-2">EXIM Customs Brokerage</h3>
                  <p className="text-sm text-white/60">Dedicated clearing teams ensuring efficient customs release at ports and ICDs.</p>
                </div>
                <span className="font-technical text-2xl font-bold text-coral-soft mt-8">Port CFS Presence</span>
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
              Request Ocean Shipping Quote
            </h3>
            <p className="text-sm text-body-muted mb-8 max-w-md mx-auto">
              Select your origin port, target destination, FCL/LCL options, and let our freight forwarding team handle the booking.
            </p>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-sm transition-all duration-150 active:scale-95 group"
            >
              <span className="btn-radiative-text">Request Ocean Freight Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
