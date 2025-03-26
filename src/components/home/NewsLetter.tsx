import React, { useState } from "react";
import newsletterIllustrationUrl from "../../assets/illustration/newsletter-illustration.png";
const NewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const handleSubscribe = () => {
    if (!email) {
      console.error("Please enter email address!");
    }
  };
  return (
    <div className="w-full  relative py-32 mx-auto ">
      <img
        src={newsletterIllustrationUrl}
        alt="illustration"
        className="absolute w-full bottom-0 right-0 z-0"
      />
      <div className="flex z-10 relative container mx-auto flex-col items-center">
        <h2 className="text-black text-xl">Subscribe to our newsletter</h2>
        <h1 className="text-center text-6xl font-medium leading-[1.18] w-1/2 mt-4">
          The best <span className="text-secondary">Event Planner</span> right
          in your box
        </h1>
        <p className="text-center text-light font-normal mt-5 w-96">
          Enter your email address and Stay up to date with our latest news and
          updates.
        </p>
        <div className="mt-6 flex items-center gap-x-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="placeholder:text-xs placeholder:text-light w-96 outline-none rounded-lg text-light px-5 py-2 bg-[#EBEBEB] font-normal"
          />
          <button
            onClick={handleSubscribe}
            className="px-8 py-2.5 font-normal hover:opacity-90 active:scale-[0.98] transition-all duration-300 ease text-sm border-none text-white rounded-lg  cursor-pointer bg-primary outline-none"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
