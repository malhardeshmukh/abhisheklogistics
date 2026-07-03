import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work & Operations Log | Abhishek Logistics",
  description: "Explore our real-world logistics executions: ocean container handling, air cargo consolidations, specialized heavy haulage, bonded warehousing, and EXIM custom brokerage across Indian trade corridors.",
  keywords: ["Logistics Operations", "Case Studies", "Supply Chain Portfolio", "Freight Projects", "Abhishek Logistics Work"],
};

export default function OurWorkPage() {
  return (
    <>
      <Navbar />
      <OurWorkClient />
      <Footer />
    </>
  );
}
