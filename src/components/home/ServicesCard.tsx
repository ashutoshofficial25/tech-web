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
      className={`${className} xl:h-[320px] md:h-[280px] sm:h-[260px] h-[220px] transition-all duration-[600ms] group ease text-center w-full rounded-3xl lg:px-10 md:px-7 sm:px-8 px-5 xl:pt-12 pt-10  bg-white relative flex flex-col items-center`}
    >
      <div className="absolute   top-6 right-6 bg-primary h-7 w-7 rounded-md flex items-center justify-center">
        <IoIosArrowRoundUp className="xl:text-2xl text-xl text-white  rotate-45" />
      </div>
      {icon}
      <h1 className="xl:text-2xl md:text-xl xs:text-base text-sm  xl:mt-4 mt-2 text-primary font-medium leading-[1.2]">
        {title}
      </h1>
      <p className="md:text-sm xs:text-[11px] text-[9px] md:mt-2 sm:mt-3 mt-2 text-black/90 leading-[1.1] font-normal">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
