import PortfolioHeader from "@/components/Portfolio/portfolioHeader";
import PortfolioGrid from "@/components/Portfolio/portfolioGrid";
//import Contact from "@/components/Aboutus/contact";
import Contact from "@/components/home/ContactNow";
export default function AboutUsPage() {
  return (
    <div className="bg-black text-white ">
      <PortfolioHeader />
      <div className=" mt-10 ">
        <PortfolioGrid />
        <div className="mt-10">
          <Contact />
        </div>
      
      </div>
    </div>
  );
}
