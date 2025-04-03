import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import businessBgLogoUrl from "../../assets/business-illustration.png";
const details = [
  { value: 100, suffix: "+", desc: "Successful events worldwide" },
  { value: 2, suffix: "k+", desc: "Trade Deals" },
  { value: 500, suffix: "+", desc: "Global Clients" },
];
const Business = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      ref={ref}
      className="min-h-screen w-full pt-20 sm:pt-28 md:pt-40 relative flex flex-col items-center"
    >
      <img
        src={businessBgLogoUrl}
        className="absolute z-0 top-12 left-1/2 -translate-x-1/2 w-full opacity-50 sm:opacity-70 md:opacity-100"
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8">
        <h2 className="text-secondary text-xl sm:text-2xl">Why Choose Us?</h2>
        <h1 className="text-3xl sm:text-4xl md:text-[44px] mt-4 sm:mt-6 font-semibold text-primary w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center">
          We Have Helped Businesses Thrive Globally
        </h1>
        <p className="text-black/60 font-light mt-4 sm:mt-6 text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          With a proven track record of success, we have empowered businesses
          worldwide by delivering strategic solutions in event planning, global
          trade, and market expansion.
        </p>
        <div className="flex flex-col sm:flex-row w-full md:w-4/5 lg:w-[900px] mt-10 sm:mt-16 md:mt-20 items-center justify-between gap-10 sm:gap-4">
          {details.map(({ value, suffix, desc }, index) => (
            <InfoCard
              key={index}
              value={value}
              suffix={suffix}
              desc={desc}
              startAnimation={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;

const InfoCard = ({ value, suffix, desc, startAnimation }) => {
  return (
    <div className="flex flex-col items-center gap-y-1 w-full sm:w-auto">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary">
        <CountUp
          end={value}
          duration={2}
          suffix={suffix}
          start={startAnimation ? 0 : value}
        />
      </h1>
      <p className="font-normal text-black text-sm sm:text-base text-center">
        {desc}
      </p>
    </div>
  );
};
