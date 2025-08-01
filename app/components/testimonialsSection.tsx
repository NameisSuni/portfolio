"use client";
import React, { useEffect, useState } from "react";
import SectionNavigator from "./sectionNavigator";
import AnimatedSection from "../hooks/animatedSection";

const testimonialsProperties = [
  {
    name: "Alice Jones",
    role: "E-Shop Owner",
    company: "www.eshop.com",
    imageUrl: "https://i.pravatar.cc/100?img=32",
    testimonialText:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    name: "Bob Smith",
    role: "Freelance Developer",
    company: "www.bobsmith.dev",
    imageUrl: "https://i.pravatar.cc/100?img=33",
    testimonialText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    name: "Charlie Brown",
    role: "Tech Entrepreneur",
    company: "www.charliebrown.tech",
    imageUrl: "https://i.pravatar.cc/100?img=37",
    testimonialText:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonialsProperties[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsProperties.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsProperties.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <AnimatedSection id="testimonials" className="section animation">
      <div className="py-20">
        <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
          TESTIMONIALS
        </h2>
        <div className="animation-translate animation-item-2 flex flex-col md:flex-row items-start gap-8">
          <img
            src={testimonial.imageUrl}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-3xl font-extrabold mb-2">{testimonial.name}</h3>
            <h4 className="text-base font-extrabold mb-8 text-[var(--text-color)] uppercase tracking-wide">
              {testimonial.role} —{" "}
              <a
                href="#"
                className="hover:text-[var(--foreground)] font-normal text-xs"
              >
                {testimonial.company}
              </a>
            </h4>
            <p className="text-xl mb-4 font-normal">
              {testimonial.testimonialText}
            </p>
          </div>
        </div>

        <div className="animation-translate animation-item-2 mt-16 flex justify-between items-center">
          <button
            className="text-3xl font-light hover:cursor-pointer"
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="w-20 h-1 bg-[var(--border-color)] relative">
            <div
              className="absolute h-1 bg-[var(--hover-color)] transition-all duration-300"
              style={{
                width: `${100 / testimonialsProperties.length}%`,
                left: `${
                  (100 / testimonialsProperties.length) * currentIndex
                }%`,
              }}
            />
          </div>
          <button
            className="text-3xl font-light hover:cursor-pointer"
            onClick={nextSlide}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
      <SectionNavigator current={9} total={10} nextSection="contact" />
    </AnimatedSection>
  );
};

export default TestimonialsSection;
