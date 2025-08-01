import React from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";
import { useTheme } from "../context/themeContext";
import { ReferenceProps, Theme } from "../types/commonTypes.types";

const referenceProperties = [
  {
    link: "#",
    imageBlack: "reference_1_b.svg",
    imageWhite: "reference_1.svg",
    alt: "reference 1",
  },
  {
    link: "#",
    imageBlack: "reference_2_b.svg",
    imageWhite: "reference_2.svg",
    alt: "reference 2",
  },
  {
    link: "#",
    imageBlack: "reference_3_b.svg",
    imageWhite: "reference_3.svg",
    alt: "reference 3",
  },
  {
    link: "#",
    imageBlack: "reference_4_b.svg",
    imageWhite: "reference_4.svg",
    alt: "reference 4",
  },
  {
    link: "#",
    imageBlack: "reference_5_b.svg",
    imageWhite: "reference_5.svg",
    alt: "reference 5",
  },
  {
    link: "#",
    imageBlack: "reference_6_b.svg",
    imageWhite: "reference_6.svg",
    alt: "reference 6",
  },
  {
    link: "#",
    imageBlack: "reference_7_b.svg",
    imageWhite: "reference_7.svg",
    alt: "reference 7",
  },
  {
    link: "#",
    imageBlack: "reference_8_b.svg",
    imageWhite: "reference_8.svg",
    alt: "reference 8",
  },
];

const ReferencesSection = () => {
  const { theme } = useTheme();

  function getImageForTheme(theme: Theme, reference: ReferenceProps) {
    return theme === "theme-black"
      ? reference.imageWhite
      : reference.imageBlack;
  }

  return (
    <AnimatedSection id="references" className="section animation">
      <div className="py-20">
        <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
          REFERENCES
        </h2>
        <div className="animation-translate animation-item-2 flex flex-wrap mx-[-30px]">
          {referenceProperties.map((reference, index) => (
            <div
              key={index}
              className="w-1/2 lg:w-1/4 flex flex-col px-[30px] text-5xl font-bold"
            >
              <a href={reference.link} className="logo-link">
                <img
                  src={`./images/${getImageForTheme(theme, reference)}`}
                  alt={reference.alt}
                  className="max-w-full max-h-full w-auto h-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <SectionNavigator current={7} total={10} nextSection="facts" />
    </AnimatedSection>
  );
};

export default ReferencesSection;
