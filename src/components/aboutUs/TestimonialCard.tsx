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
      className={`${className} pl-12 pr-20 py-5 z-20 transition-all duration-300 bg-white text-primary  absolute rounded-2xl`}
    >
      <div className="h-8 w-8 absolute top-3  right-3 rounded-sm bg-primary flex items-center justify-center">
        <IoIosArrowRoundUp className="text-white rotate-45 text-2xl" />
      </div>
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

export default TestimonialCard;
