import React from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="section animation">
      <div className="flex flex-wrap py-20">
        <div className="w-full xl:w-5/6">
          <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
            ABOUT ME
          </h2>
          <article className="animation-translate animation-item-2 text-xl font-normal grid gap-y-5">
            <p>
              Hi, I'm Sunilkumar — a frontend developer who loves turning ideas
              into clean, responsive, and user-friendly websites. Over the past
              year, I've worked with teams at Avadhuta Technologies, building
              web apps using React, TypeScript, Tailwind CSS, and integrating
              APIs to make things work smoothly behind the scenes. I enjoy
              solving bugs, improving performance, and collaborating with
              designers and backend developers to bring a product to life.
            </p>
            <p>
              I come from a non-traditional background with a commerce degree
              and an Executive MBA in IT, but coding quickly became my passion.
              I'm always learning and growing, especially in full-stack
              development, and I'm excited about opportunities where I can
              contribute to meaningful products — especially in SaaS or
              tech-driven companies. More than anything, I care about writing
              good code, working with good people, and building things that make
              a difference.
            </p>
          </article>
        </div>
      </div>
      <SectionNavigator current={2} total={10} nextSection="experience" />
    </AnimatedSection>
  );
};

export default AboutSection;
