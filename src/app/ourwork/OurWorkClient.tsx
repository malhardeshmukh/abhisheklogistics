"use client";

import { useState, useEffect } from "react";
import { animate } from "animejs";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface WorkItem {
  id: string;
  image: string;
  title: string;
  category: string;
  location: string;
  status: "Active" | "Completed";
  description: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    id: "1",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.10-PM.jpeg",
    title: "Automated Conveyor Sortation Hub",
    category: "Warehousing",
    location: "Nhava Sheva Fulfilment Center",
    status: "Active",
    description: "High-speed automated belt sorters and multi-tier vertical storage integration inside our main distribution warehouse, reducing fulfillment cycle time by 40%."
  },
  {
    id: "2",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.16-PM.jpeg",
    title: "Intermodal Container Yard Operations",
    category: "EXIM & Ports",
    location: "Mundra Port Terminal",
    status: "Completed",
    description: "Coordination of heavy containerized freight transfer from ocean vessels to rail freight lines and long-haul road fleets for inland delivery."
  },
  {
    id: "3",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.18-PM.jpeg",
    title: "Heavy-Haul Industrial Project Cargo",
    category: "Road Freight",
    location: "Mumbai-Delhi Expressway Corridor",
    status: "Completed",
    description: "Successful transport of over-dimensional chemical processing components on specialized multi-axle trailers with custom escort logistics."
  },
  {
    id: "4",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.21-PM.jpeg",
    title: "Air Freight Consolidation & Export",
    category: "Air Cargo",
    location: "Mumbai Air Cargo Terminal",
    status: "Active",
    description: "Securing, scanning, and palletizing high-value pharmaceutical active ingredients and automotive components for express global air freight routes."
  },
  {
    id: "5",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.24-PM.jpeg",
    title: "Customs-Bonded Temperature Warehousing",
    category: "Warehousing",
    location: "Chennai Bonded Logistics Park",
    status: "Active",
    description: "Operations within our strict regulatory temperature-controlled warehouse, hosting import inventory under continuous customs supervision."
  },
  {
    id: "6",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.27-PM.jpeg",
    title: "Ocean Carrier Stowage & Lashing",
    category: "Maritime Shipping",
    location: "JNPT Container Terminal",
    status: "Completed",
    description: "Precision supervision of container stowage and secure block-lashings on a container ship departing JNPT for major European trade routes."
  },
  {
    id: "7",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.29-PM.jpeg",
    title: "Cold Chain Reefer Fleet Dispatch",
    category: "Road Freight",
    location: "Nashik to Mumbai Port Route",
    status: "Active",
    description: "Deploying temperature-logged reefer container trucks for agricultural exports, guaranteeing cold-chain continuity from source to vessel."
  },
  {
    id: "8",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.32-PM.jpeg",
    title: "EXIM Custom Brokerage Inspections",
    category: "EXIM & Ports",
    location: "Nhava Sheva CFS Center",
    status: "Completed",
    description: "Abhishek Logistics clearing agents executing visual cargo inspection, customs duty assessments, and immediate gate-out authorization."
  },
  {
    id: "9",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.34-PM.jpeg",
    title: "Industrial Bulk Discharge Operations",
    category: "Maritime Shipping",
    location: "Chennai Port Bulk Terminal",
    status: "Completed",
    description: "Coordinating continuous grab crane bulk discharge of raw mineral inputs from dry-bulk carriers to specialized rail hoppers."
  },
  {
    id: "10",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.39-PM.jpeg",
    title: "National FTL Carrier Staging",
    category: "Road Freight",
    location: "Mundra Port Logistics Hub",
    status: "Active",
    description: "Full Truck Load (FTL) vehicle prep and staging before launch of cross-country routes, backed by GPS-enabled security systems."
  },
  {
    id: "11",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.42-PM.jpeg",
    title: "Hazardous Chemical Handling & Packing",
    category: "EXIM & Ports",
    location: "JNPT Bonded CFS Depot",
    status: "Completed",
    description: "Safe handling, packing, and labeling of dangerous goods Class 9 cargo in compliance with International Maritime Dangerous Goods (IMDG) standards."
  },
  {
    id: "12",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.45-PM.jpeg",
    title: "Fulfillment Center Dispatch & Last-Mile",
    category: "Road Freight",
    location: "Delhi-NCR Logistics Hub",
    status: "Active",
    description: "Urban delivery operations, coordinating high-volume regional cargo dispatch from core fulfillment hubs to commercial networks."
  },
  {
    id: "13",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.49-PM.jpeg",
    title: "CFS LCL Container Consolidation",
    category: "EXIM & Ports",
    location: "Kolkata Port CFS",
    status: "Active",
    description: "Sorting and consolidating less-than-container-load (LCL) shipments from multiple manufacturers into single export containers."
  },
  {
    id: "14",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.54-PM.jpeg",
    title: "Cross-Docking & Distribution Staging",
    category: "Warehousing",
    location: "Bengaluru Logistics Node",
    status: "Active",
    description: "High-volume transloading center facilitating rapid sortation and cross-dock dispatch, eliminating overnight storage costs."
  },
  {
    id: "15",
    image: "/ourwork/WhatsApp-Image-2026-03-03-at-2.50.56-PM.jpeg",
    title: "Emergency Charter Air Freight",
    category: "Air Cargo",
    location: "Delhi IGI Airport Cargo",
    status: "Completed",
    description: "Urgent air charter arrangement for critical manufacturing equipment to prevent line-shutdowns for a global automotive client."
  }
];

const FILTERS = ["All", "Maritime Shipping", "Air Cargo", "Road Freight", "Warehousing", "EXIM & Ports"];

export default function OurWorkClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState<WorkItem[]>(WORK_ITEMS);

  // Initial load stagger animation & filter switch entry animation
  useEffect(() => {
    animate(".work-card", {
      opacity: [0, 1],
      scale: [0.96, 1],
      translateY: [25, 0],
      duration: 500,
      delay: (el, i) => (i || 0) * 45,
      ease: "outQuad"
    });
  }, [filteredItems]);

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;

    // 1. Exit animation for current items
    animate(".work-card", {
      opacity: 0,
      scale: 0.96,
      translateY: 20,
      duration: 220,
      ease: "inQuad",
      complete: () => {
        // 2. Once animation is done, filter the state
        setActiveFilter(filter);
        if (filter === "All") {
          setFilteredItems(WORK_ITEMS);
        } else if (filter === "EXIM & Ports") {
          setFilteredItems(
            WORK_ITEMS.filter(
              (item) => item.category === "EXIM & Ports" || item.category === "EXIM Services"
            )
          );
        } else {
          setFilteredItems(WORK_ITEMS.filter((item) => item.category === filter));
        }
      }
    });
  };

  // Anime.js hover effect handlers
  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1.015,
      translateY: -6,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
      borderColor: "#ff7759", // coral color
      duration: 250,
      ease: "outQuad"
    });
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1.0,
      translateY: 0,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
      borderColor: "#e5e7eb", // default border border-light / card border
      duration: 250,
      ease: "outQuad"
    });
  };

  return (
    <main className="bg-canvas min-h-screen">
      {/* Editorial Hero Banner */}
      <section className="py-20 md:py-28 border-b border-hairline bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-technical text-slate hover:text-primary transition-colors uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>

          <span className="font-technical text-xs text-coral tracking-[0.25em] uppercase block mb-4">
            OPERATIONS LOGBOOK
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-normal leading-[1] tracking-[-0.03em] text-primary uppercase max-w-4xl mb-6">
            Supply Chain <br />
            <span className="text-muted">In Action.</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-body-muted max-w-2xl leading-[1.6]">
            Real-world operations log of Abhishek Logistics across Indian port networks, cross-dock warehouses, FTL freight corridors, and customs clearing terminals.
          </p>
        </div>
      </section>

      {/* Filter Tabs Block */}
      <section className="py-8 border-b border-hairline sticky top-20 z-40 bg-canvas/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-4 py-2 text-xs font-technical rounded-full border transition-all duration-150 select-none uppercase tracking-wider ${
                    isActive
                      ? "bg-primary border-primary text-on-primary font-bold shadow-sm"
                      : "border-hairline bg-canvas text-slate hover:border-slate hover:text-primary"
                  }`}
                >
                  [{filter}]
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-hairline rounded-[16px]">
              <span className="font-technical text-xs text-slate block mb-2">NO RECORDS FOUND</span>
              <p className="text-sm font-body text-body-muted">No operations matching the selected filter currently exist in the database.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                  className="work-card bg-canvas border border-border-light rounded-[16px] overflow-hidden flex flex-col justify-between group transition-shadow duration-300"
                  style={{ transformOrigin: "center bottom" }}
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-soft-stone/20 border-b border-border-light">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 pb-8">
                      <h3 className="font-display text-xl font-normal text-primary mb-3 leading-snug group-hover:text-coral transition-colors uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-body text-[#616161] leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Technical Overview Statistics Section */}
      <section className="py-20 bg-soft-stone border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border-t border-hairline pt-6">
              <span className="font-technical text-xs text-slate block mb-2">OPERATIONAL YARDS</span>
              <span className="font-display text-3xl font-normal text-primary">05 PORTS</span>
            </div>
            <div className="border-t border-hairline pt-6">
              <span className="font-technical text-xs text-slate block mb-2">FTL CORRIDORS</span>
              <span className="font-display text-3xl font-normal text-primary">12 ROUTING</span>
            </div>
            <div className="border-t border-hairline pt-6">
              <span className="font-technical text-xs text-slate block mb-2">WAREHOUSE NODES</span>
              <span className="font-display text-3xl font-normal text-primary">145k SQ.FT</span>
            </div>
            <div className="border-t border-hairline pt-6">
              <span className="font-technical text-xs text-slate block mb-2">EXIM RECORD COUNT</span>
              <span className="font-display text-3xl font-normal text-primary">15 PROJECTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote Call to Action */}
      <section className="py-24 bg-primary text-on-dark text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-display text-3xl sm:text-4xl font-normal text-white uppercase mb-6 tracking-tight">
            Design Your Freight Matrix
          </h3>
          <p className="text-sm text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            Configure custom routes, choose intermodal shipping modes, and set up customs clearance services with our operations desk.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-coral hover:text-white font-body text-sm font-semibold py-4 px-8 rounded-full shadow-md transition-all duration-150 active:scale-95 group"
          >
            <span className="tracking-wide">Deploy Supply Chain Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
