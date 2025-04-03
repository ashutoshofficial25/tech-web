import React from "react";
import Button from "../common/Button";
import { IoIosArrowDown } from "react-icons/io";

const ContactUsForm = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="lg:container w-full lg:px-20 md:px-0 xs:px-10 px-6  mx-auto   lg:py-16  py-12 flex sm:flex-row flex-col sm:justify-center lg:gap-x-4 sm:gap-x-2"
    >
      <div
        data-aos="fade-right"
        data-aos-delay="250"
        className="flex  lg:gap-y-3 gap-y-2 flex-col md:w-[45%] sm:w-1/2 w-full items-start"
      >
        <div className="flex flex-col gap-y-1 items-start w-full">
          <label
            htmlFor="name"
            className="relative lg:left-3 md:left-2 left-1 lg:text-base md:text-sm sm:text-xs text-[10px] text-primary"
          >
            Full name
          </label>
          <input
            placeholder="Enter your full name"
            type="text"
            id="name"
            className="border-none font-light text-primary placeholder:font-light outline-none bg-[#EDEDED] w-full lg:rounded-lg rounded-md 2xl:text-base xl:text-sm text-xs lg:px-5 px-4 py-2"
          />
        </div>
        <div className="flex flex-col gap-y-1 items-start w-full">
          <label
            htmlFor="email"
            className="relative lg:left-3 md:left-2 left-1 lg:text-base md:text-sm sm:text-xs text-[10px] text-primary"
          >
            Email address
          </label>
          <input
            placeholder="Enter your email address"
            type="email"
            id="email"
            className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full rlg:rounded-lg rounded-md 2xl:text-base xl:text-sm text-xs lg:px-5 px-4 py-2"
          />
        </div>
        <div className="flex w-full  flex-row xl:gap-x-3 gap-x-2">
          <div className="flex flex-col gap-y-1 items-start w-1/2">
            <label
              htmlFor="subject"
              className="relative lg:left-3 md:left-2 left-1 lg:text-base md:text-sm sm:text-xs text-[10px] text-primary"
            >
              Subject
            </label>
            <input
              id="subject"
              placeholder="Enter subject"
              type="text"
              className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full lg:rounded-lg rounded-md 2xl:text-base xl:text-sm text-xs lg:px-5 px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-y-1 items-start w-1/2">
            <label
              htmlFor="phone"
              className="relative lg:left-3 md:left-2 left-1 lg:text-base md:text-sm sm:text-xs text-[10px] text-primary"
            >
              Phone
            </label>
            <div className="flex lg:gap-x-3 gap-x-2 items-center w-full">
              <div className="xl:px-4 px-3 xl:py-2.5 py-2 text-primary flex flex-row gap-x-1 border items-center rounded-lg bg-white xl:text-sm text-xs">
                <span>+91</span>
                <IoIosArrowDown />
              </div>
              <input
                type="tel"
                placeholder="Phone no."
                id="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full lg:rounded-lg rounded-md 2xl:text-base xl:text-sm text-xs lg:px-5 px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="flex flex-col md:w-[35%] sm:w-1/2 w-full gap-y-1 items-start"
      >
        <label
          htmlFor="message"
          className="relative lg:left-3 md:left-2 left-1 lg:text-base md:text-sm sm:text-xs text-[10px] text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="How can i help you?"
          className="xl:h-56 lg:h-44 h-40 2xl:text-base xl:text-sm text-xs border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] xl:rounded-3xl rounded-2xl resize-none xl:px-10 px-6 xl:py-6 py-4 w-full"
        ></textarea>
        <Button
          className="self-end mt-1 mr-1.5 lg:px-10 !px-6 md:py-2 !py-1.5"
          handleClick={() => {}}
          title="Submit"
        />
      </div>
    </div>
  );
};

export default ContactUsForm;
