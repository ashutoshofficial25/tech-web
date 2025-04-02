import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const TestimonialCard = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  return (
    <div
      style={{
        boxShadow: "0 0 24px rgba(0,0,0,0.20)",
      }}
      className={`${className} lg:pl-12 pl-8 lg:pr-20 pr-14 lg:py-5 py-3 z-20 transition-all duration-300 bg-white text-primary  absolute rounded-2xl`}
    >
      <div className="lg:h-8 h-6 lg:w-8 w-6 absolute top-3  right-3 rounded-sm bg-primary flex items-center justify-center">
        <IoIosArrowRoundUp className="text-white rotate-45 lg:text-2xl text-xl" />
      </div>
      <h1 className="lg:text-2xl text-base">{title}</h1>
    </div>
  );
};

export default TestimonialCard;
