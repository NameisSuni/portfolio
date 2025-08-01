"use client";
import React from "react";
import SectionNavigator from "./sectionNavigator";
import { useInViewAnimation } from "../hooks/useInteractionObserver";

const ContactSection = () => {
  const { ref, isInView } = useInViewAnimation();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    message: false,
  });
  const { name, email, message } = data;

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    console.log("Form submitted:", data);
    setData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`section animation ${isInView ? "interaction-in" : ""}`}
    >
      <div className="py-20">
        <h2 className="animation-translate-overline animation-item-1 font-extrabold text-[4rem] mb-16">
          CONTACT
        </h2>
        <div className="animation-translate animation-item-2 flex flex-wrap mb-10 mx-[-30px]">
          <div className="w-full md:w-1/3 flex flex-col px-[30px] py-2 text-2xl leading-[1.5]">
            <strong className="uppercase mb-6 font-bold text-sm text-[var(--text-color)]">
              Stay in touch
            </strong>
            <a href="mailto:nameissuni@gmail.com" className="hover:underline">
              nameissuni@gmail.com
            </a>
            <a href="tel:+919886068988" className="hover:underline">
              +91 9886068988
            </a>
          </div>
          <div className="w-full md:w-1/3 flex flex-col px-[30px] py-2 text-2xl leading-[1.5]">
            <strong className="uppercase mb-6 font-bold text-sm text-[var(--text-color)]">
              Social
            </strong>
            <a
              href="https://www.linkedin.com/in/sunilkumarnamala/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/NameisSuni"
              target="_blank"
              className="hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.behance.net/sunilchowdary"
              target="_blank"
              className="hover:underline"
            >
              Behance
            </a>
          </div>
          <div className="w-full md:w-1/3 flex flex-col px-[30px] py-2 text-2xl leading-[1.5]">
            <strong className="uppercase mb-6 font-bold text-sm text-[var(--text-color)]">
              Address
            </strong>
            <p>
              1234 Houston Street
              <br />
              Bangalore
              <br />
              IN 123456
            </p>
          </div>
        </div>
        <div className="w-full xl:w-9/12">
          <div>
            <h2 className="animation-translate animation-item-3 mb-12 font-extrabold text-[28px] uppercase">
              Leave a message
            </h2>
            <form
              className="animation-translate animation-item-4"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
                <div className="mb-10 text-sm">
                  <label htmlFor="name" className="uppercase font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`border-b-2 py-3 w-full font-normal ${
                      errors.name
                        ? "border-[#e53344]"
                        : "border-var(--text-color)"
                    }`}
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={changeHandler}
                  />
                  <div
                    className={`mt-1 text-xs w-full text-[#e53344] ${
                      !errors.name ? "hidden" : "block"
                    }`}
                  >
                    Please enter your name.
                  </div>
                </div>
                <div className="mb-10 text-sm">
                  <label htmlFor="email" className="uppercase font-bold">
                    E-mail
                  </label>
                  <input
                    className={`border-b-2 py-3 w-full font-normal ${
                      errors.email
                        ? "border-[#e53344]"
                        : "border-var(--text-color)"
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="@"
                    onChange={changeHandler}
                  />
                  <div
                    className={`mt-1 text-xs w-full text-[#e53344] ${
                      !errors.email ? "hidden" : "block"
                    }`}
                  >
                    Please enter a valid e-mail address.
                  </div>
                </div>
              </div>
              <div className="mb-10 text-sm">
                <label htmlFor="message" className="uppercase font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`border-b-2 py-3 w-full font-normal ${
                    errors.message
                      ? "border-[#e53344]"
                      : "border-var(--text-color)"
                  }`}
                  placeholder="Your message"
                  value={message}
                  rows={5}
                  onChange={changeHandler}
                ></textarea>
                <div
                  className={`${
                    !errors.message ? "hidden" : "block"
                  } mt-1 text-xs w-full text-[#e53344]`}
                >
                  Please type some message.
                </div>
              </div>
              <button
                type="submit"
                className="uppercase font-bold text-sm border-2 rounded-md px-12 py-3 cursor-pointer"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      <SectionNavigator current={10} total={10} nextSection="top" />
    </section>
  );
};

export default ContactSection;
