import React from "react";
import Button from "../common/Button";
import { IoIosArrowDown } from "react-icons/io";

const ContactUsForm = () => {
  return (
    <div className="container px-20 mx-auto  py-16 flex justify-center gap-x-4">
      <div className="flex gap-y-3 flex-col w-[45%] items-start">
        <div className="flex flex-col gap-y-1 items-start w-full">
          <label htmlFor="name" className="relative left-3 text-primary">
            Full name
          </label>
          <input
            placeholder="Enter your full name"
            type="text"
            id="name"
            className="border-none font-light text-primary placeholder:font-light outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
          />
        </div>
        <div className="flex flex-col gap-y-1 items-start w-full">
          <label htmlFor="email" className="relative left-3 text-primary">
            Email address
          </label>
          <input
            placeholder="Enter your email address"
            type="email"
            id="email"
            className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
          />
        </div>
        <div className="flex w-full flex-row gap-x-3">
          <div className="flex flex-col gap-y-1 items-start w-1/2">
            <label htmlFor="subject" className="relative left-3 text-primary">
              Subject
            </label>
            <input
              id="subject"
              placeholder="Enter subject"
              type="text"
              className="border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] w-full rounded-lg px-5 py-2"
            />
          </div>
          <div className="flex flex-col gap-y-1 items-start w-1/2">
            <label htmlFor="phone" className="relative left-3 text-primary">
              Phone
            </label>
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
      </div>
      <div className="flex flex-col w-[35%] gap-y-1 items-start">
        <label htmlFor="message" className="relative left-3 text-primary">
          Message
        </label>
        <textarea
          id="message"
          placeholder="How can i help you?"
          className="h-56 border-none placeholder:font-light font-light text-primary  outline-none bg-[#EDEDED] rounded-3xl resize-none px-10 py-6 w-full"
        ></textarea>
        <Button
          className="self-end mt-1 mr-1.5 px-10"
          handleClick={() => {}}
          title="Submit"
        />
      </div>
    </div>
  );
};

export default ContactUsForm;
