import Image from "next/image";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ToolsBar from "@/components/ToolsBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <Image
        src="/decorations/pink-star-1.svg"
        alt=""
        width={97}
        height={81}
        className="absolute top-0 right-0 pointer-events-none hidden lg:block"
      />
      <Image
        src="/decorations/pink-star-2.svg"
        alt=""
        width={84}
        height={128}
        className="absolute top-[1086px] left-0 pointer-events-none hidden lg:block"
      />
      <Image
        src="/decorations/pink-star-3.svg"
        alt=""
        width={84}
        height={128}
        className="absolute top-[1495px] right-0 pointer-events-none hidden lg:block"
      />
      <Image
        src="/decorations/pink-star-4.svg"
        alt=""
        width={151}
        height={128}
        className="absolute top-[5324px] right-[920px] pointer-events-none hidden lg:block"
      />

      <Navigation />
      
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-24 xl:px-32 pt-28 lg:pt-36">
        <Hero />
      </div>

      <ToolsBar />

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-24 xl:px-32">
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
