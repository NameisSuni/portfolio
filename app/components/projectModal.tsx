"use client";
import React from "react";
import { ProjectModalProps } from "../types/commonTypes.types";

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  subTitle,
  tags,
  imageUrl,
  link,
  description,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="block hs-overlay w-full max-h-screen fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto inset-0 z-80 flex items-center justify-center bg-black/70"
      role="dialog"
      aria-modal="true"
    >
      <div className="size-full">
        <div className="bg-[var(--background)] opacity-85 h-screen shadow-xl overflow-x-hidden overflow-y-auto relative">
          <div className="flex justify-end items-center mx-auto p-4">
            <button
              type="button"
              className="text-5xl text-[var(--text-color)] hover:text-[var(--foreground)] cursor-pointer"
              aria-label="Close"
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          <div className="relative p-4 flex-auto">
            <article className="text-xl">
              <div className="mb-20">
                <h2 className="text-[4rem] font-extrabold mb-2">{title}</h2>
                <h3 className="mb-8 text-2xl font-normal text-[var(--foreground/60)]">
                  {subTitle}
                </h3>
                <p className="uppercase text-sm font-bold">{tags}</p>
              </div>
              <div className="flex flex-wrap mx-[-30px]">
                <div className="w-full lg:w-1/2 px-[30px]">
                  {description?.map((text, index) => (
                    <p key={index} className="mb-8">
                      {text}
                    </p>
                  ))}
                </div>
                <div className="w-full lg:w-1/2 px-[30px]">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                      className="max-w-full h-auto mb-20 vertical-center"
                      src={`./images/${imageUrl}`}
                      alt={title}
                    />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
