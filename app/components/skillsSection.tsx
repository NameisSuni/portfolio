import React from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 70 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 65 },
];
const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="section animation">
      <div className="py-20">
        <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
          SKILLS
        </h2>
        <div className="animation-translate animation-item-2 flex flex-wrap mb-10 mx-[-30px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex flex-col px-[30px] text-base"
            >
              <div className="mb-9">
                <strong className="font-bold uppercase text-base">
                  {skill.name}
                </strong>
                <div className="progress progress-animated w-full rounded-full h-[2px] mt-3">
                  <div
                    className="progress-bar h-[2px]"
                    style={{ width: `${skill.level}%` }}
                    role="progress-bar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionNavigator current={4} total={10} nextSection="services" />
    </AnimatedSection>
  );
};

export default SkillsSection;
