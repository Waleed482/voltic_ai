import AboutUs from "@/components/Aboutus/about";
import Mission from "@/components/Aboutus/mission"; // Correct casing
import Process from "@/components/Aboutus/process";
import Contact from "@/components/home/ContactNow";

export default function AboutUsPage() {
  return (
    <div className="bg-black text-white lg-rounded">
      <AboutUs />
      <div className="relative mt-48">
        <Mission />
        <div className="relative mt-28">
          <Process />
          <div className="relative mt-28">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
