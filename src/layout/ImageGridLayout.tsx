import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ImageGridLayout = ({
  className,
  details,
  children,
}: {
  className?: string;
  details: { name: string; desc: string };
  children: React.JSX.Element;
}) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-2xl group w-full  xl:min-h-[320px] sm:min-h-[280px] xs:min-h-[200px] min-[180px] relative`}
    >
      <div
        style={{
          backdropFilter: "blur(8px)",
        }}
        className="lg:h-28 sm:h-24 xs:h-20 h-16 rounded-bl-xl rounded-br-2xl bg-[#080808]/40 md:px-9 sm:px-6 px-4  sm:py-5 py-3 flex flex-col items-start w-full absolute transition-all duration-[360ms] ease-in-out group-hover:bottom-0 group-hover:opacity-100  -bottom-32 opacity-0"
      >
        <div className="flex flex-row w-full justify-between items-start">
          <h1 className="lg:text-2xl md:text-xl sm:text-base text-sm font-bold text-white">
            {details.name}
          </h1>
          <div className="lg:h-8 xs:h-7 h-5 lg:w-8 xs:w-7 w-5 cursor-pointer rounded-full bg-white flex items-center justify-center">
            <IoIosArrowRoundUp className="rotate-45 xl:text-xl  md:text-base text-sm" />
          </div>
        </div>
        <p className="lg:text-base sm:text-sm xs:text-xs text-[10px]   font-light text-white/80">
          {details.desc}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ImageGridLayout;
