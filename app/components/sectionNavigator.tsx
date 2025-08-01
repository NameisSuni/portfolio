import React from "react";
import { SectionNavigatorProps } from "../types/commonTypes.types";

const SectionNavigator: React.FC<SectionNavigatorProps> = ({
  current,
  total,
  nextSection,
}) => {
  const isLast = current >= total;

  const formatted = `${current.toString().padStart(2, "0")}/${total
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="block pb-4 animation-translate animation-item-4">
      {isLast ? (
        <span className="text-xs font-bold uppercase flex items-center gap-3">
          <span className="font-normal text-sm text-[var(--footer-color)]">
            {formatted}
          </span>
        </span>
      ) : (
        nextSection && (
          <a
            href={`#${nextSection}`}
            aria-label={`Go to ${nextSection} section`}
            className="section-next text-xs font-bold uppercase flex items-center gap-3"
          >
            <span className="font-normal text-sm text-[var(--footer-color)]">
              {formatted}
            </span>
            <span>Next Chapter</span>
            <span className="section-next-icon font-normal text-2xl">
              &#x21B4;
            </span>
          </a>
        )
      )}
    </div>
  );
};

export default SectionNavigator;
