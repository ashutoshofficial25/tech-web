import React from "react";

const CustomCard = ({
  icon,
  value,
  desc,
  module = "",
}: {
  icon: React.JSX.Element;
  value: string | string[];
  desc: string;
  module?: string;
}) => {
  return (
    <div className="xl:h-64 sm:h-60 h-56 w-full bg-primary rounded-3xl xl:px-9 sm:px-7 px-8 sm:py-6 py-8  flex  flex-col items-start">
      {icon}
      <p
        className={`text-white/80 font-normal xl:text-base lg:text-sm md:text-xs sm:text-[10px] text-sm lg:mt-10 mt-8 ${
          module === "location" ? "sm:w-3/5 w-full" : "w-full"
        }`}
      >
        {desc}
      </p>
      {module === "call" ? (
        <>
          <div className="flex text-white xl:text-xl lg:text-base sm:text-sm text-base  mt-4 flex-col gap-y-1 items-start">
            {Array.isArray(value) &&
              value?.map((item: string, index: number) => {
                return <p key={index}>{item}</p>;
              })}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-white  sm:w-[90%] w-full xl:text-xl lg:text-base sm:text-sm text-base mt-4">
            {value}
          </h1>
        </>
      )}
    </div>
  );
};

export default CustomCard;
