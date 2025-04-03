import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Button from "../common/Button";

const NewsletterForm = () => {
  return (
    <div className="w-full bg-primary flex items-center justify-center sm:h-64 h-56">
      <div className="lg:container w-full xl:px-16 md:px-12 px-6 flex sm:flex-row flex-col sm:justify-between sm:gap-y-0 gap-y-4  justify-center sm:items-center xl:gap-x-20 lg:gap-x-16 gap-x-10">
        <div className="flex flex-row sm:w-1/2 w-full  justify-between items-center gap-x-4">
          <div className="lg:h-12 h-10 lg:w-12 w-10 relative rounded-full flex items-center justify-center bg-white">
            <FaEnvelopeOpenText className="lg:text-2xl text-xl text-primary" />
          </div>
          <p className="font-normal 2xl:w-[90%] w-[86%] text-white text-wrap xl:text-xl lg:text-base sm:text-sm text-xs">
            Subscribe to our newsletter to Stay up to date with our latest news
            and updates.
          </p>
        </div>
        <div className="flex flex-row sm:w-1/2 w-full items-center gap-x-3">
          <input
            type="text"
            placeholder="Enter your email address"
            className="font-light lg:text-base md:text-sm sm:text-xs text-[10px] placeholder:font-black/90 xl:px-6 px-4 py-2 rounded-lg w-full text-light bg-white outline-none border-none"
          />
          <Button
            title="Subscribe"
            handleClick={() => {}}
            variant="outlined"
            className="border-white md:!py-[9.4px] !py-1.5  rounded-lg text-white border-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
