import React from "react";
import { ServiceCardProps } from "../types/commonTypes.types";

const ServiceCard = ({ count, title, text }: ServiceCardProps) => {
  const [first, ...rest] = title.split(" ");
  const second = rest.join(" ");

  return (
    <div className="card max-w-sm rounded overflow-hidden py-6">
      <div className="mb-8 text-5xl leading-none text-[var(--footer-color)]">
        <strong className="card-counter">
          <span className="text-[64px]">{count}</span>
        </strong>
      </div>
      <div className="">
        <div className="font-extrabold text-[28px] mb-6">
          {first}
          <br />
          <span>{second}</span>
        </div>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
