import React from "react";
import ServiceCard from "./serviceCard";
import { ServiceCardProps } from "../types/commonTypes.types";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const cardProperties: ServiceCardProps[] = [
  {
    count: 1,
    title: "Web development",
    text: "I build websites that not only work great but feel great to use. Whether it’s a simple site or something more complex, I focus on clean code, speed, and making sure everything runs smoothly across all devices.",
  },
  {
    count: 2,
    title: "Web design",
    text: "Design is about more than just looks — I create layouts that are clear, modern, and easy to navigate. My goal is to make sure your visitors enjoy the experience and find what they need without any hassle.",
  },
  {
    count: 3,
    title: "Web consulting",
    text: "Not sure where to start or how to improve your current site? I’m here to help. I offer honest advice and simple explanations to guide you through the best choices for your website, whether it’s tech, design, or strategy.",
  },
];

const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="section animation">
      <div className="py-20">
        <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
          MY SERVICES
        </h2>
        <div className="animation-translate animation-item-2 flex flex-wrap mb-10 mx-[-30px]">
          {cardProperties.map((card, index) => (
            <div
              className="w-full md:w-1/3 flex flex-col px-[30px] text-2xl leading-[1.5]"
              key={index}
            >
              <ServiceCard
                key={card.count}
                count={card.count}
                title={card.title}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>
      <SectionNavigator current={5} total={10} nextSection="projects" />
    </AnimatedSection>
  );
};

export default ServicesSection;
