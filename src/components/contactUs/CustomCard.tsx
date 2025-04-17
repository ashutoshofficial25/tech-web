import React from 'react';
import { IoLocationSharp, IoCall } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';

const CustomCard = ({
  icon,
  value,
  desc,
  module = '',
}: {
  icon: React.JSX.Element;
  value: string | string[];
  desc: string;
  module?: string;
}) => {
  return (
    <div className="min-h-64 w-full bg-primary rounded-3xl xl:px-9 sm:px-7 px-8 sm:py-6 py-8 pb-10 flex flex-col items-start shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-primary/30 p-2 rounded-full">{icon}</div>
      <p
        className={`text-white/80 font-normal xl:text-base lg:text-sm md:text-xs sm:text-[10px] text-sm lg:mt-8 mt-6 ${
          module === 'location' ? 'sm:w-4/5 w-full' : 'w-full'
        }`}
      >
        {desc}
      </p>
      {module === 'call' ? (
        <>
          <div className="flex text-white xl:text-xl lg:text-base sm:text-sm text-base mt-4 flex-col gap-y-1 items-start">
            {Array.isArray(value) &&
              value?.map((item: string, index: number) => {
                return (
                  <div key={index} className="flex items-center gap-x-2">
                    <IoCall className="text-white/60 text-sm" />
                    <p>{item}</p>
                  </div>
                );
              })}
          </div>
        </>
      ) : module === 'location' ? (
        <>
          <div className="text-white sm:w-[95%] w-full xl:text-xl lg:text-base sm:text-sm text-xs mt-4 flex flex-col gap-y-3">
            {typeof value === 'string' &&
              value.split('\n').map((address, index) => (
                <div key={index} className="flex items-start gap-x-2">
                  <IoLocationSharp className="text-white/60 text-sm mt-1 flex-shrink-0" />
                  <p
                    className={`${
                      index === 0 ? 'font-medium' : ''
                    } break-words w-full`}
                  >
                    {address}
                  </p>
                </div>
              ))}
          </div>
        </>
      ) : module === 'mail' ? (
        <>
          <div className="flex items-center gap-x-2 text-white sm:w-[90%] w-full xl:text-xl lg:text-base sm:text-sm text-base mt-4">
            <LuMail className="text-white/60 text-sm" />
            <h1>{value}</h1>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-white sm:w-[90%] w-full xl:text-xl lg:text-base sm:text-sm text-base mt-4">
            {value}
          </h1>
        </>
      )}
    </div>
  );
};

export default CustomCard;
