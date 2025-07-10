import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { PlaneBackground } from "../components/PlaneBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Cloud } from "../components/Cloud";
import cloudImg from "../assets/cloud.png";
import cloudImg2 from "../assets/cloud2.png";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle Button */}
      <ThemeToggle />
      {/* Background Effect */}
      <StarBackground />
      <PlaneBackground />
      <Cloud cloudImg={cloudImg} top="10%" left="10%" width={300} opacity={0.9} />
      <Cloud cloudImg={cloudImg2} top="60%" left="40%" width={200} opacity={0.9} />
      <Cloud cloudImg={cloudImg} top="70%" left="60%" width={300} opacity={0.9}  />
      {/* Navbar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}

    </div>
  );
}