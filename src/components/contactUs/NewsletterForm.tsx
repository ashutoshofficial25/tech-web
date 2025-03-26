import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Button from "../common/Button";

const NewsletterForm = () => {
  return (
    <div className="w-full bg-primary flex items-center justify-center h-64">
      <div className="container px-16 flex flex-row justify-between items-center gap-x-20">
        <div className="flex flex-row w-1/2  justify-between items-center gap-x-4">
          <div className="h-12 w-12 relative rounded-full flex items-center justify-center bg-white">
            <FaEnvelopeOpenText className="text-2xl text-primary" />
          </div>
          <p className="font-normal 2xl:w-[90%] w-[86%] text-white text-wrap text-xl">
            Subscribe to our newsletter to Stay up to date with our latest news
            and updates.
          </p>
        </div>
        <div className="flex flex-row w-1/2 items-center gap-x-3">
          <input
            type="text"
            placeholder="Enter your email address"
            className="font-light placeholder:font-light px-6 py-2 rounded-lg w-full text-light bg-white outline-none border-none"
          />
          <Button
            title="Subscribe"
            handleClick={() => {}}
            variant="outlined"
            className="border-white py-[9.4px] rounded-lg text-white border-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
