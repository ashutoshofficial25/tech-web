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
      className="min-h-screen w-full pt-40 relative flex flex-col items-center"
    >
      <img
        src={businessBgLogoUrl}
        className=" absolute z-0 top-12 left-1/2 -translate-x-1/2 w-full"
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center">
        <h2 className="text-secondary text-2xl">Why Choose Us?</h2>
        <h1 className="text-[44px] mt-6 font-semibold text-primary w-1/2 text-center">
          We Have Helped Businesses Thrive Globally
        </h1>
        <p className="text-black/60 font-light mt-6 text-center w-1/2">
          With a proven track record of success, we have empowered businesses
          worldwide by delivering strategic solutions in event planning, global
          trade, and market expansion.
        </p>
        <div className="flex w-[900px] flex-row mt-20 items-center justify-between">
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
    <div className="flex flex-col items-center gap-y-1">
      <h1 className="text-7xl font-extrabold text-primary">
        <CountUp
          end={value}
          duration={2}
          suffix={suffix}
          start={startAnimation ? 0 : value}
        />
      </h1>
      <p className="font-normal text-black text-base">{desc}</p>
    </div>
  );
};
