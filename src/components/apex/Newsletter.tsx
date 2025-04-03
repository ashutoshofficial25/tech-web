import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {};
  return (
    <div className="container px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row md:h-64 mx-auto rounded-[32px] bg-primary my-8 mb-16 sm:mb-8 md:my-16 py-8 md:py-0 justify-between items-center md:gap-x-20 gap-y-6">
      <div className="flex flex-row w-full md:w-1/2 justify-between items-center gap-x-4">
        <div className="h-12 w-12 relative rounded-full flex items-center justify-center bg-white">
          <FaEnvelopeOpenText className="text-2xl text-primary" />
        </div>
        <p className="font-normal 2xl:w-[90%] w-[86%] text-white text-wrap text-base md:text-xl">
          Subscribe to our newsletter to Stay up to date with our latest news
          and updates.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-1/2 items-center gap-y-4 sm:gap-y-0 sm:gap-x-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="font-light placeholder:font-light text-sm px-6 py-2 rounded-lg w-full text-light bg-white outline-none border-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#031F30] px-8 py-[9px] rounded-lg border-none outline-none text-sm text-white w-full sm:w-auto"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
