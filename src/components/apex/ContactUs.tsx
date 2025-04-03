import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../common/Button";
import contactBgLogoUrl from "../../assets/contact-illustration.png";
import { useScroll } from "../../context/ScrollContext";
const ContactUs = () => {
  const { contactRef } = useScroll();
  return (
    <div
      ref={contactRef}
      className="w-full z-0 relative flex flex-col items-center py-24"
    >
      <img
        src={contactBgLogoUrl}
        className=" absolute z-0 top-12 w-full left-1/2 -translate-x-1/2"
      />
      <div className="flex relative z-10 flex-col items-center w-full">
        <h2 className="text-secondary text-2xl">Contact Us</h2>
        <h1 className="text-[44px] mt-2 font-semibold text-primary w-1/2 text-center">
          Get in touch
        </h1>
        <p className="text-black/60 font-light mt-1 text-center w-1/2">
          We would love to hear you from
        </p>
      </div>
      <div className="container relative z-10 px-20 mx-auto py-16 flex justify-center gap-x-4">
        <div className="flex gap-y-4 flex-col w-[45%] items-start">
          <input
            placeholder="Enter your full name"
            type="text"
            id="name"
            className="border-none font-light text-primary placeholder:font-light outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
          />
          <input
            placeholder="Enter your email address"
            type="email"
            id="email"
            className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
          />
          <div className="flex w-full flex-row gap-x-3">
            <input
              id="subject"
              placeholder="Enter subject"
              type="text"
              className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
            />
            <div className="flex gap-x-3 items-center w-full">
              <div className="px-4 py-2.5 text-primary flex flex-row gap-x-1 border items-center rounded-lg bg-white text-sm">
                <span>+91</span>
                <IoIosArrowDown />
              </div>
              <input
                type="tel"
                placeholder="Phone no."
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
              />
            </div>
          </div>
        </div>
        <div className="w-[35%] flex gap-y-3 flex-col items-end">
          <textarea
            id="message"
            placeholder="How can i help you?"
            className="h-40 w-full  border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] rounded-3xl resize-none px-10 py-6 "
          ></textarea>
          <Button
            className="relative px-10 right-3"
            handleClick={() => {}}
            title="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
