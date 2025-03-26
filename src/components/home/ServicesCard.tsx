import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
interface ICardProps {
  className?: string;
  icon: React.JSX.Element;
  title: string;
  description: string;
}
const ServicesCard = ({ className, icon, title, description }: ICardProps) => {
  return (
    <div
      className={`${className} h-[320px] transition-all duration-[600ms] group ease text-center w-full rounded-3xl px-10 pt-12  bg-white relative flex flex-col items-center`}
    >
      <div className="absolute   top-6 right-6 bg-primary h-7 w-7 rounded-md flex items-center justify-center">
        <IoIosArrowRoundUp className="text-2xl text-white  rotate-45" />
      </div>
      {icon}
      <h1 className="text-2xl  mt-4 text-primary font-medium leading-[1.2]">
        {title}
      </h1>
      <p className="text-sm mt-2 text-black/90 leading-[1.1] font-normal">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
