import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problems from "@/components/problems";
import Solutions from "@/components/solutions";
import Methodology from "@/components/methodology";
import Integrations from "@/components/integrations";
import Application from "@/components/application";
import Qualification from "@/components/qualification";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020202] text-[#F9F9F9] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <Methodology />
      <Integrations />
      <Application />
      <Qualification />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}