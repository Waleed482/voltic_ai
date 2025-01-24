
import BrandBar from "@/components/home/BrandBar";
import ContactNow from "@/components/home/ContactNow";
import HeroSection from "@/components/home/HeroSection";
import MarqureeBar from "@/components/home/MarqureeBar";
import MotivePara from "@/components/home/MotivePara";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import Slider from "@/components/home/Slider";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <MarqureeBar/>
    <Services/>
    <MotivePara/>
    <Portfolio/>
    <Slider/>
    <BrandBar/>
    <ContactNow/>
  
       
    </>
  );
}
