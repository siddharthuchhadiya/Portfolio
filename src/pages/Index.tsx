import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import FAQSection from "@/components/portfolio/FAQSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
