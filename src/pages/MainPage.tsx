import AboutMeSection from "../component/AboutMeSection";
import ContactSection from "../component/ContactSection";
import ExperienceSection from "../component/ExperienceSection";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/NavBar";
import PortfolioSection from "../component/PortfolioSection";
import SkilssSection from "../component/SkillsSection";
import TestimonialSection from "../component/TestimonialsSection";

function MainPage() {
  return (
    <div>
      <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20">
        <Navbar />
      </div>
      <div className="pt-15 md:pt-20">
        <HeroSection />
        <AboutMeSection />
        <SkilssSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default MainPage;
