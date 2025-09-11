import Image from "next/image";
import React from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const HeroSection = () => {
  return (
    <AnimatedSection id="top" className="section animation">
      <div className="gird gird-cols-1 lg:grid-cols-12 py-20">
        <div className="gird-span-5 pt-12 pt-lg-8 pb-0 mb-0">
          <Image
            src="./images/sunil_avatar.jpg"
            alt="sunil image"
            width={160}
            height={160}
            className="animation-translate animation-item-1 rounded-[5rem] mb-16 border-2 border-black"
          />
          <h1 className="display-1 display-animated display-animated-in animation-translate animation-item-2 text-4xl lg:text-8xl font-extrabold">
            Sunilkumar
            <br />
            Namala
          </h1>
          <p className="animation-translate animation-item-3 text-base font-bold mb">
            Software Engineer{" "}
          </p>
        </div>
      </div>
      <SectionNavigator current={1} total={10} nextSection="about" />
    </AnimatedSection>
  );
};

export default HeroSection;
