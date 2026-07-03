import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star, Clock, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const timeline = [
    { year: "2012", title: "Company Founded", desc: "Abhishek Logistics initiated domestic container transport and road cargo services with a fleet of 50 heavy commercial vehicles." },
    { year: "2016", title: "Ocean Freight Launch", desc: "Established our ocean freight division, setting up licensed customs brokerage and container operations at JNPT (Mumbai) and Chennai Ports." },
    { year: "2020", title: "Cold Chain Warehousing", desc: "Commissioned temperature-controlled warehousing facilities to support pharmaceutical and chemical manufacturers in India." },
    { year: "2023", title: "Pan-India Port Expansion", desc: "Expanded services across Gujarat (Mundra Port), West Bengal (Kolkata Port), and major Inland Container Depots (ICDs) in North India." },
    { year: "2026", title: "Comprehensive EXIM Solutions", desc: "Integrated customs bonding, port logistics, and multi-modal freight transport under a unified corporate structure." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-canvas min-h-screen">
        
        {/* Stark Editorial Hero Section */}
        <section className="py-24 border-b border-hairline relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-technical text-sm font-normal text-coral tracking-[0.25em] uppercase block mb-6 select-none">
              ABOUT ABHISHEK LOGISTICS
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[84px] font-normal leading-[0.95] tracking-[-0.035em] text-primary uppercase max-w-4xl mb-8">
              Reliable infrastructure for <br />
              <span className="text-[#a1a1a6]">global trade.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-body-muted max-w-2xl leading-[1.6]">
              Abhishek Logistics is a premier B2B logistics partner for Indian manufacturing and export sectors, providing end-to-end freight forwarding, customs clearance, and inland transport.
            </p>
          </div>
        </section>

        {/* Deep Green Philosophy Block */}
        <section className="py-24 bg-deep-green text-on-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                OUR CORE PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.02em]">
                Reliability and integrity in cargo transport.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">Strict Reliability</h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  We maintain strict schedules and follow through on commitments to keep your manufacturing supply chain running smoothly.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">Pan-India Network</h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Our network covers major Indian ports, airports, and inland depots, offering complete domestic and global connectivity.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">Total Safety</h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  We prioritize cargo safety through continuous vehicle tracking, customs clearance compliance, and secure port-bonded depots.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Manifest (Rule-separated research-table style) */}
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-[40px] font-normal tracking-[-0.02em] text-primary mb-16">
              Milestone Timeline
            </h2>
            
            <div className="border-t border-hairline">
              {timeline.map((item) => (
                <div key={item.year} className="grid grid-cols-1 md:grid-cols-4 py-8 border-b border-hairline items-baseline">
                  <div className="font-technical text-xl font-bold text-coral mb-2 md:mb-0">
                    {item.year}
                  </div>
                  <div className="font-display text-lg font-normal text-primary mb-2 md:mb-0">
                    {item.title}
                  </div>
                  <div className="md:col-span-2 font-body text-sm sm:text-base text-body-muted">
                    {item.desc}
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
              Partner with Abhishek Logistics
            </h3>
            <p className="text-sm text-body-muted mb-8 max-w-md mx-auto">
              Learn how our B2B cargo logistics and customs clearance services can optimize your export-import operations.
            </p>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-sm transition-all duration-150 active:scale-95 group"
            >
              <span className="btn-radiative-text">Request Freight Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
