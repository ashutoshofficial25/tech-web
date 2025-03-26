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
    <div className="h-64 w-full bg-primary rounded-3xl px-9 py-6 flex  flex-col items-start">
      {icon}
      <p
        className={`text-white/80 font-normal mt-10 ${
          module === "location" ? "w-3/5" : "w-full"
        }`}
      >
        {desc}
      </p>
      {module === "call" ? (
        <>
          <div className="flex text-white text-xl mt-4 flex-col gap-y-1 items-start">
            {Array.isArray(value) &&
              value?.map((item: string, index: number) => {
                return <p key={index}>{item}</p>;
              })}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-white w-[90%] text-xl mt-4">{value}</h1>
        </>
      )}
    </div>
  );
};

export default CustomCard;
