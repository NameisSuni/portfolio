"use client";
import React, { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  id: string;
  children: React.ReactNode;
  threshold?: number;
  className?: string;
  once?: boolean; // If true, animation triggers only once
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  children,
  threshold = 0.3,
  className = "",
  once = true,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${className}  ${inView ? "interaction-in" : ""}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
