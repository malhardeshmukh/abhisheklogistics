import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Capabilities from "@/components/Capabilities";
import DarkFeatureBand from "@/components/DarkFeatureBand";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustLogos />
        <Capabilities />
        <DarkFeatureBand />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
