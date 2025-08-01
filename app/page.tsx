"use client";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import ExperienceSection from "./components/experienceSection";
import FactsSection from "./components/factsSection";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/projectsSection";
import ReferencesSection from "./components/referencesSection";
import ServicesSection from "./components/servicesSection";
import SkillsSection from "./components/skillsSection";
import TestimonialsSection from "./components/testimonialsSection";
import ThemePreview from "./components/themePreview";
import { ThemeProvider, useTheme } from "./context/themeContext";
import { useEffect } from "react";
import "./preview.css";

function ThemeStyle() {
  const { theme }: any = useTheme();
  const themeHref = `/dist/css/${theme}.css`;

  useEffect(() => {
    let link = document.getElementById("theme-css") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.id = "theme-css";
      document.head.appendChild(link);
    }

    link.href = themeHref;
  }, [theme, themeHref]);

  return null;
}

export default function Home() {
  return (
    <>
      <ThemeStyle />
      <div className="flex min-h-screen flex-col">
        <ThemePreview />
        <Navbar />
        <main>
          <div className="w-full max-w-[75%] px-[30px]">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-4/4">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <ReferencesSection />
                <FactsSection />
                <TestimonialsSection />
                <ContactSection />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
