"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";
const factsProperties = [
  {
    label: "Coffees / per day",
    value: 6,
  },
  {
    label: "Launched websites",
    value: 64,
  },
  {
    label: "Lines of code",
    value: 12000,
  },
  {
    label: "Happy Clients",
    value: 160,
  },
];
const FactsSection = () => {
  const [counts, setCounts] = useState(factsProperties.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const factsSection = document.getElementById("facts");
    if (!factsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCounts();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(factsSection);

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newCounts = factsProperties.map((fact, i) =>
        Math.floor(fact.value * progress)
      );
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };
  return (
    <AnimatedSection id="facts" className="section animation">
      <div className="py-20">
        <h2 className="font-extrabold text-[4rem] mb-16 animation-translate-overline animation-item-1">
          FACTS
        </h2>
        <div className="flex flex-wrap mx-[-30px] animation-translate animation-item-2">
          {factsProperties.map((fact, index) => (
            <div
              className="w-full md:w-1/2 lg:w-1/4 flex flex-col px-[30px] text-5xl font-bold mb-6 lg:mb-0"
              key={index}
            >
              <span className="uppercase text-sm text-[var(--text-color)]">
                {fact.label}
              </span>
              <span>{counts[index]}</span>
            </div>
          ))}
        </div>
      </div>
      <SectionNavigator current={8} total={10} nextSection="testimonials" />
    </AnimatedSection>
  );
};

export default FactsSection;
