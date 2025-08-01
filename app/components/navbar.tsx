"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navBarPages = [
  "top",
  "about",
  "experience",
  "skills",
  "services",
  "projects",
  "references",
  "facts",
  "testimonials",
  "contact",
];
const Navbar = () => {
  const [activePage, setActivePage] = useState("top");

  useEffect(() => {
    let hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      const sectionId = document.getElementById(id);
      if (sectionId) {
        sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
        setActivePage(id);
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    navBarPages.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      navBarPages.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header>
        <div className="header flex flex-wrap fixed top-0 right-0 left-0 z-50 items-center justify-between mx-auto py-4 h-20">
          <Link href={"/"} className="text-normal px-[30px]">
            your<span className="text-xl font-semibold">LOGO</span>
          </Link>
        </div>
      </header>
      <nav
        className="fixed z-50 md:block md:w-auto lg:w-[calc(25%-60px)] lg:h-max left-[calc(75%+30px)] top-[5rem] right-[30px] bottom-[66.286px]"
        id="navbar"
      >
        <ul id="sections-nav" className="nav sections-nav animate-navbar-in">
          {navBarPages.map((page, index) => (
            <li
              key={page}
              className={`mr-4 relative sections-nav-link ${
                activePage === page ? "active" : ""
              } `}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Link
                key={page}
                href={`#${page}`}
                className={`block py-[6px] px-4 pl-8 hover:text-[var(--text-color)] text-xl font-bold `}
                onClick={() => setActivePage(page)}
              >
                <span className="inline-block font-normal text-base w-[1.75rem]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {page.toUpperCase()}
              </Link>
            </li>
          ))}
          <div className="pt-12 pl-8 font-normal text-base">
            <p>nameissuni@gmail.com</p>
            <p>+91 9886068988</p>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
