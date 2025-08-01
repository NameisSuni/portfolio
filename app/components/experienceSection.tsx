import React from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const experienceProperties = [
  {
    title: "Software Engineer",
    company: "Avadhuta Technologies",
    duration: "Aug 2023 - May 2024",
    description:
      "At Avadhuta, I built responsive and interactive web apps using React, TypeScript, and Tailwind CSS. I worked closely with designers and backend developers, helped fix bugs, and made sure everything looked good and ran smoothly.",
  },
  {
    title: "Senior Quality Consultant",
    company: "Hinduja Global Solutions",
    duration: "May 2019 - June 2023",
    description:
      "As a Senior Quality Consultant at HGS, I focused on improving service quality and making sure processes ran right. I worked with teams, reviewed performance, and helped solve issues to keep things on track and running efficiently.",
  },
];
const ExperienceSection = () => {
  return (
    <AnimatedSection id="experience" className="section animation">
      <div className="flex flex-wrap py-20">
        <div className="w-full xl:w-10/12">
          <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
            EXPERIENCES
          </h2>
          <div className="timeline timeline-animated">
            {experienceProperties.map((experience, index) => (
              <div
                key={index}
                className="timeline-item relative pl-4 mb-20 timeline-item"
              >
                <span className="block mb-4 text-sm text-[var(--text-color)]">
                  {experience.duration}
                </span>
                <h3 className="text-4xl font-extrabold mb-2">
                  {experience.title}
                </h3>
                <p className="text-xl font-bold text-[var(--foreground)]">
                  {experience.company}
                </p>
                <p className="mt-2 text-base">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionNavigator current={3} total={10} nextSection="skills" />
    </AnimatedSection>
  );
};

export default ExperienceSection;
