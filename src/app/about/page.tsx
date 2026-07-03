import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star, Clock, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const timeline = [
    { year: "2012", title: "Corridor Launch", desc: "Abhishek Logistics initialized domestic inland road networks with a dispatch fleet of 50 container transport vehicles." },
    { year: "2016", title: "Maritime Integration", desc: "Launched ocean freight division, establishing custom clearance bonds and transit operations at Mumbai JNPT and Chennai Ports." },
    { year: "2020", title: "Pharmaceutical Cold Chain", desc: "Deployed active-monitoring refrigerated warehousing nodes to secure cold-chain corridors for oncology and biologics cargo." },
    { year: "2023", title: "Digital Command Center", desc: "Unveiled the GPS micro-tracking console API, giving clients complete satellite telemetry of cargo locations." },
    { year: "2026", title: "Net-Zero Fleet Expansion", desc: "Achieved 100% electrified last-mile operations across primary metropolitan industrial grids." },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-canvas min-h-screen">
        
        {/* Stark Editorial Hero Section */}
        <section className="py-24 border-b border-hairline relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-technical text-sm font-normal text-coral tracking-[0.25em] uppercase block mb-6 select-none">
              CORPORATE MANIFEST
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[84px] font-normal leading-[0.95] tracking-[-0.035em] text-primary uppercase max-w-4xl mb-8">
              The system for <br />
              <span className="text-[#a1a1a6]">global movement.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-body-muted max-w-2xl leading-[1.6]">
              Abhishek Logistics designs, builds, and runs the infrastructure that coordinates international freight. We replace logistics friction with telemetry precision.
            </p>
          </div>
        </section>

        {/* Deep Green Philosophy Block */}
        <section className="py-24 bg-deep-green text-on-dark relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="font-technical text-xs text-coral-soft tracking-[0.2em] uppercase block mb-3">
                OPERATIONAL VALUES
              </span>
              <h2 className="font-display text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.02em]">
                Logistics is a science of details.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">Extreme Reliability</h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  We schedule transit corridors with high-frequency intervals. Our dispatch networks run with 99.8% precision.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">Network Depth</h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  From air hubs to sea lanes and warehouse storage cells, our assets operate as an integrated global supply chain.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-[16px] p-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-coral-soft mb-6">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-3">Absolute Security</h3>
                <p className="text-sm text-white/70 leading-[1.5]">
                  Biometric clearances, active GPS tracking, and real-time alerts ensure complete chain of custody.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Manifest (Rule-separated research-table style) */}
        <section className="py-24 bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-[40px] font-normal tracking-[-0.02em] text-primary mb-16">
              Development Timeline
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
              Learn how our global dispatch command center can synchronize your supply chain operations today.
            </p>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-cohere-black text-on-primary font-body text-sm font-medium py-4 px-8 rounded-full shadow-sm transition-all duration-150 active:scale-95 group"
            >
              Initiate Quote Manifest
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
